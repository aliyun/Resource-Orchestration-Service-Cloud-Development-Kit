import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroup } from './ecs.generated';
export { RosSecurityGroup as SecurityGroupProperty };
/**
 * Properties for defining a `SecurityGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroup
 */
export interface SecurityGroupProps {
    /**
     * Property securityGroupId: Security group ID.
     */
    readonly securityGroupId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `SecurityGroup`.
 */
export interface ISecurityGroup extends ros.IResource {
    readonly props: SecurityGroupProps;
    /**
     * Attribute CreateTime: The create time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute InnerAccessPolicy: Network connectivity policy within the security group.
     */
    readonly attrInnerAccessPolicy: ros.IResolvable | string;
    /**
     * Attribute Permissions: A collection of Security Group permission rules.
     */
    readonly attrPermissions: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The enterprise resource group ID where the security group resides.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupId: Security group ID.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupName: The security group name.
     */
    readonly attrSecurityGroupName: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupReferences: The complete information about the authorization of all user-specified security groups.
     */
    readonly attrSecurityGroupReferences: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupType: Security group type.
     */
    readonly attrSecurityGroupType: ros.IResolvable | string;
    /**
     * Attribute ServiceId: The virtual quotient ID corresponding to the security group.
     */
    readonly attrServiceId: ros.IResolvable | string;
    /**
     * Attribute ServiceManaged: Whether the owner of the security group is a cloud product or vendor.
     */
    readonly attrServiceManaged: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute VpcId: Secure the group's proprietary network.
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::SecurityGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroup
 */
export declare class SecurityGroup extends ros.Resource implements ISecurityGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SecurityGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The create time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute InnerAccessPolicy: Network connectivity policy within the security group.
     */
    readonly attrInnerAccessPolicy: ros.IResolvable | string;
    /**
     * Attribute Permissions: A collection of Security Group permission rules.
     */
    readonly attrPermissions: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The enterprise resource group ID where the security group resides.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupId: Security group ID.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupName: The security group name.
     */
    readonly attrSecurityGroupName: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupReferences: The complete information about the authorization of all user-specified security groups.
     */
    readonly attrSecurityGroupReferences: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupType: Security group type.
     */
    readonly attrSecurityGroupType: ros.IResolvable | string;
    /**
     * Attribute ServiceId: The virtual quotient ID corresponding to the security group.
     */
    readonly attrServiceId: ros.IResolvable | string;
    /**
     * Attribute ServiceManaged: Whether the owner of the security group is a cloud product or vendor.
     */
    readonly attrServiceManaged: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute VpcId: Secure the group's proprietary network.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupProps, enableResourcePropertyConstraint?: boolean);
}
