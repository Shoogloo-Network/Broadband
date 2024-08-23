import type { Metadata, ResolvingMetadata } from "next";
import HotstarComponent from "@/Components/Hotstar/HotstarComponent";

export async function generateMetadata(
    { params, searchParams }: any,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
  
    return {
      title: "Disney+ Hotstar: Stream Your Favorite Shows and Movies Online",
      description: "Watch your favorite movies, TV shows, sports, and more on Disney+ Hotstar. Enjoy a wide range of content from Bollywood to regional languages. Stream in HD quality and stay updated with the lat",
      keywords: "Hotstar, Indian streaming, online entertainment, Bollywood, regional content, live sports, HD streaming, TV shows, movies"
    }
  }

const Hotstar = () => {
    return (
        <HotstarComponent />
    );
};

export default Hotstar;
