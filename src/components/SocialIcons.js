import React from 'react'
import styled from 'styled-components'
import * as FA from 'react-icons/lib/fa'

import { COLORS } from '../constants'
import Card from './card'

const IconGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto auto auto;
`
const SocialIcon = styled.a`
  color: ${props => (props.color ? props.color : 'white')};
  text-decoration: none;
  font-size: 1.5rem;
`

const SocialIcons = props => (
  <IconGrid>
    <div>
      <SocialIcon
        {...props}
        target="_blank"
        href="https://www.producthunt.com/@gill_kyle"
      >
        <FA.FaProductHunt style={{ marginTop: 1 }} />
      </SocialIcon>
    </div>
    <div>
      <SocialIcon
        {...props}
        target="_blank"
        href="https://www.github.com/gillkyle"
      >
        <FA.FaGithub size={'1.75rem'} />
      </SocialIcon>
    </div>
    <Card padding="0.2rem 1rem">
      <SocialIcon
        {...props}
        style={{ color: COLORS['secondaryBlue'], fontSize: '1rem' }}
        href="https://www.twitter.com/gill_kyle"
        target="_blank"
      >
        @gill_kyle
      </SocialIcon>
    </Card>
  </IconGrid>
)

export default SocialIcons
