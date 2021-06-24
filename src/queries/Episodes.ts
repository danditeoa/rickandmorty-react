import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query getAllEpisodes {
    getAllEpisodes {
      episodes {
    results {
      id
      name
      air_date
      characters {
        id
        name
      }
    }
  }
    }
  }
`;