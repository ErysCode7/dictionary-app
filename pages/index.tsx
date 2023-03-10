import PageContent from "@/components/content";
import { getDefinitionServerSIde } from "@/services/dictionary-api";
import { DictonaryResponse } from "@/services/types";
import type { GetServerSideProps, NextPage } from "next";

type Props = {
  data: DictonaryResponse[];
};

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <main className="w-4/5 m-auto my-[30px]">
        <PageContent data={data} />
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getDefinitionServerSIde();

  return {
    props: {
      data,
    },
  };
};
