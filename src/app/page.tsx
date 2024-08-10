import { Description } from "./componets/Home/Description";
import { Hero } from "./componets/Home/Hero";
import { MainProducts } from "./componets/Home/MainProducts/MainProducts";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Description/>
      <Hero/>
      <MainProducts/>
    </main>
  );
}
