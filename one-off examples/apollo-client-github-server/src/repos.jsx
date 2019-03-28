import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const repoQuery = gql`
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

export default () => <div className="repos">
  <Query query={repoQuery} variables={{first: 5}}>
    { ({loading, error, data}) => {
      if (loading) return <p>loading...</p>
      if (error) return <p>{ error.message }</p>
      return (
        <ul>
          <h2>first 5 repositories...</h2>
          { data.viewer.repositories.edges.map(
            ({node}) => <li key={node.name}>{ node.name }</li>
          )}
        </ul>
      )
    }}
  </Query>
</div>