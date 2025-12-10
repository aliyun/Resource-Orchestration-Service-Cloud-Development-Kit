import * as ros from '@alicloud/ros-cdk-core';
import { RosIpfilter } from './directmail.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosIpfilter as IpfilterProperty };

/**
 * Properties for defining a `Ipfilter`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-ipfilter
 */
export interface IpfilterProps {

    /**
     * Property ipfilterId: The ID of the resource.
     */
    readonly ipfilterId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Ipfilter`.
 */
export interface IIpfilter extends ros.IResource {
    readonly props: IpfilterProps;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute IpAddress: The IP address of the resource.
     */
    readonly attrIpAddress: ros.IResolvable | string;

    /**
     * Attribute IpfilterId: The ID of the resource.
     */
    readonly attrIpfilterId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DirectMail::Ipfilter`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpfilter`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-ipfilter
 */
export class Ipfilter extends ros.Resource implements IIpfilter {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: IpfilterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute IpAddress: The IP address of the resource.
     */
    public readonly attrIpAddress: ros.IResolvable | string;

    /**
     * Attribute IpfilterId: The ID of the resource.
     */
    public readonly attrIpfilterId: ros.IResolvable | string;

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
            ipfilterId: props.ipfilterId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpfilter;
        this.attrCreateTime = rosIpfilter.attrCreateTime;
        this.attrIpAddress = rosIpfilter.attrIpAddress;
        this.attrIpfilterId = rosIpfilter.attrIpfilterId;
    }
}
