import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::VPC::CommonBandwidthPackage`
 */
export interface RosCommonBandwidthPackageProps {
    /**
     * @Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
     */
    readonly bandwidth: number;
    /**
     * @Property description: The description of the Internet Shared Bandwidth instance.
     * The description must be 2 to 256 characters in length. It must start with a letter,
     * and cannot start with http:// or https://.
     */
    readonly description?: string;
    /**
     * @Property internetChargeType: The billing model of the Internet Shared Bandwidth instance. Allowed values:
     * PayByBandwidth (default): Billed by bandwidth.
     * PayBy95: Charged at Enhanced 95.
     */
    readonly internetChargeType?: string;
    /**
     * @Property isp: Line type of EIP, value: BGP (multi-line).
     */
    readonly isp?: string;
    /**
     * @Property name: The name of the Internet Shared Bandwidth instance.
     * The name must be 2 to 128 characters in length and can contain letters, numbers, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
     * start with http:// or https://.
     */
    readonly name?: string;
    /**
     * @Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance. Default to 100.
     * Note This parameter is only supported on the China site.
     */
    readonly ratio?: number;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string;
    /**
     * @Property zone: Zone Id.
     */
    readonly zone?: string;
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
    readonly attrBandwidthPackageId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
     */
    bandwidth: number;
    /**
     * @Property description: The description of the Internet Shared Bandwidth instance.
     * The description must be 2 to 256 characters in length. It must start with a letter,
     * and cannot start with http:// or https://.
     */
    description: string | undefined;
    /**
     * @Property internetChargeType: The billing model of the Internet Shared Bandwidth instance. Allowed values:
     * PayByBandwidth (default): Billed by bandwidth.
     * PayBy95: Charged at Enhanced 95.
     */
    internetChargeType: string | undefined;
    /**
     * @Property isp: Line type of EIP, value: BGP (multi-line).
     */
    isp: string | undefined;
    /**
     * @Property name: The name of the Internet Shared Bandwidth instance.
     * The name must be 2 to 128 characters in length and can contain letters, numbers, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
     * start with http:// or https://.
     */
    name: string | undefined;
    /**
     * @Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance. Default to 100.
     * Note This parameter is only supported on the China site.
     */
    ratio: number | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property zone: Zone Id.
     */
    zone: string | undefined;
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
/**
 * Properties for defining a `ALIYUN::VPC::CommonBandwidthPackageIp`
 */
export interface RosCommonBandwidthPackageIpProps {
    /**
     * @Property bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
     */
    readonly bandwidthPackageId: string;
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
    readonly attrAllocationIds: any;
    /**
     * @Attribute IpAddresses: All eip addresses of common bandwidth package.
     */
    readonly attrIpAddresses: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
     */
    bandwidthPackageId: string;
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
        readonly bandwidth?: number;
        /**
         * @Property allocationId: The ID of the EIP instance.
         */
        readonly allocationId: string;
    }
}
/**
 * Properties for defining a `ALIYUN::VPC::CustomerGateway`
 */
export interface RosCustomerGatewayProps {
    /**
     * @Property ipAddress: The IP address of the user gateway.
     */
    readonly ipAddress: string;
    /**
     * @Property description: Description of the user gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    readonly description?: string;
    /**
     * @Property name: The name of the user gateway.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    readonly name?: string;
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
    readonly attrCustomerGatewayId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ipAddress: The IP address of the user gateway.
     */
    ipAddress: string;
    /**
     * @Property description: Description of the user gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    description: string | undefined;
    /**
     * @Property name: The name of the user gateway.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    name: string | undefined;
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
    readonly bandwidth?: number;
    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
     */
    readonly description?: string;
    /**
     * @Property instanceChargeType: The resource charge type. Default value is Postpaid
     */
    readonly instanceChargeType?: string;
    /**
     * @Property internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
     */
    readonly internetChargeType?: string;
    /**
     * @Property isp: ISP tag for finance cloud region. only for cn-hangzhou and cn-qingdao region), if you are not finance cloud user, this value will be ignore.
     */
    readonly isp?: string;
    /**
     * @Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
     */
    readonly name?: string;
    /**
     * @Property netmode: The network type. Valid value: public (public network).
     */
    readonly netmode?: string;
    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    readonly period?: number;
    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    readonly pricingCycle?: string;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;
    /**
     * @Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];
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
    readonly attrAllocationId: any;
    /**
     * @Attribute EipAddress: IP address of created EIP.
     */
    readonly attrEipAddress: any;
    /**
     * @Attribute OrderId: Order ID of prepaid EIP instance.
     */
    readonly attrOrderId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property autoPay: Automatic Payment. Default is false.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property bandwidth: Bandwidth for the output network. Default is 5MB.
     */
    bandwidth: number | undefined;
    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
     */
    description: string | undefined;
    /**
     * @Property instanceChargeType: The resource charge type. Default value is Postpaid
     */
    instanceChargeType: string | undefined;
    /**
     * @Property internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
     */
    internetChargeType: string | undefined;
    /**
     * @Property isp: ISP tag for finance cloud region. only for cn-hangzhou and cn-qingdao region), if you are not finance cloud user, this value will be ignore.
     */
    isp: string | undefined;
    /**
     * @Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
     */
    name: string | undefined;
    /**
     * @Property netmode: The network type. Valid value: public (public network).
     */
    netmode: string | undefined;
    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    period: number | undefined;
    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    pricingCycle: string | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
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
/**
 * Properties for defining a `ALIYUN::VPC::EIPAssociation`
 */
export interface RosEIPAssociationProps {
    /**
     * @Property allocationId: EIP instance id to bind.
     */
    readonly allocationId: string;
    /**
     * @Property instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.
     */
    readonly instanceId: string;
    /**
     * @Property mode: The mode of association. Valid values:
     * NAT(Default): NAT mode.
     * BINDED: Cut-through mode.
     * MULTI_BINDED: Multi-EIP to ENI mode.
     * This is required only when the value of InstanceType is NetworkInterface.
     */
    readonly mode?: string;
    /**
     * @Property privateIpAddress: An IP address in the CIDR block of the VSwitch.
     * If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
     */
    readonly privateIpAddress?: string;
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
    readonly attrAllocationId: any;
    /**
     * @Attribute EipAddress: IP address of created EIP.
     */
    readonly attrEipAddress: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property allocationId: EIP instance id to bind.
     */
    allocationId: string;
    /**
     * @Property instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.
     */
    instanceId: string;
    /**
     * @Property mode: The mode of association. Valid values:
     * NAT(Default): NAT mode.
     * BINDED: Cut-through mode.
     * MULTI_BINDED: Multi-EIP to ENI mode.
     * This is required only when the value of InstanceType is NetworkInterface.
     */
    mode: string | undefined;
    /**
     * @Property privateIpAddress: An IP address in the CIDR block of the VSwitch.
     * If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
     */
    privateIpAddress: string | undefined;
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
 * Properties for defining a `ALIYUN::VPC::GrantInstanceToCen`
 */
export interface RosGrantInstanceToCenProps {
    /**
     * @Property cenId: The ID of the CEN instance to be authorized.
     */
    readonly cenId: string;
    /**
     * @Property cenOwnerId: The UID of the account to which the target CEN instance belongs.
     */
    readonly cenOwnerId: number;
    /**
     * @Property instanceId: The ID of the network instance.
     */
    readonly instanceId: string;
    /**
     * @Property instanceType: The type of the network instance. Valid values:
     * VPC: Virtual Private Cloud (VPC).
     * VBR: Virtual Border Router (VBR).
     * CCN: Cloud Connect Network (CCN).
     */
    readonly instanceType: string;
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
    readonly attrCenId: any;
    /**
     * @Attribute InstanceId: The ID of the network instance.
     */
    readonly attrInstanceId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cenId: The ID of the CEN instance to be authorized.
     */
    cenId: string;
    /**
     * @Property cenOwnerId: The UID of the account to which the target CEN instance belongs.
     */
    cenOwnerId: number;
    /**
     * @Property instanceId: The ID of the network instance.
     */
    instanceId: string;
    /**
     * @Property instanceType: The type of the network instance. Valid values:
     * VPC: Virtual Private Cloud (VPC).
     * VBR: Virtual Border Router (VBR).
     * CCN: Cloud Connect Network (CCN).
     */
    instanceType: string;
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
 * Properties for defining a `ALIYUN::VPC::Ipv6Gateway`
 */
export interface RosIpv6GatewayProps {
    /**
     * @Property vpcId: To open VPC ID IPv6 gateway.
     */
    readonly vpcId: string;
    /**
     * @Property description: Description of IPv6 gateway.
     * Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
     */
    readonly description?: string;
    /**
     * @Property name: Name of the IPv6 gateway.
     * Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
     */
    readonly name?: string;
    /**
     * @Property spec: Specifications IPv6 gateway, the value:
     * Small (default): Free.
     * Medium: Enterprise Edition.
     * Large: Enterprise Enhanced Edition.
     * Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
     */
    readonly spec?: string;
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
    readonly attrIpv6GatewayId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vpcId: To open VPC ID IPv6 gateway.
     */
    vpcId: string;
    /**
     * @Property description: Description of IPv6 gateway.
     * Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
     */
    description: string | undefined;
    /**
     * @Property name: Name of the IPv6 gateway.
     * Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
     */
    name: string | undefined;
    /**
     * @Property spec: Specifications IPv6 gateway, the value:
     * Small (default): Free.
     * Medium: Enterprise Edition.
     * Large: Enterprise Enhanced Edition.
     * Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
     */
    spec: string | undefined;
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
    readonly bandwidth: number;
    /**
     * @Property ipv6AddressId: ID of IPv6 address.
     */
    readonly ipv6AddressId: string;
    /**
     * @Property ipv6GatewayId: ID of IPv6 gateway.
     */
    readonly ipv6GatewayId: string;
    /**
     * @Property internetChargeType: IPv6 public network bandwidth billing, value:
     * PayByTraffic: by using the traffic accounting.
     * PayByBandwidth (default): Bandwidth billing.
     */
    readonly internetChargeType?: string;
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
    readonly attrInternetBandwidthId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.
     * When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000.
     * When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications.
     * Small (default free version), the public network bandwidth range 1-500.
     * Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000.
     * Large (Enterprise Edition), the public network bandwidth range 1-2000.
     */
    bandwidth: number;
    /**
     * @Property ipv6AddressId: ID of IPv6 address.
     */
    ipv6AddressId: string;
    /**
     * @Property ipv6GatewayId: ID of IPv6 gateway.
     */
    ipv6GatewayId: string;
    /**
     * @Property internetChargeType: IPv6 public network bandwidth billing, value:
     * PayByTraffic: by using the traffic accounting.
     * PayByBandwidth (default): Bandwidth billing.
     */
    internetChargeType: string | undefined;
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
/**
 * Properties for defining a `ALIYUN::VPC::NatGateway`
 */
export interface RosNatGatewayProps {
    /**
     * @Property vpcId: The VPC id to create NAT gateway.
     */
    readonly vpcId: string;
    /**
     * @Property vSwitchId: The VSwitch id to create NAT gateway.
     */
    readonly vSwitchId: string;
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
    readonly description?: string;
    /**
     * @Property duration: The subscription duration. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    readonly duration?: number;
    /**
     * @Property instanceChargeType: The billing method. The default value is PostPaid (which means pay-as-you-go).
     */
    readonly instanceChargeType?: string;
    /**
     * @Property internetChargeType: The billing method for the NAT gateway. Valid values:
     * PayBySpec: billed on a pay-by-specification basis.
     * PayByLcu: billed on a pay-by-LCU basis.
     */
    readonly internetChargeType?: string;
    /**
     * @Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly natGatewayName?: string;
    /**
     * @Property natType: The type of the NAT gateway. Valid values:
     * - Enhanced: enhanced NAT gateway.
     */
    readonly natType?: string;
    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value.
     */
    readonly pricingCycle?: string;
    /**
     * @Property spec: NAT gateway specification. Now support 'Small|Middle|Large|XLarge.1'
     */
    readonly spec?: string;
    /**
     * @Property tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];
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
    readonly attrForwardTableId: any;
    /**
     * @Attribute NatGatewayId: The Id of created NAT gateway.
     */
    readonly attrNatGatewayId: any;
    /**
     * @Attribute SNatTableId: The SNAT table id.
     */
    readonly attrSNatTableId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vpcId: The VPC id to create NAT gateway.
     */
    vpcId: string;
    /**
     * @Property vSwitchId: The VSwitch id to create NAT gateway.
     */
    vSwitchId: string;
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
    description: string | undefined;
    /**
     * @Property duration: The subscription duration. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    duration: number | undefined;
    /**
     * @Property instanceChargeType: The billing method. The default value is PostPaid (which means pay-as-you-go).
     */
    instanceChargeType: string | undefined;
    /**
     * @Property internetChargeType: The billing method for the NAT gateway. Valid values:
     * PayBySpec: billed on a pay-by-specification basis.
     * PayByLcu: billed on a pay-by-LCU basis.
     */
    internetChargeType: string | undefined;
    /**
     * @Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    natGatewayName: string | undefined;
    /**
     * @Property natType: The type of the NAT gateway. Valid values:
     * - Enhanced: enhanced NAT gateway.
     */
    natType: string | undefined;
    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value.
     */
    pricingCycle: string | undefined;
    /**
     * @Property spec: NAT gateway specification. Now support 'Small|Middle|Large|XLarge.1'
     */
    spec: string | undefined;
    /**
     * @Property tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
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
/**
 * Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceBinding`
 */
