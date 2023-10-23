import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import lang_en from "../translations/en/common.json"
import lang_nl from "../translations/nl/common.json"

const resources = {
    en: {
        translation: lang_en
    },
    nl: {
        translation: lang_nl
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: "en",

    interpolation: {
        escapeValue: false /* React has security for xss */
    }
})

export default i18n;