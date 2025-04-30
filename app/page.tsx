import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AnimeShelf from "./_components/AnimeShelf";
import Manga from "./manga/page";
import MangaShelf from "./_components/MangaShelf";

const Home = () => {

  return (
    <div className="flex flex-col gap-4">
      <Hero/>
      <AnimeShelf/>
      <MangaShelf/>
    </div>
  );
};

export default Home;
