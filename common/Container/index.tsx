```tsx
import { Container } from "./styled";

interface MainContainerProps {
  content: React.ReactNode;
}

export const MainContainer: React.FC<MainContainerProps> = ({ content }) => (
  <Container>{content}</Container>
);
```