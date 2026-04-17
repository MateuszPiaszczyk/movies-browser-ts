```tsx
import React from 'react';
import { BackdropRating } from "../../../../common/Rating";
import {
  BackdropBody,
  BackdropContent,
  BackdropWrapper,
  Overlay,
  Wrapper,
  Title,
} from "./styled";

interface BackdropProps {
  background: string;
  title: string;
  vote?: number;
  votes?: number;
}

export const Backdrop: React.FC<BackdropProps> = ({ background, title, vote, votes }) => {
  const URL = "https://image.tmdb.org/t/p/original";

  return (
    <BackdropWrapper>
      <Wrapper>
        <BackdropBody background={`${URL}${background}`}>
          <Overlay>
            <BackdropContent>
              <Title>{title}</Title>
              {votes && <BackdropRating vote={vote} votes={votes} />}
            </BackdropContent>
          </Overlay>
        </BackdropBody>
      </Wrapper>
    </BackdropWrapper>
  );
};
```