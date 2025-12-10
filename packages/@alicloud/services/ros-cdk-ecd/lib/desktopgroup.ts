import * as ros from '@alicloud/ros-cdk-core';
import { RosDesktopGroup } from './ecd.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDesktopGroup as DesktopGroupProperty };

/**
 * Properties for defining a `DesktopGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-desktopgroup
 */
export interface DesktopGroupProps {

    /**
     * Property bundleId: The ID of the desktop template.
     */
    readonly bundleId: string | ros.IResolvable;

    /**
     * Property chargeType: The billing method of the cloud desktops in the desktop group.  Enumeration Value:
     * PostPaid
     * PrePaid
     */
    readonly chargeType: string | ros.IResolvable;

    /**
     * Property officeSiteId: The ID of the workspace.
     */
    readonly officeSiteId: string | ros.IResolvable;

    /**
     * Property policyGroupId: The ID of the policy.
     */
    readonly policyGroupId: string | ros.IResolvable;

    /**
     * Property allowAutoSetup: Specifies whether to automatically create cloud desktops in the desktop group if you set the billing method to subscription. If you set the ChargeType parameter to PrePaid, this parameter is required.
     */
    readonly allowAutoSetup?: number | ros.IResolvable;

    /**
     * Property allowBufferCount: Specifies whether to reserve cloud desktops if you set the billing method to pay-as-you-go. If you set the ChargeType parameter to PostPaid, this parameter is required. Valid values: 0: does not allow the system to reserve cloud desktops. N: allows the system to reserve N cloud desktops. The variable N must be an integer that ranges from 1 to 100.
     */
    readonly allowBufferCount?: number | ros.IResolvable;

    /**
     * Property autoPay: Specifies whether to enable automatic payment.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * Property autoRenew: Specifies whether to enable auto-renewal.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property buyDesktopsCount: The number of cloud desktops that you want to purchase. Valid values: 0 to 200.
     */
    readonly buyDesktopsCount?: number | ros.IResolvable;

    /**
     * Property comments: The remarks on the desktop group.
     */
    readonly comments?: string | ros.IResolvable;

    /**
     * Property connectDuration: The maximum period of time during which the session is connected. When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
     */
    readonly connectDuration?: number | ros.IResolvable;

    /**
     * Property defaultInitDesktopCount: The default number of cloud desktops to create when you create the desktop group. Default value: 1.
     */
    readonly defaultInitDesktopCount?: number | ros.IResolvable;

    /**
     * Property desktopGroupName: The name of the desktop group.
     */
    readonly desktopGroupName?: string | ros.IResolvable;

    /**
     * Property endUserIds: The end users that can use the desktop group.
     */
    readonly endUserIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property groupVersion: The desktop group version.
     */
    readonly groupVersion?: number | ros.IResolvable;

    /**
     * Property idleDisconnectDuration: The maximum period of time for which a session remains idle. If an end user performs no operations on a cloud desktop by using keyboards or mouses during a session, the session becomes idle. When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
     */
    readonly idleDisconnectDuration?: number | ros.IResolvable;

    /**
     * Property keepDuration: The retention period of the cloud desktop after the end user disconnects from the cloud desktop. Unit: milliseconds.
     */
    readonly keepDuration?: number | ros.IResolvable;

    /**
     * Property maxDesktopsCount: The maximum number of cloud desktops that the desktop group can contain. Valid values: 0 to 200.
     */
    readonly maxDesktopsCount?: number | ros.IResolvable;

    /**
     * Property minDesktopsCount: The minimum number of cloud desktops that must be contained in the desktop group if you set the billing method to subscription. If you set the ChargeType parameter to PrePaid, this parameter is required. Valid values: 0 to the value of MaxDesktopsCount. Default value: 1.
     */
    readonly minDesktopsCount?: number | ros.IResolvable;

    /**
     * Property period: The subscription period of the cloud desktops in the desktop group. The unit is specified by the PeriodUnit parameter. The Period parameter takes effect only if you set the ChargeType parameter to PrePaid.
     * Valid values if you set the PeriodUnit parameter to Month: 1, 2, 3, 6
     * Valid values if you set the PeriodUnit parameter to Year:  1, 2, 3, 4, 5
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: Whether to open CA
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property resetType: Specifies which type of the disk to reset for cloud desktops in the desktop group.
     */
    readonly resetType?: number | ros.IResolvable;

    /**
     * Property stopDuration: The period of time before the idle cloud desktop is stopped. When the specified period of time is reached, the idle cloud desktop automatically stops. If an end user connects to a stopped cloud desktop, the cloud desktop automatically starts. Unit: milliseconds.
     */
    readonly stopDuration?: number | ros.IResolvable;

    /**
     * Property volumeEncryptionEnabled: Specifies whether to enable disk encryption.
     */
    readonly volumeEncryptionEnabled?: boolean | ros.IResolvable;

    /**
     * Property volumeEncryptionKey: The ID of the Key Management Service (KMS) key that you want to use when disk encryption is enabled.
     */
    readonly volumeEncryptionKey?: string | ros.IResolvable;
}

/**
 * Represents a `DesktopGroup`.
 */
export interface IDesktopGroup extends ros.IResource {
    readonly props: DesktopGroupProps;

    /**
     * Attribute DesktopGroupId: Id of created DesktopGroup
     */
    readonly attrDesktopGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECD::DesktopGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDesktopGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-desktopgroup
 */
export class DesktopGroup extends ros.Resource implements IDesktopGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DesktopGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DesktopGroupId: Id of created DesktopGroup
     */
    public readonly attrDesktopGroupId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DesktopGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDesktopGroup = new RosDesktopGroup(this, id,  {
            connectDuration: props.connectDuration,
            desktopGroupName: props.desktopGroupName,
            autoRenew: props.autoRenew,
            volumeEncryptionEnabled: props.volumeEncryptionEnabled,
            allowBufferCount: props.allowBufferCount,
            groupVersion: props.groupVersion,
            keepDuration: props.keepDuration,
            idleDisconnectDuration: props.idleDisconnectDuration,
            maxDesktopsCount: props.maxDesktopsCount,
            resetType: props.resetType,
            minDesktopsCount: props.minDesktopsCount,
            comments: props.comments,
            policyGroupId: props.policyGroupId,
            endUserIds: props.endUserIds,
            period: props.period,
            defaultInitDesktopCount: props.defaultInitDesktopCount,
            autoPay: props.autoPay,
            officeSiteId: props.officeSiteId,
            bundleId: props.bundleId,
            stopDuration: props.stopDuration,
            chargeType: props.chargeType,
            volumeEncryptionKey: props.volumeEncryptionKey,
            allowAutoSetup: props.allowAutoSetup,
            buyDesktopsCount: props.buyDesktopsCount,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDesktopGroup;
        this.attrDesktopGroupId = rosDesktopGroup.attrDesktopGroupId;
    }
}
