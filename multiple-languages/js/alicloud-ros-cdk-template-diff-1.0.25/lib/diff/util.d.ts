export declare function compare(a: any, b: any): number;
/**
 * Compares two objects for equality, deeply. The function handles arguments that are
 * +null+, +undefined+, arrays and objects. For objects, the function will not take the
 * object prototype into account for the purpose of the comparison, only the values of
 * properties reported by +Object.keys+.
 *
 * @param lvalue the left operand of the equality comparison.
 * @param rvalue the right operand of the equality comparison.
 *
 * @returns +true+ if both +lvalue+ and +rvalue+ are equivalent to each other.
 */
export declare function deepEqual(lvalue: any, rvalue: any): boolean;
/**
 * Produce the differences between two maps, as a map, using a specified diff function.
 *
 * @param oldValue  the old map.
 * @param newValue  the new map.
 * @param elementDiff the diff function.
 *
 * @returns a map representing the differences between +oldValue+ and +newValue+.
 */
export declare function diffKeyedEntities<T>(oldValue: {
    [key: string]: any;
} | undefined, newValue: {
    [key: string]: any;
} | undefined, elementDiff: (oldElement: any, newElement: any, key: string) => T): {
    [name: string]: T;
};
/**
 * Computes the union of two sets of strings.
 *
 * @param lv the left set of strings.
 * @param rv the right set of strings.
 *
 * @returns a new array containing all elemebts from +lv+ and +rv+, with no duplicates.
 */
export declare function unionOf(lv: string[] | Set<string>, rv: string[] | Set<string>): string[];
