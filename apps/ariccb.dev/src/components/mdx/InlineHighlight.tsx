import clsx from 'clsx';

import type { PropsWithChildren } from 'react';

interface InlineHighlightProps {
  color?: 'accent' | 'amber' | 'fuchsia';
}

export function InlineHighlight({
  color = 'accent',
  children = null,
}: PropsWithChildren<InlineHighlightProps>) {
  return (
    <span
      className={clsx('mdx-inline-highlight', [
        color === 'amber' && 'amber',
        color === 'fuchsia' && 'fuchsia',
      ])}
    >
      {children}
    </span>
  );
}

export default InlineHighlight;
