import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

import { COLORS } from '../constants'

const Stripe = styled.div`
  position: absolute;
  transform: skewY(-10deg);
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'Design beautiful card UI in an online interface',
        },
        { name: 'keywords', content: 'cards, ui, design, code' },
      ]}
    />
    <Stripe
      style={{
        top: '-300px',
        background: `linear-gradient(to bottom right, ${
          COLORS['primaryBlue']
        } 0%, ${COLORS['secondaryBlue']} 100%)`,
        height: 700,
        maxHeight: 700,
        width: '100%',
        zIndex: -3,
      }}
    />
    <Stripe
      style={{
        background: `linear-gradient(to right, ${
          COLORS['secondaryBlueT']
        } 0%, ${COLORS['primaryBlueT']} 100%)`,
        height: 200,
        top: -60,
        right: 0,
        width: '75%',
        zIndex: -2,
        opacity: 0.75,
      }}
    />
    <Stripe
      style={{
        background: `linear-gradient(to right, ${COLORS['white']} 0%, ${
          COLORS['secondaryBlueT']
        } 100%)`,
        height: 200,
        top: -100,
        width: '25%',
        zIndex: -1,
        opacity: 0.1,
      }}
    />
    <Stripe
      style={{
        background: `linear-gradient(to right, ${COLORS['white']} 0%, ${
          COLORS['primaryBlueT']
        } 100%)`,
        height: 200,
        top: 175,
        width: '58%',
        zIndex: -1,
        opacity: 0.25,
      }}
    />
    <Stripe
      style={{
        background: `linear-gradient(to right, ${COLORS['secondaryBlue']} 0%, ${
          COLORS['primaryBlueT']
        } 100%)`,
        height: 200,
        top: 155,
        width: '60%',
        zIndex: -1,
      }}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        marginTop: '150px',
        maxWidth: 960,
        padding: '0 1rem',
        minHeight: '75vh',
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
