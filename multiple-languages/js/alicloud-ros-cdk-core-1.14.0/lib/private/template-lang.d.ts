import { DefaultTokenResolver } from "../resolvable";
/**
 * Routines that know how to do operations at the ROS document language level
 */
export declare class RosTemplateLang {
    /**
     * Turn an arbitrary structure potentially containing Tokens into a JSON string.
     *
     * Returns a Token which will evaluate to ROS expression that
     * will be evaluated by ROS to the JSON representation of the
     * input structure.
     *
     * All Tokens substituted in this way must return strings, or the evaluation
     * in ROS will fail.
     *
     * @param obj The object to stringify
     * @param space Indentation to use (default: no pretty-printing)
     */
    static toJSON(obj: any, space?: number): string;
    /**
     * Produce a ROS expression to concat two arbitrary expressions when resolving
     */
    static concat(left: any | undefined, right: any | undefined): any;
}
/**
 * Default Token resolver for ROS templates
 */
export declare const ROS_TOKEN_RESOLVER: DefaultTokenResolver;
/**
 * Do an intelligent ROS join on the given values, producing a minimal expression
 */
export declare function minimalRosTemplateJoin(delimiter: string, values: any[]): any[];
/**
 * Do an intelligent ROS merge list on the given values, producing a minimal expression
 */
export declare function minimalRosTemplateListMerge(values: any[]): any[];
export declare function isNameOfRosIntrinsic(name: string): boolean;
