"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BiMoon } from "react-icons/bi";
import { MdOutlineWbSunny } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";

interface ThemesType {
  value: string;
  icon: any;
}
const Theme = () => {
  const { theme, setTheme } = useTheme();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const themes: ThemesType[] = [
    { value: "system", icon: <HiOutlineDesktopComputer /> },
    { value: "dark", icon: <BiMoon /> },
    { value: "light", icon: <MdOutlineWbSunny /> },
  ];

  if (Loading) {
    return (
      <div className="flex justify-content-center">
        <div className="inline-flex rounded-2xl shadow-sm border dark:border-gray-600 border-gray-300 dark:bg-zinc-900 bg-gray-200">
          {themes.map((i, k) => (
            <div
              key={k}
              className="inline-flex items-center px-2 py-1.5 text-lg bg-transparent rounded-xl border-gray-900 p-2"
            >
              {i.icon}
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-content-center">
      <div className="inline-flex rounded-2xl shadow-sm border dark:border-gray-600 border-gray-300 dark:bg-zinc-900 bg-gray-100 backdrop-blur-xl">
        {themes.map((i, k) => (
          <button
            key={k}
            onClick={() => {
              setTheme(i.value);
            }}
          >
            <span
              className={
                i.value === theme
                  ? "inline-flex items-center px-2 py-1.5 text-xl duration-100 ease-linear rounded-2xl border-gray-900 p-2 bg-gray-300 dark:bg-gray-600/70 text-cyan-500"
                  : "inline-flex items-center px-2 py-1.5 text-xl hover:bg-gray-200 dark:hover:bg-gray-700 duration-100 ease-linear rounded-2xl border-gray-900 p-2"
              }
            >
              {i.icon}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Theme;
