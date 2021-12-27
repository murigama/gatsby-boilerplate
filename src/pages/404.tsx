import * as React from 'react'
import { Link } from 'gatsby'
import { PageProps } from 'gatsby'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <Link to="/">Go home</Link>.
    </>
  )
}

export default NotFoundPage
