// Core utility functions

/**
 * Creates a delay for the specified number of milliseconds
 * @param ms Milliseconds to wait
 * @returns Promise that resolves after the specified delay
 */
export const delay = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));

/**
 * Type-safe object property access
 * @param obj The object to access
 * @param path Dot-notation path to the property
 * @param defaultValue Default value if property doesn't exist
 */
export function getProperty<T, D = undefined>(
  obj: any,
  path: string,
  defaultValue: D = undefined as unknown as D
): T | D {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
}
