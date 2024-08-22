import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAnycastEIP`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteip
 */
export interface RosAnycastEIPProps {
    /**
     * @Property bandwidth: Anycast EIP instance bandwidth
     */
    readonly bandwidth?: number | ros.IResolvable;
    /**
     * @Property description: Anycast EIP instance description
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property instanceChargeType: Anycast EIP instance charge type
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property internetChargeType: Anycast EIP instance access public network billing method
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * @Property name: Anycast EIP instance name
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property serviceLocation: Anycast EIP instance access area
     */
    readonly serviceLocation?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::AnycastEIP`, which is used to create an Anycast elastic IP address (Anycast EIP).
 * @Note This class does not contain additional functions, so it is recommended to use the `AnycastEIP` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteip
 */
export declare class RosAnycastEIP extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::AnycastEIP";
    /**
     * @Attribute AnycastId: Anycast EIP instance ID
     */
    readonly attrAnycastId: ros.IResolvable;
    /**
     * @Attribute IpAddress: Anycase IP address
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * @Attribute Name: Anycast EIP instance name
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute OrderId: Order ID
     */
    readonly attrOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidth: Anycast EIP instance bandwidth
     */
    bandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property description: Anycast EIP instance description
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: Anycast EIP instance charge type
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property internetChargeType: Anycast EIP instance access public network billing method
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property name: Anycast EIP instance name
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property serviceLocation: Anycast EIP instance access area
     */
    serviceLocation: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAnycastEIPProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosAnycastEIPAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteipassociation
 */
