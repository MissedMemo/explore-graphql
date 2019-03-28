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

const more = (getRepos, num) => {
    
  getRepos({
    variables: { first: num + 5 },
    updateQuery: (prev, {fetchMoreResult}) => {
      if ( !fetchMoreResult ) {
        return prev
      }
      return Object.assign( prev, fetchMoreResult )    
    }
  })

}

export default () => <div className="repos">
  <Query query={repoQuery} variables={{first: 5}}>
    { ({loading, error, data, fetchMore }) => {
      if (loading) return <p>loading...</p>
      if (error) return <p>{ error.message }</p>

      const numRepos = data.viewer.repositories.edges.length

      return <>
        <ul>
          <h2>first {numRepos} repositories...</h2>
          { data.viewer.repositories.edges.map(
            ({node}) => <li key={node.name}>{ node.name }</li>
          )}
        </ul>
        <button onClick={ () => { more(fetchMore, numRepos) }} >
          More...
        </button>
      </>
    }}
  </Query>
</div>