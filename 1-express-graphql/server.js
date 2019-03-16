const express = require('express')
const expressGraphQL = require('express-graphql')
const app = express()

app.use( '/graphql', expressGraphQL({
  graphiQL: true
}))


const port = process.env.PORT || 3000

app.listen( port, () => {
  console.log(`
    //////////////////////////////////
      listening on port ${port}
    //////////////////////////////////
  `)
})