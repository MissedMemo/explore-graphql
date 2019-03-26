import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import App from './app.jsx'

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
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)