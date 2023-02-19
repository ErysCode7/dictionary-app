import { DictonaryResponse } from "@/services/types";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

type Props = {
  data: DictonaryResponse[];
};

const Content: NextPage<Props> = ({ data }) => {
  const [play, setPlay] = useState<boolean>(false);
  const audioRef = useRef<any>(null);

  const playAudio = () => {
    setPlay((prev) => !prev);
  };

  useEffect(() => {
    if (play === true) {
      audioRef?.current?.play();
    } else {
      audioRef?.current?.pause();
    }
  }, [play]);

  if (!Array.isArray(data)) {
    return (
      <section className="mt-[120px] flex flex-col gap-3">
        <h3 className="text-2xl md:text-4xl font-bold">
          No Definitions Found!
        </h3>
        <p className="text-base sm:text-xl">
          Sorry pal, we couldn't find definitions for the word you were looking
          for.
        </p>
        <p className="text-base sm:text-xl">
          You can try the search again at later time or head to the web instead.
        </p>
      </section>
    );
  }

  return (
    <>
      <section className="mt-[35px]">
        {Array.isArray(data) &&
          data?.map((content, idx) => (
            <article key={idx}>
              <div className="flex items-center justify-between">
                {/* CONTENT */}
                <div>
                  <h1 className="font-bold text-xl sm:text-4xl lg:text-6xl xl:text-7xl">
                    {content?.word}
                  </h1>
                  <h4 className="mt-2 text-purple-600 sm:text-lg">
                    {content?.phonetic}
                  </h4>
                </div>
                {/* AUDIO */}
                {play ? (
                  <div
                    className="bg-purple-600 rounded-full p-2 cursor-pointer"
                    onClick={playAudio}
                  >
                    <FaPause className="text-[40px] p-2" />
                  </div>
                ) : (
                  <div
                    className="bg-purple-600 rounded-full p-2 cursor-pointer"
                    onClick={playAudio}
                  >
                    <FaPlay className="text-[40px] p-2" />
                  </div>
                )}
                {content.phonetics.map((audio, idx) => (
                  <div className="hidden" key={idx}>
                    <audio ref={audioRef}>
                      <source src={audio?.audio} type="audio/mp3" />
                    </audio>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center justify-between gap-4 mt-5">
                  <h3 className="text-base sm:text-lg">noun</h3>
                  <div className="w-full flex-grow border border-gray-200"></div>
                </div>
                <div>
                  <h3 className="text-gray-500 dark:text-gray-200 text-xl mt-5 mb-4">
                    Meaning
                  </h3>
                  <ul className="flex flex-col gap-4 pl-5">
                    {content?.meanings[0]?.definitions?.map(
                      (definition, idx) => (
                        <div key={idx}>
                          <li className="list-disc ">
                            <p>{definition?.definition}</p>
                          </li>
                        </div>
                      )
                    )}
                  </ul>
                  {content?.meanings[0]?.synonyms?.map((synonym, idx) => (
                    <div key={idx} className="flex items-center gap-3 mt-5">
                      <h3 className="text-gray-500 dark:text-gray-200 text-base sm:text-xl md:text-2xl">
                        Synonyms
                      </h3>
                      <p className="text-purple-600 text-base sm:text-xl md:text-2xl font-semibold">
                        {synonym}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-4 mt-5">
                  <h3 className="text-base sm:text-lg">verb</h3>
                  <div className="w-full flex-grow border border-gray-200"></div>
                </div>
                <div>
                  <h3 className="text-gray-500 dark:text-gray-200 text-xl mt-5 mb-4">
                    Meaning
                  </h3>
                  <ul className="flex flex-col gap-4 pl-5">
                    {content?.meanings[1]?.definitions?.map(
                      (definition, idx) => (
                        <div key={idx}>
                          <li className="list-disc ">
                            <p>{definition?.definition}</p>
                            <p className="text-gray-500 dark:text-gray-200">{`"${definition.example}"`}</p>
                          </li>
                        </div>
                      )
                    )}
                  </ul>
                </div>
                <div className="w-full my-5 border border-gray-200"></div>
                <div className="flex items-center gap-4">
                  <h3 className="text-gray-500 dark:text-gray-200">Source</h3>
                  {content.sourceUrls.map((source) => (
                    <Link
                      href={source}
                      key={source}
                      className="underline cursor-pointer"
                      target="_blank"
                    >
                      {source}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
      </section>
    </>
  );
};

export default Content;
