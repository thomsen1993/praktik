import React, { FC } from "react";

import { Meteors } from "@/components/ui/meteors";

interface Props {
  id: number;
  title: string;
  date: string;
  star: string;
  link: string;
  text: string;
  developed: string | undefined;
  devVersion: string | undefined;
  database: string | undefined;
  dataVersion: string | undefined;
}

const Sections: FC<Props> = ({
  id,
  title,
  date,
  star,
  link,
  text,
  developed,
  devVersion,
  database,
  dataVersion,
}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className=" my-5">
      <div className="grid grid-rows-[auto_1fr] h-full relative group bg-neutral-900 rounded-lg border-2 border-t-[#336699] border-l-[#336699] border-r-[#86BBD8] border-b-[#86BBD8] bg-gradient-to-t from-neutral-800 to-neutral-900">
        <div className="sm:flex items-center gap-5 min-h-[150px] bg-neutral-950 text-center sm:text-start  rounded-t-md relative overflow-hidden p-5">
          <Meteors />
          <h2 className="text-3xl w-max border-y-2 border-b-[#86BBD8] border-t-[#336699] rounded-full font-bold py-2 px-4 mx-auto sm:mx-0">
            {id}
          </h2>
          <div className="lg:flex items-center justify-between w-full">
            <div>
              <h2 className="text-xl font-bold">{title}</h2>
              <h3 className="text-sm">{date}</h3>
            </div>
            <p className="text-yellow-500 text-xl">{star}</p>
          </div>
        </div>
        <div className="grid grid-rows-[1fr_auto]">
          <p className="p-5">{text}</p>
          <div className="flex justify-between rounded-b-md bg-neutral-900 p-5">
            <ul>
              <h3>Projektet udviked i: </h3>
              <li className="text-sm text-neutral-400">{developed}</li>
              <li className="text-sm text-neutral-400">{devVersion}</li>
            </ul>
            <ul>
              <h3>Back-end udviked i: </h3>
              <li className="text-sm text-neutral-400">{database}</li>
              <li className="text-sm text-neutral-400">{dataVersion}</li>
            </ul>
          </div>
        </div>
        <p className="text-sm font-bold absolute -bottom-1 group-hover:-bottom-8 transition-all duration-300 left-1/2 -translate-x-1/2 bg-[#86BBD8] rounded-md px-5 py-2 -z-10">
          Klik for at se projektet
        </p>
      </div>
    </a>
  );
};

export default Sections;
