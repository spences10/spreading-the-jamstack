import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import okaidia from 'react-syntax-highlighter/dist/cjs/styles/prism/okaidia'
import AboutPage from '../layouts/about-page'
import SlidePage from '../layouts/slide-page'
import TransitionPage from '../layouts/transition-page'
import Cover from './cover'
import { HtmlCssLogo } from './html-css-logo'
import { HtmlLogo } from './html-logo'
import { JamstackLogo } from './jamstack-logo'
import SpeakerNotes from './speaker-notes'
import { Split } from './split'

const mdComponents = {
  h1: props => <h1 {...props} />,
  pre: props => props.children,
  code: props => {
    const { className } = props
    const language = className.replace('language-', '')
    return (
      <SyntaxHighlighter
        className={className}
        language={language}
        style={okaidia}
        {...props}
      />
    )
  },
  Cover,
  AboutPage,
  SlidePage,
  TransitionPage,
  SpeakerNotes,
  JamstackLogo,
  HtmlCssLogo,
  HtmlLogo,
  Split,
}

export default function SlidesMDXProvider({ children }) {
  return (
    <MDXProvider components={mdComponents}>{children}</MDXProvider>
  )
}
