import { getAnime, getManga } from "@/lib/animedb";
import Image from "next/image";

const Anime = async () => {
  const anime = await getAnime()
  const limitedAnime = anime.data.slice(0, 10);

  const manga = await getManga()
  const limitedManga = manga.data.slice(0, 10);

  return (
    <div>
      <h1>Top Anime</h1>
      <ul className="grid grid-cols-5 gap-5">
        {
          limitedAnime.map((item: any, index: number) => (
            <li key={index}>
              <Image src={item.images?.jpg?.large_image_url} alt={"item.title"} width={150} height={300}/>
            </li>
          ))
        }
      </ul>
      <h1>Top Manga</h1>
      <ul className="grid grid-cols-5 gap-5">
        {
          limitedManga.map((item: any, index: number) => (
            <li key={index}>
              <Image src={item.images?.jpg?.large_image_url} alt={"item.title"} width={150} height={300}/>
            </li>
          ))
        }
      </ul>
    </div>
  )
};

export default Anime
