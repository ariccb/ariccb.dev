import clsx from 'clsx';

export type TodoItemState =
  | 'traits'
  | 'professional-skills'
  | 'interests'
  | 'values'
  | '';

interface TodoItemProps {
  state: Array<TodoItemState>;
  title?: string;
  description?: string;
  tag1?: string;
  tag2?: string;
  tag3?: string;
  tag4?: string;
  tag5?: string;
  tag6?: string;
  tag7?: string;
  tag8?: string;
  tag9?: string;
  tag10?: string;
}

TodoItem.defaultProps = {
  state: [],
  title: '',
  description: '',
  tag1: '',
  tag2: '',
  tag3: '',
  tag4: '',
  tag5: '',
  tag6: '',
  tag7: '',
  tag8: '',
  tag9: '',
  tag10: '',
};

function TodoItem({
  state,
  title,
  description,
  tag1,
  tag2,
  tag3,
  tag4,
  tag5,
  tag6,
  tag7,
  tag8,
  tag9,
  tag10,
}: TodoItemProps) {
  return (
    <div
      className={clsx(
        'pointer-events-none w-full select-none border p-6',
        'lg:w-96',
        'rounded-xl'
      )}
      role="presentation"
    >
      <div
        className={clsx(['text-slate-700', 'dark:text-slate-300'], 'font-bold')}
      >
        {title}:
      </div>
      <div className={clsx(['text-slate-600', 'dark:text-slate-400'])}>
        {description}
      </div>
      <div
        className={clsx(
          'flex',
          'flex-wrap',
          ['m-3 gap-2'],
          ['text-xs font-bold']
        )}
      >
        {' '}
        {tag1 != '' ? (
          <div
            className={clsx(
              'rounded-full',
              ['px-3 py-2'],
              'bg-accent-200 text-accent-700',
              'dark:bg-accent-600/20 dark:text-accent-400'
            )}
          >
            {tag1}
          </div>
        ) : null}
        {tag2 != '' ? (
          <div
            className={clsx(
              'rounded-full',
              ['px-3 py-2'],
              'bg-accent-200 text-accent-700',
              'dark:bg-accent-600/20 dark:text-accent-400'
            )}
          >
            {tag2}
          </div>
        ) : null}
        {tag3 != '' ? (
          <div
            className={clsx(
              'rounded-full',
              ['px-3 py-2'],
              'bg-accent-200 text-accent-700',
              'dark:bg-accent-600/20 dark:text-accent-400'
            )}
          >
            {tag3}
          </div>
        ) : null}
        {tag4 != '' ? (
          <div
            className={clsx(
              'rounded-full',
              ['px-3 py-2'],
              'bg-accent-200 text-accent-700',
              'dark:bg-accent-600/20 dark:text-accent-400'
            )}
          >
            {tag4}
          </div>
        ) : null}
        {tag5 != '' ? (
          <div
            className={clsx(
              'rounded-full',
              ['px-3 py-2'],
              'bg-accent-200 text-accent-700',
              'dark:bg-accent-600/20 dark:text-accent-400'
            )}
          >
            {tag5}
          </div>
        ) : null}
        {tag6 != '' ? (
          <div
            className={clsx(
              'rounded-full',
              ['px-3 py-2'],
              'bg-accent-200 text-accent-700',
              'dark:bg-accent-600/20 dark:text-accent-400'
            )}
          >
            {tag6}
          </div>
        ) : null}
        {tag7 != '' ? (
          <div
            className={clsx(
              'rounded-full',
              ['px-3 py-2'],
              'bg-accent-200 text-accent-700',
              'dark:bg-accent-600/20 dark:text-accent-400'
            )}
          >
            {tag7}
          </div>
        ) : null}
        {tag8 != '' ? (
          <div
            className={clsx(
              'rounded-full',
              ['px-3 py-2'],
              'bg-accent-200 text-accent-700',
              'dark:bg-accent-600/20 dark:text-accent-400'
            )}
          >
            {tag8}
          </div>
        ) : null}
        {tag9 != '' ? (
          <div
            className={clsx(
              'rounded-full',
              ['px-3 py-2'],
              'bg-accent-200 text-accent-700',
              'dark:bg-accent-600/20 dark:text-accent-400'
            )}
          >
            {tag9}
          </div>
        ) : null}
        {tag10 != '' && !state.includes('') ? (
          <div
            className={clsx(
              'rounded-full',
              ['px-3 py-2'],
              'bg-accent-200 text-accent-700',
              'dark:bg-accent-600/20 dark:text-accent-400'
            )}
          >
            {tag10}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default TodoItem;
