import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityPolicy } from './alb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecurityPolicy as SecurityPolicyProperty };

/**
 * Properties for defining a `SecurityPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-securitypolicy
 */
export interface SecurityPolicyProps {

    /**
     * Property ciphers: The supported cipher suites, which are determined by the TLS protocol version.
     * The specified cipher suites must be supported by at least one TLS protocol version that you specify.
     * Note For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.
     */
    readonly ciphers: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property securityPolicyName: The name of the security policy.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly securityPolicyName: string | ros.IResolvable;

    /**
     * Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
     */
    readonly tlsVersions: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::SecurityPolicy`, which is used to create a custom security policy.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-securitypolicy
 */
export class SecurityPolicy extends ros.Resource {

    /**
     * Attribute SecurityPolicyId: The ID of the security policy.
     */
    public readonly attrSecurityPolicyId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityPolicyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSecurityPolicy = new RosSecurityPolicy(this, id,  {
            ciphers: props.ciphers,
            resourceGroupId: props.resourceGroupId,
            tlsVersions: props.tlsVersions,
            securityPolicyName: props.securityPolicyName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityPolicy;
        this.attrSecurityPolicyId = rosSecurityPolicy.attrSecurityPolicyId;
    }
}
