import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::SLB::AccessControl`
 */
export interface RosAccessControlProps {
    /**
     * @Property aclName: The name of the access control list.
     */
    readonly aclName: string;
    /**
     * @Property aclEntrys: A list of acl entrys. Each entry can be IP addresses or CIDR blocks. Max length: 50.
     */
    readonly aclEntrys?: Array<RosAccessControl.AclEntrysProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property addressIpVersion: IP version. Could be "ipv4" or "ipv6".
     */
    readonly addressIpVersion?: string;
}
/**
 * A ROS template type:  `ALIYUN::SLB::AccessControl`
 */
export declare class RosAccessControl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::AccessControl";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AclId: The ID of the access control list.
     */
    readonly attrAclId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aclName: The name of the access control list.
     */
    aclName: string;
    /**
     * @Property aclEntrys: A list of acl entrys. Each entry can be IP addresses or CIDR blocks. Max length: 50.
     */
    aclEntrys: Array<RosAccessControl.AclEntrysProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property addressIpVersion: IP version. Could be "ipv4" or "ipv6".
     */
    addressIpVersion: string | undefined;
    /**
     * Create a new `ALIYUN::SLB::AccessControl`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessControlProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAccessControl {
    /**
     * @stability external
     */
    interface AclEntrysProperty {
        /**
         * @Property entry: IP addresses or CIDR blocks. For example: "10.0.0.1" or "192.168.0.0/16"
         */
        readonly entry: string;
        /**
         * @Property comment: Description of the entry.
         */
        readonly comment?: string;
    }
}
/**
 * Properties for defining a `ALIYUN::SLB::BackendServerAttachment`
 */
export interface RosBackendServerAttachmentProps {
    /**
     * @Property loadBalancerId: The id of load balancer.
     */
    readonly loadBalancerId: string;
    /**
     * @Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
     */
    readonly backendServerList?: string[];
    /**
     * @Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    readonly backendServers?: Array<RosBackendServerAttachment.BackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
     */
    readonly backendServerWeightList?: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SLB::BackendServerAttachment`
 */
export declare class RosBackendServerAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::BackendServerAttachment";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute BackendServers: The collection of attached backend server.
     */
    readonly attrBackendServers: any;
    /**
     * @Attribute LoadBalancerId: The id of load balancer.
     */
    readonly attrLoadBalancerId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property loadBalancerId: The id of load balancer.
     */
    loadBalancerId: string;
    /**
     * @Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
     */
    backendServerList: string[] | undefined;
    /**
     * @Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    backendServers: Array<RosBackendServerAttachment.BackendServersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
     */
    backendServerWeightList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SLB::BackendServerAttachment`.
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
    interface BackendServersProperty {
        /**
         * @Property type: The backend server type. Valid values:ecs: ECS instance (default)eni: Elastic Network Interface (ENI)
         */
        readonly type?: string;
        /**
         * @Property serverId: Need one valid instance id. The instance status should running.
         */
        readonly serverId: string;
        /**
         * @Property description: A description of the backend server.
         */
        readonly description?: string;
        /**
         * @Property serverIp: The IP of the instance.
         */
        readonly serverIp?: string;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight: number;
    }
}
/**
 * Properties for defining a `ALIYUN::SLB::BackendServerToVServerGroupAddition`
 */
export interface RosBackendServerToVServerGroupAdditionProps {
    /**
     * @Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    readonly backendServers: Array<RosBackendServerToVServerGroupAddition.BackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property vServerGroupId: The ID of virtual server group.
     */
    readonly vServerGroupId: string;
}
/**
 * A ROS template type:  `ALIYUN::SLB::BackendServerToVServerGroupAddition`
 */
export declare class RosBackendServerToVServerGroupAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::BackendServerToVServerGroupAddition";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute VServerGroupId: The ID of virtual server group.
     */
    readonly attrVServerGroupId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    backendServers: Array<RosBackendServerToVServerGroupAddition.BackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property vServerGroupId: The ID of virtual server group.
     */
    vServerGroupId: string;
    /**
     * Create a new `ALIYUN::SLB::BackendServerToVServerGroupAddition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackendServerToVServerGroupAdditionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosBackendServerToVServerGroupAddition {
    /**
     * @stability external
     */
    interface BackendServersProperty {
        /**
         * @Property serverId: Need one valid ECS instance id.
         */
        readonly serverId: string;
        /**
         * @Property port: The port of backend server. From 1 to 65535.
         */
        readonly port: number;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight?: number;
    }
}
/**
 * Properties for defining a `ALIYUN::SLB::Certificate`
 */
