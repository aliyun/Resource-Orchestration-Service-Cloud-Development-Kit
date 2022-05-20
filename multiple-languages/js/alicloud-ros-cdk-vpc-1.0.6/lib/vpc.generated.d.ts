import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::VPC::AnycastEIP`
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
 * A ROS template type:  `ALIYUN::VPC::AnycastEIP`
 */
export declare class RosAnycastEIP extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::AnycastEIP";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::VPC::AnycastEIP`.
     *
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
 * Properties for defining a `ALIYUN::VPC::AnycastEIPAssociation`
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
 * A ROS template type:  `ALIYUN::VPC::AnycastEIPAssociation`
 */
export declare class RosAnycastEIPAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::AnycastEIPAssociation";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::VPC::AnycastEIPAssociation`.
     *
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
 * Properties for defining a `ALIYUN::VPC::BgpGroup`
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
     * It must start with a letter but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;
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
     * with a letter but cannot start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::VPC::BgpGroup`
 */
export declare class RosBgpGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::BgpGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * It must start with a letter but cannot start with http:// or https://.
     */
    description: string | ros.IResolvable | undefined;
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
     * with a letter but cannot start with http:// or https://.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::VPC::BgpGroup`.
     *
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
 * Properties for defining a `ALIYUN::VPC::BgpNetwork`
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
 * A ROS template type:  `ALIYUN::VPC::BgpNetwork`
 */
export declare class RosBgpNetwork extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::BgpNetwork";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::VPC::BgpNetwork`.
     *
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
 * Properties for defining a `ALIYUN::VPC::BgpPeer`
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
 * A ROS template type:  `ALIYUN::VPC::BgpPeer`
 */
export declare class RosBgpPeer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::BgpPeer";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::VPC::BgpPeer`.
     *
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
 * Properties for defining a `ALIYUN::VPC::CommonBandwidthPackage`
 */
