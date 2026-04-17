```tsx
import styled from "styled-components";
import { ReactComponent as NoResult } from "../img/noResult.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoResultIcon = styled(NoResult)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 300px;
  }
`;

export { Wrapper, NoResultIcon };
```