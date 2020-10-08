import React from 'react'

export default function Header({ name, title, date, url }) {
  return (
    <header>
      <div>
        <a href={url}>
          <span>{name}</span>
        </a>{' '}
        — <a>{title}</a>
      </div>
      <time>{date}</time>
    </header>
  )
}