export interface RosCommonBandwidthPackageProps {
    /**
     * @Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
     */
    readonly bandwidth: number | ros.IResolvable;
    /**
     * @Property description: The description of the Internet Shared Bandwidth instance.
     * The description must be 2 to 256 characters in length. It must start with a letter,
     * and cannot start with http:// or https://.
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
     * start with http:// or https://.
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
 * A ROS template type:  `ALIYUN::VPC::CommonBandwidthPackage`
 */
export declare class RosCommonBandwidthPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::CommonBandwidthPackage";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute BandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
     */
    readonly attrBandwidthPackageId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
     */
    bandwidth: number | ros.IResolvable;
    /**
     * @Property description: The description of the Internet Shared Bandwidth instance.
     * The description must be 2 to 256 characters in length. It must start with a letter,
     * and cannot start with http:// or https://.
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
     * start with http:// or https://.
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
     * Create a new `ALIYUN::VPC::CommonBandwidthPackage`.
     *
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
 * Properties for defining a `ALIYUN::VPC::CommonBandwidthPackageIp`
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
 * A ROS template type:  `ALIYUN::VPC::CommonBandwidthPackageIp`
 */
export declare class RosCommonBandwidthPackageIp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::CommonBandwidthPackageIp";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::VPC::CommonBandwidthPackageIp`.
     *
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
 * Properties for defining a `ALIYUN::VPC::CustomerGateway`
 */
export interface RosCustomerGatewayProps {
    /**
     * @Property ipAddress: The IP address of the user gateway.
     */
    readonly ipAddress: string | ros.IResolvable;
    /**
     * @Property description: Description of the user gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property name: The name of the user gateway.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::VPC::CustomerGateway`
 */
export declare class RosCustomerGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::CustomerGateway";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property description: Description of the user gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the user gateway.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::VPC::CustomerGateway`.
     *
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
 * Properties for defining a `ALIYUN::VPC::DhcpOptionsSet`
 */
export interface RosDhcpOptionsSetProps {
    /**
     * @Property dhcpOptionsSetDescription: The description of the DHCP options set.
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
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
 * A ROS template type:  `ALIYUN::VPC::DhcpOptionsSet`
 */
export declare class RosDhcpOptionsSet extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::DhcpOptionsSet";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DhcpOptionsSetId: The ID of the DHCP options set that is created.
     */
    readonly attrDhcpOptionsSetId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dhcpOptionsSetDescription: The description of the DHCP options set.
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
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
     * Create a new `ALIYUN::VPC::DhcpOptionsSet`.
     *
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
 * Properties for defining a `ALIYUN::VPC::DhcpOptionsSetAttachment`
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
 * A ROS template type:  `ALIYUN::VPC::DhcpOptionsSetAttachment`
 */
export declare class RosDhcpOptionsSetAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::DhcpOptionsSetAttachment";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::VPC::DhcpOptionsSetAttachment`.
     *
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
 * Properties for defining a `ALIYUN::VPC::EIP`
 */
export interface RosEIPProps {
    /**
     * @Property autoPay: Automatic Payment. Default is false.
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
     * @Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
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
     * @Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
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
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosEIP.TagsProperty[];
}
/**
 * A ROS template type:  `ALIYUN::VPC::EIP`
 */
export declare class RosEIP extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::EIP";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property autoPay: Automatic Payment. Default is false.
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
     * @Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
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
     * @Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
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
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosEIP.TagsProperty[] | undefined;
    /**
     * Create a new `ALIYUN::VPC::EIP`.
     *
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
 * Properties for defining a `ALIYUN::VPC::EIPAssociation`
 */
export interface RosEIPAssociationProps {
    /**
     * @Property allocationId: EIP instance id to bind.
     */
    readonly allocationId: string | ros.IResolvable;
    /**
     * @Property instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.
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
 * A ROS template type:  `ALIYUN::VPC::EIPAssociation`
 */
export declare class RosEIPAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::EIPAssociation";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.
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
     * Create a new `ALIYUN::VPC::EIPAssociation`.
     *
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
 * Properties for defining a `ALIYUN::VPC::EIPPro`
 */
export interface RosEIPProProps {
    /**
     * @Property autoPay: Automatic Payment. Default is false.
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
     * @Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
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
     * @Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
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
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosEIPPro.TagsProperty[];
}
/**
 * A ROS template type:  `ALIYUN::VPC::EIPPro`
 */
export declare class RosEIPPro extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::EIPPro";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property autoPay: Automatic Payment. Default is false.
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
     * @Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
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
     * @Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
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
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosEIPPro.TagsProperty[] | undefined;
    /**
     * Create a new `ALIYUN::VPC::EIPPro`.
     *
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
 * Properties for defining a `ALIYUN::VPC::EIPSegment`
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
     * @Property bandwidth: The maximum bandwidth of the contiguous EIPs. Unit: Mbit/s. Default value: 5.
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
 * A ROS template type:  `ALIYUN::VPC::EIPSegment`
 */
export declare class RosEIPSegment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::EIPSegment";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property bandwidth: The maximum bandwidth of the contiguous EIPs. Unit: Mbit/s. Default value: 5.
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
     * Create a new `ALIYUN::VPC::EIPSegment`.
     *
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
 * Properties for defining a `ALIYUN::VPC::FlowLog`
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
 * A ROS template type:  `ALIYUN::VPC::FlowLog`
 */
export declare class RosFlowLog extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::FlowLog";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::VPC::FlowLog`.
     *
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
 * Properties for defining a `ALIYUN::VPC::GrantInstanceToCen`
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
 * A ROS template type:  `ALIYUN::VPC::GrantInstanceToCen`
 */
export declare class RosGrantInstanceToCen extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::GrantInstanceToCen";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::VPC::GrantInstanceToCen`.
     *
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
 * Properties for defining a `ALIYUN::VPC::IpsecServer`
 */
export interface RosIpsecServerProps {
    /**
     * @Property clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client. Note: The client network segment cannot conflict with the VPC side network segment.
     */
    readonly clientIpPool: string | ros.IResolvable;
    /**
     * @Property localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment. Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0/24,192.168.2.0/24.
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
 * A ROS template type:  `ALIYUN::VPC::IpsecServer`
 */
export declare class RosIpsecServer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::IpsecServer";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment. Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0/24,192.168.2.0/24.
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
     * Create a new `ALIYUN::VPC::IpsecServer`.
     *
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
 * Properties for defining a `ALIYUN::VPC::Ipv6Gateway`
 */
export interface RosIpv6GatewayProps {
    /**
     * @Property vpcId: To open VPC ID IPv6 gateway.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property description: Description of IPv6 gateway.
     * Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property name: Name of the IPv6 gateway.
     * Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
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
 * A ROS template type:  `ALIYUN::VPC::Ipv6Gateway`
 */
export declare class RosIpv6Gateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::Ipv6Gateway";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property name: Name of the IPv6 gateway.
     * Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
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
     * Create a new `ALIYUN::VPC::Ipv6Gateway`.
     *
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
 * Properties for defining a `ALIYUN::VPC::Ipv6InternetBandwidth`
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
     * PayByTraffic: by using the traffic accounting.
     * PayByBandwidth (default): Bandwidth billing.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosIpv6InternetBandwidth.TagsProperty[];
}
/**
 * A ROS template type:  `ALIYUN::VPC::Ipv6InternetBandwidth`
 */
export declare class RosIpv6InternetBandwidth extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::Ipv6InternetBandwidth";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * PayByTraffic: by using the traffic accounting.
     * PayByBandwidth (default): Bandwidth billing.
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosIpv6InternetBandwidth.TagsProperty[] | undefined;
    /**
     * Create a new `ALIYUN::VPC::Ipv6InternetBandwidth`.
     *
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
export declare namespace RosIpv6InternetBandwidth {
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
 * Properties for defining a `ALIYUN::VPC::NatGateway`
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
     * @Property autoPay: Specifies whether to enable automatic payment. Default is false.
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
     * @Property tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosNatGateway.TagsProperty[];
}
/**
 * A ROS template type:  `ALIYUN::VPC::NatGateway`
 */
export declare class RosNatGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::NatGateway";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property autoPay: Specifies whether to enable automatic payment. Default is false.
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
     * @Property tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosNatGateway.TagsProperty[] | undefined;
    /**
     * Create a new `ALIYUN::VPC::NatGateway`.
     *
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
 * Properties for defining a `ALIYUN::VPC::NetworkAcl`
 */
export interface RosNetworkAclProps {
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property description: The description of the network ACL.
     * The description must be 2 to 256 characters in length. The description must start
     * with a letter but cannot start with http:// or https://.
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
     * start with http:// or https://.
     */
    readonly networkAclName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::VPC::NetworkAcl`
 */
export declare class RosNetworkAcl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::NetworkAcl";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * with a letter but cannot start with http:// or https://.
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
     * start with http:// or https://.
     */
    networkAclName: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::VPC::NetworkAcl`.
     *
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
         * @Property port: The source ports. The value range is from 1 to 65535; setting formats such as "1/200" and "80/80", where "-1/-1" cannot be set individually, which means that the port is not restricted.
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
         * @Property port: The source ports. The value range is from 1 to 65535; setting formats such as "1/200" and "80/80", where "-1/-1" cannot be set individually, which means that the port is not restricted.
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
 * Properties for defining a `ALIYUN::VPC::NetworkAclAssociation`
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
 * A ROS template type:  `ALIYUN::VPC::NetworkAclAssociation`
 */
export declare class RosNetworkAclAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::NetworkAclAssociation";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::VPC::NetworkAclAssociation`.
     *
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
 * Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceBinding`
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
 * A ROS template type:  `ALIYUN::VPC::PeeringRouterInterfaceBinding`
 */
export declare class RosPeeringRouterInterfaceBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::PeeringRouterInterfaceBinding";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::VPC::PeeringRouterInterfaceBinding`.
     *
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
 * Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceConnection`
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
 * A ROS template type:  `ALIYUN::VPC::PeeringRouterInterfaceConnection`
 */
export declare class RosPeeringRouterInterfaceConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::PeeringRouterInterfaceConnection";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::VPC::PeeringRouterInterfaceConnection`.
     *
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
 * Properties for defining a `ALIYUN::VPC::RouteTable`
 */
export interface RosRouteTableProps {
    /**
     * @Property vpcId: The ID of the VPC to which the custom route table belongs.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property description: The description of the route table.
     * The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property routeTableName: The name of the route table.
     * The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
     */
    readonly routeTableName?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to routetable. Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosRouteTable.TagsProperty[];
}
/**
 * A ROS template type:  `ALIYUN::VPC::RouteTable`
 */
export declare class RosRouteTable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::RouteTable";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property routeTableName: The name of the route table.
     * The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
     */
    routeTableName: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to routetable. Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosRouteTable.TagsProperty[] | undefined;
    /**
     * Create a new `ALIYUN::VPC::RouteTable`.
     *
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
 * Properties for defining a `ALIYUN::VPC::RouteTableAssociation`
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
 * A ROS template type:  `ALIYUN::VPC::RouteTableAssociation`
 */
export declare class RosRouteTableAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::RouteTableAssociation";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::VPC::RouteTableAssociation`.
     *
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
 * Properties for defining a `ALIYUN::VPC::RouterInterface`
 */
export interface RosRouterInterfaceProps {
    /**
     * @Property role: RouterInterface role. Now support 'InitiatingSide|AcceptingSide'. If 'RouterType' is specified as 'VBR', the value must be 'InitiatingSide'.If 'OppositeRouterType' is specified as 'VBR', the value must be 'AcceptingSide'.
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
     * @Property period: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
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
 * A ROS template type:  `ALIYUN::VPC::RouterInterface`
 */
export declare class RosRouterInterface extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::RouterInterface";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute RouterInterfaceId: The ID of created RouterInterface.
     */
    readonly attrRouterInterfaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property role: RouterInterface role. Now support 'InitiatingSide|AcceptingSide'. If 'RouterType' is specified as 'VBR', the value must be 'InitiatingSide'.If 'OppositeRouterType' is specified as 'VBR', the value must be 'AcceptingSide'.
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
     * @Property period: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
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
     * Create a new `ALIYUN::VPC::RouterInterface`.
     *
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
 * Properties for defining a `ALIYUN::VPC::SnatEntry`
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
     * @Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
     */
    readonly snatEntryName?: string | ros.IResolvable;
    /**
     * @Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    readonly sourceCidr?: string | ros.IResolvable;
    /**
     * @Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
     */
    readonly sourceVSwitchIds?: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::VPC::SnatEntry`
 */
export declare class RosSnatEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::SnatEntry";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
     */
    snatEntryName: string | ros.IResolvable | undefined;
    /**
     * @Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    sourceCidr: string | ros.IResolvable | undefined;
    /**
     * @Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
     */
    sourceVSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::VPC::SnatEntry`.
     *
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
 * Properties for defining a `ALIYUN::VPC::SslVpnClientCert`
 */
export interface RosSslVpnClientCertProps {
    /**
     * @Property sslVpnServerId: ID of the SSL-VPN server.
     */
    readonly sslVpnServerId: string | ros.IResolvable;
    /**
     * @Property name: The name of the client certificate.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::VPC::SslVpnClientCert`
 */
export declare class RosSslVpnClientCert extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::SslVpnClientCert";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::VPC::SslVpnClientCert`.
     *
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
 * Properties for defining a `ALIYUN::VPC::SslVpnServer`
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
     * The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
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
     * @Property name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
     * But it can't start with http:// or https://.
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
 * A ROS template type:  `ALIYUN::VPC::SslVpnServer`
 */
export declare class RosSslVpnServer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::SslVpnServer";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
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
     * @Property name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
     * But it can't start with http:// or https://.
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
     * Create a new `ALIYUN::VPC::SslVpnServer`.
     *
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
 * Properties for defining a `ALIYUN::VPC::VirtualBorderRouter`
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
     * but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property name: The name of the VBR.
     * The name must be 2 to 128 characters in length, and can contain, digits, periods (.),
     * underscores (_), and hyphens (-). The name cannot start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::VPC::VirtualBorderRouter`
 */
export declare class RosVirtualBorderRouter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VirtualBorderRouter";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * but cannot start with http:// or https://.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the VBR.
     * The name must be 2 to 128 characters in length, and can contain, digits, periods (.),
     * underscores (_), and hyphens (-). The name cannot start with http:// or https://.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::VPC::VirtualBorderRouter`.
     *
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
 * Properties for defining a `ALIYUN::VPC::VpnConnection`
 */
export interface RosVpnConnectionProps {
    /**
     * @Property customerGatewayId: The ID of the user gateway.
     */
    readonly customerGatewayId: string | ros.IResolvable;
    /**
     * @Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
     */
    readonly localSubnet: string | ros.IResolvable;
    /**
     * @Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
     */
    readonly remoteSubnet: string | ros.IResolvable;
    /**
     * @Property vpnGatewayId: ID of the VPN gateway.
     */
    readonly vpnGatewayId: string | ros.IResolvable;
    /**
     * @Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
     * True: Negotiate immediately after the configuration is complete.
     * False (default): Negotiate when traffic enters.
     */
    readonly effectImmediately?: boolean | ros.IResolvable;
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
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::VPC::VpnConnection`
 */
export declare class RosVpnConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnConnection";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property customerGatewayId: The ID of the user gateway.
     */
    customerGatewayId: string | ros.IResolvable;
    /**
     * @Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
     */
    localSubnet: string | ros.IResolvable;
    /**
     * @Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
     */
    remoteSubnet: string | ros.IResolvable;
    /**
     * @Property vpnGatewayId: ID of the VPN gateway.
     */
    vpnGatewayId: string | ros.IResolvable;
    /**
     * @Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
     * True: Negotiate immediately after the configuration is complete.
     * False (default): Negotiate when traffic enters.
     */
    effectImmediately: boolean | ros.IResolvable | undefined;
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
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
     */
    name: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::VPC::VpnConnection`.
     *
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
    interface HealthCheckConfigProperty {
        /**
         * @Property enable:
         */
        readonly enable?: boolean | ros.IResolvable;
        /**
         * @Property dip:
         */
        readonly dip?: boolean | ros.IResolvable;
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
         * @Property ikeAuthAlg: The authentication algorithm negotiated in the first phase, the value is md5|sha1, and the default value is md5.
         */
        readonly ikeAuthAlg?: string | ros.IResolvable;
        /**
         * @Property ikeEncAlg: The encryption algorithm negotiated in the first phase, value: aes|aes192|aes256|des|3des, default value: aes.
         */
        readonly ikeEncAlg?: string | ros.IResolvable;
        /**
         * @Property localIdIPsec: ID of the VPN gateway. The length is limited to 100 characters. The default value is the public IP address of the VPN gateway.
         */
        readonly localIdIPsec?: string | ros.IResolvable;
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
         * @Property ipsecEncAlg: Encryption algorithm negotiated in the second phase. Value: aes|aes192|aes256|des|3des, default value: aes.
         */
        readonly ipsecEncAlg?: string | ros.IResolvable;
        /**
         * @Property ipsecAuthAlg: Authentication algorithm negotiated in the second phase. Value: md5|sha1, default value: md5.
         */
        readonly ipsecAuthAlg?: string | ros.IResolvable;
        /**
         * @Property ipsecLifetime: IpsecLifetime: The life cycle of the SA negotiated in the second phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
         */
        readonly ipsecLifetime?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::VPC::VpnGateway`
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
     * false (default): Does not automatically pay the bill for the VPN gateway.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property description: Description of the VPN gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;
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
     * The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;
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
     * @Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::VPC::VpnGateway`
 */
export declare class RosVpnGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnGateway";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Attribute VpnGatewayId: ID of the VPN gateway.
     */
    readonly attrVpnGatewayId: ros.IResolvable;
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
     * false (default): Does not automatically pay the bill for the VPN gateway.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the VPN gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    description: string | ros.IResolvable | undefined;
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
     * The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
     */
    name: string | ros.IResolvable | undefined;
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
     * @Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::VPC::VpnGateway`.
     *
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
 * Properties for defining a `ALIYUN::VPC::VpnPbrRouteEntry`
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
}
/**
 * A ROS template type:  `ALIYUN::VPC::VpnPbrRouteEntry`
 */
export declare class RosVpnPbrRouteEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnPbrRouteEntry";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::VPC::VpnPbrRouteEntry`.
     *
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
 * Properties for defining a `ALIYUN::VPC::VpnRouteEntry`
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
 * A ROS template type:  `ALIYUN::VPC::VpnRouteEntry`
 */
export declare class RosVpnRouteEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnRouteEntry";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::VPC::VpnRouteEntry`.
     *
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
//# sourceMappingURL=vpc.generated.d.ts.map