import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomLine } from './dns.generated';
export { RosCustomLine as CustomLineProperty };
/**
 * Properties for defining a `CustomLine`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-customline
 */
export interface CustomLineProps {
    /**
     * Property domainName: The domain name associated with the custom line.
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * Property ipSegment: The list of IP segments for the custom line.
     */
    readonly ipSegment: Array<RosCustomLine.IpSegmentProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property lineName: The name of the custom line.
     */
    readonly lineName: string | ros.IResolvable;
}
/**
 * Represents a `CustomLine`.
 */
export interface ICustomLine extends ros.IResource {
    readonly props: CustomLineProps;
    /**
     * Attribute LineId: The ID of the custom line.
     */
    readonly attrLineId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DNS::CustomLine`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomLine`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-customline
 */
export declare class CustomLine extends ros.Resource implements ICustomLine {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CustomLineProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute LineId: The ID of the custom line.
     */
    readonly attrLineId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomLineProps, enableResourcePropertyConstraint?: boolean);
}
