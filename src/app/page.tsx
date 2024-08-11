import { Description } from "app/components/Home/Description";
import { Hero } from "app/components/Home/Hero";
import { MainProducts } from "app/components/Home/MainProducts/MainProducts";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Description/>
      <Hero/>
      <MainProducts/>
    </main>
  );
}
