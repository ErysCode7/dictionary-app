import Search from "@/components/search/search";
import type { NextPage } from "next";

type Props = {};

const Home: NextPage = (props: Props) => {
  return (
    <main className="w-[85%] m-auto my-[30px]">
      <Search />
    </main>
  );
};

export default Home;
