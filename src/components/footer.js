import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import LogoPng from '../img/Logo-Icon.png'

import { COLORS, MEDIA_QUERIES } from '../constants'
import SocialIcons from './SocialIcons'

const HeaderLink = styled(Link)`
  color: ${COLORS['gold']};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
  }
`
const SectionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    flex-direction: column;
  }
`
const SectionContent = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    margin-bottom: 2rem;
  }
`

const Footer = () => (
  <SectionRow
    style={{
      width: '100%',
      position: 'relative',
      margin: '0 auto 1rem auto',
      height: 70,
      maxWidth: 960,
    }}
  >
    <SectionContent>
      <img
        src={LogoPng}
        style={{
          height: '2.5rem',
          width: '2.5rem',
          marginRight: '0.5rem',
          marginLeft: '-0.25rem',
        }}
      />
      <HeaderLink className="logo" to="/">
        Card Surge
      </HeaderLink>
    </SectionContent>
    <SocialIcons color={COLORS['secondaryBlue']} />
  </SectionRow>
)

export default Footer
