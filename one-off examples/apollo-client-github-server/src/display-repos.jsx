import React from 'react'
import AddStar from './add-star'
import RemoveStar from './remove-star'

export default ({data, numRepos, clickHandler, refetch}) => <>
  <h2>first {numRepos} repositories...</h2>
  { data.viewer.repositories.edges.map( ({node}) =>
    <ul key={node.id}>
      <li>{ node.name }</li>
      {node.viewerHasStarred ? (
        <RemoveStar id={node.id} refetch={refetch} />
      ) : (
        <AddStar id={node.id} refetch={refetch} />
      )}
      <li>stars {/*node.stargazers.totalCount*/}</li>
    </ul>
  )}
  <button onClick={clickHandler} >
    More...
  </button>
</>