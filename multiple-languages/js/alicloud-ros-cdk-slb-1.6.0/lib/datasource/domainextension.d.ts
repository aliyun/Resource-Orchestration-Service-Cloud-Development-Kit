import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainExtension } from './slb.generated';
export { RosDomainExtension as DomainExtensionProperty };
/**
 * Properties for defining a `DomainExtension`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextension
 */
export interface DomainExtensionProps {
    /**
     * Property domainExtensionId: The ID of the additional certificate.
     */
    readonly domainExtensionId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `DomainExtension`.
 */
export interface IDomainExtension extends ros.IResource {
    readonly props: DomainExtensionProps;
    /**
     * Attribute Domain: The domain name.
     */
    readonly attrDomain: ros.IResolvable | string;
    /**
     * Attribute DomainExtensionId: The ID of the additional certificate.
     */
    readonly attrDomainExtensionId: ros.IResolvable | string;
    /**
     * Attribute ListenerPort: The frontend port of the HTTPS listener that is configured for the SLB instance. Valid values: 1 to 65535.
     */
    readonly attrListenerPort: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The ID of the SLB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Attribute ServerCertificateId: The ID of the server certificate that is used by the domain name.
     */
    readonly attrServerCertificateId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::DomainExtension`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomainExtension`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextension
 */
export declare class DomainExtension extends ros.Resource implements IDomainExtension {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DomainExtensionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Domain: The domain name.
     */
    readonly attrDomain: ros.IResolvable | string;
    /**
     * Attribute DomainExtensionId: The ID of the additional certificate.
     */
    readonly attrDomainExtensionId: ros.IResolvable | string;
    /**
     * Attribute ListenerPort: The frontend port of the HTTPS listener that is configured for the SLB instance. Valid values: 1 to 65535.
     */
    readonly attrListenerPort: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The ID of the SLB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Attribute ServerCertificateId: The ID of the server certificate that is used by the domain name.
     */
    readonly attrServerCertificateId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainExtensionProps, enableResourcePropertyConstraint?: boolean);
}
