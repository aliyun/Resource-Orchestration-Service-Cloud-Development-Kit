import * as ros from '@alicloud/ros-cdk-core';
import { RosRule } from './slb.generated';
export { RosRule as RuleProperty };
/**
 * Properties for defining a `Rule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-rule
 */
export interface RuleProps {
    /**
     * Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    readonly listenerPort: number | ros.IResolvable;
    /**
     * Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * Property ruleList: The forwarding rules to add.
     */
    readonly ruleList: Array<RosRule.RuleListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property listenerProtocol: The frontend protocol that is used by the SLB instance.
     */
    readonly listenerProtocol?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::Rule`, which is used to add forwarding rules to an HTTP or HTTPS listener.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-rule
 */
export declare class Rule extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: RuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Rules: A list of forwarding rules. Each element of rules contains "RuleId".
     */
    readonly attrRules: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RuleProps, enableResourcePropertyConstraint?: boolean);
}
