import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityPolicy } from './nlb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecurityPolicy as SecurityPolicyProperty };

/**
 * Properties for defining a `SecurityPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitypolicy
 */
export interface SecurityPolicyProps {

    /**
     * Property ciphers: TThe supported cipher suites, which are determined by the TLS protocol version. You can specify at most 32 cipher suites.
     */
    readonly ciphers: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3.
     */
    readonly tlsVersions: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property securityPolicyName: The name of the security policy.
     * The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    readonly securityPolicyName?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosSecurityPolicy.TagsProperty[];
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NLB::SecurityPolicy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitypolicy
 */
export class SecurityPolicy extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SecurityPolicyProps;
    protected enableResourcePropertyConstraint: boolean;

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
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSecurityPolicy = new RosSecurityPolicy(this, id,  {
            ciphers: props.ciphers,
            resourceGroupId: props.resourceGroupId,
            securityPolicyName: props.securityPolicyName,
            tlsVersions: props.tlsVersions,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityPolicy;
        this.attrSecurityPolicyId = rosSecurityPolicy.attrSecurityPolicyId;
    }
}
