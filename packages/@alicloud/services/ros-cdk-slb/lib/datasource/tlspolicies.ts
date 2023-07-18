import * as ros from '@alicloud/ros-cdk-core';
import { RosTLSPolicies } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class TLSPolicies extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * Attribute TLSPolicies: The list of tls policies.
     */
    public readonly attrTlsPolicies: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::SLB::TLSPolicies`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TLSPoliciesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTLSPolicies = new RosTLSPolicies(this, id,  {
            tlsPolicyName: props.tlsPolicyName,
            instanceId: props.instanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTLSPolicies;
        this.attrInstanceIds = rosTLSPolicies.attrInstanceIds;
        this.attrTlsPolicies = rosTLSPolicies.attrTlsPolicies;
    }
}
