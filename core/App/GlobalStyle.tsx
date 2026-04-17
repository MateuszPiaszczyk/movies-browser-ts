```tsx
import { createGlobalStyle, DefaultTheme } from "styled-components";

interface ThemeProps {
    theme: DefaultTheme;
}

export const GlobalStyle = createGlobalStyle<ThemeProps>`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: ${({ theme }) => theme.colors.pageBackground};
    }

    button {
        cursor: pointer;
    }   
`;
```