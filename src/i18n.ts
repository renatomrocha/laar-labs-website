import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n.use(HttpBackend) // Load translations from /public/locales
	.use(initReactI18next) // Connect with React
	.use(I18nextBrowserLanguageDetector)
	.init({
		fallbackLng: "en",
		debug: false,
		interpolation: {
			escapeValue: false, // React already escapes
		},
	});

export default i18n;
