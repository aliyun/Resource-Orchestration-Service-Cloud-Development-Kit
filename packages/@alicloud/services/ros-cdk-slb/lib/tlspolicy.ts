import * as ros from '@alicloud/ros-cdk-core';
import { RosTLSPolicy } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTLSPolicy as TLSPolicyProperty };

/**
 * Properties for defining a `TLSPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-tlspolicy
 */
export interface TLSPolicyProps {

    /**
     * Property ciphers: The supported cipher suites, which are determined by the TLS protocol version. You can specify at most 32 cipher suites.TLS 1.0 and TLS 1.1 support the following cipher suites:
     * ECDHE-ECDSA-AES128-SHA
     * ECDHE-ECDSA-AES256-SHA
     * ECDHE-RSA-AES128-SHA
     * ECDHE-RSA-AES256-SHA
     * AES128-SHA
     * AES256-SHA
     * DES-CBC3-SHA
     * TLS 1.2 supports the following cipher suites:
     * ECDHE-ECDSA-AES128-SHA
     * ECDHE-ECDSA-AES256-SHA
     * ECDHE-RSA-AES128-SHA
     * ECDHE-RSA-AES256-SHA
     * AES128-SHA
     * AES256-SHA
     * DES-CBC3-SHA
     * ECDHE-ECDSA-AES128-GCM-SHA256
     * ECDHE-ECDSA-AES256-GCM-SHA384
     * ECDHE-ECDSA-AES128-SHA256
     * ECDHE-ECDSA-AES256-SHA384
     * ECDHE-RSA-AES128-GCM-SHA256
     * ECDHE-RSA-AES256-GCM-SHA384
     * ECDHE-RSA-AES128-SHA256
     * ECDHE-RSA-AES256-SHA384
     * AES128-GCM-SHA256
     * AES256-GCM-SHA384
     * AES128-SHA256
     * AES256-SHA256
     * TLS 1.3 supports the following cipher suites:
     * TLS_AES_128_GCM_SHA256
     * TLS_AES_256_GCM_SHA384
     * TLS_CHACHA20_POLY1305_SHA256
     * TLS_AES_128_CCM_SHA256
     * TLS_AES_128_CCM_8_SHA256
     */
    readonly ciphers: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property tlsPolicyName: The name of the TLS policy. The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    readonly tlsPolicyName: string | ros.IResolvable;

    /**
     * Property tlsVersions: The version of the TLS protocol.
     */
    readonly tlsVersions: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::TLSPolicy`, which is used to create a Transport Layer Security (TLS) policy.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTLSPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-tlspolicy
 */
export class TLSPolicy extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TLSPolicyProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Ciphers: The supported cipher suites, which are determined by the TLS protocol version.
     */
    public readonly attrCiphers: ros.IResolvable;

    /**
     * Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute InstanceId: The ID of the policy.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute TLSPolicyName: The name of the TLS policy.
     */
    public readonly attrTlsPolicyName: ros.IResolvable;

    /**
     * Attribute TlsVersions: The version of the TLS protocol.
     */
    public readonly attrTlsVersions: ros.IResolvable;

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
            ciphers: props.ciphers,
            tlsPolicyName: props.tlsPolicyName,
            tlsVersions: props.tlsVersions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTLSPolicy;
        this.attrCiphers = rosTLSPolicy.attrCiphers;
        this.attrCreateTime = rosTLSPolicy.attrCreateTime;
        this.attrInstanceId = rosTLSPolicy.attrInstanceId;
        this.attrTlsPolicyName = rosTLSPolicy.attrTlsPolicyName;
        this.attrTlsVersions = rosTLSPolicy.attrTlsVersions;
    }
}
