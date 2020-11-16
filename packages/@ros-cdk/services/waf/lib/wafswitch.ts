import * as ros from '@ros-cdk/core';
import { RosWafSwitch } from './waf.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosWafSwitch as WafSwitchProperty };

/**
 * Properties for defining a `ALIYUN::WAF::WafSwitch`
 */
export interface WafSwitchProps {

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
     * @Property serviceOn: Web attack protection switch, the value of:
     * 0: closed.
     * 1: indicate on.
     */
    readonly serviceOn: number;

    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    readonly region?: string;
}

/**
 * A ROS resource type:  `ALIYUN::WAF::WafSwitch`
 */
export class WafSwitch extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::WAF::WafSwitch`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WafSwitchProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosWafSwitch = new RosWafSwitch(this, id,  {
            instanceId: props.instanceId,
            region: props.region,
            serviceOn: props.serviceOn,
            domain: props.domain,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWafSwitch;
    }
}
