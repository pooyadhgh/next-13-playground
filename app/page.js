import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint
        temporibus nam necessitatibus nisi vitae ducimus enim, cupiditate, nihil
        illum aliquam? Perspiciatis fuga facere nobis possimus magni aliquam at,
        ab ullam perferendis quas modi aperiam cum repellat dignissimos quo
        nulla omnis nostrum ex? Porro illum voluptatibus molestias aut tempora
        fuga.
      </p>
      <h2>Links</h2>
      <ui>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/about/team'>Team</Link>
        </li>
      </ui>
    </>
  );
};

export default Home;