export interface RosCertificateProps {
    /**
     * @Property certificate: The content of the certificate public key.
     */
    readonly certificate: string;
    /**
     * @Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
     */
    readonly aliCloudCertificateId?: string;
    /**
     * @Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.
     */
    readonly aliCloudCertificateName?: string;
    /**
     * @Property certificateName: The name of the certificate.
     */
    readonly certificateName?: string;
    /**
     * @Property certificateType: The type of the certificate.
     */
    readonly certificateType?: string;
    /**
     * @Property privateKey: The private key.
     */
    readonly privateKey?: string;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;
}
/**
 * A ROS template type:  `ALIYUN::SLB::Certificate`
 */
export declare class RosCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::Certificate";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CertificateId: The ID of the certificate.
     */
    readonly attrCertificateId: any;
    /**
     * @Attribute Fingerprint: The fingerprint of the certificate.
     */
    readonly attrFingerprint: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property certificate: The content of the certificate public key.
     */
    certificate: string;
    /**
     * @Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
     */
    aliCloudCertificateId: string | undefined;
    /**
     * @Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.
     */
    aliCloudCertificateName: string | undefined;
    /**
     * @Property certificateName: The name of the certificate.
     */
    certificateName: string | undefined;
    /**
     * @Property certificateType: The type of the certificate.
     */
    certificateType: string | undefined;
    /**
     * @Property privateKey: The private key.
     */
    privateKey: string | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | undefined;
    /**
     * Create a new `ALIYUN::SLB::Certificate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCertificateProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SLB::DomainExtension`
 */
export interface RosDomainExtensionProps {
    /**
     * @Property domain: The domain name.
     */
    readonly domain: string;
    /**
     * @Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    readonly listenerPort: number;
    /**
     * @Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    readonly loadBalancerId: string;
    /**
     * @Property serverCertificateId: The ID of the certificate corresponding to the domain name.
     */
    readonly serverCertificateId: string;
}
/**
 * A ROS template type:  `ALIYUN::SLB::DomainExtension`
 */
export declare class RosDomainExtension extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::DomainExtension";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DomainExtensionId: The ID of the created domain name extension.
     */
    readonly attrDomainExtensionId: any;
    /**
     * @Attribute ListenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
1-65535
     */
    readonly attrListenerPort: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domain: The domain name.
     */
    domain: string;
    /**
     * @Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    listenerPort: number;
    /**
     * @Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    loadBalancerId: string;
    /**
     * @Property serverCertificateId: The ID of the certificate corresponding to the domain name.
     */
    serverCertificateId: string;
    /**
     * Create a new `ALIYUN::SLB::DomainExtension`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainExtensionProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SLB::Listener`
 */