export interface RosPeeringRouterInterfaceBindingProps {
    /**
     * @Property oppositeInterfaceId: The connection peer RouterInterface ID.
     */
    readonly oppositeInterfaceId: string;
    /**
     * @Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
     */
    readonly routerInterfaceId: string;
    /**
     * @Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
     */
    readonly oppositeInterfaceOwnerId?: string;
    /**
     * @Property oppositeRouterId: Router ID of the connection peer RouterInterface.
     */
    readonly oppositeRouterId?: string;
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
    readonly attrRouterInterfaceId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property oppositeInterfaceId: The connection peer RouterInterface ID.
     */
    oppositeInterfaceId: string;
    /**
     * @Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
     */
    routerInterfaceId: string;
    /**
     * @Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
     */
    oppositeInterfaceOwnerId: string | undefined;
    /**
     * @Property oppositeRouterId: Router ID of the connection peer RouterInterface.
     */
    oppositeRouterId: string | undefined;
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
    readonly oppositeInterfaceId: string;
    /**
     * @Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
     */
    readonly routerInterfaceId: string;
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
    readonly attrOppositeInterfaceId: any;
    /**
     * @Attribute RouterInterfaceId: The initiator RouterInterface ID.
     */
    readonly attrRouterInterfaceId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
     */
    oppositeInterfaceId: string;
    /**
     * @Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
     */
    routerInterfaceId: string;
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
    readonly vpcId: string;
    /**
     * @Property description: The description of the route table.
     * The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
     */
    readonly description?: string;
    /**
     * @Property routeTableName: The name of the route table.
     * The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
     */
    readonly routeTableName?: string;
    /**
     * @Property tags: Tags to attach to routetable. Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];
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
    readonly attrRouteTableId: any;
    /**
     * @Attribute RouteTableName: The name of the route table.
     */
    readonly attrRouteTableName: any;
    /**
     * @Attribute RouteTableType: The type of the route table.
     */
    readonly attrRouteTableType: any;
    /**
     * @Attribute VSwitchIds: A list of VSwitches under the VPC.
     */
    readonly attrVSwitchIds: any;
    /**
     * @Attribute VpcId: The ID of the VRouter to which the route table belongs.
     */
    readonly attrVpcId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vpcId: The ID of the VPC to which the custom route table belongs.
     */
    vpcId: string;
    /**
     * @Property description: The description of the route table.
     * The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
     */
    description: string | undefined;
    /**
     * @Property routeTableName: The name of the route table.
     * The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
     */
    routeTableName: string | undefined;
    /**
     * @Property tags: Tags to attach to routetable. Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
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
/**
 * Properties for defining a `ALIYUN::VPC::RouteTableAssociation`
 */
export interface RosRouteTableAssociationProps {
    /**
     * @Property routeTableId: The ID of the route table.
     */
    readonly routeTableId: string;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId: string;
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
    readonly attrRouteTableId: any;
    /**
     * @Attribute VSwitchId: The VSwitch ID which the route table associated with.
     */
    readonly attrVSwitchId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property routeTableId: The ID of the route table.
     */
    routeTableId: string;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    vSwitchId: string;
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
    readonly role: string;
    /**
     * @Property routerId: The router ID to create RouterInterface.
     */
    readonly routerId: string;
    /**
     * @Property accessPointId: Access point ID. If 'RouterType' is specified as 'VBR', the value is required.
     */
    readonly accessPointId?: string;
    /**
     * @Property autoPay: Indicates whether automatic payment is enabled. Valid values:false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. true: Automatic payment is enabled. The payment is automatically made.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property description: Custom description of the RouterInterface, [2, 256] characters. Don't fill or empty, the default is empty.
     */
    readonly description?: string;
    /**
     * @Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    readonly healthCheckSourceIp?: string;
    /**
     * @Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    readonly healthCheckTargetIp?: string;
    /**
     * @Property instanceChargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
     */
    readonly instanceChargeType?: string;
    /**
     * @Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly name?: string;
    /**
     * @Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface. If 'OppositeRouterType' is specified as 'VBR', the value is required.
     */
    readonly oppositeAccessPointId?: string;
    /**
     * @Property oppositeInterfaceId: The ID of the peer router interface.
     */
    readonly oppositeInterfaceId?: string;
    /**
     * @Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. The default value is current user Id.
     */
    readonly oppositeInterfaceOwnerId?: string;
    /**
     * @Property oppositeRegionId: The region where the connection peer RouterInterface locates. The default value is region where stack is created.
     */
    readonly oppositeRegionId?: string;
    /**
     * @Property oppositeRouterId: The router ID of the connection peer RouterInterface.
     */
    readonly oppositeRouterId?: string;
    /**
     * @Property oppositeRouterType: Router type of the connection peer router. Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
     */
    readonly oppositeRouterType?: string;
    /**
     * @Property period: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
     */
    readonly period?: number;
    /**
     * @Property pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
     */
    readonly pricingCycle?: string;
    /**
     * @Property routerType: Router type. Now support 'VRouter|VBR'
     */
    readonly routerType?: string;
    /**
     * @Property spec: RouterInterface specification. If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
     */
    readonly spec?: string;
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
    readonly attrRouterInterfaceId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property role: RouterInterface role. Now support 'InitiatingSide|AcceptingSide'. If 'RouterType' is specified as 'VBR', the value must be 'InitiatingSide'.If 'OppositeRouterType' is specified as 'VBR', the value must be 'AcceptingSide'.
     */
    role: string;
    /**
     * @Property routerId: The router ID to create RouterInterface.
     */
    routerId: string;
    /**
     * @Property accessPointId: Access point ID. If 'RouterType' is specified as 'VBR', the value is required.
     */
    accessPointId: string | undefined;
    /**
     * @Property autoPay: Indicates whether automatic payment is enabled. Valid values:false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. true: Automatic payment is enabled. The payment is automatically made.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: Custom description of the RouterInterface, [2, 256] characters. Don't fill or empty, the default is empty.
     */
    description: string | undefined;
    /**
     * @Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    healthCheckSourceIp: string | undefined;
    /**
     * @Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    healthCheckTargetIp: string | undefined;
    /**
     * @Property instanceChargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
     */
    instanceChargeType: string | undefined;
    /**
     * @Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    name: string | undefined;
    /**
     * @Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface. If 'OppositeRouterType' is specified as 'VBR', the value is required.
     */
    oppositeAccessPointId: string | undefined;
    /**
     * @Property oppositeInterfaceId: The ID of the peer router interface.
     */
    oppositeInterfaceId: string | undefined;
    /**
     * @Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. The default value is current user Id.
     */
    oppositeInterfaceOwnerId: string | undefined;
    /**
     * @Property oppositeRegionId: The region where the connection peer RouterInterface locates. The default value is region where stack is created.
     */
    oppositeRegionId: string | undefined;
    /**
     * @Property oppositeRouterId: The router ID of the connection peer RouterInterface.
     */
    oppositeRouterId: string | undefined;
    /**
     * @Property oppositeRouterType: Router type of the connection peer router. Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
     */
    oppositeRouterType: string | undefined;
    /**
     * @Property period: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
     */
    period: number | undefined;
    /**
     * @Property pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
     */
    pricingCycle: string | undefined;
    /**
     * @Property routerType: Router type. Now support 'VRouter|VBR'
     */
    routerType: string | undefined;
    /**
     * @Property spec: RouterInterface specification. If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
     */
    spec: string | undefined;
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
    readonly snatIp: string;
    /**
     * @Property snatTableId: The ID of the SNAT table.
     */
    readonly snatTableId: string;
    /**
     * @Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
     */
    readonly snatEntryName?: string;
    /**
     * @Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    readonly sourceCidr?: string;
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
    readonly attrSnatEntryIds: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property snatIp: The public IP address. Separate multiple EIPs with commas.
     */
    snatIp: string;
    /**
     * @Property snatTableId: The ID of the SNAT table.
     */
    snatTableId: string;
    /**
     * @Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
     */
    snatEntryName: string | undefined;
    /**
     * @Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    sourceCidr: string | undefined;
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
    readonly sslVpnServerId: string;
    /**
     * @Property name: The name of the client certificate.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    readonly name?: string;
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
    readonly attrSslVpnClientCertId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property sslVpnServerId: ID of the SSL-VPN server.
     */
    sslVpnServerId: string;
    /**
     * @Property name: The name of the client certificate.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    name: string | undefined;
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
    readonly clientIpPool: string;
    /**
     * @Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
     * The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
     */
    readonly localSubnet: string;
    /**
     * @Property vpnGatewayId: ID of the VPN gateway.
     */
    readonly vpnGatewayId: string;
    /**
     * @Property cipher: The encryption algorithm used by SSL-VPN. Value:
     * AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
     */
    readonly cipher?: string;
    /**
     * @Property compress: Whether it is compressed.
     */
    readonly compress?: boolean | ros.IResolvable;
    /**
     * @Property name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
     * But it can't start with http:// or https://.
     */
    readonly name?: string;
    /**
     * @Property port: The port used by the SSL-VPN server. The default value is 1194. Cannot use the following ports:
     * 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
     */
    readonly port?: number;
    /**
     * @Property proto: The protocol used by the SSL-VPN server. Allowed values: UDP (default) | TCP.
     */
    readonly proto?: string;
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
    readonly attrSslVpnServerId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. It does not refer to the existing intranet segment of the client.
     * When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
     * The network segment cannot conflict with the LocalSubnet address segment.
     */
    clientIpPool: string;
    /**
     * @Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
     * The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
     */
    localSubnet: string;
    /**
     * @Property vpnGatewayId: ID of the VPN gateway.
     */
    vpnGatewayId: string;
    /**
     * @Property cipher: The encryption algorithm used by SSL-VPN. Value:
     * AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
     */
    cipher: string | undefined;
    /**
     * @Property compress: Whether it is compressed.
     */
    compress: boolean | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
     * But it can't start with http:// or https://.
     */
    name: string | undefined;
    /**
     * @Property port: The port used by the SSL-VPN server. The default value is 1194. Cannot use the following ports:
     * 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
     */
    port: number | undefined;
    /**
     * @Property proto: The protocol used by the SSL-VPN server. Allowed values: UDP (default) | TCP.
     */
    proto: string | undefined;
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
 * Properties for defining a `ALIYUN::VPC::VpnConnection`
 */
export interface RosVpnConnectionProps {
    /**
     * @Property customerGatewayId: The ID of the user gateway.
     */
    readonly customerGatewayId: string;
    /**
     * @Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
     */
    readonly localSubnet: string;
    /**
     * @Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
     */
    readonly remoteSubnet: string;
    /**
     * @Property vpnGatewayId: ID of the VPN gateway.
     */
    readonly vpnGatewayId: string;
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
    readonly name?: string;
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
    readonly attrPeerVpnConnectionConfig: any;
    /**
     * @Attribute Status: Status of the IPsec connection.
     */
    readonly attrStatus: any;
    /**
     * @Attribute VpnConnectionId: ID of the IPsec connection.
     */
    readonly attrVpnConnectionId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property customerGatewayId: The ID of the user gateway.
     */
    customerGatewayId: string;
    /**
     * @Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
     */
    localSubnet: string;
    /**
     * @Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
     */
    remoteSubnet: string;
    /**
     * @Property vpnGatewayId: ID of the VPN gateway.
     */
    vpnGatewayId: string;
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
    name: string | undefined;
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
        readonly retry?: number;
        /**
         * @Property sip:
         */
        readonly sip?: string;
        /**
         * @Property interval:
         */
        readonly interval?: number;
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
        readonly ikeAuthAlg?: string;
        /**
         * @Property ikeEncAlg: The encryption algorithm negotiated in the first phase, value: aes|aes192|aes256|des|3des, default value: aes.
         */
        readonly ikeEncAlg?: string;
        /**
         * @Property localIdIPsec: ID of the VPN gateway. The length is limited to 100 characters. The default value is the public IP address of the VPN gateway.
         */
        readonly localIdIPsec?: string;
        /**
         * @Property ikeVersion: The version of the IKE protocol. Value: ikev1|ikev2, default: ikev1.
         */
        readonly ikeVersion?: string;
        /**
         * @Property ikeMode: Negotiation mode for IKE V1. Value: main|aggressive, default: main.
         */
        readonly ikeMode?: string;
        /**
         * @Property ikeLifetime: The life cycle of the SA negotiated in the first phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
         */
        readonly ikeLifetime?: number;
        /**
         * @Property remoteId: ID of the user gateway. The length is limited to 100 characters. The default value is the public IP address of the user gateway.
         */
        readonly remoteId?: string;
        /**
         * @Property psk: Used for identity authentication between the IPsec VPN gateway and the user gateway. It is generated randomly by default, or you can specify the key manually. The length is limited to 100 characters.
         */
        readonly psk?: string;
        /**
         * @Property ikePfs: Diffie-Hellman key exchange algorithm used in the first phase negotiation. Value: group1|group2|group5|group14|group24, default value: group2.
         */
        readonly ikePfs?: string;
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
        readonly ipsecPfs?: string;
        /**
         * @Property ipsecEncAlg: Encryption algorithm negotiated in the second phase. Value: aes|aes192|aes256|des|3des, default value: aes.
         */
        readonly ipsecEncAlg?: string;
        /**
         * @Property ipsecAuthAlg: Authentication algorithm negotiated in the second phase. Value: md5|sha1, default value: md5.
         */
        readonly ipsecAuthAlg?: string;
        /**
         * @Property ipsecLifetime: IpsecLifetime: The life cycle of the SA negotiated in the second phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
         */
        readonly ipsecLifetime?: number;
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
    readonly bandwidth: number;
    /**
     * @Property vpcId: VPC ID to which the VPN gateway belongs.
     */
    readonly vpcId: string;
    /**
     * @Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value:
     * True: Automatically pays the bill for the VPN gateway.
     * False (default): Does not automatically pay the bill for the VPN gateway.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property description: Description of the VPN gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    readonly description?: string;
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
    readonly instanceChargeType?: string;
    /**
     * @Property name: Name of the VPN gateway. The default value is the ID of the VPN gateway.
     * The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
     */
    readonly name?: string;
    /**
     * @Property period: Purchase time, value: 1~9|12|24|36.
     * When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
     */
    readonly period?: number;
    /**
     * @Property sslConnections: The maximum number of clients allowed to connect at the same time.
     */
    readonly sslConnections?: number;
    /**
     * @Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
     */
    readonly vSwitchId?: string;
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
    readonly attrInternetIp: any;
    /**
     * @Attribute OrderId: The order ID.
     */
    readonly attrOrderId: any;
    /**
     * @Attribute Spec: The specification of the VPN gateway.
     */
    readonly attrSpec: any;
    /**
     * @Attribute SslMaxConnections: The maximum number of concurrent SSL-VPN connections.
     */
    readonly attrSslMaxConnections: any;
    /**
     * @Attribute VpnGatewayId: ID of the VPN gateway.
     */
    readonly attrVpnGatewayId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
     * Value: 5|10|20|50|100|200.
     */
    bandwidth: number;
    /**
     * @Property vpcId: VPC ID to which the VPN gateway belongs.
     */
    vpcId: string;
    /**
     * @Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value:
     * True: Automatically pays the bill for the VPN gateway.
     * False (default): Does not automatically pay the bill for the VPN gateway.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the VPN gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    description: string | undefined;
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
    instanceChargeType: string | undefined;
    /**
     * @Property name: Name of the VPN gateway. The default value is the ID of the VPN gateway.
     * The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
     */
    name: string | undefined;
    /**
     * @Property period: Purchase time, value: 1~9|12|24|36.
     * When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
     */
    period: number | undefined;
    /**
     * @Property sslConnections: The maximum number of clients allowed to connect at the same time.
     */
    sslConnections: number | undefined;
    /**
     * @Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
     */
    vSwitchId: string | undefined;
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
