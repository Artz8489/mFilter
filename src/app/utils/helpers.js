import { SESSION } from "./const";
import _ from "lodash";

export const setLocalStorage = (key, varToSet) =>
localStorage.setItem(key, btoa(varToSet));

export const getLocalStorage = (key) => {
const getStorage = localStorage.getItem(key);
try {
  return getStorage ? atob(getStorage) : false;
} catch (e) {
  return false;
}
};

export const unsetLocalStorage = () => localStorage.clear();

export const removeLocalStorage = (key) => localStorage.removeItem(key);
