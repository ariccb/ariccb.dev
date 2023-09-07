import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';
import { Key } from '@mui/icons-material';

function KeyStrengths() {
  return (
    <header className={clsx('mb-0')} data-accent="amber">
      <SectionTitle title="Key Strengths:" />
    </header>
  );
}

export default KeyStrengths;
