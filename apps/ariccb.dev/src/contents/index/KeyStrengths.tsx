import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';
import { Key } from '@mui/icons-material';

function KeyStrengths() {
  return (
    <header className={clsx('mb-0')} data-accent="amber">
      <SectionTitle title="Key Strengths:" caption="" description="" />
    </header>
  );
}

export default KeyStrengths;
