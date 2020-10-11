import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

export default function Main() {
    return (
        <main className="column is-four-fifths">
        <div className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        </div>
    </main>
    )
}