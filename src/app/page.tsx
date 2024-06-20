import Image from "next/image";

import benny from "../../public/benny.jpg";
import Sections from "@/components/Sections";

import data from "../../public/data.json";

export default function Home() {
  const lastData = data[data.length - 1];
  return (
    <main className="max-w-screen-lg mx-auto px-5 my-10">
      <header className="bg-gradient-to-t from-neutral-800 to-neutral-900 rounded-lg border-2 border-neutral-700 p-5">
        <Image
          src={benny}
          alt=""
          width={250}
          height={250}
          className="rounded-full border-y-4 border-b-blue-800/70 border-t-blue-500/70 mb-5 mx-auto p-1"
        ></Image>
        <div className="border-y-2 border-neutral-700 rounded-md w-full text-center p-5">
          <h1 className="text-3xl font-bold">Benny Thomsen</h1>
          <p className="text-neutral-400">Skolepraktik rapporten</p>
        </div>
      </header>
      <section className="start">
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
        <div className="bg-gradient-to-t from-neutral-800 to-neutral-900 rounded-lg border-2 border-neutral-700 p-5">
          <div className="sm:flex items-center gap-5 text-center sm:text-start border-y-2 border-neutral-700 rounded-md w-full p-5">
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
