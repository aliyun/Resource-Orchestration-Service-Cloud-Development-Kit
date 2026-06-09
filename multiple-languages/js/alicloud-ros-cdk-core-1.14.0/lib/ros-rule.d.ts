import { Construct } from "./construct-compat";
import { RosElement } from "./ros-element";
import { IResolvable } from "./resolvable";
export interface RosRuleAssertionProps {
    /**
     * Define assertions.
     */
    readonly assert: IResolvable;
    /**
     * Define the assertion description.
     *
     * @default - None
     */
    readonly assertDescription?: string;
}
export interface RosRuleProps {
    /**
     * Define the rule condition. If the rule condition is not defined, the assertion is always valid.
     *
     * @default - None
     */
    readonly ruleCondition?: IResolvable;
    /**
     * Used to describe assertions.
     */
    readonly assertions: RosRuleAssertionProps;
}
/**
 * Rules are used to verify that the parameter values passed to the template when the resource stack is created or updated are as expected.
 */
export declare class RosRule extends RosElement {
    private rule;
    constructor(scope: Construct, id: string, props: RosRuleProps);
    /**
     * @internal
     */
    _toRosTemplate(): object;
}
