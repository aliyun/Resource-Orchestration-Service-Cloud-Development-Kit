import * as ros from '@alicloud/ros-cdk-core';
import { RosRamRoleAttachment } from './ecs.generated';
export { RosRamRoleAttachment as RamRoleAttachmentProperty };
/**
 * Properties for defining a `ALIYUN::ECS::RamRoleAttachment`
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
 * A ROS resource type:  `ALIYUN::ECS::RamRoleAttachment`
 */
export declare class RamRoleAttachment extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InstanceIds: The list of ecs instance id
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Attribute RamRoleName: The ram role name.
     */
    readonly attrRamRoleName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ECS::RamRoleAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RamRoleAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
