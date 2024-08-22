import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroups } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecurityGroups as SecurityGroupsProperty };

/**
 * Properties for defining a `SecurityGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroups
 */
export interface SecurityGroupsProps {

    /**
     * Property networkType: The network type of the security group. Valid values:
     * vpc
     * classic
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which the instance belongs. 
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property securityGroupId: The ID of the security group.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * Property securityGroupIds: The IDs of security groups. The value is a JSON array that consists of up to 100 security group IDs. Separate multiple security group IDs with commas (,).
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property securityGroupName: The name of the security group.
     */
    readonly securityGroupName?: string | ros.IResolvable;

    /**
     * Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     * Note If you do not specify this parameter, both basic and advanced security groups are queried.
     */
    readonly securityGroupType?: string | ros.IResolvable;

    /**
     * Property tags: Tags of securitygroup.
     */
    readonly tags?: RosSecurityGroups.TagsProperty[];

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) to which the security group belongs.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::SecurityGroups`, which is used to query the basic information about security groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroups
 */
export class SecurityGroups extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SecurityGroupsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SecurityGroupIds: The list of security group ids.
     */
    public readonly attrSecurityGroupIds: ros.IResolvable;

    /**
     * Attribute SecurityGroups: The list of security groups.
     */
    public readonly attrSecurityGroups: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSecurityGroups = new RosSecurityGroups(this, id,  {
            vpcId: props.vpcId,
            securityGroupName: props.securityGroupName,
            resourceGroupId: props.resourceGroupId,
            networkType: props.networkType,
            securityGroupId: props.securityGroupId,
            securityGroupType: props.securityGroupType,
            securityGroupIds: props.securityGroupIds,
            tags: props.tags,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityGroups;
        this.attrSecurityGroupIds = rosSecurityGroups.attrSecurityGroupIds;
        this.attrSecurityGroups = rosSecurityGroups.attrSecurityGroups;
    }
}
