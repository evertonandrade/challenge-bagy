import { Dashboard } from './pages/dashboard'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { theme } from './styles/theme'
import 'normalize.css'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </ThemeProvider>
  )
}
