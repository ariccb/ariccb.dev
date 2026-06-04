import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const accentOptions = [
  'amber',
  'violet',
  'red',
  'orange',
  'green',
  'pink',
] as const;

export type AccentScheme = (typeof accentOptions)[number];

const accentStorageKey = 'ariccb.dev:accent';

const secondaryAccentMap: Record<AccentScheme, AccentScheme> = {
  amber: 'violet',
  violet: 'amber',
  red: 'green',
  orange: 'violet',
  green: 'pink',
  pink: 'green',
};

interface ColorAccentContextValue {
  accent: AccentScheme;
  secondaryAccent: AccentScheme;
  setAccent: (accent: AccentScheme) => void;
  nextAccent: () => void;
}

const ColorAccentContext = createContext<ColorAccentContextValue | null>(null);

interface ColorAccentProviderProps {
  defaultScheme?: AccentScheme;
  children: JSX.Element;
}

function isAccentScheme(value: string | null): value is AccentScheme {
  return accentOptions.includes(value as AccentScheme);
}

function applyAccent(accent: AccentScheme) {
  document.documentElement.setAttribute('data-accent', accent);
  document.documentElement.setAttribute(
    'data-secondary-accent',
    secondaryAccentMap[accent]
  );
}

function ColorAccentProvider({
  defaultScheme = 'amber',
  children,
}: ColorAccentProviderProps) {
  const [accent, setAccentState] = useState<AccentScheme>(defaultScheme);

  useEffect(() => {
    const storedAccent = window.localStorage.getItem(accentStorageKey);
    const initialAccent = isAccentScheme(storedAccent)
      ? storedAccent
      : defaultScheme;

    setAccentState(initialAccent);
    applyAccent(initialAccent);
  }, [defaultScheme]);

  const setAccent = useCallback((next: AccentScheme) => {
    setAccentState(next);
    window.localStorage.setItem(accentStorageKey, next);
    applyAccent(next);
  }, []);

  const nextAccent = useCallback(() => {
    setAccentState((current) => {
      const next =
        accentOptions[accentOptions.indexOf(current) + 1] || accentOptions[0];

      window.localStorage.setItem(accentStorageKey, next);
      applyAccent(next);

      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      accent,
      secondaryAccent: secondaryAccentMap[accent],
      setAccent,
      nextAccent,
    }),
    [accent, setAccent, nextAccent]
  );

  return (
    <ColorAccentContext.Provider value={value}>
      {children}
    </ColorAccentContext.Provider>
  );
}

export function useColorAccent() {
  const context = useContext(ColorAccentContext);

  if (!context) {
    throw new Error('useColorAccent must be used within ColorAccentProvider');
  }

  return context;
}

export default ColorAccentProvider;
