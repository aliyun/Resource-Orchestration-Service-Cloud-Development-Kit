import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccessControl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-accesscontrol
 */
export interface RosAccessControlProps {
    /**
     * @Property aclName: The name of the access control list.
     */
    readonly aclName: string | ros.IResolvable;
    /**
     * @Property aclEntries: A list of acl entries. Each entry can be IP addresses or CIDR blocks. Max length: 300.
     */
    readonly aclEntries?: Array<RosAccessControl.AclEntriesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property addressIpVersion: IP version. Could be "ipv4" or "ipv6".
     */
    readonly addressIpVersion?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosAccessControl.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLB::AccessControl`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessControl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-accesscontrol
 */
export declare class RosAccessControl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::AccessControl";
    /**
     * @Attribute AclId: The ID of the access control list.
     */
    readonly attrAclId: ros.IResolvable;
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aclName: The name of the access control list.
     */
    aclName: string | ros.IResolvable;
    /**
     * @Property aclEntries: A list of acl entries. Each entry can be IP addresses or CIDR blocks. Max length: 300.
     */
    aclEntries: Array<RosAccessControl.AclEntriesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property addressIpVersion: IP version. Could be "ipv4" or "ipv6".
     */
    addressIpVersion: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosAccessControl.TagsProperty[] | undefined;
    /**
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
    interface AclEntriesProperty {
        /**
         * @Property comment: Description of the entry.
         */
        readonly comment?: string | ros.IResolvable;
        /**
         * @Property entry: IP addresses or CIDR blocks. For example: "10.0.0.1" or "192.168.0.0\/16"
         */
        readonly entry: string | ros.IResolvable;
    }
}
export declare namespace RosAccessControl {
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
 * Properties for defining a `RosAccessLogsAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-accesslogsaddition
 */
export interface RosAccessLogsAdditionProps {
    /**
     * @Property loadBalancerId: The load balancer id.Only SLB Layer 7 load balancing (HTTP\/HTTPS listening) supports the access log function.Prerequisites1. A SLB instance has been created. For details, see Creating and Managing CLB Instances.2. A virtual server group has been created. Backend servers have been added to the server group.3. HTTP or HTTPS listening has been configured for CLB. 4. You have enabled the log service. For details, see Activating the Log Service.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * @Property logProject: The log project name.
     */
    readonly logProject: string | ros.IResolvable;
    /**
     * @Property logStore: The log store name.
     */
    readonly logStore: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLB::AccessLogsAddition`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessLogsAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-accesslogsaddition
 */
export declare class RosAccessLogsAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::AccessLogsAddition";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property loadBalancerId: The load balancer id.Only SLB Layer 7 load balancing (HTTP\/HTTPS listening) supports the access log function.Prerequisites1. A SLB instance has been created. For details, see Creating and Managing CLB Instances.2. A virtual server group has been created. Backend servers have been added to the server group.3. HTTP or HTTPS listening has been configured for CLB. 4. You have enabled the log service. For details, see Activating the Log Service.
     */
    loadBalancerId: string | ros.IResolvable;
    /**
     * @Property logProject: The log project name.
     */
    logProject: string | ros.IResolvable;
    /**
     * @Property logStore: The log store name.
     */
    logStore: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessLogsAdditionProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosBackendServerAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-backendserverattachment
 */
export interface RosBackendServerAttachmentProps {
    /**
     * @Property loadBalancerId: The id of load balancer.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * @Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
     */
    readonly backendServerList?: Array<string | ros.IResolvable> | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLB::BackendServerAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BackendServerAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-backendserverattachment
 */
export declare class RosBackendServerAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::BackendServerAttachment";
    /**
     * @Attribute BackendServers: The collection of attached backend server.
     */
    readonly attrBackendServers: ros.IResolvable;
    /**
     * @Attribute LoadBalancerId: The id of load balancer.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property loadBalancerId: The id of load balancer.
     */
    loadBalancerId: string | ros.IResolvable;
    /**
     * @Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
     */
    backendServerList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    backendServers: Array<RosBackendServerAttachment.BackendServersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
     */
    backendServerWeightList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
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
    interface BackendServersProperty {
        /**
         * @Property type: The backend server type. Valid values:ecs: ECS instance (default)eni: Elastic Network Interface (ENI)
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property serverId: Need one valid instance id. The instance status should running.
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property description: A description of the backend server.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property serverIp: The IP of the instance.
         */
        readonly serverIp?: string | ros.IResolvable;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosBackendServerToVServerGroupAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-backendservertovservergroupaddition
 */
export interface RosBackendServerToVServerGroupAdditionProps {
    /**
     * @Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    readonly backendServers: Array<RosBackendServerToVServerGroupAddition.BackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property vServerGroupId: The ID of virtual server group.
     */
    readonly vServerGroupId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLB::BackendServerToVServerGroupAddition`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BackendServerToVServerGroupAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-backendservertovservergroupaddition
 */
export declare class RosBackendServerToVServerGroupAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::BackendServerToVServerGroupAddition";
    /**
     * @Attribute VServerGroupId: The ID of virtual server group.
     */
    readonly attrVServerGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    backendServers: Array<RosBackendServerToVServerGroupAddition.BackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property vServerGroupId: The ID of virtual server group.
     */
    vServerGroupId: string | ros.IResolvable;
    /**
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
         * @Property type: The instance type of the backend server. This parameter must be set to a string. Valid values:
     * ecs: ECS instance. This is the default value.
     * eni: ENI.
     * eci: ECI.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property description: The description of the backend server. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (\/), periods (.), and underscores (_).
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property serverId: The ID of the backend server. You can specify the ID of an Elastic Compute Service (ECS) instance,an elastic network interface (ENI) or elastic container instance (ECI).
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property serverIp: The IP address of an ECS instance, ENI or ECI
         */
        readonly serverIp?: string | ros.IResolvable;
        /**
         * @Property port: The port of backend server. From 1 to 65535.
         */
        readonly port: number | ros.IResolvable;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-certificate
 */
export interface RosCertificateProps {
    /**
     * @Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
     */
    readonly aliCloudCertificateId?: string | ros.IResolvable;
    /**
     * @Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.
     */
    readonly aliCloudCertificateName?: string | ros.IResolvable;
    /**
     * @Property certificate: The content of the certificate public key.
     */
    readonly certificate?: string | ros.IResolvable;
    /**
     * @Property certificateName: The name of the certificate.
     */
    readonly certificateName?: string | ros.IResolvable;
    /**
     * @Property certificateType: The type of the certificate.
     */
    readonly certificateType?: string | ros.IResolvable;
    /**
     * @Property privateKey: The private key.
     */
    readonly privateKey?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCertificate.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLB::Certificate`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Certificate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-certificate
 */
export declare class RosCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::Certificate";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute CertificateId: The ID of the certificate.
     */
    readonly attrCertificateId: ros.IResolvable;
    /**
     * @Attribute Fingerprint: The fingerprint of the certificate.
     */
    readonly attrFingerprint: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
     */
    aliCloudCertificateId: string | ros.IResolvable | undefined;
    /**
     * @Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.
     */
    aliCloudCertificateName: string | ros.IResolvable | undefined;
    /**
     * @Property certificate: The content of the certificate public key.
     */
    certificate: string | ros.IResolvable | undefined;
    /**
     * @Property certificateName: The name of the certificate.
     */
    certificateName: string | ros.IResolvable | undefined;
    /**
     * @Property certificateType: The type of the certificate.
     */
    certificateType: string | ros.IResolvable | undefined;
    /**
     * @Property privateKey: The private key.
     */
    privateKey: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosCertificate.TagsProperty[] | undefined;
    /**
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
export declare namespace RosCertificate {
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
 * Properties for defining a `RosDomainExtension`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-domainextension
 */
export interface RosDomainExtensionProps {
    /**
     * @Property domain: The domain name.
     */
    readonly domain: string | ros.IResolvable;
    /**
     * @Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    readonly listenerPort: number | ros.IResolvable;
    /**
     * @Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * @Property serverCertificateId: The ID of the certificate corresponding to the domain name.
     */
    readonly serverCertificateId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLB::DomainExtension`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DomainExtension` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-domainextension
 */
export declare class RosDomainExtension extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::DomainExtension";
    /**
     * @Attribute DomainExtensionId: The ID of the created domain name extension.
     */
    readonly attrDomainExtensionId: ros.IResolvable;
    /**
     * @Attribute ListenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
1-65535
     */
    readonly attrListenerPort: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domain: The domain name.
     */
    domain: string | ros.IResolvable;
    /**
     * @Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    listenerPort: number | ros.IResolvable;
    /**
     * @Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    loadBalancerId: string | ros.IResolvable;
    /**
     * @Property serverCertificateId: The ID of the certificate corresponding to the domain name.
     */
    serverCertificateId: string | ros.IResolvable;
    /**
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
 * Properties for defining a `RosListener`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-listener
 */
export interface RosListenerProps {
    /**
     * @Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
     */
    readonly bandwidth: number | ros.IResolvable;
    /**
     * @Property listenerPort: Port for front listener. Range from 0 to 65535.
     */
    readonly listenerPort: number | ros.IResolvable;
    /**
     * @Property loadBalancerId: The id of load balancer to create listener.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * @Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
     */
    readonly protocol: string | ros.IResolvable;
    /**
     * @Property aclId: The ID of the access control associated with the listener to be created.
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    readonly aclId?: string | ros.IResolvable;
    /**
     * @Property aclIds: The ID list of the access controls associated with the listener to be created.
     * If the value of the AclStatus parameter is on, this parameter is required.AclIds have higher priority than AclId.
     */
    readonly aclIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property aclStatus: Indicates whether to enable access control.
     * Valid values: on | off. Default value: off
     */
    readonly aclStatus?: string | ros.IResolvable;
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
    readonly aclType?: string | ros.IResolvable;
    /**
     * @Property backendServerPort: Backend server can listen on ports from 0 to 65535.
     */
    readonly backendServerPort?: number | ros.IResolvable;
    /**
     * @Property caCertificateId: CA server certificate id, for https listener only.
     */
    readonly caCertificateId?: string | ros.IResolvable;
    /**
     * @Property connectionDrain: Whether to enable graceful connection interruption. Value:on: turn on
     * off: Not turned on
     * Note: Only effective TCP listener.
     */
    readonly connectionDrain?: string | ros.IResolvable;
    /**
     * @Property connectionDrainTimeout: Set the connection graceful interruption timeout. Unit: seconds. Value range: 10-900.
     * Note: Only effective for TCP listener. When ConnectionDrain is on, this option is required.
     */
    readonly connectionDrainTimeout?: number | ros.IResolvable;
    /**
     * @Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (\/), periods (.), and underscores (_). Chinese characters are supported.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property enableHttp2: Specifies whether to use HTTP\/2. It takes effect when Protocol=https. Valid values:
     * on: yes
     * off: no
     */
    readonly enableHttp2?: string | ros.IResolvable;
    /**
     * @Property fullNatEnabled: When Full NAT mode is enabled, it can support the backend servers as clients for access. Default value is false.
     * Note: Only effective for TCP or UDP listener.
     */
    readonly fullNatEnabled?: boolean | ros.IResolvable;
    /**
     * @Property gzip: Specifies whether to enable Gzip compression to compress specific types of files. Valid values:
     * on (default): yes
     * off: no
     */
    readonly gzip?: string | ros.IResolvable;
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
    readonly idleTimeout?: number | ros.IResolvable;
    /**
     * @Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
     */
    readonly masterSlaveServerGroupId?: string | ros.IResolvable;
    /**
     * @Property persistence: The properties of persistence.
     */
    readonly persistence?: RosListener.PersistenceProperty | ros.IResolvable;
    /**
     * @Property portRange: Port range, only supports TCP or UDP listener. ListenerPort should be 0 when PortRange is specified.
     */
    readonly portRange?: Array<RosListener.PortRangeProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property proxyProtocolV2Enabled: Whether to support carrying the client source address to the backend server through the Proxy Protocol. Value:
     * true: Yes
     * false (default): No
     * Note: Only effective TCP or UDP listener.
     */
    readonly proxyProtocolV2Enabled?: boolean | ros.IResolvable;
    /**
     * @Property requestTimeout: Specify the request timeout in seconds. Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
     */
    readonly requestTimeout?: number | ros.IResolvable;
    /**
     * @Property scheduler: The scheduling algorithm. Valid values:
     * wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
     * wlc: Requests are distributed based on the combination of the weights and connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
     * rr: Requests are distributed to backend servers in sequence.
     * sch: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
     * tch: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port number, and destination port number. Requests that contain the same preceding information are distributed to the same backend server.
     * Default: wrr
     */
    readonly scheduler?: string | ros.IResolvable;
    /**
     * @Property serverCertificateId: Server certificate id, for https listener only, this properties is required.
     */
    readonly serverCertificateId?: string | ros.IResolvable;
    /**
     * @Property startListener: Whether start listener after listener created. Default True.
     */
    readonly startListener?: boolean | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosListener.TagsProperty[];
    /**
     * @Property tlsCipherPolicy: The Transport Layer Security (TLS) security policy. Each security policy contains TLS protocol versions and cipher suites available for HTTPS. It takes effect when Protocol=https.
     */
    readonly tlsCipherPolicy?: string | ros.IResolvable;
    /**
     * @Property vServerGroupId: The id of the VServerGroup which use in listener.
     */
    readonly vServerGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLB::Listener`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Listener` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-listener
 */
export declare class RosListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::Listener";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute ListenerPortsAndProtocol: The collection of listener.
     */
    readonly attrListenerPortsAndProtocol: ros.IResolvable;
    /**
     * @Attribute LoadBalancerId: The id of load balancer
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
     */
    bandwidth: number | ros.IResolvable;
    /**
     * @Property listenerPort: Port for front listener. Range from 0 to 65535.
     */
    listenerPort: number | ros.IResolvable;
    /**
     * @Property loadBalancerId: The id of load balancer to create listener.
     */
    loadBalancerId: string | ros.IResolvable;
    /**
     * @Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
     */
    protocol: string | ros.IResolvable;
    /**
     * @Property aclId: The ID of the access control associated with the listener to be created.
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    aclId: string | ros.IResolvable | undefined;
    /**
     * @Property aclIds: The ID list of the access controls associated with the listener to be created.
     * If the value of the AclStatus parameter is on, this parameter is required.AclIds have higher priority than AclId.
     */
    aclIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property aclStatus: Indicates whether to enable access control.
     * Valid values: on | off. Default value: off
     */
    aclStatus: string | ros.IResolvable | undefined;
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
    aclType: string | ros.IResolvable | undefined;
    /**
     * @Property backendServerPort: Backend server can listen on ports from 0 to 65535.
     */
    backendServerPort: number | ros.IResolvable | undefined;
    /**
     * @Property caCertificateId: CA server certificate id, for https listener only.
     */
    caCertificateId: string | ros.IResolvable | undefined;
    /**
     * @Property connectionDrain: Whether to enable graceful connection interruption. Value:on: turn on
     * off: Not turned on
     * Note: Only effective TCP listener.
     */
    connectionDrain: string | ros.IResolvable | undefined;
    /**
     * @Property connectionDrainTimeout: Set the connection graceful interruption timeout. Unit: seconds. Value range: 10-900.
     * Note: Only effective for TCP listener. When ConnectionDrain is on, this option is required.
     */
    connectionDrainTimeout: number | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (\/), periods (.), and underscores (_). Chinese characters are supported.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property enableHttp2: Specifies whether to use HTTP\/2. It takes effect when Protocol=https. Valid values:
     * on: yes
     * off: no
     */
    enableHttp2: string | ros.IResolvable | undefined;
    /**
     * @Property fullNatEnabled: When Full NAT mode is enabled, it can support the backend servers as clients for access. Default value is false.
     * Note: Only effective for TCP or UDP listener.
     */
    fullNatEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property gzip: Specifies whether to enable Gzip compression to compress specific types of files. Valid values:
     * on (default): yes
     * off: no
     */
    gzip: string | ros.IResolvable | undefined;
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
    idleTimeout: number | ros.IResolvable | undefined;
    /**
     * @Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
     */
    masterSlaveServerGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property persistence: The properties of persistence.
     */
    persistence: RosListener.PersistenceProperty | ros.IResolvable | undefined;
    /**
     * @Property portRange: Port range, only supports TCP or UDP listener. ListenerPort should be 0 when PortRange is specified.
     */
    portRange: Array<RosListener.PortRangeProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property proxyProtocolV2Enabled: Whether to support carrying the client source address to the backend server through the Proxy Protocol. Value:
     * true: Yes
     * false (default): No
     * Note: Only effective TCP or UDP listener.
     */
    proxyProtocolV2Enabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property requestTimeout: Specify the request timeout in seconds. Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
     */
    requestTimeout: number | ros.IResolvable | undefined;
    /**
     * @Property scheduler: The scheduling algorithm. Valid values:
     * wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
     * wlc: Requests are distributed based on the combination of the weights and connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
     * rr: Requests are distributed to backend servers in sequence.
     * sch: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
     * tch: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port number, and destination port number. Requests that contain the same preceding information are distributed to the same backend server.
     * Default: wrr
     */
    scheduler: string | ros.IResolvable | undefined;
    /**
     * @Property serverCertificateId: Server certificate id, for https listener only, this properties is required.
     */
    serverCertificateId: string | ros.IResolvable | undefined;
    /**
     * @Property startListener: Whether start listener after listener created. Default True.
     */
    startListener: boolean | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosListener.TagsProperty[] | undefined;
    /**
     * @Property tlsCipherPolicy: The Transport Layer Security (TLS) security policy. Each security policy contains TLS protocol versions and cipher suites available for HTTPS. It takes effect when Protocol=https.
     */
    tlsCipherPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property vServerGroupId: The id of the VServerGroup which use in listener.
     */
    vServerGroupId: string | ros.IResolvable | undefined;
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
    interface HealthCheckProperty {
        /**
         * @Property unhealthyThreshold: The number of consecutive health checks failures required,before identified the backend server in Unhealthy status.
         */
        readonly unhealthyThreshold?: number | ros.IResolvable;
        /**
         * @Property timeout: The amount of time, in seconds, during which no response means a failed health check.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property port: The port being checked. The range of valid ports is 0 through 65535.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property uri: The url of health check target.
         */
        readonly uri?: string | ros.IResolvable;
        /**
         * @Property httpCode: The expect status of health check result. Any answer other than referred status within the timeout period is considered unhealthy.
         */
        readonly httpCode?: string | ros.IResolvable;
        /**
         * @Property switch: Whether to enable health check. Valid value: on, off.
     * If value is on, turn on the health check. If value is off, turn off the health checkIf value is not set, the health check is disabled by default, unless any health check items are configured.
         */
        readonly switch?: string | ros.IResolvable;
        /**
         * @Property healthCheckMethod: The health check method used in HTTP or HTTPS health checks. Valid values: head and get.
         */
        readonly healthCheckMethod?: string | ros.IResolvable;
        /**
         * @Property healthyThreshold: The number of consecutive health checks successes required,before identified the backend server in Healthy status.
         */
        readonly healthyThreshold?: number | ros.IResolvable;
        /**
         * @Property domain: The domain of health check target.
         */
        readonly domain?: string | ros.IResolvable;
        /**
         * @Property exp: The response string for UDP listening health check is limited to letters and numbers, and the maximum length is 64 characters.
         */
        readonly exp?: string | ros.IResolvable;
        /**
         * @Property healthCheckType: The type of health check.Valid values: tcp, udp, https and http. Default value: tcp.
         */
        readonly healthCheckType?: string | ros.IResolvable;
        /**
         * @Property req: The request string for UDP listening health check is limited to letters and numbers, and the maximum length is 64 characters.
         */
        readonly req?: string | ros.IResolvable;
        /**
         * @Property interval: The approximate interval, unit in seconds, between health checks of an backend server.
         */
        readonly interval?: number | ros.IResolvable;
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
        readonly listenerForward?: string | ros.IResolvable;
        /**
         * @Property forwardPort: HTTP to HTTPS listening forwarding port.
     * Default value: 443.
         */
        readonly forwardPort?: number | ros.IResolvable;
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
        readonly xForwardedForSlbid?: string | ros.IResolvable;
        /**
         * @Property cookieTimeout: The timeout for cookie setting, in seconds. It only take effect while StickySession is setting to 'on' and StickySessionType is setting to 'insert'.
         */
        readonly cookieTimeout?: number | ros.IResolvable;
        /**
         * @Property cookie: The type of session persistence.
         */
        readonly cookie?: string | ros.IResolvable;
        /**
         * @Property stickySession: The switch of session persistence. Support 'on' and 'off'.
         */
        readonly stickySession?: string | ros.IResolvable;
        /**
         * @Property persistenceTimeout: The timeout number of persistence, in seconds.
         */
        readonly persistenceTimeout?: number | ros.IResolvable;
        /**
         * @Property xForwardedForSlbport: Optional. Indicates whether to use the X-Forwarded-Port header field to retrieve the listening ports of the SLB instance. Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
         */
        readonly xForwardedForSlbport?: string | ros.IResolvable;
        /**
         * @Property xForwardedFor: Use 'X-Forwarded-For' to get real ip of accessor. On for open, off for close.
         */
        readonly xForwardedFor?: string | ros.IResolvable;
        /**
         * @Property xForwardedForClientSrcPort: Optional. Indicates whether to use the X-Forwarded-Client-srcport header field to retrieve the port used by a client to connect to the SLB instance. Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
         */
        readonly xForwardedForClientSrcPort?: string | ros.IResolvable;
        /**
         * @Property xForwardedForProto: Optional. Indicates whether to use the X-Forwarded-Proto header field to obtainthe listening protocol used by the SLB instance. Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
         */
        readonly xForwardedForProto?: string | ros.IResolvable;
        /**
         * @Property stickySessionType: The type of session persistence. Depends on parameter StickySession, if it is set to off, this parameter will be ignored.
         */
        readonly stickySessionType?: string | ros.IResolvable;
        /**
         * @Property xForwardedForSlbip: Optional. Indicates whether to use the SLB-IP header field to obtainthe real IP address of a client request.Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
         */
        readonly xForwardedForSlbip?: string | ros.IResolvable;
    }
}
export declare namespace RosListener {
    /**
     * @stability external
     */
    interface PortRangeProperty {
        /**
         * @Property startPort: Start port, from 1 to 65535.
         */
        readonly startPort: number | ros.IResolvable;
        /**
         * @Property endPort: End port, from 1 to 65535.
         */
        readonly endPort: number | ros.IResolvable;
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-loadbalancer
 */
export interface RosLoadBalancerProps {
    /**
     * @Property addressIpVersion: IP version, support 'ipv4' or 'ipv6'. If 'ipv6' is selected, please note that the zone and the specification are supported.
     */
    readonly addressIpVersion?: string | ros.IResolvable;
    /**
     * @Property addressType: The network type of the CLB instance. Valid values:
     * - **internet** (default): After an internet-facing CLB instance is created, the system assigns a public IP address to the CLB instance. Then, the CLB instance can forward requests over the Internet.
     * - **intranet**: After an internal-facing CLB instance is created, the system assigns a private IP address to the CLB instance. Then, the CLB instance can forward requests only over the internal networks.
     */
    readonly addressType?: string | ros.IResolvable;
    /**
     * @Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
     */
    readonly bandwidth?: number | ros.IResolvable;
    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property instanceChargeType: Instance billing method. Valid value:
     * - **PayBySpec** (default): Pay by spec.
     * - **PayByCLCU**: billed by usage.
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property internetChargeType: The metering method of the Internet-facing CLB instance. Valid values:
     * - **paybytraffic** (default): If you set the value to paybytraffic, you do not need to specify Bandwidth. Even if you specify Bandwidth, the value does not take effect.
     * - **paybybandwidth**: pay-by-bandwidth.
     * **Note** If you set PayType to PayOnDemand and set InstanceChargeType to PayByCLCU, you must set InternetChargeType to paybytraffic.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, \/, _,.' When not specified, a default name will be assigned.
     */
    readonly loadBalancerName?: string | ros.IResolvable;
    /**
     * @Property loadBalancerSpec: The specification of the CLB instance. Valid values:
     * - **slb.s1.small**
     * - **slb.s2.small**
     * - **slb.s2.medium**
     * - **slb.s3.small**
     * - **slb.s3.medium**
     * - **slb.s3.large**
     * **Note** If you do not specify this parameter, a shared-resource CLB instance is created. Shared-resource CLB instances are no longer available for purchase. Therefore, you must specify this parameter.
     * If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you do not need to specify this parameter.
     */
    readonly loadBalancerSpec?: string | ros.IResolvable;
    /**
     * @Property masterZoneId: The master zone id to create load balancer instance.
     */
    readonly masterZoneId?: string | ros.IResolvable;
    /**
     * @Property modificationProtectionReason: Set the reason for modifying the protection status. The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
     * Only valid when ModificationProtectionStatus is ConsoleProtection.
     */
    readonly modificationProtectionReason?: string | ros.IResolvable;
    /**
     * @Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection
     * ConsoleProtection: Modify instance protection status by console
     * Default value is empty.
     */
    readonly modificationProtectionStatus?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property slaveZoneId: The slave zone id to create load balancer instance.
     */
    readonly slaveZoneId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosLoadBalancer.TagsProperty[];
    /**
     * @Property vpcId: The VPC id to create load balancer instance. For VPC network only.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The VSwitch id to create load balancer instance. For VPC network only.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLB::LoadBalancer`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoadBalancer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-loadbalancer
 */
export declare class RosLoadBalancer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::LoadBalancer";
    /**
     * @Attribute AddressIPVersion: IP version
     */
    readonly attrAddressIpVersion: ros.IResolvable;
    /**
     * @Attribute AddressType: The address type of the load balancer. "intranet" or "internet".
     */
    readonly attrAddressType: ros.IResolvable;
    /**
     * @Attribute Bandwidth: The bandwidth for network
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * @Attribute IpAddress: The ip address of the load balancer.
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * @Attribute LoadBalancerId: The id of load balance created.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    /**
     * @Attribute LoadBalancerName: Name of created load balancer.
     */
    readonly attrLoadBalancerName: ros.IResolvable;
    /**
     * @Attribute LoadBalancerSpec: The specification of the Server Load Balancer instance
     */
    readonly attrLoadBalancerSpec: ros.IResolvable;
    /**
     * @Attribute MasterZoneId: The master zone id to create load balancer instance.
     */
    readonly attrMasterZoneId: ros.IResolvable;
    /**
     * @Attribute NetworkType: The network type of the load balancer. "vpc" or "classic" network.
     */
    readonly attrNetworkType: ros.IResolvable;
    /**
     * @Attribute OrderId: The order ID.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute PayType: The billing method of the instance to be created.
     */
    readonly attrPayType: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: Resource group id.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SlaveZoneId: The slave zone id to create load balancer instance.
     */
    readonly attrSlaveZoneId: ros.IResolvable;
    /**
     * @Attribute VSwitchId: VSwitch id
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: Vpc id
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property addressIpVersion: IP version, support 'ipv4' or 'ipv6'. If 'ipv6' is selected, please note that the zone and the specification are supported.
     */
    addressIpVersion: string | ros.IResolvable | undefined;
    /**
     * @Property addressType: The network type of the CLB instance. Valid values:
     * - **internet** (default): After an internet-facing CLB instance is created, the system assigns a public IP address to the CLB instance. Then, the CLB instance can forward requests over the Internet.
     * - **intranet**: After an internal-facing CLB instance is created, the system assigns a private IP address to the CLB instance. Then, the CLB instance can forward requests only over the internal networks.
     */
    addressType: string | ros.IResolvable | undefined;
    /**
     * @Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
     */
    bandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: Instance billing method. Valid value:
     * - **PayBySpec** (default): Pay by spec.
     * - **PayByCLCU**: billed by usage.
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property internetChargeType: The metering method of the Internet-facing CLB instance. Valid values:
     * - **paybytraffic** (default): If you set the value to paybytraffic, you do not need to specify Bandwidth. Even if you specify Bandwidth, the value does not take effect.
     * - **paybybandwidth**: pay-by-bandwidth.
     * **Note** If you set PayType to PayOnDemand and set InstanceChargeType to PayByCLCU, you must set InternetChargeType to paybytraffic.
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, \/, _,.' When not specified, a default name will be assigned.
     */
    loadBalancerName: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerSpec: The specification of the CLB instance. Valid values:
     * - **slb.s1.small**
     * - **slb.s2.small**
     * - **slb.s2.medium**
     * - **slb.s3.small**
     * - **slb.s3.medium**
     * - **slb.s3.large**
     * **Note** If you do not specify this parameter, a shared-resource CLB instance is created. Shared-resource CLB instances are no longer available for purchase. Therefore, you must specify this parameter.
     * If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you do not need to specify this parameter.
     */
    loadBalancerSpec: string | ros.IResolvable | undefined;
    /**
     * @Property masterZoneId: The master zone id to create load balancer instance.
     */
    masterZoneId: string | ros.IResolvable | undefined;
    /**
     * @Property modificationProtectionReason: Set the reason for modifying the protection status. The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
     * Only valid when ModificationProtectionStatus is ConsoleProtection.
     */
    modificationProtectionReason: string | ros.IResolvable | undefined;
    /**
     * @Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection
     * ConsoleProtection: Modify instance protection status by console
     * Default value is empty.
     */
    modificationProtectionStatus: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property slaveZoneId: The slave zone id to create load balancer instance.
     */
    slaveZoneId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosLoadBalancer.TagsProperty[] | undefined;
    /**
     * @Property vpcId: The VPC id to create load balancer instance. For VPC network only.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The VSwitch id to create load balancer instance. For VPC network only.
     */
    vSwitchId: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosLoadBalancerClone`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-loadbalancerclone
 */
export interface RosLoadBalancerCloneProps {
    /**
     * @Property sourceLoadBalancerId: Source load balancer id to clone
     */
    readonly sourceLoadBalancerId: string | ros.IResolvable;
    /**
     * @Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    readonly backendServers?: Array<RosLoadBalancerClone.BackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property backendServersPolicy: Solution for handle the backend server and weights. If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
     */
    readonly backendServersPolicy?: string | ros.IResolvable;
    /**
     * @Property instanceChargeType: Instance billing method. Value:PayBySpec: Pay by spec.
     * PayByCLCU: billed by usage.
     * If not specified, it is same with the source load balancer.
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, \/, _,.' When not specified, a default name will be assigned.
     */
    readonly loadBalancerName?: string | ros.IResolvable;
    /**
     * @Property loadBalancerSpec: The specification of the load balancer. If not specified, it is same with the source load balancer.
     * Note If InstanceChargeType is set to PayByCLCU, the LoadBalancerSpec parameter is invalid and you do not need to set this parameter.
     */
    readonly loadBalancerSpec?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosLoadBalancerClone.TagsProperty[];
    /**
     * @Property tagsPolicy: Solution for handle the tags. If select 'clone', it will clone from source load balancer. If select 'empty' it will not copy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
     * Default is 'empty'.
     */
    readonly tagsPolicy?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The new VSwitch ID to create load balancer instance. For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLB::LoadBalancerClone`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoadBalancerClone` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-loadbalancerclone
 */
export declare class RosLoadBalancerClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::LoadBalancerClone";
    /**
     * @Attribute LoadBalancerId: The id of load balance generated
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property sourceLoadBalancerId: Source load balancer id to clone
     */
    sourceLoadBalancerId: string | ros.IResolvable;
    /**
     * @Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    backendServers: Array<RosLoadBalancerClone.BackendServersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property backendServersPolicy: Solution for handle the backend server and weights. If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
     */
    backendServersPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: Instance billing method. Value:PayBySpec: Pay by spec.
     * PayByCLCU: billed by usage.
     * If not specified, it is same with the source load balancer.
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, \/, _,.' When not specified, a default name will be assigned.
     */
    loadBalancerName: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerSpec: The specification of the load balancer. If not specified, it is same with the source load balancer.
     * Note If InstanceChargeType is set to PayByCLCU, the LoadBalancerSpec parameter is invalid and you do not need to set this parameter.
     */
    loadBalancerSpec: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosLoadBalancerClone.TagsProperty[] | undefined;
    /**
     * @Property tagsPolicy: Solution for handle the tags. If select 'clone', it will clone from source load balancer. If select 'empty' it will not copy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
     * Default is 'empty'.
     */
    tagsPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The new VSwitch ID to create load balancer instance. For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
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
        readonly type?: string | ros.IResolvable;
        /**
         * @Property serverId: Need one valid instance id. The instance status should running.
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property description: A description of the backend server.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property serverIp: The IP of the instance.
         */
        readonly serverIp?: string | ros.IResolvable;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight: number | ros.IResolvable;
    }
}
export declare namespace RosLoadBalancerClone {
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
 * Properties for defining a `RosMasterSlaveServerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-masterslaveservergroup
 */
export interface RosMasterSlaveServerGroupProps {
    /**
     * @Property loadBalancerId: The ID of the Server Load Balancer instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * @Property masterSlaveBackendServers: A list of active\/standby server group.
     * An active\/standby server group can only contain two backend servers.
     */
    readonly masterSlaveBackendServers: Array<RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property masterSlaveServerGroupName: The name of the active\/standby server group.
     */
    readonly masterSlaveServerGroupName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLB::MasterSlaveServerGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MasterSlaveServerGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-masterslaveservergroup
 */
export declare class RosMasterSlaveServerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::MasterSlaveServerGroup";
    /**
     * @Attribute MasterSlaveServerGroupId: Active/standby server group ID.
     */
    readonly attrMasterSlaveServerGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property loadBalancerId: The ID of the Server Load Balancer instance.
     */
    loadBalancerId: string | ros.IResolvable;
    /**
     * @Property masterSlaveBackendServers: A list of active\/standby server group.
     * An active\/standby server group can only contain two backend servers.
     */
    masterSlaveBackendServers: Array<RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property masterSlaveServerGroupName: The name of the active\/standby server group.
     */
    masterSlaveServerGroupName: string | ros.IResolvable | undefined;
    /**
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
        readonly serverType?: string | ros.IResolvable;
        /**
         * @Property type: Specify the type of backend server. This parameter must be of the STRING type. Valid values:
     * ecs: an ECS instance
     * eni: an elastic network interface (ENI).
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property serverId: ECS instance ID
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property serverIp: The IP of ECS or ENI.
         */
        readonly serverIp?: string | ros.IResolvable;
        /**
         * @Property port: The port used by backend server. From 1 to 65535
         */
        readonly port: number | ros.IResolvable;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-rule
 */
export interface RosRuleProps {
    /**
     * @Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    readonly listenerPort: number | ros.IResolvable;
    /**
     * @Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * @Property ruleList: The forwarding rules to add.
     */
    readonly ruleList: Array<RosRule.RuleListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property listenerProtocol: The frontend protocol that is used by the SLB instance.
     */
    readonly listenerProtocol?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLB::Rule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Rule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-rule
 */
export declare class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::Rule";
    /**
     * @Attribute Rules: A list of forwarding rules. Each element of rules contains "RuleId".
     */
    readonly attrRules: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    listenerPort: number | ros.IResolvable;
    /**
     * @Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    loadBalancerId: string | ros.IResolvable;
    /**
     * @Property ruleList: The forwarding rules to add.
     */
    ruleList: Array<RosRule.RuleListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property listenerProtocol: The frontend protocol that is used by the SLB instance.
     */
    listenerProtocol: string | ros.IResolvable | undefined;
    /**
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
    interface AdvancedSettingsProperty {
        /**
         * @Property cookieTimeout: The timeout period of a cookie. Unit: seconds.
         */
        readonly cookieTimeout?: number | ros.IResolvable;
        /**
         * @Property cookie: The cookie that is configured on the server.
     * The cookie must be 1 to 200 characters in length and can contain only ASCII characters and digits. It cannot contain commas (,), semicolons (;), or space characters. It cannot start with a dollar sign ($).
         */
        readonly cookie?: string | ros.IResolvable;
        /**
         * @Property healthCheckInterval: The interval between two consecutive health checks. Unit: seconds. Valid values: 1 to 50.
         */
        readonly healthCheckInterval?: number | ros.IResolvable;
        /**
         * @Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail.
         */
        readonly unhealthyThreshold?: number | ros.IResolvable;
        /**
         * @Property healthCheckUri: The URI that is used for health checks.
         */
        readonly healthCheckUri?: string | ros.IResolvable;
        /**
         * @Property scheduler: The scheduling algorithm. Valid values:
     * wrr: Backend servers with higher weights receive more requests than those with lower weights.
     * rr: Requests are distributed to backend servers in sequence.
         */
        readonly scheduler?: string | ros.IResolvable;
        /**
         * @Property healthCheck: Specifies whether to enable the health check feature. Valid values:
     * on: yes
     * off: no
         */
        readonly healthCheck?: string | ros.IResolvable;
        /**
         * @Property healthCheckTimeout: The timeout period of a health check response. If a backend server, such as an Elastic Compute Service (ECS) instance, does not return a health check response within the specified timeout period, the server fails the health check. Unit: seconds. Valid values: 1 to 300.
         */
        readonly healthCheckTimeout?: number | ros.IResolvable;
        /**
         * @Property stickySession: Specifies whether to enable session persistence. Valid values:
     * on: yes
     * off: no
         */
        readonly stickySession?: string | ros.IResolvable;
        /**
         * @Property healthCheckConnectPort: The port that is used for health checks. Valid values: 1 to 65535.
         */
        readonly healthCheckConnectPort?: number | ros.IResolvable;
        /**
         * @Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success.
         */
        readonly healthyThreshold?: number | ros.IResolvable;
        /**
         * @Property listenerSync: Specifies whether to use the scheduling algorithm, session persistence, and health check configurations of the listener. Valid values:
     * on: uses the configurations of the listener.
     * off: does not use the configurations of the listener. You can customize the health check and session persistence configurations for the forwarding rule.
         */
        readonly listenerSync?: string | ros.IResolvable;
        /**
         * @Property healthCheckDomain: The domain name that is used for health checks. Valid values:
     * $_ip: the private IP address of a backend server. If you do not set this parameter or set the parameter to $_ip, the SLB instance uses the private IP address of each backend server for health checks.
     * domain: The domain name must be 1 to 80 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
         */
        readonly healthCheckDomain?: string | ros.IResolvable;
        /**
         * @Property stickySessionType: The method that is used to handle a cookie. Valid values:
     * insert: inserts a cookie.
     * server: rewrites a cookie.
         */
        readonly stickySessionType?: string | ros.IResolvable;
        /**
         * @Property healthCheckHttpCode: The HTTP status code for a successful health check. Multiple HTTP status codes are separated by commas (,).
     * Valid values: http_2xx, http_3xx, http_4xx, and http_5xx.
         */
        readonly healthCheckHttpCode?: string | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface RuleListProperty {
        /**
         * @Property vServerGroupId: The ID of the VServer group associated with the forwarding rule.
         */
        readonly vServerGroupId: string | ros.IResolvable;
        /**
         * @Property advancedSettings: The advanced settings of the rule.
         */
        readonly advancedSettings?: RosRule.AdvancedSettingsProperty | ros.IResolvable;
        /**
         * @Property domain: The domain name.
         */
        readonly domain?: string | ros.IResolvable;
        /**
         * @Property url: The URL.
         */
        readonly url?: string | ros.IResolvable;
        /**
         * @Property ruleName: The name of the forwarding rule.
         */
        readonly ruleName: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosTLSPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-tlspolicy
 */
export interface RosTLSPolicyProps {
    /**
     * @Property ciphers: The supported cipher suites, which are determined by the TLS protocol version. You can specify at most 32 cipher suites.TLS 1.0 and TLS 1.1 support the following cipher suites:
     * ECDHE-ECDSA-AES128-SHA
     * ECDHE-ECDSA-AES256-SHA
     * ECDHE-RSA-AES128-SHA
     * ECDHE-RSA-AES256-SHA
     * AES128-SHA
     * AES256-SHA
     * DES-CBC3-SHA
     * TLS 1.2 supports the following cipher suites:
     * ECDHE-ECDSA-AES128-SHA
     * ECDHE-ECDSA-AES256-SHA
     * ECDHE-RSA-AES128-SHA
     * ECDHE-RSA-AES256-SHA
     * AES128-SHA
     * AES256-SHA
     * DES-CBC3-SHA
     * ECDHE-ECDSA-AES128-GCM-SHA256
     * ECDHE-ECDSA-AES256-GCM-SHA384
     * ECDHE-ECDSA-AES128-SHA256
     * ECDHE-ECDSA-AES256-SHA384
     * ECDHE-RSA-AES128-GCM-SHA256
     * ECDHE-RSA-AES256-GCM-SHA384
     * ECDHE-RSA-AES128-SHA256
     * ECDHE-RSA-AES256-SHA384
     * AES128-GCM-SHA256
     * AES256-GCM-SHA384
     * AES128-SHA256
     * AES256-SHA256
     * TLS 1.3 supports the following cipher suites:
     * TLS_AES_128_GCM_SHA256
     * TLS_AES_256_GCM_SHA384
     * TLS_CHACHA20_POLY1305_SHA256
     * TLS_AES_128_CCM_SHA256
     * TLS_AES_128_CCM_8_SHA256
     */
    readonly ciphers: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tlsPolicyName: The name of the TLS policy. The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    readonly tlsPolicyName: string | ros.IResolvable;
    /**
     * @Property tlsVersions: The version of the TLS protocol.
     */
    readonly tlsVersions: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLB::TLSPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `TLSPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-tlspolicy
 */
export declare class RosTLSPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::TLSPolicy";
    /**
     * @Attribute Ciphers: The supported cipher suites, which are determined by the TLS protocol version.
     */
    readonly attrCiphers: ros.IResolvable;
    /**
     * @Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the policy.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute TLSPolicyName: The name of the TLS policy.
     */
    readonly attrTlsPolicyName: ros.IResolvable;
    /**
     * @Attribute TlsVersions: The version of the TLS protocol.
     */
    readonly attrTlsVersions: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ciphers: The supported cipher suites, which are determined by the TLS protocol version. You can specify at most 32 cipher suites.TLS 1.0 and TLS 1.1 support the following cipher suites:
     * ECDHE-ECDSA-AES128-SHA
     * ECDHE-ECDSA-AES256-SHA
     * ECDHE-RSA-AES128-SHA
     * ECDHE-RSA-AES256-SHA
     * AES128-SHA
     * AES256-SHA
     * DES-CBC3-SHA
     * TLS 1.2 supports the following cipher suites:
     * ECDHE-ECDSA-AES128-SHA
     * ECDHE-ECDSA-AES256-SHA
     * ECDHE-RSA-AES128-SHA
     * ECDHE-RSA-AES256-SHA
     * AES128-SHA
     * AES256-SHA
     * DES-CBC3-SHA
     * ECDHE-ECDSA-AES128-GCM-SHA256
     * ECDHE-ECDSA-AES256-GCM-SHA384
     * ECDHE-ECDSA-AES128-SHA256
     * ECDHE-ECDSA-AES256-SHA384
     * ECDHE-RSA-AES128-GCM-SHA256
     * ECDHE-RSA-AES256-GCM-SHA384
     * ECDHE-RSA-AES128-SHA256
     * ECDHE-RSA-AES256-SHA384
     * AES128-GCM-SHA256
     * AES256-GCM-SHA384
     * AES128-SHA256
     * AES256-SHA256
     * TLS 1.3 supports the following cipher suites:
     * TLS_AES_128_GCM_SHA256
     * TLS_AES_256_GCM_SHA384
     * TLS_CHACHA20_POLY1305_SHA256
     * TLS_AES_128_CCM_SHA256
     * TLS_AES_128_CCM_8_SHA256
     */
    ciphers: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tlsPolicyName: The name of the TLS policy. The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    tlsPolicyName: string | ros.IResolvable;
    /**
     * @Property tlsVersions: The version of the TLS protocol.
     */
    tlsVersions: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTLSPolicyProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosVServerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
 */
export interface RosVServerGroupProps {
    /**
     * @Property loadBalancerId: The id of load balancer.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * @Property vServerGroupName: Display name of the VServerGroup.
     */
    readonly vServerGroupName: string | ros.IResolvable;
    /**
     * @Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    readonly backendServers?: Array<RosVServerGroup.BackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosVServerGroup.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLB::VServerGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VServerGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
 */
export declare class RosVServerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::VServerGroup";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute BackendServers: Backend server list in this VServerGroup.
     */
    readonly attrBackendServers: ros.IResolvable;
    /**
     * @Attribute LoadBalancerId: The id of load balancer.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    /**
     * @Attribute VServerGroupId: The id of VServerGroup created.
     */
    readonly attrVServerGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property loadBalancerId: The id of load balancer.
     */
    loadBalancerId: string | ros.IResolvable;
    /**
     * @Property vServerGroupName: Display name of the VServerGroup.
     */
    vServerGroupName: string | ros.IResolvable;
    /**
     * @Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    backendServers: Array<RosVServerGroup.BackendServersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosVServerGroup.TagsProperty[] | undefined;
    /**
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
         * @Property type: The instance type of the backend server. This parameter must be set to a string. Valid values:
     * ecs: ECS instance. This is the default value.
     * eni: ENI.
     * eci: ECI.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property description: The description of the backend server. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (\/), periods (.), and underscores (_).
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property serverId: The ID of the backend server. You can specify the ID of an Elastic Compute Service (ECS) instance,an elastic network interface (ENI) or elastic container instance (ECI).
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property serverIp: The IP address of an ECS instance, ENI or ECI
         */
        readonly serverIp?: string | ros.IResolvable;
        /**
         * @Property port: The port of backend server. From 1 to 65535.
         */
        readonly port: number | ros.IResolvable;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight?: number | ros.IResolvable;
    }
}
export declare namespace RosVServerGroup {
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
