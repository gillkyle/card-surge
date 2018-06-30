import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { COLORS } from 'constants'

import SocialIcons from './social-icons'

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-style: bold;
  font-size: 1.5rem;
  font-weight: 800;
`

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
    <HeaderLink to="/">{siteTitle}</HeaderLink>
    <SocialIcons />
  </div>
)

export default Header
