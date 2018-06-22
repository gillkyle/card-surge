import React from 'react'
import Link from 'gatsby-link'

import Card from './card'

import { COLORS } from '../constants'

const Footer = props => (
  <div
    style={{
      // borderTop: `1px solid ${COLORS['gray']}`,
      position: 'relative',
      bottom: 0,
      background: `linear-gradient(to left, ${COLORS['primaryBlue']}, ${
        COLORS['secondaryBlueT']
      })`,
      width: '100%',
      height: 75,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0 1rem',
      }}
    >
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      />
      <Card padding=".5rem 1rem">@gill_kyle</Card>
    </div>
  </div>
)

export default Footer
