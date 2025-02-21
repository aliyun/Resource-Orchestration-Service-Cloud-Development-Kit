import * as ros from '@alicloud/ros-cdk-core';
import { RosGrantInstanceToCen } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGrantInstanceToCen as GrantInstanceToCenProperty };

/**
 * Properties for defining a `GrantInstanceToCen`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-grantinstancetocen
 */
export interface GrantInstanceToCenProps {

    /**
     * Property cenId: The ID of the CEN instance to be authorized.
     */
    readonly cenId: string | ros.IResolvable;

    /**
     * Property cenOwnerId: The UID of the account to which the target CEN instance belongs.
     */
    readonly cenOwnerId: number | ros.IResolvable;

    /**
     * Property instanceId: The ID of the network instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property instanceType: The type of the network instance. Valid values:
     * VPC: Virtual Private Cloud (VPC).
     * VBR: Virtual Border Router (VBR).
     * CCN: Cloud Connect Network (CCN).
     */
    readonly instanceType: string | ros.IResolvable;
}

/**
 * Represents a `GrantInstanceToCen`.
 */
export interface IGrantInstanceToCen extends ros.IResource {
    readonly props: GrantInstanceToCenProps;

    /**
     * Attribute CenId: The ID of the CEN instance to be authorized.
     */
    readonly attrCenId: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the network instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::GrantInstanceToCen`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGrantInstanceToCen`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-grantinstancetocen
 */
export class GrantInstanceToCen extends ros.Resource implements IGrantInstanceToCen {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: GrantInstanceToCenProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CenId: The ID of the CEN instance to be authorized.
     */
    public readonly attrCenId: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the network instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GrantInstanceToCenProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

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
