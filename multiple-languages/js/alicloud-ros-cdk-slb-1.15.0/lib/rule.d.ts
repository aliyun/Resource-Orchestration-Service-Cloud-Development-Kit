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
     * Property ruleList: The forwarding rules to add. You can add up to 10 forwarding rules in a single
     * request. Each forwarding rule consists of the following parameters:
     * - RuleName (Required): String. The name of the forwarding rule. The name must be
     * 1 to 40 characters in length and can contain letters, digits, hyphens (-),
     * forward slashes (\/), periods (.), and underscores (_). Rule names must be unique
     * within the same listener.
     * - Domain (Optional): String. The domain name to associate with the forwarding
     * rule. You must specify at least one of this parameter and the Url parameter.
     * - Url (Optional): String. The URL path. The path must be 1 to 80 characters in
     * length. It can contain Chinese characters, letters, digits, and the following
     * special characters: `- \/ . % ? # &`. The URL path must start with a forward slash
     * (\/), but cannot be a single forward slash (\/). You must specify at least one of
     * this parameter and the Domain parameter.
     * - VServerGroupId (Required): String. The ID of the target vServer group for the
     * forwarding rule.
     * > You must specify the `Domain` parameter, the `Url` parameter, or both. The
     * combination of a `Domain` and a `Url` must be unique within the same listener.
     */
    readonly ruleList: Array<RosRule.RuleListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property listenerProtocol: The frontend protocol of the listener.
     * > This parameter is required if you configure listeners that use different
     * protocols on the same port.
     */
    readonly listenerProtocol?: string | ros.IResolvable;
}
/**
 * Represents a `Rule`.
 */
export interface IRule extends ros.IResource {
    readonly props: RuleProps;
    /**
     * Attribute Rules: A list of forwarding rules. Each element of rules contains "RuleId".
     */
    readonly attrRules: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::Rule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-rule
 */
export declare class Rule extends ros.Resource implements IRule {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Rules: A list of forwarding rules. Each element of rules contains "RuleId".
     */
    readonly attrRules: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RuleProps, enableResourcePropertyConstraint?: boolean);
}
