import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Calendar({ onEventSelect }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const response = await axios.get(
        'https://api.notion.com/v3/calendar/events',
        {
          headers: {
            Authorization: `Bearer YOUR_API_KEY`,
          },
        }
      );
      setEvents(response.data.events);
    }
    fetchEvents();
  }, []);

  return (
    <div>
      {events.map((event) => (
        <div key={event.id} onClick={() => onEventSelect(event)}>
          {event.title}
        </div>
      ))}
    </div>
  );
}