export interface RosListenerProps {
    /**
     * @Property backendServerPort: Backend server can listen on ports from 1 to 65535.
     */
    readonly backendServerPort: number;
    /**
     * @Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
     */
    readonly bandwidth: number;
    /**
     * @Property listenerPort: Port for front listener. Range from 1 to 65535.
     */
    readonly listenerPort: number;
    /**
     * @Property loadBalancerId: The id of load balancer to create listener.
     */
    readonly loadBalancerId: string;
    /**
     * @Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
     */
    readonly protocol: string;
    /**
     * @Property aclId: The ID of the access control list associated with the listener to be created.
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    readonly aclId?: string;
    /**
     * @Property aclStatus: Indicates whether to enable access control.
     * Valid values: on | off. Default value: off
     */
    readonly aclStatus?: string;
    /**
     * @Property aclType: The access control type:
     * * white: Indicates a whitelist. Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
     * Enabling a whitelist poses some risks to your services.
     * After a whitelist is enabled, only the IP addresses in the list can access the listener.
     * If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
     * * black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
     * If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.
     *
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    readonly aclType?: string;
    /**
     * @Property caCertificateId: CA server certificate id, for https listener only.
     */
    readonly caCertificateId?: string;
    /**
     * @Property healthCheck: The properties of health checking setting.
     */
    readonly healthCheck?: RosListener.HealthCheckProperty | ros.IResolvable;
    /**
     * @Property httpConfig: Config for http protocol.
     */
    readonly httpConfig?: RosListener.HttpConfigProperty | ros.IResolvable;
    /**
     * @Property idleTimeout: Specify the idle connection timeout in seconds. Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
     */
    readonly idleTimeout?: number;
    /**
     * @Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
     */
    readonly masterSlaveServerGroupId?: string;
    /**
     * @Property persistence: The properties of persistence.
     */
    readonly persistence?: RosListener.PersistenceProperty | ros.IResolvable;
    /**
     * @Property requestTimeout: Specify the request timeout in seconds. Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
     */
    readonly requestTimeout?: number;
    /**
     * @Property scheduler: The scheduler algorithm. Support 'wrr' or 'wlc' only, default is 'wrr'
     */
    readonly scheduler?: string;
    /**
     * @Property serverCertificateId: Server certificate id, for https listener only, this properties is required.
     */
    readonly serverCertificateId?: string;
    /**
     * @Property vServerGroupId: The id of the VServerGroup which use in listener.
     */
    readonly vServerGroupId?: string;
}
/**
 * A ROS template type:  `ALIYUN::SLB::Listener`
 */
