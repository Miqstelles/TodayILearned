import { useState } from 'react'
import './style.css'

interface User {
    name: string;
    time: string;
}

export function Card(props: User) {
    const [s, setS] = useState(0);
    const incrementSeconds = () => setS(s + 1);
    setTimeout(incrementSeconds, 1000);

    return (
        <div className="card">
            <strong>{props.name}</strong>
            <small> {props.time}</small>
        </div>
    )
}