import clsx from 'clsx';
import { useState } from 'react';

import { GitHubIcon, ReactIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';
import Link from 'next/link';
import Image from 'next/image';
import LandingPageImg from '@/components/images/unstuck/unstuck-landingpage.png';
import ConnectCauseLandingPageImg from '@/components/images/connect-cause/connect-cause-landing-page.png';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'unstuck' | 'github'>(
    'unstuck'
  );
  const [currentStateCC, setCurrentStateCC] = useState<
    'connect-cause' | 'github'
  >('connect-cause');

  return (
    <>
      <SectionTitle
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
      />

      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
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
                          src={LandingPageImg}
                          // width={500}
                          // height={500}
                          alt="Unstuck Landing Page"
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
      </SectionContent>
      <SectionTitle
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
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
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
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
