import { Footer, Header } from 'components/shared'
import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles'
import theme from 'styles/theme/default.json'

export const Wrapper = styled.main`
  overflow: hidden;
`

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Wrapper role="main">
        {children}
      </Wrapper>
      <Footer />
    </ThemeProvider>
      
  );
}

export default DefaultLayout;