export interface RosAnycastEIPAssociationProps {
    /**
     * @Property anycastId: Anycast EIP instance ID.
     */
    readonly anycastId: string | ros.IResolvable;
    /**
     * @Property bindInstanceId: The ID of the cloud resource instance to be bound.
     */
    readonly bindInstanceId: string | ros.IResolvable;
    /**
     * @Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound.
     */
    readonly bindInstanceRegionId: string | ros.IResolvable;
    /**
     * @Property bindInstanceType: The cloud resource instance type to be bound. Valid value: SlbInstance, SLB instance of private network type.
     */
    readonly bindInstanceType: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::AnycastEIPAssociation`, which is used to associate an Anycast elastic IP address (Anycast EIP) with a cloud resource in a specific region.
 * @Note This class does not contain additional functions, so it is recommended to use the `AnycastEIPAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteipassociation
 */
export declare class RosAnycastEIPAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::AnycastEIPAssociation";
    /**
     * @Attribute AnycastId: Anycast EIP instance ID.
     */
    readonly attrAnycastId: ros.IResolvable;
    /**
     * @Attribute BindInstanceId: The ID of the cloud resource instance to be bound.
     */
    readonly attrBindInstanceId: ros.IResolvable;
    /**
     * @Attribute BindInstanceRegionId: The region ID of the cloud resource instance to be bound.
     */
    readonly attrBindInstanceRegionId: ros.IResolvable;
    /**
     * @Attribute BindInstanceType: The cloud resource instance type to be bound.
     */
    readonly attrBindInstanceType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property anycastId: Anycast EIP instance ID.
     */
    anycastId: string | ros.IResolvable;
    /**
     * @Property bindInstanceId: The ID of the cloud resource instance to be bound.
     */
    bindInstanceId: string | ros.IResolvable;
    /**
     * @Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound.
     */
    bindInstanceRegionId: string | ros.IResolvable;
    /**
     * @Property bindInstanceType: The cloud resource instance type to be bound. Valid value: SlbInstance, SLB instance of private network type.
     */
    bindInstanceType: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAnycastEIPAssociationProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosBgpGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpgroup
 */
export interface RosBgpGroupProps {
    /**
     * @Property peerAsn: The AS number of the BGP peer.
     */
    readonly peerAsn: number | ros.IResolvable;
    /**
     * @Property routerId: The ID of the VBR.
     */
    readonly routerId: string | ros.IResolvable;
    /**
     * @Property authKey: The authentication key of the BGP group.
     */
    readonly authKey?: string | ros.IResolvable;
    /**
     * @Property description: The description of the BGP group. The description must be 2 to 256 characters in length.
     * It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property ipVersion: The IP version of the BGP group. Valid values: IPv4 and IPv6.
     */
    readonly ipVersion?: string | ros.IResolvable;
    /**
     * @Property isFakeAsn: A router that runs BGP typically belongs to only one AS. In some cases, for example,
     * the AS needs to be migrated or is merged with another AS, a new AS number replaces
     * the original one.
     */
    readonly isFakeAsn?: boolean | ros.IResolvable;
    /**
     * @Property localAsn: The AS number on the Alibaba Cloud side.
     */
    readonly localAsn?: number | ros.IResolvable;
    /**
     * @Property name: The name of the BGP group. The name must be 2 to 128 characters in length and can
     * contain digits, periods (.), underscores (_), and hyphens (-). The name must start
     * with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property routeQuota: The upper limit of the BGP neighbor's route entries. Unit: entries, default value: 110.
     */
    readonly routeQuota?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::BgpGroup`, which is used to create a Border Gateway Protocol (BGP) (Multi-ISP) group for a specified virtual border router (VBR).
 * @Note This class does not contain additional functions, so it is recommended to use the `BgpGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpgroup
 */
export declare class RosBgpGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::BgpGroup";
    /**
     * @Attribute BgpGroupId: The ID of the BGP group.
     */
    readonly attrBgpGroupId: ros.IResolvable;
    /**
     * @Attribute Name: The name of the BGP group.
     */
    readonly attrName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property peerAsn: The AS number of the BGP peer.
     */
    peerAsn: number | ros.IResolvable;
    /**
     * @Property routerId: The ID of the VBR.
     */
    routerId: string | ros.IResolvable;
    /**
     * @Property authKey: The authentication key of the BGP group.
     */
    authKey: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the BGP group. The description must be 2 to 256 characters in length.
     * It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property ipVersion: The IP version of the BGP group. Valid values: IPv4 and IPv6.
     */
    ipVersion: string | ros.IResolvable | undefined;
    /**
     * @Property isFakeAsn: A router that runs BGP typically belongs to only one AS. In some cases, for example,
     * the AS needs to be migrated or is merged with another AS, a new AS number replaces
     * the original one.
     */
    isFakeAsn: boolean | ros.IResolvable | undefined;
    /**
     * @Property localAsn: The AS number on the Alibaba Cloud side.
     */
    localAsn: number | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the BGP group. The name must be 2 to 128 characters in length and can
     * contain digits, periods (.), underscores (_), and hyphens (-). The name must start
     * with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property routeQuota: The upper limit of the BGP neighbor's route entries. Unit: entries, default value: 110.
     */
    routeQuota: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBgpGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosBgpNetwork`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpnetwork
 */
export interface RosBgpNetworkProps {
    /**
     * @Property dstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect
     * to a data center.
     */
    readonly dstCidrBlock: string | ros.IResolvable;
    /**
     * @Property routerId: The ID of the vRouter associated with the router interface.
     */
    readonly routerId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::BgpNetwork`, which is used to advertise a Border Gateway Protocol (BGP) network.
 * @Note This class does not contain additional functions, so it is recommended to use the `BgpNetwork` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpnetwork
 */
export declare class RosBgpNetwork extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::BgpNetwork";
    /**
     * @Attribute DstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect
to a data center.
     */
    readonly attrDstCidrBlock: ros.IResolvable;
    /**
     * @Attribute RouterId: The ID of the vRouter associated with the router interface.
     */
    readonly attrRouterId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect
     * to a data center.
     */
    dstCidrBlock: string | ros.IResolvable;
    /**
     * @Property routerId: The ID of the vRouter associated with the router interface.
     */
    routerId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBgpNetworkProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgppeer
 */
export interface RosBgpPeerProps {
    /**
     * @Property bgpGroupId: The ID of the BGP group.
     */
    readonly bgpGroupId: string | ros.IResolvable;
    /**
     * @Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.
     * Valid values:
     * true: enables BFD.
     * false: disables BFD.
     */
    readonly enableBfd?: boolean | ros.IResolvable;
    /**
     * @Property peerIpAddress: The IP address of the BGP peer.
     */
    readonly peerIpAddress?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::BgpPeer`, which is used to add a Border Gateway Protocol (BGP) peer to a specific BGP group.
 * @Note This class does not contain additional functions, so it is recommended to use the `BgpPeer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgppeer
 */
export declare class RosBgpPeer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::BgpPeer";
    /**
     * @Attribute BgpPeerId: The ID of the BGP peer.
     */
    readonly attrBgpPeerId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bgpGroupId: The ID of the BGP group.
     */
    bgpGroupId: string | ros.IResolvable;
    /**
     * @Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.
     * Valid values:
     * true: enables BFD.
     * false: disables BFD.
     */
    enableBfd: boolean | ros.IResolvable | undefined;
    /**
     * @Property peerIpAddress: The IP address of the BGP peer.
     */
    peerIpAddress: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosCommonBandwidthPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackage
 */
export interface RosCommonBandwidthPackageProps {
    /**
     * @Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit\/s.
     */
    readonly bandwidth: number | ros.IResolvable;
    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property description: The description of the Internet Shared Bandwidth instance.
     * The description must be 2 to 256 characters in length. It must start with a letter,
     * and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property internetChargeType: The billing model of the Internet Shared Bandwidth instance. Allowed values:
     * PayByBandwidth (default): Billed by bandwidth.
     * PayBy95: Charged at Enhanced 95.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * @Property isp: Line type of EIP, value: BGP (multi-line).
     */
    readonly isp?: string | ros.IResolvable;
    /**
     * @Property name: The name of the Internet Shared Bandwidth instance.
     * The name must be 2 to 128 characters in length and can contain letters, numbers, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
     * start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance. Default to 100.
     * Note This parameter is only supported on the China site.
     */
    readonly ratio?: number | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCommonBandwidthPackage.TagsProperty[];
    /**
     * @Property zone: Zone Id.
     */
    readonly zone?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::CommonBandwidthPackage`, which is used to create an elastic IP address (EIP) bandwidth plan.
 * @Note This class does not contain additional functions, so it is recommended to use the `CommonBandwidthPackage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackage
 */
export declare class RosCommonBandwidthPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::CommonBandwidthPackage";
    /**
     * @Attribute BandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
     */
    readonly attrBandwidthPackageId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit\/s.
     */
    bandwidth: number | ros.IResolvable;
    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the Internet Shared Bandwidth instance.
     * The description must be 2 to 256 characters in length. It must start with a letter,
     * and cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property internetChargeType: The billing model of the Internet Shared Bandwidth instance. Allowed values:
     * PayByBandwidth (default): Billed by bandwidth.
     * PayBy95: Charged at Enhanced 95.
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property isp: Line type of EIP, value: BGP (multi-line).
     */
    isp: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the Internet Shared Bandwidth instance.
     * The name must be 2 to 128 characters in length and can contain letters, numbers, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
     * start with http:\/\/ or https:\/\/.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance. Default to 100.
     * Note This parameter is only supported on the China site.
     */
    ratio: number | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosCommonBandwidthPackage.TagsProperty[] | undefined;
    /**
     * @Property zone: Zone Id.
     */
    zone: string | ros.IResolvable | undefined;
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
export declare namespace RosCommonBandwidthPackage {
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
 * Properties for defining a `RosCommonBandwidthPackageIp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackageip
 */
export interface RosCommonBandwidthPackageIpProps {
    /**
     * @Property bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
     */
    readonly bandwidthPackageId: string | ros.IResolvable;
    /**
     * @Property eips: List of eip associated with the Internet Shared Bandwidth instance.
     */
    readonly eips: Array<RosCommonBandwidthPackageIp.EipsProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::CommonBandwidthPackageIp`, which is used to add EIPs to the Internet shared bandwidth instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `CommonBandwidthPackageIp` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackageip
 */
export declare class RosCommonBandwidthPackageIp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::CommonBandwidthPackageIp";
    /**
     * @Attribute AllocationIds: All eip allocation ids of common bandwidth package.
     */
    readonly attrAllocationIds: ros.IResolvable;
    /**
     * @Attribute IpAddresses: All eip addresses of common bandwidth package.
     */
    readonly attrIpAddresses: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
     */
    bandwidthPackageId: string | ros.IResolvable;
    /**
     * @Property eips: List of eip associated with the Internet Shared Bandwidth instance.
     */
    eips: Array<RosCommonBandwidthPackageIp.EipsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCommonBandwidthPackageIpProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCommonBandwidthPackageIp {
    /**
     * @stability external
     */
    interface EipsProperty {
        /**
         * @Property bandwidth: The maximum allocatable bandwidth value in Mbps within the shared bandwidth.
     * 0 which means no limit.
     * Default to no limit.
         */
        readonly bandwidth?: number | ros.IResolvable;
        /**
         * @Property allocationId: The ID of the EIP instance.
         */
        readonly allocationId: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosCustomerGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-customergateway
 */
export interface RosCustomerGatewayProps {
    /**
     * @Property ipAddress: The IP address of the user gateway.
     */
    readonly ipAddress: string | ros.IResolvable;
    /**
     * @Property asn: The autonomous system number of the local data center gateway device.
     */
    readonly asn?: number | ros.IResolvable;
    /**
     * @Property description: Description of the user gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property name: The name of the user gateway.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::CustomerGateway`, which is used to create a customer gateway.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomerGateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-customergateway
 */
export declare class RosCustomerGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::CustomerGateway";
    /**
     * @Attribute CustomerGatewayId: The ID of the user gateway.
     */
    readonly attrCustomerGatewayId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ipAddress: The IP address of the user gateway.
     */
    ipAddress: string | ros.IResolvable;
    /**
     * @Property asn: The autonomous system number of the local data center gateway device.
     */
    asn: number | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the user gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the user gateway.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:\/\/ or https:\/\/.
     */
    name: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosDhcpOptionsSet`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionsset
 */
export interface RosDhcpOptionsSetProps {
    /**
     * @Property dhcpOptionsSetDescription: The description of the DHCP options set.
     * The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly dhcpOptionsSetDescription?: string | ros.IResolvable;
    /**
     * @Property dhcpOptionsSetName: The name of the DHCP options set.
     * The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
     */
    readonly dhcpOptionsSetName?: string | ros.IResolvable;
    /**
     * @Property domainName: The root domain, for example, example.com.
     * After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
     */
    readonly domainName?: string | ros.IResolvable;
    /**
     * @Property domainNameServers: The DNS server IP addresses. Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
     */
    readonly domainNameServers?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::DhcpOptionsSet`, which is used to create Dynamic Host Configuration Protocol (DHCP) options sets.
 * @Note This class does not contain additional functions, so it is recommended to use the `DhcpOptionsSet` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionsset
 */
export declare class RosDhcpOptionsSet extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::DhcpOptionsSet";
    /**
     * @Attribute DhcpOptionsSetId: The ID of the DHCP options set that is created.
     */
    readonly attrDhcpOptionsSetId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dhcpOptionsSetDescription: The description of the DHCP options set.
     * The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    dhcpOptionsSetDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dhcpOptionsSetName: The name of the DHCP options set.
     * The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
     */
    dhcpOptionsSetName: string | ros.IResolvable | undefined;
    /**
     * @Property domainName: The root domain, for example, example.com.
     * After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
     */
    domainName: string | ros.IResolvable | undefined;
    /**
     * @Property domainNameServers: The DNS server IP addresses. Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
     */
    domainNameServers: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDhcpOptionsSetProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDhcpOptionsSetAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionssetattachment
 */
export interface RosDhcpOptionsSetAttachmentProps {
    /**
     * @Property dhcpOptionsSetId: The ID of the DHCP options set.
     */
    readonly dhcpOptionsSetId: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC network that is to be associated with the DHCP options set.
     */
    readonly vpcId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::DhcpOptionsSetAttachment`, which is used to associate a Dynamic Host Configuration Protocol (DHCP) options set with a virtual private cloud (VPC).
 * @Note This class does not contain additional functions, so it is recommended to use the `DhcpOptionsSetAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionssetattachment
 */
export declare class RosDhcpOptionsSetAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::DhcpOptionsSetAttachment";
    /**
     * @Attribute DhcpOptionsSetId: The ID of the DHCP options set.
     */
    readonly attrDhcpOptionsSetId: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the VPC network.
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dhcpOptionsSetId: The ID of the DHCP options set.
     */
    dhcpOptionsSetId: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC network that is to be associated with the DHCP options set.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDhcpOptionsSetAttachmentProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosEIP`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eip
 */
export interface RosEIPProps {
    /**
     * @Property autoPay: Automatic Payment. Default is true.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property bandwidth: Bandwidth for the output network. Default is 5MB.
     */
    readonly bandwidth?: number | ros.IResolvable;
    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http:\/\/  or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property instanceChargeType: The resource charge type. Default value is Postpaid
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * @Property isp: The line type. You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
     * BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
     * BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
     */
    readonly isp?: string | ros.IResolvable;
    /**
     * @Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http:\/\/  or https:\/\/
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property netmode: The network type. Valid value: public (public network).
     */
    readonly netmode?: string | ros.IResolvable;
    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36.
     *   While choose pay by year, it could be from 1 to 3.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * @Property publicIpAddressPoolId: The ID of the IP address pool. The EIP is allocated from the IP address pool.
     */
    readonly publicIpAddressPoolId?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property securityProtectionTypes: The edition of Anti-DDoS.
     * If you do not set this parameter, Anti-DDoS Origin Basic is used.
     * If you set the value to AntiDDoS_Enhanced, Anti-DDoS Pro\/Premium is used.
     */
    readonly securityProtectionTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosEIP.TagsProperty[];
    /**
     * @Property zone: Availability zone of the elastic public network IP.
     */
    readonly zone?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::EIP`, which is used to apply for an elastic IP address (EIP).
 * @Note This class does not contain additional functions, so it is recommended to use the `EIP` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eip
 */
export declare class RosEIP extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::EIP";
    /**
     * @Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
     */
    readonly attrAllocationId: ros.IResolvable;
    /**
     * @Attribute EipAddress: IP address of created EIP.
     */
    readonly attrEipAddress: ros.IResolvable;
    /**
     * @Attribute Isp: The line type.
     */
    readonly attrIsp: ros.IResolvable;
    /**
     * @Attribute OrderId: Order ID of prepaid EIP instance.
     */
    readonly attrOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property autoPay: Automatic Payment. Default is true.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property bandwidth: Bandwidth for the output network. Default is 5MB.
     */
    bandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http:\/\/  or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: The resource charge type. Default value is Postpaid
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property isp: The line type. You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
     * BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
     * BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
     */
    isp: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http:\/\/  or https:\/\/
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property netmode: The network type. Valid value: public (public network).
     */
    netmode: string | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36.
     *   While choose pay by year, it could be from 1 to 3.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    pricingCycle: string | ros.IResolvable | undefined;
    /**
     * @Property publicIpAddressPoolId: The ID of the IP address pool. The EIP is allocated from the IP address pool.
     */
    publicIpAddressPoolId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityProtectionTypes: The edition of Anti-DDoS.
     * If you do not set this parameter, Anti-DDoS Origin Basic is used.
     * If you set the value to AntiDDoS_Enhanced, Anti-DDoS Pro\/Premium is used.
     */
    securityProtectionTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosEIP.TagsProperty[] | undefined;
    /**
     * @Property zone: Availability zone of the elastic public network IP.
     */
    zone: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEIPProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosEIP {
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
 * Properties for defining a `RosEIPAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipassociation
 */
export interface RosEIPAssociationProps {
    /**
     * @Property allocationId: EIP instance id to bind.
     */
    readonly allocationId: string | ros.IResolvable;
    /**
     * @Property instanceId: ECS\/SLB\/NAT\/HaVip\/ENI instance id to bid the EIP.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property mode: The mode of association. Valid values:
     * NAT(Default): NAT mode.
     * BINDED: Cut-through mode.
     * MULTI_BINDED: Multi-EIP to ENI mode.
     * This is required only when the value of InstanceType is NetworkInterface.
     */
    readonly mode?: string | ros.IResolvable;
    /**
     * @Property privateIpAddress: An IP address in the CIDR block of the VSwitch.
     * If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::EIPAssociation`, which is used to associate an elastic IP address (EIP) with a cloud service instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `EIPAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipassociation
 */
export declare class RosEIPAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::EIPAssociation";
    /**
     * @Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
     */
    readonly attrAllocationId: ros.IResolvable;
    /**
     * @Attribute EipAddress: IP address of created EIP.
     */
    readonly attrEipAddress: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property allocationId: EIP instance id to bind.
     */
    allocationId: string | ros.IResolvable;
    /**
     * @Property instanceId: ECS\/SLB\/NAT\/HaVip\/ENI instance id to bid the EIP.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property mode: The mode of association. Valid values:
     * NAT(Default): NAT mode.
     * BINDED: Cut-through mode.
     * MULTI_BINDED: Multi-EIP to ENI mode.
     * This is required only when the value of InstanceType is NetworkInterface.
     */
    mode: string | ros.IResolvable | undefined;
    /**
     * @Property privateIpAddress: An IP address in the CIDR block of the VSwitch.
     * If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
     */
    privateIpAddress: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEIPAssociationProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosEIPPro`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eippro
 */
export interface RosEIPProProps {
    /**
     * @Property autoPay: Automatic Payment. Default is true.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property bandwidth: Bandwidth for the output network. Default is 5MB.
     */
    readonly bandwidth?: number | ros.IResolvable;
    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http:\/\/  or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property instanceChargeType: The resource charge type. Default value is Postpaid
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the requested EIP.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * @Property ipAddress: The IP address of the requested EIP.
     */
    readonly ipAddress?: string | ros.IResolvable;
    /**
     * @Property isp: The line type. You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
     * BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
     * BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
     */
    readonly isp?: string | ros.IResolvable;
    /**
     * @Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http:\/\/  or https:\/\/
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property netmode: The network type. Valid value: public (public network).
     */
    readonly netmode?: string | ros.IResolvable;
    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36.
     *   While choose pay by year, it could be from 1 to 3.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * @Property publicIpAddressPoolId: The ID of the IP address pool. The EIP is allocated from the IP address pool.
     */
    readonly publicIpAddressPoolId?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property securityProtectionTypes: The edition of Anti-DDoS.
     * If you do not set this parameter, Anti-DDoS Origin Basic is used.
     * If you set the value to AntiDDoS_Enhanced, Anti-DDoS Pro\/Premium is used.
     */
    readonly securityProtectionTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosEIPPro.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::EIPPro`, which is used to create an elastic IP address (EIP).
 * @Note This class does not contain additional functions, so it is recommended to use the `EIPPro` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eippro
 */
export declare class RosEIPPro extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::EIPPro";
    /**
     * @Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
     */
    readonly attrAllocationId: ros.IResolvable;
    /**
     * @Attribute EipAddress: IP address of created EIP.
     */
    readonly attrEipAddress: ros.IResolvable;
    /**
     * @Attribute ISP: The line type.
     */
    readonly attrIsp: ros.IResolvable;
    /**
     * @Attribute OrderId: Order ID of prepaid EIP instance.
     */
    readonly attrOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property autoPay: Automatic Payment. Default is true.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property bandwidth: Bandwidth for the output network. Default is 5MB.
     */
    bandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http:\/\/  or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: The resource charge type. Default value is Postpaid
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: The ID of the requested EIP.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property ipAddress: The IP address of the requested EIP.
     */
    ipAddress: string | ros.IResolvable | undefined;
    /**
     * @Property isp: The line type. You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
     * BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
     * BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
     */
    isp: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http:\/\/  or https:\/\/
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property netmode: The network type. Valid value: public (public network).
     */
    netmode: string | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36.
     *   While choose pay by year, it could be from 1 to 3.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    pricingCycle: string | ros.IResolvable | undefined;
    /**
     * @Property publicIpAddressPoolId: The ID of the IP address pool. The EIP is allocated from the IP address pool.
     */
    publicIpAddressPoolId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityProtectionTypes: The edition of Anti-DDoS.
     * If you do not set this parameter, Anti-DDoS Origin Basic is used.
     * If you set the value to AntiDDoS_Enhanced, Anti-DDoS Pro\/Premium is used.
     */
    securityProtectionTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosEIPPro.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEIPProProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosEIPPro {
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
 * Properties for defining a `RosEIPSegment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipsegment
 */
export interface RosEIPSegmentProps {
    /**
     * @Property eipMask: The mask of the contiguous EIP group. Valid values:
     * 28: 16 contiguous EIPs are allocated for one call.
     * 27: 32 contiguous EIPs are allocated for one call.
     * 26: 64 contiguous EIPs are allocated for one call.
     * 25: 128 contiguous EIPs are allocated for one call.
     * 24: 256 contiguous EIPs are allocated for one call.
     * Note The actual number of assigned EIPs may be less than the expected number because one,
     * three, or four EIPs may be reserved.
     */
    readonly eipMask: number | ros.IResolvable;
    /**
     * @Property bandwidth: The maximum bandwidth of the contiguous EIPs. Unit: Mbit\/s. Default value: 5.
     */
    readonly bandwidth?: number | ros.IResolvable;
    /**
     * @Property internetChargeType: The metering method of the contiguous EIPs. Valid values:
     * PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
     * PayByTraffic: Fees are charged based on data transfer.
     * Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * @Property netmode: The network type. Valid values:
     * public: the Internet. This is the default value. After contiguous EIPs are associated with
     * cloud resources, the cloud resources can access the Internet by using the EIPs.
     * hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
     * cloud resources can access the hybrid cloud by using the EIPs.
     * Note This network type is available only to users who are added to the whitelist. To use
     * this network type, contact your customer manager.
     */
    readonly netmode?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the EIPs belong.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::EIPSegment`, which is used to apply for contiguous elastic IP addresses (EIPs).
 * @Note This class does not contain additional functions, so it is recommended to use the `EIPSegment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipsegment
 */
export declare class RosEIPSegment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::EIPSegment";
    /**
     * @Attribute EipAddresses: List of EIP addresses. like [{"AllocationId": "eip-xxx", "IpAddress": "xx.xx.xx.xx"}]
     */
    readonly attrEipAddresses: ros.IResolvable;
    /**
     * @Attribute EipSegmentInstanceId: The ID of the contiguous EIP group.
     */
    readonly attrEipSegmentInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property eipMask: The mask of the contiguous EIP group. Valid values:
     * 28: 16 contiguous EIPs are allocated for one call.
     * 27: 32 contiguous EIPs are allocated for one call.
     * 26: 64 contiguous EIPs are allocated for one call.
     * 25: 128 contiguous EIPs are allocated for one call.
     * 24: 256 contiguous EIPs are allocated for one call.
     * Note The actual number of assigned EIPs may be less than the expected number because one,
     * three, or four EIPs may be reserved.
     */
    eipMask: number | ros.IResolvable;
    /**
     * @Property bandwidth: The maximum bandwidth of the contiguous EIPs. Unit: Mbit\/s. Default value: 5.
     */
    bandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property internetChargeType: The metering method of the contiguous EIPs. Valid values:
     * PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
     * PayByTraffic: Fees are charged based on data transfer.
     * Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property netmode: The network type. Valid values:
     * public: the Internet. This is the default value. After contiguous EIPs are associated with
     * cloud resources, the cloud resources can access the Internet by using the EIPs.
     * hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
     * cloud resources can access the hybrid cloud by using the EIPs.
     * Note This network type is available only to users who are added to the whitelist. To use
     * this network type, contact your customer manager.
     */
    netmode: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the EIPs belong.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEIPSegmentProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-flowlog
 */
export interface RosFlowLogProps {
    /**
     * @Property logStoreName: The log store name.
     */
    readonly logStoreName: string | ros.IResolvable;
    /**
     * @Property projectName: The project name.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * @Property resourceId: The resource id.
     */
    readonly resourceId: string | ros.IResolvable;
    /**
     * @Property resourceType: The resource type.
     */
    readonly resourceType: string | ros.IResolvable;
    /**
     * @Property trafficType: The traffic type.
     */
    readonly trafficType: string | ros.IResolvable;
    /**
     * @Property description: The Description of flow log.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property flowLogName: The flow log name.
     */
    readonly flowLogName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::FlowLog`, which is used to create a flow log.
 * @Note This class does not contain additional functions, so it is recommended to use the `FlowLog` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-flowlog
 */
export declare class RosFlowLog extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::FlowLog";
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
     * @Property logStoreName: The log store name.
     */
    logStoreName: string | ros.IResolvable;
    /**
     * @Property projectName: The project name.
     */
    projectName: string | ros.IResolvable;
    /**
     * @Property resourceId: The resource id.
     */
    resourceId: string | ros.IResolvable;
    /**
     * @Property resourceType: The resource type.
     */
    resourceType: string | ros.IResolvable;
    /**
     * @Property trafficType: The traffic type.
     */
    trafficType: string | ros.IResolvable;
    /**
     * @Property description: The Description of flow log.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property flowLogName: The flow log name.
     */
    flowLogName: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosForwardEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-forwardentry
 */
export interface RosForwardEntryProps {
    /**
     * @Property externalIp: Source IP, must belongs to bandwidth package internet IP
     */
    readonly externalIp: string | ros.IResolvable;
    /**
     * @Property externalPort: Source port, now support [1-65535]|Any|x\/y
     */
    readonly externalPort: string | ros.IResolvable;
    /**
     * @Property forwardTableId: Create forward entry in specified forward table.
     */
    readonly forwardTableId: string | ros.IResolvable;
    /**
     * @Property internalIp: Destination IP, must belong to VPC private IP
     */
    readonly internalIp: string | ros.IResolvable;
    /**
     * @Property internalPort: Destination port, now support [1-65535]|Any|x\/y
     */
    readonly internalPort: string | ros.IResolvable;
    /**
     * @Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
     */
    readonly ipProtocol: string | ros.IResolvable;
    /**
     * @Property forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
     */
    readonly forwardEntryName?: string | ros.IResolvable;
    /**
     * @Property portBreak: Specifies whether to remove limits on the port range.
     */
    readonly portBreak?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::ForwardEntry`, which is used to add a DNAT entry to a DNAT table.
 * @Note This class does not contain additional functions, so it is recommended to use the `ForwardEntry` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-forwardentry
 */
export declare class RosForwardEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::ForwardEntry";
    /**
     * @Attribute ForwardEntryId: The id of created forward entry.
     */
    readonly attrForwardEntryId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property externalIp: Source IP, must belongs to bandwidth package internet IP
     */
    externalIp: string | ros.IResolvable;
    /**
     * @Property externalPort: Source port, now support [1-65535]|Any|x\/y
     */
    externalPort: string | ros.IResolvable;
    /**
     * @Property forwardTableId: Create forward entry in specified forward table.
     */
    forwardTableId: string | ros.IResolvable;
    /**
     * @Property internalIp: Destination IP, must belong to VPC private IP
     */
    internalIp: string | ros.IResolvable;
    /**
     * @Property internalPort: Destination port, now support [1-65535]|Any|x\/y
     */
    internalPort: string | ros.IResolvable;
    /**
     * @Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
     */
    ipProtocol: string | ros.IResolvable;
    /**
     * @Property forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
     */
    forwardEntryName: string | ros.IResolvable | undefined;
    /**
     * @Property portBreak: Specifies whether to remove limits on the port range.
     */
    portBreak: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosForwardEntryProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosFullNatEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-fullnatentry
 */
export interface RosFullNatEntryProps {
    /**
     * @Property accessIp: The backend IP address to be modified in FULLNAT address translation.
     */
    readonly accessIp: string | ros.IResolvable;
    /**
     * @Property accessPort: The backend port to be modified in the mapping of FULLNAT port. Valid values: 1 to 65535.
     */
    readonly accessPort: string | ros.IResolvable;
    /**
     * @Property fullNatTableId: The ID of the FULLNAT table to which the FULLNAT entry belongs.
     */
    readonly fullNatTableId: string | ros.IResolvable;
    /**
     * @Property ipProtocol: The protocol of the packets that are forwarded by the port. Valid values:
     * TCP
     * UDP
     */
    readonly ipProtocol: string | ros.IResolvable;
    /**
     * @Property natIp: The NAT IP address that provides address translation.
     */
    readonly natIp: string | ros.IResolvable;
    /**
     * @Property natIpPort: The frontend port to be modified in the mapping of FULLNAT port. Valid values: 1 to 65535.
     */
    readonly natIpPort: string | ros.IResolvable;
    /**
     * @Property networkInterfaceId: The elastic network interface (ENI) ID.
     */
    readonly networkInterfaceId: string | ros.IResolvable;
    /**
     * @Property fullNatEntryDescription: The description of the FULLNAT entry.
     * This parameter is optional. If you enter a description, the description must be 2 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/.
     */
    readonly fullNatEntryDescription?: string | ros.IResolvable;
    /**
     * @Property fullNatEntryName: The FULLNAT entry name. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly fullNatEntryName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::FullNatEntry`, which is used to add a FULLNAT entry to a FULLNAT table.
 * @Note This class does not contain additional functions, so it is recommended to use the `FullNatEntry` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-fullnatentry
 */
export declare class RosFullNatEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::FullNatEntry";
    /**
     * @Attribute FullNatEntryId: The FULLNAT entry ID.
     */
    readonly attrFullNatEntryId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessIp: The backend IP address to be modified in FULLNAT address translation.
     */
    accessIp: string | ros.IResolvable;
    /**
     * @Property accessPort: The backend port to be modified in the mapping of FULLNAT port. Valid values: 1 to 65535.
     */
    accessPort: string | ros.IResolvable;
    /**
     * @Property fullNatTableId: The ID of the FULLNAT table to which the FULLNAT entry belongs.
     */
    fullNatTableId: string | ros.IResolvable;
    /**
     * @Property ipProtocol: The protocol of the packets that are forwarded by the port. Valid values:
     * TCP
     * UDP
     */
    ipProtocol: string | ros.IResolvable;
    /**
     * @Property natIp: The NAT IP address that provides address translation.
     */
    natIp: string | ros.IResolvable;
    /**
     * @Property natIpPort: The frontend port to be modified in the mapping of FULLNAT port. Valid values: 1 to 65535.
     */
    natIpPort: string | ros.IResolvable;
    /**
     * @Property networkInterfaceId: The elastic network interface (ENI) ID.
     */
    networkInterfaceId: string | ros.IResolvable;
    /**
     * @Property fullNatEntryDescription: The description of the FULLNAT entry.
     * This parameter is optional. If you enter a description, the description must be 2 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/.
     */
    fullNatEntryDescription: string | ros.IResolvable | undefined;
    /**
     * @Property fullNatEntryName: The FULLNAT entry name. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    fullNatEntryName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFullNatEntryProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosGrantInstanceToCen`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-grantinstancetocen
 */
export interface RosGrantInstanceToCenProps {
    /**
     * @Property cenId: The ID of the CEN instance to be authorized.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * @Property cenOwnerId: The UID of the account to which the target CEN instance belongs.
     */
    readonly cenOwnerId: number | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the network instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property instanceType: The type of the network instance. Valid values:
     * VPC: Virtual Private Cloud (VPC).
     * VBR: Virtual Border Router (VBR).
     * CCN: Cloud Connect Network (CCN).
     */
    readonly instanceType: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::GrantInstanceToCen`, which is used to authorize a CEN instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `GrantInstanceToCen` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-grantinstancetocen
 */
export declare class RosGrantInstanceToCen extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::GrantInstanceToCen";
    /**
     * @Attribute CenId: The ID of the CEN instance to be authorized.
     */
    readonly attrCenId: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the network instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cenId: The ID of the CEN instance to be authorized.
     */
    cenId: string | ros.IResolvable;
    /**
     * @Property cenOwnerId: The UID of the account to which the target CEN instance belongs.
     */
    cenOwnerId: number | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the network instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property instanceType: The type of the network instance. Valid values:
     * VPC: Virtual Private Cloud (VPC).
     * VBR: Virtual Border Router (VBR).
     * CCN: Cloud Connect Network (CCN).
     */
    instanceType: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGrantInstanceToCenProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havip
 */
export interface RosHaVipProps {
    /**
     * @Property vSwitchId: The ID of the vSwitch to which the HAVIP belongs.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property description: The description of the HAVIP.
     * The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property ipAddress: The IP address of the HAVIP. The specified IP address must be an idle IP address that falls within the CIDR block of the vSwitch. If this parameter is not set, an idle IP address from the CIDR block of the vSwitch is randomly assigned to the HAVIP.
     */
    readonly ipAddress?: string | ros.IResolvable;
    /**
     * @Property name: The name of the HAVIP.
     * The name must be 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the HAVIP belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosHaVip.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::HaVip`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HaVip` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havip
 */
export declare class RosHaVip extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::HaVip";
    /**
     * @Attribute HaVipId: Assigned HaVip ID.
     */
    readonly attrHaVipId: ros.IResolvable;
    /**
     * @Attribute IpAddress: The IP address of the HAVIP.
     */
    readonly attrIpAddress: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vSwitchId: The ID of the vSwitch to which the HAVIP belongs.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property description: The description of the HAVIP.
     * The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property ipAddress: The IP address of the HAVIP. The specified IP address must be an idle IP address that falls within the CIDR block of the vSwitch. If this parameter is not set, an idle IP address from the CIDR block of the vSwitch is randomly assigned to the HAVIP.
     */
    ipAddress: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the HAVIP.
     * The name must be 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the HAVIP belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosHaVip.TagsProperty[] | undefined;
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
export declare namespace RosHaVip {
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
 * Properties for defining a `RosHaVipAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havipassociation
 */
export interface RosHaVipAssociationProps {
    /**
     * @Property haVipId: The ID of the HAVIP.
     */
    readonly haVipId: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the ECS instance to be associated with the HAVIP.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property instanceType: The type of the instance to be associated with the HAVIP. Valid values:
     * EcsInstance: an ECS instance
     * NetworkInterface: an ENI. If you want to associate the HAVIP with an ENI, this parameter is required.
     */
    readonly instanceType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::HaVipAssociation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HaVipAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havipassociation
 */
export declare class RosHaVipAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::HaVipAssociation";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property haVipId: The ID of the HAVIP.
     */
    haVipId: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the ECS instance to be associated with the HAVIP.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property instanceType: The type of the instance to be associated with the HAVIP. Valid values:
     * EcsInstance: an ECS instance
     * NetworkInterface: an ENI. If you want to associate the HAVIP with an ENI, this parameter is required.
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHaVipAssociationProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosIpsecServer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipsecserver
 */
export interface RosIpsecServerProps {
    /**
     * @Property clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client. Note: The client network segment cannot conflict with the VPC side network segment.
     */
    readonly clientIpPool: string | ros.IResolvable;
    /**
     * @Property localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment. Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0\/24,192.168.2.0\/24.
     */
    readonly localSubnet: string | ros.IResolvable;
    /**
     * @Property vpnGatewayId: VPN gateway instance ID.
     */
    readonly vpnGatewayId: string | ros.IResolvable;
    /**
     * @Property effectImmediately: true: Apply the new configuration and trigger a reconnection immediately.
     * false: Trigger a reconnection only when network traffic occurs. (The reconnection may cause the network to be unavailable for a brief moment)
     */
    readonly effectImmediately?: boolean | ros.IResolvable;
    /**
     * @Property ikeConfig: Negotiation parameter configuration in the first phase.
     */
    readonly ikeConfig?: RosIpsecServer.IkeConfigProperty | ros.IResolvable;
    /**
     * @Property ipsecConfig: Negotiation parameter configuration in the second phase.
     */
    readonly ipsecConfig?: RosIpsecServer.IpsecConfigProperty | ros.IResolvable;
    /**
     * @Property ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character. It can contain digits, underscores (_), and hyphens (-).
     */
    readonly ipsecServerName?: string | ros.IResolvable;
    /**
     * @Property psk: Pre-Shared key. Used for identity authentication between the VPN gateway and the client. A 16-bit random string is randomly generated by default, or you can manually specify the key. The length is limited to 100 characters.
     */
    readonly psk?: string | ros.IResolvable;
    /**
     * @Property pskEnabled: Whether to enable the pre-shared key authentication method. Only the value is true, which means that the pre-shared key authentication mode is enabled.
     */
    readonly pskEnabled?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::IpsecServer`, which is used to create an IPsec-VPN server.
 * @Note This class does not contain additional functions, so it is recommended to use the `IpsecServer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipsecserver
 */
export declare class RosIpsecServer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::IpsecServer";
    /**
     * @Attribute IpsecServerId: IPsec server ID.
     */
    readonly attrIpsecServerId: ros.IResolvable;
    /**
     * @Attribute IpsecServerName: IPsec server name.
     */
    readonly attrIpsecServerName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client. Note: The client network segment cannot conflict with the VPC side network segment.
     */
    clientIpPool: string | ros.IResolvable;
    /**
     * @Property localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment. Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0\/24,192.168.2.0\/24.
     */
    localSubnet: string | ros.IResolvable;
    /**
     * @Property vpnGatewayId: VPN gateway instance ID.
     */
    vpnGatewayId: string | ros.IResolvable;
    /**
     * @Property effectImmediately: true: Apply the new configuration and trigger a reconnection immediately.
     * false: Trigger a reconnection only when network traffic occurs. (The reconnection may cause the network to be unavailable for a brief moment)
     */
    effectImmediately: boolean | ros.IResolvable | undefined;
    /**
     * @Property ikeConfig: Negotiation parameter configuration in the first phase.
     */
    ikeConfig: RosIpsecServer.IkeConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property ipsecConfig: Negotiation parameter configuration in the second phase.
     */
    ipsecConfig: RosIpsecServer.IpsecConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character. It can contain digits, underscores (_), and hyphens (-).
     */
    ipsecServerName: string | ros.IResolvable | undefined;
    /**
     * @Property psk: Pre-Shared key. Used for identity authentication between the VPN gateway and the client. A 16-bit random string is randomly generated by default, or you can manually specify the key. The length is limited to 100 characters.
     */
    psk: string | ros.IResolvable | undefined;
    /**
     * @Property pskEnabled: Whether to enable the pre-shared key authentication method. Only the value is true, which means that the pre-shared key authentication mode is enabled.
     */
    pskEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpsecServerProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosIpsecServer {
    /**
     * @stability external
     */
    interface IkeConfigProperty {
        /**
         * @Property ikeAuthAlg: The authentication algorithm negotiated in the first phase. Default value: sha1.
         */
        readonly ikeAuthAlg?: string | ros.IResolvable;
        /**
         * @Property localId: IPsec server ID. Support FQDN and IP address format, the default value is the VPN gateway public network IP address.
         */
        readonly localId?: string | ros.IResolvable;
        /**
         * @Property ikeEncAlg: Encryption algorithm negotiated in the first stage. Default value: aes.
         */
        readonly ikeEncAlg?: string | ros.IResolvable;
        /**
         * @Property ikeVersion: The version of the IKE protocol. Value: ikev1 or ikev2, default value: ikev2.
         */
        readonly ikeVersion?: string | ros.IResolvable;
        /**
         * @Property ikeMode: Negotiation mode of the IKE version. Default value: main.
         */
        readonly ikeMode?: string | ros.IResolvable;
        /**
         * @Property ikeLifetime: The life cycle of the SA negotiated in the first phase. Default value: 86400, in seconds.
         */
        readonly ikeLifetime?: number | ros.IResolvable;
        /**
         * @Property remoteId: Peer ID. Support FQDN and IP address format, the default value is empty.
         */
        readonly remoteId?: string | ros.IResolvable;
        /**
         * @Property ikePfs: The Diffie-Hellman key exchange algorithm used in the first stage of negotiation. Default value: group2.
         */
        readonly ikePfs?: string | ros.IResolvable;
    }
}
export declare namespace RosIpsecServer {
    /**
     * @stability external
     */
    interface IpsecConfigProperty {
        /**
         * @Property ipsecPfs: The Diffie-Hellman key exchange algorithm used in the second phase of negotiation. Default value: group2.
         */
        readonly ipsecPfs?: string | ros.IResolvable;
        /**
         * @Property ipsecEncAlg: Encryption algorithm negotiated in the second stage. Default value: aes.
         */
        readonly ipsecEncAlg?: string | ros.IResolvable;
        /**
         * @Property ipsecAuthAlg: The authentication algorithm negotiated in the second phase. Default value: sha1.
         */
        readonly ipsecAuthAlg?: string | ros.IResolvable;
        /**
         * @Property ipsecLifetime: The lifetime of the SA negotiated in the second stage. Default value: 86400, in seconds.
         */
        readonly ipsecLifetime?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosIpv4Gateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv4gateway
 */
export interface RosIpv4GatewayProps {
    /**
     * @Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property ipv4GatewayDescription: Description information.
     */
    readonly ipv4GatewayDescription?: string | ros.IResolvable;
    /**
     * @Property ipv4GatewayName: Resource name.
     */
    readonly ipv4GatewayName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::Ipv4Gateway`, which is used to create an IPv4 gateway.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ipv4Gateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv4gateway
 */
export declare class RosIpv4Gateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::Ipv4Gateway";
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
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
     * @Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property ipv4GatewayDescription: Description information.
     */
    ipv4GatewayDescription: string | ros.IResolvable | undefined;
    /**
     * @Property ipv4GatewayName: Resource name.
     */
    ipv4GatewayName: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosIpv6Gateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6gateway
 */
export interface RosIpv6GatewayProps {
    /**
     * @Property vpcId: To open VPC ID IPv6 gateway.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property description: Description of IPv6 gateway.
     * Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): \/\/ or https: \/\/ at the beginning .
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property name: Name of the IPv6 gateway.
     * Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): \/\/ or with https: \/\/ .
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property spec: Specifications IPv6 gateway, the value:
     * Small (default): Free.
     * Medium: Enterprise Edition.
     * Large: Enterprise Enhanced Edition.
     * Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
     */
    readonly spec?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosIpv6Gateway.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::Ipv6Gateway`, which is used to create an IPv6 gateway.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ipv6Gateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6gateway
 */
export declare class RosIpv6Gateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::Ipv6Gateway";
    /**
     * @Attribute Ipv6GatewayId: ID IPv6 gateway.
     */
    readonly attrIpv6GatewayId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vpcId: To open VPC ID IPv6 gateway.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property description: Description of IPv6 gateway.
     * Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): \/\/ or https: \/\/ at the beginning .
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property name: Name of the IPv6 gateway.
     * Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): \/\/ or with https: \/\/ .
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property spec: Specifications IPv6 gateway, the value:
     * Small (default): Free.
     * Medium: Enterprise Edition.
     * Large: Enterprise Enhanced Edition.
     * Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
     */
    spec: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosIpv6Gateway.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpv6GatewayProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosIpv6Gateway {
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
 * Properties for defining a `RosIpv6InternetBandwidth`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6internetbandwidth
 */
export interface RosIpv6InternetBandwidthProps {
    /**
     * @Property bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.
     * When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000.
     * When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications.
     * Small (default free version), the public network bandwidth range 1-500.
     * Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000.
     * Large (Enterprise Edition), the public network bandwidth range 1-2000.
     */
    readonly bandwidth: number | ros.IResolvable;
    /**
     * @Property ipv6AddressId: ID of IPv6 address.
     */
    readonly ipv6AddressId: string | ros.IResolvable;
    /**
     * @Property ipv6GatewayId: ID of IPv6 gateway.
     */
    readonly ipv6GatewayId: string | ros.IResolvable;
    /**
     * @Property internetChargeType: IPv6 public network bandwidth billing, value:
     * - **PayByTraffic**: by using the traffic accounting.
     * - **PayByBandwidth** (default): Bandwidth billing.
     */
    readonly internetChargeType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::Ipv6InternetBandwidth`, which is used to purchase Internet bandwidth for an IPv6 address.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ipv6InternetBandwidth` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6internetbandwidth
 */
export declare class RosIpv6InternetBandwidth extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::Ipv6InternetBandwidth";
    /**
     * @Attribute InternetBandwidthId: Purchase of public network bandwidth.
     */
    readonly attrInternetBandwidthId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.
     * When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000.
     * When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications.
     * Small (default free version), the public network bandwidth range 1-500.
     * Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000.
     * Large (Enterprise Edition), the public network bandwidth range 1-2000.
     */
    bandwidth: number | ros.IResolvable;
    /**
     * @Property ipv6AddressId: ID of IPv6 address.
     */
    ipv6AddressId: string | ros.IResolvable;
    /**
     * @Property ipv6GatewayId: ID of IPv6 gateway.
     */
    ipv6GatewayId: string | ros.IResolvable;
    /**
     * @Property internetChargeType: IPv6 public network bandwidth billing, value:
     * - **PayByTraffic**: by using the traffic accounting.
     * - **PayByBandwidth** (default): Bandwidth billing.
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpv6InternetBandwidthProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natgateway
 */
export interface RosNatGatewayProps {
    /**
     * @Property vpcId: The VPC id to create NAT gateway.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The VSwitch id to create NAT gateway.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property autoPay: Specifies whether to enable automatic payment. Default is true.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property description: Description of the NAT gateway, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property duration: The subscription duration. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
     */
    readonly duration?: number | ros.IResolvable;
    /**
     * @Property eipBindMode: The mode in which the EIP is associated with the NAT gateway. Valid values:MULTI_BINDED (default): the multi-EIP-to-ENI mode.
     * NAT: NAT mode. IPv4 gateways are supported.
     * Note If the EIP is associated with the NAT gateway in NAT mode,
     * the EIP occupies a private IP address of the vSwitch to which the NAT gateway belongs.
     * Make sure that the vSwitch has sufficient private IP addresses.
     * Otherwise, the EIP cannot be associated with the NAT gateway.
     * In NAT mode, a maximum number of 50 EIPs can be associated with each NAT gateway.
     */
    readonly eipBindMode?: string | ros.IResolvable;
    /**
     * @Property icmpReplyEnabled: Specifies whether to enable the ICMP non-retrieval feature. Default: True
     */
    readonly icmpReplyEnabled?: boolean | ros.IResolvable;
    /**
     * @Property instanceChargeType: The billing method. The default value is PostPaid (which means pay-as-you-go).
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property internetChargeType: The billing method for the NAT gateway. Valid values:
     * PayBySpec: billed on a pay-by-specification basis.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * @Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly natGatewayName?: string | ros.IResolvable;
    /**
     * @Property natType: The type of the NAT gateway. Valid values:
     * - Enhanced: enhanced NAT gateway.
     */
    readonly natType?: string | ros.IResolvable;
    /**
     * @Property networkType: The type of the created NAT gateway.
     * Internet: public network NAT gateway.
     * Intranet: VPC NAT gateway.
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value.
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * @Property securityProtectionEnabled: Specifies whether to enable the firewall feature. Default: False
     */
    readonly securityProtectionEnabled?: boolean | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosNatGateway.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::NatGateway`, which is used to create a NAT gateway.
 * @Note This class does not contain additional functions, so it is recommended to use the `NatGateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natgateway
 */
export declare class RosNatGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::NatGateway";
    /**
     * @Attribute ForwardTableId: The forward table id.
     */
    readonly attrForwardTableId: ros.IResolvable;
    /**
     * @Attribute NatGatewayId: The Id of created NAT gateway.
     */
    readonly attrNatGatewayId: ros.IResolvable;
    /**
     * @Attribute SNatTableId: The SNAT table id.
     */
    readonly attrSNatTableId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vpcId: The VPC id to create NAT gateway.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The VSwitch id to create NAT gateway.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property autoPay: Specifies whether to enable automatic payment. Default is true.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips. Default value is false.
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the NAT gateway, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property duration: The subscription duration. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
     */
    duration: number | ros.IResolvable | undefined;
    /**
     * @Property eipBindMode: The mode in which the EIP is associated with the NAT gateway. Valid values:MULTI_BINDED (default): the multi-EIP-to-ENI mode.
     * NAT: NAT mode. IPv4 gateways are supported.
     * Note If the EIP is associated with the NAT gateway in NAT mode,
     * the EIP occupies a private IP address of the vSwitch to which the NAT gateway belongs.
     * Make sure that the vSwitch has sufficient private IP addresses.
     * Otherwise, the EIP cannot be associated with the NAT gateway.
     * In NAT mode, a maximum number of 50 EIPs can be associated with each NAT gateway.
     */
    eipBindMode: string | ros.IResolvable | undefined;
    /**
     * @Property icmpReplyEnabled: Specifies whether to enable the ICMP non-retrieval feature. Default: True
     */
    icmpReplyEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: The billing method. The default value is PostPaid (which means pay-as-you-go).
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property internetChargeType: The billing method for the NAT gateway. Valid values:
     * PayBySpec: billed on a pay-by-specification basis.
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    natGatewayName: string | ros.IResolvable | undefined;
    /**
     * @Property natType: The type of the NAT gateway. Valid values:
     * - Enhanced: enhanced NAT gateway.
     */
    natType: string | ros.IResolvable | undefined;
    /**
     * @Property networkType: The type of the created NAT gateway.
     * Internet: public network NAT gateway.
     * Intranet: VPC NAT gateway.
     */
    networkType: string | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value.
     */
    pricingCycle: string | ros.IResolvable | undefined;
    /**
     * @Property securityProtectionEnabled: Specifies whether to enable the firewall feature. Default: False
     */
    securityProtectionEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosNatGateway.TagsProperty[] | undefined;
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
export declare namespace RosNatGateway {
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
 * Properties for defining a `RosNatIp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natip
 */
export interface RosNatIpProps {
    /**
     * @Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway for which you want to create
     * the NAT IP address.
     */
    readonly natGatewayId: string | ros.IResolvable;
    /**
     * @Property natIpCidr: The CIDR block to which the NAT IP address belongs.
     */
    readonly natIpCidr: string | ros.IResolvable;
    /**
     * @Property natIpDescription: The description of the NAT IP address.
     * The description must be 2 to 256 characters in length. It must start with a letter
     * but cannot start with http:\/\/ or https:\/\/.
     */
    readonly natIpDescription: string | ros.IResolvable;
    /**
     * @Property natIpName: The name of the NAT IP address.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter. It cannot start
     * with http:\/\/ or https:\/\/.
     */
    readonly natIpName: string | ros.IResolvable;
    /**
     * @Property natIp: The NAT IP address that you want to create.
     * If you do not specify an IP address, the system selects a random IP address from the
     * specified CIDR block.
     */
    readonly natIp?: string | ros.IResolvable;
    /**
     * @Property natIpCidrId: The ID of the CIDR block to which the NAT IP address belongs.
     */
    readonly natIpCidrId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::NatIp`, which is used to create a NAT IP address.
 * @Note This class does not contain additional functions, so it is recommended to use the `NatIp` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natip
 */
export declare class RosNatIp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::NatIp";
    /**
     * @Attribute NatIp: NAT IP address.
     */
    readonly attrNatIp: ros.IResolvable;
    /**
     * @Attribute NatIpId: The ID of the NAT IP address.
     */
    readonly attrNatIpId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway for which you want to create
     * the NAT IP address.
     */
    natGatewayId: string | ros.IResolvable;
    /**
     * @Property natIpCidr: The CIDR block to which the NAT IP address belongs.
     */
    natIpCidr: string | ros.IResolvable;
    /**
     * @Property natIpDescription: The description of the NAT IP address.
     * The description must be 2 to 256 characters in length. It must start with a letter
     * but cannot start with http:\/\/ or https:\/\/.
     */
    natIpDescription: string | ros.IResolvable;
    /**
     * @Property natIpName: The name of the NAT IP address.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter. It cannot start
     * with http:\/\/ or https:\/\/.
     */
    natIpName: string | ros.IResolvable;
    /**
     * @Property natIp: The NAT IP address that you want to create.
     * If you do not specify an IP address, the system selects a random IP address from the
     * specified CIDR block.
     */
    natIp: string | ros.IResolvable | undefined;
    /**
     * @Property natIpCidrId: The ID of the CIDR block to which the NAT IP address belongs.
     */
    natIpCidrId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNatIpProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosNatIpCidr`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natipcidr
 */
export interface RosNatIpCidrProps {
    /**
     * @Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway with which you want to associate the CIDR block.
     */
    readonly natGatewayId: string | ros.IResolvable;
    /**
     * @Property natIpCidr: The NAT CIDR block that you want to associate with the NAT gateway.
     * The new CIDR block must meet the following conditions:
     * The NAT CIDR block must fall within 10.0.0.0\/8, 172.16.0.0\/12, 192.168.0.0\/16, or their subnets.
     * The subnet mask must be 16 to 32 bits in length.
     * The NAT CIDR block cannot overlap with the private CIDR block of the VPC to which the NAT gateway belongs. If you want to use other IP addresses from the private CIDR block of the VPC to provide NAT services, create a vSwitch and attach the vSwitch to another VPC NAT gateway.
     * If you want to use public IP addresses to provide NAT services, make sure that the public IP addresses fall within a customer CIDR block of the VPC to which the VPC NAT gateway belongs. For more information, see What is customer CIDR block?.
     */
    readonly natIpCidr: string | ros.IResolvable;
    /**
     * @Property natIpCidrDescription: The description of the NAT CIDR block.
     * The description must be 2 to 256 characters in length and start with a letter. The description cannot start with http:\/\/ or https:\/\/.
     */
    readonly natIpCidrDescription: string | ros.IResolvable;
    /**
     * @Property natIpCidrName: The name of the CIDR block.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter. The name must start with a letter and cannot start with http:\/\/ or https:\/\/.
     */
    readonly natIpCidrName: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::NatIpCidr`, which is used to create a NAT CIDR block.
 * @Note This class does not contain additional functions, so it is recommended to use the `NatIpCidr` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natipcidr
 */
export declare class RosNatIpCidr extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::NatIpCidr";
    /**
     * @Attribute NatIpCidrId: The ID of the NAT CIDR block.
     */
    readonly attrNatIpCidrId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway with which you want to associate the CIDR block.
     */
    natGatewayId: string | ros.IResolvable;
    /**
     * @Property natIpCidr: The NAT CIDR block that you want to associate with the NAT gateway.
     * The new CIDR block must meet the following conditions:
     * The NAT CIDR block must fall within 10.0.0.0\/8, 172.16.0.0\/12, 192.168.0.0\/16, or their subnets.
     * The subnet mask must be 16 to 32 bits in length.
     * The NAT CIDR block cannot overlap with the private CIDR block of the VPC to which the NAT gateway belongs. If you want to use other IP addresses from the private CIDR block of the VPC to provide NAT services, create a vSwitch and attach the vSwitch to another VPC NAT gateway.
     * If you want to use public IP addresses to provide NAT services, make sure that the public IP addresses fall within a customer CIDR block of the VPC to which the VPC NAT gateway belongs. For more information, see What is customer CIDR block?.
     */
    natIpCidr: string | ros.IResolvable;
    /**
     * @Property natIpCidrDescription: The description of the NAT CIDR block.
     * The description must be 2 to 256 characters in length and start with a letter. The description cannot start with http:\/\/ or https:\/\/.
     */
    natIpCidrDescription: string | ros.IResolvable;
    /**
     * @Property natIpCidrName: The name of the CIDR block.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter. The name must start with a letter and cannot start with http:\/\/ or https:\/\/.
     */
    natIpCidrName: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNatIpCidrProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosNetworkAcl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkacl
 */
export interface RosNetworkAclProps {
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property description: The description of the network ACL.
     * The description must be 2 to 256 characters in length. The description must start
     * with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property egressAclEntries: The list of egress network ACL entries.
     */
    readonly egressAclEntries?: Array<RosNetworkAcl.EgressAclEntriesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ingressAclEntries: The list of ingress network ACL entries.
     */
    readonly ingressAclEntries?: Array<RosNetworkAcl.IngressAclEntriesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property networkAclName: The name of the network ACL.
     * The name must be 2 to 128 characters in length and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
     * start with http:\/\/ or https:\/\/.
     */
    readonly networkAclName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::NetworkAcl`, which is used to create a network access control list (ACL).
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkAcl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkacl
 */
export declare class RosNetworkAcl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::NetworkAcl";
    /**
     * @Attribute NetworkAclEntryName: The name of the inbound rule.
     */
    readonly attrNetworkAclEntryName: ros.IResolvable;
    /**
     * @Attribute NetworkAclId: The ID of the network ACL.
     */
    readonly attrNetworkAclId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property description: The description of the network ACL.
     * The description must be 2 to 256 characters in length. The description must start
     * with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property egressAclEntries: The list of egress network ACL entries.
     */
    egressAclEntries: Array<RosNetworkAcl.EgressAclEntriesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property ingressAclEntries: The list of ingress network ACL entries.
     */
    ingressAclEntries: Array<RosNetworkAcl.IngressAclEntriesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property networkAclName: The name of the network ACL.
     * The name must be 2 to 128 characters in length and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
     * start with http:\/\/ or https:\/\/.
     */
    networkAclName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkAclProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosNetworkAcl {
    /**
     * @stability external
     */
    interface EgressAclEntriesProperty {
        /**
         * @Property policy: The authorization policy. Valid values:
     * accept: access permissions granted.
     * drop: access permissions denied.
         */
        readonly policy: string | ros.IResolvable;
        /**
         * @Property description: The description of the egress entry.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property destinationCidrIp: Destination address network segment.
         */
        readonly destinationCidrIp?: string | ros.IResolvable;
        /**
         * @Property entryType: The type of the rule. Valid values:
     * custom : custom rules.
     * system : system rules.
         */
        readonly entryType?: string | ros.IResolvable;
        /**
         * @Property port: The source ports. The value range is from 1 to 65535; setting formats such as "1\/200" and "80\/80", where "-1\/-1" cannot be set individually, which means that the port is not restricted.
         */
        readonly port: string | ros.IResolvable;
        /**
         * @Property protocol: The transport layer protocols. Valid values:
     * icmp
     * gre
     * tcp
     * udp
     * all: All protocols are supported.
         */
        readonly protocol: string | ros.IResolvable;
        /**
         * @Property networkAclEntryName: The name of the egress entry.
         */
        readonly networkAclEntryName?: string | ros.IResolvable;
    }
}
export declare namespace RosNetworkAcl {
    /**
     * @stability external
     */
    interface IngressAclEntriesProperty {
        /**
         * @Property policy: The authorization policy. Valid values:
     * accept: access permissions granted.
     * drop: access permissions denied.
         */
        readonly policy: string | ros.IResolvable;
        /**
         * @Property description: The description of the ingress entry.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property entryType: The type of the rule. Valid values:
     * custom : custom rules.
     * system : system rules.
         */
        readonly entryType?: string | ros.IResolvable;
        /**
         * @Property port: The source ports. The value range is from 1 to 65535; setting formats such as "1\/200" and "80\/80", where "-1\/-1" cannot be set individually, which means that the port is not restricted.
         */
        readonly port: string | ros.IResolvable;
        /**
         * @Property sourceCidrIp: Source address network segment.
         */
        readonly sourceCidrIp?: string | ros.IResolvable;
        /**
         * @Property protocol: The transport layer protocols. Valid values:
     * icmp
     * gre
     * tcp
     * udp
     * all: All protocols are supported.
         */
        readonly protocol: string | ros.IResolvable;
        /**
         * @Property networkAclEntryName: The name of the ingress entry.
         */
        readonly networkAclEntryName?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosNetworkAclAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkaclassociation
 */
export interface RosNetworkAclAssociationProps {
    /**
     * @Property networkAclId: The ID of the network ACL.
     */
    readonly networkAclId: string | ros.IResolvable;
    /**
     * @Property resources: The list of resources that need to be associated with network ACL.
     */
    readonly resources: Array<RosNetworkAclAssociation.ResourcesProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::NetworkAclAssociation`, which is used to associate a network access control list (ACL) with a vSwitch.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkAclAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkaclassociation
 */
export declare class RosNetworkAclAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::NetworkAclAssociation";
    /**
     * @Attribute NetworkAclId: The ID of the network ACL.
     */
    readonly attrNetworkAclId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property networkAclId: The ID of the network ACL.
     */
    networkAclId: string | ros.IResolvable;
    /**
     * @Property resources: The list of resources that need to be associated with network ACL.
     */
    resources: Array<RosNetworkAclAssociation.ResourcesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkAclAssociationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosNetworkAclAssociation {
    /**
     * @stability external
     */
    interface ResourcesProperty {
        /**
         * @Property resourceId: The ID of the associated resource.
         */
        readonly resourceId: string | ros.IResolvable;
        /**
         * @Property resourceType: The type of the associated resource. Valid value: VSwitch.
         */
        readonly resourceType?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosPeeringRouterInterfaceBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfacebinding
 */
export interface RosPeeringRouterInterfaceBindingProps {
    /**
     * @Property oppositeInterfaceId: The connection peer RouterInterface ID.
     */
    readonly oppositeInterfaceId: string | ros.IResolvable;
    /**
     * @Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
     */
    readonly routerInterfaceId: string | ros.IResolvable;
    /**
     * @Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
     */
    readonly oppositeInterfaceOwnerId?: string | ros.IResolvable;
    /**
     * @Property oppositeRouterId: Router ID of the connection peer RouterInterface.
     */
    readonly oppositeRouterId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::PeeringRouterInterfaceBinding`, which is used to bind a router interface with another router interface.
 * @Note This class does not contain additional functions, so it is recommended to use the `PeeringRouterInterfaceBinding` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfacebinding
 */
export declare class RosPeeringRouterInterfaceBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::PeeringRouterInterfaceBinding";
    /**
     * @Attribute RouterInterfaceId: The RouterInterface ID.
     */
    readonly attrRouterInterfaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property oppositeInterfaceId: The connection peer RouterInterface ID.
     */
    oppositeInterfaceId: string | ros.IResolvable;
    /**
     * @Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
     */
    routerInterfaceId: string | ros.IResolvable;
    /**
     * @Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
     */
    oppositeInterfaceOwnerId: string | ros.IResolvable | undefined;
    /**
     * @Property oppositeRouterId: Router ID of the connection peer RouterInterface.
     */
    oppositeRouterId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPeeringRouterInterfaceBindingProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosPeeringRouterInterfaceConnection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfaceconnection
 */
export interface RosPeeringRouterInterfaceConnectionProps {
    /**
     * @Property oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
     */
    readonly oppositeInterfaceId: string | ros.IResolvable;
    /**
     * @Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
     */
    readonly routerInterfaceId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::PeeringRouterInterfaceConnection`, which is used to initiate a router interface connection.
 * @Note This class does not contain additional functions, so it is recommended to use the `PeeringRouterInterfaceConnection` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfaceconnection
 */
export declare class RosPeeringRouterInterfaceConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::PeeringRouterInterfaceConnection";
    /**
     * @Attribute OppositeInterfaceId: The receiver RouterInterface ID.
     */
    readonly attrOppositeInterfaceId: ros.IResolvable;
    /**
     * @Attribute RouterInterfaceId: The initiator RouterInterface ID.
     */
    readonly attrRouterInterfaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
     */
    oppositeInterfaceId: string | ros.IResolvable;
    /**
     * @Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
     */
    routerInterfaceId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPeeringRouterInterfaceConnectionProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-prefixlist
 */
export interface RosPrefixListProps {
    /**
     * @Property entries: The CIDR address block list of the prefix list.
     */
    readonly entries?: Array<RosPrefixList.EntriesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ipVersion: The IP version of the prefix list. Value:
     * - **IPvv4**:IPv4 version.
     * - **IPv6**:IPv6.
     */
    readonly ipVersion?: string | ros.IResolvable;
    /**
     * @Property maxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
     */
    readonly maxEntries?: number | ros.IResolvable;
    /**
     * @Property prefixListDescription: The description of the prefix list.
     * It must be 2 to 256 characters in length and must start with a letter or Chinese, but cannot start with http:\/\/ or https.
     */
    readonly prefixListDescription?: string | ros.IResolvable;
    /**
     * @Property prefixListName: The name of the prefix list.
     */
    readonly prefixListName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of prefix list.
     */
    readonly tags?: RosPrefixList.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::PrefixList`, which is used to create a prefix list.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrefixList` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-prefixlist
 */
export declare class RosPrefixList extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::PrefixList";
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
     * @Property entries: The CIDR address block list of the prefix list.
     */
    entries: Array<RosPrefixList.EntriesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property ipVersion: The IP version of the prefix list. Value:
     * - **IPvv4**:IPv4 version.
     * - **IPv6**:IPv6.
     */
    ipVersion: string | ros.IResolvable | undefined;
    /**
     * @Property maxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
     */
    maxEntries: number | ros.IResolvable | undefined;
    /**
     * @Property prefixListDescription: The description of the prefix list.
     * It must be 2 to 256 characters in length and must start with a letter or Chinese, but cannot start with http:\/\/ or https.
     */
    prefixListDescription: string | ros.IResolvable | undefined;
    /**
     * @Property prefixListName: The name of the prefix list.
     */
    prefixListName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of prefix list.
     */
    tags: RosPrefixList.TagsProperty[] | undefined;
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
export declare namespace RosPrefixList {
    /**
     * @stability external
     */
    interface EntriesProperty {
        /**
         * @Property description: The description of the CIDR entry.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property cidr: CIDR block.
         */
        readonly cidr: string | ros.IResolvable;
    }
}
export declare namespace RosPrefixList {
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
 * Properties for defining a `RosRouteTable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetable
 */
export interface RosRouteTableProps {
    /**
     * @Property vpcId: The ID of the VPC to which the custom route table belongs.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property description: The description of the route table.
     * The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property routeTableName: The name of the route table.
     * The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:\/\/ or https:\/\/.
     */
    readonly routeTableName?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to routetable. Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosRouteTable.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::RouteTable`, which is used to create a custom route table.
 * @Note This class does not contain additional functions, so it is recommended to use the `RouteTable` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetable
 */
export declare class RosRouteTable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::RouteTable";
    /**
     * @Attribute RouteTableId: The ID of the route table.
     */
    readonly attrRouteTableId: ros.IResolvable;
    /**
     * @Attribute RouteTableName: The name of the route table.
     */
    readonly attrRouteTableName: ros.IResolvable;
    /**
     * @Attribute RouteTableType: The type of the route table.
     */
    readonly attrRouteTableType: ros.IResolvable;
    /**
     * @Attribute VSwitchIds: A list of VSwitches under the VPC.
     */
    readonly attrVSwitchIds: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the VRouter to which the route table belongs.
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vpcId: The ID of the VPC to which the custom route table belongs.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property description: The description of the route table.
     * The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property routeTableName: The name of the route table.
     * The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:\/\/ or https:\/\/.
     */
    routeTableName: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to routetable. Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosRouteTable.TagsProperty[] | undefined;
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
export declare namespace RosRouteTable {
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
 * Properties for defining a `RosRouteTableAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetableassociation
 */
export interface RosRouteTableAssociationProps {
    /**
     * @Property routeTableId: The ID of the route table.
     */
    readonly routeTableId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::RouteTableAssociation`, which is used to associate a custom routing table with a vSwitch in the same VPC.
 * @Note This class does not contain additional functions, so it is recommended to use the `RouteTableAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetableassociation
 */
export declare class RosRouteTableAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::RouteTableAssociation";
    /**
     * @Attribute RouteTableId: The ID of the route table.
     */
    readonly attrRouteTableId: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The VSwitch ID which the route table associated with.
     */
    readonly attrVSwitchId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property routeTableId: The ID of the route table.
     */
    routeTableId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRouteTableAssociationProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosRouterInterface`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routerinterface
 */
export interface RosRouterInterfaceProps {
    /**
     * @Property role: RouterInterface role. Now support 'InitiatingSide|AcceptingSide'.
     */
    readonly role: string | ros.IResolvable;
    /**
     * @Property routerId: The router ID to create RouterInterface.
     */
    readonly routerId: string | ros.IResolvable;
    /**
     * @Property accessPointId: Access point ID. If 'RouterType' is specified as 'VBR', the value is required.
     */
    readonly accessPointId?: string | ros.IResolvable;
    /**
     * @Property autoPay: Indicates whether automatic payment is enabled. Valid values:
     * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
     * true: Automatic payment is enabled. The payment is automatically made.
     * Default: true.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property description: Custom description of the RouterInterface, [2, 256] characters. Don't fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    readonly healthCheckSourceIp?: string | ros.IResolvable;
    /**
     * @Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    readonly healthCheckTargetIp?: string | ros.IResolvable;
    /**
     * @Property instanceChargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface. If 'OppositeRouterType' is specified as 'VBR', the value is required.
     */
    readonly oppositeAccessPointId?: string | ros.IResolvable;
    /**
     * @Property oppositeInterfaceId: The ID of the peer router interface.
     */
    readonly oppositeInterfaceId?: string | ros.IResolvable;
    /**
     * @Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. The default value is current user Id.
     */
    readonly oppositeInterfaceOwnerId?: string | ros.IResolvable;
    /**
     * @Property oppositeRegionId: The region where the connection peer RouterInterface locates. The default value is region where stack is created.
     */
    readonly oppositeRegionId?: string | ros.IResolvable;
    /**
     * @Property oppositeRouterId: The router ID of the connection peer RouterInterface.
     */
    readonly oppositeRouterId?: string | ros.IResolvable;
    /**
     * @Property oppositeRouterType: Router type of the connection peer router. Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
     */
    readonly oppositeRouterType?: string | ros.IResolvable;
    /**
     * @Property period: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * @Property routerType: Router type. Now support 'VRouter|VBR'
     */
    readonly routerType?: string | ros.IResolvable;
    /**
     * @Property spec: RouterInterface specification. If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
     */
    readonly spec?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::RouterInterface`, which is used to create a router interface.
 * @Note This class does not contain additional functions, so it is recommended to use the `RouterInterface` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routerinterface
 */
export declare class RosRouterInterface extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::RouterInterface";
    /**
     * @Attribute RouterInterfaceId: The ID of created RouterInterface.
     */
    readonly attrRouterInterfaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property role: RouterInterface role. Now support 'InitiatingSide|AcceptingSide'.
     */
    role: string | ros.IResolvable;
    /**
     * @Property routerId: The router ID to create RouterInterface.
     */
    routerId: string | ros.IResolvable;
    /**
     * @Property accessPointId: Access point ID. If 'RouterType' is specified as 'VBR', the value is required.
     */
    accessPointId: string | ros.IResolvable | undefined;
    /**
     * @Property autoPay: Indicates whether automatic payment is enabled. Valid values:
     * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
     * true: Automatic payment is enabled. The payment is automatically made.
     * Default: true.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: Custom description of the RouterInterface, [2, 256] characters. Don't fill or empty, the default is empty.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    healthCheckSourceIp: string | ros.IResolvable | undefined;
    /**
     * @Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    healthCheckTargetIp: string | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface. If 'OppositeRouterType' is specified as 'VBR', the value is required.
     */
    oppositeAccessPointId: string | ros.IResolvable | undefined;
    /**
     * @Property oppositeInterfaceId: The ID of the peer router interface.
     */
    oppositeInterfaceId: string | ros.IResolvable | undefined;
    /**
     * @Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. The default value is current user Id.
     */
    oppositeInterfaceOwnerId: string | ros.IResolvable | undefined;
    /**
     * @Property oppositeRegionId: The region where the connection peer RouterInterface locates. The default value is region where stack is created.
     */
    oppositeRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property oppositeRouterId: The router ID of the connection peer RouterInterface.
     */
    oppositeRouterId: string | ros.IResolvable | undefined;
    /**
     * @Property oppositeRouterType: Router type of the connection peer router. Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
     */
    oppositeRouterType: string | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
     */
    pricingCycle: string | ros.IResolvable | undefined;
    /**
     * @Property routerType: Router type. Now support 'VRouter|VBR'
     */
    routerType: string | ros.IResolvable | undefined;
    /**
     * @Property spec: RouterInterface specification. If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
     */
    spec: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRouterInterfaceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSnatEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-snatentry
 */
export interface RosSnatEntryProps {
    /**
     * @Property snatIp: The public IP address. Separate multiple EIPs with commas.
     */
    readonly snatIp: string | ros.IResolvable;
    /**
     * @Property snatTableId: The ID of the SNAT table.
     */
    readonly snatTableId: string | ros.IResolvable;
    /**
     * @Property eipAffinity: Specifies whether to enable EIP affinity. Valid values:
     * 0: no
     * 1: yes
     * If EIP affinity is enabled and the SNAT entry is associated with multiple EIPs, a client uses the same EIP to access the Internet. Otherwise, the client uses an EIP selected from the associated EIPs to access the Internet.
     */
    readonly eipAffinity?: number | ros.IResolvable;
    /**
     * @Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
     */
    readonly snatEntryName?: string | ros.IResolvable;
    /**
     * @Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1\/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    readonly sourceCidr?: string | ros.IResolvable;
    /**
     * @Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
     */
    readonly sourceVSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::SnatEntry`, which is used to add SNAT entries to an SNAT table.
 * @Note This class does not contain additional functions, so it is recommended to use the `SnatEntry` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-snatentry
 */
export declare class RosSnatEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::SnatEntry";
    /**
     * @Attribute SnatEntryIds: The IDS of the SNAT entry.
     */
    readonly attrSnatEntryIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property snatIp: The public IP address. Separate multiple EIPs with commas.
     */
    snatIp: string | ros.IResolvable;
    /**
     * @Property snatTableId: The ID of the SNAT table.
     */
    snatTableId: string | ros.IResolvable;
    /**
     * @Property eipAffinity: Specifies whether to enable EIP affinity. Valid values:
     * 0: no
     * 1: yes
     * If EIP affinity is enabled and the SNAT entry is associated with multiple EIPs, a client uses the same EIP to access the Internet. Otherwise, the client uses an EIP selected from the associated EIPs to access the Internet.
     */
    eipAffinity: number | ros.IResolvable | undefined;
    /**
     * @Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
     */
    snatEntryName: string | ros.IResolvable | undefined;
    /**
     * @Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1\/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    sourceCidr: string | ros.IResolvable | undefined;
    /**
     * @Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
     */
    sourceVSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSnatEntryProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSslVpnClientCert`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnclientcert
 */
export interface RosSslVpnClientCertProps {
    /**
     * @Property sslVpnServerId: ID of the SSL-VPN server.
     */
    readonly sslVpnServerId: string | ros.IResolvable;
    /**
     * @Property name: The name of the client certificate.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::SslVpnClientCert`, which is used to call the CreateSslVpnClientCert operation to create an SSL-VPN client certificate.
 * @Note This class does not contain additional functions, so it is recommended to use the `SslVpnClientCert` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnclientcert
 */
export declare class RosSslVpnClientCert extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::SslVpnClientCert";
    /**
     * @Attribute SslVpnClientCertId: The ID of the client certificate.
     */
    readonly attrSslVpnClientCertId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property sslVpnServerId: ID of the SSL-VPN server.
     */
    sslVpnServerId: string | ros.IResolvable;
    /**
     * @Property name: The name of the client certificate.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:\/\/ or https:\/\/.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSslVpnClientCertProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSslVpnServer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnserver
 */
export interface RosSslVpnServerProps {
    /**
     * @Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. It does not refer to the existing intranet segment of the client.
     * When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
     * The network segment cannot conflict with the LocalSubnet address segment.
     */
    readonly clientIpPool: string | ros.IResolvable;
    /**
     * @Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
     * The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS\/OSS.
     */
    readonly localSubnet: string | ros.IResolvable;
    /**
     * @Property vpnGatewayId: ID of the VPN gateway.
     */
    readonly vpnGatewayId: string | ros.IResolvable;
    /**
     * @Property cipher: The encryption algorithm used by SSL-VPN. Value:
     * AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
     */
    readonly cipher?: string | ros.IResolvable;
    /**
     * @Property compress: Whether it is compressed.
     */
    readonly compress?: boolean | ros.IResolvable;
    /**
     * @Property enableMultiFactorAuth: Whether to enable multi-factor authentication. The default value is false.
     */
    readonly enableMultiFactorAuth?: boolean | ros.IResolvable;
    /**
     * @Property iDaaSApplicationId: The ID of the IDaaS application.
     */
    readonly iDaaSApplicationId?: string | ros.IResolvable;
    /**
     * @Property iDaaSInstanceId: The ID of the IDaaS instance.
     */
    readonly iDaaSInstanceId?: string | ros.IResolvable;
    /**
     * @Property iDaaSRegionId: The region ID of the IDaaS instance.
     */
    readonly iDaaSRegionId?: string | ros.IResolvable;
    /**
     * @Property name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
     * But it can't start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property port: The port used by the SSL-VPN server. The default value is 1194. Cannot use the following ports:
     * 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
     */
    readonly port?: number | ros.IResolvable;
    /**
     * @Property proto: The protocol used by the SSL-VPN server. Allowed values: UDP (default) | TCP.
     */
    readonly proto?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::SslVpnServer`, which is used to create an SSL-VPN server.
 * @Note This class does not contain additional functions, so it is recommended to use the `SslVpnServer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnserver
 */
export declare class RosSslVpnServer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::SslVpnServer";
    /**
     * @Attribute SslVpnServerId: ID of the SSL-VPN server.
     */
    readonly attrSslVpnServerId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. It does not refer to the existing intranet segment of the client.
     * When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
     * The network segment cannot conflict with the LocalSubnet address segment.
     */
    clientIpPool: string | ros.IResolvable;
    /**
     * @Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
     * The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS\/OSS.
     */
    localSubnet: string | ros.IResolvable;
    /**
     * @Property vpnGatewayId: ID of the VPN gateway.
     */
    vpnGatewayId: string | ros.IResolvable;
    /**
     * @Property cipher: The encryption algorithm used by SSL-VPN. Value:
     * AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
     */
    cipher: string | ros.IResolvable | undefined;
    /**
     * @Property compress: Whether it is compressed.
     */
    compress: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableMultiFactorAuth: Whether to enable multi-factor authentication. The default value is false.
     */
    enableMultiFactorAuth: boolean | ros.IResolvable | undefined;
    /**
     * @Property iDaaSApplicationId: The ID of the IDaaS application.
     */
    iDaaSApplicationId: string | ros.IResolvable | undefined;
    /**
     * @Property iDaaSInstanceId: The ID of the IDaaS instance.
     */
    iDaaSInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property iDaaSRegionId: The region ID of the IDaaS instance.
     */
    iDaaSRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
     * But it can't start with http:\/\/ or https:\/\/.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property port: The port used by the SSL-VPN server. The default value is 1194. Cannot use the following ports:
     * 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
     */
    port: number | ros.IResolvable | undefined;
    /**
     * @Property proto: The protocol used by the SSL-VPN server. Allowed values: UDP (default) | TCP.
     */
    proto: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSslVpnServerProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorfilter
 */
export interface RosTrafficMirrorFilterProps {
    /**
     * @Property egressRules: Egress rules.
     */
    readonly egressRules?: Array<RosTrafficMirrorFilter.EgressRulesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ingressRules: Ingress rules.
     */
    readonly ingressRules?: Array<RosTrafficMirrorFilter.IngressRulesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property trafficMirrorFilterDescription: The description of the filter. The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly trafficMirrorFilterDescription?: string | ros.IResolvable;
    /**
     * @Property trafficMirrorFilterName: The name of the filter.The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly trafficMirrorFilterName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::TrafficMirrorFilter`, which is used to create a filter for traffic mirroring.
 * @Note This class does not contain additional functions, so it is recommended to use the `TrafficMirrorFilter` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorfilter
 */
export declare class RosTrafficMirrorFilter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::TrafficMirrorFilter";
    /**
     * @Attribute EgressRules: Egress rules.
     */
    readonly attrEgressRules: ros.IResolvable;
    /**
     * @Attribute IngressRules: Ingress rules.
     */
    readonly attrIngressRules: ros.IResolvable;
    /**
     * @Attribute TrafficMirrorFilterDescription: The description of the filter.
     */
    readonly attrTrafficMirrorFilterDescription: ros.IResolvable;
    /**
     * @Attribute TrafficMirrorFilterId: The ID of the filter.
     */
    readonly attrTrafficMirrorFilterId: ros.IResolvable;
    /**
     * @Attribute TrafficMirrorFilterName: The name of the filter.
     */
    readonly attrTrafficMirrorFilterName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property egressRules: Egress rules.
     */
    egressRules: Array<RosTrafficMirrorFilter.EgressRulesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property ingressRules: Ingress rules.
     */
    ingressRules: Array<RosTrafficMirrorFilter.IngressRulesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property trafficMirrorFilterDescription: The description of the filter. The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    trafficMirrorFilterDescription: string | ros.IResolvable | undefined;
    /**
     * @Property trafficMirrorFilterName: The name of the filter.The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    trafficMirrorFilterName: string | ros.IResolvable | undefined;
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
export declare namespace RosTrafficMirrorFilter {
    /**
     * @stability external
     */
    interface EgressRulesProperty {
        /**
         * @Property destinationPortRange: The destination port range of the outbound traffic. Valid values for a port: 1 to 65535. Separate the first port and the last port with a forward slash (\/). Examples: 1\/200 and 80\/80. You cannot set this parameter to only -1\/-1. The value -1\/-1 specifies all ports.
         */
        readonly destinationPortRange?: string | ros.IResolvable;
        /**
         * @Property action: The action of the outbound rule. Valid values:
     * accept: collects network traffic.
     * drop: does not collect network traffic.
         */
        readonly action: string | ros.IResolvable;
        /**
         * @Property sourcePortRange: The source port range of the outbound traffic. Valid values for a port: 1 to 65535. Separate the first port and the last port with a forward slash (\/). Examples: 1\/200 and 80\/80. You cannot set this parameter to only -1\/-1. The value -1\/-1 specifies all ports.
         */
        readonly sourcePortRange?: string | ros.IResolvable;
        /**
         * @Property priority: The priority of the outbound rule. A smaller value specifies a higher priority..
         */
        readonly priority?: number | ros.IResolvable;
        /**
         * @Property sourceCidrBlock: The source CIDR block of the outbound traffic..
         */
        readonly sourceCidrBlock?: string | ros.IResolvable;
        /**
         * @Property destinationCidrBlock: The destination CIDR block of the outbound traffic.
         */
        readonly destinationCidrBlock?: string | ros.IResolvable;
        /**
         * @Property protocol: The protocol that is used by the outbound traffic to be mirrored. Valid values:
     * ALL: all protocols
     * ICMP: ICMP
     * TCP: TCP
     * UDP: User Datagram Protocol (UDP)
         */
        readonly protocol: string | ros.IResolvable;
    }
}
export declare namespace RosTrafficMirrorFilter {
    /**
     * @stability external
     */
    interface IngressRulesProperty {
        /**
         * @Property destinationPortRange: The destination port range of the inbound traffic. Valid values for a port: 1 to 65535. Separate the first port and the last port with a forward slash (\/). Examples: 1\/200 and 80\/80.
         */
        readonly destinationPortRange?: string | ros.IResolvable;
        /**
         * @Property action: The action of the inbound rule. Valid values:
     * accept: collects network traffic.
     * drop: does not collect network traffic.
         */
        readonly action: string | ros.IResolvable;
        /**
         * @Property sourcePortRange: The source port range of the inbound traffic. Valid values for a port: 1 to 65535. Separate the first port and the last port with a forward slash (\/). Examples: 1\/200 and 80\/80.
         */
        readonly sourcePortRange?: string | ros.IResolvable;
        /**
         * @Property priority: The priority of the inbound rule. A smaller value specifies a higher priority..
         */
        readonly priority?: number | ros.IResolvable;
        /**
         * @Property sourceCidrBlock: The source CIDR block of the inbound traffic..
         */
        readonly sourceCidrBlock?: string | ros.IResolvable;
        /**
         * @Property destinationCidrBlock: The destination CIDR block of the inbound traffic.
         */
        readonly destinationCidrBlock?: string | ros.IResolvable;
        /**
         * @Property protocol: The protocol that is used by the inbound traffic to be mirrored. Valid values:
     * ALL: all protocols
     * ICMP: ICMP
     * TCP: TCP
     * UDP: User Datagram Protocol (UDP)
         */
        readonly protocol: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosTrafficMirrorSession`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsession
 */
export interface RosTrafficMirrorSessionProps {
    /**
     * @Property priority: The priority of the traffic mirror session. Valid values: **1 to 32766**.
     * A smaller value indicates a higher priority. You cannot specify identical priorities for traffic mirror sessions that are created in the same region by using the same account.
     */
    readonly priority: number | ros.IResolvable;
    /**
     * @Property trafficMirrorFilterId: The ID of the filter.
     */
    readonly trafficMirrorFilterId: string | ros.IResolvable;
    /**
     * @Property trafficMirrorSourceIds: undefined
     */
    readonly trafficMirrorSourceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property trafficMirrorTargetId: The ID of the traffic mirror destination. You can specify only an elastic network interface (ENI) or a Server Load Balancer (SLB) instance as a traffic mirror destination.
     */
    readonly trafficMirrorTargetId: string | ros.IResolvable;
    /**
     * @Property trafficMirrorTargetType: The type of the traffic mirror destination. Valid values:
     * - **NetworkInterface**: an ENI
     * - **SLB**: an SLB instance
     */
    readonly trafficMirrorTargetType: string | ros.IResolvable;
    /**
     * @Property enabled: Specifies whether to enable the traffic mirror session. Valid values:
     * - **false** (default): does not enable the traffic mirror session.
     * - **true**: enables the traffic mirror session.
     */
    readonly enabled?: boolean | ros.IResolvable;
    /**
     * @Property packetLength: The maximum transmission unit (MTU). Default value: **1500**.
     */
    readonly packetLength?: number | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the mirrored traffic belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tag:
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property trafficMirrorSessionDescription: The description of the traffic mirror session.
     * The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly trafficMirrorSessionDescription?: string | ros.IResolvable;
    /**
     * @Property trafficMirrorSessionName: The name of the traffic mirror session.
     * The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly trafficMirrorSessionName?: string | ros.IResolvable;
    /**
     * @Property virtualNetworkId: The VXLAN network identifier (VNI). Valid values: **0 to 16777215**.
     * You can use VNIs to identify mirrored traffic from different sessions at the traffic mirror destination. You can specify a custom VNI or use a random VNI allocated by the system. If you want the system to randomly allocate a VNI, do not enter a value.
     */
    readonly virtualNetworkId?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::TrafficMirrorSession`, which is used to create a traffic image session.
 * @Note This class does not contain additional functions, so it is recommended to use the `TrafficMirrorSession` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsession
 */
export declare class RosTrafficMirrorSession extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::TrafficMirrorSession";
    /**
     * @Attribute TrafficMirrorSessionId: The ID of the traffic mirror session.
     */
    readonly attrTrafficMirrorSessionId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property priority: The priority of the traffic mirror session. Valid values: **1 to 32766**.
     * A smaller value indicates a higher priority. You cannot specify identical priorities for traffic mirror sessions that are created in the same region by using the same account.
     */
    priority: number | ros.IResolvable;
    /**
     * @Property trafficMirrorFilterId: The ID of the filter.
     */
    trafficMirrorFilterId: string | ros.IResolvable;
    /**
     * @Property trafficMirrorSourceIds: undefined
     */
    trafficMirrorSourceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property trafficMirrorTargetId: The ID of the traffic mirror destination. You can specify only an elastic network interface (ENI) or a Server Load Balancer (SLB) instance as a traffic mirror destination.
     */
    trafficMirrorTargetId: string | ros.IResolvable;
    /**
     * @Property trafficMirrorTargetType: The type of the traffic mirror destination. Valid values:
     * - **NetworkInterface**: an ENI
     * - **SLB**: an SLB instance
     */
    trafficMirrorTargetType: string | ros.IResolvable;
    /**
     * @Property enabled: Specifies whether to enable the traffic mirror session. Valid values:
     * - **false** (default): does not enable the traffic mirror session.
     * - **true**: enables the traffic mirror session.
     */
    enabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property packetLength: The maximum transmission unit (MTU). Default value: **1500**.
     */
    packetLength: number | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the mirrored traffic belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tag:
     */
    tag: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property trafficMirrorSessionDescription: The description of the traffic mirror session.
     * The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    trafficMirrorSessionDescription: string | ros.IResolvable | undefined;
    /**
     * @Property trafficMirrorSessionName: The name of the traffic mirror session.
     * The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    trafficMirrorSessionName: string | ros.IResolvable | undefined;
    /**
     * @Property virtualNetworkId: The VXLAN network identifier (VNI). Valid values: **0 to 16777215**.
     * You can use VNIs to identify mirrored traffic from different sessions at the traffic mirror destination. You can specify a custom VNI or use a random VNI allocated by the system. If you want the system to randomly allocate a VNI, do not enter a value.
     */
    virtualNetworkId: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTrafficMirrorSessionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosTrafficMirrorSession {
    /**
     * @stability external
     */
    interface TagProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosTrafficMirrorSessionSourcesAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsessionsourcesaddition
 */
export interface RosTrafficMirrorSessionSourcesAdditionProps {
    /**
     * @Property trafficMirrorSessionId: The ID of the traffic mirror session.
     */
    readonly trafficMirrorSessionId: string | ros.IResolvable;
    /**
     * @Property trafficMirrorSourceIds: undefined
     */
    readonly trafficMirrorSourceIds: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::TrafficMirrorSessionSourcesAddition`, which is used to add traffic mirror sources to traffic mirror sessions.
 * @Note This class does not contain additional functions, so it is recommended to use the `TrafficMirrorSessionSourcesAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsessionsourcesaddition
 */
export declare class RosTrafficMirrorSessionSourcesAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::TrafficMirrorSessionSourcesAddition";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property trafficMirrorSessionId: The ID of the traffic mirror session.
     */
    trafficMirrorSessionId: string | ros.IResolvable;
    /**
     * @Property trafficMirrorSourceIds: undefined
     */
    trafficMirrorSourceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTrafficMirrorSessionSourcesAdditionProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosVSwitchCidrReservation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vswitchcidrreservation
 */
export interface RosVSwitchCidrReservationProps {
    /**
     * @Property vSwitchId: The ID of the vSwitch to which the reserved CIDR block belongs.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property ipVersion: The IP version of the reserved CIDR block. Valid values:
     * IPv4 (default)
     * IPv6
     */
    readonly ipVersion?: string | ros.IResolvable;
    /**
     * @Property tags:
     */
    readonly tags?: RosVSwitchCidrReservation.TagsProperty[];
    /**
     * @Property vSwitchCidrReservationCidr: The reserved CIDR block of the vSwitch.
     * When IpVersion is set to IPv4, the reserved CIDR block must be a proper subset of the IPv4 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 28.
     * When IpVersion is set to IPv6, the reserved CIDR block must be a proper subset of the IPv6 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 80.
     * Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
     */
    readonly vSwitchCidrReservationCidr?: string | ros.IResolvable;
    /**
     * @Property vSwitchCidrReservationDescription: The description of the reserved CIDR block. This parameter is empty by default.
     * The description must be 2 to 256 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/.
     */
    readonly vSwitchCidrReservationDescription?: string | ros.IResolvable;
    /**
     * @Property vSwitchCidrReservationMask: The subnet mask of the reserved CIDR block.
     * When IpVersion is set to IPv4, the subnet mask length of the CIDR block must be greater than the IPv4 subnet mask length of the vSwitch and cannot be greater than 28.
     * When IpVersion is set to IPv6, the subnet mask length of the CIDR block must be greater than the IPv6 subnet mask length of the vSwitch and cannot be greater than 80.
     * Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
     */
    readonly vSwitchCidrReservationMask?: string | ros.IResolvable;
    /**
     * @Property vSwitchCidrReservationName: The name of the reserved CIDR block.
     * The name must be 2 to 128 characters in length and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly vSwitchCidrReservationName?: string | ros.IResolvable;
    /**
     * @Property vSwitchCidrReservationType: The type of reserved CIDR block. Set the value to prefix.
     * Note When a user or a cloud service allocates a CIDR block to an elastic network interface (ENI), the CIDR block must be allocated from the reserved CIDR block. If the reserved CIDR block is exhausted, an error is returned.
     */
    readonly vSwitchCidrReservationType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::VSwitchCidrReservation`, which is used to create a reserved CIDR block for a vSwitch.
 * @Note This class does not contain additional functions, so it is recommended to use the `VSwitchCidrReservation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vswitchcidrreservation
 */
export declare class RosVSwitchCidrReservation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VSwitchCidrReservation";
    /**
     * @Attribute VSwitchCidrReservationId: The ID of the reserved CIDR block.
     */
    readonly attrVSwitchCidrReservationId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vSwitchId: The ID of the vSwitch to which the reserved CIDR block belongs.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property ipVersion: The IP version of the reserved CIDR block. Valid values:
     * IPv4 (default)
     * IPv6
     */
    ipVersion: string | ros.IResolvable | undefined;
    /**
     * @Property tags:
     */
    tags: RosVSwitchCidrReservation.TagsProperty[] | undefined;
    /**
     * @Property vSwitchCidrReservationCidr: The reserved CIDR block of the vSwitch.
     * When IpVersion is set to IPv4, the reserved CIDR block must be a proper subset of the IPv4 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 28.
     * When IpVersion is set to IPv6, the reserved CIDR block must be a proper subset of the IPv6 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 80.
     * Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
     */
    vSwitchCidrReservationCidr: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchCidrReservationDescription: The description of the reserved CIDR block. This parameter is empty by default.
     * The description must be 2 to 256 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/.
     */
    vSwitchCidrReservationDescription: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchCidrReservationMask: The subnet mask of the reserved CIDR block.
     * When IpVersion is set to IPv4, the subnet mask length of the CIDR block must be greater than the IPv4 subnet mask length of the vSwitch and cannot be greater than 28.
     * When IpVersion is set to IPv6, the subnet mask length of the CIDR block must be greater than the IPv6 subnet mask length of the vSwitch and cannot be greater than 80.
     * Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
     */
    vSwitchCidrReservationMask: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchCidrReservationName: The name of the reserved CIDR block.
     * The name must be 2 to 128 characters in length and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
     */
    vSwitchCidrReservationName: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchCidrReservationType: The type of reserved CIDR block. Set the value to prefix.
     * Note When a user or a cloud service allocates a CIDR block to an elastic network interface (ENI), the CIDR block must be allocated from the reserved CIDR block. If the reserved CIDR block is exhausted, an error is returned.
     */
    vSwitchCidrReservationType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVSwitchCidrReservationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosVSwitchCidrReservation {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: The value of tag N to add to the capacity reservation. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with acs:. The tag value cannot contain http:\/\/ or https:\/\/.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of tag N to add to the capacity reservation. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain http:\/\/ or https:\/\/. It cannot start with acs: or aliyun.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosVirtualBorderRouter`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-virtualborderrouter
 */
export interface RosVirtualBorderRouterProps {
    /**
     * @Property localGatewayIp: The IP address of the VBR on the Alibaba Cloud side.
     */
    readonly localGatewayIp: string | ros.IResolvable;
    /**
     * @Property peerGatewayIp: The IP address of the peer router interface of the VBR.
     * Only the owner of the VBR can set or modify the value.
     * This parameter is required when you create a VBR for the owner of the physical connection.
     * You can ignore this parameter when you create a VBR for another Alibaba Cloud account.
     */
    readonly peerGatewayIp: string | ros.IResolvable;
    /**
     * @Property peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the
     * user side.
     * The two IP addresses must fall within the same subnet.
     */
    readonly peeringSubnetMask: string | ros.IResolvable;
    /**
     * @Property physicalConnectionId: The ID of the physical connection.
     */
    readonly physicalConnectionId: string | ros.IResolvable;
    /**
     * @Property vlanId: The VLAN ID of the VBR. Valid values: 0 to 2999.
     * Note Only the owner of the physical connection can set this parameter. The VLAN IDs of
     * two VBRs of the same physical connection must be different.
     */
    readonly vlanId: number | ros.IResolvable;
    /**
     * @Property circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical
     * connection.
     * Note Only the owner of the physical connection can set this parameter.
     */
    readonly circuitCode?: string | ros.IResolvable;
    /**
     * @Property description: The description of the VBR.
     * The description must be 2 to 256 characters in length. It must start with a letter
     * but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property name: The name of the VBR.
     * The name must be 2 to 128 characters in length, and can contain, digits, periods (.),
     * underscores (_), and hyphens (-). The name cannot start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::VirtualBorderRouter`, which is used to create a virtual border router (VBR).
 * @Note This class does not contain additional functions, so it is recommended to use the `VirtualBorderRouter` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-virtualborderrouter
 */
export declare class RosVirtualBorderRouter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VirtualBorderRouter";
    /**
     * @Attribute Name: The name of the VBR.
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute RouteTableId: The ID of the route table of the VBR.
     */
    readonly attrRouteTableId: ros.IResolvable;
    /**
     * @Attribute VbrId: The ID of the VBR.
     */
    readonly attrVbrId: ros.IResolvable;
    /**
     * @Attribute VlanInterfaceId: The ID of the VBR interface.
     */
    readonly attrVlanInterfaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property localGatewayIp: The IP address of the VBR on the Alibaba Cloud side.
     */
    localGatewayIp: string | ros.IResolvable;
    /**
     * @Property peerGatewayIp: The IP address of the peer router interface of the VBR.
     * Only the owner of the VBR can set or modify the value.
     * This parameter is required when you create a VBR for the owner of the physical connection.
     * You can ignore this parameter when you create a VBR for another Alibaba Cloud account.
     */
    peerGatewayIp: string | ros.IResolvable;
    /**
     * @Property peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the
     * user side.
     * The two IP addresses must fall within the same subnet.
     */
    peeringSubnetMask: string | ros.IResolvable;
    /**
     * @Property physicalConnectionId: The ID of the physical connection.
     */
    physicalConnectionId: string | ros.IResolvable;
    /**
     * @Property vlanId: The VLAN ID of the VBR. Valid values: 0 to 2999.
     * Note Only the owner of the physical connection can set this parameter. The VLAN IDs of
     * two VBRs of the same physical connection must be different.
     */
    vlanId: number | ros.IResolvable;
    /**
     * @Property circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical
     * connection.
     * Note Only the owner of the physical connection can set this parameter.
     */
    circuitCode: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the VBR.
     * The description must be 2 to 256 characters in length. It must start with a letter
     * but cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the VBR.
     * The name must be 2 to 128 characters in length, and can contain, digits, periods (.),
     * underscores (_), and hyphens (-). The name cannot start with http:\/\/ or https:\/\/.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVirtualBorderRouterProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosVpcPeerConnection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcpeerconnection
 */
export interface RosVpcPeerConnectionProps {
    /**
     * @Property acceptingVpcId: The ID of the acceptor VPC.
     */
    readonly acceptingVpcId: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the requester VPC.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property acceptingAliUid: The ID of the Alibaba Cloud account to which the acceptor VPC belongs.
     * To create a VPC peering connection within your Alibaba Cloud account, enter the ID
     * of your Alibaba Cloud account.
     * To create a VPC peering connection between your Alibaba Cloud account and another
     * Alibaba Cloud account, enter the ID of the peer Alibaba Cloud account.
     * Note If the acceptor VPC belongs to a Resource Access Management (RAM) user, you must set
     * the value of AcceptingAliUid to the ID of the corresponding Alibaba Cloud account.
     * Default current account ID.
     */
    readonly acceptingAliUid?: number | ros.IResolvable;
    /**
     * @Property acceptingRegionId: The region ID of the acceptor VPC of the VPC peering connection that you want to create.
     * To create an intra-region VPC peering connection, enter a region ID that is the same
     * as that of the requester VPC.
     * To create an inter-region VPC peering connection, enter a region ID that is different
     * from that of the requester VPC.
     * Default current region.
     */
    readonly acceptingRegionId?: string | ros.IResolvable;
    /**
     * @Property deletionForce: Specifies whether to forcefully delete the VPC peering connection. Valid values:false (default): notrue: yes If you forcefully delete the VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property description: The description of the VPC peering connection.
     * The description must be 2 to 256 characters in length. It must start with a letter
     * but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property name: The name of the VPC peering connection.
     * The name must be 2 to 128 characters in length and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::VpcPeerConnection`, which is used to create a peering connection between virtual private clouds (VPCs).
 * @Note This class does not contain additional functions, so it is recommended to use the `VpcPeerConnection` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcpeerconnection
 */
export declare class RosVpcPeerConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpcPeerConnection";
    /**
     * @Attribute InstanceId: The ID of the VPC peering connection.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property acceptingVpcId: The ID of the acceptor VPC.
     */
    acceptingVpcId: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the requester VPC.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property acceptingAliUid: The ID of the Alibaba Cloud account to which the acceptor VPC belongs.
     * To create a VPC peering connection within your Alibaba Cloud account, enter the ID
     * of your Alibaba Cloud account.
     * To create a VPC peering connection between your Alibaba Cloud account and another
     * Alibaba Cloud account, enter the ID of the peer Alibaba Cloud account.
     * Note If the acceptor VPC belongs to a Resource Access Management (RAM) user, you must set
     * the value of AcceptingAliUid to the ID of the corresponding Alibaba Cloud account.
     * Default current account ID.
     */
    acceptingAliUid: number | ros.IResolvable | undefined;
    /**
     * @Property acceptingRegionId: The region ID of the acceptor VPC of the VPC peering connection that you want to create.
     * To create an intra-region VPC peering connection, enter a region ID that is the same
     * as that of the requester VPC.
     * To create an inter-region VPC peering connection, enter a region ID that is different
     * from that of the requester VPC.
     * Default current region.
     */
    acceptingRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property deletionForce: Specifies whether to forcefully delete the VPC peering connection. Valid values:false (default): notrue: yes If you forcefully delete the VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the VPC peering connection.
     * The description must be 2 to 256 characters in length. It must start with a letter
     * but cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the VPC peering connection.
     * The name must be 2 to 128 characters in length and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcPeerConnectionProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosVpnAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnattachment
 */
export interface RosVpnAttachmentProps {
    /**
     * @Property customerGatewayId: The ID of the user gateway.
     */
    readonly customerGatewayId: string | ros.IResolvable;
    /**
     * @Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.1.0\/24, 192.168.2.0\/24.
     */
    readonly localSubnet: string | ros.IResolvable;
    /**
     * @Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.3.0\/24, 192.168.4.0\/24.
     */
    readonly remoteSubnet: string | ros.IResolvable;
    /**
     * @Property autoConfigRoute: Specifies whether to automatically configure routes. Valid values:
     * true (default)
     * false
     */
    readonly autoConfigRoute?: boolean | ros.IResolvable;
    /**
     * @Property bgpConfig: The Border Gateway Protocol (BGP) configuration.
     * This parameter is required when the VPN gateway has dynamic BGP enabled.
     * Before you configure BGP, we recommend that you learn about how BGP works and its limits. For more information, see VPN Gateway supports BGP dynamic routing.
     * We recommend that you use a private ASN to establish a connection with Alibaba Cloud over BGP.
     * Refer to the relevant documentation for the private ASN range.
     */
    readonly bgpConfig?: RosVpnAttachment.BgpConfigProperty | ros.IResolvable;
    /**
     * @Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
     * True: Negotiate immediately after the configuration is complete.
     * False (default): Negotiate when traffic enters.
     */
    readonly effectImmediately?: boolean | ros.IResolvable;
    /**
     * @Property enableDpd: Specifies whether to enable the dead peer detection (DPD) feature. Valid values:
     * true (default) The initiator of the IPsec-VPN connection sends DPD packets to verify the existence and availability of the peer. If no response is received from the peer within a specified period of time, the connection fails. ISAKMP SAs and IPsec SAs are deleted. The IPsec tunnel is also deleted.
     * false: disables DPD. The IPsec initiator does not send DPD packets.
     */
    readonly enableDpd?: boolean | ros.IResolvable;
    /**
     * @Property enableNatTraversal: Specifies whether to enable NAT traversal. Valid values:
     * true (default) After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the VPN tunnel.
     * false
     */
    readonly enableNatTraversal?: boolean | ros.IResolvable;
    /**
     * @Property healthCheckConfig: Whether to enable the health check configuration.
     */
    readonly healthCheckConfig?: RosVpnAttachment.HealthCheckConfigProperty | ros.IResolvable;
    /**
     * @Property ikeConfig: Configuration information for the first phase of negotiation.
     */
    readonly ikeConfig?: RosVpnAttachment.IkeConfigProperty | ros.IResolvable;
    /**
     * @Property ipsecConfig: Configuration information for the second phase negotiation.
     */
    readonly ipsecConfig?: RosVpnAttachment.IpsecConfigProperty | ros.IResolvable;
    /**
     * @Property name: The name of the IPsec connection.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:\/\/ or https:\/\/ .
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property networkType: The network type of the IPsec connection. Value: public|private.
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * @Property remoteCaCert: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
     * This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
     * You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
     */
    readonly remoteCaCert?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::VpnAttachment`, which is used to create an IPsec-VPN connection and associate it with a transit router.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpnAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnattachment
 */
export declare class RosVpnAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnAttachment";
    /**
     * @Attribute InternetIp: The gateway IP address of the IPsec connection.
     */
    readonly attrInternetIp: ros.IResolvable;
    /**
     * @Attribute PeerVpnAttachmentConfig: Peer vpc Attachment config.
     */
    readonly attrPeerVpnAttachmentConfig: ros.IResolvable;
    /**
     * @Attribute VpnAttachmentId: ID of the IPsec attachment.
     */
    readonly attrVpnAttachmentId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property customerGatewayId: The ID of the user gateway.
     */
    customerGatewayId: string | ros.IResolvable;
    /**
     * @Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.1.0\/24, 192.168.2.0\/24.
     */
    localSubnet: string | ros.IResolvable;
    /**
     * @Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.3.0\/24, 192.168.4.0\/24.
     */
    remoteSubnet: string | ros.IResolvable;
    /**
     * @Property autoConfigRoute: Specifies whether to automatically configure routes. Valid values:
     * true (default)
     * false
     */
    autoConfigRoute: boolean | ros.IResolvable | undefined;
    /**
     * @Property bgpConfig: The Border Gateway Protocol (BGP) configuration.
     * This parameter is required when the VPN gateway has dynamic BGP enabled.
     * Before you configure BGP, we recommend that you learn about how BGP works and its limits. For more information, see VPN Gateway supports BGP dynamic routing.
     * We recommend that you use a private ASN to establish a connection with Alibaba Cloud over BGP.
     * Refer to the relevant documentation for the private ASN range.
     */
    bgpConfig: RosVpnAttachment.BgpConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
     * True: Negotiate immediately after the configuration is complete.
     * False (default): Negotiate when traffic enters.
     */
    effectImmediately: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableDpd: Specifies whether to enable the dead peer detection (DPD) feature. Valid values:
     * true (default) The initiator of the IPsec-VPN connection sends DPD packets to verify the existence and availability of the peer. If no response is received from the peer within a specified period of time, the connection fails. ISAKMP SAs and IPsec SAs are deleted. The IPsec tunnel is also deleted.
     * false: disables DPD. The IPsec initiator does not send DPD packets.
     */
    enableDpd: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableNatTraversal: Specifies whether to enable NAT traversal. Valid values:
     * true (default) After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the VPN tunnel.
     * false
     */
    enableNatTraversal: boolean | ros.IResolvable | undefined;
    /**
     * @Property healthCheckConfig: Whether to enable the health check configuration.
     */
    healthCheckConfig: RosVpnAttachment.HealthCheckConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property ikeConfig: Configuration information for the first phase of negotiation.
     */
    ikeConfig: RosVpnAttachment.IkeConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property ipsecConfig: Configuration information for the second phase negotiation.
     */
    ipsecConfig: RosVpnAttachment.IpsecConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the IPsec connection.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:\/\/ or https:\/\/ .
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property networkType: The network type of the IPsec connection. Value: public|private.
     */
    networkType: string | ros.IResolvable | undefined;
    /**
     * @Property remoteCaCert: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
     * This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
     * You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
     */
    remoteCaCert: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpnAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosVpnAttachment {
    /**
     * @stability external
     */
    interface BgpConfigProperty {
        /**
         * @Property enableBgp: Specifies whether to enable the BGP feature for the tunnel.
     * Valid values: true and false. Default value: false.
         */
        readonly enableBgp?: boolean | ros.IResolvable;
        /**
         * @Property localAsn: the ASN on the Alibaba Cloud side. Valid values: 1 to 4294967295. Default value: 45104.
         */
        readonly localAsn?: number | ros.IResolvable;
        /**
         * @Property tunnelCidr: the CIDR block of the IPsec tunnel. The CIDR block must fall within 169.254.0.0\/16. The subnet mask of the CIDR block must be 30 bits in length.
         */
        readonly tunnelCidr?: string | ros.IResolvable;
        /**
         * @Property localBgpIp: the BGP IP address on the Alibaba Cloud side.
     * This IP address must fall within the CIDR block of the IPsec tunnel.
         */
        readonly localBgpIp?: string | ros.IResolvable;
    }
}
export declare namespace RosVpnAttachment {
    /**
     * @stability external
     */
    interface HealthCheckConfigProperty {
        /**
         * @Property policy: Whether to revoke published routes when the health check fails.
         */
        readonly policy?: string | ros.IResolvable;
        /**
         * @Property enable:
         */
        readonly enable?: boolean | ros.IResolvable;
        /**
         * @Property dip:
         */
        readonly dip?: string | ros.IResolvable;
        /**
         * @Property retry:
         */
        readonly retry?: number | ros.IResolvable;
        /**
         * @Property sip:
         */
        readonly sip?: string | ros.IResolvable;
        /**
         * @Property interval:
         */
        readonly interval?: number | ros.IResolvable;
    }
}
export declare namespace RosVpnAttachment {
    /**
     * @stability external
     */
    interface IkeConfigProperty {
        /**
         * @Property ikeAuthAlg: The authentication algorithm negotiated in the first phase.
     * If the VPN gateway instance type is normal, the value is md5|sha1|sha256|sha384|sha512, and the default value is md5.
     * If the VPN gateway instance type is national secret type, The value is sm3 (default value).
         */
        readonly ikeAuthAlg?: string | ros.IResolvable;
        /**
         * @Property localId: ID of the VPN gateway. The length is limited to 100 characters. The default value is the public IP address of the VPN gateway.
         */
        readonly localId?: string | ros.IResolvable;
        /**
         * @Property ikeEncAlg: The authentication algorithm negotiated in the first phase.
     * If the VPN gateway instance type is normal, the value is aes|aes192|aes256|des|3des, and the default value is aes.
     * If the VPN gateway instance type is national secret type, The value is sm4 (default value).
         */
        readonly ikeEncAlg?: string | ros.IResolvable;
        /**
         * @Property ikeVersion: The version of the IKE protocol. Value: ikev1|ikev2, default: ikev1.
         */
        readonly ikeVersion?: string | ros.IResolvable;
        /**
         * @Property ikeMode: Negotiation mode for IKE V1. Value: main|aggressive, default: main.
         */
        readonly ikeMode?: string | ros.IResolvable;
        /**
         * @Property ikeLifetime: The life cycle of the SA negotiated in the first phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
         */
        readonly ikeLifetime?: number | ros.IResolvable;
        /**
         * @Property remoteId: ID of the user gateway. The length is limited to 100 characters. The default value is the public IP address of the user gateway.
         */
        readonly remoteId?: string | ros.IResolvable;
        /**
         * @Property psk: Used for identity authentication between the IPsec VPN gateway and the user gateway. It is generated randomly by default, or you can specify the key manually. The length is limited to 100 characters.
         */
        readonly psk?: string | ros.IResolvable;
        /**
         * @Property ikePfs: Diffie-Hellman key exchange algorithm used in the first phase negotiation. Value: group1|group2|group5|group14|group24, default value: group2.
         */
        readonly ikePfs?: string | ros.IResolvable;
    }
}
export declare namespace RosVpnAttachment {
    /**
     * @stability external
     */
    interface IpsecConfigProperty {
        /**
         * @Property ipsecPfs: Forwards all protocol packets. The Diffie-Hellman key exchange algorithm used in the first phase negotiation, the value: group1|group2|group5|group14|group24, default value: group2.
         */
        readonly ipsecPfs?: string | ros.IResolvable;
        /**
         * @Property ipsecEncAlg: The authentication algorithm negotiated in the second phase.
     * If the VPN gateway instance type is normal, the value is aes|aes192|aes256|des|3des, and the default value is aes.
     * If the VPN gateway instance type is national secret type, The value is sm4 (default value).
         */
        readonly ipsecEncAlg?: string | ros.IResolvable;
        /**
         * @Property ipsecAuthAlg: The authentication algorithm negotiated in the first phase.
     * If the VPN gateway instance type is normal, the value is md5|sha1|sha256|sha384|sha512, and the default value is md5.
     * If the VPN gateway instance type is national secret type, The value is sm3 (default value).
         */
        readonly ipsecAuthAlg?: string | ros.IResolvable;
        /**
         * @Property ipsecLifetime: IpsecLifetime: The life cycle of the SA negotiated in the second phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
         */
        readonly ipsecLifetime?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosVpnConnection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnconnection
 */
export interface RosVpnConnectionProps {
    /**
     * @Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.1.0\/24, 192.168.2.0\/24.
     */
    readonly localSubnet: string | ros.IResolvable;
    /**
     * @Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.3.0\/24, 192.168.4.0\/24.
     */
    readonly remoteSubnet: string | ros.IResolvable;
    /**
     * @Property vpnGatewayId: ID of the VPN gateway.
     */
    readonly vpnGatewayId: string | ros.IResolvable;
    /**
     * @Property autoConfigRoute: Specifies whether to automatically configure routes. Valid values:
     * true (default)
     * false
     */
    readonly autoConfigRoute?: boolean | ros.IResolvable;
    /**
     * @Property bgpConfig: The Border Gateway Protocol (BGP) configuration.
     * This parameter is required when the VPN gateway has dynamic BGP enabled.
     * Before you configure BGP, we recommend that you learn about how BGP works and its limits. For more information, see VPN Gateway supports BGP dynamic routing.
     * We recommend that you use a private ASN to establish a connection with Alibaba Cloud over BGP.
     * Refer to the relevant documentation for the private ASN range.
     */
    readonly bgpConfig?: RosVpnConnection.BgpConfigProperty | ros.IResolvable;
    /**
     * @Property customerGatewayId: The ID of the user gateway.
     */
    readonly customerGatewayId?: string | ros.IResolvable;
    /**
     * @Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
     * True: Negotiate immediately after the configuration is complete.
     * False (default): Negotiate when traffic enters.
     */
    readonly effectImmediately?: boolean | ros.IResolvable;
    /**
     * @Property enableDpd: Specifies whether to enable the dead peer detection (DPD) feature. Valid values:
     * true (default) The initiator of the IPsec-VPN connection sends DPD packets to verify the existence and availability of the peer. If no response is received from the peer within a specified period of time, the connection fails. ISAKMP SAs and IPsec SAs are deleted. The IPsec tunnel is also deleted.
     * false: disables DPD. The IPsec initiator does not send DPD packets.
     */
    readonly enableDpd?: boolean | ros.IResolvable;
    /**
     * @Property enableNatTraversal: Specifies whether to enable NAT traversal. Valid values:
     * true (default) After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the VPN tunnel.
     * false
     */
    readonly enableNatTraversal?: boolean | ros.IResolvable;
    /**
     * @Property enableTunnelsBgp: Specifies whether to enable the BGP feature for the tunnel.
     * Valid values: true and false. Default value: false.
     */
    readonly enableTunnelsBgp?: boolean | ros.IResolvable;
    /**
     * @Property healthCheckConfig: Whether to enable the health check configuration.
     */
    readonly healthCheckConfig?: RosVpnConnection.HealthCheckConfigProperty | ros.IResolvable;
    /**
     * @Property ikeConfig: Configuration information for the first phase of negotiation.
     */
    readonly ikeConfig?: RosVpnConnection.IkeConfigProperty | ros.IResolvable;
    /**
     * @Property ipsecConfig: Configuration information for the second phase negotiation.
     */
    readonly ipsecConfig?: RosVpnConnection.IpsecConfigProperty | ros.IResolvable;
    /**
     * @Property name: The name of the IPsec connection.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:\/\/ or https:\/\/ .
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property remoteCaCertificate: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
     * This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
     * You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
     */
    readonly remoteCaCertificate?: string | ros.IResolvable;
    /**
     * @Property tunnelOptionsSpecification: TunnelOptionsSpecification parameters are supported by dual-tunnel IPsec-VPN gateways.
     * You can modify both the active and standby tunnels of the IPsec-VPN connection.
     */
    readonly tunnelOptionsSpecification?: Array<RosVpnConnection.TunnelOptionsSpecificationProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::VpnConnection`, which is used to create an IPsec-VPN connection.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpnConnection` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnconnection
 */
export declare class RosVpnConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnConnection";
    /**
     * @Attribute PeerVpnConnectionConfig: Peer vpc connection config.
     */
    readonly attrPeerVpnConnectionConfig: ros.IResolvable;
    /**
     * @Attribute Status: Status of the IPsec connection.
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * @Attribute VpnConnectionId: ID of the IPsec connection.
     */
    readonly attrVpnConnectionId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.1.0\/24, 192.168.2.0\/24.
     */
    localSubnet: string | ros.IResolvable;
    /**
     * @Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.3.0\/24, 192.168.4.0\/24.
     */
    remoteSubnet: string | ros.IResolvable;
    /**
     * @Property vpnGatewayId: ID of the VPN gateway.
     */
    vpnGatewayId: string | ros.IResolvable;
    /**
     * @Property autoConfigRoute: Specifies whether to automatically configure routes. Valid values:
     * true (default)
     * false
     */
    autoConfigRoute: boolean | ros.IResolvable | undefined;
    /**
     * @Property bgpConfig: The Border Gateway Protocol (BGP) configuration.
     * This parameter is required when the VPN gateway has dynamic BGP enabled.
     * Before you configure BGP, we recommend that you learn about how BGP works and its limits. For more information, see VPN Gateway supports BGP dynamic routing.
     * We recommend that you use a private ASN to establish a connection with Alibaba Cloud over BGP.
     * Refer to the relevant documentation for the private ASN range.
     */
    bgpConfig: RosVpnConnection.BgpConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property customerGatewayId: The ID of the user gateway.
     */
    customerGatewayId: string | ros.IResolvable | undefined;
    /**
     * @Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
     * True: Negotiate immediately after the configuration is complete.
     * False (default): Negotiate when traffic enters.
     */
    effectImmediately: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableDpd: Specifies whether to enable the dead peer detection (DPD) feature. Valid values:
     * true (default) The initiator of the IPsec-VPN connection sends DPD packets to verify the existence and availability of the peer. If no response is received from the peer within a specified period of time, the connection fails. ISAKMP SAs and IPsec SAs are deleted. The IPsec tunnel is also deleted.
     * false: disables DPD. The IPsec initiator does not send DPD packets.
     */
    enableDpd: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableNatTraversal: Specifies whether to enable NAT traversal. Valid values:
     * true (default) After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the VPN tunnel.
     * false
     */
    enableNatTraversal: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableTunnelsBgp: Specifies whether to enable the BGP feature for the tunnel.
     * Valid values: true and false. Default value: false.
     */
    enableTunnelsBgp: boolean | ros.IResolvable | undefined;
    /**
     * @Property healthCheckConfig: Whether to enable the health check configuration.
     */
    healthCheckConfig: RosVpnConnection.HealthCheckConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property ikeConfig: Configuration information for the first phase of negotiation.
     */
    ikeConfig: RosVpnConnection.IkeConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property ipsecConfig: Configuration information for the second phase negotiation.
     */
    ipsecConfig: RosVpnConnection.IpsecConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the IPsec connection.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:\/\/ or https:\/\/ .
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property remoteCaCertificate: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
     * This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
     * You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
     */
    remoteCaCertificate: string | ros.IResolvable | undefined;
    /**
     * @Property tunnelOptionsSpecification: TunnelOptionsSpecification parameters are supported by dual-tunnel IPsec-VPN gateways.
     * You can modify both the active and standby tunnels of the IPsec-VPN connection.
     */
    tunnelOptionsSpecification: Array<RosVpnConnection.TunnelOptionsSpecificationProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpnConnectionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosVpnConnection {
    /**
     * @stability external
     */
    interface BgpConfigProperty {
        /**
         * @Property enableBgp: Specifies whether to enable the BGP feature for the tunnel.
     * Valid values: true and false. Default value: false.
         */
        readonly enableBgp?: boolean | ros.IResolvable;
        /**
         * @Property localAsn: the ASN on the Alibaba Cloud side. Valid values: 1 to 4294967295. Default value: 45104.
         */
        readonly localAsn?: number | ros.IResolvable;
        /**
         * @Property tunnelCidr: the CIDR block of the IPsec tunnel. The CIDR block must fall within 169.254.0.0\/16. The subnet mask of the CIDR block must be 30 bits in length.
         */
        readonly tunnelCidr?: string | ros.IResolvable;
        /**
         * @Property localBgpIp: the BGP IP address on the Alibaba Cloud side.
     * This IP address must fall within the CIDR block of the IPsec tunnel.
         */
        readonly localBgpIp?: string | ros.IResolvable;
    }
}
export declare namespace RosVpnConnection {
    /**
     * @stability external
     */
    interface HealthCheckConfigProperty {
        /**
         * @Property policy: Whether to revoke published routes when the health check fails.
         */
        readonly policy?: string | ros.IResolvable;
        /**
         * @Property enable:
         */
        readonly enable?: boolean | ros.IResolvable;
        /**
         * @Property dip:
         */
        readonly dip?: string | ros.IResolvable;
        /**
         * @Property retry:
         */
        readonly retry?: number | ros.IResolvable;
        /**
         * @Property sip:
         */
        readonly sip?: string | ros.IResolvable;
        /**
         * @Property interval:
         */
        readonly interval?: number | ros.IResolvable;
    }
}
export declare namespace RosVpnConnection {
    /**
     * @stability external
     */
    interface IkeConfigProperty {
        /**
         * @Property ikeAuthAlg: The authentication algorithm negotiated in the first phase.
     * If the VPN gateway instance type is normal, the value is md5|sha1|sha256|sha384|sha512, and the default value is md5.
     * If the VPN gateway instance type is national secret type, The value is sm3 (default value).
         */
        readonly ikeAuthAlg?: string | ros.IResolvable;
        /**
         * @Property localId: ID of the VPN gateway. The length is limited to 100 characters. The default value is the public IP address of the VPN gateway.
         */
        readonly localId?: string | ros.IResolvable;
        /**
         * @Property ikeEncAlg: The authentication algorithm negotiated in the first phase.
     * If the VPN gateway instance type is normal, the value is aes|aes192|aes256|des|3des, and the default value is aes.
     * If the VPN gateway instance type is national secret type, The value is sm4 (default value).
         */
        readonly ikeEncAlg?: string | ros.IResolvable;
        /**
         * @Property ikeVersion: The version of the IKE protocol. Value: ikev1|ikev2, default: ikev1.
         */
        readonly ikeVersion?: string | ros.IResolvable;
        /**
         * @Property ikeMode: Negotiation mode for IKE V1. Value: main|aggressive, default: main.
         */
        readonly ikeMode?: string | ros.IResolvable;
        /**
         * @Property ikeLifetime: The life cycle of the SA negotiated in the first phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
         */
        readonly ikeLifetime?: number | ros.IResolvable;
        /**
         * @Property remoteId: ID of the user gateway. The length is limited to 100 characters. The default value is the public IP address of the user gateway.
         */
        readonly remoteId?: string | ros.IResolvable;
        /**
         * @Property psk: Used for identity authentication between the IPsec VPN gateway and the user gateway. It is generated randomly by default, or you can specify the key manually. The length is limited to 100 characters.
         */
        readonly psk?: string | ros.IResolvable;
        /**
         * @Property ikePfs: Diffie-Hellman key exchange algorithm used in the first phase negotiation. Value: group1|group2|group5|group14|group24, default value: group2.
         */
        readonly ikePfs?: string | ros.IResolvable;
    }
}
export declare namespace RosVpnConnection {
    /**
     * @stability external
     */
    interface IpsecConfigProperty {
        /**
         * @Property ipsecPfs: Forwards all protocol packets. The Diffie-Hellman key exchange algorithm used in the first phase negotiation, the value: group1|group2|group5|group14|group24, default value: group2.
         */
        readonly ipsecPfs?: string | ros.IResolvable;
        /**
         * @Property ipsecEncAlg: The authentication algorithm negotiated in the second phase.
     * If the VPN gateway instance type is normal, the value is aes|aes192|aes256|des|3des, and the default value is aes.
     * If the VPN gateway instance type is national secret type, The value is sm4 (default value).
         */
        readonly ipsecEncAlg?: string | ros.IResolvable;
        /**
         * @Property ipsecAuthAlg: The authentication algorithm negotiated in the first phase.
     * If the VPN gateway instance type is normal, the value is md5|sha1|sha256|sha384|sha512, and the default value is md5.
     * If the VPN gateway instance type is national secret type, The value is sm3 (default value).
         */
        readonly ipsecAuthAlg?: string | ros.IResolvable;
        /**
         * @Property ipsecLifetime: IpsecLifetime: The life cycle of the SA negotiated in the second phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
         */
        readonly ipsecLifetime?: number | ros.IResolvable;
    }
}
export declare namespace RosVpnConnection {
    /**
     * @stability external
     */
    interface TunnelBgpConfigProperty {
        /**
         * @Property localAsn: the ASN on the Alibaba Cloud side. Valid values: 1 to 4294967295. Default value: 45104.
         */
        readonly localAsn?: number | ros.IResolvable;
        /**
         * @Property tunnelCidr: the CIDR block of the IPsec tunnel. The CIDR block must fall within 169.254.0.0\/16. The subnet mask of the CIDR block must be 30 bits in length.
         */
        readonly tunnelCidr?: string | ros.IResolvable;
        /**
         * @Property localBgpIp: the BGP IP address on the Alibaba Cloud side.
     * This IP address must fall within the CIDR block of the IPsec tunnel.
         */
        readonly localBgpIp?: string | ros.IResolvable;
    }
}
export declare namespace RosVpnConnection {
    /**
     * @stability external
     */
    interface TunnelIkeConfigProperty {
        /**
         * @Property ikeAuthAlg: The authentication algorithm negotiated in the first phase.
     * If the VPN gateway instance type is normal, the value is md5|sha1|sha256|sha384|sha512, and the default value is md5.
     * If the VPN gateway instance type is national secret type, The value is sm3 (default value).
         */
        readonly ikeAuthAlg?: string | ros.IResolvable;
        /**
         * @Property localId: ID of the VPN gateway. The length is limited to 100 characters. The default value is the public IP address of the VPN gateway.
         */
        readonly localId?: string | ros.IResolvable;
        /**
         * @Property ikeEncAlg: The authentication algorithm negotiated in the first phase.
     * If the VPN gateway instance type is normal, the value is aes|aes192|aes256|des|3des, and the default value is aes.
     * If the VPN gateway instance type is national secret type, The value is sm4 (default value).
         */
        readonly ikeEncAlg?: string | ros.IResolvable;
        /**
         * @Property ikeVersion: The version of the IKE protocol. Value: ikev1|ikev2, default: ikev1.
         */
        readonly ikeVersion?: string | ros.IResolvable;
        /**
         * @Property ikeMode: Negotiation mode for IKE V1. Value: main|aggressive, default: main.
         */
        readonly ikeMode?: string | ros.IResolvable;
        /**
         * @Property ikeLifetime: The life cycle of the SA negotiated in the first phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
         */
        readonly ikeLifetime?: number | ros.IResolvable;
        /**
         * @Property remoteId: ID of the user gateway. The length is limited to 100 characters. The default value is the public IP address of the user gateway.
         */
        readonly remoteId?: string | ros.IResolvable;
        /**
         * @Property psk: Used for identity authentication between the IPsec VPN gateway and the user gateway. It is generated randomly by default, or you can specify the key manually. The length is limited to 100 characters.
         */
        readonly psk?: string | ros.IResolvable;
        /**
         * @Property ikePfs: Diffie-Hellman key exchange algorithm used in the first phase negotiation. Value: group1|group2|group5|group14|group24, default value: group2.
         */
        readonly ikePfs?: string | ros.IResolvable;
    }
}
export declare namespace RosVpnConnection {
    /**
     * @stability external
     */
    interface TunnelIpsecConfigProperty {
        /**
         * @Property ipsecPfs: Forwards all protocol packets. The Diffie-Hellman key exchange algorithm used in the first phase negotiation, the value: group1|group2|group5|group14|group24, default value: group2.
         */
        readonly ipsecPfs?: string | ros.IResolvable;
        /**
         * @Property ipsecEncAlg: The authentication algorithm negotiated in the second phase.
     * If the VPN gateway instance type is normal, the value is aes|aes192|aes256|des|3des, and the default value is aes.
     * If the VPN gateway instance type is national secret type, The value is sm4 (default value).
         */
        readonly ipsecEncAlg?: string | ros.IResolvable;
        /**
         * @Property ipsecAuthAlg: The authentication algorithm negotiated in the first phase.
     * If the VPN gateway instance type is normal, the value is md5|sha1|sha256|sha384|sha512, and the default value is md5.
     * If the VPN gateway instance type is national secret type, The value is sm3 (default value).
         */
        readonly ipsecAuthAlg?: string | ros.IResolvable;
        /**
         * @Property ipsecLifetime: IpsecLifetime: The life cycle of the SA negotiated in the second phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
         */
        readonly ipsecLifetime?: number | ros.IResolvable;
    }
}
export declare namespace RosVpnConnection {
    /**
     * @stability external
     */
    interface TunnelOptionsSpecificationProperty {
        /**
         * @Property role: The tunnel role. Valid values: master|slave
         */
        readonly role?: string | ros.IResolvable;
        /**
         * @Property tunnelIkeConfig: Configuration information for the first phase of negotiation.
         */
        readonly tunnelIkeConfig?: RosVpnConnection.TunnelIkeConfigProperty | ros.IResolvable;
        /**
         * @Property customerGatewayId: The ID of the customer gateway.
         */
        readonly customerGatewayId?: string | ros.IResolvable;
        /**
         * @Property tunnelBgpConfig: The BGP configurations.
         */
        readonly tunnelBgpConfig?: RosVpnConnection.TunnelBgpConfigProperty | ros.IResolvable;
        /**
         * @Property remoteCaCertificate: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
     * This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
     * You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
         */
        readonly remoteCaCertificate?: string | ros.IResolvable;
        /**
         * @Property enableNatTraversal: Specifies whether to enable NAT traversal. Valid values:
     * true (default) After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the VPN tunnel.
     * false
         */
        readonly enableNatTraversal?: boolean | ros.IResolvable;
        /**
         * @Property tunnelIpsecConfig: The configuration of Phase 2 negotiations.
         */
        readonly tunnelIpsecConfig?: RosVpnConnection.TunnelIpsecConfigProperty | ros.IResolvable;
        /**
         * @Property enableDpd: Specifies whether to enable the dead peer detection (DPD) feature. Valid values:
     * true (default) The initiator of the IPsec-VPN connection sends DPD packets to verify the existence and availability of the peer. If no response is received from the peer within a specified period of time, the connection fails. ISAKMP SAs and IPsec SAs are deleted. The IPsec tunnel is also deleted.
     * false: disables DPD. The IPsec initiator does not send DPD packets.
         */
        readonly enableDpd?: boolean | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosVpnGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpngateway
 */
export interface RosVpnGatewayProps {
    /**
     * @Property bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
     * Value: 5|10|20|50|100|200.
     */
    readonly bandwidth: number | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID to which the VPN gateway belongs.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value:
     * true: Automatically pays the bill for the VPN gateway.
     * false: Does not automatically pay the bill for the VPN gateway.
     * Default true.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property description: Description of the VPN gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property disasterRecoveryVSwitchId: The second vSwitch with which you want to associate the VPN gateway.
     * If you call this operation in a region that supports the dual-tunnel mode, this parameter is required.
     * You need to specify two vSwitches in different zones from the VPC associated with the VPN gateway to implement disaster recovery across zones.
     * For a region that supports only one zone, disaster recovery across zones is not supported. We recommend that you specify two vSwitches in the zone to implement high availability. You can specify the same vSwitch.
     * For more information about the regions and zones that support the dual-tunnel mode, see Upgrade a VPN gateway to enable the dual-tunnel mode.
     */
    readonly disasterRecoveryVSwitchId?: string | ros.IResolvable;
    /**
     * @Property enableIpsec: Whether to enable IPsec-VPN. The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
     * True (default): Enables the IPsec-VPN feature.
     * False: The IPsec-VPN function is not enabled.
     */
    readonly enableIpsec?: boolean | ros.IResolvable;
    /**
     * @Property enableSsl: Enable the SSL-VPN function. Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
     * True: Enable SSL-VPN.
     * False (default): Does not enable SSL-VPN.
     */
    readonly enableSsl?: boolean | ros.IResolvable;
    /**
     * @Property instanceChargeType: Accounting type of the VPN gateway, the value is:
     * PREPAY, POSTPAY
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property name: Name of the VPN gateway. The default value is the ID of the VPN gateway.
     * The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property networkType: The network type of the VPN gateway. Valid values: public|private
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * @Property period: Purchase time, value: 1~9|12|24|36.
     * When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property sslConnections: The maximum number of clients allowed to connect at the same time.
     */
    readonly sslConnections?: number | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosVpnGateway.TagsProperty[];
    /**
     * @Property vpnType: VPN gateway type.
     */
    readonly vpnType?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::VpnGateway`, which is used to create a VPN gateway.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpnGateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpngateway
 */
export declare class RosVpnGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnGateway";
    /**
     * @Attribute DisasterRecoveryInternetIp: The second IP address assigned by the system to create an IPsec-VPN connection.This attribute is returned only when the VPN gateway supports the dual-tunnel mode.
     */
    readonly attrDisasterRecoveryInternetIp: ros.IResolvable;
    /**
     * @Attribute DisasterRecoveryVSwitchId: The ID of the second vSwitch associated with the VPN gateway.This attribute is returned only when the VPN gateway supports the dual-tunnel mode.
     */
    readonly attrDisasterRecoveryVSwitchId: ros.IResolvable;
    /**
     * @Attribute InternetIp: The public IP address of the VPN gateway.
     */
    readonly attrInternetIp: ros.IResolvable;
    /**
     * @Attribute OrderId: The order ID.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute Spec: The specification of the VPN gateway.
     */
    readonly attrSpec: ros.IResolvable;
    /**
     * @Attribute SslMaxConnections: The maximum number of concurrent SSL-VPN connections.
     */
    readonly attrSslMaxConnections: ros.IResolvable;
    /**
     * @Attribute SslVpnInternetIp: The IP address of the SSL-VPN connection.This attribute is returned only when the VPN gateway is a public VPN gateway and supports only the single-tunnel mode. In addition, the VPN gateway must have the SSL-VPN feature enabled.
     */
    readonly attrSslVpnInternetIp: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The ID of the vSwitch to which the VPN gateway belongs.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the virtual private cloud (VPC) to which the VPN gateway belongs.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute VpnGatewayId: ID of the VPN gateway.
     */
    readonly attrVpnGatewayId: ros.IResolvable;
    /**
     * @Attribute VpnType: The type of the VPN gateway.
     */
    readonly attrVpnType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
     * Value: 5|10|20|50|100|200.
     */
    bandwidth: number | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID to which the VPN gateway belongs.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value:
     * true: Automatically pays the bill for the VPN gateway.
     * false: Does not automatically pay the bill for the VPN gateway.
     * Default true.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the VPN gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property disasterRecoveryVSwitchId: The second vSwitch with which you want to associate the VPN gateway.
     * If you call this operation in a region that supports the dual-tunnel mode, this parameter is required.
     * You need to specify two vSwitches in different zones from the VPC associated with the VPN gateway to implement disaster recovery across zones.
     * For a region that supports only one zone, disaster recovery across zones is not supported. We recommend that you specify two vSwitches in the zone to implement high availability. You can specify the same vSwitch.
     * For more information about the regions and zones that support the dual-tunnel mode, see Upgrade a VPN gateway to enable the dual-tunnel mode.
     */
    disasterRecoveryVSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property enableIpsec: Whether to enable IPsec-VPN. The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
     * True (default): Enables the IPsec-VPN feature.
     * False: The IPsec-VPN function is not enabled.
     */
    enableIpsec: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableSsl: Enable the SSL-VPN function. Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
     * True: Enable SSL-VPN.
     * False (default): Does not enable SSL-VPN.
     */
    enableSsl: boolean | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: Accounting type of the VPN gateway, the value is:
     * PREPAY, POSTPAY
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property name: Name of the VPN gateway. The default value is the ID of the VPN gateway.
     * The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:\/\/ or https:\/\/.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property networkType: The network type of the VPN gateway. Valid values: public|private
     */
    networkType: string | ros.IResolvable | undefined;
    /**
     * @Property period: Purchase time, value: 1~9|12|24|36.
     * When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property sslConnections: The maximum number of clients allowed to connect at the same time.
     */
    sslConnections: number | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosVpnGateway.TagsProperty[] | undefined;
    /**
     * @Property vpnType: VPN gateway type.
     */
    vpnType: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpnGatewayProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosVpnGateway {
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
 * Properties for defining a `RosVpnPbrRouteEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnpbrrouteentry
 */
export interface RosVpnPbrRouteEntryProps {
    /**
     * @Property nextHop: The next hop of the destination route entry.
     */
    readonly nextHop: string | ros.IResolvable;
    /**
     * @Property publishVpc: Indicates whether to publish the destination route to the VPC. Valid values:
     * true: Publish the destination route to the VPC.
     * false: Do not publish the destination route to the VPC.
     */
    readonly publishVpc: boolean | ros.IResolvable;
    /**
     * @Property routeDest: The destination CIDR block of the destination route.
     */
    readonly routeDest: string | ros.IResolvable;
    /**
     * @Property routeSource: The source CIDR block of the policy-based route.
     */
    readonly routeSource: string | ros.IResolvable;
    /**
     * @Property vpnGatewayId: The ID of the VPN Gateway.
     */
    readonly vpnGatewayId: string | ros.IResolvable;
    /**
     * @Property weight: The weight of the destination route. Valid values: 0|100.
     */
    readonly weight: number | ros.IResolvable;
    /**
     * @Property description: The description of the VPN destination route.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property overlayMode: The overlay mode.
     */
    readonly overlayMode?: string | ros.IResolvable;
    /**
     * @Property priority: Policy priority for policy routing. Range: 1-100 Default value: 10.
     * The smaller the policy priority number, the higher the priority of the policy route.
     */
    readonly priority?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::VpnPbrRouteEntry`, which is used to create a policy-based route for a VPN gateway.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpnPbrRouteEntry` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnpbrrouteentry
 */
export declare class RosVpnPbrRouteEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnPbrRouteEntry";
    /**
     * @Attribute NextHop: The next hop of the destination route entry.
     */
    readonly attrNextHop: ros.IResolvable;
    /**
     * @Attribute RouteDest: The destination CIDR block of the destination route.
     */
    readonly attrRouteDest: ros.IResolvable;
    /**
     * @Attribute RouteSource: The destination CIDR block of the policy-based route.
     */
    readonly attrRouteSource: ros.IResolvable;
    /**
     * @Attribute VpnGatewayId: The ID of the VPN Gateway.
     */
    readonly attrVpnGatewayId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property nextHop: The next hop of the destination route entry.
     */
    nextHop: string | ros.IResolvable;
    /**
     * @Property publishVpc: Indicates whether to publish the destination route to the VPC. Valid values:
     * true: Publish the destination route to the VPC.
     * false: Do not publish the destination route to the VPC.
     */
    publishVpc: boolean | ros.IResolvable;
    /**
     * @Property routeDest: The destination CIDR block of the destination route.
     */
    routeDest: string | ros.IResolvable;
    /**
     * @Property routeSource: The source CIDR block of the policy-based route.
     */
    routeSource: string | ros.IResolvable;
    /**
     * @Property vpnGatewayId: The ID of the VPN Gateway.
     */
    vpnGatewayId: string | ros.IResolvable;
    /**
     * @Property weight: The weight of the destination route. Valid values: 0|100.
     */
    weight: number | ros.IResolvable;
    /**
     * @Property description: The description of the VPN destination route.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property overlayMode: The overlay mode.
     */
    overlayMode: string | ros.IResolvable | undefined;
    /**
     * @Property priority: Policy priority for policy routing. Range: 1-100 Default value: 10.
     * The smaller the policy priority number, the higher the priority of the policy route.
     */
    priority: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpnPbrRouteEntryProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosVpnRouteEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnrouteentry
 */
export interface RosVpnRouteEntryProps {
    /**
     * @Property nextHop: The next hop of the destination route entry.
     */
    readonly nextHop: string | ros.IResolvable;
    /**
     * @Property publishVpc: Indicates whether to publish the destination route to the VPC. Valid values:
     * true: Publish the destination route to the VPC.
     * false: Do not publish the destination route to the VPC.
     */
    readonly publishVpc: boolean | ros.IResolvable;
    /**
     * @Property routeDest: The destination CIDR block of the destination route.
     */
    readonly routeDest: string | ros.IResolvable;
    /**
     * @Property vpnGatewayId: The ID of the VPN Gateway.
     */
    readonly vpnGatewayId: string | ros.IResolvable;
    /**
     * @Property weight: The weight of the destination route. Valid values: 0|100.
     */
    readonly weight: number | ros.IResolvable;
    /**
     * @Property description: The description of the VPN destination route.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property overlayMode: The overlay mode.
     */
    readonly overlayMode?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::VpnRouteEntry`, which is used to create a destination-based route for a VPN gateway.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpnRouteEntry` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnrouteentry
 */
export declare class RosVpnRouteEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnRouteEntry";
    /**
     * @Attribute NextHop: The next hop of the destination route entry.
     */
    readonly attrNextHop: ros.IResolvable;
    /**
     * @Attribute RouteDest: The destination CIDR block of the destination route.
     */
    readonly attrRouteDest: ros.IResolvable;
    /**
     * @Attribute VpnGatewayId: The ID of the VPN Gateway.
     */
    readonly attrVpnGatewayId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property nextHop: The next hop of the destination route entry.
     */
    nextHop: string | ros.IResolvable;
    /**
     * @Property publishVpc: Indicates whether to publish the destination route to the VPC. Valid values:
     * true: Publish the destination route to the VPC.
     * false: Do not publish the destination route to the VPC.
     */
    publishVpc: boolean | ros.IResolvable;
    /**
     * @Property routeDest: The destination CIDR block of the destination route.
     */
    routeDest: string | ros.IResolvable;
    /**
     * @Property vpnGatewayId: The ID of the VPN Gateway.
     */
    vpnGatewayId: string | ros.IResolvable;
    /**
     * @Property weight: The weight of the destination route. Valid values: 0|100.
     */
    weight: number | ros.IResolvable;
    /**
     * @Property description: The description of the VPN destination route.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property overlayMode: The overlay mode.
     */
    overlayMode: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpnRouteEntryProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
