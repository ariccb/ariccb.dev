import clsx from 'clsx';
import { useState } from 'react';

import { GitHubIcon, NpmIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';
// import NpmWireframe from '@/components/wireframes/Npm';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'npm' | 'github'>('github');

  return (
    <>
      <SectionTitle
        title="Unstuck"
        caption="The Critical Thinking Tool For Students"
        description="A full-stack application that empowers high school students to learn, execute and retain critical thinking skills. It’s a platform for students to get experience through real-world projects to gain a greater understanding of their skills, talents, interests, and personality traits."
        button={{
          title: 'learn more',
          href: '/docs/unstuck',
        }}
      />

      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Source code on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description=""
                active={currentState === 'github'}
                onClick={() => {
                  setCurrentState('github');
                }}
              />
              {/* <SectionButton
                title="npm package"
                icon={<NpmIcon className={clsx('my-2 h-16 w-16')} />}
                description="Install and use the package with ease thanks to its typed options."
                active={currentState === 'npm'}
                onClick={() => setCurrentState('npm')}
              /> */}
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'ariccb/unstuck - GitHub',
                      isActive: currentState === 'github',
                    },
                    // {
                    //   icon: <NpmIcon className="h-4 w-4" />,
                    //   title: 'tailwindcss-accent - npm',
                    //   isActive: currentState === 'npm',
                    // },
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
                  {/* {currentState === 'npm' && (
                    <NpmWireframe
                      packageName="tailwindcss-accent"
                      description="Adds accent colors for more dynamic and flexible color utilization."
                      isWithTypeScript
                    />
                  )} */}
                </AppWindow>
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
          title: 'view back-end code',
          href: 'https://github.com/ariccb/connect-cause-backend',
        }}
        button2={{
          title: 'view front-end code',
          href: 'https://github.com/ariccb/connect-cause-backend',
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Source code on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description=""
                active={currentState === 'github'}
                onClick={() => {
                  setCurrentState('github');
                }}
              />
              {/* <SectionButton
                title="npm package"
                icon={<NpmIcon className={clsx('my-2 h-16 w-16')} />}
                description="Install and use the package with ease thanks to its typed options."
                active={currentState === 'npm'}
                onClick={() => setCurrentState('npm')}
              /> */}
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'connect-cause-backend - GitHub',
                      isActive: currentState === 'github',
                    },
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'connect-cause-frontend - GitHub',
                      isActive: currentState === 'npm',
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
                  {/* {currentState === 'npm' && (
                    <NpmWireframe
                      packageName="tailwindcss-accent"
                      description="Adds accent colors for more dynamic and flexible color utilization."
                      isWithTypeScript
                    />
                  )} */}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
