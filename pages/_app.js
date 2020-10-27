import { AnimatePresence } from 'framer-motion'
import React from 'react'
import SlidesMDXProvider from '../components/mdx-provider'
import { ThemeProvider } from '../components/theme-provider'
import { CurrentSlideProvider } from '../context/current-slide-context'
import { ModeProvider } from '../context/mode-context'
import TransitionPage from '../layouts/transition-page'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <SlidesMDXProvider>
        <CurrentSlideProvider>
          <ModeProvider>
            <AnimatePresence exitBeforeEnter>
              <TransitionPage>
                <Component {...pageProps} />
              </TransitionPage>
            </AnimatePresence>
          </ModeProvider>
        </CurrentSlideProvider>
      </SlidesMDXProvider>
    </ThemeProvider>
  )
}
