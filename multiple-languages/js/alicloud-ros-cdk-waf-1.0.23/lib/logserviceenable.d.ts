import * as ros from '@alicloud/ros-cdk-core';
import { RosLogServiceEnable } from './waf.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::WAF::LogServiceEnable`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLogServiceEnable`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-logserviceenable
 */
export declare class LogServiceEnable extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: LogServiceEnableProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Domain: The domain name that is added to WAF.
     */
    readonly attrDomain: ros.IResolvable;
    /**
     * Attribute InstanceId: The ID of the WAF instance.
You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LogServiceEnableProps, enableResourcePropertyConstraint?: boolean);
}
