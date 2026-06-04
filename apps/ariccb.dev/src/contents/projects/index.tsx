import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode, useEffect, useRef, useState } from 'react';

import { GitHubIcon, ReactIcon } from '@/components/Icons';
import ConnectCauseLandingPageImg from '@/components/images/connect-cause/connect-cause-landing-page.png';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';

type ProjectTone = 'professional' | 'helixir' | 'personal';

const projectToneStyles: Record<
  ProjectTone,
  {
    panel: string;
    glow: string;
    text: string;
    pill: string;
    wash: string;
  }
> = {
  professional: {
    panel:
      'border-sky-200 bg-gradient-to-br from-sky-50 via-white to-cyan-50/70 dark:border-sky-900/50 dark:from-slate-950/90 dark:via-slate-950/90 dark:to-sky-950/30',
    glow: 'bg-sky-300/30 dark:bg-sky-500/12',
    text: 'text-sky-700 dark:text-sky-300',
    pill: 'bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-200',
    wash: 'bg-sky-500/10',
  },
  helixir: {
    panel:
      'border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50/70 dark:border-emerald-900/50 dark:from-slate-950/90 dark:via-slate-950/90 dark:to-emerald-950/30',
    glow: 'bg-emerald-300/30 dark:bg-emerald-500/12',
    text: 'text-emerald-700 dark:text-emerald-300',
    pill: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-200',
    wash: 'bg-emerald-500/10',
  },
  personal: {
    panel:
      'border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50/70 dark:border-amber-900/50 dark:from-slate-950/90 dark:via-slate-950/90 dark:to-amber-950/30',
    glow: 'bg-amber-300/30 dark:bg-amber-500/12',
    text: 'text-amber-700 dark:text-amber-300',
    pill: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-200',
    wash: 'bg-amber-500/10',
  },
};

function useSectionStickyProgress(top = 80, distance = 120) {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const next = Math.min(1, Math.max(0, (top - sectionTop) / distance));

      setProgress((current) =>
        Math.abs(current - next) > 0.01 ? next : current
      );
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [top, distance]);

  return { sectionRef, progress };
}

