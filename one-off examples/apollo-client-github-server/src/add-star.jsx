import React from 'react'
import { Mutation } from 'react-apollo'
import { addstarQuery } from './queries'

const AddStar = ({id, refetch}) => <Mutation mutation={addstarQuery}>
  { (addStar, { data, loading, error}) => <>
    <button onClick={ () => {
      addStar({ variables: { repoid: id } })
        .then( res => { refetch() })
    }}>
      Add Star
    </button>
    { loading && <p>loading...</p> }
    { error && <p>{ error.message }</p> }
  </>}
</Mutation>

export default AddStar