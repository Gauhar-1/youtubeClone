import Image from "next/image";
import localFont from "next/font/local";
import 'tailwindcss/tailwind.css';
import { VideoCard } from "../src/components/videoCard";

export default function Home() {
  return (
    <div>
      <VideoCard title={"The Final Boss Was A Bully | Black Myth Wukong - Part 4"} channel ={"BeastBoyShub"} views={"547K views | 1 month ago"} image={"./carry.webp"} thumbImage={"./carryLogo.jpg"}></VideoCard>
    </div>
  );
}
