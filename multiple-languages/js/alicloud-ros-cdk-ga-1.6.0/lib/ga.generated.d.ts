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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::Acl`, which is used to create an access control list (ACL).
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
 * Properties for defining a `RosAclsListenerAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-aclslistenerassociation
 */
export interface RosAclsListenerAssociationProps {
    /**
     * @Property aclIds: The ID of the ACL. You can associate up to two ACL IDs.
     */
    readonly aclIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property aclType: The type of ACL. Valid values:white: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After you configure a whitelist for a listener, only requests from the IP addresses that are added to the whitelist are forwarded by the listener. If the whitelist is enabled but no IP addresses are added to it, the listener does not forward requests.
     * black: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to it, the listener forwards all requests.
     */
    readonly aclType: string | ros.IResolvable;
    /**
     * @Property listenerId: The ID of the listener.
     */
    readonly listenerId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::AclsListenerAssociation`, which is used to associate an access control list (ACL) with a listener.
 * @Note This class does not contain additional functions, so it is recommended to use the `AclsListenerAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-aclslistenerassociation
 */
export declare class RosAclsListenerAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::AclsListenerAssociation";
    /**
     * @Attribute AclIds: The IDs of the ACL.
     */
    readonly attrAclIds: ros.IResolvable;
    /**
     * @Attribute ListenerId: The ID of the listener.
     */
    readonly attrListenerId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aclIds: The ID of the ACL. You can associate up to two ACL IDs.
     */
    aclIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property aclType: The type of ACL. Valid values:white: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After you configure a whitelist for a listener, only requests from the IP addresses that are added to the whitelist are forwarded by the listener. If the whitelist is enabled but no IP addresses are added to it, the listener does not forward requests.
     * black: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to it, the listener forwards all requests.
     */
    aclType: string | ros.IResolvable;
    /**
     * @Property listenerId: The ID of the listener.
     */
    listenerId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAclsListenerAssociationProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosApplicationMonitor`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-applicationmonitor
 */
export interface RosApplicationMonitorProps {
    /**
     * @Property acceleratorId: The ID of the GA instance on which you want to perform the origin probing task.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * @Property address: The URL or IP address that you want to probe.
     */
    readonly address: string | ros.IResolvable;
    /**
     * @Property listenerId: The ID of the listener on which you want to perform the origin probing task.
     */
    readonly listenerId: string | ros.IResolvable;
    /**
     * @Property taskName: The name of the origin probing task. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly taskName: string | ros.IResolvable;
    /**
     * @Property detectEnable: Specifies whether to enable the automatic diagnostics feature.
     */
    readonly detectEnable?: boolean | ros.IResolvable;
    /**
     * @Property detectThreshold: The threshold that is used to trigger the automatic diagnostics feature. Unit: percentage.Valid values: 0 to 100.The default value is 0, which indicates that the automatic diagnostics feature is not triggered.
     */
    readonly detectThreshold?: number | ros.IResolvable;
    /**
     * @Property detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered. Valid values: 1 to 20. Default value: 1.
     */
    readonly detectTimes?: number | ros.IResolvable;
    /**
     * @Property optionsJson: The extended options of the listener protocol that is used by the origin probing task. The options vary based on the listener protocol.
     */
    readonly optionsJson?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property silenceTime: The silence period of the automatic diagnostics feature. This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of DetectTimes, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.Unit: seconds. Valid values: 300 to 86400. Default value: 300.
     */
    readonly silenceTime?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::ApplicationMonitor`, which is used to create an origin probing task.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApplicationMonitor` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-applicationmonitor
 */
export declare class RosApplicationMonitor extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::ApplicationMonitor";
    /**
     * @Attribute TaskId: The ID of the origin probing task.
     */
    readonly attrTaskId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property acceleratorId: The ID of the GA instance on which you want to perform the origin probing task.
     */
    acceleratorId: string | ros.IResolvable;
    /**
     * @Property address: The URL or IP address that you want to probe.
     */
    address: string | ros.IResolvable;
    /**
     * @Property listenerId: The ID of the listener on which you want to perform the origin probing task.
     */
    listenerId: string | ros.IResolvable;
    /**
     * @Property taskName: The name of the origin probing task. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    taskName: string | ros.IResolvable;
    /**
     * @Property detectEnable: Specifies whether to enable the automatic diagnostics feature.
     */
    detectEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property detectThreshold: The threshold that is used to trigger the automatic diagnostics feature. Unit: percentage.Valid values: 0 to 100.The default value is 0, which indicates that the automatic diagnostics feature is not triggered.
     */
    detectThreshold: number | ros.IResolvable | undefined;
    /**
     * @Property detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered. Valid values: 1 to 20. Default value: 1.
     */
    detectTimes: number | ros.IResolvable | undefined;
    /**
     * @Property optionsJson: The extended options of the listener protocol that is used by the origin probing task. The options vary based on the listener protocol.
     */
    optionsJson: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property silenceTime: The silence period of the automatic diagnostics feature. This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of DetectTimes, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.Unit: seconds. Valid values: 300 to 86400. Default value: 300.
     */
    silenceTime: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplicationMonitorProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosBasicAccelerateIp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip
 */
export interface RosBasicAccelerateIpProps {
    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * @Property ipSetId: The ID of the acceleration region.
     */
    readonly ipSetId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::BasicAccelerateIp`, which is used to create an accelerated IP address for a basic Global Accelerator (GA) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `BasicAccelerateIp` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip
 */
export declare class RosBasicAccelerateIp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BasicAccelerateIp";
    /**
     * @Attribute AccelerateIpId: The ID of the accelerated IP address.
     */
    readonly attrAccelerateIpId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    acceleratorId: string | ros.IResolvable;
    /**
     * @Property ipSetId: The ID of the acceleration region.
     */
    ipSetId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBasicAccelerateIpProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosBasicAccelerator`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerator
 */
export interface RosBasicAcceleratorProps {
    /**
     * @Property autoPay: Specifies whether to enable automatic payment. Valid values:
     * false: disables automatic payment. If you select this option, you must go to the Order Center to complete the payment after an order is generated. This is the default value.
     * true: enables automatic payment. Payments are automatically completed.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal for the basic GA instance. Valid values:
     * true: enables auto-renewal for the basic GA instance.
     * false: disables auto-renewal for the basic GA instance. This is the default value.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property autoRenewDuration: The auto-renewal duration. Unit: months.Valid values: 1 to 12. Default value: 1.
     */
    readonly autoRenewDuration?: number | ros.IResolvable;
    /**
     * @Property autoUseCoupon: Specifies whether to automatically apply coupons to your bills. Valid values:
     * true: automatically applies coupons to your bills.
     * false: does not automatically apply coupons to your bills. This is the default value.
     */
    readonly autoUseCoupon?: string | ros.IResolvable;
    /**
     * @Property bandwidthBillingType: The bandwidth billing method. Valid values:
     * BandwidthPackage: billed based on bandwidth plans.
     * CDT: billed based on data transfer. The bills are managed by using Cloud Data Transfer (CDT).
     * CDT95: billed based on the 95th percentile bandwidth. The bills are managed by using Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information.
     */
    readonly bandwidthBillingType?: string | ros.IResolvable;
    /**
     * @Property chargeType: The billing method. Valid values:
     * PREPAY (default)POSTPAY
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property duration: The subscription duration of the GA instance.
     * If you set PricingCycle to Month, the valid values for Duration are 1 to 9.
     * If you set PricingCycle to Year, the valid values for Duration are 1 to 3.
     */
    readonly duration?: number | ros.IResolvable;
    /**
     * @Property pricingCycle: The billing cycle. Valid values:
     * Month
     * Year
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * @Property promotionOptionNo: The code of the coupon.
     */
    readonly promotionOptionNo?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the basic GA instance belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: The tags of the basic GA instance.
     */
    readonly tags?: RosBasicAccelerator.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::BasicAccelerator`, which is used to create a basic Global Accelerator (GA) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `BasicAccelerator` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerator
 */
export declare class RosBasicAccelerator extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BasicAccelerator";
    /**
     * @Attribute AcceleratorId: The ID of the accelerated IP address.
     */
    readonly attrAcceleratorId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property autoPay: Specifies whether to enable automatic payment. Valid values:
     * false: disables automatic payment. If you select this option, you must go to the Order Center to complete the payment after an order is generated. This is the default value.
     * true: enables automatic payment. Payments are automatically completed.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal for the basic GA instance. Valid values:
     * true: enables auto-renewal for the basic GA instance.
     * false: disables auto-renewal for the basic GA instance. This is the default value.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenewDuration: The auto-renewal duration. Unit: months.Valid values: 1 to 12. Default value: 1.
     */
    autoRenewDuration: number | ros.IResolvable | undefined;
    /**
     * @Property autoUseCoupon: Specifies whether to automatically apply coupons to your bills. Valid values:
     * true: automatically applies coupons to your bills.
     * false: does not automatically apply coupons to your bills. This is the default value.
     */
    autoUseCoupon: string | ros.IResolvable | undefined;
    /**
     * @Property bandwidthBillingType: The bandwidth billing method. Valid values:
     * BandwidthPackage: billed based on bandwidth plans.
     * CDT: billed based on data transfer. The bills are managed by using Cloud Data Transfer (CDT).
     * CDT95: billed based on the 95th percentile bandwidth. The bills are managed by using Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information.
     */
    bandwidthBillingType: string | ros.IResolvable | undefined;
    /**
     * @Property chargeType: The billing method. Valid values:
     * PREPAY (default)POSTPAY
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property duration: The subscription duration of the GA instance.
     * If you set PricingCycle to Month, the valid values for Duration are 1 to 9.
     * If you set PricingCycle to Year, the valid values for Duration are 1 to 3.
     */
    duration: number | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: The billing cycle. Valid values:
     * Month
     * Year
     */
    pricingCycle: string | ros.IResolvable | undefined;
    /**
     * @Property promotionOptionNo: The code of the coupon.
     */
    promotionOptionNo: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the basic GA instance belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: The tags of the basic GA instance.
     */
    tags: RosBasicAccelerator.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBasicAcceleratorProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosBasicAccelerator {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: The tag value. The tag value cannot be an empty string.The tag value can be up to 128 characters in length and cannot contain http:\/\/ or https:\/\/. It cannot start with acs: or aliyun.You can specify up to 20 tag values.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The tag key. The tag key cannot be an empty string.The tag key can be up to 64 characters in length and cannot contain http:\/\/ or https:\/\/. The tag key cannot start with aliyun or acs:.You can specify up to 20 tag keys.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosBasicAcceleratorIpEndpointRelation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
 */
export interface RosBasicAcceleratorIpEndpointRelationProps {
    /**
     * @Property accelerateIpId: The ID of the accelerated IP address.
     */
    readonly accelerateIpId: string | ros.IResolvable;
    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * @Property endpointId: The ID of the endpoint.
     */
    readonly endpointId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::BasicAcceleratorIpEndpointRelation`, which is used to create a mapping between an accelerated IP address and an endpoint for a basic Global Accelerator (GA) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `BasicAcceleratorIpEndpointRelation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
 */
export declare class RosBasicAcceleratorIpEndpointRelation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BasicAcceleratorIpEndpointRelation";
    /**
     * @Attribute AccelerateIpId: The ID of the accelerated IP address.
     */
    readonly attrAccelerateIpId: ros.IResolvable;
    /**
     * @Attribute AcceleratorId: The ID of the basic GA instance.
     */
    readonly attrAcceleratorId: ros.IResolvable;
    /**
     * @Attribute EndpointId: The ID of the endpoint.
     */
    readonly attrEndpointId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accelerateIpId: The ID of the accelerated IP address.
     */
    accelerateIpId: string | ros.IResolvable;
    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    acceleratorId: string | ros.IResolvable;
    /**
     * @Property endpointId: The ID of the endpoint.
     */
    endpointId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBasicAcceleratorIpEndpointRelationProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosBasicEndpoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpoint
 */
export interface RosBasicEndpointProps {
    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * @Property endpointAddress: The address of the endpoint.
     */
    readonly endpointAddress: string | ros.IResolvable;
    /**
     * @Property endpointGroupId: The ID of the endpoint group.
     */
    readonly endpointGroupId: string | ros.IResolvable;
    /**
     * @Property endpointSubAddress: The secondary address of the endpoint. This parameter is required if the endpoint type is ECS, ENI, or NLB.
     * If the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
     * If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
     * This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.
     */
    readonly endpointSubAddress?: string | ros.IResolvable;
    /**
     * @Property endpointSubAddressType: The type of the secondary address of the endpoint. Valid values:
     * primary: a primary private IP address.
     * secondary: a secondary private IP address.
     * This parameter is required if the endpoint type is ECS, ENI, or NLB. If the endpoint type is NLB, only primary is supported.
     */
    readonly endpointSubAddressType?: string | ros.IResolvable;
    /**
     * @Property endpointType: The type of the endpoint. Valid values:
     * ENI: elastic network interface (ENI)
     * SLB: Classic Load Balancer (CLB)
     * NLB: Network Load Balancer (NLB)
     * ECS: Elastic Compute Service (ECS)
     */
    readonly endpointType?: string | ros.IResolvable;
    /**
     * @Property endpointZoneId: The zone ID of the endpoint. This parameter is required only if the endpoint type is NLB.
     */
    readonly endpointZoneId?: string | ros.IResolvable;
    /**
     * @Property name: The name of the endpoint that is associated with the basic GA instance. The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::BasicEndpoint`, which is used to create an endpoint for a basic Global Accelerator (GA) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `BasicEndpoint` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpoint
 */
export declare class RosBasicEndpoint extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BasicEndpoint";
    /**
     * @Attribute EndpointId: The ID of the endpoint.
     */
    readonly attrEndpointId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    acceleratorId: string | ros.IResolvable;
    /**
     * @Property endpointAddress: The address of the endpoint.
     */
    endpointAddress: string | ros.IResolvable;
    /**
     * @Property endpointGroupId: The ID of the endpoint group.
     */
    endpointGroupId: string | ros.IResolvable;
    /**
     * @Property endpointSubAddress: The secondary address of the endpoint. This parameter is required if the endpoint type is ECS, ENI, or NLB.
     * If the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
     * If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
     * This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.
     */
    endpointSubAddress: string | ros.IResolvable | undefined;
    /**
     * @Property endpointSubAddressType: The type of the secondary address of the endpoint. Valid values:
     * primary: a primary private IP address.
     * secondary: a secondary private IP address.
     * This parameter is required if the endpoint type is ECS, ENI, or NLB. If the endpoint type is NLB, only primary is supported.
     */
    endpointSubAddressType: string | ros.IResolvable | undefined;
    /**
     * @Property endpointType: The type of the endpoint. Valid values:
     * ENI: elastic network interface (ENI)
     * SLB: Classic Load Balancer (CLB)
     * NLB: Network Load Balancer (NLB)
     * ECS: Elastic Compute Service (ECS)
     */
    endpointType: string | ros.IResolvable | undefined;
    /**
     * @Property endpointZoneId: The zone ID of the endpoint. This parameter is required only if the endpoint type is NLB.
     */
    endpointZoneId: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the endpoint that is associated with the basic GA instance. The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBasicEndpointProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosBasicEndpointGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpointgroup
 */
export interface RosBasicEndpointGroupProps {
    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * @Property endpointGroupRegion: The ID of the region to which the endpoint group belongs.
     */
    readonly endpointGroupRegion: string | ros.IResolvable;
    /**
     * @Property description: The description of the endpoint group. The description can be up to 200 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property endpointAddress: The endpoint address.
     */
    readonly endpointAddress?: string | ros.IResolvable;
    /**
     * @Property endpointSubAddress: The secondary address of the endpoint. You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
     * When the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
     * If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
     */
    readonly endpointSubAddress?: string | ros.IResolvable;
    /**
     * @Property endpointType: The type of the endpoint. Valid values:
     * ENI
     * SLB
     * ECS
     */
    readonly endpointType?: string | ros.IResolvable;
    /**
     * @Property name: The name of the endpoint group. The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::BasicEndpointGroup`, which is used to create an endpoint group for a basic Global Accelerator (GA) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `BasicEndpointGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpointgroup
 */
export declare class RosBasicEndpointGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BasicEndpointGroup";
    /**
     * @Attribute EndpointGroupId: The endpoint group ID.
     */
    readonly attrEndpointGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    acceleratorId: string | ros.IResolvable;
    /**
     * @Property endpointGroupRegion: The ID of the region to which the endpoint group belongs.
     */
    endpointGroupRegion: string | ros.IResolvable;
    /**
     * @Property description: The description of the endpoint group. The description can be up to 200 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property endpointAddress: The endpoint address.
     */
    endpointAddress: string | ros.IResolvable | undefined;
    /**
     * @Property endpointSubAddress: The secondary address of the endpoint. You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
     * When the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
     * If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
     */
    endpointSubAddress: string | ros.IResolvable | undefined;
    /**
     * @Property endpointType: The type of the endpoint. Valid values:
     * ENI
     * SLB
     * ECS
     */
    endpointType: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the endpoint group. The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBasicEndpointGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosBasicIpSet`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicipset
 */
export interface RosBasicIpSetProps {
    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * @Property accelerateRegionId: The ID of the acceleration region.
     */
    readonly accelerateRegionId?: string | ros.IResolvable;
    /**
     * @Property bandwidth: The bandwidth that you want to allocate to the acceleration region. Unit: Mbit\/s.You must allocate at least 2 Mbit\/s of bandwidth to the acceleration region.
     */
    readonly bandwidth?: number | ros.IResolvable;
    /**
     * @Property ispType: The line type of the elastic IP address (EIP) in the acceleration region. Valid values:
     * BGP (default): BGP (Multi-ISP) lines.
     * BGP_PRO: BGP (Multi-ISP) Pro lines.
     * Valid values if you are allowed to use single-ISP bandwidth:
     * ChinaTelecom
     * ChinaUnicom
     * ChinaMobile
     * ChinaTelecom_L2
     * ChinaUnicom_L2
     * ChinaMobile_L2
     */
    readonly ispType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::BasicIpSet`, which is used to create an acceleration region for a basic Global Accelerator (GA) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `BasicIpSet` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicipset
 */
export declare class RosBasicIpSet extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::BasicIpSet";
    /**
     * @Attribute IpSetId: The ID of the acceleration region.
     */
    readonly attrIpSetId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    acceleratorId: string | ros.IResolvable;
    /**
     * @Property accelerateRegionId: The ID of the acceleration region.
     */
    accelerateRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property bandwidth: The bandwidth that you want to allocate to the acceleration region. Unit: Mbit\/s.You must allocate at least 2 Mbit\/s of bandwidth to the acceleration region.
     */
    bandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property ispType: The line type of the elastic IP address (EIP) in the acceleration region. Valid values:
     * BGP (default): BGP (Multi-ISP) lines.
     * BGP_PRO: BGP (Multi-ISP) Pro lines.
     * Valid values if you are allowed to use single-ISP bandwidth:
     * ChinaTelecom
     * ChinaUnicom
     * ChinaMobile
     * ChinaTelecom_L2
     * ChinaUnicom_L2
     * ChinaMobile_L2
     */
    ispType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBasicIpSetProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-domain
 */
export interface RosDomainProps {
    /**
     * @Property acceleratorIds: The IDs of the GA instance to be disassociated. You can specify up to 50 IDs.
     */
    readonly acceleratorIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property domain: The accelerated domain name to be disassociated.
     */
    readonly domain: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::Domain`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-domain
 */
export declare class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::Domain";
    /**
     * @Attribute AcceleratorIds: The IDs of GA instances.
     */
    readonly attrAcceleratorIds: ros.IResolvable;
    /**
     * @Attribute Domain: The accelerated domain name.
     */
    readonly attrDomain: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property acceleratorIds: The IDs of the GA instance to be disassociated. You can specify up to 50 IDs.
     */
    acceleratorIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property domain: The accelerated domain name to be disassociated.
     */
    domain: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosEndpointGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroups
 */
export interface RosEndpointGroupsProps {
    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * @Property endpointGroupConfigurations: The configurations of the endpoint groups.
     */
    readonly endpointGroupConfigurations: Array<RosEndpointGroups.EndpointGroupConfigurationsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property listenerId: The ID of the region to which the endpoint group belongs.
     */
    readonly listenerId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::EndpointGroups`, which is used to create multiple endpoint groups at a time.
 * @Note This class does not contain additional functions, so it is recommended to use the `EndpointGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroups
 */
export declare class RosEndpointGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::EndpointGroups";
    /**
     * @Attribute EndpointGroupIds: The IDs of the endpoint groups.
     */
    readonly attrEndpointGroupIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property acceleratorId: The ID of the basic GA instance.
     */
    acceleratorId: string | ros.IResolvable;
    /**
     * @Property endpointGroupConfigurations: The configurations of the endpoint groups.
     */
    endpointGroupConfigurations: Array<RosEndpointGroups.EndpointGroupConfigurationsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property listenerId: The ID of the region to which the endpoint group belongs.
     */
    listenerId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEndpointGroupsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosEndpointGroups {
    /**
     * @stability external
     */
    interface EndpointConfigurationsProperty {
        /**
         * @Property type: The type of the endpoint. Valid values:
     * Domain: a custom domain name
     * Ip: a custom IP address
     * PublicIp: a public IP address provided by Alibaba Cloud
     * ECS: an Elastic Compute Service (ECS) instance
     * SLB: a Server Load Balancer (SLB) instance
     * ALB: an Application Load Balancer (ALB) instance
     * OSS: an Object Storage Service (OSS) bucket
     * ENI: an elastic network interface (ENI)
     * NLB: a Network Load Balancer (NLB) instance
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property endpoint: The IP address, domain name, or instance ID based on the value of Type.
         */
        readonly endpoint: string | ros.IResolvable;
        /**
         * @Property subAddress: The private IP address of the ENI.
         */
        readonly subAddress?: string | ros.IResolvable;
        /**
         * @Property weight: The weight of the endpoint. Valid values: 0 to 255.
         */
        readonly weight: number | ros.IResolvable;
    }
}
export declare namespace RosEndpointGroups {
    /**
     * @stability external
     */
    interface EndpointGroupConfigurationsProperty {
        /**
         * @Property healthCheckIntervalSeconds: The interval at which health checks are performed.
         */
        readonly healthCheckIntervalSeconds?: number | ros.IResolvable;
        /**
         * @Property trafficPercentage: The traffic distribution ratio. If a listener is associated with multiple endpoint groups, you can specify this parameter to distribute traffic to the endpoint groups based on ratios. Valid values: 1 to 100. Default value: 100. You can specify traffic distribution ratios for up to 10 endpoint groups.
         */
        readonly trafficPercentage?: number | ros.IResolvable;
        /**
         * @Property endpointGroupName: The name of the endpoint group. The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter. You can specify the names of up to 10 endpoint groups.
         */
        readonly endpointGroupName?: string | ros.IResolvable;
        /**
         * @Property healthCheckPath: The path to which health check requests are sent.
         */
        readonly healthCheckPath?: string | ros.IResolvable;
        /**
         * @Property thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint group is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint group is considered healthy.
         */
        readonly thresholdCount?: number | ros.IResolvable;
        /**
         * @Property healthCheckEnabled: Specifies whether to enable the health check feature.
         */
        readonly healthCheckEnabled?: boolean | ros.IResolvable;
        /**
         * @Property endpointRequestProtocol: The protocol that is used by the backend service. Valid values:
     * HTTP (default)
     * HTTPS
     * You can specify up to 10 backend service protocols.
         */
        readonly endpointRequestProtocol?: string | ros.IResolvable;
        /**
         * @Property portOverrides: The port mapping.
         */
        readonly portOverrides?: Array<RosEndpointGroups.PortOverridesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property endpointGroupRegion: The ID of the region where you want to create the endpoint group. You can enter the region IDs of up to 10 endpoint groups.
         */
        readonly endpointGroupRegion: string | ros.IResolvable;
        /**
         * @Property endpointGroupDescription: The description of the endpoint group. The description can be up to 256 characters in length and cannot contain http:\/\/ or https:\/\/. You can enter the descriptions of up to 10 endpoint groups.
         */
        readonly endpointGroupDescription?: string | ros.IResolvable;
        /**
         * @Property enableClientIpPreservationToa: Specifies whether to preserve the IP addresses of clients that access the endpoint by using the TCP Option Address (TOA) module.
         */
        readonly enableClientIpPreservationToa?: boolean | ros.IResolvable;
        /**
         * @Property healthCheckProtocol: The protocol over which health check requests are sent. Valid values:
     * tcp
     * http
     * https
     * You can specify up to 10 health check protocols.
         */
        readonly healthCheckProtocol?: string | ros.IResolvable;
        /**
         * @Property healthCheckPort: The port that is used for health checks. Valid values: 1 to 65535.
         */
        readonly healthCheckPort?: number | ros.IResolvable;
        /**
         * @Property endpointConfigurations: The configurations of the endpoints.
         */
        readonly endpointConfigurations?: Array<RosEndpointGroups.EndpointConfigurationsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tags: The tags.
         */
        readonly tags?: RosEndpointGroups.TagsProperty[];
        /**
         * @Property endpointGroupType: The type of the endpoint group. Valid values:
     * default (default)
     * virtual
     * You can specify the types of up to 10 endpoint groups.
         */
        readonly endpointGroupType?: string | ros.IResolvable;
        /**
         * @Property enableClientIpPreservationProxyProtocol: Specifies whether to use the proxy protocol to preserve client IP addresses.
         */
        readonly enableClientIpPreservationProxyProtocol?: boolean | ros.IResolvable;
    }
}
export declare namespace RosEndpointGroups {
    /**
     * @stability external
     */
    interface PortOverridesProperty {
        /**
         * @Property listenerPort: The listener port that is mapped to the endpoint port.
         */
        readonly listenerPort: number | ros.IResolvable;
        /**
         * @Property endpointPort: The endpoint port that is mapped to the listener port.
         */
        readonly endpointPort: number | ros.IResolvable;
    }
}
export declare namespace RosEndpointGroups {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: The value of the tag.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of the tag.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosForwardingRules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-forwardingrules
 */
export interface RosForwardingRulesProps {
    /**
     * @Property acceleratorId: The ID of the GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * @Property forwardingRules: Details about the forwarding rules.
     */
    readonly forwardingRules: Array<RosForwardingRules.ForwardingRulesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property listenerId: The ID of the listener.
     */
    readonly listenerId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GA::ForwardingRules`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ForwardingRules` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-forwardingrules
 */
export declare class RosForwardingRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GA::ForwardingRules";
    /**
     * @Attribute ForwardingRuleIds: The IDs of the endpoint groups.
     */
    readonly attrForwardingRuleIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property acceleratorId: The ID of the GA instance.
     */
    acceleratorId: string | ros.IResolvable;
    /**
     * @Property forwardingRules: Details about the forwarding rules.
     */
    forwardingRules: Array<RosForwardingRules.ForwardingRulesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property listenerId: The ID of the listener.
     */
    listenerId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosForwardingRulesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosForwardingRules {
    /**
     * @stability external
     */
    interface ForwardingRulesProperty {
        /**
         * @Property ruleActions: The forwarding action.
         */
        readonly ruleActions: Array<RosForwardingRules.RuleActionsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property priority: The priority of the forwarding rule. Valid values: 1 to 10000. A lower value indicates a higher priority.
         */
        readonly priority?: number | ros.IResolvable;
        /**
         * @Property forwardingRuleName: The name of the forwarding rule. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
         */
        readonly forwardingRuleName?: string | ros.IResolvable;
        /**
         * @Property ruleConditions: The forwarding conditions.
         */
        readonly ruleConditions: Array<RosForwardingRules.RuleConditionsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ruleDirection: The direction in which the rule takes effect. You do not need to set this parameter. By default, this parameter is set to request, which indicates that the rule takes effect on requests.
         */
        readonly ruleDirection?: string | ros.IResolvable;
    }
}
export declare namespace RosForwardingRules {
    /**
     * @stability external
     */
    interface RuleActionsProperty {
        /**
         * @Property ruleActionType: The type of the forwarding action. Valid values:
     * * ForwardGroup: forwards a request.
     * * Redirect: redirects a request.
     * * FixResponse: returns a fixed response.
     * * Rewrite: rewrites a request.
     * * AddHeader: adds a header to a request.
     * * RemoveHeaderConfig: deletes the header from a request.
     *
         */
        readonly ruleActionType: string | ros.IResolvable;
        /**
         * @Property order: The forwarding priority.
         */
        readonly order: number | ros.IResolvable;
        /**
         * @Property ruleActionValue: The value of the forwarding action type. You must specify different JSON strings based on the RuleActionType parameter. A forwarding rule can contain only one forwarding action whose type is ForwardGroup, Redirect, or FixResponse. You must specify a forwarding action whose type is Rewrite, AddHeader, or RemoveHeader before a forwarding action whose type is ForwardGroup.
     * * If RuleActionType is set to ForwardGroup, this parameter specifies the information of a virtual endpoint group. You can forward requests to only one virtual endpoint group. Example: {"type":"endpointgroup", "value":"epg-bp1enpdcrqhl78g6r****"}.
     *   * type: set this parameter to endpointgroup.
     *   * value: set this parameter to the ID of a virtual endpoint group.
     * * If RuleActionType is set to Redirect, this parameter specifies redirecting configurations. You cannot leave all of the following parameters empty or configure all of these parameters to use the default values for a forwarding action whose type is Redirect: protocol, domain, port, path, and query. Example: {"protocol":"HTTP", "domain":"www.example.com", "port":"80", "path":"\/a","query":"value1", "code":"301" }.
     *   * protocol: the protocol of requests after the requests are redirected. Valid values: ${protocol} (default), HTTP, and HTTPS.
     *   * domain: the domain name to which requests are redirected. Default value: ${host}. You can also enter a domain name. The domain name must be 3 to 128 characters in length, and can contain only letters, digits, and the following special characters: . - ? = ~ _ - + \/ ^ * ! $ & | ( ) [ ].
     *   * port: the port to which requests are redirected. Default value: ${port}. You can enter a port number that ranges from 1 to 63335.
     *   * path: the path to which requests are redirected. Default value: ${path}. The path must be 1 to 128 characters in length. To use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? ~ ^ * $ : ( ) [ ] + |. The path must start with a tilde (~). If you do not want to use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? :. The path must start with a forward slash (\/).
     *   * query: the query string of the requests to be redirected. Default value: ${query}. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The query string cannot contain uppercase letters, space characters, or the following special characters: [ ] { } < > # | &.
     *   * code: the redirecting code. Valid values: 301, 302, 303, 307, and 308.
     * * If RuleActionType is set to FixResponse, this parameter specifies a fixed response. Example: {"code":"200", "type":"text\/plain", "content":"dssacav" }.
     *   * code: the HTTP status code to return. The response status code must be one of the following numeric strings: 2xx, 4xx, and 5xx. The letter x indicates a number from 0 to 9.
     *   * type: the type of the response content. Valid values: text\/plain, text\/css, text\/html, application\/javascript, and application\/json.
     *   * content: the response content. The response content cannot exceed 1,000 characters in length and does not support Chinese characters.
     * * If RuleActionType is set to AddHeader, this parameter specifies an HTTP header to be added. If a forwarding rule contains a forwarding action whose type is AddHeader, you must specify another forwarding action whose type is ForwardGroup. Example: [{"name":"header1","type":"userdefined", "value":"value"}].
     *   * name: the name of the HTTP header. The name must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). The name of the HTTP header specified by AddHeader must be unique and cannot be the same as the name of the HTTP header specified by RemoveHeader.
     *   * type: the content type of the HTTP header. Valid values: user-defined, ref, and system-defined.
     *   * value: the content of the HTTP header. You cannot leave this parameter empty. If you set type to user-defined, the content must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The content can contain letters, digits, hyphens (-), and underscores (_). The content cannot start or end with a space character. If you set type to ref, the content must be 1 to 128 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). The content cannot start or end with a space character. If you set type to system-defined, only ClientSrcIp is supported.
     * * If RuleActionType is set to RemoveHeader, this parameter specifies an HTTP header to be removed. If a forwarding rule contains a forwarding action whose type is RemoveHeader, you must specify another forwarding action whose type is ForwardGroup. The header must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). Example: ["header1"].
     * * If RuleActionType is set to Rewrite, this parameter specifies the rewriting configuration. If a forwarding rule contains a forwarding action whose type is Rewrite, you must specify another forwarding action whose type is ForwardGroup. Example: {"domain":"value1", "path":"value2", "query":"value3"}.
     *   * domain: the domain name to which requests are redirected. Default value: ${host}. You can also enter a domain name. The domain name must be 3 to 128 characters in length, and can contain only lowercase letters, digits, and the following special characters: . - ? = ~ _ - + \/ ^ * ! $ & | ( ) [ ].
     *   * path: the path to which requests are redirected. Default value: ${path}. The path must be 1 to 128 characters in length. To use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? ~ ^ * $ : ( ) [ ] + |. The path must start with a tilde (~). If you do not want to use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? :. The path must start with a forward slash (\/).
     *   * query: the query string of the requests to be redirected. Default value: ${query}. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The query string cannot contain uppercase letters, space characters, or the following special characters: [ ] { } < > # | &.
         */
        readonly ruleActionValue?: string | ros.IResolvable;
    }
}
export declare namespace RosForwardingRules {
    /**
     * @stability external
     */
    interface RuleConditionsProperty {
        /**
         * @Property ruleConditionType: The type of the forwarding conditions. Valid values:
     * * Host: domain name
     * * Path: path
     * * RequestHeader: HTTP header
     * * Query: query string
     * * Method: HTTP method
     * * Cookie: cookie
     * * SourceIP: source IP address
         */
        readonly ruleConditionType?: string | ros.IResolvable;
        /**
         * @Property ruleConditionValue: The endpoint port that is mapped to the listener port.
         */
        readonly ruleConditionValue?: string | ros.IResolvable;
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
         * @Property identity: The ID of the SSL certificate.
         */
        readonly identity: string | ros.IResolvable;
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
