import type { NextPage } from "next";

type Props = {};

const Footer: NextPage = (props: Props) => {
  const yearNow = new Date().getFullYear();

  return (
    <footer>
      <h2>Copyright © Dictionary App {yearNow}. All rights reserved</h2>
      <span>Dictionary App</span>
    </footer>
  );
};

export default Footer;
