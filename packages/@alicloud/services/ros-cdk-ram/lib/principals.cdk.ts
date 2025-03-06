import { ManagedPolicy } from './managedpolicy';
import { RosManagedPolicy } from './ram.generated';
import * as ros from "@alicloud/ros-cdk-core";

/**
 * Any object that has an associated principal that a permission can be granted to
 */
export interface IGrantable {
    /**
     * The principal to grant permissions to
     */
    readonly grantPrincipal: IPrincipal;
}

/**
 * Represents a logical RAM principal.
 *
 * An IPrincipal describes a logical entity that can perform ACS API calls
 * against sets of resources, optionally under certain conditions.
 *
 * Examples of principals are RAM objects that you create, such
 * as Users, Roles or Groups.
 */
export interface IPrincipal extends IGrantable {
    /**
     * The principal type, such as 'Group', 'Role', 'User'.
     */
    readonly principalType: string;

    /**
     * The principal to grant permissions to.
     */
    readonly principalName: string | ros.IResolvable;

    /**
     * Add to the policy of this principal.
     */
    addToPolicy(policyDocument: RosManagedPolicy.PolicyDocumentProperty): ManagedPolicy;
}
