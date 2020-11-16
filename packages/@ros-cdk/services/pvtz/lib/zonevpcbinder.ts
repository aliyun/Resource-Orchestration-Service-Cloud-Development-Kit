import * as ros from '@ros-cdk/core';
import { RosZoneVpcBinder } from './pvtz.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosZoneVpcBinder as ZoneVpcBinderProperty };

/**
 * Properties for defining a `ALIYUN::PVTZ::ZoneVpcBinder`
 */
export interface ZoneVpcBinderProps {

    /**
     * @Property vpcs:
     */
    readonly vpcs: Array<RosZoneVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property zoneId: Zone Id
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
     * Create a new `ALIYUN::PVTZ::ZoneVpcBinder`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneVpcBinderProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosZoneVpcBinder = new RosZoneVpcBinder(this, id,  {
            vpcs: props.vpcs,
            zoneId: props.zoneId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosZoneVpcBinder;
    }
}
