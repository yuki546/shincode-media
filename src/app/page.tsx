import ArticleCardList from "@/components/ArticleCardList";
import styles from "../styles/Home.module.css";
import { getAllArticles } from "@/libs/api";

export default async function Home() {
  const { articles } = await getAllArticles();

  return (
    <>
      <div
        className={`${styles.animatedBackground} h-40 -mb-40 relative w-full`}
      ></div>
      <main className="container mx-auto px-2 py-14">
        <div className="relative">
          <h2 className="text-center md:text-5xl z-20 relative text-white">
            ShinCode-Media
          </h2>
        </div>

        <div className="mt-24">
          <div className="mx-auto text-center py-4">
            <h2 className="md:text-4xl">記事一覧</h2>
            <ArticleCardList />
          </div>
        </div>
      </main>
    </>
  );
}
