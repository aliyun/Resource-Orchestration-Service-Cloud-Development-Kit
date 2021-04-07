import * as ros from '@alicloud/ros-cdk-core';
import { RosAnycastEIPAssociation } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAnycastEIPAssociation as AnycastEIPAssociationProperty };

/**
 * Properties for defining a `ALIYUN::VPC::AnycastEIPAssociation`
 */
export interface AnycastEIPAssociationProps {

    /**
     * Property anycastId: Anycast EIP instance ID.
     */
    readonly anycastId: string | ros.IResolvable;

    /**
     * Property bindInstanceId: The ID of the cloud resource instance to be bound.
     */
    readonly bindInstanceId: string | ros.IResolvable;

    /**
     * Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound.
     */
    readonly bindInstanceRegionId: string | ros.IResolvable;

    /**
     * Property bindInstanceType: The cloud resource instance type to be bound. Valid value: SlbInstance, SLB instance of private network type.
     */
    readonly bindInstanceType: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::VPC::AnycastEIPAssociation`
 */
export class AnycastEIPAssociation extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AnycastId: Anycast EIP instance ID.
     */
    public readonly attrAnycastId: ros.IResolvable;

    /**
     * Attribute BindInstanceId: The ID of the cloud resource instance to be bound.
     */
    public readonly attrBindInstanceId: ros.IResolvable;

    /**
     * Attribute BindInstanceRegionId: The region ID of the cloud resource instance to be bound.
     */
    public readonly attrBindInstanceRegionId: ros.IResolvable;

    /**
     * Attribute BindInstanceType: The cloud resource instance type to be bound.
     */
    public readonly attrBindInstanceType: ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::AnycastEIPAssociation`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AnycastEIPAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAnycastEIPAssociation = new RosAnycastEIPAssociation(this, id,  {
            bindInstanceId: props.bindInstanceId,
            bindInstanceRegionId: props.bindInstanceRegionId,
            bindInstanceType: props.bindInstanceType,
            anycastId: props.anycastId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAnycastEIPAssociation;
        this.attrAnycastId = rosAnycastEIPAssociation.attrAnycastId;
        this.attrBindInstanceId = rosAnycastEIPAssociation.attrBindInstanceId;
        this.attrBindInstanceRegionId = rosAnycastEIPAssociation.attrBindInstanceRegionId;
        this.attrBindInstanceType = rosAnycastEIPAssociation.attrBindInstanceType;
    }
}
