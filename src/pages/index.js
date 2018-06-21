import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'

const IndexPage = () => (
  <Card padding="2rem">
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Card>
)

export default IndexPage
