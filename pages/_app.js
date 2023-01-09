import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import PomodoroTimer from '../components/PomodoroTimer';
import Calendar from '../components/Calendar';
import styles from '../styles/globals.css';

function App() {
const [selectedEvent, setSelectedEvent] = useState(null);
const [todos, setTodos] = useState([]);

function handleEventSelect(event) {
setSelectedEvent(event);
// start the pomodoro timer
// add a todo to the todo list
setTodos([...todos, { text: event.title }]);
}

return (
<div>
<Calendar onEventSelect={handleEventSelect} />
<TodoList todos={todos} />
<PomodoroTimer />
</div>
);
}

export default App;

//TODO add the following API set Up and Calendar from Notion to your component and configure your component accordingly to your needs for your application to work properly with your components that require these features to be configured
//TODO correct the index and app files accordingly
//TODO add the electron desktop to your application