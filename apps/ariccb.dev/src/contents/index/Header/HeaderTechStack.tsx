import clsx from 'clsx';
import { m } from 'framer-motion';

import {
  ClaudeCodeIcon,
  FigmaIcon,
  FramerMotionIcon,
  HermesAgentIcon,
  LinearIcon,
  NextJsIcon,
  OpenAiIcon,
  ReactIcon,
  TailwindCssIcon,
  TypeScriptIcon,
  VSCodeIcon,
} from '@/components/Icons';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTechStack() {
  return (
    <div>
      <m.p
        className={clsx('mb-2.5 text-sm text-slate-600', 'dark:text-slate-400')}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        current favorite tech stack/tools:
      </m.p>
      <m.ul
        className={clsx(
          'flex flex-wrap items-center gap-3.5 text-slate-500',
          'dark:text-slate-500'
        )}
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <m.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#3178C6]')}>
            <TypeScriptIcon className={clsx('h-6 w-6')} />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#61DAFB]')}>
            <ReactIcon className={clsx('h-6 w-6')} />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#06B6D4]')}>
            <TailwindCssIcon className={clsx('h-6 w-6')} />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#0055FF]')}>
            <FramerMotionIcon className={clsx('h-6 w-6')} />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div
            className={clsx(
              'transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]'
            )}
          >
            <NextJsIcon className={clsx('h-6 w-6')} />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className={clsx('h-3 w-[1px] bg-slate-300 dark:bg-slate-700')} />
        </m.li>
        <m.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#007ACC]')}>
            <VSCodeIcon className={clsx('h-6 w-6')} />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#F24E1E]')}>
            <FigmaIcon className={clsx('h-6 w-6')} />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className={clsx('h-3 w-[1px] bg-slate-300 dark:bg-slate-700')} />
        </m.li>
        <m.li variants={animation} title="Claude Code" aria-label="Claude Code">
          <div className={clsx('transition duration-200 hover:text-[#D97757]')}>
            <ClaudeCodeIcon className={clsx('h-6 w-6')} />
          </div>
        </m.li>
        <m.li variants={animation} title="OpenAI" aria-label="OpenAI">
          <div
            className={clsx(
              'transition duration-200 hover:text-[#10A37F] dark:hover:text-[#74AA9C]'
            )}
          >
            <OpenAiIcon className={clsx('h-6 w-6')} />
          </div>
        </m.li>
        <m.li
          variants={animation}
          title="Hermes Agent by Nous Research"
          aria-label="Hermes Agent by Nous Research"
        >
          <div className={clsx('transition duration-200 hover:text-[#8B5CF6]')}>
            <HermesAgentIcon className={clsx('h-6 w-6')} />
          </div>
        </m.li>
        <m.li variants={animation} title="Linear" aria-label="Linear">
          <div className={clsx('transition duration-200 hover:text-[#5E6AD2]')}>
            <LinearIcon className={clsx('h-6 w-6')} />
          </div>
        </m.li>
      </m.ul>
    </div>
  );
}

export default HeaderTechStack;
