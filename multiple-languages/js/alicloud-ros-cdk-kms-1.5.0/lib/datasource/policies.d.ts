import * as ros from '@alicloud/ros-cdk-core';
import { RosPolicies } from './kms.generated';
export { RosPolicies as PoliciesProperty };
/**
 * Properties for defining a `Policies`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-policies
 */
export interface PoliciesProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KMS::Policies`, which is used to query permission policies.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPolicies`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-policies
 */
export declare class Policies extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PoliciesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Policies: The list of policies.
     */
    readonly attrPolicies: ros.IResolvable;
    /**
     * Attribute PolicyNames: The list of policy names.
     */
    readonly attrPolicyNames: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: PoliciesProps, enableResourcePropertyConstraint?: boolean);
}
