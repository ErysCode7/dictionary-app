import { DictonaryResponse } from "@/services/types";
import type { NextPage } from "next";
import Footer from "../footer/footer";
import Content from "./content";
import { useHooks } from "./hooks";
import Search from "./search";

type Props = {
  data: DictonaryResponse[];
};

const PageContent: NextPage<Props> = ({ data }) => {
  const { contentData, setContentData } = useHooks(data);

  return (
    <>
      <Search data={contentData} setContentData={setContentData} />
      <Content data={contentData} />
      <Footer data={contentData} />
    </>
  );
};

export default PageContent;
