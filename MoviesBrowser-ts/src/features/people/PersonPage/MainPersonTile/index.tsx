```tsx
import { IMG_URL } from "../../../../core/apiCodes";
import {
  BasicInfo,
  PersonData,
  PersonTileWrapper,
  PersonName,
  PersonPhoto,
  Birth,
  BirthDetails,
  Biography,
} from "./styled";

interface MainPersonTileProps {
  poster?: string;
  name: string;
  birthday?: string;
  birthplace?: string;
  biography?: string;
}

export const MainPersonTile: React.FC<MainPersonTileProps> = ({
  poster,
  name,
  birthday,
  birthplace,
  biography,
}) => {
  const formatDate = (dateString: string): string => {
    const dateParts = dateString.split("-");
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    return `${day}.${month}.${year}`;
  };

  return (
    <PersonTileWrapper>
      {poster && <PersonPhoto src={`${IMG_URL}${poster}`} />}
      <PersonData>
        <PersonName>{name}</PersonName>
        {birthday && (
          <BasicInfo>
            <Birth>Date of birth: </Birth>
            <BirthDetails>{formatDate(birthday)}</BirthDetails>
          </BasicInfo>
        )}
        {birthplace && (
          <BasicInfo>
            <Birth>Place of birth: </Birth>
            <BirthDetails>{birthplace}</BirthDetails>
          </BasicInfo>
        )}
      </PersonData>
      {biography && <Biography>{biography}</Biography>}
    </PersonTileWrapper>
  );
};
```