```tsx
import { Name, StyledLink, Person, Role } from "./styled";
import { PersonImage } from "../Images";

interface PersonTileProps {
  name: string;
  role: string;
  poster: string;
  personId: string;
}

export const PersonTile: React.FC<PersonTileProps> = ({ name, role, poster, personId }) => (
  <>
    <Person>
      <PersonImage poster={poster} personId={personId} />
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Person>
  </>
);
```