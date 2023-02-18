import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { useState } from "react";
import { BiBook } from "react-icons/bi";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

type Props = {};

const Header: NextPage = (props: Props) => {
  const { theme, setTheme } = useTheme();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toogleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  return (
    <header className="h-24 shadow-sm bg-white dark:bg-[#1e1c1c]">
      <div className="flex items-center justify-between w-[85%] m-auto h-full">
        <div className="flex items-center gap-2">
          <BiBook className="font-bold text-xl md:text-2xl lg:text-4xl" />
          <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">
            Dictionary
          </h1>
        </div>

        {isDarkMode ? (
          <RiSunLine
            className="cursor-pointer text-xl md:text-2xl lg:text-4xl"
            onClick={() => toogleDarkMode()}
          />
        ) : (
          <RiMoonLine
            className="cursor-pointer text-xl md:text-2xl lg:text-4xl"
            onClick={() => toogleDarkMode()}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
