/**
  * extensions is an Array and each item has such format:
  * {firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}
  * lastName, ext can be empty, extType can only has "DigitalUser", "VirtualUser","FaxUser","Dept","AO".
**/

import { 
    Iitem,
    Direction,
    IsaleItem,
    IsumByQuarter,
    IaverageByQuarter,
    month,
} from './types';

/**
 * @description get combine name
 */
function getCombinedName(item: Iitem): string {
    return `${item.firstName}${item.lastName}${item.ext}`;
}

function getQuarter(month: month) {
    return (Math.floor((month - 1) / 3) + 1);
}

/**
 * @description Question 1: sort extensions by "firstName" + "lastName" + "ext" ASC
 */
export function sortExtensionsByName(extensions:Array<Iitem>): Array<Iitem> {
    return extensions.sort((a, b) => {
        const orderPrev: string = getCombinedName(a);
        const orderNext: string = getCombinedName(b);

        return orderPrev.localeCompare(orderNext);
    });
}

/**
 * @description Question 2: sort extensions by extType follow these orders ASC
 */
export function sortExtensionsByExtType(extensions:Array<Iitem>): Array<Iitem> {
   return extensions.sort((a, b) => {
        return Direction[a.extType] - Direction[b.extType];
   });
}

/**
 * @description Question 3: write a function to calculate and return a list of total sales (sum) for each quarter
 * @returns [
    {quarter: 1, totalPrices: xxx, transactionNums: n},
    {....}
  ] 
 */
export function sumByQuarter(saleItems: Array<IsaleItem>): Array<IsumByQuarter> {
    const quarters = Array(4).fill({}).map((item, index) => {
        item.quarter = index + 1;
        item.totalPrices = 0;
        item.transactionNums = 0;
        return item;
    });

    saleItems.forEach(item => {
        const {
            month,
            salePrice
        } = item;

        quarters[getQuarter(month)].totalPrices += salePrice;
        quarters[getQuarter(month)].transactionNums += 1;
    });

    return quarters;
}

/**
  Question 4: write a function to calculate and return a list of average sales for each quarter, expected result like:
  [
    {quarter: 1, averagePrices: xxx, transactionNums: n},
    {....}
  ]
**/

export function averageByQuarter(saleItems: Array<IsaleItem>): Array<IaverageByQuarter> {
    return sumByQuarter(saleItems).map(item => {
        const { 
          quarter,
          totalPrices,
          transactionNums
        } = item;

        return {
            quarter,
            transactionNums,
            averagePrices: totalPrices / transactionNums,
        };
    });
}

/**
 * @description Question 5: please create a tool to generate Sequence
 */
@Generate
export class Sequence {}

function Generate(target) {
    target.count = 0;
    target.prototype.next = (): number => ++target.count;
}


/**
 * @description Question 6: We want to get an array which contains all the unused keys
 */
export function getUnUsedKeys(allKeys: number[], usedKeys: number[]): number[] {
    const usedKeysSet = new Set(usedKeys);
    return allKeys.filter(key => !usedKeysSet.has(key));
}
