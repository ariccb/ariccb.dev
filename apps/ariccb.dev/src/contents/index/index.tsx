import clsx from 'clsx';
import NextLink from 'next/link';

import {
  CalendarIcon,
  ClipboardIcon,
  CodeIcon,
  DocumentIcon,
  EyeIcon,
  HeartIcon,
  QuoteIcon,
  SparklesIcon,
} from '@/components/Icons';

import Curious from '@/contents/index/Curious';
import DetailOriented from '@/contents/index/DetailOriented';
import FeaturedCard from '@/contents/index/FeaturedCard';
import Header from '@/contents/index/Header';
import KeyStrengths from '@/contents/index/KeyStrengths';
import WhoIAm from '@/contents/index/WhoIAm';

const strengthCards = [
  {
    title: 'Relentless Learner',
    desc: "Curiosity fuels my never-ending quest for knowledge. I'm always exploring new techniques, tools, and perspectives.",
    icon: SparklesIcon,
    color: 'bg-accent-300 dark:bg-accent-700',
    layout: 'lg:col-span-2',
  },
  {
    title: 'Team Player · Natural Leader',
    desc: 'Working with others, solving problems, and building strong relationships are how I enjoy working. I quickly earn trust, and I build up those around me so we can all succeed.',
    icon: HeartIcon,
    color: 'bg-accent-400 dark:bg-accent-800',
    layout: 'lg:col-span-2',
  },
  {
    title: 'Workflow Architect',
    desc: 'I like turning ambiguous workflows into clear systems: intake, planning, implementation, review, and feedback loops that teams can trust.',
    icon: ClipboardIcon,
    color: 'bg-accent-500 dark:bg-accent-900',
    layout: 'lg:col-span-2',
  },
  {
    title: 'Authentic · Genuine',
    desc: 'I have a transparent communication style that prioritizes being true to self and openly talking about topics with no mask on.',
    icon: QuoteIcon,
    color: 'bg-accent-400 dark:bg-accent-800',
    layout: 'lg:col-span-2',
  },
  {
    title: 'Product-Minded Shipper',
    desc: 'I care about the path from idea to useful product: crisp scope, fast feedback, clean tradeoffs, and shipping the version people can actually use.',
    icon: CalendarIcon,
    color: 'bg-accent-500 dark:bg-accent-900',
    layout: 'lg:col-span-2',
  },
  {
    title: 'Knowledge Systems Thinker',
    desc: 'I connect notes, tasks, docs, context, and team memory into operating systems that make better work easier to repeat.',
    icon: DocumentIcon,
    color: 'bg-accent-600 dark:bg-accent-950',
    layout: 'lg:col-span-2',
  },
  {
    title: 'Design Minded',
    desc: 'I pay close attention to how products feel in use: hierarchy, rhythm, transitions, information density, and the path from first impression to confident action.',
    icon: EyeIcon,
    color: 'bg-accent-700 dark:bg-accent-950',
    layout: 'lg:col-span-2',
  },
  {
    title: 'Attentive to Detail',
    desc: 'Writing well-organized, tested, and maintainable code is a top priority. I choose the hard path now when it makes tomorrow easier.',
    icon: CodeIcon,
    color: 'bg-accent-800 dark:bg-accent-950',
    layout: 'lg:col-span-2',
  },
];

const nextLinks = [
  {
    title: 'My Projects',
    eyebrow: 'see the builds',
    desc: 'Portfolio work, AI systems, client projects, and product experiments.',
    href: '/projects',
    accent: 'from-accent-500 to-accent-300',
  },
  {
    title: 'Skills & Tools',
    eyebrow: 'inspect the stack',
    desc: 'The languages, frameworks, AI workflows, and tools I use to ship.',
    href: '/work/skills-and-tools',
    accent: 'from-accent-500 to-accent-300',
  },
  {
    title: 'Experience',
    eyebrow: 'trace the path',
    desc: 'Recent roles, systems shipped, and the work behind the resume.',
    href: '/work/experience',
    accent: 'from-accent-500 to-accent-300',
  },
];

function FeaturedCardSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div
        className={clsx(
          'border-accent-200/60 via-accent-50/40 to-accent-100 relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-white p-3 shadow-sm',
          'dark:border-accent-900/50 dark:to-accent-950/20 dark:from-slate-950 dark:via-slate-950',
          'md:p-4 lg:p-6'
        )}
      >
        <div
          aria-hidden="true"
          className={clsx(
            'bg-accent-300/30 absolute -right-20 -top-24 h-64 w-64 rounded-full blur-3xl',
            'dark:bg-accent-500/10'
          )}
        />
        <div
          aria-hidden="true"
          className={clsx(
            'bg-accent-300/20 absolute -bottom-28 left-1/3 h-56 w-56 rounded-full blur-3xl',
            'dark:bg-accent-500/10'
          )}
        />
        <div
          className={clsx(
            'relative grid grid-cols-1 gap-4',
            'md:grid-cols-2',
            'lg:grid-cols-6 lg:gap-6'
          )}
        >
          {strengthCards.map((card) => {
            const Icon = card.icon;

            return (
              <div key={card.title} className={clsx(card.layout)}>
                <FeaturedCard
                  icon={
                    <div className={clsx('rounded-full p-3.5', card.color)}>
                      <Icon className={clsx('h-5 w-5 text-white')} />
                    </div>
                  }
                  title={card.title}
                  desc={card.desc}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ExploreNextSection() {
  return (
    <section className={clsx('content-wrapper mb-16', 'lg:mb-28')}>
      <div
        className={clsx(
          'relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white/80 p-6 shadow-lg backdrop-blur',
          'dark:border-slate-800 dark:bg-slate-950/70',
          'md:p-8 lg:p-10'
        )}
      >
        <div
          aria-hidden="true"
          className={clsx('bg-accent-500/10 absolute inset-0')}
        />
        <div className={clsx('relative')}>
          <div className={clsx('mx-auto max-w-2xl text-center')}>
            <p
              className={clsx(
                'text-accent-600 mb-3 text-xs font-black uppercase tracking-[0.28em]',
                'dark:text-accent-300'
              )}
            >
              Keep exploring
            </p>
            <h2
              className={clsx(
                'text-3xl font-black tracking-tight text-slate-800',
                'md:text-5xl',
                'dark:text-white'
              )}
            >
              Pick the next trail.
            </h2>
            <p
              className={clsx(
                'mx-auto mb-8 mt-4 max-w-xl text-sm leading-6 text-slate-600',
                'md:mb-10 md:text-base md:leading-7',
                'dark:text-slate-300'
              )}
            >
              If this page gives you the first impression, these paths show the
              work behind it: what I have built, what I build with, and where I
              have put those skills into practice.
            </p>
          </div>

          <svg
            aria-hidden="true"
            viewBox="0 0 760 120"
            className={clsx(
              'text-accent-400 mx-auto my-8 hidden h-24 max-w-4xl overflow-visible',
              'dark:text-accent-300 motion-reduce:hidden md:block'
            )}
          >
            <path
              d="M38 50 C 170 104, 240 8, 377 58 S 592 104, 720 42"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="14 18"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="160;0"
                dur="2.8s"
                repeatCount="indefinite"
              />
            </path>
            <g
              transform="translate(720 42) rotate(-8)"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
            >
              <path d="M-13 -13 L13 13" strokeWidth="5">
                <animate
                  attributeName="opacity"
                  values="0.35;1;0.35"
                  dur="1.4s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M13 -13 L-13 13" strokeWidth="5">
                <animate
                  attributeName="opacity"
                  values="0.35;1;0.35"
                  dur="1.4s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
            <circle cx="38" cy="50" r="7" fill="currentColor">
              <animate
                attributeName="r"
                values="5;9;5"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

          <div className={clsx('grid gap-4', 'md:grid-cols-3')}>
            {nextLinks.map((item) => (
              <NextLink
                key={item.href}
                href={item.href}
                className={clsx(
                  'group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300',
                  'hover:-translate-y-1 hover:shadow-xl',
                  'dark:border-slate-800 dark:bg-slate-900/80'
                )}
              >
                <div
                  aria-hidden="true"
                  className={clsx(
                    'absolute inset-x-0 top-0 h-1 bg-gradient-to-r',
                    item.accent
                  )}
                />
                <p
                  className={clsx(
                    'mb-3 text-xs font-black uppercase tracking-[0.2em] text-slate-400',
                    'dark:text-slate-500'
                  )}
                >
                  {item.eyebrow}
                </p>
                <h3
                  className={clsx(
                    'text-2xl font-black text-slate-800',
                    'dark:text-white'
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={clsx(
                    'mt-3 text-sm leading-6 text-slate-600',
                    'dark:text-slate-400'
                  )}
                >
                  {item.desc}
                </p>
                <div
                  className={clsx(
                    'text-accent-600 mt-5 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-black transition',
                    'group-hover:bg-accent-100 group-hover:translate-x-1',
                    'dark:text-accent-300 dark:group-hover:bg-accent-950/50 dark:bg-slate-800'
                  )}
                >
                  Go this way
                  <span aria-hidden="true">→</span>
                </div>
              </NextLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndexContents() {
  return (
    <>
      <Header />
      <div className={clsx('lg:-mt-16 lg:mb-24 lg:block')}>
        <FeaturedCardSection />
      </div>
      <br />
      <section className={clsx('mb-10', 'lg:mb-24')}>
        <WhoIAm />
      </section>
      <section className={clsx('mb-6', 'lg:mb-10')}>
        <KeyStrengths />
      </section>
      <section className={clsx('mb-12', 'lg:mb-20')}>
        <DetailOriented />
      </section>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <Curious />
      </section>
      <ExploreNextSection />
    </>
  );
}

export default IndexContents;
