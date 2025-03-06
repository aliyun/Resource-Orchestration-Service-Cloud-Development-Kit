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
 * Represents a `ZoneVpcBinder`.
 */
export interface IZoneVpcBinder extends ros.IResource {
    readonly props: ZoneVpcBinderProps;
    /**
     * Attribute Vpcs: Vpc list
     */
    readonly attrVpcs: ros.IResolvable | string;
    /**
     * Attribute ZoneId: Zone Id
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PVTZ::ZoneVpcBinder`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosZoneVpcBinder`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonevpcbinder
 */
export declare class ZoneVpcBinder extends ros.Resource implements IZoneVpcBinder {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ZoneVpcBinderProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Vpcs: Vpc list
     */
    readonly attrVpcs: ros.IResolvable | string;
    /**
     * Attribute ZoneId: Zone Id
     */
    readonly attrZoneId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneVpcBinderProps, enableResourcePropertyConstraint?: boolean);
}
