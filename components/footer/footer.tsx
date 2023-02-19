import { DictonaryResponse } from "@/services/types";
import type { NextPage } from "next";

type Props = {
  data: DictonaryResponse[];
};

const Footer: NextPage<Props> = ({ data }) => {
  const yearNow = new Date().getFullYear();

  return (
    <footer
      className={`${
        Array.isArray(data) ? "absolute" : ""
      } bottom-0 left-0 right-0 py-[30px]`}
    >
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
