import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccelerator`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-accelerator
 */
export interface RosAcceleratorProps {
    /**
     * @Property acceleratorName: The Name of the GA instance
     */
    readonly acceleratorName?: string | ros.IResolvable;
    /**
     * @Property autoPay: Whether to pay automatically.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property autoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    readonly autoUseCoupon?: string | ros.IResolvable;
    /**
     * @Property bandwidthBillingType: Bandwidth billing method.
     */
    readonly bandwidthBillingType?: string | ros.IResolvable;
    /**
     * @Property duration: Length of purchase.
     */
    readonly duration?: string | ros.IResolvable;
    /**
     * @Property enableCrossBorder: Whether the global acceleration instance enables the cross-border line function.
     */
    readonly enableCrossBorder?: boolean | ros.IResolvable;
    /**
     * @Property instanceChargeType: Global acceleration instance payment type, the default value is PREPAY (prepaid).
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property ipSetConfig: Accelerate zone configuration.
     */
    readonly ipSetConfig?: RosAccelerator.IpSetConfigProperty | ros.IResolvable;
    /**
     * @Property pricingCycle: Billing cycle.
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ResourceGroup Id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property spec: Specifications of Global Acceleration Instances.
     */
    readonly spec?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::Accelerator`, which is used to create a Global Accelerator (GA) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Accelerator` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-accelerator
 */
export declare class RosAccelerator extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::Accelerator";
    /**
     * @Attribute AcceleratorId: The ID of the GA instance to query.
     */
    readonly attrAcceleratorId: ros.IResolvable;
    /**
     * @Attribute AcceleratorName: The Name of the GA instance
     */
    readonly attrAcceleratorName: ros.IResolvable;
    /**
     * @Attribute AutoPay: The AutoPay of the GA instance.
     */
    readonly attrAutoPay: ros.IResolvable;
    /**
     * @Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    readonly attrAutoUseCoupon: ros.IResolvable;
    /**
     * @Attribute Duration: The Duration of the GA instance
     */
    readonly attrDuration: ros.IResolvable;
    /**
     * @Attribute OrderId: The OrderId of the GA instance
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute PaymentType: The Payment Typethe GA instance
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute PricingCycle: The PricingCycle of the GA instance.
     */
    readonly attrPricingCycle: ros.IResolvable;
    /**
     * @Attribute Spec: The instance type of the GA instance
     */
    readonly attrSpec: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property acceleratorName: The Name of the GA instance
     */
    acceleratorName: string | ros.IResolvable | undefined;
    /**
     * @Property autoPay: Whether to pay automatically.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    autoUseCoupon: string | ros.IResolvable | undefined;
    /**
     * @Property bandwidthBillingType: Bandwidth billing method.
     */
    bandwidthBillingType: string | ros.IResolvable | undefined;
    /**
     * @Property duration: Length of purchase.
     */
    duration: string | ros.IResolvable | undefined;
    /**
     * @Property enableCrossBorder: Whether the global acceleration instance enables the cross-border line function.
     */
    enableCrossBorder: boolean | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: Global acceleration instance payment type, the default value is PREPAY (prepaid).
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property ipSetConfig: Accelerate zone configuration.
     */
    ipSetConfig: RosAccelerator.IpSetConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: Billing cycle.
     */
    pricingCycle: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ResourceGroup Id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property spec: Specifications of Global Acceleration Instances.
     */
    spec: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAcceleratorProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAccelerator {
    /**
     * @stability external
     */
    interface IpSetConfigProperty {
        /**
         * @Property accessMode: Accelerated regional access mode.
         */
        readonly accessMode?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosAcl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-acl
 */
export interface RosAclProps {
    /**
     * @Property addressIpVersion: The IP version of the ACL.
     */
    readonly addressIpVersion: string | ros.IResolvable;
    /**
     * @Property aclEntries: The entries of IP addresses or CIDR blocks to add to the ACL. You can add up to 20 entries.
     */
    readonly aclEntries?: Array<RosAcl.AclEntriesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property aclName: The name of the ACL.
     */
    readonly aclName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of the ACL.
     */
    readonly tags?: RosAcl.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::Acl`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Acl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-acl
 */
