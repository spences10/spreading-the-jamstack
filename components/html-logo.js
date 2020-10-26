import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: 20%;
  width: 30%;
  text-align: right;
`

export const HtmlLogo = ({ textColor, width, height }) => {
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          id="path3036"
          fill={!textColor ? '#000' : textColor}
          d="M108.382 0h23.077v22.8h21.11V0h23.078v69.044H152.57v-23.12h-21.11v23.12h-23.077V0z"
        />
        <path
          id="path3038"
          fill={!textColor ? '#000' : textColor}
          d="M205.994 22.896h-20.316V0h63.72v22.896h-20.325v46.148h-23.078V22.896z"
        />
        <path
          id="path3040"
          fill={!textColor ? '#000' : textColor}
          d="M259.511 0h24.063l14.802 24.26L313.163 0h24.072v69.044h-22.982V34.822l-15.877 24.549h-.397l-15.888-24.549v34.222h-22.58V0z"
        />
        <path
          id="path3042"
          fill={!textColor ? '#000' : textColor}
          d="M348.72 0h23.084v46.222h32.453v22.822H348.72V0z"
        />
        <path
          fill="#e44d26"
          d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512"
        />
        <path fill="#f16529" d="M256 480.5V131h148.3L376 447" />
        <path
          fill="#ebebeb"
          d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4m2 22.8H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"
        />
        <path
          fill="#fff"
          d="M369.6 176.3H255.8v45.4h109.6m-4.1 46.5H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8"
        />
        <script id="globalVarsDetection" />
      </svg>
    </Wrapper>
  )
}
