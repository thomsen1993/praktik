import Image from "next/image";

import benny from "../../public/benny.jpg";
import Sections from "@/components/Sections";

import data from "../../public/data.json";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  const lastData = data[data.length - 1];

  const words = `Benny Thomsen`;
  return (
    <main className="max-w-screen-lg mx-auto px-5 my-10">
      <header className="bg-neutral-800 rounded-lg border-2 border-neutral-700 p-5">
        <figure className="border-y-4 border-b-blue-800/70 border-t-blue-500/70 rounded-md shadow-lg shadow-white/10 bg-neutral-950 p-5 mb-5 w-max mx-auto">
          <Image
            src={benny}
            alt=""
            width={250}
            height={250}
            className="rounded-full border-2 border-neutral-700"
          ></Image>
        </figure>
        <div className="border-y-2 border-neutral-700 rounded-md w-full text-center bg-neutral-950 shadow-lg shadow-white/10 p-5">
          <TextGenerateEffect words={words} />
          <h2 className="">Skolepraktik rapporten</h2>
          <h3 className=" text-sm">02-April / 21-juni-2024</h3>
        </div>
      </header>
      <section className="grid md:grid-cols-2 gap-5">
        {data.slice(0, 4).map((item) => (
          <Sections
            key={item.id}
            id={item.id}
            title={item.title}
            link={item.link}
            date={item.date}
            star={item.rating}
            text={item.content}
            developed={item.developed.name}
            devVersion={item.developed.version}
            database={item.database.name}
            dataVersion={item.database.version}
          ></Sections>
        ))}
        <div className="md:col-span-2 bg-gradient-to-t from-neutral-800 to-neutral-900 rounded-lg border-2 border-neutral-700 p-5 mt-5">
          <div className="sm:flex items-center gap-5 text-center sm:text-start border-y-2 border-neutral-700 rounded-md bg-neutral-950 w-full p-5">
            <p className="text-3xl w-max border-y-2 border-b-blue-800/70 border-t-blue-500/70 rounded-full font-bold py-2 px-4 mx-auto sm:mx-0">
              {lastData.id}
            </p>
            <h1 className="text-3xl font-bold">{lastData.title}</h1>
          </div>
          <p className="mt-5">{lastData.content}</p>
        </div>
      </section>
    </main>
  );
}
