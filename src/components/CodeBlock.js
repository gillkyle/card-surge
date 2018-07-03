import React from 'react'
import styled from 'styled-components'

import { COLORS, BORDER_RADIUS } from '../constants'

import Card from '../components/card'

const CodeAttr = styled.span`
  color: ${COLORS['gold']};
`
const CodeCard = styled(Card)`
  display: flex;
  flex-direction: row;
`
const CodeColumn = styled.div`
  border-top-left-radius: ${BORDER_RADIUS}px;
  border-bottom-left-radius: ${BORDER_RADIUS}px;
  color: ${COLORS['secondaryBlue']};
  background-color: ${COLORS['secondaryBlueT']};
  padding: 1rem 0.5rem 1rem 1.5rem;
  user-select: none;
`
const CodeContent = styled.div`
  padding: 1rem 0.5rem;
  color: ${COLORS['gray']};
  white-space: pre-line;
`

const CodeBlock = ({ border, normal, hover, shadowColor }) => (
  <CodeCard padding="0rem">
    <CodeColumn>
      <div>0</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      {/* <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div> */}
    </CodeColumn>
    <CodeContent>
{`border-width: `}<CodeAttr>{`${border.top ? border.width : 0}px ${border.right ? border.width : 0}px ${border.bottom ? border.width : 0}px ${border.left ? border.width : 0}px;`}</CodeAttr>
{`\nborder-color: `}<CodeAttr>{`rgba(${border.color.r}, ${border.color.g}, ${border.color.b}, ${border.color.a});`}</CodeAttr>
{`\nborder-radius: `}<CodeAttr>{`${border.radius};`}</CodeAttr>
{`\nborder-style: `}<CodeAttr>{`solid; box-shadow: ${normal.x}px ${normal.y}px ${normal.blur}px ${normal.spread}px rgba(${shadowColor.r}, ${shadowColor.g}, ${shadowColor.b}, ${shadowColor.a});`}</CodeAttr>
{`\n/* hover styles */ `}
{`\nborder-style: `}<CodeAttr>{`solid; box-shadow: ${hover.x}px ${hover.y}px ${hover.blur}px ${hover.spread}px rgba(${shadowColor.r}, ${shadowColor.g}, ${shadowColor.b}, ${hover.opacity});`}</CodeAttr>
    </CodeContent>
  </CodeCard>
)

export default CodeBlock
