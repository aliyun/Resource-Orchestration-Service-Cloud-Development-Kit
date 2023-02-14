import * as ros from '@alicloud/ros-cdk-core';
import { RosZoneVpcBinder } from './pvtz.generated';
export { RosZoneVpcBinder as ZoneVpcBinderProperty };
/**
 * Properties for defining a `ALIYUN::PVTZ::ZoneVpcBinder`
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
 * A ROS resource type:  `ALIYUN::PVTZ::ZoneVpcBinder`
 */
export declare class ZoneVpcBinder extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Vpcs: Vpc list
     */
    readonly attrVpcs: ros.IResolvable;
    /**
     * Attribute ZoneId: Zone Id
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::PVTZ::ZoneVpcBinder`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneVpcBinderProps, enableResourcePropertyConstraint?: boolean);
}
