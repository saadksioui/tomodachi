import Image from "next/image";

const MangaCard = ({ manga }: { manga: any }) => {

  return (
    <div className="flex flex-col items-start">
      <div className="w-full relative">
        <Image
          src={manga.images.jpg.large_image_url}
          alt={manga.title}
          width={460}
          height={650}
          className="h-80 w-full object-cover"
        />

      </div>
      <p className="text-sm text-gray-500 line-clamp-2 mt-2">{manga.title}</p>
    </div>
  );
};

export default MangaCard;
