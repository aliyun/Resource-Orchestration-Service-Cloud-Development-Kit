import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::ALB::BackendServerAttachment`
 */
export interface RosBackendServerAttachmentProps {
    /**
     * @Property serverGroupId: The ID of the server group.
     */
    readonly serverGroupId: string | ros.IResolvable;
    /**
     * @Property servers: The backend servers that you want to add to the server group. You can specify up to
     * 40 servers in each call.
     */
    readonly servers: Array<RosBackendServerAttachment.ServersProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ALB::BackendServerAttachment`
 */
export declare class RosBackendServerAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ALB::BackendServerAttachment";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ServerGroupId: The ID of the server group.
     */
    readonly attrServerGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property serverGroupId: The ID of the server group.
     */
    serverGroupId: string | ros.IResolvable;
    /**
     * @Property servers: The backend servers that you want to add to the server group. You can specify up to
     * 40 servers in each call.
     */
    servers: Array<RosBackendServerAttachment.ServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Create a new `ALIYUN::ALB::BackendServerAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackendServerAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosBackendServerAttachment {
    /**
     * @stability external
     */
    interface ServersProperty {
        /**
         * @Property serverType: The type of the backend server. Valid values:
     * Ecs: an ECS instance
     * Eni: an ENI
     * Eci: an elastic container instance
     * Ip: an IP address
         */
        readonly serverType: string | ros.IResolvable;
        /**
         * @Property description: The description of the backend server. The description must be 2 to 256 characters
     * in length, and can contain only the characters specified by the following expression:
     * /^([^\x00-\xff]|[\w.,;/@-]){2,256}$/.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property serverId: If the server group consists of servers, you can set this parameter to the ID of a
     * resource, such as an Elastic Compute Service (ECS) instance, an elastic network interface
     * (ENI), or an elastic container instance.
     * If the server group consists of IP addresses, you can set this parameter to an IP
     * address.
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property serverIp: The IP address of the ENI in inclusive ENI mode.
         */
        readonly serverIp?: string | ros.IResolvable;
        /**
         * @Property port: The port that is used by the backend server. Valid values: 1 to 65535.
     * Note This parameter is required if the ServerType parameter is set to Ecs, Eni, Eci, or Ip.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property weight: The weight of the backend server. Valid values: 0 to 100. Default value: 100. A value of 0 indicates that no requests are forwarded to the backend server.
         */
        readonly weight?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::ALB::Listener`
 */
