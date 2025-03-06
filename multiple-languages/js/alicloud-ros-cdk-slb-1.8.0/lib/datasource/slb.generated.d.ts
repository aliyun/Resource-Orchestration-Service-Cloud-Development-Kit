import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccessControl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrol
 */
export interface RosAccessControlProps {
    /**
     * @Property aclId: The ID of the ACL.
     */
    readonly aclId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::AccessControl`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessControl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrol
 */
export declare class RosAccessControl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::AccessControl";
    /**
     * @Attribute AclEntries: The IP entries that you want to remove from the network ACL.
     */
    readonly attrAclEntries: ros.IResolvable;
    /**
     * @Attribute AclId: The ID of the ACL.
     */
    readonly attrAclId: ros.IResolvable;
    /**
     * @Attribute AclName: The ACL name.
     */
    readonly attrAclName: ros.IResolvable;
    /**
     * @Attribute AddressIpVersion: The IP version. Valid values: ipv4 and ipv6.
     */
    readonly attrAddressIpVersion: ros.IResolvable;
    /**
     * @Attribute RelatedListeners: The listeners that are associated with the network ACL.
     */
    readonly attrRelatedListeners: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The resource group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the resource.
     */
    readonly attrTags: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aclId: The ID of the ACL.
     */
    aclId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
/**
 * Properties for defining a `RosAccessControls`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrols
 */
export interface RosAccessControlsProps {
    /**
     * @Property aclName: The name of the network ACL.
     */
    readonly aclName?: string | ros.IResolvable;
    /**
     * @Property addressIpVersion: The IP version. Valid values: ipv4 and ipv6.
     */
    readonly addressIpVersion?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the network ACL belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::AccessControls`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessControls` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrols
 */
export declare class RosAccessControls extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::AccessControls";
    /**
     * @Attribute AccessControls: The list of access controls.
     */
    readonly attrAccessControls: ros.IResolvable;
    /**
     * @Attribute AclIds: The list of acl IDs.
     */
    readonly attrAclIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aclName: The name of the network ACL.
     */
    aclName: string | ros.IResolvable | undefined;
    /**
     * @Property addressIpVersion: The IP version. Valid values: ipv4 and ipv6.
     */
    addressIpVersion: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the network ACL belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessControlsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDomainExtension`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextension
 */
export interface RosDomainExtensionProps {
    /**
     * @Property domainExtensionId: The ID of the additional certificate.
     */
    readonly domainExtensionId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::DomainExtension`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DomainExtension` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextension
 */
export declare class RosDomainExtension extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::DomainExtension";
    /**
     * @Attribute Domain: The domain name.
     */
    readonly attrDomain: ros.IResolvable;
    /**
     * @Attribute DomainExtensionId: The ID of the additional certificate.
     */
    readonly attrDomainExtensionId: ros.IResolvable;
    /**
     * @Attribute ListenerPort: The frontend port of the HTTPS listener that is configured for the SLB instance. Valid values: 1 to 65535.
     */
    readonly attrListenerPort: ros.IResolvable;
    /**
     * @Attribute LoadBalancerId: The ID of the SLB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    /**
     * @Attribute ServerCertificateId: The ID of the server certificate that is used by the domain name.
     */
    readonly attrServerCertificateId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainExtensionId: The ID of the additional certificate.
     */
    domainExtensionId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosDomainExtensions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextensions
 */
export interface RosDomainExtensionsProps {
    /**
     * @Property listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance.
     * Valid values: 1 to 65535.
     */
    readonly listenerPort: number | ros.IResolvable;
    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * @Property domainExtensionId: The ID of the additional certificate.
     */
    readonly domainExtensionId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::DomainExtensions`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DomainExtensions` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextensions
 */
export declare class RosDomainExtensions extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::DomainExtensions";
    /**
     * @Attribute DomainExtensionIds: The list of domain extension IDs.
     */
    readonly attrDomainExtensionIds: ros.IResolvable;
    /**
     * @Attribute DomainExtensions: The list of domain extensions.
     */
    readonly attrDomainExtensions: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance.
     * Valid values: 1 to 65535.
     */
    listenerPort: number | ros.IResolvable;
    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    loadBalancerId: string | ros.IResolvable;
    /**
     * @Property domainExtensionId: The ID of the additional certificate.
     */
    domainExtensionId: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainExtensionsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosLoadBalancer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancer
 */
export interface RosLoadBalancerProps {
    /**
     * @Property loadBalancerId: The CLB instance ID.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::LoadBalancer`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoadBalancer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancer
 */
export declare class RosLoadBalancer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::LoadBalancer";
    /**
     * @Attribute Address: The service IP address of the CLB instance.
     */
    readonly attrAddress: ros.IResolvable;
    /**
     * @Attribute AddressIpVersion: The version of the IP address. Valid values: ipv4 and ipv6.
     */
    readonly attrAddressIpVersion: ros.IResolvable;
    /**
     * @Attribute AddressType: The address type of the CLB instance.
     */
    readonly attrAddressType: ros.IResolvable;
    /**
     * @Attribute AutoReleaseTime: The timestamp generated when the CLB instance is released.
     */
    readonly attrAutoReleaseTime: ros.IResolvable;
    /**
     * @Attribute BackendServers: The backend servers of the CLB instance.
     */
    readonly attrBackendServers: ros.IResolvable;
    /**
     * @Attribute Bandwidth: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the CLB instance was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute CreateTimeStamp: The timestamp generated when the CA certificate is uploaded.
     */
    readonly attrCreateTimeStamp: ros.IResolvable;
    /**
     * @Attribute DeleteProtection: Indicates whether deletion protection is enabled for the CLB instance.
     */
    readonly attrDeleteProtection: ros.IResolvable;
    /**
     * @Attribute EndTime: The time when the CLB instance expires.
     */
    readonly attrEndTime: ros.IResolvable;
    /**
     * @Attribute EndTimeStamp: The timestamp that indicates the expiration time of the CLB instance.
     */
    readonly attrEndTimeStamp: ros.IResolvable;
    /**
     * @Attribute InstanceChargeType: Instance billing method.
     */
    readonly attrInstanceChargeType: ros.IResolvable;
    /**
     * @Attribute InternetChargeType: The metering method of the Internet-facing CLB instance.
     */
    readonly attrInternetChargeType: ros.IResolvable;
    /**
     * @Attribute ListenerPortsAndProtocal: The ports or protocols of the listeners.
     */
    readonly attrListenerPortsAndProtocal: ros.IResolvable;
    /**
     * @Attribute ListenerPortsAndProtocol: The ports or protocols of the listeners.
     */
    readonly attrListenerPortsAndProtocol: ros.IResolvable;
    /**
     * @Attribute LoadBalancerId: The CLB instance ID.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    /**
     * @Attribute LoadBalancerName: The name of the CLB instance.
     */
    readonly attrLoadBalancerName: ros.IResolvable;
    /**
     * @Attribute LoadBalancerSpec: The specification of the CLB instance.
     */
    readonly attrLoadBalancerSpec: ros.IResolvable;
    /**
     * @Attribute MasterZoneId: The ID of the primary zone to which the CLB instance belongs.
     */
    readonly attrMasterZoneId: ros.IResolvable;
    /**
     * @Attribute ModificationProtectionReason: The reason why the configuration read-only mode is enabled.
     */
    readonly attrModificationProtectionReason: ros.IResolvable;
    /**
     * @Attribute ModificationProtectionStatus: Load balancing modifies the protection state.
     */
    readonly attrModificationProtectionStatus: ros.IResolvable;
    /**
     * @Attribute NetworkType: The network type of the CLB instance.
     */
    readonly attrNetworkType: ros.IResolvable;
    /**
     * @Attribute PaymentType: Load balancing instance payment type.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute RegionIdAlias: The alias of the region to which the CLB instance belongs.
     */
    readonly attrRegionIdAlias: ros.IResolvable;
    /**
     * @Attribute RenewalCycUnit: The auto-renewal cycle. Valid values: Year and Month. Default value: Month.
     */
    readonly attrRenewalCycUnit: ros.IResolvable;
    /**
     * @Attribute RenewalDuration: The auto-renewal duration. This parameter is valid only if RenewalStatus is set to AutoRenewal.
     */
    readonly attrRenewalDuration: ros.IResolvable;
    /**
     * @Attribute RenewalStatus: Indicates whether auto-renewal is enabled.
     */
    readonly attrRenewalStatus: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The resource group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SlaveZoneId: The ID of the secondary zone to which the CLB instance belongs.
     */
    readonly attrSlaveZoneId: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the CLB instance.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The ID of the vSwitch to which the internal-facing CLB instance belongs.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property loadBalancerId: The CLB instance ID.
     */
    loadBalancerId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
/**
 * Properties for defining a `RosLoadBalancerTCPListener`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplistener
 */
export interface RosLoadBalancerTCPListenerProps {
    /**
     * @Property listenerPort: The frontend port used by the CLB instance.Valid values: 1 to 65535.
     */
    readonly listenerPort: number | ros.IResolvable;
    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::LoadBalancerTCPListener`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoadBalancerTCPListener` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplistener
 */
export declare class RosLoadBalancerTCPListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::LoadBalancerTCPListener";
    /**
     * @Attribute AclId: The ID of the network ACL that is associated with the listener.
     */
    readonly attrAclId: ros.IResolvable;
    /**
     * @Attribute AclIds: The ID list of the network ACL that is associated with the listener.
     */
    readonly attrAclIds: ros.IResolvable;
    /**
     * @Attribute AclStatus: Indicates whether access control is enabled.
     */
    readonly attrAclStatus: ros.IResolvable;
    /**
     * @Attribute AclType: The type of the ACL.
     */
    readonly attrAclType: ros.IResolvable;
    /**
     * @Attribute BackendServerPort: The backend port used by the CLB instance.
     */
    readonly attrBackendServerPort: ros.IResolvable;
    /**
     * @Attribute Bandwidth: The maximum bandwidth of the listener. Unit: Mbit/s.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * @Attribute ConnectionDrain: Indicates whether connection draining is enabled. If ConnectionDrain is set to on, the parameter is returned.
     */
    readonly attrConnectionDrain: ros.IResolvable;
    /**
     * @Attribute ConnectionDrainTimeout: The timeout period of connection draining. If ConnectionDrain is set to on, the parameter is returned.
     */
    readonly attrConnectionDrainTimeout: ros.IResolvable;
    /**
     * @Attribute Description: The description of the listener.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute EstablishedTimeout: The timeout period of a connection.
     */
    readonly attrEstablishedTimeout: ros.IResolvable;
    /**
     * @Attribute HealthCheck: Indicates whether the health check feature is enabled.
     */
    readonly attrHealthCheck: ros.IResolvable;
    /**
     * @Attribute HealthCheckConnectPort: The port that is used for health checks.
     */
    readonly attrHealthCheckConnectPort: ros.IResolvable;
    /**
     * @Attribute HealthCheckConnectTimeout: The timeout period. Unit: seconds.
     */
    readonly attrHealthCheckConnectTimeout: ros.IResolvable;
    /**
     * @Attribute HealthCheckDomain: The domain name that is used for health checks.
     */
    readonly attrHealthCheckDomain: ros.IResolvable;
    /**
     * @Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.
     */
    readonly attrHealthCheckHttpCode: ros.IResolvable;
    /**
     * @Attribute HealthCheckInterval: The interval between two consecutive health checks. Valid values: 1 to 50. Unit: seconds.
     */
    readonly attrHealthCheckInterval: ros.IResolvable;
    /**
     * @Attribute HealthCheckMethod: The health check method.
     */
    readonly attrHealthCheckMethod: ros.IResolvable;
    /**
     * @Attribute HealthCheckType: The health check method that is used by the TCP listener.
     */
    readonly attrHealthCheckType: ros.IResolvable;
    /**
     * @Attribute HealthCheckUri: The URL that is used for health checks.
     */
    readonly attrHealthCheckUri: ros.IResolvable;
    /**
     * @Attribute HealthyThreshold: The healthy threshold. The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
     */
    readonly attrHealthyThreshold: ros.IResolvable;
    /**
     * @Attribute ListenerPort: The frontend port used by the CLB instance.
     */
    readonly attrListenerPort: ros.IResolvable;
    /**
     * @Attribute LoadBalancerId: The ID of the CLB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    /**
     * @Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.
     */
    readonly attrMasterSlaveServerGroupId: ros.IResolvable;
    /**
     * @Attribute PersistenceTimeout: The timeout period of session persistence.
     */
    readonly attrPersistenceTimeout: ros.IResolvable;
    /**
     * @Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.
     */
    readonly attrProxyProtocolV2Enabled: ros.IResolvable;
    /**
     * @Attribute Scheduler: The scheduling algorithm.
     */
    readonly attrScheduler: ros.IResolvable;
    /**
     * @Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.
     */
    readonly attrSynProxy: ros.IResolvable;
    /**
     * @Attribute UnhealthyThreshold: The unhealthy threshold. The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
     */
    readonly attrUnhealthyThreshold: ros.IResolvable;
    /**
     * @Attribute VServerGroupId: The ID of the associated server group.
     */
    readonly attrVServerGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property listenerPort: The frontend port used by the CLB instance.Valid values: 1 to 65535.
     */
    listenerPort: number | ros.IResolvable;
    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    loadBalancerId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerTCPListenerProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosLoadBalancerTCPListeners`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplisteners
 */
export interface RosLoadBalancerTCPListenersProps {
    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::LoadBalancerTCPListeners`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoadBalancerTCPListeners` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplisteners
 */
export declare class RosLoadBalancerTCPListeners extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::LoadBalancerTCPListeners";
    /**
     * @Attribute ListenerPorts: The list of listener ports.
     */
    readonly attrListenerPorts: ros.IResolvable;
    /**
     * @Attribute LoadBalancerTCPListeners: The list of load balancer tcp listeners.
     */
    readonly attrLoadBalancerTcpListeners: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    loadBalancerId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerTCPListenersProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosLoadBalancers`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancers
 */
export interface RosLoadBalancersProps {
    /**
     * @Property address: The service address of the load balancing instance.
     */
    readonly address?: string | ros.IResolvable;
    /**
     * @Property addressIpVersion: IP version.
     */
    readonly addressIpVersion?: string | ros.IResolvable;
    /**
     * @Property addressType: The address type of the load balancing instance.
     */
    readonly addressType?: string | ros.IResolvable;
    /**
     * @Property internetChargeType: Public network type instance payment method.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * @Property loadBalancerId: ID of the load balancing instance.
     */
    readonly loadBalancerId?: string | ros.IResolvable;
    /**
     * @Property loadBalancerName: Name of the load balancing instance.
     */
    readonly loadBalancerName?: string | ros.IResolvable;
    /**
     * @Property masterZoneId: ID of the primary available area of the load balancing instance.
     */
    readonly masterZoneId?: string | ros.IResolvable;
    /**
     * @Property networkType: The network type of the private network load balancing instance
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * @Property paymentType: Load balancing instance payment type
     */
    readonly paymentType?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property slaveZoneId: ID of the ready-to-use zone of the load balancing instance.
     */
    readonly slaveZoneId?: string | ros.IResolvable;
    /**
     * @Property status: The status of SLB.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the switch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::LoadBalancers`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoadBalancers` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancers
 */
export declare class RosLoadBalancers extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::LoadBalancers";
    /**
     * @Attribute LoadBalancerIds: The list of load balancer IDs.
     */
    readonly attrLoadBalancerIds: ros.IResolvable;
    /**
     * @Attribute LoadBalancers: The list of load balancers.
     */
    readonly attrLoadBalancers: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property address: The service address of the load balancing instance.
     */
    address: string | ros.IResolvable | undefined;
    /**
     * @Property addressIpVersion: IP version.
     */
    addressIpVersion: string | ros.IResolvable | undefined;
    /**
     * @Property addressType: The address type of the load balancing instance.
     */
    addressType: string | ros.IResolvable | undefined;
    /**
     * @Property internetChargeType: Public network type instance payment method.
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerId: ID of the load balancing instance.
     */
    loadBalancerId: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerName: Name of the load balancing instance.
     */
    loadBalancerName: string | ros.IResolvable | undefined;
    /**
     * @Property masterZoneId: ID of the primary available area of the load balancing instance.
     */
    masterZoneId: string | ros.IResolvable | undefined;
    /**
     * @Property networkType: The network type of the private network load balancing instance
     */
    networkType: string | ros.IResolvable | undefined;
    /**
     * @Property paymentType: Load balancing instance payment type
     */
    paymentType: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property slaveZoneId: ID of the ready-to-use zone of the load balancing instance.
     */
    slaveZoneId: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of SLB.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: VPC ID
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the switch.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancersProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rule
 */
export interface RosRuleProps {
    /**
     * @Property ruleId: The ID of the forwarding rule.
     */
    readonly ruleId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::Rule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Rule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rule
 */
export declare class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::Rule";
    /**
     * @Attribute Cookie: The cookie to be configured on the backend server.
     */
    readonly attrCookie: ros.IResolvable;
    /**
     * @Attribute CookieTimeout: The timeout period of a cookie.
     */
    readonly attrCookieTimeout: ros.IResolvable;
    /**
     * @Attribute Domain: The domain name that is configured in the forwarding rule.
     */
    readonly attrDomain: ros.IResolvable;
    /**
     * @Attribute HealthCheck: Specifies whether to enable health checks.
     */
    readonly attrHealthCheck: ros.IResolvable;
    /**
     * @Attribute HealthCheckConnectPort: The port of the backend server that is used for health checks. Valid values: 1 to 65535.
     */
    readonly attrHealthCheckConnectPort: ros.IResolvable;
    /**
     * @Attribute HealthCheckDomain: The domain name that is used for health checks. Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
     */
    readonly attrHealthCheckDomain: ros.IResolvable;
    /**
     * @Attribute HealthCheckHttpCode: The HTTP status code that indicates a successful health check. Separate multiple HTTP status codes with commas (,). Default value: http_2xx.
     */
    readonly attrHealthCheckHttpCode: ros.IResolvable;
    /**
     * @Attribute HealthCheckInterval: The time interval between two consecutive health checks.
     */
    readonly attrHealthCheckInterval: ros.IResolvable;
    /**
     * @Attribute HealthCheckTimeout: The timeout period of a health check response. If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.
     */
    readonly attrHealthCheckTimeout: ros.IResolvable;
    /**
     * @Attribute HealthCheckUri: The URI that is used for health checks.
     */
    readonly attrHealthCheckUri: ros.IResolvable;
    /**
     * @Attribute HealthyThreshold: The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy. In this case, the health check state is changed from fail to success.
     */
    readonly attrHealthyThreshold: ros.IResolvable;
    /**
     * @Attribute ListenerPort: The listener port that is used by the SLB instance.
     */
    readonly attrListenerPort: ros.IResolvable;
    /**
     * @Attribute ListenerSync: Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.
     */
    readonly attrListenerSync: ros.IResolvable;
    /**
     * @Attribute LoadBalancerId: The ID of the SLB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    /**
     * @Attribute RuleId: The ID of the forwarding rule.
     */
    readonly attrRuleId: ros.IResolvable;
    /**
     * @Attribute RuleName: The name of the forwarding rule.
     */
    readonly attrRuleName: ros.IResolvable;
    /**
     * @Attribute Scheduler: The scheduling algorithm.
     */
    readonly attrScheduler: ros.IResolvable;
    /**
     * @Attribute StickySession: Indicates whether session persistence is enabled.  Valid values: on and off.
     */
    readonly attrStickySession: ros.IResolvable;
    /**
     * @Attribute StickySessionType: The method that is used to handle a cookie.
     */
    readonly attrStickySessionType: ros.IResolvable;
    /**
     * @Attribute UnhealthyThreshold: The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy. In this case, the health check state is changed from success to fail.
     */
    readonly attrUnhealthyThreshold: ros.IResolvable;
    /**
     * @Attribute Url: The URL that is configured in the forwarding rule.
     */
    readonly attrUrl: ros.IResolvable;
    /**
     * @Attribute VserverGroupId: The ID of the vServer group that is associated with the forwarding rule.
     */
    readonly attrVserverGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ruleId: The ID of the forwarding rule.
     */
    ruleId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
/**
 * Properties for defining a `RosRules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rules
 */
export interface RosRulesProps {
    /**
     * @Property listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance.
     */
    readonly listenerPort: string | ros.IResolvable;
    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * @Property listenerProtocol: The frontend listener protocol that is used by the SLB instance.
     */
    readonly listenerProtocol?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::Rules`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Rules` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rules
 */
export declare class RosRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::Rules";
    /**
     * @Attribute RuleIds: The list of rule IDs.
     */
    readonly attrRuleIds: ros.IResolvable;
    /**
     * @Attribute Rules: The list of rules.
     */
    readonly attrRules: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance.
     */
    listenerPort: string | ros.IResolvable;
    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    loadBalancerId: string | ros.IResolvable;
    /**
     * @Property listenerProtocol: The frontend listener protocol that is used by the SLB instance.
     */
    listenerProtocol: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRulesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosTLSPolicies`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicies
 */
export interface RosTLSPoliciesProps {
    /**
     * @Property instanceId: The ID of the TLS policy.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property tlsPolicyName: The name of the TLS policy. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly tlsPolicyName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::TLSPolicies`.
 * @Note This class does not contain additional functions, so it is recommended to use the `TLSPolicies` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicies
 */
export declare class RosTLSPolicies extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::TLSPolicies";
    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute TLSPolicies: The list of tls policies.
     */
    readonly attrTlsPolicies: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the TLS policy.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property tlsPolicyName: The name of the TLS policy. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    tlsPolicyName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTLSPoliciesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosTLSPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicy
 */
export interface RosTLSPolicyProps {
    /**
     * @Property instanceId: The ID of the TLS policy.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::TLSPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `TLSPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicy
 */
export declare class RosTLSPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::TLSPolicy";
    /**
     * @Attribute Ciphers: The cipher suites supported by the TLS version.
     */
    readonly attrCiphers: ros.IResolvable;
    /**
     * @Attribute CreateTime: The timestamp generated when the TLS policy is created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the TLS policy.
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
     * @Property instanceId: The ID of the TLS policy.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroup
 */
export interface RosVServerGroupProps {
    /**
     * @Property vServerGroupId: The ID of the vServer group.
     */
    readonly vServerGroupId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::VServerGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VServerGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroup
 */
export declare class RosVServerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::VServerGroup";
    /**
     * @Attribute BackendServers: The list of backend servers.
     */
    readonly attrBackendServers: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the CLB instance was created. The time follows the YYYY-MM-DDThh:mm:ssZ format.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute LoadBalancerId: The ID of the CLB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    /**
     * @Attribute VServerGroupId: The ID of the vServer group.
     */
    readonly attrVServerGroupId: ros.IResolvable;
    /**
     * @Attribute VServerGroupName: The name of the vServer group.
     */
    readonly attrVServerGroupName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vServerGroupId: The ID of the vServer group.
     */
    vServerGroupId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
/**
 * Properties for defining a `RosVServerGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroups
 */
export interface RosVServerGroupsProps {
    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::VServerGroups`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VServerGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroups
 */
export declare class RosVServerGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::VServerGroups";
    /**
     * @Attribute VServerGroupIds: The list of VServer group IDs.
     */
    readonly attrVServerGroupIds: ros.IResolvable;
    /**
     * @Attribute VServerGroups: The list of VServer groups.
     */
    readonly attrVServerGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    loadBalancerId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVServerGroupsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosZones`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-zones
 */
export interface RosZonesProps {
    /**
     * @Property addressIpVersion: The type of IP address.
     * Valid values: ipv4 and ipv6.
     */
    readonly addressIpVersion?: string | ros.IResolvable;
    /**
     * @Property addressType: The type of network.Valid values: vpc, classic_internet, and classic_intranet..
     * vpc: an internal SLB instance that is deployed in a virtual private cloud (VPC).
     * classic_internet: a public-facing SLB instance.
     * classic_intranet: an internal SLB instance that is deployed in a classic network.
     */
    readonly addressType?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::Zones`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Zones` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-zones
 */
export declare class RosZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLB::Zones";
    /**
     * @Attribute ZoneIds: The list of The primary zone Ids.
     */
    readonly attrZoneIds: ros.IResolvable;
    /**
     * @Attribute Zones: The list of The Zones.
     */
    readonly attrZones: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property addressIpVersion: The type of IP address.
     * Valid values: ipv4 and ipv6.
     */
    addressIpVersion: string | ros.IResolvable | undefined;
    /**
     * @Property addressType: The type of network.Valid values: vpc, classic_internet, and classic_intranet..
     * vpc: an internal SLB instance that is deployed in a virtual private cloud (VPC).
     * classic_internet: a public-facing SLB instance.
     * classic_intranet: an internal SLB instance that is deployed in a classic network.
     */
    addressType: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZonesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
