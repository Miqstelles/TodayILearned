import React, { useState } from 'react';
import './style.css'
import { Card } from '../../components/Card';

export function Home() {

    const [name, setName] = useState('');

    return (
        <div className="container">
            <h1>Nome: {name}</h1>
            <input
                type=""
                placeholder='Digite o nome...'
                onChange={e => setName(e.target.value)}
            />
            <button type="button">Adicionar</button>

            <Card name="Miquéias" time="23:53:22" />
            <Card name="Miqs12" time="23:53:22" />
            <Card name="Jhonson" time="12:53:22" />
        </div>
    )
}