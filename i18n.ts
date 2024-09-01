const cookieObj = typeof window === 'undefined' ? require('next/headers') : require('universal-cookie');

import en from './public/locales/en.json';
import Cookies from 'universal-cookie';

const langObj: any = { en};

const getLang = () => {
    let lang = 'en';
    // if (typeof window !== 'undefined') {
    //     const cookies = new cookieObj.default(null, { path: '/' });
    //     lang = cookies.get('i18nextLng');
    // } else {
    //     const cookies = cookieObj.cookies();
    //     lang = cookies.get('i18nextLng')?.value;
    // }
    return lang;
};

export const getTranslation = () => {
    const lang = getLang();
    const data: any = langObj[lang || 'en'];

    const t = (key: string) => {
        return data[key] ? data[key] : key;
    };

    const initLocale = (themeLocale: string) => {
        const lang = getLang();
        i18n.changeLanguage(lang || themeLocale);
    };

    const i18n = {
        language: lang,
        changeLanguage: (lang: string) => {
            const cookies = new Cookies(null, { path: '/' });
            cookies.set('i18nextLng', lang);
        },
    };

    return { t, i18n, initLocale };
};
