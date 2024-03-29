import { SocketContext } from "./socketContext";
import * as io from 'socket.io-client';
import { useEffect } from "react";

const SocketState = (props: any) => {

    let token: any = localStorage.getItem('token');

    const socket: any = io.connect('http://localhost:8080', {
        transports: ["websocket"],
        auth: { token },
        upgrade: false,
        reconnection: true,
    });

    return (
        <SocketContext.Provider value={{ socket }}>
            {props.children}
        </SocketContext.Provider>
    )
}

export default SocketState;