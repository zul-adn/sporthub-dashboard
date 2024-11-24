/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { IRootState } from "@/store";
import {
  toggleSidebar,
  toggleMenu,
} from "@/store/themeConfigSlice";
import IconMenu from "@/components/icon/icon-menu";
import IconMenuDashboard from "@/components/icon/menu/icon-menu-dashboard";
import IconCaretDown from "@/components/icon/icon-caret-down";
import { usePathname, useRouter } from "next/navigation";
import { getTranslation } from "@/i18n";
import LanguageButton from "./header/components/language-button";
import Notification from "./header/components/notification";
import Profile from "./header/components/profile";
import { mainMenu } from "@/app/const";
import IconMenuChat from "../icon/menu/icon-menu-chat";

const Header = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const { t, i18n } = getTranslation();

  useEffect(() => {
    const selector = document.querySelector(
      'ul.horizontal-menu a[href="' + window.location.pathname + '"]'
    );
    if (selector) {
      const all: any = document.querySelectorAll(
        "ul.horizontal-menu .nav-link.active"
      );
      for (let i = 0; i < all.length; i++) {
        all[0]?.classList.remove("active");
      }

      let allLinks = document.querySelectorAll("ul.horizontal-menu a.active");
      for (let i = 0; i < allLinks.length; i++) {
        const element = allLinks[i];
        element?.classList.remove("active");
      }
      selector?.classList.add("active");

      const ul: any = selector.closest("ul.sub-menu");
      if (ul) {
        let ele: any = ul.closest("li.menu").querySelectorAll(".nav-link");
        if (ele) {
          ele = ele[0];
          setTimeout(() => {
            ele?.classList.add("active");
          });
        }
      }
    }
  }, [pathname]);

  const isRtl =
    useSelector((state: IRootState) => state.themeConfig.rtlClass) === "rtl";

  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  

  function createMarkup(messages: any) {
    return { __html: messages };
  }
  const [messages, setMessages] = useState([
    {
      id: 1,
      image:
        '<span class="grid place-content-center w-9 h-9 rounded-full bg-success-light dark:bg-success text-success dark:text-success-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>',
      title: "Congratulations!",
      message: "Your OS has been updated.",
      time: "1hr",
    },
    {
      id: 2,
      image:
        '<span class="grid place-content-center w-9 h-9 rounded-full bg-info-light dark:bg-info text-info dark:text-info-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></span>',
      title: "Did you know?",
      message: "You can switch between artboards.",
      time: "2hr",
    },
    {
      id: 3,
      image:
        '<span class="grid place-content-center w-9 h-9 rounded-full bg-danger-light dark:bg-danger text-danger dark:text-danger-light"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>',
      title: "Something went wrong!",
      message: "Send Reposrt",
      time: "2days",
    },
    {
      id: 4,
      image:
        '<span class="grid place-content-center w-9 h-9 rounded-full bg-warning-light dark:bg-warning text-warning dark:text-warning-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">    <circle cx="12" cy="12" r="10"></circle>    <line x1="12" y1="8" x2="12" y2="12"></line>    <line x1="12" y1="16" x2="12.01" y2="16"></line></svg></span>',
      title: "Warning",
      message: "Your password strength is low.",
      time: "5days",
    },
  ]);

  const [currentMenu, setCurrentMenu] = useState<string>("");

  return (
    <header
      className={`z-40 ${
        themeConfig.semidark && themeConfig.menu === "horizontal" ? "dark" : ""
      }`}>
      <div className="shadow-sm">
        <div className="relative flex w-full items-center bg-white px-5 py-2.5 dark:bg-black">
          <div className="horizontal-logo flex items-center justify-between ltr:mr-2 rtl:ml-2 lg:hidden">
            <Link href="/" className="main-logo flex shrink-0 items-center">
              <img
                className="inline w-8 ltr:-ml-1 rtl:-mr-1"
                src="/assets/images/logo.svg"
                alt="logo"
              />
              <span className="hidden align-middle text-2xl  font-semibold  transition-all duration-300 ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light md:inline">
                SportHUB
              </span>
            </Link>
            <button
              type="button"
              className="collapse-icon flex flex-none rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary ltr:ml-2 rtl:mr-2 dark:bg-dark/40 dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary lg:hidden"
              onClick={() => dispatch(toggleSidebar())}>
              <IconMenu className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center space-x-1.5 ltr:ml-auto rtl:mr-auto rtl:space-x-reverse dark:text-[#d0d2d6] sm:flex-1 ltr:sm:ml-0 sm:rtl:mr-0 lg:space-x-2">
            <div className="sm:ltr:mr-auto sm:rtl:ml-auto"></div>

            {/* <Theme /> */}
            <LanguageButton />
            <Notification />
            <Profile />
          </div>
        </div>

        {/* horizontal menu */}
        <ul className="horizontal-menu hidden border-t border-[#ebedf2] bg-white px-6 py-1.5 font-semibold text-black rtl:space-x-reverse dark:border-[#191e3a] dark:bg-black dark:text-white-dark lg:space-x-1.5 xl:space-x-8">
          {mainMenu.map((menu, index) => (
            <li className="menu nav-item relative" key={index}>
              {menu.subMenu.length > 0 ? (
                <button
                  type="button"
                  className={`${
                    currentMenu === menu.id ? "active" : ""
                  } nav-link group w-full`}
                  onClick={() => toggleMenu(menu.id)}>
                  <div className="flex items-center">
                    <IconMenuDashboard className="shrink-0 group-hover:!text-primary" />
                    <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t(menu.label)}
                    </span>
                  </div>

                  <div
                    className={
                      currentMenu !== menu.id ? "-rotate-90 rtl:rotate-90" : ""
                    }>
                    <IconCaretDown />
                  </div>
                </button>
              ) : (
                <li className="menu nav-item relative" key={index}>
                  <Link
                    href={menu.href ?? "#"}
                    type="button"
                    className="nav-link">
                    <div className="flex items-center">
                      <IconMenuChat className="shrink-0 group-hover:!text-primary" />
                      <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                        {t(menu.label)}
                      </span>
                    </div>
                  </Link>
                </li>
              )}

              {menu.subMenu.length > 0 && (
                <ul className="sub-menu text-gray-500">
                  {menu.subMenu.map((submenu: any, index) => (
                    <li key={index}>
                      <Link href={submenu.href}>{t(submenu?.label)}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
