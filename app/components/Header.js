import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ui>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/about/team'>Team</Link>
          </li>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
        </ui>
      </nav>
    </header>
  );
};

export default Header;
