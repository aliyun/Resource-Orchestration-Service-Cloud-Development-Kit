import * as ros from '@alicloud/ros-cdk-core';
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
     * @Property resourceGroupId: The ID of the resource group to which the network ACL belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::AccessControls`, which is used to query created access control lists (ACLs).
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
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::DomainExtensions`, which is used to query the domain name extensions that are added to a listener of a Server Load Balancer (SLB) instance.
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::LoadBalancers`, which is used to query created Classic Load Balancer (CLB) instances.
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
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::Rules`, which is used to query the forwarding rules that are configured for a listener.
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
     * @Property tlsPolicyName: The name of the TLS policy. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly tlsPolicyName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::TLSPolicies`, which is used to query Transport Layer Security (TLS) policies.
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
 * Properties for defining a `RosVServerGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroups
 */
export interface RosVServerGroupsProps {
    /**
     * @Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::VServerGroups`, which is used to query the server groups of a Classic Load Balancer (CLB) instance.
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
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::Zones`, which is used to query the zones in which Server Load Balancer (SLB) instances are deployed.
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
