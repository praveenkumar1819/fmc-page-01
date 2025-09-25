import React from 'react';
import './updates.css';

const updates = [
  'New camera gear added to inventory!',
  'Post-production workshop scheduled for Oct 15.',
  'Club t-shirts now available!',
];

const Updates = () => (
  <section className="updates">
    <h2>Latest Updates</h2>
    <ul>
      {updates.map((update, i) => (
        <li key={i}>{update}</li>
      ))}
    </ul>
  </section>
);

export default Updates;