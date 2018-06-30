import React from 'react'
import Link from 'gatsby-link'

import Card from './card'

import { COLORS } from '../constants'
import SocialIcons from './social-icons'

const Footer = () => (
  <div
    style={{
      position: 'relative',
      bottom: 0,
      width: '100%',
      height: 75,
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: '1fr auto 1fr',
    }}
  >
    <div />
    <SocialIcons color={COLORS['secondaryBlue']} />
    <div />
  </div>
)

export default Footer
