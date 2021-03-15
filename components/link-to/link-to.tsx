/* eslint-disable jsx-a11y/anchor-is-valid -- NextJS workaround, known issue */
import Link from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function LinkTo({ href, children }: Props): JSX.Element {
  return (
    <Link href={href}>
      <a>
        {children}
      </a>
    </Link>
  );
}

/* eslint-enable jsx-a11y/anchor-is-valid*/
