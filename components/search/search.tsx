import type { NextPage } from "next";
import { BsSearch } from "react-icons/bs";

type Props = {};

const Search: NextPage = (props: Props) => {
  return (
    <div className="w-full m-auto text-center">
      <div className="relative">
        <input
          type="text"
          name="search"
          id="search"
          className="bg-gray-100 border-none outline-none p-3 rounded-[12px] w-full dark:text-black lg:h-[60px]"
          placeholder="Search..."
        />
        <BsSearch className="absolute top-[50%] translate-y-[-50%] right-[20px] z-10 dark:text-black" />
      </div>
    </div>
  );
};

export default Search;
