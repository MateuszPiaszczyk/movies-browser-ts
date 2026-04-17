```tsx
import React from "react";
import {
  Wrapper,
  Button,
  ButtonText,
  Text,
  PageText,
  StyledArrowLeft,
  StyledArrowRight,
} from "./styled";

import { pageQueryParamName } from "../../features/queryParamName";
import { useReplaceQueryParameter } from "../../features/queryParameters";

interface PaginationProps {
  pageNumber: string;
  totalPages: number;
}

export const Pagination: React.FC<PaginationProps> = ({ pageNumber, totalPages }) => {
  const replaceQueryParameter = useReplaceQueryParameter();

  const page = parseInt(pageNumber, 10);

  const toPage = (currentPage: number) => {
    replaceQueryParameter([
      {
        key: pageQueryParamName,
        value: currentPage.toString(),
      },
    ]);
  };

  return (
    <Wrapper>
      <Button disabled={page === 1} onClick={() => toPage(1)}>
        <StyledArrowLeft />
        <ButtonText>First</ButtonText>
      </Button>
      <Button disabled={page === 1} onClick={() => toPage(page - 1)}>
        <StyledArrowLeft />
        <ButtonText>Previous</ButtonText>
      </Button>
      <Text>Page</Text>
      <PageText>{page}</PageText>
      <Text>of</Text>
      <PageText>{totalPages}</PageText>
      <Button disabled={page === totalPages} onClick={() => toPage(page + 1)}>
        <ButtonText>Next</ButtonText>
        <StyledArrowRight />
      </Button>
      <Button disabled={page === totalPages} onClick={() => toPage(totalPages)}>
        <ButtonText>Last</ButtonText>
        <StyledArrowRight />
      </Button>
    </Wrapper>
  );
};
```