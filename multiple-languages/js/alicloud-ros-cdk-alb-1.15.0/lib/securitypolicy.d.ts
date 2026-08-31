import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityPolicy } from './alb.generated';
export { RosSecurityPolicy as SecurityPolicyProperty };
/**
 * Properties for defining a `SecurityPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-securitypolicy
 */
export interface SecurityPolicyProps {
    /**
     * Property ciphers: The supported cipher suites.
     */
    readonly ciphers: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property securityPolicyName: The name of the security policy.
     * The name must be 2 to 128 characters in length, and can contain letters, digits,
     * Chinese characters, periods (.), underscores (_), hyphens (-), and spaces.
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
 * Represents a `SecurityPolicy`.
 */
export interface ISecurityPolicy extends ros.IResource {
    readonly props: SecurityPolicyProps;
    /**
     * Attribute SecurityPolicyId: The ID of the security policy.
     */
    readonly attrSecurityPolicyId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::SecurityPolicy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-securitypolicy
 */
export declare class SecurityPolicy extends ros.Resource implements ISecurityPolicy {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SecurityPolicyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute SecurityPolicyId: The ID of the security policy.
     */
    readonly attrSecurityPolicyId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityPolicyProps, enableResourcePropertyConstraint?: boolean);
}
