import * as ros from '@alicloud/ros-cdk-core';
import { RosIpfilter } from './directmail.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosIpfilter as IpfilterProperty };

/**
 * Properties for defining a `Ipfilter`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-ipfilter
 */
export interface IpfilterProps {

    /**
     * Property ipAddress: The whitelist IP address.
     */
    readonly ipAddress: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DirectMail::Ipfilter`, which is used to add an IP filter.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpfilter`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-ipfilter
 */
export class Ipfilter extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: IpfilterProps;
    protected enableResourcePropertyConstraint: boolean;

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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IpfilterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosIpfilter = new RosIpfilter(this, id,  {
            ipAddress: props.ipAddress,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpfilter;
        this.attrCreateTime = rosIpfilter.attrCreateTime;
        this.attrIpAddress = rosIpfilter.attrIpAddress;
        this.attrIpfilterId = rosIpfilter.attrIpfilterId;
    }
}
