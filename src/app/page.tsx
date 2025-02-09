import dynamic from "next/dynamic";

const Main = dynamic(() => import("./main"), { ssr: true });
const Aside = dynamic(() => import("./aside"), { ssr: true });

export default function Home() {
  return (
    <div className="bg-primary flex w-full h-full min-h-screen pl-md pr-md pt-xl">
      <div className="md:flex w-full max-w-screen-xl mx-auto">
        <Aside />
        <Main />
      </div>
    </div>
  );
}
