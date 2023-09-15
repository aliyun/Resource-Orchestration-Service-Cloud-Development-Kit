import * as ros from '@alicloud/ros-cdk-core';
import { RosAclRule } from './waf.generated';
export { RosAclRule as AclRuleProperty };
/**
 * Properties for defining a `ALIYUN::WAF::AclRule`
 */
export interface AclRuleProps {
    /**
     * Property domain: Domain name.
     */
    readonly domain: string | ros.IResolvable;
    /**
     * Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property rules: Detailed information of precise access control rules, expressed in JSON format strings.
     */
    readonly rules: string | ros.IResolvable;
    /**
     * Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    readonly region?: string | ros.IResolvable;
    /**
     * Property ruleId: Precise access control rule ID
     */
    readonly ruleId?: number | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::WAF::AclRule`
 */
export declare class AclRule extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::WAF::AclRule`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AclRuleProps, enableResourcePropertyConstraint?: boolean);
}
