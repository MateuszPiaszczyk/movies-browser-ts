```tsx
export const toDecimal = (num: number): string => {
    return num.toFixed(1).split(".").join(",");
};
```