function ProjectCategory({
  title,
  caption,
  description,
  link = undefined,
  tone,
  progress,
}: {
  title: string;
  caption: string;
  description: ReactNode;
  tone: ProjectTone;
  progress: number;
  link?: {
    title: string;
    href: string;
  };
}) {
  const styles = projectToneStyles[tone];
  const detailOpacity = 1 - progress;
  const compactHeight = 58;
  const expandedHeight = link ? 284 : 220;
  const containerHeight =
    expandedHeight - (expandedHeight - compactHeight) * progress;
  const titleScale = 1 - progress * 0.45;
  const panelOpacity = detailOpacity;
  const fullBleedOpacity = progress * 0.9;
  const glassBlur = 3 + detailOpacity * 1.5 + progress * 9;
  const headerPaddingY = 10 * detailOpacity;

  return (
    <div
      className={clsx(
        'content-wrapper sticky top-16 z-30 mb-4 py-2',
        'md:top-20 md:mb-10'
      )}
    >
      <div
        className={clsx('relative')}
        style={{ height: `${containerHeight}px` }}
      >
        <div
          aria-hidden="true"
          className={clsx(
            'pointer-events-none absolute left-1/2 top-0 h-full w-screen -translate-x-1/2 overflow-hidden border-y shadow-sm',
            styles.panel
          )}
          style={{
            opacity: fullBleedOpacity,
            WebkitBackdropFilter: `blur(${glassBlur}px)`,
            backdropFilter: `blur(${glassBlur}px)`,
          }}
        />
        <div
          className={clsx(
            'relative z-10 flex flex-col justify-center overflow-hidden rounded-[1.4rem] px-4 shadow-sm',
            'md:rounded-[2rem] md:px-8 lg:px-10'
          )}
          style={{
            height: `${containerHeight}px`,
            paddingTop: `${8 + headerPaddingY}px`,
            paddingBottom: `${8 + headerPaddingY}px`,
            boxShadow: `0 ${18 * detailOpacity}px ${
              36 * detailOpacity
            }px rgba(15, 23, 42, ${0.06 * detailOpacity})`,
          }}
        >
          <div
            aria-hidden="true"
            className={clsx(
              'absolute inset-0 rounded-[1.4rem] border md:rounded-[2rem]',
              styles.panel
            )}
            style={{
              opacity: panelOpacity,
              WebkitBackdropFilter: `blur(${glassBlur}px)`,
              backdropFilter: `blur(${glassBlur}px)`,
            }}
          />
          <div
            aria-hidden="true"
            className={clsx(
              'absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full blur-3xl',
              styles.glow
            )}
            style={{ opacity: detailOpacity }}
          />

          <div
            className={clsx('relative overflow-hidden')}
            style={{
              maxHeight: `${40 * detailOpacity}px`,
              opacity: detailOpacity,
            }}
          >
            <p
              className={clsx(
                'mb-4 text-xs font-black uppercase tracking-[0.28em]',
                'md:text-sm',
                styles.text
              )}
            >
              {caption}
            </p>
          </div>

          <h2
            className={clsx(
              'relative max-w-4xl origin-left text-3xl font-black leading-none tracking-tight text-slate-800',
              'md:text-5xl lg:text-6xl',
              'dark:text-white'
            )}
            style={{
              marginBottom: `${12 * detailOpacity}px`,
              transform: `scale(${titleScale})`,
            }}
          >
            {title}
          </h2>

          <div
            className={clsx(
              'relative overflow-hidden',
              progress > 0.9 && 'pointer-events-none'
            )}
            style={{
              maxHeight: `${140 * detailOpacity}px`,
              opacity: detailOpacity,
            }}
          >
            <div
              className={clsx(
                'max-w-3xl text-sm leading-6 text-slate-600',
                'md:text-base md:leading-7',
                'dark:text-slate-300'
              )}
            >
              {description}
            </div>
            {link && (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-hidden={progress > 0.9}
                tabIndex={progress > 0.9 ? -1 : undefined}
                className={clsx(
                  'mt-5 inline-flex max-w-full rounded-full px-4 py-2 text-sm font-black uppercase tracking-[0.12em]',
                  styles.pill
                )}
              >
                {link.title}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectSection({
  id = undefined,
  title,
  caption,
  description,
  link = undefined,
  tone,
  children,
}: {
  id?: string;
  title: string;
  caption: string;
  description: ReactNode;
  link?: {
    title: string;
    href: string;
  };
  tone: ProjectTone;
  children: ReactNode;
}) {
  const { sectionRef, progress } = useSectionStickyProgress(72, 56);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={clsx('relative mt-20 scroll-mt-28')}
      data-project-tone={tone}
    >
      <div
        aria-hidden="true"
        className={clsx(
          'pointer-events-none absolute left-1/2 top-0 -z-10 h-full min-h-[900px] w-screen -translate-x-1/2 opacity-70 blur-3xl transition-colors',
          projectToneStyles[tone].wash
        )}
      />
      <ProjectCategory
        title={title}
        caption={caption}
        description={description}
        link={link}
        tone={tone}
        progress={progress}
      />
      {children}
    </section>
  );
}

function ProjectQuickLinks() {
  const links: Array<{
    title: string;
    caption: string;
    href: string;
    tone: ProjectTone;
  }> = [
    {
      title: 'Company & Client Work',
      caption: 'Professional engagements',
      href: '#company-client-work',
      tone: 'professional',
    },
    {
      title: 'Helixir Labs Inc',
      caption: 'AI products & experiments',
      href: '#helixir-labs',
      tone: 'helixir',
    },
    {
      title: 'Personal Projects',
      caption: 'Independent full-stack applications',
      href: '#personal-projects',
      tone: 'personal',
    },
  ];

  return (
    <div className={clsx('content-wrapper mb-2 mt-8')}>
      <div
        className={clsx(
          'rounded-2xl border border-slate-200 bg-white/70 p-3 shadow-sm backdrop-blur',
          'dark:border-slate-800 dark:bg-slate-950/60'
        )}
      >
        <p
          className={clsx(
            'mb-2 px-2 text-[0.68rem] font-black uppercase tracking-[0.22em] text-slate-500',
            'dark:text-slate-400'
          )}
        >
          Jump to section
        </p>
        <div className={clsx('grid gap-2', 'md:grid-cols-3')}>
          {links.map((link) => {
            const styles = projectToneStyles[link.tone];

            return (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  'group relative overflow-hidden rounded-xl border px-3 py-3 transition',
                  'hover:-translate-y-0.5 hover:shadow-md',
                  styles.panel
                )}
              >
                <div
                  className={clsx(
                    'absolute right-0 top-0 h-16 w-16 -translate-y-6 translate-x-6 rounded-full blur-2xl transition group-hover:scale-125',
                    styles.glow
                  )}
                />
                <p
                  className={clsx(
                    'relative mb-2 text-xs font-black uppercase tracking-[0.18em]',
                    styles.text
                  )}
                >
                  {link.caption}
                </p>
                <div
                  className={clsx(
                    'relative flex items-center justify-between gap-4'
                  )}
                >
                  <h2
                    className={clsx(
                      'text-base font-black text-slate-800 md:text-lg',
                      'dark:text-white'
                    )}
                  >
                    {link.title}
                  </h2>
                  <span
                    className={clsx(
                      'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-black transition group-hover:translate-y-0.5',
                      styles.pill
                    )}
                  >
                    ↓
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProjectContent({ children }: { children: ReactNode }) {
  return <div className={clsx('content-wrapper mt-20 pb-20')}>{children}</div>;
}

function ProjectShowcase({
  children,
  title,
  caption,
  description,
  button = null,
  button2 = null,
  button3 = null,
}: {
  children: ReactNode;
  title: string;
  caption: string;
  description: string | ReactNode;
  button?: {
    title: string;
    href: string;
  } | null;
  button2?: {
    title: string;
    href: string;
  } | null;
  button3?: {
    title: string;
    href: string;
  } | null;
}) {
  return (
    <div
      className={clsx(
        'background-grid background-grid--fade-out border-divider-light mt-10 border-t pt-[14px]',
        'dark:border-divider-dark'
      )}
    >
      <SectionTitle
        title={title}
        caption={caption}
        description={description}
        button={button}
        button2={button2}
        button3={button3}
      />
      <ProjectContent>{children}</ProjectContent>
    </div>
  );
}

function HelixirProjectCards() {
  const projects = [
    {
      title: 'DeftTask',
      caption: 'AI-assisted task and knowledge workflows',
      description:
        'A productivity app exploring the overlap between notes, tasks, calendars, and local markdown-first work across Apple platforms.',
      href: '/docs/defttask',
    },
    {
      title: 'Vulturo',
      caption: 'Dice roguelike game prototype',
      description:
        'A Swift game experiment built around deterministic scoring, collectible modifiers, wagers, and run progression systems.',
      href: '/docs/vulturo',
    },
    {
      title: 'Omni-gamer Leaderboard',
      caption: 'Cross-game ranking system',
      description:
        'A backend API for tracking game, category, and overall leaderboards across games using Elo-style scoring.',
      href: '/docs/omni-gamer-leaderboard',
    },
  ];

  return (
    <ProjectContent>
      <div className={clsx('grid gap-4', 'md:grid-cols-3')}>
        {projects.map((project) => (
          <div
            key={project.title}
            className={clsx(
              'rounded-2xl border border-slate-200 bg-white p-6',
              'dark:border-slate-700 dark:bg-slate-900'
            )}
          >
            <p
              className={clsx(
                'text-accent-600 mb-2 text-xs font-black uppercase tracking-[0.18em]',
                'dark:text-accent-400'
              )}
            >
              {project.caption}
            </p>
            <h3
              className={clsx(
                'mb-3 text-2xl font-black text-slate-700',
                'dark:text-slate-200'
              )}
            >
              {project.title}
            </h3>
            <p
              className={clsx('text-sm text-slate-600', 'dark:text-slate-400')}
            >
              {project.description}
            </p>
            <a
              href={project.href}
              className={clsx(
                'bg-accent-100 text-accent-700 mt-5 inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.14em] transition',
                'hover:bg-accent-200 hover:-translate-y-0.5 hover:shadow-md',
                'dark:border-accent-300/35 dark:bg-accent-400/25 dark:shadow-accent-950/20 dark:hover:bg-accent-400/35 dark:border dark:text-white'
              )}
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </ProjectContent>
  );
}

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'unstuck' | 'github'>(
    'unstuck'
  );
  const [currentStateCC, setCurrentStateCC] = useState<
    'connect-cause' | 'github'
  >('connect-cause');

  return (
    <>
      <ProjectQuickLinks />

      <ProjectSection
        id="company-client-work"
        title="Company & Client Work"
        caption="Production systems and professional engagements"
        description="Selected work from full-time and contract roles, spanning marketplace operations, internal tools, construction management workflows, and business-critical product delivery."
        tone="professional"
      >
        <ProjectShowcase
          title="AWS Marketplace Application"
          caption="Full-stack marketplace, CRM, and account workflows"
          description="Built a full-stack application that connects AWS Marketplace APIs, internal data, vendor / buyer / reseller organizations and users, and CRM workflows. Also shipped internal tools, GitHub and Slack automations, and cold outreach workflows to reduce handoffs."
        >
          <AppWindow
            type="browser"
            browserTabs={[
              {
                icon: <ReactIcon className="h-4 w-4" />,
                title: 'AWS Marketplace operations',
                isActive: true,
              },
            ]}
          >
            <div className={clsx('p-6')}>
              <div
                className={clsx(
                  'rounded-lg border border-slate-200 bg-white p-5',
                  'dark:border-slate-700 dark:bg-slate-900'
                )}
              >
                <h3 className={clsx('mb-2 font-bold')}>
                  Marketplace data to action
                </h3>
                <p
                  className={clsx(
                    'text-sm text-slate-600',
                    'dark:text-slate-400'
                  )}
                >
                  Connected marketplace records to account structures, CRM
                  context, and internal workflows so teams could act from one
                  reliable view.
                </p>
              </div>
            </div>
          </AppWindow>
        </ProjectShowcase>

        <ProjectShowcase
          title="Collegium Construction Management Platform"
          caption="Real-time collaboration for owners, consultants, and contractors"
          description="Three-sided platform with BIM data ingestion, work packages, bid workflows, and financial reporting. Built with Next.js (App Router), Firestore, TanStack Query, and Autodesk APS."
          button={{
            title: 'Learn More About Collegium',
            href: '/docs/collegium-platform',
          }}
        >
          <div className={clsx('w-full')}>
            <AppWindow
              type="browser"
              browserTabs={[
                {
                  icon: <ReactIcon className="h-4 w-4" />,
                  title: 'Collegium — Construction Management',
                  isActive: true,
                },
              ]}
            >
              <a href="/docs/collegium-platform">
                <Image
                  src="/assets/images/collegium/collegium-platform-preview.jpg"
                  alt="Collegium platform screenshot"
                  width={1600}
                  height={997}
                  loading="eager"
                  unoptimized
                  style={{ width: '100%', height: 'auto' }}
                  sizes="100vw"
                />
              </a>
            </AppWindow>
          </div>
        </ProjectShowcase>
      </ProjectSection>

      <ProjectSection
        id="helixir-labs"
        title="Helixir Labs Inc"
        caption="AI products, software systems, and product experiments"
        description="Product and engineering work under Helixir Labs Inc (my own corporation for development projects), focused on AI-assisted software delivery, workflow automation, productivity systems, and applied software experiments."
        tone="helixir"
        link={{
          title: 'Visit Helixir Labs',
          href: 'https://www.helixirlabs.com/',
        }}
      >
        <ProjectShowcase
          title="AI Software Factory"
          caption="Linear Integrated AI-driven workflow"
          description="A Linear-native code factory concept that turns product context into coordinated planning, build, review, QA, and status workflows—with local workers on developer devices and a server-side sync layer keeping the work aligned."
          button={{
            title: 'Learn More About the AI Software Factory',
            href: '/docs/ai-software-factory',
          }}
        >
          <AppWindow
            type="browser"
            browserTabs={[
              {
                icon: <ReactIcon className="h-4 w-4" />,
                title: 'AI workflow architecture',
                isActive: true,
              },
            ]}
          >
            <div className={clsx('grid gap-4 p-6', 'md:grid-cols-3')}>
              <div
                className={clsx(
                  'rounded-lg bg-slate-100 p-4',
                  'dark:bg-slate-800'
                )}
              >
                <h3 className={clsx('mb-2 font-bold')}>Planning loops</h3>
                <p
                  className={clsx(
                    'text-sm text-slate-600',
                    'dark:text-slate-400'
                  )}
                >
                  Agentic dedupe, enrichment, planning, design, coding, and
                  review loops across 9 teams.
                </p>
              </div>
              <div
                className={clsx(
                  'rounded-lg bg-slate-100 p-4',
                  'dark:bg-slate-800'
                )}
              >
                <h3 className={clsx('mb-2 font-bold')}>Team knowledge</h3>
                <p
                  className={clsx(
                    'text-sm text-slate-600',
                    'dark:text-slate-400'
                  )}
                >
                  Prompt and rules frameworks, standardized OAuth/tool access,
                  and isolated VPS agents that run 24/7.
                </p>
              </div>
              <div
                className={clsx(
                  'rounded-lg bg-slate-100 p-4',
                  'dark:bg-slate-800'
                )}
              >
                <h3 className={clsx('mb-2 font-bold')}>Product support</h3>
                <p
                  className={clsx(
                    'text-sm text-slate-600',
                    'dark:text-slate-400'
                  )}
                >
                  Supported the spin-up of 8 SaaS products while evaluating
                  memory, retrieval, and knowledge approaches.
                </p>
              </div>
            </div>
          </AppWindow>
        </ProjectShowcase>

        <HelixirProjectCards />
      </ProjectSection>

      <ProjectSection
        id="personal-projects"
        title="Personal Projects"
        caption="Independent full-stack applications"
        description="Projects I designed and built to explore product ideas, full-stack architecture, user workflows, and practical problem-solving."
        tone="personal"
      >
        <ProjectShowcase
          title="Unstuck"
          caption="The Critical Thinking Tool For Students"
          description="A full-stack application that empowers high school students to learn, execute and retain critical thinking skills. It’s a platform for students to get experience through real-world projects to gain a greater understanding of their skills, talents, interests, and personality traits."
          button={{
            title: 'Learn More About Unstuck',
            href: '/docs/unstuck',
          }}
          button2={{
            title: 'Github Repo',
            href: 'https://github.com/ariccb/unstuck',
          }}
        >
          <div className={clsx('flex', 'lg:gap-12')}>
            <div
              className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}
            >
              <div className={clsx('flex flex-col gap-3')}>
                <SectionButton
                  title="Unstuck"
                  icon={<ReactIcon className={clsx('my-2 h-16 w-16')} />}
                  description="Teaching students how to problem solve - breaking down problems to actionable steps."
                  active={currentState === 'unstuck'}
                  onClick={() => setCurrentState('unstuck')}
                />
                <SectionButton
                  title="Source code on GitHub"
                  icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                  description=""
                  active={currentState === 'github'}
                  onClick={() => {
                    setCurrentState('github');
                  }}
                />
              </div>
            </div>
            <div className={clsx('w-full', 'lg:w-auto')}>
              <div className={clsx('-mt-[41px]')}>
                <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                  {currentState === 'github' && (
                    <a href="https://github.com/ariccb/unstuck">
                      <AppWindow
                        type="browser"
                        browserTabs={[
                          {
                            icon: <GitHubIcon className="h-4 w-4" />,
                            title: 'ariccb/unstuck - GitHub',
                            isActive: currentState === 'github',
                          },
                        ]}
                      >
                        {currentState === 'github' && (
                          <GitHubWireframe
                            author="ariccb"
                            license="MIT"
                            repository="unstuck"
                            description="Platform for students to get experience through real-world projects to gain a greater understanding of their skills/talents/interests/personality traits."
                          />
                        )}
                      </AppWindow>
                    </a>
                  )}
                  {currentState === 'unstuck' && (
                    <a href="/docs/unstuck">
                      <AppWindow
                        type="browser"
                        browserTabs={[
                          {
                            icon: <ReactIcon className="h-4 w-4" />,
                            title: 'www.unstuck.app - Unstuck',
                            isActive: currentState === 'unstuck',
                          },
                        ]}
                      >
                        {currentState === 'unstuck' && (
                          <Image
                            src="/assets/images/unstuck/unstuck-landingpage-preview.jpg"
                            alt="Unstuck Landing Page"
                            width={1600}
                            height={900}
                            style={{ width: '100%', height: 'auto' }}
                            sizes="100vw"
                            loading="eager"
                            unoptimized
                          />
                        )}
                      </AppWindow>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ProjectShowcase>
        <ProjectShowcase
          title="Connect Cause"
          caption="Connecting Passion With Purpose"
          description="A full-stack application that connects passionate individuals with volunteering opportunities in the city, matching them up based on values and purpose."
          button={{
            title: 'Learn More About Connect Cause',
            href: '/docs/connect-cause',
          }}
          button2={{
            title: 'Github Repo - Backend',
            href: 'https://github.com/ariccb/connect-cause-backend',
          }}
          button3={{
            title: 'Github Repo - Frontend',
            href: 'https://github.com/ariccb/connect-cause-frontend',
          }}
        >
          <div className={clsx('flex', 'lg:gap-12')}>
            <div
              className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}
            >
              <div className={clsx('flex flex-col gap-3')}>
                <SectionButton
                  title="Connect Cause"
                  icon={<ReactIcon className={clsx('my-2 h-16 w-16')} />}
                  description="A platform that connects passionate individuals with volunteering opportunities in the city, matching them up with companies based on values and purpose."
                  active={currentStateCC === 'connect-cause'}
                  onClick={() => setCurrentStateCC('connect-cause')}
                />
                <SectionButton
                  title="Source code on GitHub"
                  icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                  description=""
                  active={currentStateCC === 'github'}
                  onClick={() => {
                    setCurrentStateCC('github');
                  }}
                />
              </div>
            </div>
            <div className={clsx('w-full', 'lg:w-auto')}>
              <div className={clsx('-mt-[41px]')}>
                <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                  {currentStateCC === 'github' && (
                    <a href="https://github.com/ariccb/connect-cause-backend">
                      <AppWindow
                        type="browser"
                        browserTabs={[
                          {
                            icon: <GitHubIcon className="h-4 w-4" />,
                            title: 'ariccb/connect-cause-backend - GitHub',
                            isActive: currentStateCC === 'github',
                          },
                        ]}
                      >
                        {currentStateCC === 'github' && (
                          <GitHubWireframe
                            author="ariccb"
                            license="MIT"
                            repository="connect-cause-backend"
                            description="A platform that connects passionate individuals with volunteering opportunities in the city, matching them up with companies based on values and purpose."
                          />
                        )}
                      </AppWindow>
                    </a>
                  )}
                  {currentStateCC === 'connect-cause' && (
                    <a href="/docs/connect-cause">
                      <AppWindow
                        type="browser"
                        browserTabs={[
                          {
                            icon: <ReactIcon className="h-4 w-4" />,
                            title: 'www.connect-cause.app - Connect Cause',
                            isActive: currentStateCC === 'connect-cause',
                          },
                        ]}
                      >
                        {currentStateCC === 'connect-cause' && (
                          <Image
                            src={ConnectCauseLandingPageImg}
                            alt="Connect-cause Landing Page"
                            style={{ width: '100%', height: 'auto' }}
                            sizes="100vw"
                            placeholder="blur" // Optional blur-up while loading
                          />
                        )}
                      </AppWindow>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ProjectShowcase>
      </ProjectSection>
    </>
  );
}

export default ProjectsContents;
