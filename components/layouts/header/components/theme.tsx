import IconLaptop from '@/components/icon/icon-laptop';
import IconMoon from '@/components/icon/icon-moon';
import IconSun from '@/components/icon/icon-sun';
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  toggleTheme,
} from "@/store/themeConfigSlice";
import { IRootState } from '@/store';

type Props = {}

function Theme({}: Props) {
    const dispatch = useDispatch();
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  return (
     <div>
              {themeConfig.theme === "light" ? (
                <button
                  className={`${
                    themeConfig.theme === "light" &&
                    "flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
                  }`}
                  onClick={() => dispatch(toggleTheme("dark"))}>
                  <IconSun />
                </button>
              ) : (
                ""
              )}
              {themeConfig.theme === "dark" && (
                <button
                  className={`${
                    themeConfig.theme === "dark" &&
                    "flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
                  }`}
                  onClick={() => dispatch(toggleTheme("system"))}>
                  <IconMoon />
                </button>
              )}
              {themeConfig.theme === "system" && (
                <button
                  className={`${
                    themeConfig.theme === "system" &&
                    "flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
                  }`}
                  onClick={() => dispatch(toggleTheme("light"))}>
                  <IconLaptop />
                </button>
              )}
            </div> 
  );
}

export default Theme