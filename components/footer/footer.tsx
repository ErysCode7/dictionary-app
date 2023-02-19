import type { NextPage } from "next";

type Props = {};

const Footer: NextPage = (props: Props) => {
  const yearNow = new Date().getFullYear();

  return (
    <footer className=" bottom-0 left-0 right-0 py-[30px]">
      <div className="w-4/5 m-auto sm:flex items-center justify-between">
        <h2 className="mb-2 sm:mb-0">
          Copyright © Dictionary App {yearNow}. All rights reserved
        </h2>
        <span>Dictionary App</span>
      </div>
    </footer>
  );
};

export default Footer;
