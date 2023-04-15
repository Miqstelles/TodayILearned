import React, { useState } from 'react';
import './style.css'
import { Card } from '../../components/Card';

interface Student {
    name: string;
    time: string;
}

export function Home() {
    const [name, setName] = useState('');
    const [students, setStudents] = useState<Student[]>([])

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

    return (
        <div className="container">
            <h1>LISTA</h1>
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