import type { NextPage } from "next";

type Props = {};

const Search: NextPage = (props: Props) => {
  return (
    <div className="w-full m-auto text-center">
      <input
        type="text"
        name="search"
        id="search"
        className="bg-gray-100 border-none outline-none p-3 rounded-[12px] w-4/5 m-auto h-[3.175rem] dark:text-black"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
