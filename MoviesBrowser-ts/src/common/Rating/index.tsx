```tsx
import { toDecimal } from "./utils";
import { Star, Wrapper, Vote, Votes, Total, DetailsRatingWrapper, BackdropRatingWrapper, Average, Count } from "./styled";

interface RatingProps {
  vote: number;
  votes: number;
}

export const Rating: React.FC<RatingProps> = ({ vote, votes }) => (
  <Wrapper>
    <Star />
    <Vote>{toDecimal(vote)}</Vote>
    <Votes>{votes} votes</Votes>
  </Wrapper>
);

export const BackdropRating: React.FC<RatingProps> = ({ vote, votes }) => (
  <BackdropRatingWrapper>
    <Star backdrop="true" />
    <Average backdrop>{toDecimal(vote)}</Average>
    <Total backdrop>/ 10</Total>
    <Count backdrop>{votes} votes</Count>
  </BackdropRatingWrapper>
);

export const DetailsRating: React.FC<RatingProps> = ({ vote, votes }) => (
  <DetailsRatingWrapper>
    {vote ? (
      <>
        <Star />
        <Average>{toDecimal(vote)}</Average>
        <Total>/ 10</Total>
        <Count>{votes} votes</Count>
      </>
    ) : (
      <>No votes yet</>
    )}
  </DetailsRatingWrapper>
);
```