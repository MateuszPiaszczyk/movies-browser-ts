```tsx
import React from 'react';
import { Wrapper, NoResultIcon } from "./styled";
import { Container } from "../Container/styled";
import { MainHeader } from "../MainHeader";

interface NoResultProps {
  query: string;
}

export const NoResult: React.FC<NoResultProps> = ({ query }) => (
  <Container>
    <MainHeader title={`Sorry, there are no results for "${query}"`} />
    <Wrapper>
      <NoResultIcon />
    </Wrapper>
  </Container>
);
```