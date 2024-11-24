/* eslint-disable @next/next/no-img-element */
import Dropdown from '@/components/dropdown';
import React from 'react'
import { getTranslation } from "@/i18n";
import {
  toggleRTL,
} from "@/store/themeConfigSlice";
import { useDispatch, useSelector } from 'react-redux';
import {  useRouter } from "next/navigation";
import { IRootState } from '@/store';

type Props = {}

export default function LanguageButton({}: Props) {
    const { t, i18n } = getTranslation();
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();
    const router = useRouter();
    const setLocale = (flag: string) => {
        if (flag.toLowerCase() === "ae") {
            dispatch(toggleRTL("rtl"));
        } else {
        dispatch(toggleRTL("ltr"));
        }
        router.refresh();
    };

    return (
    <div className="dropdown shrink-0">
        <Dropdown
        offset={[0, 8]}
        placement={`bottom-start`}
        btnClassName="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
        button={
            i18n.language && (
            <img
                className="h-5 w-5 rounded-full object-cover"
                src={`/assets/images/flags/${i18n.language.toUpperCase()}.svg`}
                alt="flag"
            />
            )
        }>
        <ul className="grid w-[280px] grid-cols-2 gap-2 !px-2 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
            {themeConfig.languageList.map((item: any) => {
            return (
                <li key={item.code}>
                <button
                    type="button"
                    className={`flex w-full hover:text-primary ${
                    i18n.language === item.code
                        ? "bg-primary/10 text-primary"
                        : ""
                    }`}
                    onClick={() => {
                    i18n.changeLanguage(item.code);
                    setLocale(item.code);
                    }}>
                    <img
                    src={`/assets/images/flags/${item.code.toUpperCase()}.svg`}
                    alt="flag"
                    className="h-5 w-5 rounded-full object-cover"
                    />
                    <span className="ltr:ml-3 rtl:mr-3">{item.name}</span>
                </button>
                </li>
            );
            })}
        </ul>
        </Dropdown>
    </div>
    );
}