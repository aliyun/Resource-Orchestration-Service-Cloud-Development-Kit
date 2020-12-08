import * as ros from '@alicloud/ros-cdk-core';
import { RosWhitelist } from './memcache.generated';
export { RosWhitelist as WhitelistProperty };
/**
 * Properties for defining a `ALIYUN::Memcache::Whitelist`
 */
export interface WhitelistProps {
    /**
     * @Property instanceId: Instance ID (globally unique)
     */
    readonly instanceId: string;
    /**
     * @Property securityIps: IP address whitelist to be modified
     */
    readonly securityIps: string;
    /**
     * @Property securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    readonly securityIpGroupAttribute?: string;
    /**
     * @Property securityIpGroupName: Whitelist group
     */
    readonly securityIpGroupName?: string;
}
/**
 * A ROS resource type:  `ALIYUN::Memcache::Whitelist`
 */
export declare class Whitelist extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute SecurityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    readonly attrSecurityIpGroupAttribute: any;
    /**
     * @Attribute SecurityIpGroupName: Whitelist group
     */
    readonly attrSecurityIpGroupName: any;
    /**
     * @Attribute SecurityIps: IP address whitelist to be modified
     */
    readonly attrSecurityIps: any;
    /**
     * Create a new `ALIYUN::Memcache::Whitelist`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WhitelistProps, enableResourcePropertyConstraint?: boolean);
}
