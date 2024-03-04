import * as ros from '@alicloud/ros-cdk-core';
import { RosZoneVpcBinder } from './pvtz.generated';
export { RosZoneVpcBinder as ZoneVpcBinderProperty };
/**
 * Properties for defining a `ZoneVpcBinder`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonevpcbinder
 */
export interface ZoneVpcBinderProps {
    /**
     * Property vpcs:
     */
    readonly vpcs: Array<RosZoneVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property zoneId: Zone Id
     */
    readonly zoneId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PVTZ::ZoneVpcBinder`, which is used to bind a private zone to or unbind a private zone from a virtual private cloud (VPC).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosZoneVpcBinder`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonevpcbinder
 */
export declare class ZoneVpcBinder extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ZoneVpcBinderProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Vpcs: Vpc list
     */
    readonly attrVpcs: ros.IResolvable;
    /**
     * Attribute ZoneId: Zone Id
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneVpcBinderProps, enableResourcePropertyConstraint?: boolean);
}
