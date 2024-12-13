import * as ros from '@alicloud/ros-cdk-core';
import { RosTLSPolicy } from './slb.generated';
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::TLSPolicy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTLSPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicy
 */
export declare class TLSPolicy extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TLSPolicyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Ciphers: The cipher suites supported by the TLS version.
     */
    readonly attrCiphers: ros.IResolvable;
    /**
     * Attribute CreateTime: The timestamp generated when the TLS policy is created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute InstanceId: The ID of the TLS policy.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute TLSPolicyName: The name of the TLS policy.
     */
    readonly attrTlsPolicyName: ros.IResolvable;
    /**
     * Attribute TlsVersions: The version of the TLS protocol.
     */
    readonly attrTlsVersions: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TLSPolicyProps, enableResourcePropertyConstraint?: boolean);
}
