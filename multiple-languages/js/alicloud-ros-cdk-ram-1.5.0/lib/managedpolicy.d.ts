import * as ros from '@alicloud/ros-cdk-core';
import { RosManagedPolicy } from './ram.generated';
export { RosManagedPolicy as ManagedPolicyProperty };
/**
 * Properties for defining a `ManagedPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-managedpolicy
 */
export interface ManagedPolicyProps {
    /**
     * Property policyName: Specifies the authorization policy name, containing up to 128 characters.
     */
    readonly policyName: string | ros.IResolvable;
    /**
     * Property description: Specifies the authorization policy description, containing up to 1024 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property groups: The names of groups to attach to this policy.
     */
    readonly groups?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property ignoreExisting: Whether to ignore existing policy
     * False: ROS will perform a uniqueness check.If a policy with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a policy with the same name, the policy creation process will be ignored.
     * If the policy is not created by ROS, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: boolean | ros.IResolvable;
    /**
     * Property policyDocument: A policy document that describes what actions are allowed on which resources.
     */
    readonly policyDocument?: RosManagedPolicy.PolicyDocumentProperty | ros.IResolvable;
    /**
     * Property policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
     */
    readonly policyDocumentUnchecked?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property roles: The names of roles to attach to this policy.
     */
    readonly roles?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property users: The names of users to attach to this policy.
     */
    readonly users?: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::ManagedPolicy`, which is used to create a Resource Access Management (RAM) policy.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosManagedPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-managedpolicy
 */
export declare class ManagedPolicy extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ManagedPolicyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute PolicyName: When the logical ID of this resource is provided to the Ref intrinsic function, Ref returns the ARN.
     */
    readonly attrPolicyName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ManagedPolicyProps, enableResourcePropertyConstraint?: boolean);
}
