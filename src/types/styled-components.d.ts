import theme from 'styles/theme.json'

declare module 'styled-components' {
  type Theme = typeof theme

  export interface DefaultTheme extends Theme {}
}