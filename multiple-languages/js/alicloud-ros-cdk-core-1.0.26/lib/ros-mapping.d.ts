import { Construct } from "./construct-compat";
import { RosRefElement } from "./ros-element";
import { IResolvable } from "./resolvable";
export interface RosMappingProps {
    /**
     * Mapping of key to a set of corresponding set of named values.
     * The key identifies a map of name-value pairs and must be unique within the mapping.
     *
     * For example, if you want to set values based on a region, you can create a mapping
     * that uses the region name as a key and contains the values you want to specify for
     * each specific region.
     *
     * @default - No mapping.
     */
    readonly mapping?: {
        [k1: string]: {
            [k2: string]: any;
        };
    };
}
/**
 * Represents a mapping.
 */
export declare class RosMapping extends RosRefElement {
    private mapping;
    constructor(scope: Construct, id: string, props?: RosMappingProps);
    /**
     * Sets a value in the map based on the two keys.
     */
    setValue(key1: string, key2: string, value: any): void;
    /**
     * @returns A reference to a value in the map based on the two keys.
     */
    findInMap(key1: string, key2: string): IResolvable;
    /**
     * @internal
     */
    _toRosTemplate(): object;
}
