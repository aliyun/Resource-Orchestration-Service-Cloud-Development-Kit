import * as ros from '@alicloud/ros-cdk-core';
import { RosIpfilter } from './directmail.generated';
export { RosIpfilter as IpfilterProperty };
/**
 * Properties for defining a `ALIYUN::DirectMail::Ipfilter`
 */
export interface IpfilterProps {
    /**
     * Property ipAddress: The whitelist IP address.
     */
    readonly ipAddress: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::DirectMail::Ipfilter`
 */
export declare class Ipfilter extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute IpAddress: The whitelist IP address.
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * Attribute IpfilterId: The ID of the IP filter.
     */
    readonly attrIpfilterId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::DirectMail::Ipfilter`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IpfilterProps, enableResourcePropertyConstraint?: boolean);
}