export declare class RosListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::Listener";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ListenerPortsAndProtocol: The collection of listener.
     */
    readonly attrListenerPortsAndProtocol: any;
    /**
     * @Attribute LoadBalancerId: The id of load balancer
     */
    readonly attrLoadBalancerId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property backendServerPort: Backend server can listen on ports from 1 to 65535.
     */
    backendServerPort: number;
    /**
     * @Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
     */
    bandwidth: number;
    /**
     * @Property listenerPort: Port for front listener. Range from 1 to 65535.
     */
    listenerPort: number;
    /**
     * @Property loadBalancerId: The id of load balancer to create listener.
     */
    loadBalancerId: string;
    /**
     * @Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
     */
    protocol: string;
    /**
     * @Property aclId: The ID of the access control list associated with the listener to be created.
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    aclId: string | undefined;
    /**
     * @Property aclStatus: Indicates whether to enable access control.
     * Valid values: on | off. Default value: off
     */
    aclStatus: string | undefined;
    /**
     * @Property aclType: The access control type:
     * * white: Indicates a whitelist. Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
     * Enabling a whitelist poses some risks to your services.
     * After a whitelist is enabled, only the IP addresses in the list can access the listener.
     * If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
     * * black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
     * If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.
     *
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    aclType: string | undefined;
    /**
     * @Property caCertificateId: CA server certificate id, for https listener only.
     */
    caCertificateId: string | undefined;
    /**
     * @Property healthCheck: The properties of health checking setting.
     */
    healthCheck: RosListener.HealthCheckProperty | ros.IResolvable | undefined;
    /**
     * @Property httpConfig: Config for http protocol.
     */
    httpConfig: RosListener.HttpConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property idleTimeout: Specify the idle connection timeout in seconds. Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
     */
    idleTimeout: number | undefined;
    /**
     * @Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
     */
    masterSlaveServerGroupId: string | undefined;
    /**
     * @Property persistence: The properties of persistence.
     */
    persistence: RosListener.PersistenceProperty | ros.IResolvable | undefined;
    /**
     * @Property requestTimeout: Specify the request timeout in seconds. Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
     */
    requestTimeout: number | undefined;
    /**
     * @Property scheduler: The scheduler algorithm. Support 'wrr' or 'wlc' only, default is 'wrr'
     */
    scheduler: string | undefined;
    /**
     * @Property serverCertificateId: Server certificate id, for https listener only, this properties is required.
     */
    serverCertificateId: string | undefined;
    /**
     * @Property vServerGroupId: The id of the VServerGroup which use in listener.
     */
    vServerGroupId: string | undefined;
    /**
     * Create a new `ALIYUN::SLB::Listener`.
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
    interface HealthCheckProperty {
        /**
         * @Property httpCode: The expect status of health check result. Any answer other than referred status within the timeout period is considered unhealthy.
         */
        readonly httpCode?: string;
        /**
         * @Property unhealthyThreshold: The number of consecutive health checks failures required,before identified the backend server in Unhealthy status.
         */
        readonly unhealthyThreshold?: number;
        /**
         * @Property timeout: The amount of time, in seconds, during which no response means a failed health check.
         */
        readonly timeout?: number;
        /**
         * @Property healthyThreshold: The number of consecutive health checks successes required,before identified the backend server in Healthy status.
         */
        readonly healthyThreshold?: number;
        /**
         * @Property port: The port being checked. The range of valid ports is 0 through 65535.
         */
        readonly port?: number;
        /**
         * @Property domain: The domain of health check target.
         */
        readonly domain?: string;
        /**
         * @Property uri: The url of health check target.
         */
        readonly uri?: string;
        /**
         * @Property interval: The approximate interval, unit in seconds, between health checks of an backend server.
         */
        readonly interval?: number;
    }
}
export declare namespace RosListener {
    /**
     * @stability external
     */
    interface HttpConfigProperty {
        /**
         * @Property listenerForward: Whether to enable HTTP to HTTPS forwarding.
     * Valid values: on | off. Default value: off.
         */
        readonly listenerForward?: string;
        /**
         * @Property forwardPort: HTTP to HTTPS listening forwarding port.
     * Default value: 443.
         */
        readonly forwardPort?: number;
    }
}
export declare namespace RosListener {
    /**
     * @stability external
     */
    interface PersistenceProperty {
        /**
         * @Property xForwardedForSlbid: Optional. Indicates whether to use the SLB-ID header field to obtain the SLB instance ID. Valid values: on | off. Default value: off If you do not set this parameter, the default value is used.
         */
        readonly xForwardedForSlbid?: string;
        /**
         * @Property cookieTimeout: The timeout for cookie setting, in seconds. It only take effect while StickySession is setting to 'on' and StickySessionType is setting to 'insert'.
         */
        readonly cookieTimeout?: number;
        /**
         * @Property cookie: The type of session persistence.
         */
        readonly cookie?: string;
        /**
         * @Property stickySession: The switch of session persistence. Support 'on' and 'off'.
         */
        readonly stickySession?: string;
        /**
         * @Property persistenceTimeout: The timeout number of persistence, in seconds.
         */
        readonly persistenceTimeout?: number;
        /**
         * @Property xForwardedFor: Use 'X-Forwarded-For' to get real ip of accessor. On for open, off for close.
         */
        readonly xForwardedFor?: string;
        /**
         * @Property xForwardedForProto: Optional. Indicates whether to use the X-Forwarded-Proto header field to obtainthe listening protocol used by the SLB instance. Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
         */
        readonly xForwardedForProto?: string;
        /**
         * @Property stickySessionType: The type of session persistence. Depends on parameter StickySession, if it is set to off, this parameter will be ignored.
         */
        readonly stickySessionType?: string;
        /**
         * @Property xForwardedForSlbip: Optional. Indicates whether to use the SLB-IP header field to obtainthe real IP address of a client request.Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
         */
        readonly xForwardedForSlbip?: string;
    }
}
/**
 * Properties for defining a `ALIYUN::SLB::LoadBalancer`
 */
