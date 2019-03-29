import { gql } from 'apollo-boost'

export const ownerQuery = gql`
  {
    viewer {
      email
      name
    }
  }
`

export const repoQuery = gql`
  query ($first: Int! ) {
    viewer {
      repositories( first: $first ) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`