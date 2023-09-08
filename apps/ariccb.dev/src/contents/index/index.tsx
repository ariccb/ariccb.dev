import clsx from 'clsx';

import { CodeIcon, HeartIcon, SparklesIcon } from '@/components/Icons';

import WhoIAm from '@/contents/index/WhoIAm';
import DetailOriented from '@/contents/index/DetailOriented';
import FeaturedCard from '@/contents/index/FeaturedCard';
import Header from '@/contents/index/Header';
import Curious from '@/contents/index/Curious';
import Quote from '@/contents/index/Quote';
import KeyStrengths from '@/contents/index/KeyStrengths';

function FeaturedCardSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex flex-col gap-4', 'lg:flex-row lg:gap-8')}>
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-amber-300 p-3.5',
                'dark:bg-amber-900'
              )}
            >
              <SparklesIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Relentless Learner"
          desc="Curiosity fuels my never-ending quest for knowledge. I'm always exploring new techniques, tools, and perspectives."
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-amber-400 p-3.5',
                'dark:bg-pink-900'
              )}
            >
              <HeartIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Team Player · Natural Leader"
          desc="Working with others, solving problems, and building strong relationships are how I enjoy to work. I quickly earn trust, and I build up those around me so we can all succeed."
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-orange-400 p-3.5',
                'dark:bg-sky-900'
              )}
            >
              <CodeIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Detail Oriented · Clean Code"
          desc="Writing well organized and performant code is a top priority. Choose the hard path now, to make tomorrow easier."
        />
      </div>
    </div>
  );
}

function QuoteSection() {
  return (
    <div className={clsx('content-wrapper', 'mb:hidden')}>
      <div className={clsx('flex items-center justify-center py-8')}>
        <Quote />
      </div>
    </div>
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
      <div className={clsx('mb-12 mt-2', 'md:mb-24 md:mt-0')}>
        <QuoteSection />
      </div>
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
    </>
  );
}

export default IndexContents;
