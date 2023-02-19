import { getDefinitionClientSide } from "@/services/dictionary-api";
import { DictonaryResponse } from "@/services/types";
import type { NextPage } from "next";
import { Dispatch, SetStateAction, useState } from "react";
import { BsSearch } from "react-icons/bs";

type Props = {
  data: DictonaryResponse[];
  setContentData: Dispatch<SetStateAction<DictonaryResponse[]>>;
};

const Search: NextPage<Props> = ({ data, setContentData }) => {
  const [search, setSearch] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await getDefinitionClientSide(search);
    setContentData(data);
  };

  return (
    <div className="w-full m-auto text-center">
      <form className="relative" onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          id="search"
          className="bg-gray-100 border-none outline-none p-3 rounded-[12px] w-full dark:text-black lg:h-[60px]"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <BsSearch className="absolute top-[50%] translate-y-[-50%] right-[20px] z-10 dark:text-black" />
      </form>
    </div>
  );
};

export default Search;
