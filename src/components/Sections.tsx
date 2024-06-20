import React, { FC } from "react";

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
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="relative group bg-neutral-900 rounded-lg border-2 border-neutral-700 bg-gradient-to-t from-neutral-800 to-neutral-900 p-5 my-10">
        <div className="sm:flex items-center gap-5 text-center sm:text-start border-y-2 border-neutral-700 rounded-md p-5 mb-5">
          <p className="text-3xl w-max border-y-2 border-b-blue-800/70 border-t-blue-500/70 rounded-full font-bold py-2 px-4 mx-auto sm:mx-0">
            {id}
          </p>
          <div className="sm:flex items-center justify-between w-full">
            <div>
              <h2 className="text-3xl font-bold">{title}</h2>
              <span className="text-sm text-neutral-400">{date}</span>
            </div>
            <p className="text-yellow-500 text-xl">{star}</p>
          </div>
        </div>
        <p>{text}</p>
        <ul className=" border-4 border-neutral-700 rounded-md bg-neutral-800 myShadow w-max mx-auto p-5 mt-5">
          <p>Projektet udviked i: </p>
          <li className="text-sm text-neutral-400">{developed}</li>
          <li className="text-sm text-neutral-400">{devVersion}</li>
          <p>Back-end udviked i: </p>
          <li className="text-sm text-neutral-400">{database}</li>
          <li className="text-sm text-neutral-400">{dataVersion}</li>
        </ul>
        <p className="text-sm font-bold absolute -bottom-1 group-hover:-bottom-8 transition-all duration-300 left-1/2 -translate-x-1/2 bg-neutral-700 rounded-md px-5 py-2 -z-10">
          Klik for at se projektet
        </p>
      </div>
    </a>
  );
};

export default Sections;
