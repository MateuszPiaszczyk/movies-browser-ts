```tsx
import styled, { css } from "styled-components";
import { ReactComponent as star } from "../../common/img/star.svg";

interface Theme {
  breakpoint: {
    fullPage: number;
    mobileMax: number;
  };
  colors: {
    woodsmoke: string;
    waterloo: string;
    white: string;
  };
}

interface StarProps {
  backdrop?: boolean;
}

interface AverageProps {
  backdrop?: boolean;
}

interface TotalProps {
  backdrop?: boolean;
}

interface CountProps {
  backdrop?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  line-height: 1.5;
  font-size: 16px;
  height: 100%;
  align-content: flex-end;

  @media (max-width: ${({ theme }: { theme: Theme }) => theme.breakpoint.fullPage}px) {
    height: auto;
    gap: 7px;
    font-size: 13px;
  }
`;

export const Vote = styled.span`
  color: ${({ theme }: { theme: Theme }) => theme.colors.woodsmoke};
  font-weight: bold;
`;

export const Votes = styled.span`
  color: ${({ theme }: { theme: Theme }) => theme.colors.waterloo};
`;

export const StarStyled = styled(star)<StarProps>`
  height: 24px;
  width: auto;

  ${({ backdrop }) =>
    backdrop &&
    css`
      height: 40px;
    `}
  
  @media (max-width: ${({ theme }: { theme: Theme }) => theme.breakpoint.mobileMax}px) {
    ${({ backdrop }) =>
      backdrop &&
      css`
        height: 25px;
      `}
  }

  @media (max-width: ${({ theme }: { theme: Theme }) => theme.breakpoint.fullPage}px) {
    height: 16px;
  }
`;

export const BackdropRatingWrapper = styled.div`
  color: ${({ theme }: { theme: Theme }) => theme.colors.white};
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  font-size: 16px;
  line-height: 1.2;
  grid-gap: 16px 8px;
  align-items: center;

  @media (max-width: ${({ theme }: { theme: Theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    margin: 12px 0 4px;
  }
`;

export const DetailsRatingWrapper = styled.div`
  display: inline-flex;
  font-size: 14px;
  line-height: 1.2;
  gap: 8px;
  align-items: center;
  margin: 24px 0;

  @media (max-width: ${({ theme }: { theme: Theme }) => theme.breakpoint.mobileMax}px) {
    margin: 12px 0 4px;
  }
`;

export const Average = styled.span<AverageProps>`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;

  ${({ backdrop }) =>
    backdrop &&
    css`
      font-size: 30px;
    `}

  @media (max-width: ${({ theme }: { theme: Theme }) => theme.breakpoint.mobileMax}px) {
    ${({ backdrop }) =>
      backdrop &&
      css`
        font-size: 22px;
      `}
  }

  @media (max-width: ${({ theme }: { theme: Theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;

export const Total = styled.span<TotalProps>`
  @media (max-width: ${({ theme }: { theme: Theme }) => theme.breakpoint.mobileMax}px) {
    ${({ backdrop }) =>
      !backdrop &&
      css`
        display: none;
      `}
  }
`;

export const Count = styled.span<CountProps>`
  margin-right: 4px;

  ${({ backdrop }) =>
    backdrop &&
    css`
      grid-area: 2 / 1 / 3 / 4;
    `}

  @media (max-width: ${({ theme }: { theme: Theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
    color: ${({ theme }: { theme: Theme }) => theme.colors.waterloo};

    ${({ backdrop }) =>
      backdrop &&
      css`
        grid-area: auto / auto / auto / auto;
        color: ${({ theme }: { theme: Theme }) => theme.colors.white};
      `}
  }
`;
```