import clsx from 'clsx';
import Link from 'next/link';

import { ExternalLink, GitHubIcon } from '@/components/Icons';

import dayjs from '@/utils/dayjs';

function LastUpdate() {
  return (
    <a
      href="https://github.com/ariccb/ariccb.dev"
      target="_blank"
      rel="noreferrer nofollow"
      className={clsx('hover:underline')}
    >
      <span>see the recent update on GitHub</span>
    </a>
  );
}

interface FooterLinkProps {
  title: string;
  href: string;
  label?: 'new' | 'soon';
  isInternal?: boolean;
}

function FooterLink({
  title,
  href,
  label = undefined,
  isInternal = true,
}: FooterLinkProps) {
  if (label === 'soon') {
    return (
      <span className={clsx('footer-link footer-link--soon')}>
        {title}
        <span className={clsx('footer-link__label')}>{label}</span>
      </span>
    );
  }

  if (isInternal) {
    return (
      <Link href={href} className={clsx('footer-link')}>
        {title}
        {label && <span className={clsx('footer-link__label')}>{label}</span>}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer nofollow"
      className={clsx('footer-link')}
    >
      {title}
      <ExternalLink className={clsx('h-3.5 w-3.5')} />
      {label && <span className={clsx('footer-link__label')}>{label}</span>}
    </a>
  );
}

interface FooterGroupProps {
  title: string;
  links: Array<FooterLinkProps>;
}

function FooterGroup({ title, links }: FooterGroupProps) {
  return (
    <div className={clsx('flex-1')}>
      <div
        className={clsx(
          'text-accent-600 mb-2 px-2 text-[13px]',
          'dark:text-slate-400'
        )}
      >
        {title}
      </div>
      <ul className={clsx('flex flex-col')}>
        {links.map(({ title: linkTitle, href, label, isInternal }) => (
          <li key={href}>
            <FooterLink
              title={linkTitle}
              href={href}
              label={label}
              isInternal={isInternal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterDescription() {
  return (
    <div className={clsx('max-w-[500px]')}>
      <div
        className={clsx(
          'mb-3 text-[13px] text-slate-600',
          'dark:text-slate-400'
        )}
      >
        About Me
      </div>
      <p className={clsx('mb-4 font-normal leading-relaxed')}>
        I&apos;m Aric. A <strong>full-stack developer.</strong>
        <br />
        Incredible team player. Addicted to learning. Eye for design. Creative
        mind. Natural leader, with a teacher mindset. Experienced, but humble.
        <br />
        I&apos;m here to bring value, and have <strong>fun</strong> doing it!
      </p>
      <ul className={clsx('-ml-2 flex gap-1')}>
        {/* <li>
          <a
            href="https://twitter.com/ariccb.dev"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="My Twitter profile"
            title="My Twitter profile"
          >
            <TwitterIcon className={clsx('h-5 w-5')} />
          </a>
        </li> */}
        <li>
          <a
            href="https://github.com/ariccb"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="My GitHub profile"
            title="My GitHub profile"
          >
            <GitHubIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
        {/* <li>
          <a
            href="https://www.figma.com/files/team/1210281870595988659"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="My Figma profile"
            title="My Figma profile"
          >
            <FigmaIcon className={clsx('h-5 w-5')} />
          </a>
        </li> */}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className={clsx(
        'background-grid background-grid--fade-in border-divider-light mt-24 pt-16 text-sm text-slate-900',
        'dark:border-divider-dark dark:text-slate-200'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <div className={clsx('py-10 font-semibold')}>
          <div className={clsx('flex flex-col-reverse gap-16', 'lg:flex-row')}>
            <div className={clsx('flex-1')}>
              <FooterDescription />
            </div>
            <div
              className={clsx(
                '-mx-2 flex flex-1 flex-col gap-8',
                'sm:flex-row sm:gap-16 lg:mx-0'
              )}
            >
              <div className={clsx('flex', 'sm:gap-16')} data-accent="accent">
                <FooterGroup
                  title="Work"
                  links={[
                    { title: 'Contact', href: '/work/contact' },

                    {
                      title: 'Experience',
                      href: '/work/experience',
                      label: 'new',
                    },
                    {
                      title: 'Skills and Tools',
                      href: '/work/skills-and-tools',
                      label: 'new',
                    },
                    // { title: 'Studio', href: '/work/studio', label: 'soon' },
                  ]}
                />
                <FooterGroup
                  title="Learn"
                  links={[
                    {
                      title: 'Projects',
                      href: '/projects',
                      label: 'new',
                    },
                    // {
                    //   title: 'Docs',
                    //   href: '/docs',
                    // },
                    // {
                    //   title: 'Personal Blog',
                    //   href: '/blog',
                    // },
                    // {
                    //   title: 'T.I.L',
                    //   href: '/today-i-learned',
                    //   label: 'new',
                    // },
                  ]}
                />
              </div>
              <div className={clsx('flex', 'sm:gap-16')}>
                <FooterGroup
                  title="This Site"
                  links={[
                    {
                      title: 'Source Code',
                      href: 'https://github.com/ariccb/ariccb.dev',
                      isInternal: false,
                    },
                    {
                      title: 'Credits',
                      href: '/credits',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            'border-divider-light flex justify-between border-t py-6 text-xs',
            'dark:border-divider-dark'
          )}
        >
          <div className={clsx('font-semibold')}>
            &copy; {dayjs().format('YYYY')}, Aric Crosson Bouwers
          </div>
          <div className={clsx('text-slate-500', 'dark:text-slate-400')}>
            <LastUpdate />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
