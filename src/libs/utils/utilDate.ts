import moment from "moment";



export function UtilsDate(timestamp: Date | string, format = 'D MMMM YYYY'): string {
    return moment(timestamp).format(format);
  }