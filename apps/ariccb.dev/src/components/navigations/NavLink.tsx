import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import type { ReactNode } from 'react';

export type NavLinkProps = {
  title: string;
  href: string;
  icon?: ReactNode;
};

function NavLink({ title, href, icon = null }: NavLinkProps) {
  const router = useRouter();
  const isActive =
    href === '/'
      ? router.pathname === href
      : router.pathname === href || router.pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={clsx('nav-link', isActive && 'nav-link--active')}
    >
      {title}
      {icon}
    </Link>
  );
}

export default NavLink;
