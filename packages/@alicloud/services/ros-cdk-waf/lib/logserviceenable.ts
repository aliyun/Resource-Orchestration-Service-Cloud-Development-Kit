import * as ros from '@alicloud/ros-cdk-core';
import { RosLogServiceEnable } from './waf.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLogServiceEnable as LogServiceEnableProperty };

/**
 * Properties for defining a `LogServiceEnable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-logserviceenable
 */
export interface LogServiceEnableProps {

    /**
     * Property domain: The domain name that is added to WAF.
     */
    readonly domain: string | ros.IResolvable;

    /**
     * Property instanceId: The ID of the WAF instance.
     * You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
     */
    readonly instanceId: string | ros.IResolvable;
}

/**
 * Represents a `LogServiceEnable`.
 */
export interface ILogServiceEnable extends ros.IResource {
    readonly props: LogServiceEnableProps;

    /**
     * Attribute Domain: The domain name that is added to WAF.
     */
    readonly attrDomain: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the WAF instance.
You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::WAF::LogServiceEnable`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLogServiceEnable`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-logserviceenable
 */
export class LogServiceEnable extends ros.Resource implements ILogServiceEnable {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: LogServiceEnableProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Domain: The domain name that is added to WAF.
     */
    public readonly attrDomain: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the WAF instance.
You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LogServiceEnableProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosLogServiceEnable = new RosLogServiceEnable(this, id,  {
            instanceId: props.instanceId,
            domain: props.domain,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLogServiceEnable;
        this.attrDomain = rosLogServiceEnable.attrDomain;
        this.attrInstanceId = rosLogServiceEnable.attrInstanceId;
    }
}
