import React from 'react'
import styled from 'styled-components'
import {CopyToClipboard} from 'react-copy-to-clipboard';

import { COLORS, BORDER_RADIUS } from '../constants'

import Card from '../components/card'

const CodeAttr = styled.span`
  color: ${COLORS['gold']};
`
const CodeCard = styled(Card)`
  display: flex;
  flex-direction: row;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  box-shadow: 0px 0px #fff;
  width: 100%;
`
const CodeColumn = styled.div`
  border-top-left-radius: ${BORDER_RADIUS}px;
  border-bottom-left-radius: 0px;
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
const CodeCopyButton =styled(Card)`
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  background-color: ${COLORS['secondaryBlue']};
  color: ${COLORS['white']};
  text-align: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #6aBfFa;
  }
  &:active {
    background-color: #c2e7ff;
  }
`

const CodeBlock = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { border, normal, hover, shadowColor, hoverStyles } = this.props;
    const customCodeBlock = `border-width: ${border.top ? border.width : 0}px ${border.right ? border.width : 0}px ${border.bottom ? border.width : 0}px ${border.left ? border.width : 0}px; border-color: rgba(${border.color.r}, ${border.color.g}, ${border.color.b}, ${border.color.a}); border-radius: ${border.radius}; border-style: solid; box-shadow: ${normal.x}px ${normal.y}px ${normal.blur}px ${normal.spread}px rgba(${shadowColor.r}, ${shadowColor.g}, ${shadowColor.b}, ${shadowColor.a}); /* hover styles */ border-style: solid; box-shadow: ${hover.x}px ${hover.y}px ${hover.blur}px ${hover.spread}px rgba(${shadowColor.r}, ${shadowColor.g}, ${shadowColor.b}, ${hover.opacity});`

    console.log(customCodeBlock)

    return (
      <div style={{width: '100%'}}>
        <CodeCard padding="0rem">
          <CodeColumn>
            <div>0</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            {/* <div>8</div>
            <div>9</div>
            <div>10</div> */}
          </CodeColumn>
          <CodeContent>
      {`border-width: `}<CodeAttr>{`${border.top ? border.width : 0}px ${border.right ? border.width : 0}px ${border.bottom ? border.width : 0}px ${border.left ? border.width : 0}px;`}</CodeAttr>
      {`\nborder-color: `}<CodeAttr>{`rgba(${border.color.r}, ${border.color.g}, ${border.color.b}, ${border.color.a});`}</CodeAttr>
      {`\nborder-radius: `}<CodeAttr>{`${border.radius}px;`}</CodeAttr>
      {`\nborder-style: `}<CodeAttr>{`solid;`}</CodeAttr>
      {`\nbox-shadow: `}<CodeAttr>{`${normal.x}px ${normal.y}px ${normal.blur}px ${normal.spread}px rgba(${shadowColor.r}, ${shadowColor.g}, ${shadowColor.b}, ${shadowColor.a});`}</CodeAttr>
      <span style={{color: '#ddd'}}>{`\n/* hover styles */ `}</span>
      {`\nborder-style: `}<CodeAttr>{`solid;`}</CodeAttr>
      {`\nbox-shadow: `}<CodeAttr>{`${hover.x}px ${hover.y}px ${hover.blur}px ${hover.spread}px rgba(${shadowColor.r}, ${shadowColor.g}, ${shadowColor.b}, ${hover.opacity});`}</CodeAttr>
          </CodeContent>
        </CodeCard>
        <CopyToClipboard text={customCodeBlock}>
          <CodeCopyButton>
            Copy Code to Clipboard
          </CodeCopyButton>
        </CopyToClipboard>
      </div>
    );
  }
}

export default CodeBlock
