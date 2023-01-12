import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
//配置中文的配置文件
import translation_zh_cn from './zh-cn.json';
//配置繁体的配置文件
import translation_zh_hk from './zh-hk.json';
//配置英文的配置文件
import translation_en_us from './en-us.json';
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    "zh-CN": {
        translation: translation_zh_cn
    },
    "zh-HK": {
        translation: translation_zh_hk
    },
    "en-US": {
        translation: translation_en_us
    },
};

i18n.use(LanguageDetector) //嗅探当前浏览器语言
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "zh-CN",
        debug: false,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        detection: {
            caches: ['localStorage', 'sessionStorage', 'cookie'],
        }
    })

export default i18n
