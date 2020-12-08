import * as ros from '@alicloud/ros-cdk-core';
import { RosAclRule } from './waf.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAclRule as AclRuleProperty };

/**
 * Properties for defining a `ALIYUN::WAF::AclRule`
 */
export interface AclRuleProps {

    /**
     * @Property domain: Domain name.
     */
    readonly domain: string;

    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    readonly instanceId: string;

    /**
     * @Property rules: Detailed information of precise access control rules, expressed in JSON format strings.
     */
    readonly rules: string;

    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    readonly region?: string;

    /**
     * @Property ruleId: Precise access control rule ID
     */
    readonly ruleId?: number;
}

/**
 * A ROS resource type:  `ALIYUN::WAF::AclRule`
 */
export class AclRule extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::WAF::AclRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AclRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAclRule = new RosAclRule(this, id,  {
            instanceId: props.instanceId,
            ruleId: props.ruleId,
            region: props.region,
            domain: props.domain,
            rules: props.rules,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAclRule;
    }
}
