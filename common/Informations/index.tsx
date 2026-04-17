```typescript
import React from 'react';
import {
  reverseString,
  separateNamesByCommas,
  extractFirstWord,
} from "./utils";
import {
  Title,
  TitleDetails,
  Subtitle,
  SubtitleDetails,
  Value,
  Attribute,
  Paragraph,
  Wrapper,
} from "./styled";

interface MainInfoProps {
  title: string;
  year?: string;
}

export const MainInfo: React.FC<MainInfoProps> = ({ title, year }) => (
  <div>
    <Title>{title}</Title>
    {year && <Subtitle>{extractFirstWord(year)}</Subtitle>}
  </div>
);

interface AdditionalInfoProps {
  production?: string[];
  release?: string;
}

export const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ production, release }) => (
  <Wrapper>
    {production && (
      <Paragraph>
        <Attribute mobile>Production:</Attribute>
        <Value>{separateNamesByCommas(production)}</Value>
      </Paragraph>
    )}
    {release && (
      <Paragraph>
        <Attribute mobile>Release date:</Attribute>
        <Value>{reverseString(release)}</Value>
      </Paragraph>
    )}
  </Wrapper>
);

interface PersonInfoProps {
  dateOfBirth?: string;
  placeOfBirth?: string;
}

export const PersonInfo: React.FC<PersonInfoProps> = ({ dateOfBirth, placeOfBirth }) => (
  <Wrapper>
    {dateOfBirth && (
      <Paragraph>
        <Attribute mobile>Date of birth:</Attribute>
        <Value>{reverseString(dateOfBirth)}</Value>
      </Paragraph>
    )}
    {placeOfBirth && (
      <Paragraph>
        <Attribute mobile>Place of birth:</Attribute>
        <Value>{placeOfBirth}</Value>
      </Paragraph>
    )}
  </Wrapper>
);

interface MainInfoDetailsProps {
  title: string;
  year?: string;
}

export const MainInfoDetails: React.FC<MainInfoDetailsProps> = ({ title, year }) => (
  <>
    <TitleDetails>{title}</TitleDetails>
    {year && <SubtitleDetails>{extractFirstWord(year)}</SubtitleDetails>}
  </>
);
```