export interface RosLoadBalancerProps {
    /**
     * @Property addressType: Loader balancer address type. Support 'internet' and 'intranet' only, default is 'internet'.
     */
    readonly addressType?: string;
    /**
     * @Property autoPay: Optional. Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created.
     * Valid values: true | false (default value)
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Range is 1 to 1000, default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
     */
    readonly bandwidth?: number;
    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property duration: Optional. The subscription duration of a Subscription Internet instance.
     * Valid values:
     * If PricingCycle is month, the valid range is 1 to 9.
     * If PricingCycle is year, the value range is 1 to 3.
     */
    readonly duration?: number;
    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.
     */
    readonly internetChargeType?: string;
    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    readonly loadBalancerName?: string;
    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
     */
    readonly loadBalancerSpec?: string;
    /**
     * @Property masterZoneId: The master zone id to create load balancer instance.
     */
    readonly masterZoneId?: string;
    /**
     * @Property modificationProtectionReason: Set the reason for modifying the protection status. The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
     * Only valid when ModificationProtectionStatus is ConsoleProtection.
     */
    readonly modificationProtectionReason?: string;
    /**
     * @Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection
     * ConsoleProtection: Modify instance protection status by console
     * Default value is empty.
     */
    readonly modificationProtectionStatus?: string;
    /**
     * @Property payType: Optional. The billing method of the instance to be created.
     * Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
     */
    readonly payType?: string;
    /**
     * @Property pricingCycle: Optional. The duration of the Subscription-billed Internet instance to be created.
     * Valid values: month | year.
     */
    readonly pricingCycle?: string;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;
    /**
     * @Property slaveZoneId: The slave zone id to create load balancer instance.
     */
    readonly slaveZoneId?: string;
    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];
    /**
     * @Property vpcId: The VPC id to create load balancer instance. For VPC network only.
     */
    readonly vpcId?: string;
    /**
     * @Property vSwitchId: The VSwitch id to create load balancer instance. For VPC network only.
     */
    readonly vSwitchId?: string;
}
/**
 * A ROS template type:  `ALIYUN::SLB::LoadBalancer`
 */
export declare class RosLoadBalancer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::LoadBalancer";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AddressType: The address type of the load balancer. "intranet" or "internet".
     */
    readonly attrAddressType: any;
    /**
     * @Attribute IpAddress: The ip address of the load balancer.
     */
    readonly attrIpAddress: any;
    /**
     * @Attribute LoadBalancerId: The id of load balance created.
     */
    readonly attrLoadBalancerId: any;
    /**
     * @Attribute NetworkType: The network type of the load balancer. "vpc" or "classic" network.
     */
    readonly attrNetworkType: any;
    /**
     * @Attribute OrderId: The order ID.
     */
    readonly attrOrderId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property addressType: Loader balancer address type. Support 'internet' and 'intranet' only, default is 'internet'.
     */
    addressType: string | undefined;
    /**
     * @Property autoPay: Optional. Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created.
     * Valid values: true | false (default value)
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Range is 1 to 1000, default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
     */
    bandwidth: number | undefined;
    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property duration: Optional. The subscription duration of a Subscription Internet instance.
     * Valid values:
     * If PricingCycle is month, the valid range is 1 to 9.
     * If PricingCycle is year, the value range is 1 to 3.
     */
    duration: number | undefined;
    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.
     */
    internetChargeType: string | undefined;
    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    loadBalancerName: string | undefined;
    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
     */
    loadBalancerSpec: string | undefined;
    /**
     * @Property masterZoneId: The master zone id to create load balancer instance.
     */
    masterZoneId: string | undefined;
    /**
     * @Property modificationProtectionReason: Set the reason for modifying the protection status. The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
     * Only valid when ModificationProtectionStatus is ConsoleProtection.
     */
    modificationProtectionReason: string | undefined;
    /**
     * @Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection
     * ConsoleProtection: Modify instance protection status by console
     * Default value is empty.
     */
    modificationProtectionStatus: string | undefined;
    /**
     * @Property payType: Optional. The billing method of the instance to be created.
     * Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
     */
    payType: string | undefined;
    /**
     * @Property pricingCycle: Optional. The duration of the Subscription-billed Internet instance to be created.
     * Valid values: month | year.
     */
    pricingCycle: string | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property slaveZoneId: The slave zone id to create load balancer instance.
     */
    slaveZoneId: string | undefined;
    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * @Property vpcId: The VPC id to create load balancer instance. For VPC network only.
     */
    vpcId: string | undefined;
    /**
     * @Property vSwitchId: The VSwitch id to create load balancer instance. For VPC network only.
     */
    vSwitchId: string | undefined;
    /**
     * Create a new `ALIYUN::SLB::LoadBalancer`.
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
/**
 * Properties for defining a `ALIYUN::SLB::LoadBalancerClone`
 */
