import React, { useState, useEffect, useContext } from "react";
import Calendar from "react-calendar";
import { authContext } from "../context/AuthContext";
import { GetEventsById } from "../api/eventsApi";
import "../styles/React-calendar.css";

function Events() {
  const { auth } = useContext(authContext);
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");

  const loadEvents = async () => {
    await GetEventsById(auth.data.userId).then((res) => {
      console.warn(res.data, "res.data");
    });
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };
  /*   console.log(events, "events"); */
  const addEvent = () => {
    const newEvent = {
      title: newEventTitle,
      description: newEventDescription,
      date: date.toString(),
    };
    setEvents({
      ...events,
      [date.toString()]: [...(events[date.toString()] || []), newEvent],
    });
    setNewEventTitle("");
    setNewEventDescription("");
  };

  const tileContent = ({ date }) => {
    const eventsOnDate = events[date.toString()] || [];
    return (
      <ul>
        {eventsOnDate.map((event) => (
          <li>{event.title}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="calendar">
      <Calendar onChange={onChange} value={date} tileContent={tileContent} />
      <div>
        <h2>Rajouter un évènement </h2>
        <input
          type="text"
          placeholder="Aujourd'hui nia nia nia"
          value={newEventTitle}
          onChange={(e) => setNewEventTitle(e.target.value)}
        />
        <button type="submit" onClick={addEvent}>
          Add Event
        </button>
      </div>
    </div>
  );
}

export default Events;
