import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroups } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecurityGroups as SecurityGroupsProperty };

/**
 * Properties for defining a `DATASOURCE::ECS::SecurityGroups`
 */
export interface SecurityGroupsProps {

    /**
     * Property networkType: The network type of the security group. Valid values:
     * vpc
     * classic
     */
    readonly networkType?: string | ros.IResolvable;

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
 * A ROS resource type:  `DATASOURCE::ECS::SecurityGroups`
 */
export class SecurityGroups extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute SecurityGroupIds: The list of security group ids.
     */
    public readonly attrSecurityGroupIds: ros.IResolvable;

    /**
     * Attribute SecurityGroups: The list of security groups.
     */
    public readonly attrSecurityGroups: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::ECS::SecurityGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSecurityGroups = new RosSecurityGroups(this, id,  {
            vpcId: props.vpcId,
            securityGroupName: props.securityGroupName,
            resourceGroupId: props.resourceGroupId,
            networkType: props.networkType,
            securityGroupId: props.securityGroupId,
            securityGroupType: props.securityGroupType,
            securityGroupIds: props.securityGroupIds,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityGroups;
        this.attrSecurityGroupIds = rosSecurityGroups.attrSecurityGroupIds;
        this.attrSecurityGroups = rosSecurityGroups.attrSecurityGroups;
    }
}
