import * as ros from '@alicloud/ros-cdk-core';
import { RosIpfilter } from './directmail.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class Ipfilter extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute IpAddress: The whitelist IP address.
     */
    public readonly attrIpAddress: ros.IResolvable;

    /**
     * Attribute IpfilterId: The ID of the IP filter.
     */
    public readonly attrIpfilterId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::DirectMail::Ipfilter`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IpfilterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosIpfilter = new RosIpfilter(this, id,  {
            ipAddress: props.ipAddress,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpfilter;
        this.attrCreateTime = rosIpfilter.attrCreateTime;
        this.attrIpAddress = rosIpfilter.attrIpAddress;
        this.attrIpfilterId = rosIpfilter.attrIpfilterId;
    }
}
