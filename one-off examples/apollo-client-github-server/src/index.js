import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Owner from './owner.jsx'
import Repos from './repos.jsx'

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.ACCESS_KEY}`
      },
    })
  }
})

render(
  <ApolloProvider client={client}>
    <Owner />
    <Repos />
  </ApolloProvider>,
  document.getElementById('root')
)