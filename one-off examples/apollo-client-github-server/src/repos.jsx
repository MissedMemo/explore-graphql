import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const query = gql`
  {
    viewer {
      repositories( first: 10 ) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`

export default () => <div className="app">
  <Query query={query}>
    { ({loading, error, data}) => {
      if (loading) return <p>loading...</p>
      if (error) return <p>{ error.message }</p>
      return (
        <ul>
          <h2>first 10 repositories...</h2>
          { data.viewer.repositories.edges.map(
            ({node}) => <li key={node.name}>{ node.name }</li>
          )}
        </ul>
      )
    }}
  </Query>
</div>