import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import LogoPng from '../img/Logo-Icon.png'

import { MEDIA_QUERIES } from '../constants'

import SocialIcons from './SocialIcons'

const HeaderLink = styled(Link)`
  color: white;
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
  height: 70px;
  padding: 0 1rem;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    flex-direction: column;
    padding: 1rem;
    height: 140px;
  }
`
const SectionContent = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    margin-bottom: 1rem;
  }
`

const Header = () => (
  <SectionRow
    style={{
      width: '100%',
      position: 'relative',
      margin: '0 auto 1rem auto',
      maxWidth: 960,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
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
    <SocialIcons />
  </SectionRow>
)

export default Header
