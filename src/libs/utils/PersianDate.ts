import moment from 'moment-jalaali';

moment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true });

export function toPersianDate(timestamp: Date | string, format = 'jYYYY/jMM/jDD'): string {
    return moment(timestamp).format(format);
  }
  