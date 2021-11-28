import { createGlobalStyle, css } from 'styled-components'
import { theme } from './theme'

export type GlobalTheme = {
  theme: typeof theme
}

export const GlobalStyles = createGlobalStyle<GlobalTheme>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  ${({ theme }) => css`
    ::-webkit-scrollbar {
      width: 0.8rem;
    }

    ::-webkit-scrollbar-track {
      background-color: ${theme.colors.white};
      -webkit-border-radius: 1rem;
      border-radius: 1rem;
    }

    ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 1rem;
      border-radius: 1rem;
      background: ${theme.colors.gray};

      &:hover {
        background: ${theme.colors.pink};
      }
    }
  `}
`
