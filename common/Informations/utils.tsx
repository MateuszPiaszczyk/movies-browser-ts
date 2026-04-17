```typescript
export const extractFirstWord = (inputString: string): string => {
  return inputString.split("-")[0];
};

interface NameObject {
  name: string;
}

export const separateNamesByCommas = (array: NameObject[]): string => {
  return array.map(({ name }) => name).join(", ");
};

export const reverseString = (inputString: string): string => {
  return inputString.split("-").reverse().join(".");
};
```