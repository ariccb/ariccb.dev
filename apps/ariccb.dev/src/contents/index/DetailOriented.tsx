import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function DetailOriented() {
  return (
    <header className={clsx('mb-2')} data-accent="amber">
      <SectionTitle
        title="Keen Eye for Spotting Small Details."
        caption="Detail Oriented"
        description="Awareness to ease of use, user interface consistency, and the ability to zero in on the little things that bring an application from good to great. "
      />
    </header>
  );
}

export default DetailOriented;
