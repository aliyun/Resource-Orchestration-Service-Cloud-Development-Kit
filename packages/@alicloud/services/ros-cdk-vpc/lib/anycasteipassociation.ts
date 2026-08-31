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
     * Property bindInstanceType: The type of the cloud resource with which you want to associate the Anycast EIP.
     * Valid values:
     * - SlbInstance: CLB instance in a virtual private cloud (VPC).
     * - NetworkInterface: ENI.
     */
    readonly bindInstanceType: string | ros.IResolvable;

    /**
     * Property associationMode: The association mode. Valid values:
     * - Default: the default mode. In this mode, the associated cloud resource is the
     * default origin server.
     * - Normal: the normal mode. In this mode, the associated cloud resource is a
     * normal origin server.
     * > An Anycast EIP can be associated with cloud resources in multiple regions.
     * However, you can specify only one default origin server and multiple normal
     * origin servers. When you do not specify an access point or add a new access
     * point, requests are forwarded to the default origin server by default.
     * >
     * > - If this is your first time to associate a cloud resource with the Anycast
     * EIP, the association mode is Default by default.
     * >
     * > - If this is not your first time to associate a cloud resource with the Anycast
     * EIP, you can set the association mode to Default. This makes the new cloud
     * resource the default origin server, and the original default origin server
     * becomes a normal origin server.
     */
    readonly associationMode?: string | ros.IResolvable;

    /**
     * Property popLocations: The pop locations.
     */
    readonly popLocations?: Array<RosAnycastEIPAssociation.PopLocationsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property privateIpAddress: The secondary private IP address of the ENI.
     * This parameter is required when BindInstanceType is set to NetworkInterface. If
     * you do not specify this parameter, the primary private IP address of the ENI is
     * used.
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
export class AnycastEIPAssociation extends ros.Resource implements IAnycastEIPAssociation {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AnycastEIPAssociationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AnycastId: Anycast EIP instance ID.
     */
    public readonly attrAnycastId: ros.IResolvable | string;

    /**
     * Attribute BindInstanceId: The ID of the cloud resource instance to be bound.
     */
    public readonly attrBindInstanceId: ros.IResolvable | string;

    /**
     * Attribute BindInstanceRegionId: The region ID of the cloud resource instance to be bound.
     */
    public readonly attrBindInstanceRegionId: ros.IResolvable | string;

    /**
     * Attribute BindInstanceType: The cloud resource instance type to be bound.
     */
    public readonly attrBindInstanceType: ros.IResolvable | string;

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
            privateIpAddress: props.privateIpAddress,
            bindInstanceRegionId: props.bindInstanceRegionId,
            bindInstanceType: props.bindInstanceType,
            anycastId: props.anycastId,
            associationMode: props.associationMode,
            popLocations: props.popLocations,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAnycastEIPAssociation;
        this.attrAnycastId = rosAnycastEIPAssociation.attrAnycastId;
        this.attrBindInstanceId = rosAnycastEIPAssociation.attrBindInstanceId;
        this.attrBindInstanceRegionId = rosAnycastEIPAssociation.attrBindInstanceRegionId;
        this.attrBindInstanceType = rosAnycastEIPAssociation.attrBindInstanceType;
    }
}
