const DEFAULT_LANGUAGE = "en";

const translator = document.querySelector(".translator");
const languageButtons = document.querySelectorAll(".lang");
const couponKey = document.body.dataset.coupon;
const translations = window.CAE_TRANSLATIONS && window.CAE_TRANSLATIONS[couponKey];

let currentLanguage = DEFAULT_LANGUAGE;

function switchLanguage(lang){

    if(!translations || !translations[lang]){
        return;
    }

    currentLanguage = lang;
    document.documentElement.lang = lang;

    if(translations[lang].pageTitle){
        document.title = translations[lang].pageTitle;
    }

    document.querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key = element.dataset.i18n;

            if(translations[lang][key]){
                element.textContent = translations[lang][key];
            }
        });

    document.querySelectorAll("[data-i18n-aria-label]")
        .forEach(element => {

            const key = element.dataset.i18nAriaLabel;

            if(translations[lang][key]){
                element.setAttribute("aria-label", translations[lang][key]);
            }
        });

    languageButtons
        .forEach(button => {
            const isActive = button.dataset.lang === lang;

            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });
}

function updateTranslatorVisibility(){
    if(!translator){
        return;
    }

    const isAtTop = window.scrollY <= 8;

    translator.classList.toggle("is-visible", isAtTop);
    translator.classList.toggle("is-hidden", !isAtTop);
}

languageButtons
    .forEach(button => {

        button.addEventListener("click", () => {
            switchLanguage(button.dataset.lang);
        });

    });

window.addEventListener("scroll", updateTranslatorVisibility, { passive:true });
window.addEventListener("resize", updateTranslatorVisibility);

switchLanguage(currentLanguage);
updateTranslatorVisibility();
