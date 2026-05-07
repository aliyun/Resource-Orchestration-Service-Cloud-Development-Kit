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
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property tlsPolicyName: The name of the TLS policy. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly tlsPolicyName?: string | ros.IResolvable;
}

/**
 * Represents a `TLSPolicies`.
 */
export interface ITLSPolicies extends ros.IResource {
    readonly props: TLSPoliciesProps;

    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable | string;

    /**
     * Attribute TLSPolicies: The list of tls policies.
     */
    readonly attrTlsPolicies: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::TLSPolicies`, which is used to query Transport Layer Security (TLS) policies.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTLSPolicies`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicies
 */
export class TLSPolicies extends ros.Resource implements ITLSPolicies {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TLSPoliciesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable | string;

    /**
     * Attribute TLSPolicies: The list of tls policies.
     */
    public readonly attrTlsPolicies: ros.IResolvable | string;

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
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTLSPolicies;
        this.attrInstanceIds = rosTLSPolicies.attrInstanceIds;
        this.attrTlsPolicies = rosTLSPolicies.attrTlsPolicies;
    }
}
