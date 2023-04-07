import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ui>
          <li>
            <Link prefetch={false} href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link prefetch={false} href='/about'>
              About
            </Link>
          </li>
          <li>
            <Link prefetch={false} href='/about/team'>
              Team
            </Link>
          </li>
          <li>
            <Link prefetch={false} href='/posts'>
              Posts
            </Link>
          </li>
        </ui>
      </nav>
    </header>
  );
};

export default Header;
