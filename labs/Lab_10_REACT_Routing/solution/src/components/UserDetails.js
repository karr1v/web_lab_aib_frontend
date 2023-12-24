import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetails({ people }) {
  const { id } = useParams();
  const person = people.find((p) => p.id === parseInt(id));

  if (!person) {
    return <div>Person not found</div>;
  }

  return (
    <div>
      <p>ID: {person.id}</p>
      <h2>{person.name}</h2>
      <p>Username: {person.username}</p>
    </div>
  );
}

export default UserDetails;
