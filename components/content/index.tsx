import { DictonaryResponse } from "@/services/types";
import type { NextPage } from "next";
import Content from "./content";
import { useHooks } from "./hooks";
import Search from "./search";

type Props = {
  data: DictonaryResponse[];
};

const PageContent: NextPage<Props> = ({ data }) => {
  const { contentData, setContentData } = useHooks(data);

  console.log(contentData);

  return (
    <>
      <Search data={contentData} setContentData={setContentData} />
      <Content data={contentData} />
    </>
  );
};

export default PageContent;
