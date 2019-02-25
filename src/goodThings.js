import React from 'react'
import Lottie from 'react-lottie'
import { data } from './goodThingsData'

class LottieControl extends React.Component {
  state = { isStopped: false, isPaused: false }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: data,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    return (
      <Lottie
        options={defaultOptions}
        height={'200px'}
        width={'100%'}
        isStopped={this.state.isStopped}
        isPaused={this.state.isPaused}
      />
    )
  }
}

export default LottieControl
