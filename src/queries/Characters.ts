import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query getAllCharacters {
      characters {
      results {
        id
        name
        status
        species
        type
        gender
      }
    }
  }
`;