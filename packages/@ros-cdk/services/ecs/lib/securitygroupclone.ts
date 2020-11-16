import * as ros from '@ros-cdk/core';
import { RosSecurityGroupClone } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecurityGroupClone as SecurityGroupCloneProperty };

/**
 * Properties for defining a `ALIYUN::ECS::SecurityGroupClone`
 */
export interface SecurityGroupCloneProps {

    /**
     * @Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group. If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
     */
    readonly sourceSecurityGroupId: string;

    /**
     * @Property description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string;

    /**
     * @Property destinationRegionId: Clone security group to the specified region. Default to current region.
     */
    readonly destinationRegionId?: string;

    /**
     * @Property networkType: Clone new security group as classic network type. If the VpcId is specified, the value will be ignored.
     */
    readonly networkType?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

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
     * @Property vpcId: Physical ID of the VPC.
     */
    readonly vpcId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::SecurityGroupClone`
 */
export class SecurityGroupClone extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute SecurityGroupId: Generated security group id of new security group.
     */
    public readonly attrSecurityGroupId: any;

    /**
     * Create a new `ALIYUN::ECS::SecurityGroupClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupCloneProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSecurityGroupClone = new RosSecurityGroupClone(this, id,  {
            description: props.description,
            vpcId: props.vpcId,
            securityGroupName: props.securityGroupName,
            resourceGroupId: props.resourceGroupId,
            destinationRegionId: props.destinationRegionId ? props.destinationRegionId : 'CURRENT',
            networkType: props.networkType,
            securityGroupType: props.securityGroupType,
            sourceSecurityGroupId: props.sourceSecurityGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityGroupClone;
        this.attrSecurityGroupId = rosSecurityGroupClone.attrSecurityGroupId;
    }
}
