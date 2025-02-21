import * as ros from '@alicloud/ros-cdk-core';
import { RosAttachPolicyToUser } from './ram.generated';
export { RosAttachPolicyToUser as AttachPolicyToUserProperty };
/**
 * Properties for defining a `AttachPolicyToUser`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytouser
 */
export interface AttachPolicyToUserProps {
    /**
     * Property policyName: Authorization policy name.
     */
    readonly policyName: string | ros.IResolvable;
    /**
     * Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    readonly policyType: string | ros.IResolvable;
    /**
     * Property userName: User name.Example: dev.
     */
    readonly userName: string | ros.IResolvable;
}
/**
 * Represents a `AttachPolicyToUser`.
 */
export interface IAttachPolicyToUser extends ros.IResource {
    readonly props: AttachPolicyToUserProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::AttachPolicyToUser`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAttachPolicyToUser`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytouser
 */
export declare class AttachPolicyToUser extends ros.Resource implements IAttachPolicyToUser {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AttachPolicyToUserProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AttachPolicyToUserProps, enableResourcePropertyConstraint?: boolean);
}
