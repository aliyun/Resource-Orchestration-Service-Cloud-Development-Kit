import * as ros from '@ros-cdk/core';
import { RosSecurityGroup } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecurityGroup as SecurityGroupProperty };

/**
 * Properties for defining a `ALIYUN::ECS::SecurityGroup`
 */
export interface SecurityGroupProps {

    /**
     * @Property description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property securityGroupEgress: egress rules for the security group.
     */
    readonly securityGroupEgress?: Array<RosSecurityGroup.SecurityGroupEgressProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property securityGroupIngress: Ingress rules for the security group.
     */
    readonly securityGroupIngress?: Array<RosSecurityGroup.SecurityGroupIngressProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly securityGroupName?: string;

    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     */
    readonly securityGroupType?: string;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: { [key: string]: any }[];

    /**
     * @Property vpcId: Physical ID of the VPC.
     */
    readonly vpcId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::SecurityGroup`
 */
export class SecurityGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute SecurityGroupId: generated security group id for security group.
     */
    public readonly attrSecurityGroupId: any;

    /**
     * Create a new `ALIYUN::ECS::SecurityGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSecurityGroup = new RosSecurityGroup(this, id,  {
            description: props.description,
            vpcId: props.vpcId,
            securityGroupName: props.securityGroupName,
            resourceGroupId: props.resourceGroupId,
            securityGroupType: props.securityGroupType,
            securityGroupIngress: props.securityGroupIngress,
            tags: ros.tagFactory(props.tags),
            securityGroupEgress: props.securityGroupEgress,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityGroup;
        this.attrSecurityGroupId = rosSecurityGroup.attrSecurityGroupId;
    }
}
