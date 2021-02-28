import * as ros from '@alicloud/ros-cdk-core';
import { RosZoneVpcBinder } from './pvtz.generated';
// Generated from the AliCloud ROS Resource Specification
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
    readonly zoneId: string;
}

/**
 * A ROS resource type:  `ALIYUN::PVTZ::ZoneVpcBinder`
 */
export class ZoneVpcBinder extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Vpcs: Vpc list
     */
    public readonly attrVpcs: any;

    /**
     * Attribute ZoneId: Zone Id
     */
    public readonly attrZoneId: any;

    /**
     * Create a new `ALIYUN::PVTZ::ZoneVpcBinder`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneVpcBinderProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosZoneVpcBinder = new RosZoneVpcBinder(this, id,  {
            vpcs: props.vpcs,
            zoneId: props.zoneId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosZoneVpcBinder;
        this.attrVpcs = rosZoneVpcBinder.attrVpcs;
        this.attrZoneId = rosZoneVpcBinder.attrZoneId;
    }
}
