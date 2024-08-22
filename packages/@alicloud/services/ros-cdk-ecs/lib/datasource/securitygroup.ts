import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroup } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::SecurityGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroup
 */
export class SecurityGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SecurityGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The create time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Description: The description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute InnerAccessPolicy: Network connectivity policy within the security group.
     */
    public readonly attrInnerAccessPolicy: ros.IResolvable;

    /**
     * Attribute Permissions: A collection of Security Group permission rules.
     */
    public readonly attrPermissions: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The enterprise resource group ID where the security group resides.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute SecurityGroupId: Security group ID.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * Attribute SecurityGroupName: The security group name.
     */
    public readonly attrSecurityGroupName: ros.IResolvable;

    /**
     * Attribute SecurityGroupReferences: The complete information about the authorization of all user-specified security groups.
     */
    public readonly attrSecurityGroupReferences: ros.IResolvable;

    /**
     * Attribute SecurityGroupType: Security group type.
     */
    public readonly attrSecurityGroupType: ros.IResolvable;

    /**
     * Attribute ServiceId: The virtual quotient ID corresponding to the security group.
     */
    public readonly attrServiceId: ros.IResolvable;

    /**
     * Attribute ServiceManaged: Whether the owner of the security group is a cloud product or vendor.
     */
    public readonly attrServiceManaged: ros.IResolvable;

    /**
     * Attribute Tags: The tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute VpcId: Secure the group's proprietary network.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSecurityGroup = new RosSecurityGroup(this, id,  {
            securityGroupId: props.securityGroupId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityGroup;
        this.attrCreateTime = rosSecurityGroup.attrCreateTime;
        this.attrDescription = rosSecurityGroup.attrDescription;
        this.attrInnerAccessPolicy = rosSecurityGroup.attrInnerAccessPolicy;
        this.attrPermissions = rosSecurityGroup.attrPermissions;
        this.attrResourceGroupId = rosSecurityGroup.attrResourceGroupId;
        this.attrSecurityGroupId = rosSecurityGroup.attrSecurityGroupId;
        this.attrSecurityGroupName = rosSecurityGroup.attrSecurityGroupName;
        this.attrSecurityGroupReferences = rosSecurityGroup.attrSecurityGroupReferences;
        this.attrSecurityGroupType = rosSecurityGroup.attrSecurityGroupType;
        this.attrServiceId = rosSecurityGroup.attrServiceId;
        this.attrServiceManaged = rosSecurityGroup.attrServiceManaged;
        this.attrTags = rosSecurityGroup.attrTags;
        this.attrVpcId = rosSecurityGroup.attrVpcId;
    }
}
