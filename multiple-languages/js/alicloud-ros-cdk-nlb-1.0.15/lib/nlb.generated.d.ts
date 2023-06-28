import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::NLB::Listener`
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
}
/**
 * A ROS template type:  `ALIYUN::NLB::Listener`
 */
export declare class RosListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLB::Listener";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::NLB::Listener`.
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
/**
 * Properties for defining a `ALIYUN::NLB::LoadBalancer`
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
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property trafficAffinityEnabled: Whether enable traffic affinity. Default: false
     */
    readonly trafficAffinityEnabled?: boolean | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::NLB::LoadBalancer`
 */
export declare class RosLoadBalancer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLB::LoadBalancer";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AddressIpVersion: The version of IP address that the NLB instance uses to provide services.
     */
    readonly attrAddressIpVersion: ros.IResolvable;
    /**
     * @Attribute AddressType: The type of IP address that the NLB instance uses to provide services.
     */
    readonly attrAddressType: ros.IResolvable;
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
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property trafficAffinityEnabled: Whether enable traffic affinity. Default: false
     */
    trafficAffinityEnabled: boolean | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::NLB::LoadBalancer`.
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
         * @Property payType: The billing method of the NLB instance.
         */
        readonly payType?: string | ros.IResolvable;
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
         * @Property allocationId:
         */
        readonly allocationId?: string | ros.IResolvable;
        /**
         * @Property privateIPv4Address:
         */
        readonly privateIPv4Address?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::NLB::ServerGroup`
 */
export interface RosServerGroupProps {
    /**
     * @Property healthCheckConfig: Health Check Config
     */
    readonly healthCheckConfig: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable;
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
     * @Property connectionDrainEnabled: Whether to enable graceful connection interruption
     */
    readonly connectionDrainEnabled?: boolean | ros.IResolvable;
    /**
     * @Property connectionDrainTimeout: Time of graceful connection interruption
     */
    readonly connectionDrainTimeout?: number | ros.IResolvable;
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
}
/**
 * A ROS template type:  `ALIYUN::NLB::ServerGroup`
 */
export declare class RosServerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLB::ServerGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ServerGroupId: ID of ServerGroup
     */
    readonly attrServerGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property healthCheckConfig: Health Check Config
     */
    healthCheckConfig: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable;
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
     * @Property connectionDrainEnabled: Whether to enable graceful connection interruption
     */
    connectionDrainEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property connectionDrainTimeout: Time of graceful connection interruption
     */
    connectionDrainTimeout: number | ros.IResolvable | undefined;
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
     * Create a new `ALIYUN::NLB::ServerGroup`.
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
        readonly httpCheckMethod: string | ros.IResolvable;
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
         * @Property serverType: Type of backend server
         */
        readonly serverType: string | ros.IResolvable;
        /**
         * @Property description: undefined
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property serverId: Id of server
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property serverIp: undefined
         */
        readonly serverIp?: string | ros.IResolvable;
        /**
         * @Property port: Port used by the backend server
         */
        readonly port: number | ros.IResolvable;
        /**
         * @Property weight: Weight of the backend server
         */
        readonly weight?: number | ros.IResolvable;
    }
}
