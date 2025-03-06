import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './apig.generated';
export { RosDomain as DomainProperty };
/**
 * Properties for defining a `Domain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-domain
 */
export interface DomainProps {
    /**
     * Property domainName: The name of the Domain.
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * Property protocol: The types of protocols supported by the domain are as follows:
     * * HTTP: Supports only the HTTP protocol.
     * * HTTPS: Supports only the HTTPS protocol.
     */
    readonly protocol: string | ros.IResolvable;
    /**
     * Property certIdentifier: The tls Certificate identification.
     */
    readonly certIdentifier?: string | ros.IResolvable;
    /**
     * Property forceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
     */
    readonly forceHttps?: boolean | ros.IResolvable;
    /**
     * Property http2Option: Whether to enable http2 settings.
     */
    readonly http2Option?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tlsCipherSuitesConfig: The configuration of the TLS encryption suite
     */
    readonly tlsCipherSuitesConfig?: RosDomain.TlsCipherSuitesConfigProperty | ros.IResolvable;
    /**
     * Property tlsMax: The maximum version of the TLS protocol. The maximum version of the TLS protocol is 1.3.
     */
    readonly tlsMax?: string | ros.IResolvable;
    /**
     * Property tlsMin: The minimum version of the TLS protocol. The minimum version of the TLS protocol is 1.0.
     */
    readonly tlsMin?: string | ros.IResolvable;
}
/**
 * Represents a `Domain`.
 */
export interface IDomain extends ros.IResource {
    readonly props: DomainProps;
    /**
     * Attribute CertIdentifier: The tls Certificate identification.
     */
    readonly attrCertIdentifier: ros.IResolvable | string;
    /**
     * Attribute DomainId: The ID of the Domain.
     */
    readonly attrDomainId: ros.IResolvable | string;
    /**
     * Attribute DomainName: The name of the Domain.
     */
    readonly attrDomainName: ros.IResolvable | string;
    /**
     * Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
     */
    readonly attrForceHttps: ros.IResolvable | string;
    /**
     * Attribute Http2Option: Whether to enable http2 settings.
     */
    readonly attrHttp2Option: ros.IResolvable | string;
    /**
     * Attribute Protocol: The types of protocols.
     */
    readonly attrProtocol: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute TlsCipherSuitesConfig: The configuration of the TLS encryption suite.
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::Domain`, which is used to create a domain name.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-domain
 */
export declare class Domain extends ros.Resource implements IDomain {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DomainProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CertIdentifier: The tls Certificate identification.
     */
    readonly attrCertIdentifier: ros.IResolvable | string;
    /**
     * Attribute DomainId: The ID of the Domain.
     */
    readonly attrDomainId: ros.IResolvable | string;
    /**
     * Attribute DomainName: The name of the Domain.
     */
    readonly attrDomainName: ros.IResolvable | string;
    /**
     * Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
     */
    readonly attrForceHttps: ros.IResolvable | string;
    /**
     * Attribute Http2Option: Whether to enable http2 settings.
     */
    readonly attrHttp2Option: ros.IResolvable | string;
    /**
     * Attribute Protocol: The types of protocols.
     */
    readonly attrProtocol: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute TlsCipherSuitesConfig: The configuration of the TLS encryption suite.
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
