import { ThemeProvider } from 'styled-components'
import { HashRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CyclesContextProvider } from './context/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </HashRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
