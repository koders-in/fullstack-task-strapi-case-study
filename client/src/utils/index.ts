import { BACKEND_ASSETS } from "../config";

export const reformImageURL = (url: string): string => {
  if (/^https?:\/\//.test(url)) {
    return url;
  }
  return `${BACKEND_ASSETS}${url}`;
};
