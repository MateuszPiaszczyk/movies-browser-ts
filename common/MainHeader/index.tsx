```tsx
import React from 'react';
import { StyledMainHeader } from "./styled";

interface MainHeaderProps {
  title: string;
}

export const MainHeader: React.FC<MainHeaderProps> = ({ title }) => (
  <StyledMainHeader>{title}</StyledMainHeader>
);
```