import { zeroFill } from './numbers';

export const timestampToDate = timestamp => {
    const date = new Date(timestamp * 1000);
    return [
        zeroFill(date.getFullYear()),
        zeroFill(date.getMonth()),
        zeroFill(date.getDate())
    ].join('-');
};

export const timestampToFullDate = timestamp => timestampToDate(timestamp) + ' ' + timestampToTime(timestamp);

export const timestampToTime = timestamp => {
    const date = new Date(timestamp * 1000);
    return [
        zeroFill(date.getHours()),
        zeroFill(date.getMinutes()),
        zeroFill(date.getSeconds())
    ].join(':');
};
