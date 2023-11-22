import axiosInstance from "api/useAxios/axios";
import { ArticleType } from "./types";

export const getLatetsPosts = async (): Promise<ArticleType[]> => {
  return (await axiosInstance.get("/articles")).data.data;
}