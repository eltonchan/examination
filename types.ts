
type extType = 'DigitalUser' | 'VirtualUser' | 'FaxUser' | 'Dept' | 'AO';

export type month = 1 | 2| 3| 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type date = 1 | 2 | ...31; // 1 - 31 没有这种方法 表示枚举到31
export type quarter = 1 | 2 | 3 | 4;

export enum Direction {
    DigitalUser = 1,
    VirtualUser,
    FaxUser,
    Dept,
    AO
}

export interface Iitem {
    firstName: string,
    lastName: string,
    ext: string,
    extType: extType
}

export interface IsaleItem {
    month: month, //[1-12],
    date: date, //[1-31],
    transationId: string,
    salePrice: number
}

export interface IsumByQuarter {
    quarter: quarter,
    totalPrices: number, 
    transactionNums: number
}

export interface IaverageByQuarter {
    quarter: quarter,
    averagePrices: number, 
    transactionNums: number
}