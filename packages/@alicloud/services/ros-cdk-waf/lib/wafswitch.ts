import * as ros from '@alicloud/ros-cdk-core';
import { RosWafSwitch } from './waf.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosWafSwitch as WafSwitchProperty };

/**
 * Properties for defining a `WafSwitch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-wafswitch
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
 * Represents a `WafSwitch`.
 */
export interface IWafSwitch extends ros.IResource {
    readonly props: WafSwitchProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::WAF::WafSwitch`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWafSwitch`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-wafswitch
 */
export class WafSwitch extends ros.Resource implements IWafSwitch {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: WafSwitchProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WafSwitchProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosWafSwitch = new RosWafSwitch(this, id,  {
            instanceId: props.instanceId,
            region: props.region,
            serviceOn: props.serviceOn,
            domain: props.domain,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWafSwitch;
    }
}
