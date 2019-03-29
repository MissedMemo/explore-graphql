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

export const addstarQuery = gql`
  mutation ($repoid: ID!) {
    addStar( input: {starrableId: $repoid} ) {
      starrable {
        stargazers {
          totalCount
        }
      }
      viewerHasStarred
    }
  }
`

export const removestarQuery = gql`
  mutation ($repoid: ID!) {
    removeStar( input: {starrableId: $repoid} ) {
      starrable {
        stargazers {
          totalCount
        }
      }
      viewerHasStarred
    }
  }
`
