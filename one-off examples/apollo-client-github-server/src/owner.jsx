import React from 'react'
import { Query } from 'react-apollo'
import { ownerQuery } from './queries'

export default () => <div className="owner">
  <Query query={ownerQuery}>
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