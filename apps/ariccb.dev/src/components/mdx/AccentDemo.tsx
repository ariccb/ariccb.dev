import clsx from 'clsx';

import { accentOptions, useColorAccent } from '@/providers/ColorAccentProvider';

function AccentDemo() {
  const { accent, nextAccent } = useColorAccent();

  const getButtonText = (color: (typeof accentOptions)[number]): string => {
    switch (color) {
      case 'violet':
        return `How do you like some Violet? 🤔`;
      case 'red':
        return `How about some Red? 😡`;
      case 'amber':
        return `Amber's good 🤩`;
      case 'orange':
        return `Orange for you? 🍊`;
      case 'green':
        return `Ah green, nice choice! 😁`;
      case 'pink':
        return `Pink! 🌸`;
      default:
        return `✦ Want a different color? ✦`;
    }
  };

  return (
    <button
      type="button"
      className={clsx(
        'button button--solid shadow',
        'md:button--big md:my-0 md:inline-block'
      )}
      onClick={nextAccent}
    >
      {getButtonText(accent)}
    </button>
  );
}

export default AccentDemo;
