import * as ros from '@alicloud/ros-cdk-core';
import { RosTLSPolicies } from './slb.generated';
export { RosTLSPolicies as TLSPoliciesProperty };
/**
 * Properties for defining a `DATASOURCE::SLB::TLSPolicies`
 */
export interface TLSPoliciesProps {
    /**
     * Property instanceId: The ID of the TLS policy.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property tlsPolicyName: The name of the TLS policy. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly tlsPolicyName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::SLB::TLSPolicies`
 */
export declare class TLSPolicies extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Attribute TLSPolicies: The list of tls policies.
     */
    readonly attrTlsPolicies: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::SLB::TLSPolicies`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TLSPoliciesProps, enableResourcePropertyConstraint?: boolean);
}
