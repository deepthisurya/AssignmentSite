import React from "react";
import Navigation from "./Navigation";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <title>Assignment Dev</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navigation />
    </>
  );
};

export default Header;
