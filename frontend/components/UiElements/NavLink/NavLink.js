import React, { Children } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ActiveLink = ({
  children,
  activeClassName,
  href,
  ...props
}) => {
  const { pathname } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';
  const newpathname = pathname.split('/').slice(1, 2);
  const path = `/${newpathname[0]}`;

  const className =
    path === href
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link href={href} {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
