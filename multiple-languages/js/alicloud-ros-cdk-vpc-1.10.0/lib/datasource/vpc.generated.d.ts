import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address
 */
export interface RosAddressProps {
    /**
     * @Property allocationId: The ID of the EIP instance.
     */
    readonly allocationId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EIP::Address`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Address` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address
 */
export declare class RosAddress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EIP::Address";
    /**
     * @Attribute AddressName: The name of the EIP.
     */
    readonly attrAddressName: ros.IResolvable;
    /**
     * @Attribute AllocationId: The ID of the EIP instance.
     */
    readonly attrAllocationId: ros.IResolvable;
    /**
     * @Attribute Bandwidth: The peak bandwidth of the EIP. Unit: Mbps.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * @Attribute BandwidthPackageBandwidth: The bandwidth value of the Internet shared bandwidth added to the EIP. The unit is Mbps.
     */
    readonly attrBandwidthPackageBandwidth: ros.IResolvable;
    /**
     * @Attribute BandwidthPackageId: The ID of the added shared bandwidth.
     */
    readonly attrBandwidthPackageId: ros.IResolvable;
    /**
     * @Attribute BandwidthPackageType: The type of bandwidth. Only **CommonBandwidthPackage** (shared bandwidth) is supported.
     */
    readonly attrBandwidthPackageType: ros.IResolvable;
    /**
     * @Attribute BusinessStatus: The business status of the EIP instance.
     */
    readonly attrBusinessStatus: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the EIP was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DeletionProtection: Whether the delete protection function is turned on.
     */
    readonly attrDeletionProtection: ros.IResolvable;
    /**
     * @Attribute Description: The description of the EIP instance.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute EipBandwidth: AN EIP is added to an Internet shared bandwidth before or exit purchase an Internet shared bandwidth instance after the bandwidth Mbps Set for the bandwidth.
     */
    readonly attrEipBandwidth: ros.IResolvable;
    /**
     * @Attribute ExpiredTime: Expiration time, format' YYYY-MM-DDThh:mm:ssZ '.
     */
    readonly attrExpiredTime: ros.IResolvable;
    /**
     * @Attribute HasReservationData: Whether there is renewal data.
     */
    readonly attrHasReservationData: ros.IResolvable;
    /**
     * @Attribute HdMonitorStatus: Whether the second-level monitoring is enabled for the EIP.
     */
    readonly attrHdMonitorStatus: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the current bound instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceRegionId: The region ID of the currently bound resource.
     */
    readonly attrInstanceRegionId: ros.IResolvable;
    /**
     * @Attribute InstanceType: The type of the current bound instance.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * @Attribute IpAddress: The IP address of the EIP.
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * @Attribute Isp: Service providers.
     */
    readonly attrIsp: ros.IResolvable;
    /**
     * @Attribute Netmode: Network type.
     */
    readonly attrNetmode: ros.IResolvable;
    /**
     * @Attribute OperationLocks: Lock details.
     */
    readonly attrOperationLocks: ros.IResolvable;
    /**
     * @Attribute PaymentType: The billing method of the EIP.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute PublicIpAddressPoolId: The ID of the IP address pool to which the EIP belongs.
     */
    readonly attrPublicIpAddressPoolId: ros.IResolvable;
    /**
     * @Attribute ReservationActiveTime: The effective time of the renewal fee, in the format of 'YYYY-MM-DDThh:mm:ssZ'.
     */
    readonly attrReservationActiveTime: ros.IResolvable;
    /**
     * @Attribute ReservationBandwidth: Renewal bandwidth, in Mbps.
     */
    readonly attrReservationBandwidth: ros.IResolvable;
    /**
     * @Attribute ReservationInternetChargeType: Renewal Payment type.
     */
    readonly attrReservationInternetChargeType: ros.IResolvable;
    /**
     * @Attribute ReservationOrderType: Renewal order type.
     */
    readonly attrReservationOrderType: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SecondLimited: Whether a secondary speed limit is configured.
     */
    readonly attrSecondLimited: ros.IResolvable;
    /**
     * @Attribute SecurityProtectionTypes: Security protection level.
     */
    readonly attrSecurityProtectionTypes: ros.IResolvable;
    /**
     * @Attribute SegmentInstanceId: The ID of the consecutive EIPs.
     */
    readonly attrSegmentInstanceId: ros.IResolvable;
    /**
     * @Attribute ServiceManaged: Indicates the resource created for the service account.
     */
    readonly attrServiceManaged: ros.IResolvable;
    /**
     * @Attribute Tags: The tag of the resource.
     */
    readonly attrTags: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property allocationId: The ID of the EIP instance.
     */
    allocationId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosAddressProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosAddresses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-addresses
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EIP::Addresses`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Addresses` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-addresses
 */
export declare class RosAddresses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EIP::Addresses";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosAnycastEipAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eipanycast-anycasteipaddress
 */
export interface RosAnycastEipAddressProps {
    /**
     * @Property anycastId: The ID of the Anycast EIP.
     */
    readonly anycastId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::Eipanycast::AnycastEipAddress`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AnycastEipAddress` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eipanycast-anycasteipaddress
 */
export declare class RosAnycastEipAddress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::Eipanycast::AnycastEipAddress";
    /**
     * @Attribute AliUid: The ID of the account to which the Anycast EIP belongs.
     */
    readonly attrAliUid: ros.IResolvable;
    /**
     * @Attribute AnycastEipAddressName: The name of the Anycast EIP.
     */
    readonly attrAnycastEipAddressName: ros.IResolvable;
    /**
     * @Attribute AnycastId: The ID of the Anycast EIP.
     */
    readonly attrAnycastId: ros.IResolvable;
    /**
     * @Attribute Bandwidth: The maximum bandwidth of the Anycast EIP. Unit: Mbit/s.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * @Attribute Bid: The BID of the account to which the Anycast EIP belongs.
     */
    readonly attrBid: ros.IResolvable;
    /**
     * @Attribute CreateTime: The point in time at which the Anycast EIP was created. The time follows the ISO8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute InternetChargeType: The billing method of the Anycast EIP. Only PostPaid may be returned, which indicates the pay-as-you-go billing method.
     */
    readonly attrInternetChargeType: ros.IResolvable;
    /**
     * @Attribute IpAddress: The IP address of the Anycast EIP.
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * @Attribute PaymentType: The billing method of the Anycast EIP.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute ServiceLocation: The access area of the Anycast EIP. Only international may be returned, which indicates the areas outside the Chinese mainland.
     */
    readonly attrServiceLocation: ros.IResolvable;
    /**
     * @Attribute Status: The status of the Anycast EIP. Valid values:
* Associating
* Unassociating
* Allocated
* Associated
* Modifying
* Releasing
* Released
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the EIP.
     */
    readonly attrTags: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property anycastId: The ID of the Anycast EIP.
     */
    anycastId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosAnycastEipAddressProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosBgpPeer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeer
 */
export interface RosBgpPeerProps {
    /**
     * @Property bgpPeerId: The ID of the BGP peer.
     */
    readonly bgpPeerId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::BgpPeer`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BgpPeer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeer
 */
export declare class RosBgpPeer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::BgpPeer";
    /**
     * @Attribute AdvertisedRouteCount: The number of advertised routes.
     */
    readonly attrAdvertisedRouteCount: ros.IResolvable;
    /**
     * @Attribute AuthKey: The authentication key of the BGP group.
     */
    readonly attrAuthKey: ros.IResolvable;
    /**
     * @Attribute BfdMultiHop: The Bidirectional Forwarding Detection (BFD) hop count.
     */
    readonly attrBfdMultiHop: ros.IResolvable;
    /**
     * @Attribute BgpGroupId: The ID of the BGP group.
     */
    readonly attrBgpGroupId: ros.IResolvable;
    /**
     * @Attribute BgpPeerId: The ID of the BGP peer.
     */
    readonly attrBgpPeerId: ros.IResolvable;
    /**
     * @Attribute BgpStatus: The status of the BGP connection. Valid values:
* Idle: The BGP connection is not used.
* Connect: The BGP connection is used.
* Active: The BGP connection is available.
* Established: The BGP connection is established.
* Down: The BGP connection is unavailable.
     */
    readonly attrBgpStatus: ros.IResolvable;
    /**
     * @Attribute Description: The description of the BGP group.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute EnableBfd: Indicates whether BFD is enabled. Valid values:
* false
* true
     */
    readonly attrEnableBfd: ros.IResolvable;
    /**
     * @Attribute GmtModified: The time when the BGP peer is modified.
     */
    readonly attrGmtModified: ros.IResolvable;
    /**
     * @Attribute Hold: The hold time.
     */
    readonly attrHold: ros.IResolvable;
    /**
     * @Attribute IpVersion: The version of the IP address.
     */
    readonly attrIpVersion: ros.IResolvable;
    /**
     * @Attribute IsFake: Indicates whether a fake autonomous system number (ASN) is used. Valid values:
* false
* true
     */
    readonly attrIsFake: ros.IResolvable;
    /**
     * @Attribute Keepalive: The Keepalive interval.
     */
    readonly attrKeepalive: ros.IResolvable;
    /**
     * @Attribute LocalAsn: The ASN of the device on the Alibaba Cloud side.
     */
    readonly attrLocalAsn: ros.IResolvable;
    /**
     * @Attribute Name: The name of the BGP peer.
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute PeerAsn: The autonomous system number (ASN)of the BGP peer.
     */
    readonly attrPeerAsn: ros.IResolvable;
    /**
     * @Attribute PeerIpAddress: The IP address of the BGP peer.
     */
    readonly attrPeerIpAddress: ros.IResolvable;
    /**
     * @Attribute ReceivedRouteCount: The number of received routes.
     */
    readonly attrReceivedRouteCount: ros.IResolvable;
    /**
     * @Attribute RouteLimit: The maximum number of routes.
     */
    readonly attrRouteLimit: ros.IResolvable;
    /**
     * @Attribute RouterId: The Router ID.
     */
    readonly attrRouterId: ros.IResolvable;
    /**
     * @Attribute Status: The status of the BGP peer. Valid values:
* Pending
* Available
* Modifying
* Deleting
* Deleted
     */
    readonly attrStatus: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bgpPeerId: The ID of the BGP peer.
     */
    bgpPeerId: string | ros.IResolvable | undefined;
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
    constructor(scope: ros.Construct, id: string, props: RosBgpPeerProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosBgpPeers`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeers
 */
export interface RosBgpPeersProps {
    /**
     * @Property bgpGroupId: The ID of the BGP group to which the BGP peer that you want to query belongs.
     */
    readonly bgpGroupId?: string | ros.IResolvable;
    /**
     * @Property bgpPeerId: The ID of the BGP peer that you want to query.
     */
    readonly bgpPeerId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property routerId: The ID of the virtual border router (VBR) that is associated with the BGP peer that you want to query.
     */
    readonly routerId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::BgpPeers`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BgpPeers` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeers
 */
export declare class RosBgpPeers extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::BgpPeers";
    /**
     * @Attribute BgpPeerIds: The list of The BGP peer ids.
     */
    readonly attrBgpPeerIds: ros.IResolvable;
    /**
     * @Attribute BgpPeers: The list of The BGP peers.
     */
    readonly attrBgpPeers: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bgpGroupId: The ID of the BGP group to which the BGP peer that you want to query belongs.
     */
    bgpGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property bgpPeerId: The ID of the BGP peer that you want to query.
     */
    bgpPeerId: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property routerId: The ID of the virtual border router (VBR) that is associated with the BGP peer that you want to query.
     */
    routerId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBgpPeersProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosCommonBandwidthPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackage
 */
export interface RosCommonBandwidthPackageProps {
    /**
     * @Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    readonly commonBandwidthPackageId?: string | ros.IResolvable;
    /**
     * @Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    readonly commonBandwidthPackageName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::CommonBandwidthPackage`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CommonBandwidthPackage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackage
 */
export declare class RosCommonBandwidthPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::CommonBandwidthPackage";
    /**
     * @Attribute Bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * @Attribute BusinessStatus: The service status of the Internet Shared Bandwidth instance. Valid values:
* Normal: The Internet Shared Bandwidth instance runs as expected.
* FinancialLocked: An overdue payment occurs in the Internet Shared Bandwidth instance
* Unactivated: The Internet Shared Bandwidth instance is not activated.
     */
    readonly attrBusinessStatus: ros.IResolvable;
    /**
     * @Attribute CommonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    readonly attrCommonBandwidthPackageId: ros.IResolvable;
    /**
     * @Attribute CommonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    readonly attrCommonBandwidthPackageName: ros.IResolvable;
    /**
     * @Attribute CreationTime: The time when the Internet Shared Bandwidth instance was created. The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    readonly attrCreationTime: ros.IResolvable;
    /**
     * @Attribute DeletionProtection: Indicates whether deletion protection is enabled. Valid values:
* false
* true
     */
    readonly attrDeletionProtection: ros.IResolvable;
    /**
     * @Attribute Description: The description of the Internet Shared Bandwidth instance.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute ExpiredTime: The time when the Internet Shared Bandwidth instance expired. The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    readonly attrExpiredTime: ros.IResolvable;
    /**
     * @Attribute HasReservationData: Indicates whether the information about pending orders is returned. Valid values:
* false
* true
     */
    readonly attrHasReservationData: ros.IResolvable;
    /**
     * @Attribute InstanceChargeType: The billing method of the Internet Shared Bandwidth instance. Valid value:
* PostPaid: pay-as-you-go
* PrePaid: subscription
     */
    readonly attrInstanceChargeType: ros.IResolvable;
    /**
     * @Attribute InternetChargeType: The metering method of the Internet Shared Bandwidth instance. Valid value:
* PayBy95: Charged by Enhanced 95th Percentile.
* PayByBandwidth: Charged by Bandwidth.
* PayByDominantTraffic: Charged by Dominant Traffic.
     */
    readonly attrInternetChargeType: ros.IResolvable;
    /**
     * @Attribute Isp: The line type. Valid values:
BGP (default): BGP (Multi-ISP) lines.
BGP_PRO: BGP (Multi-ISP) Pro lines.
Valid values if you are allowed to use single-ISP bandwidth:
ChinaTelecom
ChinaUnicom
ChinaMobile
ChinaTelecom_L2
ChinaUnicom_L2
ChinaMobile_L2
     */
    readonly attrIsp: ros.IResolvable;
    /**
     * @Attribute PublicIpAddresses: The elastic IP addresses (EIPs) that are associated with the Internet Shared Bandwidth instance.
     */
    readonly attrPublicIpAddresses: ros.IResolvable;
    /**
     * @Attribute Ratio: The percentage of the minimum bandwidth commitment. Only 20 is returned.
     */
    readonly attrRatio: ros.IResolvable;
    /**
     * @Attribute ReservationActiveTime: The time when the renewal took effect. The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    readonly attrReservationActiveTime: ros.IResolvable;
    /**
     * @Attribute ReservationBandwidth: The new maximum bandwidth after the configurations are changed. Unit: Mbit/s.
     */
    readonly attrReservationBandwidth: ros.IResolvable;
    /**
     * @Attribute ReservationInternetChargeType: The metering method after the configurations are changed. Valid value:
* PayBy95: Charged by Enhanced 95th Percentile.
* PayByBandwidth: Charged by Bandwidth.
* PayByDominantTraffic: Charged by Dominant Traffic.
     */
    readonly attrReservationInternetChargeType: ros.IResolvable;
    /**
     * @Attribute ReservationOrderType: The renewal method. Valid values:
* RENEWCHANGE: renewal with a specification change
* TEMP_UPGRADE: renewal with a temporary upgrade
* UPGRADE: renewal with an upgrade
     */
    readonly attrReservationOrderType: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute ServiceManaged: Indicates whether the resource is created by the service account. Valid values:
* 0: The resource is not created by the service account.
* 1: The resource is created by the service account.
     */
    readonly attrServiceManaged: ros.IResolvable;
    /**
     * @Attribute Status: The status of the Internet Shared Bandwidth instance. Valid values:
* Available: The Internet Shared Bandwidth instance is available.
* Modifying: The Internet Shared Bandwidth instance is being modified.
     */
    readonly attrStatus: ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosCommonBandwidthPackageProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosCommonBandwidthPackages`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackages
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::CommonBandwidthPackages`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CommonBandwidthPackages` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackages
 */
export declare class RosCommonBandwidthPackages extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::CommonBandwidthPackages";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosCustomerGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateway
 */
export interface RosCustomerGatewayProps {
    /**
     * @Property customerGatewayId: The ID of the customer gateway.
     */
    readonly customerGatewayId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::CustomerGateway`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomerGateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateway
 */
export declare class RosCustomerGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::CustomerGateway";
    /**
     * @Attribute Asn: Asn.
     */
    readonly attrAsn: ros.IResolvable;
    /**
     * @Attribute AuthKey: The authentication key of the local data center gateway device BGP routing protocol.
     */
    readonly attrAuthKey: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the customer gateway was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute CustomerGatewayId: The ID of the customer gateway.
     */
    readonly attrCustomerGatewayId: ros.IResolvable;
    /**
     * @Attribute CustomerGatewayName: The name of the customer gateway.
     */
    readonly attrCustomerGatewayName: ros.IResolvable;
    /**
     * @Attribute Description: The description of the customer gateway.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute IpAddress: The IP address of the customer gateway.
     */
    readonly attrIpAddress: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property customerGatewayId: The ID of the customer gateway.
     */
    customerGatewayId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosCustomerGatewayProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosCustomerGateways`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways
 */
export interface RosCustomerGatewaysProps {
    /**
     * @Property customerGatewayId: The ID of the customer gateway.
     */
    readonly customerGatewayId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::CustomerGateways`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomerGateways` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways
 */
export declare class RosCustomerGateways extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::CustomerGateways";
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
 * Properties for defining a `RosFlowLog`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog
 */
export interface RosFlowLogProps {
    /**
     * @Property flowLogId: The flow log ID.
     */
    readonly flowLogId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::FlowLog`.
 * @Note This class does not contain additional functions, so it is recommended to use the `FlowLog` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog
 */
export declare class RosFlowLog extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::FlowLog";
    /**
     * @Attribute AggregationInterval: Data aggregation interval.
     */
    readonly attrAggregationInterval: ros.IResolvable;
    /**
     * @Attribute BusinessStatus: Business status.
     */
    readonly attrBusinessStatus: ros.IResolvable;
    /**
     * @Attribute CreateTime: the time of creation.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The Description of flow log.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute FlowLogId: The flow log ID.
     */
    readonly attrFlowLogId: ros.IResolvable;
    /**
     * @Attribute FlowLogName: The flow log name.
     */
    readonly attrFlowLogName: ros.IResolvable;
    /**
     * @Attribute LogStoreName: The log store name.
     */
    readonly attrLogStoreName: ros.IResolvable;
    /**
     * @Attribute ProjectName: The project name.
     */
    readonly attrProjectName: ros.IResolvable;
    /**
     * @Attribute ResourceId: The resource id.
     */
    readonly attrResourceId: ros.IResolvable;
    /**
     * @Attribute ResourceType: The resource type.
     */
    readonly attrResourceType: ros.IResolvable;
    /**
     * @Attribute TrafficType: The traffic type.
     */
    readonly attrTrafficType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property flowLogId: The flow log ID.
     */
    flowLogId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosFlowLogProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosFlowLogs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlogs
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::FlowLogs`.
 * @Note This class does not contain additional functions, so it is recommended to use the `FlowLogs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlogs
 */
export declare class RosFlowLogs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::FlowLogs";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosHaVip`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
 */
export interface RosHaVipProps {
    /**
     * @Property haVipId: The  ID of the resource.
     */
    readonly haVipId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::HaVip`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HaVip` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
 */
export declare class RosHaVip extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::HaVip";
    /**
     * @Attribute AssociatedEipAddresses: EIP bound to HaVip.
     */
    readonly attrAssociatedEipAddresses: ros.IResolvable;
    /**
     * @Attribute AssociatedInstanceType: The type of the instance that is bound to the VIIP.
     */
    readonly attrAssociatedInstanceType: ros.IResolvable;
    /**
     * @Attribute AssociatedInstances: An ECS instance that is bound to HaVip.
     */
    readonly attrAssociatedInstances: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the  resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: Dependence of a HaVip instance.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute HaVipId: The  ID of the resource.
     */
    readonly attrHaVipId: ros.IResolvable;
    /**
     * @Attribute HaVipName: The name of the HaVip instance.
     */
    readonly attrHaVipName: ros.IResolvable;
    /**
     * @Attribute IpAddress: IP address of private network.
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * @Attribute MasterInstanceId: The primary instance ID bound to HaVip.
     */
    readonly attrMasterInstanceId: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The switch ID to which the HaVip instance belongs.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: The VPC ID to which the HaVip instance belongs.
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property haVipId: The  ID of the resource.
     */
    haVipId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosHaVipProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosHaVips`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips
 */
export interface RosHaVipsProps {
    /**
     * @Property haVipId: The  ID of the resource
     */
    readonly haVipId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::HaVips`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HaVips` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips
 */
export declare class RosHaVips extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::HaVips";
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
 * Properties for defining a `RosIpv4Gateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
 */
export interface RosIpv4GatewayProps {
    /**
     * @Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    readonly ipv4GatewayId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::Ipv4Gateway`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ipv4Gateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
 */
export declare class RosIpv4Gateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::Ipv4Gateway";
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Enabled: Enabled.
     */
    readonly attrEnabled: ros.IResolvable;
    /**
     * @Attribute Ipv4GatewayDescription: Description information.
     */
    readonly attrIpv4GatewayDescription: ros.IResolvable;
    /**
     * @Attribute Ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    readonly attrIpv4GatewayId: ros.IResolvable;
    /**
     * @Attribute Ipv4GatewayName: Resource name.
     */
    readonly attrIpv4GatewayName: ros.IResolvable;
    /**
     * @Attribute Ipv4GatewayRouteTableId: ID of the route table associated with IPv4 Gateway.
     */
    readonly attrIpv4GatewayRouteTableId: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    ipv4GatewayId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosIpv4GatewayProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosIpv4Gateways`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateways
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::Ipv4Gateways`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ipv4Gateways` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateways
 */
export declare class RosIpv4Gateways extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::Ipv4Gateways";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosNatGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateway
 */
export interface RosNatGatewayProps {
    /**
     * @Property natGatewayId: The ID of the NAT gateway.
     */
    readonly natGatewayId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::NatGateway`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NatGateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateway
 */
export declare class RosNatGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NatGateway";
    /**
     * @Attribute AutoPay: Indicates whether automatic payment is enabled. Valid values:
* false: no
true: yes
     */
    readonly attrAutoPay: ros.IResolvable;
    /**
     * @Attribute BusinessStatus: The status of the NAT gateway. Valid values:
* Normal: normal
* FinancialLocked: locked due to overdue payments
     */
    readonly attrBusinessStatus: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the NAT gateway was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DeletionProtection: Indicates whether the deletion protection feature is enabled. Valid values:
* true: yes
* false: no
     */
    readonly attrDeletionProtection: ros.IResolvable;
    /**
     * @Attribute Description: The description of the NAT gateway.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute EipBindMode: The mode in which the NAT gateway is associated with an elastic IP address (EIP). Valid values:
* MULTI_BINDED: multi-EIP-to-ENI mode* NAT: NAT mode, which is compatible with IPv4 addresses.
     */
    readonly attrEipBindMode: ros.IResolvable;
    /**
     * @Attribute ExpiredTime: The time when the NAT gateway expires.
     */
    readonly attrExpiredTime: ros.IResolvable;
    /**
     * @Attribute ForwardTableIds: The ID of the Destination Network Address Translation (DNAT) table.
     */
    readonly attrForwardTableIds: ros.IResolvable;
    /**
     * @Attribute IcmpReplyEnabled: Indicates whether the ICMP non-retrieval feature is enabled. Valid values:
* true: yes
* false: no
     */
    readonly attrIcmpReplyEnabled: ros.IResolvable;
    /**
     * @Attribute InternetChargeType: The metering method of the NAT gateway. Valid values:
* PayBySpec: pay-by-specification
* PayByLcu: pay-by-CU
     */
    readonly attrInternetChargeType: ros.IResolvable;
    /**
     * @Attribute IpLists: The list of elastic IP addresses (EIPs) that are associated with the Internet NAT gateway.
     */
    readonly attrIpLists: ros.IResolvable;
    /**
     * @Attribute NatGatewayId: The ID of the NAT gateway.
     */
    readonly attrNatGatewayId: ros.IResolvable;
    /**
     * @Attribute NatGatewayName: The name of the NAT gateway. The name must be 1 to 128 characters in length, and cannot start with http:// or https://. If this parameter is not set, the system automatically assigns a name to the NAT gateway.
     */
    readonly attrNatGatewayName: ros.IResolvable;
    /**
     * @Attribute NatGatewayPrivateInfo: The private network information about the enhanced Internet NAT gateway.
     */
    readonly attrNatGatewayPrivateInfo: ros.IResolvable;
    /**
     * @Attribute NatType: The type of the NAT gateway. The value is set to Enhanced (enhanced NAT gateway).
     */
    readonly attrNatType: ros.IResolvable;
    /**
     * @Attribute NetworkType: The type of NAT gateway. Valid values:
* internet: an Internet NAT gateway
* intranet: a VPC NAT gateway
     */
    readonly attrNetworkType: ros.IResolvable;
    /**
     * @Attribute PaymentType: The billing method of the NAT gateway. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute SecurityProtectionEnabled: Indicates whether the firewall feature is enabled. Valid values:
false: no
true: yes
     */
    readonly attrSecurityProtectionEnabled: ros.IResolvable;
    /**
     * @Attribute SnatTableIds: The ID of the SNAT table of the NAT gateway.
     */
    readonly attrSnatTableIds: ros.IResolvable;
    /**
     * @Attribute Spec: The size of the NAT gateway. An empty value is returned for the parameter. If InternetChargeType is set to PayByLcu, an empty value is returned.
     */
    readonly attrSpec: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the VPC where the NAT gateway is deployed.
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property natGatewayId: The ID of the NAT gateway.
     */
    natGatewayId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosNatGatewayProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosNatGatewayZones`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
 */
export interface RosNatGatewayZonesProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::NatGatewayZones`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NatGatewayZones` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
 */
export declare class RosNatGatewayZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NatGatewayZones";
    /**
     * @Attribute ZoneIds: The list of The Zone Ids.
     */
    readonly attrZoneIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
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
 * Properties for defining a `RosNatGateways`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateways
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::NatGateways`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NatGateways` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateways
 */
export declare class RosNatGateways extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NatGateways";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosNatIpCidrs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natipcidrs
 */
export interface RosNatIpCidrsProps {
    /**
     * @Property natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID.
     */
    readonly natGatewayId: string | ros.IResolvable;
    /**
     * @Property natIpCidr: Create a NAT IP ADDRESS. The new address segment must meet the following conditions: belong to 10.0.0.0\/8, 172.16.0.0\/12 or 192.168.0.0\/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
     */
    readonly natIpCidr?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::NatIpCidrs`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NatIpCidrs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natipcidrs
 */
export declare class RosNatIpCidrs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NatIpCidrs";
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
     * @Property natIpCidr: Create a NAT IP ADDRESS. The new address segment must meet the following conditions: belong to 10.0.0.0\/8, 172.16.0.0\/12 or 192.168.0.0\/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
     */
    natIpCidr: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosNetworkAcls`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-networkacls
 */
export interface RosNetworkAclsProps {
    /**
     * @Property networkAclId: The ID of the network ACL.
     */
    readonly networkAclId?: string | ros.IResolvable;
    /**
     * @Property networkAclName: The name of the network ACL.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly networkAclName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::NetworkAcls`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkAcls` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-networkacls
 */
export declare class RosNetworkAcls extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::NetworkAcls";
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
     * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    networkAclName: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosPrefixList`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist
 */
export interface RosPrefixListProps {
    /**
     * @Property prefixListId: The ID of the query Prefix List.
     */
    readonly prefixListId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::PrefixList`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrefixList` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist
 */
export declare class RosPrefixList extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::PrefixList";
    /**
     * @Attribute CreateTime: The time when the prefix list was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Entries: The CIDR address block list of the prefix list.
     */
    readonly attrEntries: ros.IResolvable;
    /**
     * @Attribute IpVersion: The IP version of the prefix list.
     */
    readonly attrIpVersion: ros.IResolvable;
    /**
     * @Attribute MaxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
     */
    readonly attrMaxEntries: ros.IResolvable;
    /**
     * @Attribute OwnerId: The Alibaba Cloud account (primary account) to which the prefix list belongs.
     */
    readonly attrOwnerId: ros.IResolvable;
    /**
     * @Attribute PrefixListDescription: The description of the prefix list.
     */
    readonly attrPrefixListDescription: ros.IResolvable;
    /**
     * @Attribute PrefixListId: The ID of the query Prefix List.
     */
    readonly attrPrefixListId: ros.IResolvable;
    /**
     * @Attribute PrefixListName: The name of the prefix list.
     */
    readonly attrPrefixListName: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute ShareType: The share type of the prefix list.
     */
    readonly attrShareType: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of PrefixList.
     */
    readonly attrTags: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property prefixListId: The ID of the query Prefix List.
     */
    prefixListId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosPrefixListProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosPrefixLists`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlists
 */
export interface RosPrefixListsProps {
    /**
     * @Property prefixListName: The name of the prefix list.
     */
    readonly prefixListName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::PrefixLists`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrefixLists` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlists
 */
export declare class RosPrefixLists extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::PrefixLists";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosPublicIpAddressPool`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspool
 */
export interface RosPublicIpAddressPoolProps {
    /**
     * @Property publicIpAddressPoolId: The first ID of the resource.
     */
    readonly publicIpAddressPoolId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::PublicIpAddressPool`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PublicIpAddressPool` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspool
 */
export declare class RosPublicIpAddressPool extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::PublicIpAddressPool";
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: Description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute IpAddressRemaining: Whether there is a free IP address.
     */
    readonly attrIpAddressRemaining: ros.IResolvable;
    /**
     * @Attribute Isp: Service providers.
     */
    readonly attrIsp: ros.IResolvable;
    /**
     * @Attribute PublicIpAddressPoolId: The first ID of the resource.
     */
    readonly attrPublicIpAddressPoolId: ros.IResolvable;
    /**
     * @Attribute PublicIpAddressPoolName: The name of the resource.
     */
    readonly attrPublicIpAddressPoolName: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of PrefixList.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute TotalIpNum: Total ip number of PublicIpAddressPool.
     */
    readonly attrTotalIpNum: ros.IResolvable;
    /**
     * @Attribute UsedIpNum: Used ip number of PublicIpAddressPool.
     */
    readonly attrUsedIpNum: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property publicIpAddressPoolId: The first ID of the resource.
     */
    publicIpAddressPoolId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosPublicIpAddressPoolProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosPublicIpAddressPools`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspools
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
     * The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly publicIpAddressPoolName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the IP address pool belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::PublicIpAddressPools`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PublicIpAddressPools` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspools
 */
export declare class RosPublicIpAddressPools extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::PublicIpAddressPools";
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
     * The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    publicIpAddressPoolName: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the IP address pool belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosRouteEntries`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routeentries
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::RouteEntries`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RouteEntries` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routeentries
 */
export declare class RosRouteEntries extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::RouteEntries";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosRouteTable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable
 */
export interface RosRouteTableProps {
    /**
     * @Property routeTableId: The ID of the routing table.
     */
    readonly routeTableId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::RouteTable`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RouteTable` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable
 */
export declare class RosRouteTable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::RouteTable";
    /**
     * @Attribute CreateTime: The creation time of the routing table.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: Description of the routing table.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: Resource group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute RouteTableId: The ID of the routing table.
     */
    readonly attrRouteTableId: ros.IResolvable;
    /**
     * @Attribute RouteTableName: The name of the routing table.
     */
    readonly attrRouteTableName: ros.IResolvable;
    /**
     * @Attribute RouteTableType: The type of routing table.
     */
    readonly attrRouteTableType: ros.IResolvable;
    /**
     * @Attribute RouterId: The router ID to which the routing table belongs.
     */
    readonly attrRouterId: ros.IResolvable;
    /**
     * @Attribute RouterType: The router type to which the routing table belongs.
     */
    readonly attrRouterType: ros.IResolvable;
    /**
     * @Attribute Tags: The tag.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute VSwitchIds: The ID of the switch.
     */
    readonly attrVSwitchIds: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of VPC.
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property routeTableId: The ID of the routing table.
     */
    routeTableId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosRouteTableProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosRouteTables`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetables
 */
export interface RosRouteTablesProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::RouteTables`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RouteTables` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetables
 */
export declare class RosRouteTables extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::RouteTables";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosTrafficMirrorFilter`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter
 */
export interface RosTrafficMirrorFilterProps {
    /**
     * @Property trafficMirrorFilterId: The first ID of the resource.
     */
    readonly trafficMirrorFilterId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::TrafficMirrorFilter`.
 * @Note This class does not contain additional functions, so it is recommended to use the `TrafficMirrorFilter` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter
 */
export declare class RosTrafficMirrorFilter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::TrafficMirrorFilter";
    /**
     * @Attribute EgressRules: EgressRules.
     */
    readonly attrEgressRules: ros.IResolvable;
    /**
     * @Attribute IngressRules: IngressRules.
     */
    readonly attrIngressRules: ros.IResolvable;
    /**
     * @Attribute TrafficMirrorFilterDescription: The description of the TrafficMirrorFilter.
     */
    readonly attrTrafficMirrorFilterDescription: ros.IResolvable;
    /**
     * @Attribute TrafficMirrorFilterId: The first ID of the resource.
     */
    readonly attrTrafficMirrorFilterId: ros.IResolvable;
    /**
     * @Attribute TrafficMirrorFilterName: The name of the TrafficMirrorFilter.
     */
    readonly attrTrafficMirrorFilterName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property trafficMirrorFilterId: The first ID of the resource.
     */
    trafficMirrorFilterId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosTrafficMirrorFilterProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosTrafficMirrorFilters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilters
 */
export interface RosTrafficMirrorFiltersProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property trafficMirrorFilterName: The name of the TrafficMirrorFilter.
     */
    readonly trafficMirrorFilterName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::TrafficMirrorFilters`.
 * @Note This class does not contain additional functions, so it is recommended to use the `TrafficMirrorFilters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilters
 */
export declare class RosTrafficMirrorFilters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::TrafficMirrorFilters";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property trafficMirrorFilterName: The name of the TrafficMirrorFilter.
     */
    trafficMirrorFilterName: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosVSwitch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitch
 */
export interface RosVSwitchProps {
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::VSwitch`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VSwitch` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitch
 */
export declare class RosVSwitch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::VSwitch";
    /**
     * @Attribute AvailableIpAddressCount: The number of available IP addresses.
     */
    readonly attrAvailableIpAddressCount: ros.IResolvable;
    /**
     * @Attribute CidrBlock: The IPv4 CIDR block of the VSwitch.
     */
    readonly attrCidrBlock: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the VSwitch.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The description of VSwitch.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute Ipv6CidrBlock: The IPv6 CIDR block of the VSwitch.
     */
    readonly attrIpv6CidrBlock: ros.IResolvable;
    /**
     * @Attribute IsDefault: Indicates whether the VSwitch is a default VSwitch.
     */
    readonly attrIsDefault: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The resource group id of VSwitch.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute RouteTableId: The route table id.
     */
    readonly attrRouteTableId: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of VSwitch.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The ID of the VSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VSwitchName: The name of the VSwitch.
     */
    readonly attrVSwitchName: ros.IResolvable;
    /**
     * @Attribute VpcId: The VPC ID.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute ZoneId: The zone ID  of the resource.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    vSwitchId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosVSwitchProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosVSwitches`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitches
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::VSwitches`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VSwitches` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitches
 */
export declare class RosVSwitches extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::VSwitches";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosVpc`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpc
 */
export interface RosVpcProps {
    /**
     * @Property vpcId: The ID of the VPC.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::Vpc`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Vpc` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpc
 */
export declare class RosVpc extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::Vpc";
    /**
     * @Attribute CidrBlock: The IPv4 CIDR block of the VPC.
     */
    readonly attrCidrBlock: ros.IResolvable;
    /**
     * @Attribute ClassicLinkEnabled: status of vpc  ClassicLink..
     */
    readonly attrClassicLinkEnabled: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time at which the VPC was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The description of the VPC.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DhcpOptionsSetId: The ID of the DHCP option set.
     */
    readonly attrDhcpOptionsSetId: ros.IResolvable;
    /**
     * @Attribute Ipv6CidrBlock: The ipv6 cidr block of vpc.
     */
    readonly attrIpv6CidrBlock: ros.IResolvable;
    /**
     * @Attribute Ipv6CidrBlocks: The IPv6 network segment of the VPC.
     */
    readonly attrIpv6CidrBlocks: ros.IResolvable;
    /**
     * @Attribute IsDefault: Indicates whether to query the default VPC in the specified region. Valid values:
- true (default): All VPCs in the specified region are queried.
- false: The default VPC is not queried.
     */
    readonly attrIsDefault: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute RouterId: The ID of the VRouter.
     */
    readonly attrRouterId: ros.IResolvable;
    /**
     * @Attribute SecondaryCidrBlocks: Additional network segment information.
     */
    readonly attrSecondaryCidrBlocks: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of Vpc.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute UserCidrs: A list of user CIDRs.
     */
    readonly attrUserCidrs: ros.IResolvable;
    /**
     * @Attribute VSwitchIds: A list of VSwitches in the VPC.
     */
    readonly attrVSwitchIds: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the VPC.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute VpcName: The name of the VPC.
     */
    readonly attrVpcName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vpcId: The ID of the VPC.
     */
    vpcId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosVpcProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosVpcs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpcs
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VPC::Vpcs`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Vpcs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpcs
 */
export declare class RosVpcs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VPC::Vpcs";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
