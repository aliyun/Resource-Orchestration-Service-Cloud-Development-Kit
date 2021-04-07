import * as ros from '@alicloud/ros-cdk-core';
import { RosManagedPolicy } from './ram.generated';
export { RosManagedPolicy as ManagedPolicyProperty };
/**
 * Properties for defining a `ALIYUN::RAM::ManagedPolicy`
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
 * A ROS resource type:  `ALIYUN::RAM::ManagedPolicy`
 */
export declare class ManagedPolicy extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute PolicyName: When the logical ID of this resource is provided to the Ref intrinsic function, Ref returns the ARN.
     */
    readonly attrPolicyName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::RAM::ManagedPolicy`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ManagedPolicyProps, enableResourcePropertyConstraint?: boolean);
}
