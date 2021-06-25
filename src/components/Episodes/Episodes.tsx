import React from "react";
import "./episodes.scss";
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../../queries/Episodes";

function Episodes() {
  const { loading, error, data } = useQuery(GET_EPISODES);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>`Error! ${error.message}`</div>;
  }

  return (
    <select name="episode">
      {data.episodes.results.map((episode: any) => (
        <option key={episode.id} value={episode.name}>
          {episode.name}
        </option>
      ))}
    </select>
  );
}

export default Episodes;
