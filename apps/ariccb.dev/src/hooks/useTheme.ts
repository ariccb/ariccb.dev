import { useTheme as useNextThemes } from 'next-themes';
import { useEffect, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

const LOCAL_STORAGE_KEY = 'theme';

function useTheme() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useNextThemes();
  const userTheme = useLocalStorageState(LOCAL_STORAGE_KEY, {
    defaultValue: 'system',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    theme: mounted
      ? resolvedTheme
      : userTheme === undefined
      ? 'system'
      : userTheme,
    setTheme,
  };
}

export default useTheme;
