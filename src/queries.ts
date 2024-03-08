import { gql } from "@apollo/client";

export const GET_ALL_FILMS = gql`
query AllFilms($first: Int) {
  allFilms(first: $first) {
    totalCount
    films {
      id
      releaseDate
      created
      director
      edited
      title
    }
  }
}
  `;