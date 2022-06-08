import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroupClone } from './ecs.generated';
export { RosSecurityGroupClone as SecurityGroupCloneProperty };
/**
 * Properties for defining a `ALIYUN::ECS::SecurityGroupClone`
 */
export interface SecurityGroupCloneProps {
    /**
     * Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group. If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
     */
    readonly sourceSecurityGroupId: string | ros.IResolvable;
    /**
     * Property description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
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
     * Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly securityGroupName?: string | ros.IResolvable;
    /**
     * Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     */
    readonly securityGroupType?: string | ros.IResolvable;
    /**
     * Property vpcId: Physical ID of the VPC.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::SecurityGroupClone`
 */
export declare class SecurityGroupClone extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute SecurityGroupId: Generated security group id of new security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ECS::SecurityGroupClone`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupCloneProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=securitygroupclone.d.ts.map