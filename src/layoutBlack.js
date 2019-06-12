import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #000000;
  flex-direction: row;
  justify-content: center;
  position: relative;
`

export const LayoutBlack = ({ children }) => <Wrapper>{children}</Wrapper>


