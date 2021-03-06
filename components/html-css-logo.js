import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: 20%;
  width: 30%;
  text-align: right;
`

export const HtmlCssLogo = ({ textColor, width, height }) => {
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={!width ? '791.305' : width}
        height={!height ? '512' : height}
      >
        <g id="layer1" transform="translate(-170.062 -270.181)">
          <g id="g3013" transform="translate(95.429 270.181)">
            <path
              id="polygon2989"
              fill="#264de4"
              d="M255.778 512l-148.134-41.123L74.633 100.62h362.734l-33.046 370.199z"
            />
            <path
              id="polygon2991"
              fill="#2965f1"
              d="M376.03 447.246l28.24-316.352H256v349.629z"
            />
            <path
              id="polygon2993"
              fill="#ebebeb"
              d="M150.31 268.217l4.07 45.41H256v-45.41z"
            />
            <path
              id="polygon2995"
              fill="#ebebeb"
              d="M142.132 176.305l4.128 45.411H256v-45.411h-.157z"
            />
            <path
              id="polygon2997"
              fill="#ebebeb"
              d="M256 386.153l-.199.053-50.574-13.656-3.233-36.217h-45.585l6.362 71.301 93.02 25.823.209-.058z"
            />
            <path
              id="path2999"
              fill={!textColor ? '#000' : textColor}
              d="M160 0h55v23h-32v23h32v23h-55z"
            />
            <path
              id="path3001"
              fill={!textColor ? '#000' : textColor}
              d="M226 0h55v20h-32v4h32v46h-55V49h32v-4h-32z"
            />
            <path
              id="path3003"
              fill={!textColor ? '#000' : textColor}
              d="M292 0h55v20h-32v4h32v46h-55V49h32v-4h-32z"
            />
            <path
              id="polygon3005"
              fill="#fff"
              d="M361.399 268.217l8.198-91.912H255.843v45.411h63.988l-4.132 46.501h-59.856v45.41h55.918l-5.271 58.894-50.647 13.67v47.244l93.094-25.801.683-7.672 10.671-119.551z"
            />
          </g>
          <g id="g3054" transform="translate(524 270.181)">
            <path
              id="polygon3028"
              fill="#e44d26"
              d="M437.367 100.62l-33.046 370.199L255.778 512l-148.134-41.123L74.633 100.62z"
            />
            <path
              id="polygon3030"
              fill="#f16529"
              d="M256 480.523l120.03-33.277 28.24-316.352H256z"
            />
            <path
              id="polygon3032"
              fill="#ebebeb"
              d="M191.76 221.716H256v-45.411H142.132l1.087 12.183 11.161 125.139H256v-45.41h-60.09z"
            />
            <path
              id="polygon3034"
              fill="#ebebeb"
              d="M201.994 336.333h-45.585l6.362 71.301 93.02 25.823.209-.058v-47.246l-.199.053-50.574-13.656z"
            />
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
              id="polygon3044"
              fill="#fff"
              d="M255.843 313.627h55.918l-5.271 58.894-50.647 13.67v47.244l93.094-25.801.683-7.672 10.671-119.551 1.108-12.194H255.843z"
            />
            <path
              id="polygon3046"
              fill="#fff"
              d="M255.843 221.605v.111h109.688l.911-10.207 2.069-23.021 1.086-12.183H255.843v28.204z"
            />
          </g>
        </g>
      </svg>
    </Wrapper>
  )
}
