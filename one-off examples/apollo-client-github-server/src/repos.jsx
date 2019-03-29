import React from 'react'
import { Query } from 'react-apollo'
import { repoQuery } from './queries'
import DisplayRepos from './display-repos'

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
      const clickHandler = () => more(fetchMore, numRepos)

      return <DisplayRepos {...{data, numRepos, clickHandler}} />
    }}
  </Query>
</div>