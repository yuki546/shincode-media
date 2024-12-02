import { client } from "./client";
// import { client } from "@/libs/client";

// 記事の全取得
export const getAllArticles = async () => {
  const data = await client.get({ endpoint: "articles" });

  return { data };
};
