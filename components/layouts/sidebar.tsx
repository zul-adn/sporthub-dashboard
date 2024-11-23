"use client";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { toggleSidebar } from "@/store/themeConfigSlice";
import AnimateHeight from "react-animate-height";
import { IRootState } from "@/store";
import { useState, useEffect } from "react";
import IconCaretsDown from "@/components/icon/icon-carets-down";
import IconMenuDashboard from "@/components/icon/menu/icon-menu-dashboard";
import IconCaretDown from "@/components/icon/icon-caret-down";
import IconMinus from "@/components/icon/icon-minus";
import IconMenuChat from "@/components/icon/menu/icon-menu-chat";
import IconMenuMailbox from "@/components/icon/menu/icon-menu-mailbox";
import IconMenuTodo from "@/components/icon/menu/icon-menu-todo";
import IconMenuNotes from "@/components/icon/menu/icon-menu-notes";
import IconMenuScrumboard from "@/components/icon/menu/icon-menu-scrumboard";
import IconMenuContacts from "@/components/icon/menu/icon-menu-contacts";
import IconMenuInvoice from "@/components/icon/menu/icon-menu-invoice";
import IconMenuCalendar from "@/components/icon/menu/icon-menu-calendar";
import IconMenuComponents from "@/components/icon/menu/icon-menu-components";
import IconMenuElements from "@/components/icon/menu/icon-menu-elements";
import IconMenuCharts from "@/components/icon/menu/icon-menu-charts";
import IconMenuWidgets from "@/components/icon/menu/icon-menu-widgets";
import IconMenuFontIcons from "@/components/icon/menu/icon-menu-font-icons";
import IconMenuDragAndDrop from "@/components/icon/menu/icon-menu-drag-and-drop";
import IconMenuTables from "@/components/icon/menu/icon-menu-tables";
import IconMenuDatatables from "@/components/icon/menu/icon-menu-datatables";
import IconMenuForms from "@/components/icon/menu/icon-menu-forms";
import IconMenuUsers from "@/components/icon/menu/icon-menu-users";
import IconMenuPages from "@/components/icon/menu/icon-menu-pages";
import IconMenuAuthentication from "@/components/icon/menu/icon-menu-authentication";
import IconMenuDocumentation from "@/components/icon/menu/icon-menu-documentation";
import { usePathname } from "next/navigation";
import { getTranslation } from "@/i18n";
import { mainMenu } from "@/app/const";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { t } = getTranslation();
  const pathname = usePathname();
  const [currentMenu, setCurrentMenu] = useState<string>("");
  const [errorSubMenu, setErrorSubMenu] = useState(false);
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const semidark = useSelector(
    (state: IRootState) => state.themeConfig.semidark
  );
  const toggleMenu = (value: string) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  useEffect(() => {
    const selector = document.querySelector(
      '.sidebar ul a[href="' + window.location.pathname + '"]'
    );
    if (selector) {
      selector.classList.add("active");
      const ul: any = selector.closest("ul.sub-menu");
      if (ul) {
        let ele: any =
          ul.closest("li.menu").querySelectorAll(".nav-link") || [];
        if (ele.length) {
          ele = ele[0];
          setTimeout(() => {
            ele.click();
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    setActiveRoute();
    if (window.innerWidth < 1024 && themeConfig.sidebar) {
      dispatch(toggleSidebar());
    }
  }, [pathname]);

  const setActiveRoute = () => {
    let allLinks = document.querySelectorAll(".sidebar ul a.active");
    for (let i = 0; i < allLinks.length; i++) {
      const element = allLinks[i];
      element?.classList.remove("active");
    }
    const selector = document.querySelector(
      '.sidebar ul a[href="' + window.location.pathname + '"]'
    );
    selector?.classList.add("active");
  };

  return (
    <div className={semidark ? "dark" : ""}>
      <nav
        className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 ${
          semidark ? "text-white-dark" : ""
        }`}>
        <div className="h-full bg-white dark:bg-black">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="main-logo flex shrink-0 items-center">
              <img
                className="ml-[5px] w-8 flex-none"
                src="/assets/images/logo.svg"
                alt="logo"
              />
              <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">
                VRISTO
              </span>
            </Link>

            <button
              type="button"
              className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
              onClick={() => dispatch(toggleSidebar())}>
              <IconCaretsDown className="m-auto rotate-90" />
            </button>
          </div>
          <PerfectScrollbar className="relative h-[calc(100vh-80px)]">
            <ul className="relative space-y-0.5 p-4 py-0 font-semibold">
                {mainMenu.map((menu, index) => (
                    <li className="menu nav-item" key={index}>
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
                            currentMenu !== menu.id
                              ? "-rotate-90 rtl:rotate-90"
                              : ""
                          }>
                          <IconCaretDown />
                        </div>
                      </button>
                    ) : (
                      <li className="nav-item" key={index}>
                        <Link href={menu.href ?? '#'} className="group">
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
                      <AnimateHeight
                        duration={300}
                        height={currentMenu === menu.id ? "auto" : 0}>
                        <ul className="sub-menu text-gray-500">
                          {menu.subMenu.map((submenu: any, index) => (
                            <li key={index}>
                              <Link href={submenu.href}>{t(submenu?.label)}</Link>
                            </li>
                          ))}
                        </ul>
                      </AnimateHeight>
                    )}
                  </li>
                ))}
            </ul>
          </PerfectScrollbar>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