export declare class RosAcl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::Acl";
    /**
     * @Attribute AclEntries: The entries of the ACL.
     */
    readonly attrAclEntries: ros.IResolvable;
    /**
     * @Attribute AclId: The  ID of the ACL.
     */
    readonly attrAclId: ros.IResolvable;
    /**
     * @Attribute AclName: The name of the ACL.
     */
    readonly attrAclName: ros.IResolvable;
    /**
     * @Attribute AddressIPVersion: The IP version of the ACL.
     */
    readonly attrAddressIpVersion: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the resource.
     */
    readonly attrTags: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property addressIpVersion: The IP version of the ACL.
     */
    addressIpVersion: string | ros.IResolvable;
    /**
     * @Property aclEntries: The entries of IP addresses or CIDR blocks to add to the ACL. You can add up to 20 entries.
     */
    aclEntries: Array<RosAcl.AclEntriesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property aclName: The name of the ACL.
     */
    aclName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of the ACL.
     */
    tags: RosAcl.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAclProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAcl {
    /**
     * @stability external
     */
    interface AclEntriesProperty {
        /**
         * @Property entry: The IP addresses (192.168.XX.XX) or CIDR blocks (10.0.XX.XX\/24) that you want to add to the ACL.
         */
        readonly entry?: string | ros.IResolvable;
        /**
         * @Property entryDescription: The description of the entry that you want to add to the AC,The description must be 1 to 256 characters in length, and can contain letters, digits, hyphens (-), forward slashes (\/), periods (.), and underscores (_).
         */
        readonly entryDescription?: string | ros.IResolvable;
    }
}
export declare namespace RosAcl {
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
 * Properties for defining a `RosBandwidthPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackage
 */
export interface RosBandwidthPackageProps {
    /**
     * @Property bandwidth: The bandwidth provided by the bandwidth plan.
     */
    readonly bandwidth: number | ros.IResolvable;
    /**
     * @Property type: The type of the bandwidth plan
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property autoPay: Specifies whether to enable automatic payment.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property autoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    readonly autoUseCoupon?: string | ros.IResolvable;
    /**
     * @Property bandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    readonly bandwidthType?: string | ros.IResolvable;
    /**
     * @Property billingType: The BillingType of the bandwidth
     */
    readonly billingType?: string | ros.IResolvable;
    /**
     * @Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    readonly cbnGeographicRegionIdA?: string | ros.IResolvable;
    /**
     * @Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    readonly cbnGeographicRegionIdB?: string | ros.IResolvable;
    /**
     * @Property chargeType: The ChargeType of the bandwidth
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property duration:
     */
    readonly duration?: string | ros.IResolvable;
    /**
     * @Property pricingCycle:
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * @Property ratio: The Ratio of the bandwidth
     */
    readonly ratio?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::BandwidthPackage`, which is used to create a bandwidth plan.
 * @Note This class does not contain additional functions, so it is recommended to use the `BandwidthPackage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackage
 */
export declare class RosBandwidthPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BandwidthPackage";
    /**
     * @Attribute AutoPay: The AutoPay of the bandwidth
     */
    readonly attrAutoPay: ros.IResolvable;
    /**
     * @Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    readonly attrAutoUseCoupon: ros.IResolvable;
    /**
     * @Attribute Bandwidth: The bandwidth provided by the bandwidth plan.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * @Attribute BandwidthPackageId: The Resource ID of the bandwidth
     */
    readonly attrBandwidthPackageId: ros.IResolvable;
    /**
     * @Attribute BandwidthPackageName: The Resource name of the bandwidth
     */
    readonly attrBandwidthPackageName: ros.IResolvable;
    /**
     * @Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    readonly attrBandwidthType: ros.IResolvable;
    /**
     * @Attribute BillingType: The BillingType of the bandwidth
     */
    readonly attrBillingType: ros.IResolvable;
    /**
     * @Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    readonly attrCbnGeographicRegionIdA: ros.IResolvable;
    /**
     * @Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    readonly attrCbnGeographicRegionIdB: ros.IResolvable;
    /**
     * @Attribute ChargeType: The ChargeType of the bandwidth
     */
    readonly attrChargeType: ros.IResolvable;
    /**
     * @Attribute PaymentType: The Payment Type of the bandwidth
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute Ratio: The Ratio of the bandwidth
     */
    readonly attrRatio: ros.IResolvable;
    /**
     * @Attribute Type: The type of the bandwidth plan
     */
    readonly attrType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidth: The bandwidth provided by the bandwidth plan.
     */
    bandwidth: number | ros.IResolvable;
    /**
     * @Property type: The type of the bandwidth plan
     */
    type: string | ros.IResolvable;
    /**
     * @Property autoPay: Specifies whether to enable automatic payment.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoUseCoupon: The AutoUseCoupon  of the bandwidth
     */
    autoUseCoupon: string | ros.IResolvable | undefined;
    /**
     * @Property bandwidthType: the bandwidth BandwidthType of the bandwidth
     */
    bandwidthType: string | ros.IResolvable | undefined;
    /**
     * @Property billingType: The BillingType of the bandwidth
     */
    billingType: string | ros.IResolvable | undefined;
    /**
     * @Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
     */
    cbnGeographicRegionIdA: string | ros.IResolvable | undefined;
    /**
     * @Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
     */
    cbnGeographicRegionIdB: string | ros.IResolvable | undefined;
    /**
     * @Property chargeType: The ChargeType of the bandwidth
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property duration:
     */
    duration: string | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle:
     */
    pricingCycle: string | ros.IResolvable | undefined;
    /**
     * @Property ratio: The Ratio of the bandwidth
     */
    ratio: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBandwidthPackageProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosBandwidthPackageAcceleratorAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackageacceleratoraddition
 */
export interface RosBandwidthPackageAcceleratorAdditionProps {
    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
     * plan.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * @Property bandwidthPackageId: The ID of the bandwidth package to associate.
     */
    readonly bandwidthPackageId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::BandwidthPackageAcceleratorAddition`, which is used to bind a bandwidth plan to a global acceleration instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `BandwidthPackageAcceleratorAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackageacceleratoraddition
 */
export declare class RosBandwidthPackageAcceleratorAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BandwidthPackageAcceleratorAddition";
    /**
     * @Attribute AcceleratorId: The ID of the Global Accelerator instance
     */
    readonly attrAcceleratorId: ros.IResolvable;
    /**
     * @Attribute BandwidthPackageId: The ID of the bandwidth package which is associated
     */
    readonly attrBandwidthPackageId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
     * plan.
     */
    acceleratorId: string | ros.IResolvable;
    /**
     * @Property bandwidthPackageId: The ID of the bandwidth package to associate.
     */
    bandwidthPackageId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBandwidthPackageAcceleratorAdditionProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosEndpointGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroup
 */
export interface RosEndpointGroupProps {
    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * @Property endpointConfigurations:
     */
    readonly endpointConfigurations: Array<RosEndpointGroup.EndpointConfigurationsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property endpointGroupRegion: The region ID of the endpoint group.
     */
    readonly endpointGroupRegion: string | ros.IResolvable;
    /**
     * @Property listenerId: The ID of the listener to be associated with the endpoint group.
     */
    readonly listenerId: string | ros.IResolvable;
    /**
     * @Property description: The description of the endpoint group.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property endpointGroupType: The type of the endpoint group. Valid values:
     * default: The endpoint group is a default endpoint group. This is the default value.
     * virtual: The endpoint group is a virtual endpoint group.
     * Note Only HTTP and HTTPS listeners support virtual endpoint groups.
     */
    readonly endpointGroupType?: string | ros.IResolvable;
    /**
     * @Property endpointRequestProtocol: The protocol used by the backend service. Valid values:
     * http: This is the default value.
     * https
     * Note: You can set this parameter only when the listener that is associated with the endpoint group uses HTTP or HTTPS.
     * For an HTTP listener, the backend service protocol must be HTTP.
     */
    readonly endpointRequestProtocol?: string | ros.IResolvable;
    /**
     * @Property healthCheckEnabled: Specifies whether to enable the health check feature.
     */
    readonly healthCheckEnabled?: boolean | ros.IResolvable;
    /**
     * @Property healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
     */
    readonly healthCheckIntervalSeconds?: number | ros.IResolvable;
    /**
     * @Property healthCheckPath: The path set as the destination on the targets for health checks.
     */
    readonly healthCheckPath?: string | ros.IResolvable;
    /**
     * @Property healthCheckPort: The port that is used to connect with the targets for health checks.
     */
    readonly healthCheckPort?: number | ros.IResolvable;
    /**
     * @Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
     * tcp: TCP protocol
     * http: HTTP protocol
     * https: HTTPS protocol
     */
    readonly healthCheckProtocol?: string | ros.IResolvable;
    /**
     * @Property name: The name of the endpoint group.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy.
     * Valid values: 2 to 10. Default value: 3.
     */
    readonly thresholdCount?: number | ros.IResolvable;
    /**
     * @Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
     * multiple endpoint groups.
     */
    readonly trafficPercentage?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::EndpointGroup`, which is used to create an endpoint group.
 * @Note This class does not contain additional functions, so it is recommended to use the `EndpointGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroup
 */
export declare class RosEndpointGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::EndpointGroup";
    /**
     * @Attribute EndpointGroupId: The ID of the endpoint group.
     */
    readonly attrEndpointGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
     */
    acceleratorId: string | ros.IResolvable;
    /**
     * @Property endpointConfigurations:
     */
    endpointConfigurations: Array<RosEndpointGroup.EndpointConfigurationsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property endpointGroupRegion: The region ID of the endpoint group.
     */
    endpointGroupRegion: string | ros.IResolvable;
    /**
     * @Property listenerId: The ID of the listener to be associated with the endpoint group.
     */
    listenerId: string | ros.IResolvable;
    /**
     * @Property description: The description of the endpoint group.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property endpointGroupType: The type of the endpoint group. Valid values:
     * default: The endpoint group is a default endpoint group. This is the default value.
     * virtual: The endpoint group is a virtual endpoint group.
     * Note Only HTTP and HTTPS listeners support virtual endpoint groups.
     */
    endpointGroupType: string | ros.IResolvable | undefined;
    /**
     * @Property endpointRequestProtocol: The protocol used by the backend service. Valid values:
     * http: This is the default value.
     * https
     * Note: You can set this parameter only when the listener that is associated with the endpoint group uses HTTP or HTTPS.
     * For an HTTP listener, the backend service protocol must be HTTP.
     */
    endpointRequestProtocol: string | ros.IResolvable | undefined;
    /**
     * @Property healthCheckEnabled: Specifies whether to enable the health check feature.
     */
    healthCheckEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
     */
    healthCheckIntervalSeconds: number | ros.IResolvable | undefined;
    /**
     * @Property healthCheckPath: The path set as the destination on the targets for health checks.
     */
    healthCheckPath: string | ros.IResolvable | undefined;
    /**
     * @Property healthCheckPort: The port that is used to connect with the targets for health checks.
     */
    healthCheckPort: number | ros.IResolvable | undefined;
    /**
     * @Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
     * tcp: TCP protocol
     * http: HTTP protocol
     * https: HTTPS protocol
     */
    healthCheckProtocol: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the endpoint group.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy.
     * Valid values: 2 to 10. Default value: 3.
     */
    thresholdCount: number | ros.IResolvable | undefined;
    /**
     * @Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
     * multiple endpoint groups.
     */
    trafficPercentage: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEndpointGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosEndpointGroup {
    /**
     * @stability external
     */
    interface EndpointConfigurationsProperty {
        /**
         * @Property enableProxyProtocol: Specifies whether to obtain and preserve the IP addresses of clients that access the endpoint by using the TCP Option Address (TOA) module. Valid values:
     * true: yes
     * false (default): no
         */
        readonly enableProxyProtocol?: boolean | ros.IResolvable;
        /**
         * @Property type: The type of endpoint in the endpoint group. Valid values:
     * Domain: a custom domain name
     * EIP: eip address
     * Ip: a custom IP address
     * PublicIp: a public IP address provided by Alibaba Cloud
     * ECS: an Elastic Compute Service (ECS) instance
     * SLB: a Server Load Balancer (SLB) instance
     * ALB: an Application Load Balancer (ALB) instance
     * OSS: an Object Storage Service (OSS) bucket
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property endpoint: The IP address or domain name of endpoint in the endpoint group.
         */
        readonly endpoint: string | ros.IResolvable;
        /**
         * @Property enableClientIpPreservation: Specifies whether to obtain and preserve the IP addresses of clients that access the endpoint by using the TCP Option Address (TOA) module. Valid values:
     * true: yes
     * false (default): no
         */
        readonly enableClientIpPreservation?: boolean | ros.IResolvable;
        /**
         * @Property weight: The weight of endpoint N in the endpoint group.
         */
        readonly weight: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosIpSets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-ipsets
 */
export interface RosIpSetsProps {
    /**
     * @Property accelerateRegion:
     */
    readonly accelerateRegion: Array<RosIpSets.AccelerateRegionProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property acceleratorId: The ID of the GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::IpSets`, which is used to create acceleration regions.
 * @Note This class does not contain additional functions, so it is recommended to use the `IpSets` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-ipsets
 */
export declare class RosIpSets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::IpSets";
    /**
     * @Attribute AccelerateRegionIds: The ID list of the accelerate region.
     */
    readonly attrAccelerateRegionIds: ros.IResolvable;
    /**
     * @Attribute IpSetIds: The ID list of the ip set.
     */
    readonly attrIpSetIds: ros.IResolvable;
    /**
     * @Attribute IpVersions: The IP version list of the accelerate region.
     */
    readonly attrIpVersions: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accelerateRegion:
     */
    accelerateRegion: Array<RosIpSets.AccelerateRegionProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property acceleratorId: The ID of the GA instance.
     */
    acceleratorId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpSetsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosIpSets {
    /**
     * @stability external
     */
    interface AccelerateRegionProperty {
        /**
         * @Property ipVersion: IP version. Valid values: IPv4, IPv6
         */
        readonly ipVersion?: string | ros.IResolvable;
        /**
         * @Property ispType: Accelerated area public network line type.
         */
        readonly ispType?: string | ros.IResolvable;
        /**
         * @Property bandwidth: The bandwidth allocated to the acceleration region. Unit: Mbit\/s.
     * Note
     * The minimum bandwidth allocated to each accelerated region is 2 Mbit\/s.
     * The total bandwidth for all regions must not exceed the amount included in your basic
     * bandwidth plan.
         */
        readonly bandwidth: number | ros.IResolvable;
        /**
         * @Property accelerateRegionId: The ID of the region where traffic is to be accelerated.
         */
        readonly accelerateRegionId: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosListener`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-listener
 */
export interface RosListenerProps {
    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * @Property portRanges:
     */
    readonly portRanges: Array<RosListener.PortRangesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property protocol: The network transmission protocol of the listener. Valid values:
     * tcp: TCP protocol
     * udp: UDP protocol
     * http: HTTP protocolhttps: HTTPS protocol.
     */
    readonly protocol: string | ros.IResolvable;
    /**
     * @Property certificates:
     */
    readonly certificates?: Array<RosListener.CertificatesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property clientAffinity: Specifies whether to enable client affinity for the listener.
     * If you do not specify the default value in the parameter, client affinity is disabled.
     * When client affinity is disabled, the connections from a specific source (client)
     * IP address are not always routed to the same endpoint.
     * If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
     * a specific source (client) IP address are always routed to the same endpoint.
     */
    readonly clientAffinity?: string | ros.IResolvable;
    /**
     * @Property description: The description of the listener.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property name: The name of the listener.
     * The name must be 2 to 128 characters in length and can contain letters, digits, underscores
     * (_), and hyphens (-). It must start with a letter or Chinese character.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property proxyProtocol: Specifies whether to preserve client IP addresses. Valid values:
     * true: preserves client IP addresses. After this feature is enabled, backend servers can retrieve client IP addresses.
     * false (default): does not preserve client IP addresses.
     */
    readonly proxyProtocol?: boolean | ros.IResolvable;
    /**
     * @Property securityPolicyId: The ID of the security policy. Valid values:
     * tls_cipher_policy_1_0
     * tls_cipher_policy_1_1
     * tls_cipher_policy_1_2
     * tls_cipher_policy_1_2_strict
     * tls_cipher_policy_1_2_strict_with_1_3
     * Note Only HTTPS listeners support this parameter.
     */
    readonly securityPolicyId?: string | ros.IResolvable;
    /**
     * @Property xForwardedForConfig: The configuration of the XForward field.
     */
    readonly xForwardedForConfig?: RosListener.XForwardedForConfigProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::Listener`, which is used to create a listener for a Global Accelerator (GA) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Listener` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-listener
 */
export declare class RosListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::Listener";
    /**
     * @Attribute ListenerId: The ID of the listener.
     */
    readonly attrListenerId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
     */
    acceleratorId: string | ros.IResolvable;
    /**
     * @Property portRanges:
     */
    portRanges: Array<RosListener.PortRangesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property protocol: The network transmission protocol of the listener. Valid values:
     * tcp: TCP protocol
     * udp: UDP protocol
     * http: HTTP protocolhttps: HTTPS protocol.
     */
    protocol: string | ros.IResolvable;
    /**
     * @Property certificates:
     */
    certificates: Array<RosListener.CertificatesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property clientAffinity: Specifies whether to enable client affinity for the listener.
     * If you do not specify the default value in the parameter, client affinity is disabled.
     * When client affinity is disabled, the connections from a specific source (client)
     * IP address are not always routed to the same endpoint.
     * If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
     * a specific source (client) IP address are always routed to the same endpoint.
     */
    clientAffinity: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the listener.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the listener.
     * The name must be 2 to 128 characters in length and can contain letters, digits, underscores
     * (_), and hyphens (-). It must start with a letter or Chinese character.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property proxyProtocol: Specifies whether to preserve client IP addresses. Valid values:
     * true: preserves client IP addresses. After this feature is enabled, backend servers can retrieve client IP addresses.
     * false (default): does not preserve client IP addresses.
     */
    proxyProtocol: boolean | ros.IResolvable | undefined;
    /**
     * @Property securityPolicyId: The ID of the security policy. Valid values:
     * tls_cipher_policy_1_0
     * tls_cipher_policy_1_1
     * tls_cipher_policy_1_2
     * tls_cipher_policy_1_2_strict
     * tls_cipher_policy_1_2_strict_with_1_3
     * Note Only HTTPS listeners support this parameter.
     */
    securityPolicyId: string | ros.IResolvable | undefined;
    /**
     * @Property xForwardedForConfig: The configuration of the XForward field.
     */
    xForwardedForConfig: RosListener.XForwardedForConfigProperty | ros.IResolvable | undefined;
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
    interface CertificatesProperty {
        /**
         * @Property id: The ID of the SSL certificate.
         */
        readonly id: string | ros.IResolvable;
    }
}
export declare namespace RosListener {
    /**
     * @stability external
     */
    interface PortRangesProperty {
        /**
         * @Property fromPort: The first listening port of the port range specified for receiving and forwarding
     * requests to endpoints.
         */
        readonly fromPort: number | ros.IResolvable;
        /**
         * @Property toPort: The last listening port of the port range specified for receiving and forwarding requests
     * to endpoints.
         */
        readonly toPort: number | ros.IResolvable;
    }
}
export declare namespace RosListener {
    /**
     * @stability external
     */
    interface XForwardedForConfigProperty {
        /**
         * @Property xForwardedForGaApEnabled: Specifies whether to use the GA-AP header to retrieve the information about the acceleration area. Valid values:
     * true: yes
     * false (default): no
     * Note Only HTTP and HTTPS listeners support this parameter.
         */
        readonly xForwardedForGaApEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForProtoEnabled: Specifies whether to use the GA-X-Forward-Proto header to retrieve the listener protocol of the GA instance. Valid values:
     * true: yes
     * false (default): no
     * Note Only HTTP and HTTPS listeners support this parameter.
         */
        readonly xForwardedForProtoEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xRealIpEnabled: Specifies whether to use the X-Real-IP header to retrieve client IP addresses. Valid values:
     * true: yes
     * false (default): no
     * Note Only HTTP and HTTPS listeners support this parameter.
         */
        readonly xRealIpEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForPortEnabled: Specifies whether to use the GA-X-Forward-Port header to retrieve the listener ports of the GA instance. Valid values:
     * true: yes
     * false (default): no
     * Note Only HTTP and HTTPS listeners support this parameter.
         */
        readonly xForwardedForPortEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForGaIdEnabled: Specifies whether to use the GA-ID header to retrieve the ID of the GA instance. Valid values:
     * true: yes
     * false (default): no
     * Note Only HTTP and HTTPS listeners support this parameter.
         */
        readonly xForwardedForGaIdEnabled?: boolean | ros.IResolvable;
    }
}
