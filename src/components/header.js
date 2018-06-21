import React from 'react'
import Link from 'gatsby-link'
import Card from './card'

import { COLORS } from 'constants'

const Header = ({ siteTitle }) => (
  <div
    style={{
      width: '100%',
      position: 'relative',
      margin: '0 auto',
      height: 70,
      maxWidth: 960,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1rem',
    }}
  >
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
      {siteTitle}
    </Link>
    <Card padding=".5rem 1rem">@gill_kyle</Card>
  </div>
)

export default Header
