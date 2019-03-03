import React from 'react'
import styled from 'styled-components'
import FullScreenImage from './FullScreenImage'

const Wrapper = styled(FullScreenImage)`
  border: solid 0.75rem #1b2341;
`

const LayoutNoFooter = ({ children }) => <Wrapper>{children}</Wrapper>

export default LayoutNoFooter
