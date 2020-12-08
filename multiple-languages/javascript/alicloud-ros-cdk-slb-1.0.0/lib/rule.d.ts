import * as ros from '@alicloud/ros-cdk-core';
import { RosRule } from './slb.generated';
export { RosRule as RuleProperty };
/**
 * Properties for defining a `ALIYUN::SLB::Rule`
 */
export interface RuleProps {
    /**
     * @Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    readonly listenerPort: number;
    /**
     * @Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    readonly loadBalancerId: string;
    /**
     * @Property ruleList: The forwarding rules to add.
     */
    readonly ruleList: Array<RosRule.RuleListProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::SLB::Rule`
 */
export declare class Rule extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute Rules: A list of forwarding rules. Each element of rules contains "RuleId".
     */
    readonly attrRules: any;
    /**
     * Create a new `ALIYUN::SLB::Rule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RuleProps, enableResourcePropertyConstraint?: boolean);
}
