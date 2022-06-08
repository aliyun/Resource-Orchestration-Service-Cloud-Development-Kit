import * as ros from '@alicloud/ros-cdk-core';
import { RosWafSwitch } from './waf.generated';
export { RosWafSwitch as WafSwitchProperty };
/**
 * Properties for defining a `ALIYUN::WAF::WafSwitch`
 */
export interface WafSwitchProps {
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
     * Property serviceOn: Web attack protection switch, the value of:
     * 0: closed.
     * 1: indicate on.
     */
    readonly serviceOn: number | ros.IResolvable;
    /**
     * Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    readonly region?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::WAF::WafSwitch`
 */
export declare class WafSwitch extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::WAF::WafSwitch`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WafSwitchProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=wafswitch.d.ts.map