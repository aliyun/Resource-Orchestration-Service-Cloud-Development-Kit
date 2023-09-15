import * as ros from '@alicloud/ros-cdk-core';
import { RosPolicies } from './ram.generated';
export { RosPolicies as PoliciesProperty };
/**
 * Properties for defining a `DATASOURCE::RAM::Policies`
 */
export interface PoliciesProps {
    /**
     * Property groupName: The specific group to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * Property policyName: Filter the results by a specific policy name. Supports using * and ?  to fuzzy match.
     */
    readonly policyName?: string | ros.IResolvable;
    /**
     * Property policyType: Filter the results by a specific policy type.
     */
    readonly policyType?: string | ros.IResolvable;
    /**
     * Property roleName: The specific role to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
     */
    readonly roleName?: string | ros.IResolvable;
    /**
     * Property userName: The specific user to which policies attached. Only one of UserName, GroupName, and RoleName can be specified at most.
     */
    readonly userName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::RAM::Policies`
 */
export declare class Policies extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Policies: The list of policies.
     */
    readonly attrPolicies: ros.IResolvable;
    /**
     * Attribute PolicyNames: The list of policy names.
     */
    readonly attrPolicyNames: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::RAM::Policies`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: PoliciesProps, enableResourcePropertyConstraint?: boolean);
}
