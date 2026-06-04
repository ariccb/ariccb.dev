import clsx from 'clsx';

function AIEngineerQuote() {
  return (
    <section
      className={clsx(
        'border-accent-200/70 via-accent-50/40 to-accent-100/70 shadow-accent-900/5 relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-white p-6 shadow-xl backdrop-blur',
        'dark:border-accent-900/50 dark:to-accent-950/20 dark:from-slate-950 dark:via-slate-950',
        'md:p-8 lg:rounded-[2.5rem] lg:p-12'
      )}
    >
      <div
        aria-hidden="true"
        className={clsx(
          'bg-accent-300/30 absolute -right-20 -top-24 h-72 w-72 rounded-full blur-3xl',
          'dark:bg-accent-500/10'
        )}
      />
      <div
        aria-hidden="true"
        className={clsx(
          'bg-accent-400/15 absolute -bottom-28 left-8 h-64 w-64 rounded-full blur-3xl',
          'dark:bg-accent-400/5'
        )}
      />
      <div className={clsx('relative mx-auto max-w-5xl')}>
        <p
          className={clsx(
            'text-accent-600 mb-4 text-xs font-black uppercase tracking-[0.28em]',
            'dark:text-accent-300'
          )}
        >
          From Developer to AI Engineer
        </p>
        <blockquote>
          <div className={clsx('mb-5 flex items-start gap-4')}>
            <div
              aria-hidden="true"
              className={clsx(
                'bg-accent-600 shadow-accent-900/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-3xl font-black leading-none text-white shadow-lg',
                'dark:bg-accent-500'
              )}
            >
              “
            </div>
            <p
              className={clsx(
                'max-w-4xl text-3xl font-black leading-tight tracking-tight text-slate-800',
                'dark:text-white',
                'md:text-4xl lg:text-5xl'
              )}
            >
              The work is no longer just the code. It’s the system around it.
            </p>
          </div>
          <div
            className={clsx(
              'border-accent-300/80 grid gap-4 border-l-4 pl-5 text-sm leading-6 text-slate-600',
              'dark:border-accent-500/40 dark:text-slate-300',
              'md:grid-cols-3 md:gap-6 md:text-base md:leading-7'
            )}
          >
            <p>
              A few years ago, a portfolio could mostly say “here’s the stack I
              use” and “here are the apps I’ve built.” That still matters, but
              it no longer explains the work I’m doing day to day.
            </p>
            <p>
              The bigger shift has been learning how to design the workflow
              around the code: how requests are clarified, specs are shaped,
              repo context gets pulled in, agents are guided, hallucinations are
              constrained, and outputs are reviewed before production changes.
            </p>
            <p>
              For me, becoming a Full-Stack AI Engineer means keeping product
              and architecture judgment at the center while using AI to move
              faster through planning, implementation, review, QA, and team
              communication. The leverage is building the rails that make faster
              output trustworthy.
            </p>
          </div>
        </blockquote>
      </div>
    </section>
  );
}

export default AIEngineerQuote;
