import * as ros from '@alicloud/ros-cdk-core';
import { RosTLSPolicies } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTLSPolicies as TLSPoliciesProperty };

/**
 * Properties for defining a `TLSPolicies`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicies
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::TLSPolicies`, which is used to query Transport Layer Security (TLS) policies.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTLSPolicies`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicies
 */
export class TLSPolicies extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TLSPoliciesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * Attribute TLSPolicies: The list of tls policies.
     */
    public readonly attrTlsPolicies: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TLSPoliciesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTLSPolicies = new RosTLSPolicies(this, id,  {
            tlsPolicyName: props.tlsPolicyName,
            instanceId: props.instanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTLSPolicies;
        this.attrInstanceIds = rosTLSPolicies.attrInstanceIds;
        this.attrTlsPolicies = rosTLSPolicies.attrTlsPolicies;
    }
}
