import type { Metadata, ResolvingMetadata } from "next";
import SonyLivComponent from "@/Components/SonyLiv/SonyLivComponent";

export async function generateMetadata(
    { params, searchParams }: any,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
  
    return {
      title: "SonyLiv - Watch Movies, TV Shows, and Live Sports Online",
      description: "Stream your favorite movies, TV shows, and live sports on SonyLiv. Enjoy a vast library of entertainment content on-demand.",
      keywords: "SonyLiv, streaming, movies, TV shows, live sports, online entertainment, on-demand, watch online"
    }
  }

const SonyLiv = () => {
    return (
        <SonyLivComponent />
    );
};

export default SonyLiv;

