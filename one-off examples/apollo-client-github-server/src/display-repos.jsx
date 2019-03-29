import React from 'react'

export default ({data, numRepos, clickHandler}) => <>
  <ul>
    <h2>first {numRepos} repositories...</h2>
    { data.viewer.repositories.edges.map(
      ({node}) => <li key={node.name}>{ node.name }</li>
    )}
  </ul>
  <button onClick={clickHandler} >
    More...
  </button>
</>