import * as ros from '@alicloud/ros-cdk-core';
import { RosAnycastEIPAssociation } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAnycastEIPAssociation as AnycastEIPAssociationProperty };

/**
 * Properties for defining a `AnycastEIPAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteipassociation
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::AnycastEIPAssociation`, which is used to associate an Anycast elastic IP address (Anycast EIP) with a cloud resource in a specific region.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAnycastEIPAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteipassociation
 */
export class AnycastEIPAssociation extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AnycastEIPAssociationProps;
    protected enableResourcePropertyConstraint: boolean;

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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AnycastEIPAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

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
