import styles from './BackLink.module.css';
import { BackArrowIcon } from '../icons';
import Link from 'next/link';

interface BackLinkProps {
  href: string;
  label: string;
  marginBottom?: number;
}

export const BackLink = ({ href, label, marginBottom = 48 }: BackLinkProps) => {
  return (
    <Link
      href={href}
      className={styles.backLink}
      style={{ '--mb': `${marginBottom}px` } as React.CSSProperties}
    >
      <span className={styles.arrowWrapper}>
        <BackArrowIcon />
      </span>
      {label}
    </Link>
  );
};
