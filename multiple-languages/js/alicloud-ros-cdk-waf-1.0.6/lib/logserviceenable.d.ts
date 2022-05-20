import * as ros from '@alicloud/ros-cdk-core';
import { RosLogServiceEnable } from './waf.generated';
export { RosLogServiceEnable as LogServiceEnableProperty };
/**
 * Properties for defining a `ALIYUN::WAF::LogServiceEnable`
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
 * A ROS resource type:  `ALIYUN::WAF::LogServiceEnable`
 */
export declare class LogServiceEnable extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
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
     * Create a new `ALIYUN::WAF::LogServiceEnable`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LogServiceEnableProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=logserviceenable.d.ts.map