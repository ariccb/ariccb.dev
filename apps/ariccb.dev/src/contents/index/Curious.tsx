import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function Curious() {
  return (
    <header className={clsx('mb-8')} data-accent="amber">
      <SectionTitle
        title="Insatiable Desire To Learn and Improve."
        caption="Curious and Self-Motivated"
        description={[
          "I have the attitude of a student, and am humble and eager to learn. I'm always looking to improve my skills and knowledge, and I'm not afraid to ask questions.",
          <br />,
          <br />,
          'I always welcome feedback ',
          <strong>- even if it&apos;s a criticism -</strong>,
          " as it's truly the only way to improve and level up.",
        ]}
      />
    </header>
  );
}

export default Curious;
