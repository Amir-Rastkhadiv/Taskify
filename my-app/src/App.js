// src/App.js
import React from 'react';
import CalendarComponent from './components/Calendar';
import TaskForm from './components/TaskForm';

function App() {
    return ( <
        div >
        <
        h1 > My Calendar App < /h1> <
        CalendarComponent / >
        <
        TaskForm / >
        <
        /div>
    );
}

export default App;