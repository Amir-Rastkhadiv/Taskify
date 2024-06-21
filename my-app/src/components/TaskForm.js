// src/components/TaskForm.js
import React, {
    useState
} from 'eact';

const TaskForm = () => {
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`New task: ${task} on ${date}`);
        // Add task to calendar events here
    };

    return ( <
        form onSubmit = {
            handleSubmit
        } >
        <
        label >
        Task:
        <
        input type = "text"
        value = {
            task
        }
        onChange = {
            (event) => setTask(event.target.value)
        }
        /> < /
        label > <
        label >
        Date:
        <
        input type = "date"
        value = {
            date
        }
        onChange = {
            (event) => setDate(event.target.value)
        }
        /> < /
        label > <
        button type = "submit" > Add Task < /button> < /
        form >
    );
};

export default TaskForm;