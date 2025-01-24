import * as ros from '@alicloud/ros-cdk-core';
import { RosAttachPolicyToRole } from './ram.generated';
export { RosAttachPolicyToRole as AttachPolicyToRoleProperty };
/**
 * Properties for defining a `AttachPolicyToRole`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytorole
 */
export interface AttachPolicyToRoleProps {
    /**
     * Property policyName: Authorization policy name.
     */
    readonly policyName: string | ros.IResolvable;
    /**
     * Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    readonly policyType: string | ros.IResolvable;
    /**
     * Property roleName: Role name.Example: dev.
     */
    readonly roleName: string | ros.IResolvable;
}
/**
 * Represents a `AttachPolicyToRole`.
 */
export interface IAttachPolicyToRole extends ros.IResource {
    readonly props: AttachPolicyToRoleProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::AttachPolicyToRole`, which is used to attach a policy to a specified role.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAttachPolicyToRole`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytorole
 */
export declare class AttachPolicyToRole extends ros.Resource implements IAttachPolicyToRole {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AttachPolicyToRoleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AttachPolicyToRoleProps, enableResourcePropertyConstraint?: boolean);
}
