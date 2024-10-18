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
export class RosRule extends RosElement {
    private rule: { [k1: string]: any } = {};


    constructor(scope: Construct, id: string, props: RosRuleProps) {
        super(scope, id);
        if (props.ruleCondition) {
            this.rule.RuleCondition = props.ruleCondition;
        }
        let assertions: { [k1: string]: any } = {};
        assertions.Assert = props.assertions.assert;
        if (props.assertions.assertDescription) {
            assertions.AssertDescription = props.assertions.assertDescription;
        }
        this.rule.Assertions = assertions;
    }

    /**
     * @internal
     */
    public _toRosTemplate(): object {
        return {
            Rules: {
                [this.logicalId]: this.rule,
            },
        };
    }
}
