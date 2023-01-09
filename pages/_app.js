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
