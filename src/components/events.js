import React from 'react';
import './events.css';

const events = [
  { title: 'CineFest 2025', date: 'Oct 10', teaser: 'Short films & workshops' },
  { title: 'Editing Masterclass', date: 'Nov 5', teaser: 'With top editors' },
];

const Events = () => (
  <section className="events">
    <h2>Upcoming Events</h2>
    <div className="event-list">
      {events.map((e, i) => (
        <div key={i} className="event-card">
          <h3>{e.title}</h3>
          <p>{e.date}</p>
          <span>{e.teaser}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Events;