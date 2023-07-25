import * as ros from '@alicloud/ros-cdk-core';
import { RosHaVipAssociation } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosHaVipAssociation as HaVipAssociationProperty };

/**
 * Properties for defining a `ALIYUN::VPC::HaVipAssociation`
 */
export interface HaVipAssociationProps {

    /**
     * Property haVipId: The ID of the HAVIP.
     */
    readonly haVipId: string | ros.IResolvable;

    /**
     * Property instanceId: The ID of the ECS instance to be associated with the HAVIP.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property instanceType: The type of the instance to be associated with the HAVIP. Valid values:
     * EcsInstance: an ECS instance
     * NetworkInterface: an ENI. If you want to associate the HAVIP with an ENI, this parameter is required.
     */
    readonly instanceType?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::VPC::HaVipAssociation`
 */
export class HaVipAssociation extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::VPC::HaVipAssociation`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HaVipAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosHaVipAssociation = new RosHaVipAssociation(this, id,  {
            instanceId: props.instanceId,
            haVipId: props.haVipId,
            instanceType: props.instanceType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHaVipAssociation;
    }
}
