import Image from "next/image";
import localFont from "next/font/local";
import 'tailwindcss/tailwind.css';
import { VideoCard } from "../src/components/videoCard";
import { VideoGrid } from "../src/components/videoGrid";

export default function Home() {
  return (
    <div>
      <VideoGrid></VideoGrid>
      </div>
  );
}
