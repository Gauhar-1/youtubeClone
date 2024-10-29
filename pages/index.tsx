import Image from "next/image";
import localFont from "next/font/local";
import 'tailwindcss/tailwind.css';
import { VideoCard } from "../src/components/videoCard";
import { VideoGrid } from "../src/components/videoGrid";
import { AppBar } from "@/src/components/appBar";
import { HomePage } from "@/src/components/homePage";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <div>
      <HomePage></HomePage>
    </div>
  );
}