export interface RosLoadBalancerCloneProps {
    /**
     * @Property sourceLoadBalancerId: Source load balancer id to clone
     */
    readonly sourceLoadBalancerId: string;
    /**
     * @Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    readonly backendServers?: Array<RosLoadBalancerClone.BackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property backendServersPolicy: Solution for handle the backend server and weights. If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
     */
    readonly backendServersPolicy?: string;
    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    readonly loadBalancerName?: string;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;
    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];
    /**
     * @Property tagsPolicy: Solution for handle the tags. If select 'clone', it will clone from source load balancer. If select 'empty' it will not coppy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
     * Default is 'empty'.
     */
    readonly tagsPolicy?: string;
    /**
     * @Property vSwitchId: The new VSwitch ID to create load balancer instance. For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
     */
    readonly vSwitchId?: string;
}
/**
 * A ROS template type:  `ALIYUN::SLB::LoadBalancerClone`
 */
export declare class RosLoadBalancerClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::LoadBalancerClone";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute LoadBalancerId: The id of load balance generated
     */
    readonly attrLoadBalancerId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property sourceLoadBalancerId: Source load balancer id to clone
     */
    sourceLoadBalancerId: string;
    /**
     * @Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    backendServers: Array<RosLoadBalancerClone.BackendServersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property backendServersPolicy: Solution for handle the backend server and weights. If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
     */
    backendServersPolicy: string | undefined;
    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    loadBalancerName: string | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * @Property tagsPolicy: Solution for handle the tags. If select 'clone', it will clone from source load balancer. If select 'empty' it will not coppy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
     * Default is 'empty'.
     */
    tagsPolicy: string | undefined;
    /**
     * @Property vSwitchId: The new VSwitch ID to create load balancer instance. For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
     */
    vSwitchId: string | undefined;
    /**
     * Create a new `ALIYUN::SLB::LoadBalancerClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerCloneProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosLoadBalancerClone {
    /**
     * @stability external
     */
    interface BackendServersProperty {
        /**
         * @Property type: The backend server type. Valid values:ecs: ECS instance (default)eni: Elastic Network Interface (ENI)
         */
        readonly type?: string;
        /**
         * @Property serverId: Need one valid instance id. The instance status should running.
         */
        readonly serverId: string;
        /**
         * @Property description: A description of the backend server.
         */
        readonly description?: string;
        /**
         * @Property serverIp: The IP of the instance.
         */
        readonly serverIp?: string;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight: number;
    }
}
/**
 * Properties for defining a `ALIYUN::SLB::MasterSlaveServerGroup`
 */
export interface RosMasterSlaveServerGroupProps {
    /**
     * @Property loadBalancerId: The ID of the Server Load Balancer instance.
     */
    readonly loadBalancerId: string;
    /**
     * @Property masterSlaveBackendServers: A list of active/standby server group.
     * An active/standby server group can only contain two backend servers.
     */
    readonly masterSlaveBackendServers: Array<RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property masterSlaveServerGroupName: The name of the active/standby server group.
     */
    readonly masterSlaveServerGroupName?: string;
}
/**
 * A ROS template type:  `ALIYUN::SLB::MasterSlaveServerGroup`
 */
