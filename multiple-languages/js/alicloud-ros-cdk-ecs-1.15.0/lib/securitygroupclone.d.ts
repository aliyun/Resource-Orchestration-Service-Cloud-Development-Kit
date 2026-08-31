import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroupClone } from './ecs.generated';
export { RosSecurityGroupClone as SecurityGroupCloneProperty };
/**
 * Properties for defining a `SecurityGroupClone`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupclone
 */
export interface SecurityGroupCloneProps {
    /**
     * Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group. If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
     */
    readonly sourceSecurityGroupId: string | ros.IResolvable;
    /**
     * Property description: The description of the security group. The description must be 2 to 256
     * characters in length. It cannot start with `http:\/\/` or `https:\/\/`.
     * By default, this parameter is left empty.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property destinationRegionId: Clone security group to the specified region. Default to current region.
     */
    readonly destinationRegionId?: string | ros.IResolvable;
    /**
     * Property networkType: Clone new security group as classic network type. If the VpcId is specified, the value will be ignored.
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property securityGroupName: The name of the security group. The name must be 2 to 128 characters in length.
     * The name must start with a letter and cannot start with `http:\/\/` or `https:\/\/`.
     * The name can contain letters, digits, colons (:), underscores (_), periods (.),
     * and hyphens (-).
     */
    readonly securityGroupName?: string | ros.IResolvable;
    /**
     * Property securityGroupType: The type of the security group. Valid values:
     * - normal: basic security group
     * - enterprise: advanced security group
     * Default value: normal.
     */
    readonly securityGroupType?: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the VPC in which you want to create the security group.
     * > The VpcId parameter is required only if you want to create security groups of
     * the VPC type.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * Represents a `SecurityGroupClone`.
 */
export interface ISecurityGroupClone extends ros.IResource {
    readonly props: SecurityGroupCloneProps;
    /**
     * Attribute SecurityGroupId: Generated security group id of new security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::SecurityGroupClone`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityGroupClone`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupclone
 */
export declare class SecurityGroupClone extends ros.Resource implements ISecurityGroupClone {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SecurityGroupCloneProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute SecurityGroupId: Generated security group id of new security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupCloneProps, enableResourcePropertyConstraint?: boolean);
}
