import { useContext } from "react";
import { PageContext } from "../context";

export const UseContext = () => {
  const { page, setPage } = useContext(PageContext);

  return { page, setPage };
};