export declare class RosMasterSlaveServerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::MasterSlaveServerGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute MasterSlaveServerGroupId: Active/standby server group ID.
     */
    readonly attrMasterSlaveServerGroupId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property loadBalancerId: The ID of the Server Load Balancer instance.
     */
    loadBalancerId: string;
    /**
     * @Property masterSlaveBackendServers: A list of active/standby server group.
     * An active/standby server group can only contain two backend servers.
     */
    masterSlaveBackendServers: Array<RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property masterSlaveServerGroupName: The name of the active/standby server group.
     */
    masterSlaveServerGroupName: string | undefined;
    /**
     * Create a new `ALIYUN::SLB::MasterSlaveServerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMasterSlaveServerGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosMasterSlaveServerGroup {
    /**
     * @stability external
     */
    interface MasterSlaveBackendServersProperty {
        /**
         * @Property serverType: The identity of backend server. Could be "Master" (default) or "Slave"
         */
        readonly serverType?: string;
        /**
         * @Property serverId: ECS instance ID
         */
        readonly serverId: string;
        /**
         * @Property port: The port used by backend server. From 1 to 65535
         */
        readonly port: number;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight: number;
    }
}
/**
 * Properties for defining a `ALIYUN::SLB::Rule`
 */
export interface RosRuleProps {
    /**
     * @Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    readonly listenerPort: number;
    /**
     * @Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    readonly loadBalancerId: string;
    /**
     * @Property ruleList: The forwarding rules to add.
     */
    readonly ruleList: Array<RosRule.RuleListProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SLB::Rule`
 */
export declare class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::Rule";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Rules: A list of forwarding rules. Each element of rules contains "RuleId".
     */
    readonly attrRules: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    listenerPort: number;
    /**
     * @Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    loadBalancerId: string;
    /**
     * @Property ruleList: The forwarding rules to add.
     */
    ruleList: Array<RosRule.RuleListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Create a new `ALIYUN::SLB::Rule`.
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
    interface RuleListProperty {
        /**
         * @Property vServerGroupId: The ID of the VServer group associated with the forwarding rule.
         */
        readonly vServerGroupId: string;
        /**
         * @Property domain: The domain name.
         */
        readonly domain?: string;
        /**
         * @Property url: The URL.
         */
        readonly url?: string;
        /**
         * @Property ruleName: The name of the forwarding rule.
         */
        readonly ruleName: string;
    }
}
/**
 * Properties for defining a `ALIYUN::SLB::VServerGroup`
 */
export interface RosVServerGroupProps {
    /**
     * @Property loadBalancerId: The id of load balancer.
     */
    readonly loadBalancerId: string;
    /**
     * @Property vServerGroupName: Display name of the VServerGroup.
     */
    readonly vServerGroupName: string;
    /**
     * @Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    readonly backendServers?: Array<RosVServerGroup.BackendServersProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SLB::VServerGroup`
 */
export declare class RosVServerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::VServerGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute BackendServers: Backend server list in this VServerGroup.
     */
    readonly attrBackendServers: any;
    /**
     * @Attribute VServerGroupId: The id of VServerGroup created.
     */
    readonly attrVServerGroupId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property loadBalancerId: The id of load balancer.
     */
    loadBalancerId: string;
    /**
     * @Property vServerGroupName: Display name of the VServerGroup.
     */
    vServerGroupName: string;
    /**
     * @Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    backendServers: Array<RosVServerGroup.BackendServersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SLB::VServerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVServerGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosVServerGroup {
    /**
     * @stability external
     */
    interface BackendServersProperty {
        /**
         * @Property serverId: Need one valid ECS instance id.
         */
        readonly serverId: string;
        /**
         * @Property port: The port of backend server. From 1 to 65535.
         */
        readonly port: number;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight?: number;
    }
}
