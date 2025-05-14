import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-6 px-4 py-12 sm:py-20 md:py-24 lg:py-32 xl:py-48 text-center bg-gradient-to-b from-indigo-950 via-blue-900 to-indigo-900">
      <h1 className="text-3xl text-white font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        Track Your Anime & Manga Journey
      </h1>
      <p className="max-w-[700px] text-gray-300 text-base sm:text-lg md:text-xl">
        Discover, collect, and share your favorite anime and manga with Tomodachi,
        your personal anime and manga companion.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="w-full sm:w-auto">
          <Link href="/anime">Explore Anime</Link>
        </Button>
        <Button size="lg" variant="outline" className="w-full sm:w-auto">
          <Link href="/manga">Discover Manga</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
