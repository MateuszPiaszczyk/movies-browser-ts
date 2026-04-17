```tsx
interface Item {
  id: string;
  name: string;
}

export const getNames = (ids: string[], items: Item[]): string[] => {
  return ids.map((id) => items.filter(({ id: itemId }) => itemId === id)[0].name);
};

export const extractNames = (items: Item[]): string[] => {
  return items.map((item) => item.name);
};
```