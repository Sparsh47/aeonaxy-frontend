import { useContext } from "react";
import { PageContext } from "../context";

export const UseContext = () => {
  const { page, setPage, start, setStart } = useContext(PageContext);

  return { page, setPage, start, setStart };
};