export interface RosListenerProps {
    /**
     * @Property defaultActions: The actions of the rule.
     */
    readonly defaultActions: Array<RosListener.DefaultActionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property listenerPort: The frontend port that is used by the ALB instance.
     * Valid values: 1 to 65535.
     */
    readonly listenerPort: number | ros.IResolvable;
    /**
     * @Property listenerProtocol: The listener protocol.
     * Valid values: HTTP, HTTPS, and QUIC.
     */
    readonly listenerProtocol: string | ros.IResolvable;
    /**
     * @Property loadBalancerId: The ID of the ALB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * @Property certificates: The content of the SSL certificate.
     */
    readonly certificates?: Array<RosListener.CertificatesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.
     * Valid values: true and false.
     * Default value: true.
     */
    readonly gzipEnabled?: boolean | ros.IResolvable;
    /**
     * @Property http2Enabled: Specifies whether to enable HTTP/2. Default value: on.
     * Valid values: true and false.
     * Default value: true.
     * Note Only HTTPS listeners support this parameter.
     */
    readonly http2Enabled?: boolean | ros.IResolvable;
    /**
     * @Property idleTimeout: The timeout period of idle connections.
     * Valid values: 1 to 60. Unit: seconds.
     * Default value: 15.
     * If no request is received within the specified timeout period, ALB closes the connection.
     * ALB recreates the connection when a new connection request is received.
     */
    readonly idleTimeout?: number | ros.IResolvable;
    /**
     * @Property listenerDescription: The description of the listener.
     * The description must be 2 to 256 characters in length.
     */
    readonly listenerDescription?: string | ros.IResolvable;
    /**
     * @Property quicConfig: Select a QUIC listener and associate it with the ALB instance.
     */
    readonly quicConfig?: RosListener.QuicConfigProperty | ros.IResolvable;
    /**
     * @Property requestTimeout: The timeout period of the request.
     * Valid values: 1 to 180. Unit: seconds.
     * Default value: 60.
     * If no response is received from the backend server during the request timeout period,
     * ALB sends an HTTP 504 error code to the client.
     */
    readonly requestTimeout?: number | ros.IResolvable;
    /**
     * @Property securityPolicyId: The ID of the security policy. System security policies and custom security policies
     * are supported.
     * Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
     * Note Only HTTPS listeners support this parameter.
     */
    readonly securityPolicyId?: string | ros.IResolvable;
    /**
     * @Property xForwardedForConfig: The configuration of the XForward field.
     */
    readonly xForwardedForConfig?: RosListener.XForwardedForConfigProperty | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ALB::Listener`
 */
export declare class RosListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ALB::Listener";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ListenerId: The ID of the listener.
     */
    readonly attrListenerId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property defaultActions: The actions of the rule.
     */
    defaultActions: Array<RosListener.DefaultActionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property listenerPort: The frontend port that is used by the ALB instance.
     * Valid values: 1 to 65535.
     */
    listenerPort: number | ros.IResolvable;
    /**
     * @Property listenerProtocol: The listener protocol.
     * Valid values: HTTP, HTTPS, and QUIC.
     */
    listenerProtocol: string | ros.IResolvable;
    /**
     * @Property loadBalancerId: The ID of the ALB instance.
     */
    loadBalancerId: string | ros.IResolvable;
    /**
     * @Property certificates: The content of the SSL certificate.
     */
    certificates: Array<RosListener.CertificatesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.
     * Valid values: true and false.
     * Default value: true.
     */
    gzipEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property http2Enabled: Specifies whether to enable HTTP/2. Default value: on.
     * Valid values: true and false.
     * Default value: true.
     * Note Only HTTPS listeners support this parameter.
     */
    http2Enabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property idleTimeout: The timeout period of idle connections.
     * Valid values: 1 to 60. Unit: seconds.
     * Default value: 15.
     * If no request is received within the specified timeout period, ALB closes the connection.
     * ALB recreates the connection when a new connection request is received.
     */
    idleTimeout: number | ros.IResolvable | undefined;
    /**
     * @Property listenerDescription: The description of the listener.
     * The description must be 2 to 256 characters in length.
     */
    listenerDescription: string | ros.IResolvable | undefined;
    /**
     * @Property quicConfig: Select a QUIC listener and associate it with the ALB instance.
     */
    quicConfig: RosListener.QuicConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property requestTimeout: The timeout period of the request.
     * Valid values: 1 to 180. Unit: seconds.
     * Default value: 60.
     * If no response is received from the backend server during the request timeout period,
     * ALB sends an HTTP 504 error code to the client.
     */
    requestTimeout: number | ros.IResolvable | undefined;
    /**
     * @Property securityPolicyId: The ID of the security policy. System security policies and custom security policies
     * are supported.
     * Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
     * Note Only HTTPS listeners support this parameter.
     */
    securityPolicyId: string | ros.IResolvable | undefined;
    /**
     * @Property xForwardedForConfig: The configuration of the XForward field.
     */
    xForwardedForConfig: RosListener.XForwardedForConfigProperty | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ALB::Listener`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosListenerProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosListener {
    /**
     * @stability external
     */
    interface CertificatesProperty {
        /**
         * @Property certificateId: The certificate ID. You must enter IDs of server certificate.
         */
        readonly certificateId?: string | ros.IResolvable;
    }
}
export declare namespace RosListener {
    /**
     * @stability external
     */
    interface DefaultActionsProperty {
        /**
         * @Property type: The action type. The value is set to ForwardGroup.
     * It indicates that requests are forwarded to multiple vServer groups.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property forwardGroupConfig: The configurations of the actions. This parameter is required if Type is set to FowardGroup.
         */
        readonly forwardGroupConfig: RosListener.ForwardGroupConfigProperty | ros.IResolvable;
    }
}
export declare namespace RosListener {
    /**
     * @stability external
     */
    interface ForwardGroupConfigProperty {
        /**
         * @Property serverGroupTuples: The destination server group to which requests are forwarded.
         */
        readonly serverGroupTuples: Array<RosListener.ServerGroupTuplesProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosListener {
    /**
     * @stability external
     */
    interface QuicConfigProperty {
        /**
         * @Property quicListenerId: The ID of the QUIC listener to be associated. Only HTTPS listeners support this parameter. If QuicUpgradeEnabled is set to true, this parameter is required.
     * Note The original listener and the QUIC listener must belong to the same ALB instance.
     * In addition, make sure that the QUIC listener has not been associated before.
         */
        readonly quicListenerId?: string | ros.IResolvable;
        /**
         * @Property quicUpgradeEnabled: Specifies whether to enable the QUIC update feature.
     * Valid values: true and false.
     * Default value: false.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly quicUpgradeEnabled?: boolean | ros.IResolvable;
    }
}
export declare namespace RosListener {
    /**
     * @stability external
     */
    interface ServerGroupTuplesProperty {
        /**
         * @Property serverGroupId: The ID of the destination server group to which requests are forwarded.
         */
        readonly serverGroupId: string | ros.IResolvable;
    }
}
export declare namespace RosListener {
    /**
     * @stability external
     */
    interface XForwardedForConfigProperty {
        /**
         * @Property xForwardedForClientCertFingerprintAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertFingerprintEnabled is set to true.
     * The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
     * underscores (_), and digits.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientCertFingerprintAlias?: string | ros.IResolvable;
        /**
         * @Property xForwardedForClientCertFingerprintEnabled: Specifies whether to use the X-Forwarded-Clientcert-fingerprint header field to obtain the fingerprint of the ALB client certificate.
     * Valid values: true and false.
     * Default value: false.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientCertFingerprintEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForClientCertIssuerDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertIssuerDNEnabled is set to On.
     * The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
     * underscores (_), and digits.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientCertIssuerDnAlias?: string | ros.IResolvable;
        /**
         * @Property xForwardedForClientCertClientVerifyAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertClientVerifyEnabled is set to true.
     * The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
     * underscores (_), and digits.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientCertClientVerifyAlias?: string | ros.IResolvable;
        /**
         * @Property xForwardedForSlbIdEnabled: Specifies whether to use the SLB-ID header field to obtain the ID of the ALB instance.
     * Valid values: true and false.
     * Default value: false.
     * Note HTTP, HTTPS, and QUIC listeners support this parameter.
         */
        readonly xForwardedForSlbIdEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForClientCertSubjectDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-subjectdn header field to obtain information about the owner of the ALB client certificate.
     * Valid values: true and false.
     * Default value: false.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientCertSubjectDnEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForClientCertSubjectDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertSubjectDNEnabled
     * is set to true.
     * The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
     * underscores (_), and digits.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientCertSubjectDnAlias?: string | ros.IResolvable;
        /**
         * @Property xForwardedForProtoEnabled: Specifies whether to use the X-Forwarded-Proto header field to obtain the listener protocol of the ALB instance.
     * Valid values: true and false.
     * Default value: false.
     * Note HTTP, HTTPS, and QUIC listeners support this parameter.
         */
        readonly xForwardedForProtoEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForClientSrcPortEnabled: Specifies whether to use the X-Forwarded-Client-Port header field to obtain the port of the ALB client.
     * Valid values: true and false.
     * Default value: false.
     * Note HTTP and HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientSrcPortEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForSlbPortEnabled: Specifies whether to use the X-Forwarded-Port header field to obtain the listener port of the ALB instance.
     * Valid values: true and false.
     * Default value: false.
     * Note HTTP, HTTPS, and QUIC listeners support this parameter.
         */
        readonly xForwardedForSlbPortEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForEnabled: Specifies whether to use the X-Forwarded-For header field to obtain the real IP address of the client.
     * Valid values: true and false.
     * Default value: true.
     * Note HTTP and HTTPS listeners support this parameter.
         */
        readonly xForwardedForEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForClientCertIssuerDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-issuerdn header field to obtain information about the authority that issues the ALB client
     * certificate.
     * Valid values: true and false.
     * Default value: false.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientCertIssuerDnEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForClientCertClientVerifyEnabled: Specifies whether to use the X-Forwarded-Clientcert-clientverify header field to obtain the verification result of the ALB client certificate.
     * Valid values: true and false.
     * Default value: false.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientCertClientVerifyEnabled?: boolean | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::ALB::LoadBalancer`
 */
export interface RosLoadBalancerProps {
    /**
     * @Property addressType: The type of IP address that the ALB instance uses to provide services. Valid values:
     * Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
     * Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
     */
    readonly addressType: string | ros.IResolvable;
    /**
     * @Property loadBalancerBillingConfig: The configuration of the billing method.
     */
    readonly loadBalancerBillingConfig: RosLoadBalancer.LoadBalancerBillingConfigProperty | ros.IResolvable;
    /**
     * @Property loadBalancerEdition: The edition of the ALB instance. Different editions have different limits and billing methods. Valid values:
     * Basic: Basic Edition
     * Standard: Standard Edition
     */
    readonly loadBalancerEdition: string | ros.IResolvable;
    /**
     * @Property loadBalancerName: The name of the ALB instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly loadBalancerName: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
     */
    readonly zoneMappings: Array<RosLoadBalancer.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property addressAllocatedMode: The mode in which IP addresses are assigned. Valid values:
     * Fixed: The ALB instance uses a static IP address.
     * Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
     */
    readonly addressAllocatedMode?: string | ros.IResolvable;
    /**
     * @Property bandwidthPackageId: Attach common bandwidth package to load balancer. It only takes effect when AddressType=Internet.
     */
    readonly bandwidthPackageId?: string | ros.IResolvable;
    /**
     * @Property deletionProtectionEnabled: Specifies whether to enable deletion protection. Default value: false.
     */
    readonly deletionProtectionEnabled?: boolean | ros.IResolvable;
    /**
     * @Property modificationProtectionConfig: The configuration of modification protection.
     */
    readonly modificationProtectionConfig?: RosLoadBalancer.ModificationProtectionConfigProperty | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosLoadBalancer.TagsProperty[];
}
/**
 * A ROS template type:  `ALIYUN::ALB::LoadBalancer`
 */
export declare class RosLoadBalancer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ALB::LoadBalancer";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AddressType: The type of IP address that the ALB instance uses to provide services.
     */
    readonly attrAddressType: ros.IResolvable;
    /**
     * @Attribute DNSName: The domain name of the ALB instance.
     */
    readonly attrDnsName: ros.IResolvable;
    /**
     * @Attribute LoadBalancerEdition: The edition of the ALB instance.
     */
    readonly attrLoadBalancerEdition: ros.IResolvable;
    /**
     * @Attribute LoadBalancerId: The ID of the ALB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
     */
    readonly attrZoneMappings: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property addressType: The type of IP address that the ALB instance uses to provide services. Valid values:
     * Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
     * Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
     */
    addressType: string | ros.IResolvable;
    /**
     * @Property loadBalancerBillingConfig: The configuration of the billing method.
     */
    loadBalancerBillingConfig: RosLoadBalancer.LoadBalancerBillingConfigProperty | ros.IResolvable;
    /**
     * @Property loadBalancerEdition: The edition of the ALB instance. Different editions have different limits and billing methods. Valid values:
     * Basic: Basic Edition
     * Standard: Standard Edition
     */
    loadBalancerEdition: string | ros.IResolvable;
    /**
     * @Property loadBalancerName: The name of the ALB instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    loadBalancerName: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
     */
    zoneMappings: Array<RosLoadBalancer.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property addressAllocatedMode: The mode in which IP addresses are assigned. Valid values:
     * Fixed: The ALB instance uses a static IP address.
     * Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
     */
    addressAllocatedMode: string | ros.IResolvable | undefined;
    /**
     * @Property bandwidthPackageId: Attach common bandwidth package to load balancer. It only takes effect when AddressType=Internet.
     */
    bandwidthPackageId: string | ros.IResolvable | undefined;
    /**
     * @Property deletionProtectionEnabled: Specifies whether to enable deletion protection. Default value: false.
     */
    deletionProtectionEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property modificationProtectionConfig: The configuration of modification protection.
     */
    modificationProtectionConfig: RosLoadBalancer.ModificationProtectionConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosLoadBalancer.TagsProperty[] | undefined;
    /**
     * Create a new `ALIYUN::ALB::LoadBalancer`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosLoadBalancer {
    /**
     * @stability external
     */
    interface LoadBalancerBillingConfigProperty {
        /**
         * @Property payType: The billing method of the ALB instance. Set the value to PostPay, which indicates the pay-as-you-go billing method.
         */
        readonly payType: string | ros.IResolvable;
    }
}
export declare namespace RosLoadBalancer {
    /**
     * @stability external
     */
    interface ModificationProtectionConfigProperty {
        /**
         * @Property status: Specifies whether to enable the configuration read-only mode for the ALB instance. Valid values:
     * NonProtection: disables the configuration read-only mode. In this case, you cannot set the Reason parameter. If the Reason parameter is set, the value is cleared.
     * ConsoleProtection: enables the configuration read-only mode. In this case, you can set the Reason parameter.
         */
        readonly status: string | ros.IResolvable;
        /**
         * @Property reason: The reason for modification protection. The reason must be 2 to 128 characters in
     * length, and can contain letters, digits, periods (.), underscores (_), and hyphens
     * (-). The reason must start with a letter.
     * This parameter is valid only if the ModificationProtectionStatus parameter is set to ConsoleProtection.
         */
        readonly reason?: string | ros.IResolvable;
    }
}
export declare namespace RosLoadBalancer {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosLoadBalancer {
    /**
     * @stability external
     */
    interface ZoneMappingsProperty {
        /**
         * @Property zoneId: The ID of the zone to which the ALB instance belongs.
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch in the zone. Each zone can contain only one vSwitch and one subnet.
         */
        readonly vSwitchId: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::ALB::Rule`
 */
export interface RosRuleProps {
    /**
     * @Property listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB)
     * instance.
     */
    readonly listenerId: string | ros.IResolvable;
    /**
     * @Property priority: The priority of the forwarding rule. Valid values: 1 to 10000. A lower value specifies a higher priority.
     * Note The priority of each forwarding rule within a listener must be unique.
     */
    readonly priority: number | ros.IResolvable;
    /**
     * @Property ruleActions: The actions of the forwarding rule.
     */
    readonly ruleActions: Array<RosRule.RuleActionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ruleConditions: The conditions of the forwarding rule.
     */
    readonly ruleConditions: Array<RosRule.RuleConditionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ruleName: The name of the forwarding rule.
     * The name must be 2 to 128 characters in length.
     * It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It
     * must start with a letter.
     */
    readonly ruleName: string | ros.IResolvable;
    /**
     * @Property direction: Rule direction. Valid values: Request or Response.
     */
    readonly direction?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ALB::Rule`
 */
export declare class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ALB::Rule";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute RuleId: The ID of the forwarding rules.
     */
    readonly attrRuleId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB)
     * instance.
     */
    listenerId: string | ros.IResolvable;
    /**
     * @Property priority: The priority of the forwarding rule. Valid values: 1 to 10000. A lower value specifies a higher priority.
     * Note The priority of each forwarding rule within a listener must be unique.
     */
    priority: number | ros.IResolvable;
    /**
     * @Property ruleActions: The actions of the forwarding rule.
     */
    ruleActions: Array<RosRule.RuleActionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ruleConditions: The conditions of the forwarding rule.
     */
    ruleConditions: Array<RosRule.RuleConditionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ruleName: The name of the forwarding rule.
     * The name must be 2 to 128 characters in length.
     * It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It
     * must start with a letter.
     */
    ruleName: string | ros.IResolvable;
    /**
     * @Property direction: Rule direction. Valid values: Request or Response.
     */
    direction: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ALB::Rule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface CookieConfigProperty {
        /**
         * @Property values: Cookie values
         */
        readonly values?: Array<RosRule.ValuesProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface FixedResponseConfigProperty {
        /**
         * @Property httpCode: The HTTP status code of the response. Valid values: HTTP_2xx, HTTP_4xx, and HTTP_5xx. x is a digit.
         */
        readonly httpCode?: string | ros.IResolvable;
        /**
         * @Property contentType: The format of the content.
     * Valid values: text/plain, text/css, text/html, application/javascript, and application/json.
         */
        readonly contentType?: string | ros.IResolvable;
        /**
         * @Property content: The content of the fixed response. The content cannot exceed 1 KB in size, and can
     * contain only ASCII characters.
         */
        readonly content?: string | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface ForwardGroupConfigProperty {
        /**
         * @Property serverGroupTuples: The list of server groups to which requests are forwarded.
         */
        readonly serverGroupTuples?: Array<RosRule.ServerGroupTuplesProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface HeaderConfigProperty {
        /**
         * @Property values: The values of the header. The header values within a forwarding rule must be unique.
     * The value must be 1 to 128 characters in length.
     * It can contain asterisks (*), question marks (?), and other printable characters from ASCII code 32 to 127 (ch >= 32 && ch < 127).
     * The value cannot start or end with a space character.
         */
        readonly values?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property key: The key of the header.
     * The key must be 1 to 40 characters in length
     * It can contain letters, digits, hyphens (-), and underscores (_).
     * Cookie or Host is not supported.
         */
        readonly key?: string | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface HostConfigProperty {
        /**
         * @Property values: The host name. A forwarding rule can contain only one host name. The host names must be unique.
     * The host name must be 3 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
     * The host name must contain at least one period (.). It cannot start or end with a period (.).
     * The rightmost field can contain only letters and wildcard characters. It cannot contain digits or hyphens (-).
     * The domain labels cannot start or end with hyphens (-). You can include an asterisk (*) and question mark (?) anywhere in a domain label.
         */
        readonly values?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface InsertHeaderConfigProperty {
        /**
         * @Property valueType: The type of the content. Valid values:
     * UserDefined: user-defined.
     * ReferenceHeader: references one of the request headers.
     * SystemDefined: system-defined.
         */
        readonly valueType?: string | ros.IResolvable;
        /**
         * @Property value: The content of the header to be inserted.
     * If ValueType is set to SystemDefined, you can set the value to:
     * ClientSrcPort: the port of the client.
     * ClientSrcIp: the IP address of the client.
     * Protocol: the request protocol (HTTP or HTTPS)
     * SLBId: the ID of the ALB instance.
     * SLBPort: the listening port of the ALB instance.
     * If ValueType is set to UserDefined, you can customize the content of the header. The content must be 1 to 128 characters in length, and can contain asterisks (*) and question marks (?).
     * It can also contain printable characters from ASCII code 32 to 127 (ch >= 32 && ch < 127). The header content cannot start or end with a space character.
     * If ValueType is set to ReferenceHeader, you can reference one of the request headers. The header content must be 1 to 128 characters
     * in length, and can contain lowercase letters, digits, underscores (_), and hyphens (-).
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of the response header.
     * The key must be 1 to 40 characters in length.
     * It can contain letters, digits, underscores (_), and hyphens (-).
     * The header names specified by InsertHeaderConfig must be unique.
     * Note You cannot set the name of the header to one of the following values (case-insensitive):
     * slb-id, slb-ip, x-forwarded-for, x-forwarded-proto, x-forwarded-eip, x-forwarded-port, x-forwarded-client-srcport, connection, upgrade, content-length, transfer-encoding, keep-alive, te, host, cookie, remoteip, and authority.
         */
        readonly key?: string | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface MethodConfigProperty {
        /**
         * @Property values: The request method.
         */
        readonly values?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface PathConfigProperty {
        /**
         * @Property values: The path of the URL.
         */
        readonly values?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface QueryStringConfigProperty {
        /**
         * @Property values: The list of query strings.
         */
        readonly values?: Array<RosRule.QueryStringConfigValuesProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface QueryStringConfigValuesProperty {
        /**
         * @Property value: The value of the cookie.
     * The key must be 1 to 128 characters in length.
     * It can contain lowercase letters, asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters, space characters, or the following special characters: # [ ] { } \ | < > &.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: They key of the query string.
     * The key must be 1 to 100 characters in length
     * It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
     * The key cannot contain space characters or the following special characters: ; # [ ] { } \ | < > &.
         */
        readonly key?: string | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface RedirectConfigProperty {
        /**
         * @Property path: The path of the URL to which requests are redirected. Valid values:
     * Default value: ${path}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
     * or more of the preceding variables in each request. You can also combine them with
     * the following characters.
     * To customize the path, make sure that the following requirements are met:
     * The path must be 1 to 128 characters in length.
     * It must start with a forward slash (/). The path can contain letters, digits, and
     * the following special characters: $ - _ .+ / & ~ @ :. It cannot contain the following special characters: " % # ; ! ( ) [ ]^ , ". It can also contain asterisks (*) and question marks (?) as wildcard characters.
     * The value is case-sensitive.
         */
        readonly path?: string | ros.IResolvable;
        /**
         * @Property httpCode: The redirect type. Valid values: 301, 302, 303, 307, and 308.
         */
        readonly httpCode?: number | ros.IResolvable;
        /**
         * @Property query: The query string of the URL to which requests are redirected.
     * Default value: ${query}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
     * or more of the preceding variables in each request. You can also combine them with
     * the following characters.
     * To customize the query string, make sure that the following requirements are met:
     * The value must be 1 to 128 characters in length.
     * It can contain printable characters. It cannot contain space characters or the following
     * special characters: # [ ] { } \ | < > &. It cannot contain uppercase letters.
         */
        readonly query?: string | ros.IResolvable;
        /**
         * @Property port: The port to which requests are redirected.
     * ${port} (default): If you set the value to ${port}, you cannot add other characters to the
     * value.
     * You can also enter a port number. Valid values: 1 to 63335.
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property host: The host name to which requests are redirected. Valid values:
     * ${host} (default): If you set the value to ${host}, you cannot add other characters to the
     * value.
     * To customize the host name, make sure that the following requirements are met:
     * The host name must be 3 to 128 characters in length, and can contain lowercase letters,
     * digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
     * The host name must contain at least one period (.). It cannot start or end with a
     * period (.).
     * The rightmost field can contain only letters and wildcard characters. It cannot contain
     * digits or hyphens (-).
     * The domain labels cannot start or end with hyphens (-). You can include an asterisk
     * (*) and question mark (?) anywhere in a domain label.
         */
        readonly host?: string | ros.IResolvable;
        /**
         * @Property protocol: The redirect protocol.
     * ${protocol} (default): If you set the value to ${protocol}, you cannot add other characters to
     * the value.
     * You can also set the value to HTTP or HTTPS.
     * Note HTTPS listeners do not support HTTPS to HTTP redirection.
         */
        readonly protocol?: string | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface ResponseHeaderConfigProperty {
        /**
         * @Property values: The values of the header.
         */
        readonly values?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property key: The key of the header.
     * The key must be 1 to 40 characters in length
     * It can contain letters, digits, hyphens (-), and underscores (_).
     * Cookie or Host is not supported.
         */
        readonly key?: string | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface RewriteConfigProperty {
        /**
         * @Property path: The path to jump. Valid values:
     * Default value: ${path}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
     * or more of the preceding variables in each request. You can also combine them with
     * the following characters.
     * To customize the path, make sure that the following requirements are met:
     * The path must be 1 to 128 characters in length.
     * It must start with a forward slash (/). The path can contain letters, digits, and
     * the following special characters: $ - _ .+ / & ~ @ :. It cannot contain the following special characters: " % # ; ! ( ) [ ]^ , ". It can also contain asterisks (*) and question marks (?) as wildcard characters.
     * The value is case-sensitive.
         */
        readonly path?: string | ros.IResolvable;
        /**
         * @Property query: Query string for internal jump.
     * Default value: ${query}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
     * or more of the preceding variables in each request. You can also combine them with
     * the following characters.
     * To customize the query string, make sure that the following requirements are met:
     * The value must be 1 to 128 characters in length.
     * It can contain printable characters. It cannot contain space characters or the following
     * special characters: # [ ] { } \ | < > &. It cannot contain uppercase letters.
         */
        readonly query?: string | ros.IResolvable;
        /**
         * @Property host: Destination host address of internal jump. Valid values:
     * ${host} (default): If you set the value to ${host}, you cannot add other characters to the
     * value.
     * To customize the host name, make sure that the following requirements are met:
     * The host name must be 3 to 128 characters in length, and can contain lowercase letters,
     * digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
     * The host name must contain at least one period (.). It cannot start or end with a
     * period (.).
     * The rightmost field can contain only letters and wildcard characters. It cannot contain
     * digits or hyphens (-).
     * The domain labels cannot start or end with hyphens (-). You can include an asterisk
     * (*) and question mark (?) anywhere in a domain label.
         */
        readonly host?: string | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface RuleActionsProperty {
        /**
         * @Property order: The priority of the action. Valid values: 1 to 50000. A lower value specifies a higher priority. The actions specified in a forwarding
     * rule are applied in descending order of priority. This parameter is required. The
     * priority of each action within a forwarding rule is unique.
         */
        readonly order: number | ros.IResolvable;
        /**
         * @Property fixedResponseConfig: The configuration of the fixed response.
         */
        readonly fixedResponseConfig?: RosRule.FixedResponseConfigProperty | ros.IResolvable;
        /**
         * @Property type: The action. Valid values:
     * ForwardGroup: forwards a request to multiple vServer groups.
     * Redirect: redirects a request.
     * FixedResponse: returns a fixed response.
     * Rewrite: rewrites a request.
     * InsertHeader: adds a header to a request.
     * The type of the action. You can specify the last action and the actions
     * that you want to perform before the last action:
     * FinalType: the last action that you want to perform in a forwarding rule. Each forwarding rule can contain only one FinalType action.
     * You can specify a ForwardGroup, Redirect, or FixedResponse action as the FinalType action.
     * ExtType: the action or the actions to be performed before the FinalType action. A forwarding rule can contain one or more ExtType actions.
     * To specify this parameter, you must also specify FinalType. You can specify multiple InsertHeader actions or one Rewrite action.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property redirectConfig: The configuration of the external redirect action.
         */
        readonly redirectConfig?: RosRule.RedirectConfigProperty | ros.IResolvable;
        /**
         * @Property forwardGroupConfig: The configuration of the server group.
         */
        readonly forwardGroupConfig?: RosRule.ForwardGroupConfigProperty | ros.IResolvable;
        /**
         * @Property insertHeaderConfig: The configuration of the header to be inserted.
         */
        readonly insertHeaderConfig?: RosRule.InsertHeaderConfigProperty | ros.IResolvable;
        /**
         * @Property rewriteConfig: The configuration of the internal redirect action.
         */
        readonly rewriteConfig?: RosRule.RewriteConfigProperty | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface RuleConditionsProperty {
        /**
         * @Property methodConfig: The configuration of the request method.
         */
        readonly methodConfig?: RosRule.MethodConfigProperty | ros.IResolvable;
        /**
         * @Property pathConfig: The configuration of the URL.
         */
        readonly pathConfig?: RosRule.PathConfigProperty | ros.IResolvable;
        /**
         * @Property type: The type of the forwarding rule. Valid values:
     * Host: Requests are forwarded based on hosts.
     * Path: Requests are forwarded based on paths.
     * Header: Requests are forwarded based on HTTP headers.
     * QueryString: Requests are forwarded based on query strings.
     * Method: Request are forwarded based on request methods.
     * Cookie: Request are forwarded based on cookies.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property responseHeaderConfig: The configuration of header.
         */
        readonly responseHeaderConfig?: RosRule.ResponseHeaderConfigProperty | ros.IResolvable;
        /**
         * @Property queryStringConfig: The configuration of the query string.
         */
        readonly queryStringConfig?: RosRule.QueryStringConfigProperty | ros.IResolvable;
        /**
         * @Property hostConfig: The configuration of the host.
         */
        readonly hostConfig?: RosRule.HostConfigProperty | ros.IResolvable;
        /**
         * @Property cookieConfig: The configuration of the cookie.
         */
        readonly cookieConfig?: RosRule.CookieConfigProperty | ros.IResolvable;
        /**
         * @Property headerConfig: The configuration of the header.
         */
        readonly headerConfig?: RosRule.HeaderConfigProperty | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface ServerGroupTuplesProperty {
        /**
         * @Property serverGroupId: The server group to which requests are forwarded.
         */
        readonly serverGroupId?: string | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface ValuesProperty {
        /**
         * @Property value: The value of the cookie.
     * The key must be 1 to 100 characters in length.
     * It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
     * It cannot contain space characters or the following special characters: ; # [ ] { } \ | < > &.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of the cookie.
     * The key must be 1 to 100 characters in length
     * It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
     * It cannot contain space characters or the following special characters: ; # [ ] { } \ | < > &.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::ALB::ServerGroup`
 */
export interface RosServerGroupProps {
    /**
     * @Property healthCheckConfig: The configuration of health checks.
     */
    readonly healthCheckConfig: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable;
    /**
     * @Property serverGroupName: The name of the server group. The name must be 2 to 128 characters in length, and
     * can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
     * must start with a letter.
     */
    readonly serverGroupName: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC). You can add only servers that are deployed
     * in the specified VPC to the server group.
     * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property protocol: The server protocol. Valid values:
     * HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
     * is the default value.
     * HTTPS: allows you to associate HTTPS listeners with backend servers.
     */
    readonly protocol?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property scheduler: The scheduling algorithm. Valid values:
     * Wrr: Backend servers that have higher weights receive more requests than those that have
     * lower weights. This is the default value.
     * Wlc: Requests are distributed based on the weight and load of each backend server. The
     * load refers to the number of connections to a backend server. If multiple backend
     * servers have the same weight, requests are routed to the backend server with the least
     * connections.
     * Sch: specifies consistent hashing that is based on source IP addresses.
     */
    readonly scheduler?: string | ros.IResolvable;
    /**
     * @Property serverGroupType: The type of the server group. Valid values:
     * Instance: a server group that consists of servers. You can add Elastic Compute Service (ECS)
     * instances, elastic network interfaces (ENIs), and elastic container instances to this
     * type of server group. This is the default value.
     * Ip: a server group that consists of IP addresses. You can add IP addresses to this type
     * of server group.
     */
    readonly serverGroupType?: string | ros.IResolvable;
    /**
     * @Property stickySessionConfig: The configuration of session persistence.
     * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
     */
    readonly stickySessionConfig?: RosServerGroup.StickySessionConfigProperty | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosServerGroup.TagsProperty[];
}
/**
 * A ROS template type:  `ALIYUN::ALB::ServerGroup`
 */
export declare class RosServerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ALB::ServerGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ServerGroupId: The ID of the server group.
     */
    readonly attrServerGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property healthCheckConfig: The configuration of health checks.
     */
    healthCheckConfig: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable;
    /**
     * @Property serverGroupName: The name of the server group. The name must be 2 to 128 characters in length, and
     * can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
     * must start with a letter.
     */
    serverGroupName: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC). You can add only servers that are deployed
     * in the specified VPC to the server group.
     * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property protocol: The server protocol. Valid values:
     * HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
     * is the default value.
     * HTTPS: allows you to associate HTTPS listeners with backend servers.
     */
    protocol: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property scheduler: The scheduling algorithm. Valid values:
     * Wrr: Backend servers that have higher weights receive more requests than those that have
     * lower weights. This is the default value.
     * Wlc: Requests are distributed based on the weight and load of each backend server. The
     * load refers to the number of connections to a backend server. If multiple backend
     * servers have the same weight, requests are routed to the backend server with the least
     * connections.
     * Sch: specifies consistent hashing that is based on source IP addresses.
     */
    scheduler: string | ros.IResolvable | undefined;
    /**
     * @Property serverGroupType: The type of the server group. Valid values:
     * Instance: a server group that consists of servers. You can add Elastic Compute Service (ECS)
     * instances, elastic network interfaces (ENIs), and elastic container instances to this
     * type of server group. This is the default value.
     * Ip: a server group that consists of IP addresses. You can add IP addresses to this type
     * of server group.
     */
    serverGroupType: string | ros.IResolvable | undefined;
    /**
     * @Property stickySessionConfig: The configuration of session persistence.
     * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
     */
    stickySessionConfig: RosServerGroup.StickySessionConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosServerGroup.TagsProperty[] | undefined;
    /**
     * Create a new `ALIYUN::ALB::ServerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServerGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosServerGroup {
    /**
     * @stability external
     */
    interface HealthCheckConfigProperty {
        /**
         * @Property healthCheckInterval: The time interval between two consecutive health checks. Unit: seconds.
     * Valid values: 1 to 50.
     * Default value: 2.
         */
        readonly healthCheckInterval?: number | ros.IResolvable;
        /**
         * @Property healthCheckConnectPort: The backend port that is used for health checks.
     * Valid values: 0 to 65535.
     * Default value: 0. This value indicates that the port on a backend server is used for health checks.
         */
        readonly healthCheckConnectPort?: number | ros.IResolvable;
        /**
         * @Property healthCheckCodes: The HTTP status code that indicates a successful health check. Multiple HTTP status
     * codes can be specified as a list.
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
     * Valid values: http_2xx, http_3xx, http_4xx, and http_5xx. Default value: http_2xx.
         */
        readonly healthCheckCodes?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property unhealthyThreshold: The number of health checks that a healthy backend server must consecutively fail
     * before it is declared unhealthy. In this case, the health status is changed from success to fail.
     * Valid values: 2 to 10.
     * Default value: 3.
         */
        readonly unhealthyThreshold?: number | ros.IResolvable;
        /**
         * @Property healthCheckMethod: The HTTP method that is used for health checks. Valid values: GET and HEAD. Default value: HEAD.
         */
        readonly healthCheckMethod?: string | ros.IResolvable;
        /**
         * @Property healthCheckPath: The URL that is used for health checks.
     * The URL must be 1 to 80 characters in length, and can contain letters, digits, and
     * the following special characters:
     * - / .% ?# & =.
     * It can also contain the following extended characters:
     * _ ; ~ ! ( )* [ ] @ $ ^ : ' , +.
     * The URL must start with a forward slash (/).
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         */
        readonly healthCheckPath?: string | ros.IResolvable;
        /**
         * @Property healthCheckHost: The domain name that is used for health checks. The domain name must meet the following
     * requirements:
     * The domain name must be 1 to 80 characters in length.
     * The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
     * The domain name must contain at least one period (.),and cannot start or end with
     * a period (.).
     * The rightmost field can contain only letters, and cannot contain digits or hyphens
     * (-).
     * Other fields cannot start or end with a hyphen (-).
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         */
        readonly healthCheckHost?: string | ros.IResolvable;
        /**
         * @Property healthyThreshold: The number of health checks that an unhealthy backend server must consecutively pass
     * before it is declared healthy. In this case, the health status is changed from fail to success.
     * Valid values: 2 to 10.
     * Default value: 3.
         */
        readonly healthyThreshold?: number | ros.IResolvable;
        /**
         * @Property healthCheckProtocol: The protocol that is used for health checks. Valid values: HTTP and HTTPS.
         */
        readonly healthCheckProtocol?: string | ros.IResolvable;
        /**
         * @Property healthCheckHttpVersion: The version of the HTTP protocol. Valid values: HTTP1.0 and HTTP1.1. Default value: HTTP1.1.
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         */
        readonly healthCheckHttpVersion?: string | ros.IResolvable;
        /**
         * @Property healthCheckEnabled: Specifies whether to enable the health check feature. Valid values:
     * true: enables the feature.
     * false: disables the feature.
         */
        readonly healthCheckEnabled: boolean | ros.IResolvable;
        /**
         * @Property healthCheckTimeout: The timeout period of a health check. If a backend server does not respond within
     * the specified timeout period, the backend server fails the health check. Unit: seconds.
     * Valid values: 1 to 300.
     * Default value: 5.
     * Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the period of time specified by the HealthCheckInterval parameter is used as the timeout period.
         */
        readonly healthCheckTimeout?: number | ros.IResolvable;
    }
}
export declare namespace RosServerGroup {
    /**
     * @stability external
     */
    interface StickySessionConfigProperty {
        /**
         * @Property cookie: The cookie to be configured on the backend server.
     * The cookie must be 1 to 200 characters in length, and can contain ASCII characters
     * and digits. It cannot contain commas (,), semicolons (;), or spaces. It cannot start
     * with a dollar sign ($).
     * Note This parameter is required if the StickySessionEnabled parameter is set to true and the StickySessionType parameter is set to Server.
         */
        readonly cookie?: string | ros.IResolvable;
        /**
         * @Property cookieTimeout: The timeout period of the cookie. Unit: seconds.
     * Valid values: 1 to 86400.
     * Default value: 1000.
     * Note This parameter is required if the StickySessionEnabled parameter is set to true and the StickySessionType parameter is set to Insert.
         */
        readonly cookieTimeout?: number | ros.IResolvable;
        /**
         * @Property stickySessionType: The method that is used to handle a cookie. Valid values:
     * Insert : inserts a cookie. This is the default value.
     * Application Load Balancer (ALB) inserts the server ID as a cookie into the first HTTP
     * or HTTPS response that is sent to a client. The next request from the client will
     * contain this cookie, and the listener will distribute this request to the recorded
     * backend server.
     * Server: rewrites a cookie.
     * When ALB detects a user-defined cookie, it uses the user-defined cookie to rewrite
     * the original cookie. The next request from the client will contain the user-defined
     * cookie, and the listener will distribute this request to the recorded backend server.
     * Note This parameter is required if the StickySessionEnabled parameter is set to true.
         */
        readonly stickySessionType?: string | ros.IResolvable;
        /**
         * @Property stickySessionEnabled: Specifies whether to enable session persistence. Valid values: true and false.
     * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
         */
        readonly stickySessionEnabled?: boolean | ros.IResolvable;
    }
}
export declare namespace RosServerGroup {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
