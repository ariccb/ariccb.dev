import clsx from 'clsx';

function KeyStrengths() {
  return (
    <header className={clsx('content-wrapper mb-6')}>
      <div
        className={clsx(
          'border-accent-200/70 relative overflow-hidden rounded-[1.75rem] border bg-white/80 px-5 py-6 shadow-sm backdrop-blur',
          'dark:border-accent-900/50 dark:bg-slate-950/70',
          'md:px-8 md:py-7'
        )}
      >
        <div
          aria-hidden="true"
          className={clsx(
            'bg-accent-300/25 absolute -right-16 -top-20 h-48 w-48 rounded-full blur-3xl',
            'dark:bg-accent-500/10'
          )}
        />
        <p
          className={clsx(
            'text-accent-600 relative mb-3 text-xs font-black uppercase tracking-[0.28em]',
            'dark:text-accent-300'
          )}
        >
          The operating habits behind the work
        </p>
        <h2
          className={clsx(
            'relative max-w-4xl text-3xl font-black leading-tight tracking-tight text-slate-800',
            'md:text-4xl lg:text-5xl',
            'dark:text-white'
          )}
        >
          Key Strengths
        </h2>
        <p
          className={clsx(
            'relative mt-4 max-w-2xl text-sm leading-6 text-slate-600',
            'md:text-base md:leading-7',
            'dark:text-slate-300'
          )}
        >
          A mix of craft, judgment, curiosity, and follow-through that shows up
          across product, engineering, and team workflows.
        </p>
      </div>
    </header>
  );
}

export default KeyStrengths;
