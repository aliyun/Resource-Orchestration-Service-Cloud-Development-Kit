import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosBackendServerAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-backendserverattachment
 */
export interface RosBackendServerAttachmentProps {
    /**
     * @Property serverGroupId: The ID of the server group.
     */
    readonly serverGroupId: string | ros.IResolvable;
    /**
     * @Property servers: The backend servers that you want to add to the server group. You can specify up to
     * 200 servers in each call.
     */
    readonly servers: Array<RosBackendServerAttachment.ServersProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NLB::BackendServerAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BackendServerAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-backendserverattachment
 */
export declare class RosBackendServerAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLB::BackendServerAttachment";
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
     * 200 servers in each call.
     */
    servers: Array<RosBackendServerAttachment.ServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
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
         * @Property description:  The description of the servers. The description must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (\/), at signs (@), underscores (_), and hyphens (-).
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property serverId: The ID of the server.
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property serverIp: The IP address of the server. If the server group type is Ip, set the ServerId parameter to an IP address.
         */
        readonly serverIp?: string | ros.IResolvable;
        /**
         * @Property port: The port used by the backend server. Valid values: 0 to 65535.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property weight: The weight of the backend server. Valid values: 0 to 100. Default value: 100. If the weight of a backend server is set to 0, no requests are forwarded to the backend server.
         */
        readonly weight?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosListener`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-listener
 */
export interface RosListenerProps {
    /**
     * @Property listenerProtocol: undefined
     */
    readonly listenerProtocol: string | ros.IResolvable;
    /**
     * @Property loadBalancerId: ID of the LoadBalancer
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * @Property serverGroupId: ID of the ServerGroup
     */
    readonly serverGroupId: string | ros.IResolvable;
    /**
     * @Property alpnEnabled: undefined
     */
    readonly alpnEnabled?: boolean | ros.IResolvable;
    /**
     * @Property alpnPolicy: Proxy of alpn
     */
    readonly alpnPolicy?: string | ros.IResolvable;
    /**
     * @Property caCertificateIds: List of the ca certificate ids
     */
    readonly caCertificateIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property caEnabled: Whether to open CA
     */
    readonly caEnabled?: boolean | ros.IResolvable;
    /**
     * @Property certificateIds: List of the certificate ids
     */
    readonly certificateIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property cps: New connection rate limit of Instance
     */
    readonly cps?: number | ros.IResolvable;
    /**
     * @Property enable: Whether to start listener or not. Default True.
     */
    readonly enable?: boolean | ros.IResolvable;
    /**
     * @Property endPort: EndPort of the portRange
     */
    readonly endPort?: number | ros.IResolvable;
    /**
     * @Property idleTimeout: Specifies the connection idle timeout
     */
    readonly idleTimeout?: number | ros.IResolvable;
    /**
     * @Property listenerDescription: Description of the listener, [2, 256] characters.
     */
    readonly listenerDescription?: string | ros.IResolvable;
    /**
     * @Property listenerPort: Port of the listener,[0, 65535] the portRange setting need 0
     */
    readonly listenerPort?: number | ros.IResolvable;
    /**
     * @Property mss: Max length of the TCP packet
     */
    readonly mss?: number | ros.IResolvable;
    /**
     * @Property proxyProtocolEnabled: Whether to enable ppv2 function
     */
    readonly proxyProtocolEnabled?: boolean | ros.IResolvable;
    /**
     * @Property proxyProtocolV2Config: ProxyProtocolV2Config of the listener
     */
    readonly proxyProtocolV2Config?: RosListener.ProxyProtocolV2ConfigProperty | ros.IResolvable;
    /**
     * @Property secSensorEnabled: Whether to enable the second-level monitoring function
     */
    readonly secSensorEnabled?: boolean | ros.IResolvable;
    /**
     * @Property securityPolicyId: Only valid for TcpSSL protocol monitoring
     */
    readonly securityPolicyId?: string | ros.IResolvable;
    /**
     * @Property startPort: StartPort of the portRange
     */
    readonly startPort?: number | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosListener.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NLB::Listener`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Listener` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-listener
 */
export declare class RosListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLB::Listener";
    /**
     * @Attribute ListenerId: Id of created Listener
     */
    readonly attrListenerId: ros.IResolvable;
    /**
     * @Attribute ListenerPort: ListenerPort of created Listener
     */
    readonly attrListenerPort: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property listenerProtocol: undefined
     */
    listenerProtocol: string | ros.IResolvable;
    /**
     * @Property loadBalancerId: ID of the LoadBalancer
     */
    loadBalancerId: string | ros.IResolvable;
    /**
     * @Property serverGroupId: ID of the ServerGroup
     */
    serverGroupId: string | ros.IResolvable;
    /**
     * @Property alpnEnabled: undefined
     */
    alpnEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property alpnPolicy: Proxy of alpn
     */
    alpnPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property caCertificateIds: List of the ca certificate ids
     */
    caCertificateIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property caEnabled: Whether to open CA
     */
    caEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property certificateIds: List of the certificate ids
     */
    certificateIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property cps: New connection rate limit of Instance
     */
    cps: number | ros.IResolvable | undefined;
    /**
     * @Property enable: Whether to start listener or not. Default True.
     */
    enable: boolean | ros.IResolvable | undefined;
    /**
     * @Property endPort: EndPort of the portRange
     */
    endPort: number | ros.IResolvable | undefined;
    /**
     * @Property idleTimeout: Specifies the connection idle timeout
     */
    idleTimeout: number | ros.IResolvable | undefined;
    /**
     * @Property listenerDescription: Description of the listener, [2, 256] characters.
     */
    listenerDescription: string | ros.IResolvable | undefined;
    /**
     * @Property listenerPort: Port of the listener,[0, 65535] the portRange setting need 0
     */
    listenerPort: number | ros.IResolvable | undefined;
    /**
     * @Property mss: Max length of the TCP packet
     */
    mss: number | ros.IResolvable | undefined;
    /**
     * @Property proxyProtocolEnabled: Whether to enable ppv2 function
     */
    proxyProtocolEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property proxyProtocolV2Config: ProxyProtocolV2Config of the listener
     */
    proxyProtocolV2Config: RosListener.ProxyProtocolV2ConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property secSensorEnabled: Whether to enable the second-level monitoring function
     */
    secSensorEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property securityPolicyId: Only valid for TcpSSL protocol monitoring
     */
    securityPolicyId: string | ros.IResolvable | undefined;
    /**
     * @Property startPort: StartPort of the portRange
     */
    startPort: number | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosListener.TagsProperty[] | undefined;
    /**
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
    interface ProxyProtocolV2ConfigProperty {
        /**
         * @Property ppv2VpcIdEnabled: Whether to enable Proxy Protocol to carry VpcId to the back-end server. Default False.
         */
        readonly ppv2VpcIdEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ppv2PrivateLinkEpsIdEnabled: Whether to enable Proxy Protocol to carry PrivateLinkEpsId to the back-end server. Default: False.
         */
        readonly ppv2PrivateLinkEpsIdEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ppv2PrivateLinkEpIdEnabled: Whether to enable Proxy Protocol to carry Ppv2PrivateLinkEpId to the back-end server. Default False.
         */
        readonly ppv2PrivateLinkEpIdEnabled?: boolean | ros.IResolvable;
    }
}
export declare namespace RosListener {
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
/**
 * Properties for defining a `RosLoadBalancer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-loadbalancer
 */
export interface RosLoadBalancerProps {
    /**
     * @Property addressType: The type of IP address that the NLB instance uses to provide services. Valid values:
     * Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
     * Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
     */
    readonly addressType: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
     */
    readonly zoneMappings: Array<RosLoadBalancer.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.
     */
    readonly addressIpVersion?: string | ros.IResolvable;
    /**
     * @Property bandwidthPackageId: Attach common bandwidth package to load balancer.
     */
    readonly bandwidthPackageId?: string | ros.IResolvable;
    /**
     * @Property crossZoneEnabled: Whether enable cross zone. Default: true
     */
    readonly crossZoneEnabled?: boolean | ros.IResolvable;
    /**
     * @Property deletionProtectionConfig: The configuration of the deletion protection feature.
     */
    readonly deletionProtectionConfig?: RosLoadBalancer.DeletionProtectionConfigProperty | ros.IResolvable;
    /**
     * @Property loadBalancerBillingConfig: The configuration of the billing method.
     */
    readonly loadBalancerBillingConfig?: RosLoadBalancer.LoadBalancerBillingConfigProperty | ros.IResolvable;
    /**
     * @Property loadBalancerName: The name of the NLB instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly loadBalancerName?: string | ros.IResolvable;
    /**
     * @Property loadBalancerType: The type of the NLB instance.
     */
    readonly loadBalancerType?: string | ros.IResolvable;
    /**
     * @Property modificationProtectionConfig: The configuration of the configuration read-only mode.
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
    /**
     * @Property trafficAffinityEnabled: Whether enable traffic affinity. Default: false
     */
    readonly trafficAffinityEnabled?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NLB::LoadBalancer`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoadBalancer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-loadbalancer
 */
export declare class RosLoadBalancer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLB::LoadBalancer";
    /**
     * @Attribute AddressIpVersion: The version of IP address that the NLB instance uses to provide services.
     */
    readonly attrAddressIpVersion: ros.IResolvable;
    /**
     * @Attribute AddressType: The type of IP address that the NLB instance uses to provide services.
     */
    readonly attrAddressType: ros.IResolvable;
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute DNSName: The domain name of the NLB instance.
     */
    readonly attrDnsName: ros.IResolvable;
    /**
     * @Attribute LoadBalancerId: The ID of the NLB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    /**
     * @Attribute LoadBalancerType: The type of the NLB instance.
     */
    readonly attrLoadBalancerType: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
     */
    readonly attrZoneMappings: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property addressType: The type of IP address that the NLB instance uses to provide services. Valid values:
     * Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
     * Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
     */
    addressType: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
     */
    zoneMappings: Array<RosLoadBalancer.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.
     */
    addressIpVersion: string | ros.IResolvable | undefined;
    /**
     * @Property bandwidthPackageId: Attach common bandwidth package to load balancer.
     */
    bandwidthPackageId: string | ros.IResolvable | undefined;
    /**
     * @Property crossZoneEnabled: Whether enable cross zone. Default: true
     */
    crossZoneEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property deletionProtectionConfig: The configuration of the deletion protection feature.
     */
    deletionProtectionConfig: RosLoadBalancer.DeletionProtectionConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerBillingConfig: The configuration of the billing method.
     */
    loadBalancerBillingConfig: RosLoadBalancer.LoadBalancerBillingConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerName: The name of the NLB instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    loadBalancerName: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerType: The type of the NLB instance.
     */
    loadBalancerType: string | ros.IResolvable | undefined;
    /**
     * @Property modificationProtectionConfig: The configuration of the configuration read-only mode.
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
     * @Property trafficAffinityEnabled: Whether enable traffic affinity. Default: false
     */
    trafficAffinityEnabled: boolean | ros.IResolvable | undefined;
    /**
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
    interface DeletionProtectionConfigProperty {
        /**
         * @Property enabled: Specifies whether to enable deletion protection. Valid values:
     * true: yes
     * false (default): no
         */
        readonly enabled: string | ros.IResolvable;
        /**
         * @Property reason: The reason why the deletion protection feature is enabled or disabled. The value must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The value must start with a letter.
         */
        readonly reason?: string | ros.IResolvable;
    }
}
export declare namespace RosLoadBalancer {
    /**
     * @stability external
     */
    interface LoadBalancerAddressesProperty {
        /**
         * @Property allocationId: The ID of the elastic IP address (EIP) that is associated with the Internet-facing NLB instance.
         */
        readonly allocationId: string | ros.IResolvable;
        /**
         * @Property privateIPv4Address: The private IP address.
         */
        readonly privateIPv4Address?: string | ros.IResolvable;
    }
}
export declare namespace RosLoadBalancer {
    /**
     * @stability external
     */
    interface LoadBalancerBillingConfigProperty {
        /**
         * @Property payType: The billing method of the NLB instance.
         */
        readonly payType?: string | ros.IResolvable;
    }
}
export declare namespace RosLoadBalancer {
    /**
     * @stability external
     */
    interface ModificationProtectionConfigProperty {
        /**
         * @Property status: Specifies whether to enable the configuration read-only mode. Valid values:
     * NonProtection: does not enable the configuration read-only mode. You cannot set the Reason parameter. If the Reason parameter is set, the value is cleared.
     * ConsoleProtection: enables the configuration read-only mode. You can set the Reason parameter.
         */
        readonly status: string | ros.IResolvable;
        /**
         * @Property reason: The reason why the configuration read-only mode is enabled. The value must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The value must start with a letter.
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
         * @Property zoneId: The ID of the zone to which the NLB instance belongs.
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch in the zone. Each zone can contain only one vSwitch and one subnet.
         */
        readonly vSwitchId: string | ros.IResolvable;
        /**
         * @Property allocationId: The ID of the elastic IP address (EIP) that is associated with the Internet-facing NLB instance.
         */
        readonly allocationId?: string | ros.IResolvable;
        /**
         * @Property eipType: The type of the EIP. Valid values:
     * - **Common**
     * - **Anycast**
     * **Note**: Only NLB instances in Hong Kong, China, support binding Anycast EIP.
         */
        readonly eipType?: string | ros.IResolvable;
        /**
         * @Property loadBalancerAddresses: Load balancer addresses. This property has higher priority than AllocationId and EipType in ZoneMappings.
         */
        readonly loadBalancerAddresses?: Array<RosLoadBalancer.LoadBalancerAddressesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property privateIPv4Address: The private IP address.
         */
        readonly privateIPv4Address?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosSecurityGroupAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitygroupattachment
 */
export interface RosSecurityGroupAttachmentProps {
    /**
     * @Property loadBalancerId: The ID of the network-based server load balancer instance to be bound to the security group.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * @Property securityGroupIds: List of security group id.
     */
    readonly securityGroupIds: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NLB::SecurityGroupAttachment`, which is used to bind a security group to a Network Load Balancer (NLB) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecurityGroupAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitygroupattachment
 */
export declare class RosSecurityGroupAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLB::SecurityGroupAttachment";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property loadBalancerId: The ID of the network-based server load balancer instance to be bound to the security group.
     */
    loadBalancerId: string | ros.IResolvable;
    /**
     * @Property securityGroupIds: List of security group id.
     */
    securityGroupIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosSecurityPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitypolicy
 */
export interface RosSecurityPolicyProps {
    /**
     * @Property ciphers: TThe supported cipher suites, which are determined by the TLS protocol version. You can specify at most 32 cipher suites.
     */
    readonly ciphers: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3.
     */
    readonly tlsVersions: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property securityPolicyName: The name of the security policy.
     * The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    readonly securityPolicyName?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosSecurityPolicy.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NLB::SecurityPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecurityPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitypolicy
 */
export declare class RosSecurityPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLB::SecurityPolicy";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute SecurityPolicyId: The ID of the security policy.
     */
    readonly attrSecurityPolicyId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ciphers: TThe supported cipher suites, which are determined by the TLS protocol version. You can specify at most 32 cipher suites.
     */
    ciphers: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3.
     */
    tlsVersions: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityPolicyName: The name of the security policy.
     * The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    securityPolicyName: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosSecurityPolicy.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityPolicyProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSecurityPolicy {
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
/**
 * Properties for defining a `RosServerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-servergroup
 */
export interface RosServerGroupProps {
    /**
     * @Property serverGroupName: Name of ServerGroup
     */
    readonly serverGroupName: string | ros.IResolvable;
    /**
     * @Property vpcId: ID of VPC
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property addressIpVersion: IP version of address
     */
    readonly addressIpVersion?: string | ros.IResolvable;
    /**
     * @Property anyPortEnabled: Specifies whether to enable all-port forwarding. Valid values:
     * true
     * false (default)
     */
    readonly anyPortEnabled?: boolean | ros.IResolvable;
    /**
     * @Property connectionDrainEnabled: Whether to enable graceful connection interruption
     */
    readonly connectionDrainEnabled?: boolean | ros.IResolvable;
    /**
     * @Property connectionDrainTimeout: Time of graceful connection interruption
     */
    readonly connectionDrainTimeout?: number | ros.IResolvable;
    /**
     * @Property healthCheckConfig: Health Check Config
     */
    readonly healthCheckConfig?: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable;
    /**
     * @Property persistenceEnabled: Whether to enable session persistence
     */
    readonly persistenceEnabled?: boolean | ros.IResolvable;
    /**
     * @Property persistenceTimeout: Time of session persistence
     */
    readonly persistenceTimeout?: number | ros.IResolvable;
    /**
     * @Property preserveClientIpEnabled: Whether to enable the client address retention function
     */
    readonly preserveClientIpEnabled?: boolean | ros.IResolvable;
    /**
     * @Property protocol: Protocol of ServerGroup
     */
    readonly protocol?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: undefined
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property scheduler: undefined
     */
    readonly scheduler?: string | ros.IResolvable;
    /**
     * @Property serverGroupType: Type of ServerGroup
     */
    readonly serverGroupType?: string | ros.IResolvable;
    /**
     * @Property servers: undefined
     */
    readonly servers?: Array<RosServerGroup.ServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosServerGroup.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NLB::ServerGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServerGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-servergroup
 */
export declare class RosServerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLB::ServerGroup";
    /**
     * @Attribute ServerGroupId: ID of ServerGroup
     */
    readonly attrServerGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property serverGroupName: Name of ServerGroup
     */
    serverGroupName: string | ros.IResolvable;
    /**
     * @Property vpcId: ID of VPC
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property addressIpVersion: IP version of address
     */
    addressIpVersion: string | ros.IResolvable | undefined;
    /**
     * @Property anyPortEnabled: Specifies whether to enable all-port forwarding. Valid values:
     * true
     * false (default)
     */
    anyPortEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property connectionDrainEnabled: Whether to enable graceful connection interruption
     */
    connectionDrainEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property connectionDrainTimeout: Time of graceful connection interruption
     */
    connectionDrainTimeout: number | ros.IResolvable | undefined;
    /**
     * @Property healthCheckConfig: Health Check Config
     */
    healthCheckConfig: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property persistenceEnabled: Whether to enable session persistence
     */
    persistenceEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property persistenceTimeout: Time of session persistence
     */
    persistenceTimeout: number | ros.IResolvable | undefined;
    /**
     * @Property preserveClientIpEnabled: Whether to enable the client address retention function
     */
    preserveClientIpEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property protocol: Protocol of ServerGroup
     */
    protocol: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: undefined
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property scheduler: undefined
     */
    scheduler: string | ros.IResolvable | undefined;
    /**
     * @Property serverGroupType: Type of ServerGroup
     */
    serverGroupType: string | ros.IResolvable | undefined;
    /**
     * @Property servers: undefined
     */
    servers: Array<RosServerGroup.ServersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosServerGroup.TagsProperty[] | undefined;
    /**
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
         * @Property healthCheckInterval: Health check interval
         */
        readonly healthCheckInterval?: number | ros.IResolvable;
        /**
         * @Property healthCheckUrl: Url for health check
         */
        readonly healthCheckUrl?: string | ros.IResolvable;
        /**
         * @Property healthCheckConnectPort: Port of health check
         */
        readonly healthCheckConnectPort?: number | ros.IResolvable;
        /**
         * @Property unhealthyThreshold: Determine the health check status of the backend server from success to fail.
         */
        readonly unhealthyThreshold?: number | ros.IResolvable;
        /**
         * @Property httpCheckMethod: When the health check protocol is http or https type, the selected health check detection method
         */
        readonly httpCheckMethod?: string | ros.IResolvable;
        /**
         * @Property healthyThreshold: Determine the health check status of the backend server from fail to success.
         */
        readonly healthyThreshold?: number | ros.IResolvable;
        /**
         * @Property healthCheckConnectTimeout: Maximum timeout for each health check response
         */
        readonly healthCheckConnectTimeout?: number | ros.IResolvable;
        /**
         * @Property healthCheckDomain: Domain name for health check
         */
        readonly healthCheckDomain?: string | ros.IResolvable;
        /**
         * @Property healthCheckEnabled: Whether to open health check
         */
        readonly healthCheckEnabled?: boolean | ros.IResolvable;
        /**
         * @Property healthCheckHttpCode: undefined
         */
        readonly healthCheckHttpCode?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property healthCheckType: Type of health check
         */
        readonly healthCheckType?: string | ros.IResolvable;
    }
}
export declare namespace RosServerGroup {
    /**
     * @stability external
     */
    interface ServersProperty {
        /**
         * @Property serverType: The type of the backend server. Valid values:
     * - **Ecs**: an ECS instance.
     * - **Eni**: an ENI.
     * - **Eci**: an elastic container instance.
     * - **Ip**: an IP address.
         */
        readonly serverType: string | ros.IResolvable;
        /**
         * @Property description: The description of the servers. The description must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (\/), at signs (@), underscores (_), and hyphens (-).
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property serverId: The ID of the server. You can specify at most 40 server IDs in each call.
     * If the server group type is **Instance**, set the ServerId parameter to the ID of an Elastic Compute Service (ECS) instance, an elastic network interface (ENI), or an elastic container instance. These backend servers are specified by **Ecs**, **Eni**, or **Eci**.
     * If the server group type is **Ip**, set the ServerId parameter to an IP address.
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property serverIp: The IP address of the server. If the server group type is **Ip**, ServerId is taken as the value of this parameter.
         */
        readonly serverIp?: string | ros.IResolvable;
        /**
         * @Property port: The port used by the backend server. Valid values: 0 to 65535. Default value is 0.
     * When the server group enables full port forwarding, there is no need to specify a port when adding a backend server (0 is entered by default). NLB will forward traffic to the back-end server according to the frontend request port.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property weight: The weight of the backend server. Valid values: 0 to 100. Default value: 100.
     * If the weight of a backend server is set to 0, no requests are forwarded to the backend server.
         */
        readonly weight?: number | ros.IResolvable;
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
