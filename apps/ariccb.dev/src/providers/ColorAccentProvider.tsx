import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface ColorAccentProviderProps {
  defaultScheme?: 'fuchsia' | 'amber';
  children: JSX.Element;
}

function ColorAccentProvider({
  defaultScheme = 'fuchsia',
  children,
}: ColorAccentProviderProps) {
  const { pathname } = useRouter();

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', defaultScheme);

    if (pathname.includes('/work/')) {
      document.documentElement.setAttribute('data-accent', 'amber');
    }
  }, [pathname, defaultScheme]);

  return children;
}

export default ColorAccentProvider;
