import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles'
import theme from '../../styles/theme/default.json'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      {children}
    </ThemeProvider>
      
  );
}

export default DefaultLayout;
