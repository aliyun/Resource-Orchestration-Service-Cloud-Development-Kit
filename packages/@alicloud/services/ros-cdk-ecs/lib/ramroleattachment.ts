import * as ros from '@alicloud/ros-cdk-core';
import { RosRamRoleAttachment } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRamRoleAttachment as RamRoleAttachmentProperty };

/**
 * Properties for defining a `RamRoleAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-ramroleattachment
 */
export interface RamRoleAttachmentProps {

    /**
     * Property instanceIds: The instance id that needs to be granted the ram role.
     */
    readonly instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property ramRoleName: The ram role name.
     */
    readonly ramRoleName: string | ros.IResolvable;

    /**
     * Property policy: When granting the instance RAM role to one or more ECS instances, you can specify an additional permission policy to further limit the permissions of the RAM role.
     * The length is 1~1024 characters.
     */
    readonly policy?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::RamRoleAttachment`, which is used to attach an instance Resource Access Management (RAM) role to Elastic Compute Service (ECS) instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRamRoleAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-ramroleattachment
 */
export class RamRoleAttachment extends ros.Resource {

    /**
     * Attribute InstanceIds: The list of ecs instance id
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * Attribute RamRoleName: The ram role name.
     */
    public readonly attrRamRoleName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RamRoleAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosRamRoleAttachment = new RosRamRoleAttachment(this, id,  {
            policy: props.policy,
            ramRoleName: props.ramRoleName,
            instanceIds: props.instanceIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRamRoleAttachment;
        this.attrInstanceIds = rosRamRoleAttachment.attrInstanceIds;
        this.attrRamRoleName = rosRamRoleAttachment.attrRamRoleName;
    }
}
