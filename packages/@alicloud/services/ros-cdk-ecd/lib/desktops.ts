import * as ros from '@alicloud/ros-cdk-core';
import { RosDesktops } from './ecd.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDesktops as DesktopsProperty };

/**
 * Properties for defining a `ALIYUN::ECD::Desktops`
 */
export interface DesktopsProps {

    /**
     * Property bundleId: The ID of the cloud desktop template.
     */
    readonly bundleId: string | ros.IResolvable;

    /**
     * Property officeSiteId: The ID of the workspace.
     */
    readonly officeSiteId: string | ros.IResolvable;

    /**
     * Property policyGroupId: The ID of the policy.
     */
    readonly policyGroupId: string | ros.IResolvable;

    /**
     * Property amount: The number of cloud desktops that you want to create. Valid values: 1 to 300. Default
     * value: 1.
     */
    readonly amount?: number | ros.IResolvable;

    /**
     * Property autoPay: Specifies whether to enable automatic payment. Valid values:
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
     * Property autoRenew: Specifies whether to enable auto-renewal for the cloud desktop. This parameter takes
     * effect only when the ChargeType parameter is set to PrePaid.
     * Valid values:
     * true: enables auto-renewal. The renewal duration is the same as the subscription duration
     * that you specified for the Period parameter when you purchased the cloud desktop.
     * false: does not enable auto-renewal.
     * Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property chargeType: The billing method of the cloud desktop. Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     * Default value: PostPaid.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * Property desktopName: The name of the cloud desktop.
     */
    readonly desktopName?: string | ros.IResolvable;

    /**
     * Property desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you
     * create multiple cloud desktops at a time.
     * True: automatically adds a suffix.
     * False: does not add a suffix.
     */
    readonly desktopNameSuffix?: boolean | ros.IResolvable;

    /**
     * Property directoryId: This parameter is not open for use.
     */
    readonly directoryId?: string | ros.IResolvable;

    /**
     * Property endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.
     * During the same period, only one user can use the desktop.
     * If EndUserId is not set, the created cloud desktop will not be assigned to any user.
     */
    readonly endUserId?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property groupId: desktop group ID。
     * Note that the desktop group function is currently in the invitation test.
     * If you want to experience it, please submit a work order application.
     */
    readonly groupId?: string | ros.IResolvable;

    /**
     * Property hostname: The custom hostname that you specify for the cloud desktop. You can only specify the
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
     * Property period: The subscription duration. The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
     * If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
     * If periodUnit is year, the valid range is 1 to 5
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property promotionId: promotion id.
     */
    readonly promotionId?: string | ros.IResolvable;

    /**
     * Property tags: The list of desktops tags in the form of key/value pairs.
     * You can define a maximum of 20 tags for each desktops.
     */
    readonly tags?: RosDesktops.TagsProperty[];

    /**
     * Property userAssignMode: The assignment mode of the cloud desktop. Default value: ALL.
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
     * Property userName: This parameter is not open for use.
     */
    readonly userName?: string | ros.IResolvable;

    /**
     * Property volumeEncryptionEnabled: Whether to enable disk encryption.
     */
    readonly volumeEncryptionEnabled?: boolean | ros.IResolvable;

    /**
     * Property volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled. It can be obtained through the ListKeys interface.
     */
    readonly volumeEncryptionKey?: string | ros.IResolvable;

    /**
     * Property vpcId: This parameter is not open for use.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ECD::Desktops`
 */
export class Desktops extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute DesktopId: The ID of the cloud desktop. If multiple cloud desktops are created in a call, the
IDs of the cloud desktops are returned.
     */
    public readonly attrDesktopId: ros.IResolvable;

    /**
     * Attribute OrderId: The ID of the order.
Note This parameter is returned only when the ChargeType parameter is set to PrePaid.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ECD::Desktops`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DesktopsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDesktops = new RosDesktops(this, id,  {
            userAssignMode: props.userAssignMode,
            userName: props.userName,
            promotionId: props.promotionId,
            policyGroupId: props.policyGroupId,
            autoRenew: props.autoRenew,
            amount: props.amount,
            desktopName: props.desktopName,
            hostname: props.hostname,
            period: props.period,
            volumeEncryptionEnabled: props.volumeEncryptionEnabled,
            autoPay: props.autoPay,
            groupId: props.groupId,
            officeSiteId: props.officeSiteId,
            desktopNameSuffix: props.desktopNameSuffix,
            bundleId: props.bundleId,
            directoryId: props.directoryId,
            endUserId: props.endUserId,
            vpcId: props.vpcId,
            chargeType: props.chargeType,
            volumeEncryptionKey: props.volumeEncryptionKey,
            tags: props.tags,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDesktops;
        this.attrDesktopId = rosDesktops.attrDesktopId;
        this.attrOrderId = rosDesktops.attrOrderId;
    }
}
