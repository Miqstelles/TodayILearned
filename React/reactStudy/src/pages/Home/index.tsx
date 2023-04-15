import React, { useState, useEffect } from 'react';
import './style.css'
import { Card } from '../../components/Card';

interface Student {
    name: string;
    time: string;
}

export function Home() {
    const [name, setName] = useState('');
    const [students, setStudents] = useState<Student[]>([]);
    const [user, setUser] = useState({ name: '', avatar: '' });

    function handleAddStudent() {
        const newStudent: Student = {
            name: name,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }),
        };

        setStudents([...students, newStudent]);
    }

    useEffect(() => {
        fetch('https://api.github.com/users/miqstelles')
            .then(response => response.json())
            .then(data => {
                setUser({
                    name: data.login,
                    avatar: data.avatar_url
                })
            })
    }, []);

    return (
        <div className="container">
            <header>
                <h1>LISTA</h1>
                <div>
                    <strong>{user.name}</strong>
                    <img src={user.avatar} alt="Profile Picture" />
                </div>
            </header>

            <input
                type=""
                placeholder='Digite o nome...'
                onChange={e => setName(e.target.value)}
            />
            <button type="button" onClick={handleAddStudent}>
                Adicionar
            </button>

            {
                students.map(student => (
                    <Card
                        key={student.time}
                        name={student.name}
                        time={student.time}
                    />
                ))
            }
        </div>
    )
}