import * as ros from '@alicloud/ros-cdk-core';
import { RosAclRule } from './waf.generated';
export { RosAclRule as AclRuleProperty };
/**
 * Properties for defining a `AclRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-aclrule
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::WAF::AclRule`, which is used to add an HTTP access control list (ACL) rule for a specified domain name.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAclRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-aclrule
 */
export declare class AclRule extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AclRuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AclRuleProps, enableResourcePropertyConstraint?: boolean);
}
