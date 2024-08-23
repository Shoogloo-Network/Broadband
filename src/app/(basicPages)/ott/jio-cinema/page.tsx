import type { Metadata, ResolvingMetadata } from 'next'

import JioCinemaComponent from '@/Components/JioCinema/JioCinemaComponent';

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  return {
    title: "Jio Cinema | Stream Your Favorite Content Online",
    description: "Explore a vast collection of movies and TV shows on Jio Cinema. Stream your favorite content and enjoy unlimited entertainment with Jio Cinema.",
    keywords: "Jio Cinema, movies, TV shows, Bollywood, streaming, entertainment, exclusive originals, online streaming, watch online"
  }
}

const JioCinema = () => {
  return (
    <JioCinemaComponent />
  );
};

export default JioCinema;
