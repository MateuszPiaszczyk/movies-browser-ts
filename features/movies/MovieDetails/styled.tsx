```tsx
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Theme {
  breakpoint: {
    tablet: number;
    mobileMin: number;
    fullPage: number;
    mobileMax: number;
  };
  colors: {
    white: string;
  };
}

export const List = styled.ul<{ theme: Theme }>`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-bottom: 55px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(162px, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Item = styled.li`
  transition: transform 0.15s ease-out;
  &:hover {
    transform: translateY(-6px);
  }
  @media (max-width: ${({ theme }: { theme: Theme }) => theme.breakpoint.fullPage}px) {
    &:hover {
      transform: translateY(-4px);
    }
  }

  @media (max-width: ${({ theme }: { theme: Theme }) => theme.breakpoint.mobileMax}px) {
    &:hover {
      transform: translateY(0);
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }: { theme: Theme }) => theme.colors.white};
`;
```