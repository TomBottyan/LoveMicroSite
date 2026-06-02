const DEFAULT_LANGUAGE = "en";
const ACTION_MESSAGE_COUNT = 5;
const ACTION_MESSAGE_DELAY = 560;
const ACTION_FINAL_DELAY = 420;
const REQUEST_TRANSITION_DELAY = 560;
const REQUEST_TRANSITION_REDUCED_DELAY = 140;
const REQUEST_STORAGE_PREFIX = "cae-request";
const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

const translator = document.querySelector(".translator");
const languageButtons = document.querySelectorAll(".lang");
const actionButtons = document.querySelectorAll("[data-action]");
const requestButtons = document.querySelectorAll("[data-request]");
const requestForms = document.querySelectorAll("[data-request-form]");
const couponContent = document.querySelector("[data-coupon-content]");
const requestTransition = document.querySelector("[data-request-transition]");
const transitionMessages = document.querySelector("[data-transition-messages]");
const requestScreen = document.querySelector("[data-request-screen]");
const requestIntro = document.querySelector("[data-request-intro]");
const requestConfirmation = document.querySelector("[data-request-confirmation]");
const requestSummary = document.querySelector("[data-request-summary]");
const requestOutput = document.querySelector("[data-request-output]");
const requestBackButtons = document.querySelectorAll("[data-request-back]");
const dateInputs = document.querySelectorAll("[data-request-date]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const couponKey = document.body.dataset.coupon;
const couponId = document.body.dataset.couponId || couponKey;
const translations = window.CAE_TRANSLATIONS && window.CAE_TRANSLATIONS[couponKey];

let currentLanguage = DEFAULT_LANGUAGE;
let isRequestTransitionRunning = false;

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

    document.querySelectorAll("[data-i18n-alt]")
        .forEach(element => {

            const key = element.dataset.i18nAlt;

            if(translations[lang][key]){
                element.setAttribute("alt", translations[lang][key]);
            }
        });

    document.querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            const key = element.dataset.i18nPlaceholder;

            if(translations[lang][key]){
                element.setAttribute("placeholder", translations[lang][key]);
            }
        });

    languageButtons
        .forEach(button => {
            const isActive = button.dataset.lang === lang;

            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

    updateRequestEntryState();

    if(requestScreen && !requestScreen.hidden){
        const submittedRequest = getStoredRequest();

        if(submittedRequest){
            showRequestConfirmation(submittedRequest);
        }
    }
}

function updateTranslatorVisibility(){
    if(!translator){
        return;
    }

    const isAtTop = window.scrollY <= 8;

    translator.classList.toggle("is-visible", isAtTop);
    translator.classList.toggle("is-hidden", !isAtTop);
}

function getLanguageSet(){
    return translations && translations[currentLanguage];
}

function getActionConfig(actionKey){
    const languageSet = getLanguageSet();

    if(!languageSet || !languageSet.actions){
        return null;
    }

    return languageSet.actions[actionKey] || null;
}

function getRequestConfig(){
    const languageSet = getLanguageSet();

    return languageSet && languageSet.redemptionRequest;
}

function getRequestStorageKey(){
    return `${REQUEST_STORAGE_PREFIX}:${couponId}`;
}

function getStoredRequest(){
    try{
        const storedRequest = window.localStorage.getItem(getRequestStorageKey());

        return storedRequest ? JSON.parse(storedRequest) : null;
    }catch(error){
        return null;
    }
}

function storeRequest(request){
    try{
        window.localStorage.setItem(getRequestStorageKey(), JSON.stringify(request));
    }catch(error){
        console.warn("Request could not be persisted.");
    }
}

function shuffleItems(items){
    const shuffled = [...items];

    for(let index = shuffled.length - 1; index > 0; index -= 1){
        const swapIndex = Math.floor(Math.random() * (index + 1));
        const currentItem = shuffled[index];

        shuffled[index] = shuffled[swapIndex];
        shuffled[swapIndex] = currentItem;
    }

    return shuffled;
}

function wait(milliseconds){
    return new Promise(resolve => {
        window.setTimeout(resolve, milliseconds);
    });
}

function createStatusLine(message){
    const line = document.createElement("div");

    line.className = "action-status-line";
    line.textContent = message;

    return line;
}

function createTransitionLine(message){
    const line = document.createElement("div");

    line.className = "transition-message";
    line.textContent = message;

    return line;
}

function createFinalResult(success, className = "action-result approved"){
    const result = document.createElement("div");

    result.className = className;

    if(success.title){
        const title = document.createElement("div");

        title.className = "action-result-title";
        title.textContent = success.title;
        result.appendChild(title);
    }

    if(success.body){
        const body = document.createElement("p");

        body.className = "action-result-body";
        body.textContent = success.body;
        result.appendChild(body);
    }

    if(success.lines && Array.isArray(success.lines)){
        success.lines.forEach(lineText => {
            const line = document.createElement("p");

            line.className = "action-result-body";
            line.textContent = lineText;
            result.appendChild(line);
        });
    }

    if(success.detailLabel || success.detailValue){
        const detail = document.createElement("p");

        detail.className = "action-result-detail";

        if(success.detailLabel){
            const label = document.createElement("span");

            label.className = "action-result-detail-label";
            label.textContent = success.detailLabel;
            detail.appendChild(label);
        }

        if(success.detailValue){
            const value = document.createElement("span");

            value.className = "action-result-detail-value";
            value.textContent = success.detailValue;
            detail.appendChild(value);
        }

        result.appendChild(detail);
    }

    return result;
}

async function runSequentialProcess(button, output, messages, success, options = {}){
    const selectedMessages = shuffleItems(messages).slice(0, Math.max(ACTION_MESSAGE_COUNT, 5));
    const resultClassName = options.resultClassName || "action-result approved";

    output.innerHTML = "";
    output.classList.add("is-running");
    button.disabled = true;
    button.setAttribute("aria-busy", "true");

    for(const message of selectedMessages){
        output.appendChild(createStatusLine(message));
        await wait(ACTION_MESSAGE_DELAY);
    }

    await wait(ACTION_FINAL_DELAY);

    if(success){
        output.appendChild(createFinalResult(success, resultClassName));
    }

    output.classList.remove("is-running");
    button.setAttribute("aria-busy", "false");
}

async function runInteractiveAction(button){
    const actionKey = button.dataset.action;
    const outputSelector = button.dataset.actionOutput;
    const output = outputSelector && document.querySelector(outputSelector);
    const action = getActionConfig(actionKey);

    if(!output || !action || button.disabled){
        return;
    }

    const messages = Array.isArray(action.messages) ? action.messages : [];

    if(messages.length < 10){
        console.warn(`Action "${actionKey}" should define at least 10 localized status messages.`);
    }

    await runSequentialProcess(button, output, messages, action.success);

    button.disabled = false;
}

function getDateLimits(){
    const today = new Date();
    const maximumDate = new Date(today.getTime() + (14 * DAY_IN_MILLISECONDS));

    return {
        min: formatDateValue(today),
        max: formatDateValue(maximumDate)
    };
}

function formatDateValue(date){
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function configureDateInputs(){
    const limits = getDateLimits();

    dateInputs
        .forEach(input => {
            input.min = limits.min;
            input.max = limits.max;
        });
}

function getField(form, name){
    return form.elements[name];
}

function normalizeValue(value){
    return value ? value.trim() : "";
}

function validateRequestForm(form){
    const config = getRequestConfig();
    const errors = [];
    const values = {
        selectedDate: normalizeValue(getField(form, "selectedDate").value),
        selectedTime: normalizeValue(getField(form, "selectedTime").value),
        mealType: normalizeValue(getField(form, "mealType").value),
        mealDescription: normalizeValue(getField(form, "mealDescription").value),
        recipeUrl: normalizeValue(getField(form, "recipeUrl").value)
    };
    const limits = getDateLimits();

    if(!values.selectedDate || values.selectedDate < limits.min || values.selectedDate > limits.max){
        errors.push(config.errors.date);
    }

    if(!values.selectedTime){
        errors.push(config.errors.time);
    }

    if(values.selectedDate === limits.min && values.selectedTime){
        const selectedDateTime = new Date(`${values.selectedDate}T${values.selectedTime}`);

        if(selectedDateTime.getTime() < Date.now()){
            errors.push(config.errors.dateTimePast);
        }
    }

    if(!values.mealType){
        errors.push(config.errors.mealType);
    }

    if(!values.mealDescription && !values.recipeUrl){
        errors.push(config.errors.requestDetails);
    }

    if(values.recipeUrl && !getField(form, "recipeUrl").checkValidity()){
        errors.push(config.errors.recipeUrl);
    }

    return {
        errors,
        values
    };
}

function showFormErrors(errors){
    if(!requestOutput){
        return;
    }

    requestOutput.innerHTML = "";

    if(!errors.length){
        return;
    }

    const list = document.createElement("ul");

    list.className = "form-errors";

    errors.forEach(error => {
        const item = document.createElement("li");

        item.textContent = error;
        list.appendChild(item);
    });

    requestOutput.appendChild(list);
}

function buildStoredRequest(values){
    const config = getRequestConfig();

    return {
        couponId,
        couponName: config.couponName,
        recipientName: "Eszter",
        assignedTo: "Tomi",
        selectedDate: values.selectedDate,
        selectedTime: values.selectedTime,
        mealType: values.mealType,
        mealDescription: values.mealDescription,
        recipeUrl: values.recipeUrl,
        submittedAt: new Date().toISOString(),
        language: currentLanguage
    };
}

function getMealTypeLabel(mealType){
    const config = getRequestConfig();

    return config.mealTypes[mealType] || mealType;
}

function createSummaryRow(label, value){
    const row = document.createElement("div");
    const term = document.createElement("dt");
    const detail = document.createElement("dd");

    row.className = "request-summary-row";
    term.textContent = label;
    detail.textContent = value || "—";
    row.appendChild(term);
    row.appendChild(detail);

    return row;
}

function showRequestSummary(request){
    const config = getRequestConfig();

    if(!requestSummary || !config){
        return;
    }

    requestSummary.innerHTML = "";
    requestSummary.appendChild(createSummaryRow(config.summaryLabels.couponId, request.couponId));
    requestSummary.appendChild(createSummaryRow(config.summaryLabels.recipientName, request.recipientName));
    requestSummary.appendChild(createSummaryRow(config.summaryLabels.assignedTo, request.assignedTo));
    requestSummary.appendChild(createSummaryRow(config.summaryLabels.selectedDate, request.selectedDate));
    requestSummary.appendChild(createSummaryRow(config.summaryLabels.selectedTime, request.selectedTime));
    requestSummary.appendChild(createSummaryRow(config.summaryLabels.mealType, getMealTypeLabel(request.mealType)));
    requestSummary.appendChild(createSummaryRow(config.summaryLabels.mealDescription, request.mealDescription));
    requestSummary.appendChild(createSummaryRow(config.summaryLabels.recipeUrl, request.recipeUrl));
    requestSummary.appendChild(createSummaryRow(config.summaryLabels.submittedAt, new Date(request.submittedAt).toLocaleString()));
}

function showRequestConfirmation(request){
    const config = getRequestConfig();

    if(!requestIntro || !requestConfirmation || !config){
        return;
    }

    requestIntro.hidden = true;
    requestConfirmation.hidden = false;

    requestConfirmation.querySelector("[data-request-success-title]").textContent = config.success.title;

    const lines = requestConfirmation.querySelector("[data-request-success-lines]");

    lines.innerHTML = "";
    config.success.lines.forEach(lineText => {
        const line = document.createElement("p");

        line.textContent = lineText;
        lines.appendChild(line);
    });

    showRequestSummary(request);
}

function openRequestScreen(){
    if(!couponContent || !requestScreen || !requestIntro || !requestConfirmation){
        return;
    }

    couponContent.hidden = true;
    requestScreen.hidden = false;

    const submittedRequest = getStoredRequest();

    if(submittedRequest){
        showRequestConfirmation(submittedRequest);
    }else{
        requestIntro.hidden = false;
        requestConfirmation.hidden = true;
    }

    requestScreen.scrollIntoView({ behavior:prefersReducedMotion.matches ? "auto" : "smooth", block:"start" });
}

async function runRequestTransition(button){
    const config = getRequestConfig();

    if(!couponContent || !requestTransition || !transitionMessages || !config){
        openRequestScreen();
        return;
    }

    isRequestTransitionRunning = true;
    button.disabled = true;
    button.setAttribute("aria-busy", "true");
    couponContent.classList.add("is-softening");
    requestTransition.hidden = false;
    transitionMessages.innerHTML = "";
    requestTransition.scrollIntoView({ behavior:prefersReducedMotion.matches ? "auto" : "smooth", block:"center" });

    const messages = Array.isArray(config.transitionMessages) ? config.transitionMessages : [];
    const delay = prefersReducedMotion.matches ? REQUEST_TRANSITION_REDUCED_DELAY : REQUEST_TRANSITION_DELAY;

    for(const message of messages){
        transitionMessages.appendChild(createTransitionLine(message));
        await wait(delay);
    }

    await wait(prefersReducedMotion.matches ? REQUEST_TRANSITION_REDUCED_DELAY : 280);

    requestTransition.classList.add("is-complete");
    await wait(prefersReducedMotion.matches ? REQUEST_TRANSITION_REDUCED_DELAY : 260);

    requestTransition.hidden = true;
    requestTransition.classList.remove("is-complete");
    couponContent.classList.remove("is-softening");
    button.disabled = false;
    button.setAttribute("aria-busy", "false");
    isRequestTransitionRunning = false;
    openRequestScreen();
}

function showRequestForm(button){
    if(isRequestTransitionRunning){
        return;
    }

    if(getStoredRequest()){
        openRequestScreen();
        return;
    }

    runRequestTransition(button);
}

function returnToCoupon(){
    if(!couponContent || !requestScreen){
        return;
    }

    requestScreen.hidden = true;
    couponContent.hidden = false;
    couponContent.scrollIntoView({ behavior:prefersReducedMotion.matches ? "auto" : "smooth", block:"start" });
}

function updateRequestEntryState(){
    const config = getRequestConfig();
    const hasSubmittedRequest = !!getStoredRequest();

    requestButtons
        .forEach(button => {
            const key = button.dataset.i18n;

            if(hasSubmittedRequest && config && config.reviewButton){
                button.textContent = config.reviewButton;
            }else if(key && translations && translations[currentLanguage] && translations[currentLanguage][key]){
                button.textContent = translations[currentLanguage][key];
            }
        });
}

requestForms
    .forEach(form => {

        form.addEventListener("submit", event => {
            event.preventDefault();

            const validation = validateRequestForm(form);

            showFormErrors(validation.errors);

            if(validation.errors.length){
                return;
            }

            const request = buildStoredRequest(validation.values);

            storeRequest(request);
            updateRequestEntryState();
            showRequestConfirmation(request);
        });

    });

languageButtons
    .forEach(button => {

        button.addEventListener("click", () => {
            switchLanguage(button.dataset.lang);
        });

    });

actionButtons
    .forEach(button => {

        button.addEventListener("click", () => {
            runInteractiveAction(button);
        });

    });

requestButtons
    .forEach(button => {

        button.addEventListener("click", () => {
            showRequestForm(button);
        });

    });

requestBackButtons
    .forEach(button => {

        button.addEventListener("click", () => {
            returnToCoupon();
        });

    });

window.addEventListener("scroll", updateTranslatorVisibility, { passive:true });
window.addEventListener("resize", updateTranslatorVisibility);

configureDateInputs();
switchLanguage(currentLanguage);
updateTranslatorVisibility();
updateRequestEntryState();
