import React from "react";
import './episodes.scss';
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../../queries/Episodes";

function Episodes() {
  const { loading, error, data } = useQuery(GET_EPISODES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`

  return (
    <select name="episode">
      {data.episodes.map(() => (
        <option value={Episodes.name}>
          {Episodes.name}
        </option>
      ))}
    </select>
  );
}

export default Episodes;