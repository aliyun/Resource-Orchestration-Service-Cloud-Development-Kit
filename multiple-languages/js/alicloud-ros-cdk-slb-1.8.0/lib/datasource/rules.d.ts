import * as ros from '@alicloud/ros-cdk-core';
import { RosRules } from './slb.generated';
export { RosRules as RulesProperty };
/**
 * Properties for defining a `Rules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rules
 */
export interface RulesProps {
    /**
     * Property listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance.
     */
    readonly listenerPort: string | ros.IResolvable;
    /**
     * Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * Property listenerProtocol: The frontend listener protocol that is used by the SLB instance.
     */
    readonly listenerProtocol?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Rules`.
 */
export interface IRules extends ros.IResource {
    readonly props: RulesProps;
    /**
     * Attribute RuleIds: The list of rule IDs.
     */
    readonly attrRuleIds: ros.IResolvable | string;
    /**
     * Attribute Rules: The list of rules.
     */
    readonly attrRules: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::Rules`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRules`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rules
 */
export declare class Rules extends ros.Resource implements IRules {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RulesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute RuleIds: The list of rule IDs.
     */
    readonly attrRuleIds: ros.IResolvable | string;
    /**
     * Attribute Rules: The list of rules.
     */
    readonly attrRules: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RulesProps, enableResourcePropertyConstraint?: boolean);
}
