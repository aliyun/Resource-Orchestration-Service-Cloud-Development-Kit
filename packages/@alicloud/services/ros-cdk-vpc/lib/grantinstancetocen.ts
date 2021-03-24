import * as ros from '@alicloud/ros-cdk-core';
import { RosGrantInstanceToCen } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGrantInstanceToCen as GrantInstanceToCenProperty };

/**
 * Properties for defining a `ALIYUN::VPC::GrantInstanceToCen`
 */
export interface GrantInstanceToCenProps {

    /**
     * Property cenId: The ID of the CEN instance to be authorized.
     */
    readonly cenId: string;

    /**
     * Property cenOwnerId: The UID of the account to which the target CEN instance belongs.
     */
    readonly cenOwnerId: number;

    /**
     * Property instanceId: The ID of the network instance.
     */
    readonly instanceId: string;

    /**
     * Property instanceType: The type of the network instance. Valid values:
     * VPC: Virtual Private Cloud (VPC).
     * VBR: Virtual Border Router (VBR).
     * CCN: Cloud Connect Network (CCN).
     */
    readonly instanceType: string;
}

/**
 * A ROS resource type:  `ALIYUN::VPC::GrantInstanceToCen`
 */
export class GrantInstanceToCen extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute CenId: The ID of the CEN instance to be authorized.
     */
    public readonly attrCenId: any;

    /**
     * Attribute InstanceId: The ID of the network instance.
     */
    public readonly attrInstanceId: any;

    /**
     * Create a new `ALIYUN::VPC::GrantInstanceToCen`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GrantInstanceToCenProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosGrantInstanceToCen = new RosGrantInstanceToCen(this, id,  {
            instanceId: props.instanceId,
            cenOwnerId: props.cenOwnerId,
            cenId: props.cenId,
            instanceType: props.instanceType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGrantInstanceToCen;
        this.attrCenId = rosGrantInstanceToCen.attrCenId;
        this.attrInstanceId = rosGrantInstanceToCen.attrInstanceId;
    }
}
