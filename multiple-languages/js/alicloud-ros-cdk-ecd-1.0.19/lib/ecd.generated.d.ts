import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::ECD::Bundle`
 */
export interface RosBundleProps {
    /**
     * @Property desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType.
     * Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification.
     */
    readonly desktopType: string | ros.IResolvable;
    /**
     * @Property imageId: The ID of the image.
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * @Property rootDiskSizeGib: The root disk size gib.
     */
    readonly rootDiskSizeGib: number | ros.IResolvable;
    /**
     * @Property userDiskSizeGib: The size of the data disk. Currently, only one data disk can be set. Unit: GiB.
     * - The size of the data disk that supports the setting corresponds to the specification.
     * - The data disk size (user_disk_size_gib) set in the template must be greater than the data disk size (data_disk_size) in the mirror.
     */
    readonly userDiskSizeGib: Array<number | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property bundleName: The name of the bundle.
     */
    readonly bundleName?: string | ros.IResolvable;
    /**
     * @Property description: The description of the bundle.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property language: The language. Valid values:
     * zh-CN: Simplified Chinese
     * zh-HK: Traditional Chinese (Hong Kong)
     * en-US: English
     * ja-JP: Japanese
     */
    readonly language?: string | ros.IResolvable;
    /**
     * @Property rootDiskPerformanceLevel: The root disk performance level. Valid values:
     * PL0
     * PL1
     * PL2
     * PL3
     *
     */
    readonly rootDiskPerformanceLevel?: string | ros.IResolvable;
    /**
     * @Property userDiskPerformanceLevel: The user disk performance level.Valid values:
     * PL0
     * PL1
     * PL2
     * PL3
     *
     */
    readonly userDiskPerformanceLevel?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ECD::Bundle`
 */
export declare class RosBundle extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECD::Bundle";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute BundleId: Desktop bundle ID.
     */
    readonly attrBundleId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType.
     * Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification.
     */
    desktopType: string | ros.IResolvable;
    /**
     * @Property imageId: The ID of the image.
     */
    imageId: string | ros.IResolvable;
    /**
     * @Property rootDiskSizeGib: The root disk size gib.
     */
    rootDiskSizeGib: number | ros.IResolvable;
    /**
     * @Property userDiskSizeGib: The size of the data disk. Currently, only one data disk can be set. Unit: GiB.
     * - The size of the data disk that supports the setting corresponds to the specification.
     * - The data disk size (user_disk_size_gib) set in the template must be greater than the data disk size (data_disk_size) in the mirror.
     */
    userDiskSizeGib: Array<number | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property bundleName: The name of the bundle.
     */
    bundleName: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the bundle.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property language: The language. Valid values:
     * zh-CN: Simplified Chinese
     * zh-HK: Traditional Chinese (Hong Kong)
     * en-US: English
     * ja-JP: Japanese
     */
    language: string | ros.IResolvable | undefined;
    /**
     * @Property rootDiskPerformanceLevel: The root disk performance level. Valid values:
     * PL0
     * PL1
     * PL2
     * PL3
     *
     */
    rootDiskPerformanceLevel: string | ros.IResolvable | undefined;
    /**
     * @Property userDiskPerformanceLevel: The user disk performance level.Valid values:
     * PL0
     * PL1
     * PL2
     * PL3
     *
     */
    userDiskPerformanceLevel: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ECD::Bundle`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBundleProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::ECD::Desktops`
 */
