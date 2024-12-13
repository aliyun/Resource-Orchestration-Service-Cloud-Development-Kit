import * as ros from '@alicloud/ros-cdk-core';
import { RosIpfilter } from './directmail.generated';
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DirectMail::Ipfilter`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpfilter`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-ipfilter
 */
export declare class Ipfilter extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: IpfilterProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute IpAddress: The IP address of the resource.
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * Attribute IpfilterId: The ID of the resource.
     */
    readonly attrIpfilterId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IpfilterProps, enableResourcePropertyConstraint?: boolean);
}
