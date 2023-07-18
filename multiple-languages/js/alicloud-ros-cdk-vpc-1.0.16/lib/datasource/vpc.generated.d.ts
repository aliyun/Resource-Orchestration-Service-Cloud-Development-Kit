import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::EIP::Addresses`
 */
export interface RosAddressesProps {
    /**
     * @Property addressName: The name of the EIP.
     */
    readonly addressName?: string | ros.IResolvable;
    /**
     * @Property allocationId: The ID of the EIP that you want to query.
     */
    readonly allocationId?: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the cloud resource.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property instanceType: The type of the current bound instance.
     * - **EcsInstance**: an ECS instance of the VPC type.
     * - **SlbInstance**: an SLB instance of the VPC type.
     * - **Nat**:NAT gateway.
     * - **HaVip**: a highly available virtual IP address.
     * - **NetworkInterface**: Secondary ENI.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * @Property ipAddress: The IP address pool to which the EIP that you want to query belongs.
     */
    readonly ipAddress?: string | ros.IResolvable;
    /**
     * @Property isp: The line type. Valid values:
     * BGP (default): BGP (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
     * BGP_PRO: BGP (Multi-ISP) Pro lines.
     * Only the following regions support BGP (Multi-ISP) Pro lines:
     * China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
     * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
     * If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
     * ChinaTelecom: China Telecom
     * ChinaUnicom: China Unicom
     * ChinaMobile: China Mobile
     * ChinaTelecom_L2: China Telecom L2
     * ChinaUnicom_L2: China Unicom L2
     * ChinaMobile_L2: China Mobile L2
     * If your services are deployed in China East 1 Finance, you must set this parameter to BGP_FinanceCloud.
     */
    readonly isp?: string | ros.IResolvable;
    /**
     * @Property paymentType: The billing method of the EIP. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    readonly paymentType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the EIPs belong.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property segmentInstanceId: The ID of the consecutive EIPs.
     * This parameter value is returned only if the EIP is a continuous EIP.
     */
    readonly segmentInstanceId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::EIP::Addresses`
 */
export declare class RosAddresses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EIP::Addresses";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Addresses: The details about the EIP
     */
    readonly attrAddresses: ros.IResolvable;
    /**
     * @Attribute AllocationIds: The list of allocation IDs.
     */
    readonly attrAllocationIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property addressName: The name of the EIP.
     */
    addressName: string | ros.IResolvable | undefined;
    /**
     * @Property allocationId: The ID of the EIP that you want to query.
     */
    allocationId: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: The ID of the cloud resource.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property instanceType: The type of the current bound instance.
     * - **EcsInstance**: an ECS instance of the VPC type.
     * - **SlbInstance**: an SLB instance of the VPC type.
     * - **Nat**:NAT gateway.
     * - **HaVip**: a highly available virtual IP address.
     * - **NetworkInterface**: Secondary ENI.
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @Property ipAddress: The IP address pool to which the EIP that you want to query belongs.
     */
    ipAddress: string | ros.IResolvable | undefined;
    /**
     * @Property isp: The line type. Valid values:
     * BGP (default): BGP (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
     * BGP_PRO: BGP (Multi-ISP) Pro lines.
     * Only the following regions support BGP (Multi-ISP) Pro lines:
     * China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
     * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
     * If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
     * ChinaTelecom: China Telecom
     * ChinaUnicom: China Unicom
     * ChinaMobile: China Mobile
     * ChinaTelecom_L2: China Telecom L2
     * ChinaUnicom_L2: China Unicom L2
     * ChinaMobile_L2: China Mobile L2
     * If your services are deployed in China East 1 Finance, you must set this parameter to BGP_FinanceCloud.
     */
    isp: string | ros.IResolvable | undefined;
    /**
     * @Property paymentType: The billing method of the EIP. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    paymentType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the EIPs belong.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property segmentInstanceId: The ID of the consecutive EIPs.
     * This parameter value is returned only if the EIP is a continuous EIP.
     */
    segmentInstanceId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::EIP::Addresses`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAddressesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::VPC::CommonBandwidthPackages`
 */