export interface RosDesktopsProps {
    /**
     * @Property bundleId: The ID of the cloud desktop template.
     */
    readonly bundleId: string | ros.IResolvable;
    /**
     * @Property officeSiteId: The ID of the workspace.
     */
    readonly officeSiteId: string | ros.IResolvable;
    /**
     * @Property policyGroupId: The ID of the policy.
     */
    readonly policyGroupId: string | ros.IResolvable;
    /**
     * @Property amount: The number of cloud desktops that you want to create. Valid values: 1 to 300. Default
     * value: 1.
     */
    readonly amount?: number | ros.IResolvable;
    /**
     * @Property autoPay: Specifies whether to enable automatic payment. Valid values:
     * true: enables automatic payment. You must make sure that your Alibaba Cloud account
     * has sufficient balance. If your Alibaba Cloud account does not have sufficient balance,
     * abnormal orders are generated.
     * false: disables automatic payment. In this case, an order is generated, and no payment
     * is automatically made. You can log on to the EDS console and complete the payment
     * based on the order ID on the Orders page.
     * Default value: true.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal for the cloud desktop. This parameter takes
     * effect only when the ChargeType parameter is set to PrePaid.
     * Valid values:
     * true: enables auto-renewal. The renewal duration is the same as the subscription duration
     * that you specified for the Period parameter when you purchased the cloud desktop.
     * false: does not enable auto-renewal.
     * Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property chargeType: The billing method of the cloud desktop. Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     * Default value: PostPaid.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property desktopName: The name of the cloud desktop.
     */
    readonly desktopName?: string | ros.IResolvable;
    /**
     * @Property desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you
     * create multiple cloud desktops at a time.
     * True: automatically adds a suffix.
     * False: does not add a suffix.
     */
    readonly desktopNameSuffix?: boolean | ros.IResolvable;
    /**
     * @Property directoryId: This parameter is not open for use.
     */
    readonly directoryId?: string | ros.IResolvable;
    /**
     * @Property endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.
     * During the same period, only one user can use the desktop.
     * If EndUserId is not set, the created cloud desktop will not be assigned to any user.
     */
    readonly endUserId?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property groupId: desktop group ID。
     * Note that the desktop group function is currently in the invitation test.
     * If you want to experience it, please submit a work order application.
     */
    readonly groupId?: string | ros.IResolvable;
    /**
     * @Property hostname: The custom hostname that you specify for the cloud desktop. You can only specify the
     * hostname of a Windows cloud desktop in the workspace of the enterprise AD account
     * type.
     * The hostname must meet the following requirements:
     * The hostname must be 2 to 15 characters in length.
     * The hostname can contain letters, digits, and hyphens (-). It cannot start or end
     * with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
     * If you create multiple cloud desktops, you can specify the names of the cloud desktops
     * in the name_prefix[begin_number,bits]name_suffix format. For example, if you set Hostname to ecd--1,4-test, the hostname of the first cloud desktop is ecd-0001-test and the hostname of
     * the second cloud desktop is ecd-0002-test. The rest may be deduced by analogy.
     * name_prefix: the prefix of the hostname.
     * [begin_number,bits]: the ordered numbers in the hostname. begin_number: the start number. Valid values:
     * 0 to 999999. Default value: 0. bits: the digit. Valid values: 1 to 6. Default value:
     * 6.
     * name_suffix: the suffix of the hostname.
     */
    readonly hostname?: string | ros.IResolvable;
    /**
     * @Property period: The subscription duration. The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
     * If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
     * If periodUnit is year, the valid range is 1 to 5
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property promotionId: promotion id.
     */
    readonly promotionId?: string | ros.IResolvable;
    /**
     * @Property tags: The list of desktops tags in the form of key/value pairs.
     * You can define a maximum of 20 tags for each desktops.
     */
    readonly tags?: RosDesktops.TagsProperty[];
    /**
     * @Property userAssignMode: The assignment mode of the cloud desktop. Default value: ALL.
     * ALL: If you specify the EndUserId parameter, the cloud desktops that you create are
     * assigned to each regular user that you specify.
     * PER_USER: If you specify the EndUserId parameter, the cloud desktops that you create
     * are evenly assigned to all regular users that you specify. In this case, you must
     * make sure that the value of the Amount parameter can be divided by the N value of
     * the EndUserId.N parameter that you specify.
     * Note If you do not specify the EndUserId parameter, the cloud desktop that you create is
     * not assigned to regular users.
     */
    readonly userAssignMode?: string | ros.IResolvable;
    /**
     * @Property userName: This parameter is not open for use.
     */
    readonly userName?: string | ros.IResolvable;
    /**
     * @Property volumeEncryptionEnabled: Whether to enable disk encryption.
     */
    readonly volumeEncryptionEnabled?: boolean | ros.IResolvable;
    /**
     * @Property volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled. It can be obtained through the ListKeys interface.
     */
    readonly volumeEncryptionKey?: string | ros.IResolvable;
    /**
     * @Property vpcId: This parameter is not open for use.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ECD::Desktops`
 */
export declare class RosDesktops extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECD::Desktops";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DesktopId: The ID of the cloud desktop. If multiple cloud desktops are created in a call, the
IDs of the cloud desktops are returned.
     */
    readonly attrDesktopId: ros.IResolvable;
    /**
     * @Attribute OrderId: The ID of the order.
Note This parameter is returned only when the ChargeType parameter is set to PrePaid.
     */
    readonly attrOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bundleId: The ID of the cloud desktop template.
     */
    bundleId: string | ros.IResolvable;
    /**
     * @Property officeSiteId: The ID of the workspace.
     */
    officeSiteId: string | ros.IResolvable;
    /**
     * @Property policyGroupId: The ID of the policy.
     */
    policyGroupId: string | ros.IResolvable;
    /**
     * @Property amount: The number of cloud desktops that you want to create. Valid values: 1 to 300. Default
     * value: 1.
     */
    amount: number | ros.IResolvable | undefined;
    /**
     * @Property autoPay: Specifies whether to enable automatic payment. Valid values:
     * true: enables automatic payment. You must make sure that your Alibaba Cloud account
     * has sufficient balance. If your Alibaba Cloud account does not have sufficient balance,
     * abnormal orders are generated.
     * false: disables automatic payment. In this case, an order is generated, and no payment
     * is automatically made. You can log on to the EDS console and complete the payment
     * based on the order ID on the Orders page.
     * Default value: true.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal for the cloud desktop. This parameter takes
     * effect only when the ChargeType parameter is set to PrePaid.
     * Valid values:
     * true: enables auto-renewal. The renewal duration is the same as the subscription duration
     * that you specified for the Period parameter when you purchased the cloud desktop.
     * false: does not enable auto-renewal.
     * Default value: false.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property chargeType: The billing method of the cloud desktop. Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     * Default value: PostPaid.
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property desktopName: The name of the cloud desktop.
     */
    desktopName: string | ros.IResolvable | undefined;
    /**
     * @Property desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you
     * create multiple cloud desktops at a time.
     * True: automatically adds a suffix.
     * False: does not add a suffix.
     */
    desktopNameSuffix: boolean | ros.IResolvable | undefined;
    /**
     * @Property directoryId: This parameter is not open for use.
     */
    directoryId: string | ros.IResolvable | undefined;
    /**
     * @Property endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.
     * During the same period, only one user can use the desktop.
     * If EndUserId is not set, the created cloud desktop will not be assigned to any user.
     */
    endUserId: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property groupId: desktop group ID。
     * Note that the desktop group function is currently in the invitation test.
     * If you want to experience it, please submit a work order application.
     */
    groupId: string | ros.IResolvable | undefined;
    /**
     * @Property hostname: The custom hostname that you specify for the cloud desktop. You can only specify the
     * hostname of a Windows cloud desktop in the workspace of the enterprise AD account
     * type.
     * The hostname must meet the following requirements:
     * The hostname must be 2 to 15 characters in length.
     * The hostname can contain letters, digits, and hyphens (-). It cannot start or end
     * with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
     * If you create multiple cloud desktops, you can specify the names of the cloud desktops
     * in the name_prefix[begin_number,bits]name_suffix format. For example, if you set Hostname to ecd--1,4-test, the hostname of the first cloud desktop is ecd-0001-test and the hostname of
     * the second cloud desktop is ecd-0002-test. The rest may be deduced by analogy.
     * name_prefix: the prefix of the hostname.
     * [begin_number,bits]: the ordered numbers in the hostname. begin_number: the start number. Valid values:
     * 0 to 999999. Default value: 0. bits: the digit. Valid values: 1 to 6. Default value:
     * 6.
     * name_suffix: the suffix of the hostname.
     */
    hostname: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription duration. The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
     * If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
     * If periodUnit is year, the valid range is 1 to 5
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property promotionId: promotion id.
     */
    promotionId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: The list of desktops tags in the form of key/value pairs.
     * You can define a maximum of 20 tags for each desktops.
     */
    tags: RosDesktops.TagsProperty[] | undefined;
    /**
     * @Property userAssignMode: The assignment mode of the cloud desktop. Default value: ALL.
     * ALL: If you specify the EndUserId parameter, the cloud desktops that you create are
     * assigned to each regular user that you specify.
     * PER_USER: If you specify the EndUserId parameter, the cloud desktops that you create
     * are evenly assigned to all regular users that you specify. In this case, you must
     * make sure that the value of the Amount parameter can be divided by the N value of
     * the EndUserId.N parameter that you specify.
     * Note If you do not specify the EndUserId parameter, the cloud desktop that you create is
     * not assigned to regular users.
     */
    userAssignMode: string | ros.IResolvable | undefined;
    /**
     * @Property userName: This parameter is not open for use.
     */
    userName: string | ros.IResolvable | undefined;
    /**
     * @Property volumeEncryptionEnabled: Whether to enable disk encryption.
     */
    volumeEncryptionEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled. It can be obtained through the ListKeys interface.
     */
    volumeEncryptionKey: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: This parameter is not open for use.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ECD::Desktops`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDesktopsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDesktops {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: The value of the tag.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The keyword of the tag.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::ECD::SimpleOfficeSite`
 */
export interface RosSimpleOfficeSiteProps {
    /**
     * @Property bandwidth: The maximum public bandwidth. Value range: 10 to 200. Unit: Mbit/s. This parameter is available if you set EnableInternetAccess to true.
     */
    readonly bandwidth?: number | ros.IResolvable;
    /**
     * @Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     * NoteIf you want to connect to your cloud desktops over a VPC, you can attach the network of the workspace to the CEN instance. The CEN instance is connected to the on-premises network over VPN Gateway or Express Connect.
     */
    readonly cenId?: string | ros.IResolvable;
    /**
     * @Property cenOwnerId: The ID of the Alibaba Cloud account to which the Cloud Enterprise Network (CEN) instance belongs.
     * If you do not specify the CenId parameter, or the CEN instance that is specified by the CenId parameter belongs to the current Alibaba Cloud account, skip this parameter.
     * If you specify the CenId parameter and the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, enter the ID of the Alibaba Cloud account.
     */
    readonly cenOwnerId?: number | ros.IResolvable;
    /**
     * @Property cidrBlock: The IPv4 CIDR block in the secure office network of the workspace. The IPv4 CIDR block that the system uses to create a virtual private cloud (VPC) for the workspace. We recommend that you set the IPv4 CIDR block to 10.0.0.0/12, 172.16.0.0/12, 192.168.0.0/16, or a subnet of these CIDR blocks. If you set the IPv4 CIDR block to 10.0.0.0/12 or 172.16.0.0/12, the mask is 1224 bits in length. If you set the IPv4 CIDR block to 192.168.0.0/16, the mask is 1624 bits in length.
     */
    readonly cidrBlock?: string | ros.IResolvable;
    /**
     * @Property cloudBoxOfficeSite: Specifies whether the workspace is a CloudBox-based workspace.
     * Enumeration Value:
     * true
     * false
     */
    readonly cloudBoxOfficeSite?: boolean | ros.IResolvable;
    /**
     * @Property desktopAccessType: The method that is used to connect the client to cloud desktops.
     * NoteVPC connections are established by using Alibaba Cloud PrivateLink. You can use PrivateLink for free. When you set this parameter to VPC or Any, PrivateLink is automatically activated.
     */
    readonly desktopAccessType?: string | ros.IResolvable;
    /**
     * @Property enableAdminAccess: Specifies whether to grant the permissions of the local administrator to the regular user of the cloud desktop.
     * Enumeration Value:
     * true
     * false
     */
    readonly enableAdminAccess?: boolean | ros.IResolvable;
    /**
     * @Property enableInternetAccess: Specifies whether to enable Internet access. By default, Internet access is not enabled.
     * Enumeration Value:
     * true
     * false
     */
    readonly enableInternetAccess?: boolean | ros.IResolvable;
    /**
     * @Property needVerifyZeroDevice: Specifies whether to enable trusted device verification.
     * Enumeration Value:
     * true
     * false
     */
    readonly needVerifyZeroDevice?: boolean | ros.IResolvable;
    /**
     * @Property officeSiteName: The name of the workspace. The name must be 2 to 255 characters in length. It must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly officeSiteName?: string | ros.IResolvable;
    /**
     * @Property verifyCode: The verification code. If the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, you must call the SendVerifyCode operation to obtain the verification code.
     */
    readonly verifyCode?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The IDs of the vSwitches in the VPC. This parameter is required when you create a CloudBox-based workspace.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ECD::SimpleOfficeSite`
 */
export declare class RosSimpleOfficeSite extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECD::SimpleOfficeSite";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute OfficeSiteId: The ID of the workspace.
     */
    readonly attrOfficeSiteId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bandwidth: The maximum public bandwidth. Value range: 10 to 200. Unit: Mbit/s. This parameter is available if you set EnableInternetAccess to true.
     */
    bandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     * NoteIf you want to connect to your cloud desktops over a VPC, you can attach the network of the workspace to the CEN instance. The CEN instance is connected to the on-premises network over VPN Gateway or Express Connect.
     */
    cenId: string | ros.IResolvable | undefined;
    /**
     * @Property cenOwnerId: The ID of the Alibaba Cloud account to which the Cloud Enterprise Network (CEN) instance belongs.
     * If you do not specify the CenId parameter, or the CEN instance that is specified by the CenId parameter belongs to the current Alibaba Cloud account, skip this parameter.
     * If you specify the CenId parameter and the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, enter the ID of the Alibaba Cloud account.
     */
    cenOwnerId: number | ros.IResolvable | undefined;
    /**
     * @Property cidrBlock: The IPv4 CIDR block in the secure office network of the workspace. The IPv4 CIDR block that the system uses to create a virtual private cloud (VPC) for the workspace. We recommend that you set the IPv4 CIDR block to 10.0.0.0/12, 172.16.0.0/12, 192.168.0.0/16, or a subnet of these CIDR blocks. If you set the IPv4 CIDR block to 10.0.0.0/12 or 172.16.0.0/12, the mask is 1224 bits in length. If you set the IPv4 CIDR block to 192.168.0.0/16, the mask is 1624 bits in length.
     */
    cidrBlock: string | ros.IResolvable | undefined;
    /**
     * @Property cloudBoxOfficeSite: Specifies whether the workspace is a CloudBox-based workspace.
     * Enumeration Value:
     * true
     * false
     */
    cloudBoxOfficeSite: boolean | ros.IResolvable | undefined;
    /**
     * @Property desktopAccessType: The method that is used to connect the client to cloud desktops.
     * NoteVPC connections are established by using Alibaba Cloud PrivateLink. You can use PrivateLink for free. When you set this parameter to VPC or Any, PrivateLink is automatically activated.
     */
    desktopAccessType: string | ros.IResolvable | undefined;
    /**
     * @Property enableAdminAccess: Specifies whether to grant the permissions of the local administrator to the regular user of the cloud desktop.
     * Enumeration Value:
     * true
     * false
     */
    enableAdminAccess: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableInternetAccess: Specifies whether to enable Internet access. By default, Internet access is not enabled.
     * Enumeration Value:
     * true
     * false
     */
    enableInternetAccess: boolean | ros.IResolvable | undefined;
    /**
     * @Property needVerifyZeroDevice: Specifies whether to enable trusted device verification.
     * Enumeration Value:
     * true
     * false
     */
    needVerifyZeroDevice: boolean | ros.IResolvable | undefined;
    /**
     * @Property officeSiteName: The name of the workspace. The name must be 2 to 255 characters in length. It must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    officeSiteName: string | ros.IResolvable | undefined;
    /**
     * @Property verifyCode: The verification code. If the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, you must call the SendVerifyCode operation to obtain the verification code.
     */
    verifyCode: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The IDs of the vSwitches in the VPC. This parameter is required when you create a CloudBox-based workspace.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ECD::SimpleOfficeSite`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSimpleOfficeSiteProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
