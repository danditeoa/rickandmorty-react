import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_CHARACTERS } from '../../queries/Characters';
import './characters.scss';

function Characters() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>`Error! ${error.message}`</div>;
  }
  return (
    <div>
      <select name="character">
      {data.characters.results.map((character: any) => (
        <option key={character.id} value={character.name}>
          {character.name}
        </option>
      ))}
    </select>
    </div>
  );
}

export default Characters;
