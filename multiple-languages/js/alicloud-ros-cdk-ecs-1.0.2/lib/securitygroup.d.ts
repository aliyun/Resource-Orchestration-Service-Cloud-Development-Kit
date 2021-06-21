import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroup } from './ecs.generated';
export { RosSecurityGroup as SecurityGroupProperty };
/**
 * Properties for defining a `ALIYUN::ECS::SecurityGroup`
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
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosSecurityGroup.TagsProperty[];
    /**
     * Property vpcId: Physical ID of the VPC.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::SecurityGroup`
 */
export declare class SecurityGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute SecurityGroupId: generated security group id for security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * Attribute SecurityGroupName: The name of security group.
     */
    readonly attrSecurityGroupName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ECS::SecurityGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: SecurityGroupProps, enableResourcePropertyConstraint?: boolean);
}
