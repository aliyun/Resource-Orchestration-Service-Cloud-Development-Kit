import * as ros from '@alicloud/ros-cdk-core';
import { RosTLSPolicy } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTLSPolicy as TLSPolicyProperty };

/**
 * Properties for defining a `TLSPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicy
 */
export interface TLSPolicyProps {

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
}

/**
 * Represents a `TLSPolicy`.
 */
export interface ITLSPolicy extends ros.IResource {
    readonly props: TLSPolicyProps;

    /**
     * Attribute Ciphers: The cipher suites supported by the TLS version.
     */
    readonly attrCiphers: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The timestamp generated when the TLS policy is created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the TLS policy.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute TLSPolicyName: The name of the TLS policy.
     */
    readonly attrTlsPolicyName: ros.IResolvable | string;

    /**
     * Attribute TlsVersions: The version of the TLS protocol.
     */
    readonly attrTlsVersions: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::TLSPolicy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTLSPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicy
 */
export class TLSPolicy extends ros.Resource implements ITLSPolicy {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TLSPolicyProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Ciphers: The cipher suites supported by the TLS version.
     */
    public readonly attrCiphers: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The timestamp generated when the TLS policy is created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the TLS policy.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute TLSPolicyName: The name of the TLS policy.
     */
    public readonly attrTlsPolicyName: ros.IResolvable | string;

    /**
     * Attribute TlsVersions: The version of the TLS protocol.
     */
    public readonly attrTlsVersions: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TLSPolicyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTLSPolicy = new RosTLSPolicy(this, id,  {
            instanceId: props.instanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTLSPolicy;
        this.attrCiphers = rosTLSPolicy.attrCiphers;
        this.attrCreateTime = rosTLSPolicy.attrCreateTime;
        this.attrInstanceId = rosTLSPolicy.attrInstanceId;
        this.attrTlsPolicyName = rosTLSPolicy.attrTlsPolicyName;
        this.attrTlsVersions = rosTLSPolicy.attrTlsVersions;
    }
}
