import React from 'react'
import { Mutation } from 'react-apollo'
import { removestarQuery } from './queries'

const RemoveStar = ({id, refetch}) => <Mutation mutation={removestarQuery}>
  { (removeStar, { data, loading, error}) => <>
    <button onClick={ () => {
      removeStar({ variables: { repoid: id } })
        .then( res => { refetch() })
    }}>
      Remove Star
    </button>
    { loading && <p>loading...</p> }
    { error && <p>{ error.message }</p> }
  </>}
</Mutation>

export default RemoveStar