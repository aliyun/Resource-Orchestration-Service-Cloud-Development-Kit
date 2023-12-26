import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroupClone } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::SecurityGroupClone`, which is used to clone a security group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityGroupClone`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupclone
 */
export class SecurityGroupClone extends ros.Resource {

    /**
     * Attribute SecurityGroupId: Generated security group id of new security group.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupCloneProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSecurityGroupClone = new RosSecurityGroupClone(this, id,  {
            description: props.description,
            vpcId: props.vpcId,
            securityGroupName: props.securityGroupName,
            resourceGroupId: props.resourceGroupId,
            destinationRegionId: props.destinationRegionId === undefined || props.destinationRegionId === null ? 'CURRENT' : props.destinationRegionId,
            networkType: props.networkType,
            securityGroupType: props.securityGroupType,
            sourceSecurityGroupId: props.sourceSecurityGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityGroupClone;
        this.attrSecurityGroupId = rosSecurityGroupClone.attrSecurityGroupId;
    }
}
