const events = ["click", "load", "keydown"];

export const FILTER_CATEGORY = {
    CHANNEL: 'FILTER_CATEGORY_CHANNEL',
    CATEGORY: 'FILTER_CATEGORY_CATEGORY',
    PUBLISHERS: 'FILTER_CATEGORY_PUBLISHERS',
    COUNTRY: 'FILTER_CATEGORY_COUNTRY'
}

export const FILTER_CATEGORY_SELECTED_VALUE = {
    CHANNEL: 'FILTER_CATEGORY_VALUE_CHANNEL',
    CATEGORY: 'FILTER_CATEGORY_VALUE_CATEGORY',
    PUBLISHERS: 'FILTER_CATEGORY_VALUE_PUBLISHERS',
    COUNTRY: 'FILTER_CATEGORY_VALUE_COUNTRY',
    SELECTED: 'FILTER_CATEGORY_CURRENT_SELECTED_VALUE',
    ALL_VALUES: 'FILTER_SELECTED_ALL_VALUES'
}
// menu_list
export const MENU_LIST_VALUE = {
    MENU: 'MENU_LIST_VALUE',
   
}

export const AUTH_DATA = {
    AUTH: 'auth_data',
   
}

export const SESSION = {
    TOKEN: 'token',
    EXPIRED: 'session_expired',
    EXPIRED_MESSAGE: 'Token expired/invalid',
    RESET_TOKEN: 'resetToken',
    AUTH_FAILED: 'Auth failed',
    LAST_INTERACTION_TIME: 'lastInteractionTime',
    IDLE_TIME: 15
  }

  export const REGEX = {
    EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    DOB: /^\d{2}[-/.]\d{2}[-/.]\d{4}$/,
    PHONE: /^[0][1-9]\d{9}$|^[1-9]\d{9}$/,
    PHONE_NUMBER_1: /^[0-9]+(-[0-9]+)+$/,
    PHONE_NUMBER: /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s-]?[\0-9]{3}[\s-]?[0-9]{4}$/,
    NUMERIC: /^[0-9]+$/,
    NUMERIC_CHARS: /^[0-9-_]+$/,
    PASSWORD: /^[a-zA-Z0-9@#^\-_$]*$/,
    PASSWORD_MIN_MAX_LENGTH: /(?=^.{7,14}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    TEXT: /^[a-zA-Z_ ]*$/,
    ALPHA_UPPER_CASE: /^[A-Z]*$/,
    ALPHA_NUMERIC: /^[a-zA-Z0-9 /]*$/,
    ALPHA_NUMERIC_CHARS: /^[a-zA-Z0-9@#^\-_$/]*$/,
    ALPHA_NUMERIC_CHARS_SPACE: /^[a-zA-Z0-9@^\-_.,àâçéèêëîïôûùüÿñæœ +g]*$/,
    ALPHA_NUMERIC_SPECIAL_CHARS: /^[a-zA-Z0-9@^\-_:/'"{}|.,àâçéèêëîïôûùüÿñæœ +g]*$/,
    ALPHA_CHARS_SPACE: /^[a-zA-Z^-_$.,àâçéèêëîïôûùüÿñæœ +g]*$/,
    ZIP_CODE: /^([0-9]){6}$/,
    CAID_NUMBER: /^([0-9]){6,8}$/,
    BIN_NUMBER: /^([0-9]){4,6}$/,
    NUMERIC_SIX_DIGITS: /^([0-9]{6}|[0-9]{8})$/,
    NUMERIC_FOUR_DIGITS: /^([0-9]){4}$/,
    SPACE: / +/g,
    URL: /^(ftp|http|https):\/\/[^ "]+\.[a-zA-Z]{2,4}$/,
    URL_ONE: /^(ftp|http|https):\/\/[^ "]+$/
  }

  export const TOKEN = {
    token : JSON.parse(localStorage.getItem('token')),
 }

 
 export const addEvents = (eventHandler) => {
   events.forEach((eventName) => {
     window.addEventListener(eventName, eventHandler);
   });
 };
 
 export const removeEvents = (eventHandler) => {
   events.forEach((eventName) => {
     window.removeEventListener(eventName, eventHandler);
   });
 };