package com.aliyun.ros.cdk.ecd;

/**
 * Properties for defining a <code>DesktopGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-desktopgroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:09.452Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.DesktopGroupProps")
@software.amazon.jsii.Jsii.Proxy(DesktopGroupProps.Jsii$Proxy.class)
public interface DesktopGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bundleId: The ID of the desktop template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBundleId();

    /**
     * Property chargeType: The billing method of the cloud desktops in the desktop group.
     * <p>
     * Enumeration Value:
     * PostPaid
     * PrePaid
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChargeType();

    /**
     * Property officeSiteId: The ID of the workspace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOfficeSiteId();

    /**
     * Property policyGroupId: The ID of the policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyGroupId();

    /**
     * Property allowAutoSetup: Specifies whether to automatically create cloud desktops in the desktop group if you set the billing method to subscription.
     * <p>
     * If you set the ChargeType parameter to PrePaid, this parameter is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllowAutoSetup() {
        return null;
    }

    /**
     * Property allowBufferCount: Specifies whether to reserve cloud desktops if you set the billing method to pay-as-you-go.
     * <p>
     * If you set the ChargeType parameter to PostPaid, this parameter is required. Valid values: 0: does not allow the system to reserve cloud desktops. N: allows the system to reserve N cloud desktops. The variable N must be an integer that ranges from 1 to 100.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllowBufferCount() {
        return null;
    }

    /**
     * Property autoPay: Specifies whether to enable automatic payment.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     * Property autoRenew: Specifies whether to enable auto-renewal.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property buyDesktopsCount: The number of cloud desktops that you want to purchase.
     * <p>
     * Valid values: 0 to 200.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBuyDesktopsCount() {
        return null;
    }

    /**
     * Property comments: The remarks on the desktop group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComments() {
        return null;
    }

    /**
     * Property connectDuration: The maximum period of time during which the session is connected.
     * <p>
     * When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectDuration() {
        return null;
    }

    /**
     * Property defaultInitDesktopCount: The default number of cloud desktops to create when you create the desktop group.
     * <p>
     * Default value: 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultInitDesktopCount() {
        return null;
    }

    /**
     * Property desktopGroupName: The name of the desktop group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDesktopGroupName() {
        return null;
    }

    /**
     * Property endUserIds: The end users that can use the desktop group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndUserIds() {
        return null;
    }

    /**
     * Property groupVersion: The desktop group version.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupVersion() {
        return null;
    }

    /**
     * Property idleDisconnectDuration: The maximum period of time for which a session remains idle.
     * <p>
     * If an end user performs no operations on a cloud desktop by using keyboards or mouses during a session, the session becomes idle. When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIdleDisconnectDuration() {
        return null;
    }

    /**
     * Property keepDuration: The retention period of the cloud desktop after the end user disconnects from the cloud desktop.
     * <p>
     * Unit: milliseconds.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeepDuration() {
        return null;
    }

    /**
     * Property maxDesktopsCount: The maximum number of cloud desktops that the desktop group can contain.
     * <p>
     * Valid values: 0 to 200.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxDesktopsCount() {
        return null;
    }

    /**
     * Property minDesktopsCount: The minimum number of cloud desktops that must be contained in the desktop group if you set the billing method to subscription.
     * <p>
     * If you set the ChargeType parameter to PrePaid, this parameter is required. Valid values: 0 to the value of MaxDesktopsCount. Default value: 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMinDesktopsCount() {
        return null;
    }

    /**
     * Property period: The subscription period of the cloud desktops in the desktop group.
     * <p>
     * The unit is specified by the PeriodUnit parameter. The Period parameter takes effect only if you set the ChargeType parameter to PrePaid.
     * Valid values if you set the PeriodUnit parameter to Month: 1, 2, 3, 6
     * Valid values if you set the PeriodUnit parameter to Year:  1, 2, 3, 4, 5
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: Whether to open CA.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property resetType: Specifies which type of the disk to reset for cloud desktops in the desktop group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResetType() {
        return null;
    }

    /**
     * Property stopDuration: The period of time before the idle cloud desktop is stopped.
     * <p>
     * When the specified period of time is reached, the idle cloud desktop automatically stops. If an end user connects to a stopped cloud desktop, the cloud desktop automatically starts. Unit: milliseconds.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStopDuration() {
        return null;
    }

    /**
     * Property volumeEncryptionEnabled: Specifies whether to enable disk encryption.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVolumeEncryptionEnabled() {
        return null;
    }

    /**
     * Property volumeEncryptionKey: The ID of the Key Management Service (KMS) key that you want to use when disk encryption is enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVolumeEncryptionKey() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DesktopGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DesktopGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DesktopGroupProps> {
        java.lang.Object bundleId;
        java.lang.Object chargeType;
        java.lang.Object officeSiteId;
        java.lang.Object policyGroupId;
        java.lang.Object allowAutoSetup;
        java.lang.Object allowBufferCount;
        java.lang.Object autoPay;
        java.lang.Object autoRenew;
        java.lang.Object buyDesktopsCount;
        java.lang.Object comments;
        java.lang.Object connectDuration;
        java.lang.Object defaultInitDesktopCount;
        java.lang.Object desktopGroupName;
        java.lang.Object endUserIds;
        java.lang.Object groupVersion;
        java.lang.Object idleDisconnectDuration;
        java.lang.Object keepDuration;
        java.lang.Object maxDesktopsCount;
        java.lang.Object minDesktopsCount;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object resetType;
        java.lang.Object stopDuration;
        java.lang.Object volumeEncryptionEnabled;
        java.lang.Object volumeEncryptionKey;

        /**
         * Sets the value of {@link DesktopGroupProps#getBundleId}
         * @param bundleId Property bundleId: The ID of the desktop template. This parameter is required.
         * @return {@code this}
         */
        public Builder bundleId(java.lang.String bundleId) {
            this.bundleId = bundleId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getBundleId}
         * @param bundleId Property bundleId: The ID of the desktop template. This parameter is required.
         * @return {@code this}
         */
        public Builder bundleId(com.aliyun.ros.cdk.core.IResolvable bundleId) {
            this.bundleId = bundleId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the cloud desktops in the desktop group. This parameter is required.
         *                   Enumeration Value:
         *                   PostPaid
         *                   PrePaid
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the cloud desktops in the desktop group. This parameter is required.
         *                   Enumeration Value:
         *                   PostPaid
         *                   PrePaid
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getOfficeSiteId}
         * @param officeSiteId Property officeSiteId: The ID of the workspace. This parameter is required.
         * @return {@code this}
         */
        public Builder officeSiteId(java.lang.String officeSiteId) {
            this.officeSiteId = officeSiteId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getOfficeSiteId}
         * @param officeSiteId Property officeSiteId: The ID of the workspace. This parameter is required.
         * @return {@code this}
         */
        public Builder officeSiteId(com.aliyun.ros.cdk.core.IResolvable officeSiteId) {
            this.officeSiteId = officeSiteId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getPolicyGroupId}
         * @param policyGroupId Property policyGroupId: The ID of the policy. This parameter is required.
         * @return {@code this}
         */
        public Builder policyGroupId(java.lang.String policyGroupId) {
            this.policyGroupId = policyGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getPolicyGroupId}
         * @param policyGroupId Property policyGroupId: The ID of the policy. This parameter is required.
         * @return {@code this}
         */
        public Builder policyGroupId(com.aliyun.ros.cdk.core.IResolvable policyGroupId) {
            this.policyGroupId = policyGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getAllowAutoSetup}
         * @param allowAutoSetup Property allowAutoSetup: Specifies whether to automatically create cloud desktops in the desktop group if you set the billing method to subscription.
         *                       If you set the ChargeType parameter to PrePaid, this parameter is required.
         * @return {@code this}
         */
        public Builder allowAutoSetup(java.lang.Number allowAutoSetup) {
            this.allowAutoSetup = allowAutoSetup;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getAllowAutoSetup}
         * @param allowAutoSetup Property allowAutoSetup: Specifies whether to automatically create cloud desktops in the desktop group if you set the billing method to subscription.
         *                       If you set the ChargeType parameter to PrePaid, this parameter is required.
         * @return {@code this}
         */
        public Builder allowAutoSetup(com.aliyun.ros.cdk.core.IResolvable allowAutoSetup) {
            this.allowAutoSetup = allowAutoSetup;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getAllowBufferCount}
         * @param allowBufferCount Property allowBufferCount: Specifies whether to reserve cloud desktops if you set the billing method to pay-as-you-go.
         *                         If you set the ChargeType parameter to PostPaid, this parameter is required. Valid values: 0: does not allow the system to reserve cloud desktops. N: allows the system to reserve N cloud desktops. The variable N must be an integer that ranges from 1 to 100.
         * @return {@code this}
         */
        public Builder allowBufferCount(java.lang.Number allowBufferCount) {
            this.allowBufferCount = allowBufferCount;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getAllowBufferCount}
         * @param allowBufferCount Property allowBufferCount: Specifies whether to reserve cloud desktops if you set the billing method to pay-as-you-go.
         *                         If you set the ChargeType parameter to PostPaid, this parameter is required. Valid values: 0: does not allow the system to reserve cloud desktops. N: allows the system to reserve N cloud desktops. The variable N must be an integer that ranges from 1 to 100.
         * @return {@code this}
         */
        public Builder allowBufferCount(com.aliyun.ros.cdk.core.IResolvable allowBufferCount) {
            this.allowBufferCount = allowBufferCount;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getAutoPay}
         * @param autoPay Property autoPay: Specifies whether to enable automatic payment.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getAutoPay}
         * @param autoPay Property autoPay: Specifies whether to enable automatic payment.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getBuyDesktopsCount}
         * @param buyDesktopsCount Property buyDesktopsCount: The number of cloud desktops that you want to purchase.
         *                         Valid values: 0 to 200.
         * @return {@code this}
         */
        public Builder buyDesktopsCount(java.lang.Number buyDesktopsCount) {
            this.buyDesktopsCount = buyDesktopsCount;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getBuyDesktopsCount}
         * @param buyDesktopsCount Property buyDesktopsCount: The number of cloud desktops that you want to purchase.
         *                         Valid values: 0 to 200.
         * @return {@code this}
         */
        public Builder buyDesktopsCount(com.aliyun.ros.cdk.core.IResolvable buyDesktopsCount) {
            this.buyDesktopsCount = buyDesktopsCount;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getComments}
         * @param comments Property comments: The remarks on the desktop group.
         * @return {@code this}
         */
        public Builder comments(java.lang.String comments) {
            this.comments = comments;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getComments}
         * @param comments Property comments: The remarks on the desktop group.
         * @return {@code this}
         */
        public Builder comments(com.aliyun.ros.cdk.core.IResolvable comments) {
            this.comments = comments;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getConnectDuration}
         * @param connectDuration Property connectDuration: The maximum period of time during which the session is connected.
         *                        When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
         * @return {@code this}
         */
        public Builder connectDuration(java.lang.Number connectDuration) {
            this.connectDuration = connectDuration;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getConnectDuration}
         * @param connectDuration Property connectDuration: The maximum period of time during which the session is connected.
         *                        When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
         * @return {@code this}
         */
        public Builder connectDuration(com.aliyun.ros.cdk.core.IResolvable connectDuration) {
            this.connectDuration = connectDuration;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getDefaultInitDesktopCount}
         * @param defaultInitDesktopCount Property defaultInitDesktopCount: The default number of cloud desktops to create when you create the desktop group.
         *                                Default value: 1.
         * @return {@code this}
         */
        public Builder defaultInitDesktopCount(java.lang.Number defaultInitDesktopCount) {
            this.defaultInitDesktopCount = defaultInitDesktopCount;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getDefaultInitDesktopCount}
         * @param defaultInitDesktopCount Property defaultInitDesktopCount: The default number of cloud desktops to create when you create the desktop group.
         *                                Default value: 1.
         * @return {@code this}
         */
        public Builder defaultInitDesktopCount(com.aliyun.ros.cdk.core.IResolvable defaultInitDesktopCount) {
            this.defaultInitDesktopCount = defaultInitDesktopCount;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getDesktopGroupName}
         * @param desktopGroupName Property desktopGroupName: The name of the desktop group.
         * @return {@code this}
         */
        public Builder desktopGroupName(java.lang.String desktopGroupName) {
            this.desktopGroupName = desktopGroupName;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getDesktopGroupName}
         * @param desktopGroupName Property desktopGroupName: The name of the desktop group.
         * @return {@code this}
         */
        public Builder desktopGroupName(com.aliyun.ros.cdk.core.IResolvable desktopGroupName) {
            this.desktopGroupName = desktopGroupName;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getEndUserIds}
         * @param endUserIds Property endUserIds: The end users that can use the desktop group.
         * @return {@code this}
         */
        public Builder endUserIds(com.aliyun.ros.cdk.core.IResolvable endUserIds) {
            this.endUserIds = endUserIds;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getEndUserIds}
         * @param endUserIds Property endUserIds: The end users that can use the desktop group.
         * @return {@code this}
         */
        public Builder endUserIds(java.util.List<? extends java.lang.Object> endUserIds) {
            this.endUserIds = endUserIds;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getGroupVersion}
         * @param groupVersion Property groupVersion: The desktop group version.
         * @return {@code this}
         */
        public Builder groupVersion(java.lang.Number groupVersion) {
            this.groupVersion = groupVersion;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getGroupVersion}
         * @param groupVersion Property groupVersion: The desktop group version.
         * @return {@code this}
         */
        public Builder groupVersion(com.aliyun.ros.cdk.core.IResolvable groupVersion) {
            this.groupVersion = groupVersion;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getIdleDisconnectDuration}
         * @param idleDisconnectDuration Property idleDisconnectDuration: The maximum period of time for which a session remains idle.
         *                               If an end user performs no operations on a cloud desktop by using keyboards or mouses during a session, the session becomes idle. When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
         * @return {@code this}
         */
        public Builder idleDisconnectDuration(java.lang.Number idleDisconnectDuration) {
            this.idleDisconnectDuration = idleDisconnectDuration;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getIdleDisconnectDuration}
         * @param idleDisconnectDuration Property idleDisconnectDuration: The maximum period of time for which a session remains idle.
         *                               If an end user performs no operations on a cloud desktop by using keyboards or mouses during a session, the session becomes idle. When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
         * @return {@code this}
         */
        public Builder idleDisconnectDuration(com.aliyun.ros.cdk.core.IResolvable idleDisconnectDuration) {
            this.idleDisconnectDuration = idleDisconnectDuration;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getKeepDuration}
         * @param keepDuration Property keepDuration: The retention period of the cloud desktop after the end user disconnects from the cloud desktop.
         *                     Unit: milliseconds.
         * @return {@code this}
         */
        public Builder keepDuration(java.lang.Number keepDuration) {
            this.keepDuration = keepDuration;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getKeepDuration}
         * @param keepDuration Property keepDuration: The retention period of the cloud desktop after the end user disconnects from the cloud desktop.
         *                     Unit: milliseconds.
         * @return {@code this}
         */
        public Builder keepDuration(com.aliyun.ros.cdk.core.IResolvable keepDuration) {
            this.keepDuration = keepDuration;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getMaxDesktopsCount}
         * @param maxDesktopsCount Property maxDesktopsCount: The maximum number of cloud desktops that the desktop group can contain.
         *                         Valid values: 0 to 200.
         * @return {@code this}
         */
        public Builder maxDesktopsCount(java.lang.Number maxDesktopsCount) {
            this.maxDesktopsCount = maxDesktopsCount;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getMaxDesktopsCount}
         * @param maxDesktopsCount Property maxDesktopsCount: The maximum number of cloud desktops that the desktop group can contain.
         *                         Valid values: 0 to 200.
         * @return {@code this}
         */
        public Builder maxDesktopsCount(com.aliyun.ros.cdk.core.IResolvable maxDesktopsCount) {
            this.maxDesktopsCount = maxDesktopsCount;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getMinDesktopsCount}
         * @param minDesktopsCount Property minDesktopsCount: The minimum number of cloud desktops that must be contained in the desktop group if you set the billing method to subscription.
         *                         If you set the ChargeType parameter to PrePaid, this parameter is required. Valid values: 0 to the value of MaxDesktopsCount. Default value: 1.
         * @return {@code this}
         */
        public Builder minDesktopsCount(java.lang.Number minDesktopsCount) {
            this.minDesktopsCount = minDesktopsCount;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getMinDesktopsCount}
         * @param minDesktopsCount Property minDesktopsCount: The minimum number of cloud desktops that must be contained in the desktop group if you set the billing method to subscription.
         *                         If you set the ChargeType parameter to PrePaid, this parameter is required. Valid values: 0 to the value of MaxDesktopsCount. Default value: 1.
         * @return {@code this}
         */
        public Builder minDesktopsCount(com.aliyun.ros.cdk.core.IResolvable minDesktopsCount) {
            this.minDesktopsCount = minDesktopsCount;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getPeriod}
         * @param period Property period: The subscription period of the cloud desktops in the desktop group.
         *               The unit is specified by the PeriodUnit parameter. The Period parameter takes effect only if you set the ChargeType parameter to PrePaid.
         *               Valid values if you set the PeriodUnit parameter to Month: 1, 2, 3, 6
         *               Valid values if you set the PeriodUnit parameter to Year:  1, 2, 3, 4, 5
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getPeriod}
         * @param period Property period: The subscription period of the cloud desktops in the desktop group.
         *               The unit is specified by the PeriodUnit parameter. The Period parameter takes effect only if you set the ChargeType parameter to PrePaid.
         *               Valid values if you set the PeriodUnit parameter to Month: 1, 2, 3, 6
         *               Valid values if you set the PeriodUnit parameter to Year:  1, 2, 3, 4, 5
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Whether to open CA.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Whether to open CA.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getResetType}
         * @param resetType Property resetType: Specifies which type of the disk to reset for cloud desktops in the desktop group.
         * @return {@code this}
         */
        public Builder resetType(java.lang.Number resetType) {
            this.resetType = resetType;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getResetType}
         * @param resetType Property resetType: Specifies which type of the disk to reset for cloud desktops in the desktop group.
         * @return {@code this}
         */
        public Builder resetType(com.aliyun.ros.cdk.core.IResolvable resetType) {
            this.resetType = resetType;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getStopDuration}
         * @param stopDuration Property stopDuration: The period of time before the idle cloud desktop is stopped.
         *                     When the specified period of time is reached, the idle cloud desktop automatically stops. If an end user connects to a stopped cloud desktop, the cloud desktop automatically starts. Unit: milliseconds.
         * @return {@code this}
         */
        public Builder stopDuration(java.lang.Number stopDuration) {
            this.stopDuration = stopDuration;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getStopDuration}
         * @param stopDuration Property stopDuration: The period of time before the idle cloud desktop is stopped.
         *                     When the specified period of time is reached, the idle cloud desktop automatically stops. If an end user connects to a stopped cloud desktop, the cloud desktop automatically starts. Unit: milliseconds.
         * @return {@code this}
         */
        public Builder stopDuration(com.aliyun.ros.cdk.core.IResolvable stopDuration) {
            this.stopDuration = stopDuration;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getVolumeEncryptionEnabled}
         * @param volumeEncryptionEnabled Property volumeEncryptionEnabled: Specifies whether to enable disk encryption.
         * @return {@code this}
         */
        public Builder volumeEncryptionEnabled(java.lang.Boolean volumeEncryptionEnabled) {
            this.volumeEncryptionEnabled = volumeEncryptionEnabled;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getVolumeEncryptionEnabled}
         * @param volumeEncryptionEnabled Property volumeEncryptionEnabled: Specifies whether to enable disk encryption.
         * @return {@code this}
         */
        public Builder volumeEncryptionEnabled(com.aliyun.ros.cdk.core.IResolvable volumeEncryptionEnabled) {
            this.volumeEncryptionEnabled = volumeEncryptionEnabled;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getVolumeEncryptionKey}
         * @param volumeEncryptionKey Property volumeEncryptionKey: The ID of the Key Management Service (KMS) key that you want to use when disk encryption is enabled.
         * @return {@code this}
         */
        public Builder volumeEncryptionKey(java.lang.String volumeEncryptionKey) {
            this.volumeEncryptionKey = volumeEncryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link DesktopGroupProps#getVolumeEncryptionKey}
         * @param volumeEncryptionKey Property volumeEncryptionKey: The ID of the Key Management Service (KMS) key that you want to use when disk encryption is enabled.
         * @return {@code this}
         */
        public Builder volumeEncryptionKey(com.aliyun.ros.cdk.core.IResolvable volumeEncryptionKey) {
            this.volumeEncryptionKey = volumeEncryptionKey;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DesktopGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DesktopGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DesktopGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DesktopGroupProps {
        private final java.lang.Object bundleId;
        private final java.lang.Object chargeType;
        private final java.lang.Object officeSiteId;
        private final java.lang.Object policyGroupId;
        private final java.lang.Object allowAutoSetup;
        private final java.lang.Object allowBufferCount;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoRenew;
        private final java.lang.Object buyDesktopsCount;
        private final java.lang.Object comments;
        private final java.lang.Object connectDuration;
        private final java.lang.Object defaultInitDesktopCount;
        private final java.lang.Object desktopGroupName;
        private final java.lang.Object endUserIds;
        private final java.lang.Object groupVersion;
        private final java.lang.Object idleDisconnectDuration;
        private final java.lang.Object keepDuration;
        private final java.lang.Object maxDesktopsCount;
        private final java.lang.Object minDesktopsCount;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object resetType;
        private final java.lang.Object stopDuration;
        private final java.lang.Object volumeEncryptionEnabled;
        private final java.lang.Object volumeEncryptionKey;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bundleId = software.amazon.jsii.Kernel.get(this, "bundleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.officeSiteId = software.amazon.jsii.Kernel.get(this, "officeSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyGroupId = software.amazon.jsii.Kernel.get(this, "policyGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allowAutoSetup = software.amazon.jsii.Kernel.get(this, "allowAutoSetup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allowBufferCount = software.amazon.jsii.Kernel.get(this, "allowBufferCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.buyDesktopsCount = software.amazon.jsii.Kernel.get(this, "buyDesktopsCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.comments = software.amazon.jsii.Kernel.get(this, "comments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectDuration = software.amazon.jsii.Kernel.get(this, "connectDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultInitDesktopCount = software.amazon.jsii.Kernel.get(this, "defaultInitDesktopCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.desktopGroupName = software.amazon.jsii.Kernel.get(this, "desktopGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endUserIds = software.amazon.jsii.Kernel.get(this, "endUserIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupVersion = software.amazon.jsii.Kernel.get(this, "groupVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.idleDisconnectDuration = software.amazon.jsii.Kernel.get(this, "idleDisconnectDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keepDuration = software.amazon.jsii.Kernel.get(this, "keepDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxDesktopsCount = software.amazon.jsii.Kernel.get(this, "maxDesktopsCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.minDesktopsCount = software.amazon.jsii.Kernel.get(this, "minDesktopsCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resetType = software.amazon.jsii.Kernel.get(this, "resetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.stopDuration = software.amazon.jsii.Kernel.get(this, "stopDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.volumeEncryptionEnabled = software.amazon.jsii.Kernel.get(this, "volumeEncryptionEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.volumeEncryptionKey = software.amazon.jsii.Kernel.get(this, "volumeEncryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bundleId = java.util.Objects.requireNonNull(builder.bundleId, "bundleId is required");
            this.chargeType = java.util.Objects.requireNonNull(builder.chargeType, "chargeType is required");
            this.officeSiteId = java.util.Objects.requireNonNull(builder.officeSiteId, "officeSiteId is required");
            this.policyGroupId = java.util.Objects.requireNonNull(builder.policyGroupId, "policyGroupId is required");
            this.allowAutoSetup = builder.allowAutoSetup;
            this.allowBufferCount = builder.allowBufferCount;
            this.autoPay = builder.autoPay;
            this.autoRenew = builder.autoRenew;
            this.buyDesktopsCount = builder.buyDesktopsCount;
            this.comments = builder.comments;
            this.connectDuration = builder.connectDuration;
            this.defaultInitDesktopCount = builder.defaultInitDesktopCount;
            this.desktopGroupName = builder.desktopGroupName;
            this.endUserIds = builder.endUserIds;
            this.groupVersion = builder.groupVersion;
            this.idleDisconnectDuration = builder.idleDisconnectDuration;
            this.keepDuration = builder.keepDuration;
            this.maxDesktopsCount = builder.maxDesktopsCount;
            this.minDesktopsCount = builder.minDesktopsCount;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.resetType = builder.resetType;
            this.stopDuration = builder.stopDuration;
            this.volumeEncryptionEnabled = builder.volumeEncryptionEnabled;
            this.volumeEncryptionKey = builder.volumeEncryptionKey;
        }

        @Override
        public final java.lang.Object getBundleId() {
            return this.bundleId;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getOfficeSiteId() {
            return this.officeSiteId;
        }

        @Override
        public final java.lang.Object getPolicyGroupId() {
            return this.policyGroupId;
        }

        @Override
        public final java.lang.Object getAllowAutoSetup() {
            return this.allowAutoSetup;
        }

        @Override
        public final java.lang.Object getAllowBufferCount() {
            return this.allowBufferCount;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getBuyDesktopsCount() {
            return this.buyDesktopsCount;
        }

        @Override
        public final java.lang.Object getComments() {
            return this.comments;
        }

        @Override
        public final java.lang.Object getConnectDuration() {
            return this.connectDuration;
        }

        @Override
        public final java.lang.Object getDefaultInitDesktopCount() {
            return this.defaultInitDesktopCount;
        }

        @Override
        public final java.lang.Object getDesktopGroupName() {
            return this.desktopGroupName;
        }

        @Override
        public final java.lang.Object getEndUserIds() {
            return this.endUserIds;
        }

        @Override
        public final java.lang.Object getGroupVersion() {
            return this.groupVersion;
        }

        @Override
        public final java.lang.Object getIdleDisconnectDuration() {
            return this.idleDisconnectDuration;
        }

        @Override
        public final java.lang.Object getKeepDuration() {
            return this.keepDuration;
        }

        @Override
        public final java.lang.Object getMaxDesktopsCount() {
            return this.maxDesktopsCount;
        }

        @Override
        public final java.lang.Object getMinDesktopsCount() {
            return this.minDesktopsCount;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getResetType() {
            return this.resetType;
        }

        @Override
        public final java.lang.Object getStopDuration() {
            return this.stopDuration;
        }

        @Override
        public final java.lang.Object getVolumeEncryptionEnabled() {
            return this.volumeEncryptionEnabled;
        }

        @Override
        public final java.lang.Object getVolumeEncryptionKey() {
            return this.volumeEncryptionKey;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bundleId", om.valueToTree(this.getBundleId()));
            data.set("chargeType", om.valueToTree(this.getChargeType()));
            data.set("officeSiteId", om.valueToTree(this.getOfficeSiteId()));
            data.set("policyGroupId", om.valueToTree(this.getPolicyGroupId()));
            if (this.getAllowAutoSetup() != null) {
                data.set("allowAutoSetup", om.valueToTree(this.getAllowAutoSetup()));
            }
            if (this.getAllowBufferCount() != null) {
                data.set("allowBufferCount", om.valueToTree(this.getAllowBufferCount()));
            }
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getBuyDesktopsCount() != null) {
                data.set("buyDesktopsCount", om.valueToTree(this.getBuyDesktopsCount()));
            }
            if (this.getComments() != null) {
                data.set("comments", om.valueToTree(this.getComments()));
            }
            if (this.getConnectDuration() != null) {
                data.set("connectDuration", om.valueToTree(this.getConnectDuration()));
            }
            if (this.getDefaultInitDesktopCount() != null) {
                data.set("defaultInitDesktopCount", om.valueToTree(this.getDefaultInitDesktopCount()));
            }
            if (this.getDesktopGroupName() != null) {
                data.set("desktopGroupName", om.valueToTree(this.getDesktopGroupName()));
            }
            if (this.getEndUserIds() != null) {
                data.set("endUserIds", om.valueToTree(this.getEndUserIds()));
            }
            if (this.getGroupVersion() != null) {
                data.set("groupVersion", om.valueToTree(this.getGroupVersion()));
            }
            if (this.getIdleDisconnectDuration() != null) {
                data.set("idleDisconnectDuration", om.valueToTree(this.getIdleDisconnectDuration()));
            }
            if (this.getKeepDuration() != null) {
                data.set("keepDuration", om.valueToTree(this.getKeepDuration()));
            }
            if (this.getMaxDesktopsCount() != null) {
                data.set("maxDesktopsCount", om.valueToTree(this.getMaxDesktopsCount()));
            }
            if (this.getMinDesktopsCount() != null) {
                data.set("minDesktopsCount", om.valueToTree(this.getMinDesktopsCount()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getResetType() != null) {
                data.set("resetType", om.valueToTree(this.getResetType()));
            }
            if (this.getStopDuration() != null) {
                data.set("stopDuration", om.valueToTree(this.getStopDuration()));
            }
            if (this.getVolumeEncryptionEnabled() != null) {
                data.set("volumeEncryptionEnabled", om.valueToTree(this.getVolumeEncryptionEnabled()));
            }
            if (this.getVolumeEncryptionKey() != null) {
                data.set("volumeEncryptionKey", om.valueToTree(this.getVolumeEncryptionKey()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecd.DesktopGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DesktopGroupProps.Jsii$Proxy that = (DesktopGroupProps.Jsii$Proxy) o;

            if (!bundleId.equals(that.bundleId)) return false;
            if (!chargeType.equals(that.chargeType)) return false;
            if (!officeSiteId.equals(that.officeSiteId)) return false;
            if (!policyGroupId.equals(that.policyGroupId)) return false;
            if (this.allowAutoSetup != null ? !this.allowAutoSetup.equals(that.allowAutoSetup) : that.allowAutoSetup != null) return false;
            if (this.allowBufferCount != null ? !this.allowBufferCount.equals(that.allowBufferCount) : that.allowBufferCount != null) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.buyDesktopsCount != null ? !this.buyDesktopsCount.equals(that.buyDesktopsCount) : that.buyDesktopsCount != null) return false;
            if (this.comments != null ? !this.comments.equals(that.comments) : that.comments != null) return false;
            if (this.connectDuration != null ? !this.connectDuration.equals(that.connectDuration) : that.connectDuration != null) return false;
            if (this.defaultInitDesktopCount != null ? !this.defaultInitDesktopCount.equals(that.defaultInitDesktopCount) : that.defaultInitDesktopCount != null) return false;
            if (this.desktopGroupName != null ? !this.desktopGroupName.equals(that.desktopGroupName) : that.desktopGroupName != null) return false;
            if (this.endUserIds != null ? !this.endUserIds.equals(that.endUserIds) : that.endUserIds != null) return false;
            if (this.groupVersion != null ? !this.groupVersion.equals(that.groupVersion) : that.groupVersion != null) return false;
            if (this.idleDisconnectDuration != null ? !this.idleDisconnectDuration.equals(that.idleDisconnectDuration) : that.idleDisconnectDuration != null) return false;
            if (this.keepDuration != null ? !this.keepDuration.equals(that.keepDuration) : that.keepDuration != null) return false;
            if (this.maxDesktopsCount != null ? !this.maxDesktopsCount.equals(that.maxDesktopsCount) : that.maxDesktopsCount != null) return false;
            if (this.minDesktopsCount != null ? !this.minDesktopsCount.equals(that.minDesktopsCount) : that.minDesktopsCount != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.resetType != null ? !this.resetType.equals(that.resetType) : that.resetType != null) return false;
            if (this.stopDuration != null ? !this.stopDuration.equals(that.stopDuration) : that.stopDuration != null) return false;
            if (this.volumeEncryptionEnabled != null ? !this.volumeEncryptionEnabled.equals(that.volumeEncryptionEnabled) : that.volumeEncryptionEnabled != null) return false;
            return this.volumeEncryptionKey != null ? this.volumeEncryptionKey.equals(that.volumeEncryptionKey) : that.volumeEncryptionKey == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bundleId.hashCode();
            result = 31 * result + (this.chargeType.hashCode());
            result = 31 * result + (this.officeSiteId.hashCode());
            result = 31 * result + (this.policyGroupId.hashCode());
            result = 31 * result + (this.allowAutoSetup != null ? this.allowAutoSetup.hashCode() : 0);
            result = 31 * result + (this.allowBufferCount != null ? this.allowBufferCount.hashCode() : 0);
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.buyDesktopsCount != null ? this.buyDesktopsCount.hashCode() : 0);
            result = 31 * result + (this.comments != null ? this.comments.hashCode() : 0);
            result = 31 * result + (this.connectDuration != null ? this.connectDuration.hashCode() : 0);
            result = 31 * result + (this.defaultInitDesktopCount != null ? this.defaultInitDesktopCount.hashCode() : 0);
            result = 31 * result + (this.desktopGroupName != null ? this.desktopGroupName.hashCode() : 0);
            result = 31 * result + (this.endUserIds != null ? this.endUserIds.hashCode() : 0);
            result = 31 * result + (this.groupVersion != null ? this.groupVersion.hashCode() : 0);
            result = 31 * result + (this.idleDisconnectDuration != null ? this.idleDisconnectDuration.hashCode() : 0);
            result = 31 * result + (this.keepDuration != null ? this.keepDuration.hashCode() : 0);
            result = 31 * result + (this.maxDesktopsCount != null ? this.maxDesktopsCount.hashCode() : 0);
            result = 31 * result + (this.minDesktopsCount != null ? this.minDesktopsCount.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.resetType != null ? this.resetType.hashCode() : 0);
            result = 31 * result + (this.stopDuration != null ? this.stopDuration.hashCode() : 0);
            result = 31 * result + (this.volumeEncryptionEnabled != null ? this.volumeEncryptionEnabled.hashCode() : 0);
            result = 31 * result + (this.volumeEncryptionKey != null ? this.volumeEncryptionKey.hashCode() : 0);
            return result;
        }
    }
}
