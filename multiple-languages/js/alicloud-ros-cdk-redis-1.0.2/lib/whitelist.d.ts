import * as ros from '@alicloud/ros-cdk-core';
import { RosWhitelist } from './redis.generated';
export { RosWhitelist as WhitelistProperty };
/**
 * Properties for defining a `ALIYUN::REDIS::Whitelist`
 */
export interface WhitelistProps {
    /**
     * Property instanceId: Instance ID (globally unique)
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property securityIps: IP address whitelist to be modified
     */
    readonly securityIps: string | ros.IResolvable;
    /**
     * Property securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    readonly securityIpGroupAttribute?: string | ros.IResolvable;
    /**
     * Property securityIpGroupName: Whitelist group
     */
    readonly securityIpGroupName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::REDIS::Whitelist`
 */
export declare class Whitelist extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute SecurityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    readonly attrSecurityIpGroupAttribute: ros.IResolvable;
    /**
     * Attribute SecurityIpGroupName: Whitelist group
     */
    readonly attrSecurityIpGroupName: ros.IResolvable;
    /**
     * Attribute SecurityIps: IP address whitelist to be modified
     */
    readonly attrSecurityIps: ros.IResolvable;
    /**
     * Create a new `ALIYUN::REDIS::Whitelist`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WhitelistProps, enableResourcePropertyConstraint?: boolean);
}
