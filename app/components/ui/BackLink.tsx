'use client';

import { useHoverStyle } from '../../lib/hooks/useHoverStyle';
import { BackArrowIcon } from '../icons';
import Link from 'next/link';

interface BackLinkProps {
  href: string;
  label: string;
  marginBottom?: number;
}

export const BackLink = ({ href, label, marginBottom = 48 }: BackLinkProps) => {
  const { style, onMouseEnter, onMouseLeave } = useHoverStyle(
    {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: 'var(--text-muted)',
      marginBottom,
      transition: 'color 0.2s',
    },
    { color: 'var(--text-primary)' }
  );

  return (
    <Link href={href} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <BackArrowIcon />
      {label}
    </Link>
  );
};
