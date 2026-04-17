```typescript
import { StyledSubtitle, StyledTitle } from "./styled";

interface TitleProps {
  title: string;
}

interface SubtitleProps {
  subtitle: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => (
  <StyledTitle>{title}</StyledTitle>
);

export const Subtitle: React.FC<SubtitleProps> = ({ subtitle }) => (
  <StyledSubtitle>{subtitle}</StyledSubtitle>
);
```