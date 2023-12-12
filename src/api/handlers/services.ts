import axiosInstance from "api/axios/axios";
import { ArticleType } from "./types";

export const getLatetsPosts = async (): Promise<ArticleType[]> => {
  return (await axiosInstance.get("/articles")).data.data;
}