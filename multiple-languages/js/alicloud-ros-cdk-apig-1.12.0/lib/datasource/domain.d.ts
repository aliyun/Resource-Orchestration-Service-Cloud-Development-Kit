import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './apig.generated';
export { RosDomain as DomainProperty };
/**
 * Properties for defining a `Domain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-domain
 */
export interface DomainProps {
    /**
     * Property domainId: The ID of the domain.
     */
    readonly domainId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Domain`.
 */
export interface IDomain extends ros.IResource {
    readonly props: DomainProps;
    /**
     * Attribute CertIdentifier: The certificate ID.
     */
    readonly attrCertIdentifier: ros.IResolvable | string;
    /**
     * Attribute DomainId: The ID of the domain.
     */
    readonly attrDomainId: ros.IResolvable | string;
    /**
     * Attribute DomainName: The domain name.
     */
    readonly attrDomainName: ros.IResolvable | string;
    /**
     * Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
     */
    readonly attrForceHttps: ros.IResolvable | string;
    /**
     * Attribute Http2Option: The HTTP/2 configuration.
     */
    readonly attrHttp2Option: ros.IResolvable | string;
    /**
     * Attribute Protocol: The supported protocol.
     */
    readonly attrProtocol: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute TlsCipherSuitesConfig: The TLS cipher suite configurations.
     */
    readonly attrTlsCipherSuitesConfig: ros.IResolvable | string;
    /**
     * Attribute TlsMax: The maximum version of the TLS protocol. The maximum version of the TLS protocol is 1.3.
     */
    readonly attrTlsMax: ros.IResolvable | string;
    /**
     * Attribute TlsMin: The minimum version of the TLS protocol. The minimum version of the TLS protocol is 1.0.
     */
    readonly attrTlsMin: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::APIG::Domain`Use DATASOURCE::APIG::Query domain names using domain type.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-domain
 */
export declare class Domain extends ros.Resource implements IDomain {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DomainProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CertIdentifier: The certificate ID.
     */
    readonly attrCertIdentifier: ros.IResolvable | string;
    /**
     * Attribute DomainId: The ID of the domain.
     */
    readonly attrDomainId: ros.IResolvable | string;
    /**
     * Attribute DomainName: The domain name.
     */
    readonly attrDomainName: ros.IResolvable | string;
    /**
     * Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
     */
    readonly attrForceHttps: ros.IResolvable | string;
    /**
     * Attribute Http2Option: The HTTP/2 configuration.
     */
    readonly attrHttp2Option: ros.IResolvable | string;
    /**
     * Attribute Protocol: The supported protocol.
     */
    readonly attrProtocol: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute TlsCipherSuitesConfig: The TLS cipher suite configurations.
     */
    readonly attrTlsCipherSuitesConfig: ros.IResolvable | string;
    /**
     * Attribute TlsMax: The maximum version of the TLS protocol. The maximum version of the TLS protocol is 1.3.
     */
    readonly attrTlsMax: ros.IResolvable | string;
    /**
     * Attribute TlsMin: The minimum version of the TLS protocol. The minimum version of the TLS protocol is 1.0.
     */
    readonly attrTlsMin: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint?: boolean);
}
