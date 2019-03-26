import React from 'react'
import { render } from 'react-dom'
import ApolloClient, { gql } from 'apollo-boost'

const App = () => <div>Hello, React!</div>

const client = new ApolloClient({
  uri: "https://api.github.com/explore-graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer f918c540151c156956b6354940c30308ce88f36a`
      }
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