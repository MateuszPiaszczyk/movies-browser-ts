```tsx
import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (key: string): string | null => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

interface KeyValue {
  key: string;
  value?: string;
}

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  const replaceQueryParameter = (keyValue: KeyValue[]): void => {
    const searchParams = new URLSearchParams(location.search);

    for (const { key, value } of keyValue) {
      if (value === undefined) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
    }
    history.push(
      `/${location.pathname.split("/")[1]}?${searchParams.toString()}`
    );
  };

  return replaceQueryParameter;
};
```