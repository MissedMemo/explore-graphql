import React from 'react'
import { render } from 'react-dom'
import ApolloClient, { gql } from 'apollo-boost'

const App = () => <div>Hey, React!</div>

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

client.query({
  query: gql`
    query getNameAndEmail {
      viewer {
        email
        name
      }
    }
  `
})
.then( res => console.log(res) )


render(
  <App />,
  document.getElementById('root')
)