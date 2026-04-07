import * as ros from '@alicloud/ros-cdk-core';
import { RosAnycastEIPAssociation } from './vpc.generated';
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
    /**
     * Property associationMode: The association mode.
     */
    readonly associationMode?: string | ros.IResolvable;
    /**
     * Property popLocations: The pop locations.
     */
    readonly popLocations?: Array<RosAnycastEIPAssociation.PopLocationsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property privateIpAddress: The private IP address.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
}
/**
 * Represents a `AnycastEIPAssociation`.
 */
export interface IAnycastEIPAssociation extends ros.IResource {
    readonly props: AnycastEIPAssociationProps;
    /**
     * Attribute AnycastId: Anycast EIP instance ID.
     */
    readonly attrAnycastId: ros.IResolvable | string;
    /**
     * Attribute BindInstanceId: The ID of the cloud resource instance to be bound.
     */
    readonly attrBindInstanceId: ros.IResolvable | string;
    /**
     * Attribute BindInstanceRegionId: The region ID of the cloud resource instance to be bound.
     */
    readonly attrBindInstanceRegionId: ros.IResolvable | string;
    /**
     * Attribute BindInstanceType: The cloud resource instance type to be bound.
     */
    readonly attrBindInstanceType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::AnycastEIPAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAnycastEIPAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteipassociation
 */
export declare class AnycastEIPAssociation extends ros.Resource implements IAnycastEIPAssociation {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AnycastEIPAssociationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AnycastId: Anycast EIP instance ID.
     */
    readonly attrAnycastId: ros.IResolvable | string;
    /**
     * Attribute BindInstanceId: The ID of the cloud resource instance to be bound.
     */
    readonly attrBindInstanceId: ros.IResolvable | string;
    /**
     * Attribute BindInstanceRegionId: The region ID of the cloud resource instance to be bound.
     */
    readonly attrBindInstanceRegionId: ros.IResolvable | string;
    /**
     * Attribute BindInstanceType: The cloud resource instance type to be bound.
     */
    readonly attrBindInstanceType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AnycastEIPAssociationProps, enableResourcePropertyConstraint?: boolean);
}