export interface RosCommonBandwidthPackagesProps {
    /**
     * @Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    readonly commonBandwidthPackageId?: string | ros.IResolvable;
    /**
     * @Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    readonly commonBandwidthPackageName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::VPC::CommonBandwidthPackages`
 */
export declare class RosCommonBandwidthPackages extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::CommonBandwidthPackages";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CommonBandwidthPackageIds: The list of common bandwidth package IDs.
     */
    readonly attrCommonBandwidthPackageIds: ros.IResolvable;
    /**
     * @Attribute CommonBandwidthPackages: The list of common bandwidth packages.
     */
    readonly attrCommonBandwidthPackages: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    commonBandwidthPackageId: string | ros.IResolvable | undefined;
    /**
     * @Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    commonBandwidthPackageName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::VPC::CommonBandwidthPackages`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCommonBandwidthPackagesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::VPC::CustomerGateways`
 */
export interface RosCustomerGatewaysProps {
    /**
     * @Property customerGatewayId: The ID of the customer gateway.
     */
    readonly customerGatewayId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::VPC::CustomerGateways`
 */
export declare class RosCustomerGateways extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::CustomerGateways";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CustomerGatewayIds: The list of customer gateway IDs.
     */
    readonly attrCustomerGatewayIds: ros.IResolvable;
    /**
     * @Attribute CustomerGateways: The list of customer gateways.
     */
    readonly attrCustomerGateways: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property customerGatewayId: The ID of the customer gateway.
     */
    customerGatewayId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::VPC::CustomerGateways`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomerGatewaysProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::VPC::FlowLogs`
 */
export interface RosFlowLogsProps {
    /**
     * @Property description: The description of the flow log.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property flowLogId: The ID of a flow log.
     */
    readonly flowLogId?: string | ros.IResolvable;
    /**
     * @Property flowLogName: The name of the flow log.
     */
    readonly flowLogName?: string | ros.IResolvable;
    /**
     * @Property logStoreName: A LogStore that stores captured traffic.
     */
    readonly logStoreName?: string | ros.IResolvable;
    /**
     * @Property projectName: Manage the captured traffic of the Project.
     */
    readonly projectName?: string | ros.IResolvable;
    /**
     * @Property resourceId: The ID of the resource group to which the flow log belongs.
     */
    readonly resourceId?: string | ros.IResolvable;
    /**
     * @Property resourceType: The resource type of traffic to capture. Value:
     * NetworkInterface: Elastic NIC.
     * VSwitch: All ENIs within the VSwitch.
     * VPC: All ENIs in a VPC.
     */
    readonly resourceType?: string | ros.IResolvable;
    /**
     * @Property trafficType: The type of traffic collected. Value:
     * All: All traffic.
     * Allow: Traffic allowed by access control.
     * Drop: Traffic denied by access control.
     */
    readonly trafficType?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::VPC::FlowLogs`
 */
export declare class RosFlowLogs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::FlowLogs";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute FlowLogIds: The list of flow log IDs.
     */
    readonly attrFlowLogIds: ros.IResolvable;
    /**
     * @Attribute FlowLogs: The list of flow logs.
     */
    readonly attrFlowLogs: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: The description of the flow log.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property flowLogId: The ID of a flow log.
     */
    flowLogId: string | ros.IResolvable | undefined;
    /**
     * @Property flowLogName: The name of the flow log.
     */
    flowLogName: string | ros.IResolvable | undefined;
    /**
     * @Property logStoreName: A LogStore that stores captured traffic.
     */
    logStoreName: string | ros.IResolvable | undefined;
    /**
     * @Property projectName: Manage the captured traffic of the Project.
     */
    projectName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceId: The ID of the resource group to which the flow log belongs.
     */
    resourceId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceType: The resource type of traffic to capture. Value:
     * NetworkInterface: Elastic NIC.
     * VSwitch: All ENIs within the VSwitch.
     * VPC: All ENIs in a VPC.
     */
    resourceType: string | ros.IResolvable | undefined;
    /**
     * @Property trafficType: The type of traffic collected. Value:
     * All: All traffic.
     * Allow: Traffic allowed by access control.
     * Drop: Traffic denied by access control.
     */
    trafficType: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::VPC::FlowLogs`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowLogsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::VPC::HaVips`
 */
export interface RosHaVipsProps {
    /**
     * @Property haVipId: The  ID of the resource
     */
    readonly haVipId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::VPC::HaVips`
 */
export declare class RosHaVips extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::HaVips";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute HaVipIds: The list of ha vip IDs.
     */
    readonly attrHaVipIds: ros.IResolvable;
    /**
     * @Attribute HaVips: The list of ha vips.
     */
    readonly attrHaVips: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property haVipId: The  ID of the resource
     */
    haVipId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::VPC::HaVips`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHaVipsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::VPC::Ipv4Gateways`
 */
export interface RosIpv4GatewaysProps {
    /**
     * @Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    readonly ipv4GatewayId?: string | ros.IResolvable;
    /**
     * @Property ipv4GatewayName: Resource name.
     */
    readonly ipv4GatewayName?: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::VPC::Ipv4Gateways`
 */
export declare class RosIpv4Gateways extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::Ipv4Gateways";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Ipv4GatewayIds: The list of ipv4 gateway IDs.
     */
    readonly attrIpv4GatewayIds: ros.IResolvable;
    /**
     * @Attribute Ipv4Gateways: The list of ipv4 gateways.
     */
    readonly attrIpv4Gateways: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    ipv4GatewayId: string | ros.IResolvable | undefined;
    /**
     * @Property ipv4GatewayName: Resource name.
     */
    ipv4GatewayName: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::VPC::Ipv4Gateways`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpv4GatewaysProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::VPC::NatGatewayZones`
 */
export interface RosNatGatewayZonesProps {
}
/**
 * A ROS template type:  `DATASOURCE::VPC::NatGatewayZones`
 */
export declare class RosNatGatewayZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NatGatewayZones";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ZoneIds: The list of The Zone Ids.
     */
    readonly attrZoneIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * Create a new `DATASOURCE::VPC::NatGatewayZones`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNatGatewayZonesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::VPC::NatGateways`
 */
export interface RosNatGatewaysProps {
    /**
     * @Property instanceChargeType: The billing method of the NAT gateway. Set the value to PostPaid, which specifies the pay-as-you-go billing method.
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property name: The name of the NAT gateway.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property natGatewayId: The ID of the NAT gateway.
     */
    readonly natGatewayId?: string | ros.IResolvable;
    /**
     * @Property natType: The type of NAT gateway. Set the value to Enhanced (enhanced NAT gateway).
     */
    readonly natType?: string | ros.IResolvable;
    /**
     * @Property networkType: The type of the NAT gateway. Valid values:
     * internet: an Internet NAT gateway
     *  intranet: a VPC NAT gateway
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the NAT gateway belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property status: The status of the NAT gateway. Valid values:
     * Creating: After you send a request to create a NAT gateway, the system creates the NAT gateway in the background. The NAT gateway remains in the Creating state until the operation is completed.
     *  Available: The NAT gateway remains in a stable state after the NAT gateway is created.
     *  Modifying: After you send a request to modify a NAT gateway, the system modifies the NAT gateway in the background. The NAT gateway remains in the Modifying state until the operation is completed.
     *  Deleting: After you send a request to delete a NAT gateway, the system deletes the NAT gateway in the background. The NAT gateway remains in the Deleting state until the operation is completed.
     *  Converting: After you send a request to upgrade a standard NAT gateway to an enhanced NAT gateway, the system upgrades the NAT gateway in the background. The NAT gateway remains in the Converting state until the operation is completed.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC to which the NAT gateway belongs.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone to which the NAT gateway belongs.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::VPC::NatGateways`
 */
export declare class RosNatGateways extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NatGateways";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute NatGatewayIds: The list of The nat gateway ids.
     */
    readonly attrNatGatewayIds: ros.IResolvable;
    /**
     * @Attribute NatGateways: The list of The nat gateways.
     */
    readonly attrNatGateways: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceChargeType: The billing method of the NAT gateway. Set the value to PostPaid, which specifies the pay-as-you-go billing method.
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the NAT gateway.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property natGatewayId: The ID of the NAT gateway.
     */
    natGatewayId: string | ros.IResolvable | undefined;
    /**
     * @Property natType: The type of NAT gateway. Set the value to Enhanced (enhanced NAT gateway).
     */
    natType: string | ros.IResolvable | undefined;
    /**
     * @Property networkType: The type of the NAT gateway. Valid values:
     * internet: an Internet NAT gateway
     *  intranet: a VPC NAT gateway
     */
    networkType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the NAT gateway belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of the NAT gateway. Valid values:
     * Creating: After you send a request to create a NAT gateway, the system creates the NAT gateway in the background. The NAT gateway remains in the Creating state until the operation is completed.
     *  Available: The NAT gateway remains in a stable state after the NAT gateway is created.
     *  Modifying: After you send a request to modify a NAT gateway, the system modifies the NAT gateway in the background. The NAT gateway remains in the Modifying state until the operation is completed.
     *  Deleting: After you send a request to delete a NAT gateway, the system deletes the NAT gateway in the background. The NAT gateway remains in the Deleting state until the operation is completed.
     *  Converting: After you send a request to upgrade a standard NAT gateway to an enhanced NAT gateway, the system upgrades the NAT gateway in the background. The NAT gateway remains in the Converting state until the operation is completed.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the VPC to which the NAT gateway belongs.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The ID of the zone to which the NAT gateway belongs.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::VPC::NatGateways`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNatGatewaysProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::VPC::NatIpCidrs`
 */
export interface RosNatIpCidrsProps {
    /**
     * @Property natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID.
     */
    readonly natGatewayId: string | ros.IResolvable;
    /**
     * @Property natIpCidr: Create a NAT IP ADDRESS. The new address segment must meet the following conditions: belong to 10.0.0.0/8, 172.16.0.0/12 or 192.168.0.0/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
     */
    readonly natIpCidr?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::VPC::NatIpCidrs`
 */
export declare class RosNatIpCidrs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NatIpCidrs";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute NatIpCidrIds: The list of nat ip cidr IDs.
     */
    readonly attrNatIpCidrIds: ros.IResolvable;
    /**
     * @Attribute NatIpCidrs: The list of nat ip cidrs.
     */
    readonly attrNatIpCidrs: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID.
     */
    natGatewayId: string | ros.IResolvable;
    /**
     * @Property natIpCidr: Create a NAT IP ADDRESS. The new address segment must meet the following conditions: belong to 10.0.0.0/8, 172.16.0.0/12 or 192.168.0.0/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
     */
    natIpCidr: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::VPC::NatIpCidrs`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNatIpCidrsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::VPC::NetworkAcls`
 */
export interface RosNetworkAclsProps {
    /**
     * @Property networkAclId: The ID of the network ACL.
     */
    readonly networkAclId?: string | ros.IResolvable;
    /**
     * @Property networkAclName: The name of the network ACL.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
     */
    readonly networkAclName?: string | ros.IResolvable;
    /**
     * @Property resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set.
     */
    readonly resourceId?: string | ros.IResolvable;
    /**
     * @Property resourceType: The type of the associated instance. Set the value to VSwitch.
     * This parameter is valid only if ResourceType and ResourceId are both set.
     */
    readonly resourceType?: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::VPC::NetworkAcls`
 */
export declare class RosNetworkAcls extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NetworkAcls";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute NetworkAclIds: The list of The network acl ids.
     */
    readonly attrNetworkAclIds: ros.IResolvable;
    /**
     * @Attribute NetworkAcls: The list of The network acls.
     */
    readonly attrNetworkAcls: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property networkAclId: The ID of the network ACL.
     */
    networkAclId: string | ros.IResolvable | undefined;
    /**
     * @Property networkAclName: The name of the network ACL.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
     */
    networkAclName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set.
     */
    resourceId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceType: The type of the associated instance. Set the value to VSwitch.
     * This parameter is valid only if ResourceType and ResourceId are both set.
     */
    resourceType: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::VPC::NetworkAcls`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkAclsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::VPC::PrefixLists`
 */
export interface RosPrefixListsProps {
    /**
     * @Property prefixListName: The name of the prefix list.
     */
    readonly prefixListName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::VPC::PrefixLists`
 */
export declare class RosPrefixLists extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::PrefixLists";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute PrefixListIds: The list of prefix list IDs.
     */
    readonly attrPrefixListIds: ros.IResolvable;
    /**
     * @Attribute PrefixLists: The list of prefix lists.
     */
    readonly attrPrefixLists: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property prefixListName: The name of the prefix list.
     */
    prefixListName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::VPC::PrefixLists`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrefixListsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::VPC::PublicIpAddressPools`
 */
export interface RosPublicIpAddressPoolsProps {
    /**
     * @Property isp: The line type. Valid values:
     * BGP (default): BGP (Multi-ISP) lines
     * BGP_PRO: BGP (Multi-ISP) Pro lines
     * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
     * If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
     * ChinaTelecom: China Telecom
     * ChinaUnicom: China Unicom
     * ChinaMobile: China Mobile
     * ChinaTelecom_L2: China Telecom L2
     * ChinaUnicom_L2: China Unicom L2
     * ChinaMobile_L2: China Mobile L2
     * If your services are deployed in China East 1 Finance,
     * this parameter is required and you must set the value to BGP_FinanceCloud.
     */
    readonly isp?: string | ros.IResolvable;
    /**
     * @Property publicIpAddressPoolName: The name of the IP address pool.
     * This parameter is optional. The name must be 1 to 128 characters in length,
     * and can contain digits, periods (.), underscores (_), and hyphens (-).
     * The name must start with a letter but cannot start with http:// or https://.
     */
    readonly publicIpAddressPoolName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the IP address pool belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::VPC::PublicIpAddressPools`
 */
export declare class RosPublicIpAddressPools extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::PublicIpAddressPools";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute PublicIpAddressPoolIds: The list of public ip address pool IDs.
     */
    readonly attrPublicIpAddressPoolIds: ros.IResolvable;
    /**
     * @Attribute PublicIpAddressPools: The list of public ip address pools.
     */
    readonly attrPublicIpAddressPools: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property isp: The line type. Valid values:
     * BGP (default): BGP (Multi-ISP) lines
     * BGP_PRO: BGP (Multi-ISP) Pro lines
     * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
     * If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
     * ChinaTelecom: China Telecom
     * ChinaUnicom: China Unicom
     * ChinaMobile: China Mobile
     * ChinaTelecom_L2: China Telecom L2
     * ChinaUnicom_L2: China Unicom L2
     * ChinaMobile_L2: China Mobile L2
     * If your services are deployed in China East 1 Finance,
     * this parameter is required and you must set the value to BGP_FinanceCloud.
     */
    isp: string | ros.IResolvable | undefined;
    /**
     * @Property publicIpAddressPoolName: The name of the IP address pool.
     * This parameter is optional. The name must be 1 to 128 characters in length,
     * and can contain digits, periods (.), underscores (_), and hyphens (-).
     * The name must start with a letter but cannot start with http:// or https://.
     */
    publicIpAddressPoolName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the IP address pool belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::VPC::PublicIpAddressPools`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPublicIpAddressPoolsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::VPC::RouteEntries`
 */
export interface RosRouteEntriesProps {
    /**
     * @Property routeTableId: The ID of the route table.
     */
    readonly routeTableId: string | ros.IResolvable;
    /**
     * @Property destinationCidrBlock: The destination CIDR block of the route. IPv4 and IPv6 CIDR blocks are supported.
     */
    readonly destinationCidrBlock?: string | ros.IResolvable;
    /**
     * @Property ipVersion: The IP version. Valid values:
     * IPv4: IPv4
     * IPv6: IPv6
     */
    readonly ipVersion?: string | ros.IResolvable;
    /**
     * @Property nextHopId: The ID of the next hop.
     */
    readonly nextHopId?: string | ros.IResolvable;
    /**
     * @Property nextHopType: The type of the next hop. Valid values:
     * Instance (default): an Elastic Compute Service (ECS) instance
     * HaVip: a high-availability virtual IP address (HAVIP)
     * VpnGateway: a VPN gateway
     * NatGateway: a NAT gateway
     * NetworkInterface: a secondary elastic network interface (ENI)
     * RouterInterface: a router interface
     * IPv6Gateway: an IPv6 gateway
     * Attachment: a transit router
     */
    readonly nextHopType?: string | ros.IResolvable;
    /**
     * @Property routeEntryId: The ID of the route.
     */
    readonly routeEntryId?: string | ros.IResolvable;
    /**
     * @Property routeEntryName: The name of the route.
     */
    readonly routeEntryName?: string | ros.IResolvable;
    /**
     * @Property routeEntryType: The type of the route. Valid values:
     * Custom: a custom route
     * System: a system route
     * BGP: a Border Gateway Protocol (BGP) route
     * CEN: a Cloud Enterprise Network (CEN) route
     */
    readonly routeEntryType?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::VPC::RouteEntries`
 */
export declare class RosRouteEntries extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::RouteEntries";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute RouteEntries: The list of The route entries.
     */
    readonly attrRouteEntries: ros.IResolvable;
    /**
     * @Attribute RouteEntryIds: the list of the route entry ids.
     */
    readonly attrRouteEntryIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property routeTableId: The ID of the route table.
     */
    routeTableId: string | ros.IResolvable;
    /**
     * @Property destinationCidrBlock: The destination CIDR block of the route. IPv4 and IPv6 CIDR blocks are supported.
     */
    destinationCidrBlock: string | ros.IResolvable | undefined;
    /**
     * @Property ipVersion: The IP version. Valid values:
     * IPv4: IPv4
     * IPv6: IPv6
     */
    ipVersion: string | ros.IResolvable | undefined;
    /**
     * @Property nextHopId: The ID of the next hop.
     */
    nextHopId: string | ros.IResolvable | undefined;
    /**
     * @Property nextHopType: The type of the next hop. Valid values:
     * Instance (default): an Elastic Compute Service (ECS) instance
     * HaVip: a high-availability virtual IP address (HAVIP)
     * VpnGateway: a VPN gateway
     * NatGateway: a NAT gateway
     * NetworkInterface: a secondary elastic network interface (ENI)
     * RouterInterface: a router interface
     * IPv6Gateway: an IPv6 gateway
     * Attachment: a transit router
     */
    nextHopType: string | ros.IResolvable | undefined;
    /**
     * @Property routeEntryId: The ID of the route.
     */
    routeEntryId: string | ros.IResolvable | undefined;
    /**
     * @Property routeEntryName: The name of the route.
     */
    routeEntryName: string | ros.IResolvable | undefined;
    /**
     * @Property routeEntryType: The type of the route. Valid values:
     * Custom: a custom route
     * System: a system route
     * BGP: a Border Gateway Protocol (BGP) route
     * CEN: a Cloud Enterprise Network (CEN) route
     */
    routeEntryType: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::VPC::RouteEntries`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRouteEntriesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::VPC::RouteTables`
 */
export interface RosRouteTablesProps {
    /**
     * @Property resourceGroupId: The ID of the resource group to which the route table belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property routerId: The ID of the VRouter to which the route table belongs.
     */
    readonly routerId?: string | ros.IResolvable;
    /**
     * @Property routerType: The type of the VRouter to which the route table belongs. Valid values:
     * VRouter (default): VRouter.
     * VBR: Virtual Border Router (VBR).
     */
    readonly routerType?: string | ros.IResolvable;
    /**
     * @Property routeTableId: The ID of the route table.
     */
    readonly routeTableId?: string | ros.IResolvable;
    /**
     * @Property routeTableName: The name of the route table.
     */
    readonly routeTableName?: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VRouter to which the route table belongs.
     * The value of the RouterType parameter is set to VRouter automatically when this parameter is specified.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::VPC::RouteTables`
 */
export declare class RosRouteTables extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::RouteTables";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute RouteTableIds: the list of the route table ids.
     */
    readonly attrRouteTableIds: ros.IResolvable;
    /**
     * @Attribute RouteTables: The list of The route tables.
     */
    readonly attrRouteTables: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the route table belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property routerId: The ID of the VRouter to which the route table belongs.
     */
    routerId: string | ros.IResolvable | undefined;
    /**
     * @Property routerType: The type of the VRouter to which the route table belongs. Valid values:
     * VRouter (default): VRouter.
     * VBR: Virtual Border Router (VBR).
     */
    routerType: string | ros.IResolvable | undefined;
    /**
     * @Property routeTableId: The ID of the route table.
     */
    routeTableId: string | ros.IResolvable | undefined;
    /**
     * @Property routeTableName: The name of the route table.
     */
    routeTableName: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the VRouter to which the route table belongs.
     * The value of the RouterType parameter is set to VRouter automatically when this parameter is specified.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::VPC::RouteTables`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRouteTablesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::VPC::TrafficMirrorFilters`
 */
export interface RosTrafficMirrorFiltersProps {
    /**
     * @Property trafficMirrorFilterName: The name of the TrafficMirrorFilter.
     */
    readonly trafficMirrorFilterName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::VPC::TrafficMirrorFilters`
 */
export declare class RosTrafficMirrorFilters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::TrafficMirrorFilters";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute TrafficMirrorFilterIds: The list of traffic mirror filter IDs.
     */
    readonly attrTrafficMirrorFilterIds: ros.IResolvable;
    /**
     * @Attribute TrafficMirrorFilters: The list of traffic mirror filters.
     */
    readonly attrTrafficMirrorFilters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property trafficMirrorFilterName: The name of the TrafficMirrorFilter.
     */
    trafficMirrorFilterName: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::VPC::TrafficMirrorFilters`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTrafficMirrorFiltersProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::VPC::VSwitches`
 */
export interface RosVSwitchesProps {
    /**
     * @Property dhcpOptionsSetId: The ID of the DHCP options set.
     */
    readonly dhcpOptionsSetId?: string | ros.IResolvable;
    /**
     * @Property isDefault: Specifies whether to query the default VPC in the specified region. Valid values:
     * true(default): queries all VPCs in the specified region.
     * false: does not query the default VPC.
     */
    readonly isDefault?: boolean | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property routeTableId: The ID of the route table.
     */
    readonly routeTableId?: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC to which the vSwitch belongs.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchIds: The list of The vSwitch IDs.
     * You can specify up to 20 vSwitch IDs.
     */
    readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property vSwitchName: The name of the vSwitch.
     */
    readonly vSwitchName?: string | ros.IResolvable;
    /**
     * @Property vSwitchOwnerId: The ID of the Alibaba Cloud account to which the vSwitch belongs.
     */
    readonly vSwitchOwnerId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::VPC::VSwitches`
 */
export declare class RosVSwitches extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::VSwitches";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute VSwitchIds: The list of The vSwitch Ids.
     */
    readonly attrVSwitchIds: ros.IResolvable;
    /**
     * @Attribute VSwitches: The detailed information about the vSwitches.
     */
    readonly attrVSwitches: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dhcpOptionsSetId: The ID of the DHCP options set.
     */
    dhcpOptionsSetId: string | ros.IResolvable | undefined;
    /**
     * @Property isDefault: Specifies whether to query the default VPC in the specified region. Valid values:
     * true(default): queries all VPCs in the specified region.
     * false: does not query the default VPC.
     */
    isDefault: boolean | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property routeTableId: The ID of the route table.
     */
    routeTableId: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the VPC to which the vSwitch belongs.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchIds: The list of The vSwitch IDs.
     * You can specify up to 20 vSwitch IDs.
     */
    vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property vSwitchName: The name of the vSwitch.
     */
    vSwitchName: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchOwnerId: The ID of the Alibaba Cloud account to which the vSwitch belongs.
     */
    vSwitchOwnerId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::VPC::VSwitches`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVSwitchesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::VPC::Vpcs`
 */
export interface RosVpcsProps {
    /**
     * @Property dhcpOptionsSetId: The ID of the DHCP options set.
     */
    readonly dhcpOptionsSetId?: string | ros.IResolvable;
    /**
     * @Property isDefault: Specifies whether to query the default VPC in the specified region. Valid values:
     * true(default): queries all VPCs in the specified region.
     * false: does not query the default VPC.
     */
    readonly isDefault?: boolean | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property vpcIds: The list of The VPC IDs.
     * You can specify up to 20 VPC IDs.
     */
    readonly vpcIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property vpcName: The name of the VPC.
     */
    readonly vpcName?: string | ros.IResolvable;
    /**
     * @Property vpcOwnerId: The ID of the Alibaba Cloud account to which the VPC belongs.
     */
    readonly vpcOwnerId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::VPC::Vpcs`
 */
export declare class RosVpcs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::Vpcs";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute VpcIds: The list of The VPC IDs.
     */
    readonly attrVpcIds: ros.IResolvable;
    /**
     * @Attribute Vpcs: The detailed information about the VPCs.
     */
    readonly attrVpcs: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dhcpOptionsSetId: The ID of the DHCP options set.
     */
    dhcpOptionsSetId: string | ros.IResolvable | undefined;
    /**
     * @Property isDefault: Specifies whether to query the default VPC in the specified region. Valid values:
     * true(default): queries all VPCs in the specified region.
     * false: does not query the default VPC.
     */
    isDefault: boolean | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property vpcIds: The list of The VPC IDs.
     * You can specify up to 20 VPC IDs.
     */
    vpcIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property vpcName: The name of the VPC.
     */
    vpcName: string | ros.IResolvable | undefined;
    /**
     * @Property vpcOwnerId: The ID of the Alibaba Cloud account to which the VPC belongs.
     */
    vpcOwnerId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::VPC::Vpcs`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
