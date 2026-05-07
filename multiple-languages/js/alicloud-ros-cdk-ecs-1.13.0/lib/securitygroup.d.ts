import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroup } from './ecs.generated';
export { RosSecurityGroup as SecurityGroupProperty };
/**
 * Properties for defining a `SecurityGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroup
 */
export interface SecurityGroupProps {
    /**
     * Property description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property securityGroupEgress: egress rules for the security group.
     */
    readonly securityGroupEgress?: Array<RosSecurityGroup.SecurityGroupEgressProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property securityGroupIngress: Ingress rules for the security group.
     */
    readonly securityGroupIngress?: Array<RosSecurityGroup.SecurityGroupIngressProperty | ros.IResolvable> | ros.IResolvable;
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
     * Property tags: Tags to attach to security group. Max support 20 tags to add during create security group. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosSecurityGroup.TagsProperty[];
    /**
     * Property vpcId: Physical ID of the VPC.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * Represents a `SecurityGroup`.
 */
export interface ISecurityGroup extends ros.IResource {
    readonly props: SecurityGroupProps;
    /**
     * Attribute SecurityGroupId: generated security group id for security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupName: The name of security group.
     */
    readonly attrSecurityGroupName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::SecurityGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroup
 */
export declare class SecurityGroup extends ros.Resource implements ISecurityGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SecurityGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute SecurityGroupId: generated security group id for security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupName: The name of security group.
     */
    readonly attrSecurityGroupName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: SecurityGroupProps, enableResourcePropertyConstraint?: boolean);
}
