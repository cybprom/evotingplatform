import Image from "next/image";
import Tabs from "./components/Tabs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col itemscenter justifybetween py-12 px3 px-2 md:p-24">
      <Tabs />
    </main>
  );
}
