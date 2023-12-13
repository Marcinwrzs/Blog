import axiosInstance from "api/axios/axios";
import { LatestPosts, StrapiResponse } from "./types";

export const getLatetsPosts = async (): Promise<LatestPosts[]> => {
  const { data: { data } } = await axiosInstance.get<StrapiResponse<LatestPosts[]>>('/articles');
  return data
}
