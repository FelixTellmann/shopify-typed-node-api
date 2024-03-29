import crypto from 'crypto';

import * as ShopifyErrors from '../error';

/**
 * A timing safe string comparison utility.
 *
 * @param strA any string, array of strings, or object with string values
 * @param strB any string, array of strings, or object with string values
 */
export default function safeCompare(
  strA: string | {[key: string]: string;} | string[] | number[],
  strB: string | {[key: string]: string;} | string[] | number[],
): boolean {
  if (typeof strA === typeof strB) {
    let buffA: Buffer;
    let buffB: Buffer;

    if (typeof strA === 'object' && typeof strB === 'object') {
      buffA = Buffer.from(JSON.stringify(strA));
      buffB = Buffer.from(JSON.stringify(strB));
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      buffA = Buffer.from(strA);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      buffB = Buffer.from(strB);
    }

    if (buffA.length === buffB.length) {
      return crypto.timingSafeEqual(buffA, buffB);
    }
  } else {
    throw new ShopifyErrors.SafeCompareError(
      `Mismatched data types provided: ${typeof strA} and ${typeof strB}`,
    );
  }
  return false;
}
