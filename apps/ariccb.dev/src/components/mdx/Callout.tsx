import type { PropsWithChildren, ReactElement } from 'react';
import clsx from 'clsx';
import {
  ErrorIcon,
  InfoIcon,
  NoteIcon,
  WarningIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  ReactIcon,
  TailwindCssIcon,
  ShadcnIcon,
  FramerMotionIcon,
  RiveIcon,
  OpenAiIcon
} from '@/components/Icons';

interface CalloutProps {
  variant?:
    | 'neutral'
    | 'info'
    | 'warning'
    | 'danger'
    | 'js'
    | 'react'
    | 'tailwind'
    | 'material-ui'
    | 'typescript'
    | 'framer-motion'
    | 'rive'
    | 'ai';
}

function Callout({
  variant = 'neutral',
  children = null,
}: PropsWithChildren<CalloutProps>) {
  let data: {
    title: string;
    icon: ReactElement;
    modifier: string;
  };

  switch (variant) {
    case 'neutral':
      data = {
        title: 'Note',
        icon: <NoteIcon />,
        modifier: '',
      };
      break;
    case 'info':
      data = {
        title: 'Info',
        icon: <InfoIcon />,
        modifier: 'mdx-callout--info',
      };
      break;
    case 'warning':
      data = {
        title: 'Heads Up',
        icon: <WarningIcon />,
        modifier: 'mdx-callout--warning',
      };
      break;
    case 'danger':
      data = {
        title: 'Important',
        icon: <ErrorIcon />,
        modifier: 'mdx-callout--danger',
      };
      break;
    case 'js':
      data = {
        title: 'JavaScript',
        icon: <JavaScriptIcon />,
        modifier: '',
      };
      break;
    case 'react':
      data = {
        title: 'React',
        icon: <ReactIcon />,
        modifier: '',
      };
      break;
    case 'tailwind':
      data = {
        title: 'Tailwind CSS',
        icon: <TailwindCssIcon />,
        modifier: '',
      };
      break;
    case 'material-ui':
      data = {
        title: 'Frontend UI Frameworks',
        icon: <ShadcnIcon />,
        modifier: '',
      };
      break;
    case 'framer-motion':
      data = {
        title: 'Framer Motion',
        icon: <FramerMotionIcon />,
        modifier: '',
      };
      break;
    case 'rive':
      data = {
        title: 'Rive',
        icon: <RiveIcon />,
        modifier: '',
      };
      break;
    case 'typescript':
      data = {
        title: 'TypeScript',
        icon: <TypeScriptIcon />,
        modifier: '',
      };
      break;
    case 'ai':
      data = {
        title: 'AI',
        icon: <OpenAiIcon />,
        modifier: '',
      };
      break;
    default:
      data = {
        title: 'Note',
        icon: <NoteIcon />,
        modifier: '',
      };
  }

  return (
    <div className={clsx('mdx-callout', data.modifier)}>
      <div className={clsx('mdx-callout__header')}>
        {data.icon}
        {data.title}
      </div>
      <div className={clsx('mdx-callout__content')}>{children}</div>
    </div>
  );
}

export default Callout;
