declare global {
  interface Window {
    dataLayer?: object[]
    __config?: any
  }
}

declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}