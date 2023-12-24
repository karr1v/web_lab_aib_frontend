import React from 'react';
import { Link } from 'react-router-dom';

function UserList({ people }) {
  return (
    <div>
      <h2>People</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <Link to={`/user/${person.id}`}>{person.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;