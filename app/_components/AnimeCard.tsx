import Image from "next/image";

const AnimeCard = ({ anime }: { anime: any }) => {

  return (
    <div className="flex flex-col items-start">
      <div className="w-full relative">
        <Image
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          width={460}
          height={650}
          className="h-80 w-full object-cover"
        />

      </div>
      <p className="text-sm text-gray-500 line-clamp-2 mt-2">{anime.title}</p>
    </div>
  );
};

export default AnimeCard;
