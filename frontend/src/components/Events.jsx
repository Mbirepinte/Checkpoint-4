/* import React, { useState } from "react";
import Calendar from "react-calendar";
 */
function Events() {
  /*   const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

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

  const tileContent = ({ date, view }) => {
    const eventsOnDate = events[date.toString()] || [];
    return (
      <ul>
        {eventsOnDate.map((event, index) => (
          <li key={index}>{event.title}</li>
        ))}
      </ul>
    );
  }; */

  return (
    <div>
      {/*       <Calendar onChange={onChange} value={date} tileContent={tileContent} />
      <div>
        <h2>Add Event</h2>
        <input
          type="text"
          placeholder="Title"
          value={newEventTitle}
          onChange={(e) => setNewEventTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={newEventDescription}
          onChange={(e) => setNewEventDescription(e.target.value)}
        />
        <button onClick={addEvent}>Add Event</button>
      </div> */}
    </div>
  );
}

export default Events;
