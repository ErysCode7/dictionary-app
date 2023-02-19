import type { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import Header from "../header/header";

type Props = {
  children?: ReactNode;
};

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      {/* HEADER META TAGS */}
      <Head>
        <meta
          name="description"
          content="Dictionary Website, Dictionary App, Dictionary Web-App"
        />
        <meta
          name="keywords"
          content="Dictionary, Dictionary App, Dictionary Application, Dictionary Website, Dictionary App"
        />
        <meta name="author" content="Erys Mozo | @Eryscode7" />
        <title>Dictionary App</title>
      </Head>

      {/* HEADER / NAVBAR */}
      <Header />
      {/* PAGE CONTENTS */}
      <div>{children}</div>
    </>
  );
};

export default Layout;
