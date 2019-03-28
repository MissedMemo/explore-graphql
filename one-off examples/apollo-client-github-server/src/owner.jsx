import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const query = gql`
  {
    viewer {
      email
      name
    }
  }
`

export default () => <div className="owner">
  <Query query={query}>
    { result => {
      if (result.loading) return <p>loading...</p>
      if (result.error) return <p>{ result.error.message }</p>
      return (
        <div>
          <h2>name: { result.data.viewer.name }</h2>
          <h2>email: { result.data.viewer.email }</h2>
        </div>
      )
    }}
  </Query>
</div>