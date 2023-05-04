import Image from "next/image";
import { Inter } from "next/font/google";
import Posts from "./posts";
import Title from "./title";
import SearchBar from "./searchbar";
import DatePicker from "./datePicker";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Title />
      <SearchBar />
      <div className="flex justify-between">
        <DatePicker title="Check-in Date" />
        <DatePicker title="Check-out Date" />
      </div>
      <Posts />
    </main>
  );
}
