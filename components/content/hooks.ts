import { DictonaryResponse } from "@/services/types";
import { useState } from "react";

export const useHooks = (data: DictonaryResponse[]) => {
  const [contentData, setContentData] = useState(data);

  return {
    contentData,
    setContentData,
  };
};
