package com.aliyun.ros.cdk.ecd;

/**
 * Properties for defining a <code>Desktops</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-desktops
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:08.899Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.DesktopsProps")
@software.amazon.jsii.Jsii.Proxy(DesktopsProps.Jsii$Proxy.class)
public interface DesktopsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bundleId: The ID of the cloud desktop template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBundleId();

    /**
     * Property officeSiteId: The ID of the workspace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOfficeSiteId();

    /**
     * Property policyGroupId: The ID of the policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyGroupId();

    /**
     * Property amount: The number of cloud desktops that you want to create.
     * <p>
     * Valid values: 1 to 300. Default
     * value: 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAmount() {
        return null;
    }

    /**
     * Property autoPay: Specifies whether to enable automatic payment.
     * <p>
     * Valid values:
     * true: enables automatic payment. You must make sure that your Alibaba Cloud account
     * has sufficient balance. If your Alibaba Cloud account does not have sufficient balance,
     * abnormal orders are generated.
     * false: disables automatic payment. In this case, an order is generated, and no payment
     * is automatically made. You can log on to the EDS console and complete the payment
     * based on the order ID on the Orders page.
     * Default value: true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     * Property autoRenew: Specifies whether to enable auto-renewal for the cloud desktop.
     * <p>
     * This parameter takes
     * effect only when the ChargeType parameter is set to PrePaid.
     * Valid values:
     * true: enables auto-renewal. The renewal duration is the same as the subscription duration
     * that you specified for the Period parameter when you purchased the cloud desktop.
     * false: does not enable auto-renewal.
     * Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property chargeType: The billing method of the cloud desktop.
     * <p>
     * Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     * Default value: PostPaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property desktopName: The name of the cloud desktop.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDesktopName() {
        return null;
    }

    /**
     * Property desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you create multiple cloud desktops at a time.
     * <p>
     * True: automatically adds a suffix.
     * False: does not add a suffix.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDesktopNameSuffix() {
        return null;
    }

    /**
     * Property directoryId: This parameter is not open for use.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDirectoryId() {
        return null;
    }

    /**
     * Property endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.
     * <p>
     * During the same period, only one user can use the desktop.
     * If EndUserId is not set, the created cloud desktop will not be assigned to any user.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndUserId() {
        return null;
    }

    /**
     * Property groupId: desktop group ID。 Note that the desktop group function is currently in the invitation test.
     * <p>
     * If you want to experience it, please submit a work order application.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupId() {
        return null;
    }

    /**
     * Property hostname: The custom hostname that you specify for the cloud desktop.
     * <p>
     * You can only specify the
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostname() {
        return null;
    }

    /**
     * Property period: The subscription duration.
     * <p>
     * The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
     * If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
     * If periodUnit is year, the valid range is 1 to 5
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: The unit of the subscription duration.
     * <p>
     * Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property promotionId: promotion id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPromotionId() {
        return null;
    }

    /**
     * Property tags: The list of desktops tags in the form of key/value pairs.
     * <p>
     * You can define a maximum of 20 tags for each desktops.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecd.RosDesktops.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property userAssignMode: The assignment mode of the cloud desktop.
     * <p>
     * Default value: ALL.
     * ALL: If you specify the EndUserId parameter, the cloud desktops that you create are
     * assigned to each regular user that you specify.
     * PER_USER: If you specify the EndUserId parameter, the cloud desktops that you create
     * are evenly assigned to all regular users that you specify. In this case, you must
     * make sure that the value of the Amount parameter can be divided by the N value of
     * the EndUserId.N parameter that you specify.
     * Note If you do not specify the EndUserId parameter, the cloud desktop that you create is
     * not assigned to regular users.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserAssignMode() {
        return null;
    }

    /**
     * Property userName: This parameter is not open for use.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserName() {
        return null;
    }

    /**
     * Property volumeEncryptionEnabled: Whether to enable disk encryption.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVolumeEncryptionEnabled() {
        return null;
    }

    /**
     * Property volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled.
     * <p>
     * It can be obtained through the ListKeys interface.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVolumeEncryptionKey() {
        return null;
    }

    /**
     * Property vpcId: This parameter is not open for use.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DesktopsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DesktopsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DesktopsProps> {
        java.lang.Object bundleId;
        java.lang.Object officeSiteId;
        java.lang.Object policyGroupId;
        java.lang.Object amount;
        java.lang.Object autoPay;
        java.lang.Object autoRenew;
        java.lang.Object chargeType;
        java.lang.Object desktopName;
        java.lang.Object desktopNameSuffix;
        java.lang.Object directoryId;
        java.lang.Object endUserId;
        java.lang.Object groupId;
        java.lang.Object hostname;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object promotionId;
        java.util.List<com.aliyun.ros.cdk.ecd.RosDesktops.TagsProperty> tags;
        java.lang.Object userAssignMode;
        java.lang.Object userName;
        java.lang.Object volumeEncryptionEnabled;
        java.lang.Object volumeEncryptionKey;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link DesktopsProps#getBundleId}
         * @param bundleId Property bundleId: The ID of the cloud desktop template. This parameter is required.
         * @return {@code this}
         */
        public Builder bundleId(java.lang.String bundleId) {
            this.bundleId = bundleId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getBundleId}
         * @param bundleId Property bundleId: The ID of the cloud desktop template. This parameter is required.
         * @return {@code this}
         */
        public Builder bundleId(com.aliyun.ros.cdk.core.IResolvable bundleId) {
            this.bundleId = bundleId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getOfficeSiteId}
         * @param officeSiteId Property officeSiteId: The ID of the workspace. This parameter is required.
         * @return {@code this}
         */
        public Builder officeSiteId(java.lang.String officeSiteId) {
            this.officeSiteId = officeSiteId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getOfficeSiteId}
         * @param officeSiteId Property officeSiteId: The ID of the workspace. This parameter is required.
         * @return {@code this}
         */
        public Builder officeSiteId(com.aliyun.ros.cdk.core.IResolvable officeSiteId) {
            this.officeSiteId = officeSiteId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getPolicyGroupId}
         * @param policyGroupId Property policyGroupId: The ID of the policy. This parameter is required.
         * @return {@code this}
         */
        public Builder policyGroupId(java.lang.String policyGroupId) {
            this.policyGroupId = policyGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getPolicyGroupId}
         * @param policyGroupId Property policyGroupId: The ID of the policy. This parameter is required.
         * @return {@code this}
         */
        public Builder policyGroupId(com.aliyun.ros.cdk.core.IResolvable policyGroupId) {
            this.policyGroupId = policyGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getAmount}
         * @param amount Property amount: The number of cloud desktops that you want to create.
         *               Valid values: 1 to 300. Default
         *               value: 1.
         * @return {@code this}
         */
        public Builder amount(java.lang.Number amount) {
            this.amount = amount;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getAmount}
         * @param amount Property amount: The number of cloud desktops that you want to create.
         *               Valid values: 1 to 300. Default
         *               value: 1.
         * @return {@code this}
         */
        public Builder amount(com.aliyun.ros.cdk.core.IResolvable amount) {
            this.amount = amount;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getAutoPay}
         * @param autoPay Property autoPay: Specifies whether to enable automatic payment.
         *                Valid values:
         *                true: enables automatic payment. You must make sure that your Alibaba Cloud account
         *                has sufficient balance. If your Alibaba Cloud account does not have sufficient balance,
         *                abnormal orders are generated.
         *                false: disables automatic payment. In this case, an order is generated, and no payment
         *                is automatically made. You can log on to the EDS console and complete the payment
         *                based on the order ID on the Orders page.
         *                Default value: true.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getAutoPay}
         * @param autoPay Property autoPay: Specifies whether to enable automatic payment.
         *                Valid values:
         *                true: enables automatic payment. You must make sure that your Alibaba Cloud account
         *                has sufficient balance. If your Alibaba Cloud account does not have sufficient balance,
         *                abnormal orders are generated.
         *                false: disables automatic payment. In this case, an order is generated, and no payment
         *                is automatically made. You can log on to the EDS console and complete the payment
         *                based on the order ID on the Orders page.
         *                Default value: true.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal for the cloud desktop.
         *                  This parameter takes
         *                  effect only when the ChargeType parameter is set to PrePaid.
         *                  Valid values:
         *                  true: enables auto-renewal. The renewal duration is the same as the subscription duration
         *                  that you specified for the Period parameter when you purchased the cloud desktop.
         *                  false: does not enable auto-renewal.
         *                  Default value: false.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal for the cloud desktop.
         *                  This parameter takes
         *                  effect only when the ChargeType parameter is set to PrePaid.
         *                  Valid values:
         *                  true: enables auto-renewal. The renewal duration is the same as the subscription duration
         *                  that you specified for the Period parameter when you purchased the cloud desktop.
         *                  false: does not enable auto-renewal.
         *                  Default value: false.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the cloud desktop.
         *                   Valid values:
         *                   PostPaid: pay-as-you-go
         *                   PrePaid: subscription
         *                   Default value: PostPaid.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the cloud desktop.
         *                   Valid values:
         *                   PostPaid: pay-as-you-go
         *                   PrePaid: subscription
         *                   Default value: PostPaid.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getDesktopName}
         * @param desktopName Property desktopName: The name of the cloud desktop.
         * @return {@code this}
         */
        public Builder desktopName(java.lang.String desktopName) {
            this.desktopName = desktopName;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getDesktopName}
         * @param desktopName Property desktopName: The name of the cloud desktop.
         * @return {@code this}
         */
        public Builder desktopName(com.aliyun.ros.cdk.core.IResolvable desktopName) {
            this.desktopName = desktopName;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getDesktopNameSuffix}
         * @param desktopNameSuffix Property desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you create multiple cloud desktops at a time.
         *                          True: automatically adds a suffix.
         *                          False: does not add a suffix.
         * @return {@code this}
         */
        public Builder desktopNameSuffix(java.lang.Boolean desktopNameSuffix) {
            this.desktopNameSuffix = desktopNameSuffix;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getDesktopNameSuffix}
         * @param desktopNameSuffix Property desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you create multiple cloud desktops at a time.
         *                          True: automatically adds a suffix.
         *                          False: does not add a suffix.
         * @return {@code this}
         */
        public Builder desktopNameSuffix(com.aliyun.ros.cdk.core.IResolvable desktopNameSuffix) {
            this.desktopNameSuffix = desktopNameSuffix;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getDirectoryId}
         * @param directoryId Property directoryId: This parameter is not open for use.
         * @return {@code this}
         */
        public Builder directoryId(java.lang.String directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getDirectoryId}
         * @param directoryId Property directoryId: This parameter is not open for use.
         * @return {@code this}
         */
        public Builder directoryId(com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getEndUserId}
         * @param endUserId Property endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.
         *                  During the same period, only one user can use the desktop.
         *                  If EndUserId is not set, the created cloud desktop will not be assigned to any user.
         * @return {@code this}
         */
        public Builder endUserId(java.util.List<? extends java.lang.Object> endUserId) {
            this.endUserId = endUserId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getEndUserId}
         * @param endUserId Property endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.
         *                  During the same period, only one user can use the desktop.
         *                  If EndUserId is not set, the created cloud desktop will not be assigned to any user.
         * @return {@code this}
         */
        public Builder endUserId(com.aliyun.ros.cdk.core.IResolvable endUserId) {
            this.endUserId = endUserId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getGroupId}
         * @param groupId Property groupId: desktop group ID。 Note that the desktop group function is currently in the invitation test.
         *                If you want to experience it, please submit a work order application.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getGroupId}
         * @param groupId Property groupId: desktop group ID。 Note that the desktop group function is currently in the invitation test.
         *                If you want to experience it, please submit a work order application.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getHostname}
         * @param hostname Property hostname: The custom hostname that you specify for the cloud desktop.
         *                 You can only specify the
         *                 hostname of a Windows cloud desktop in the workspace of the enterprise AD account
         *                 type.
         *                 The hostname must meet the following requirements:
         *                 The hostname must be 2 to 15 characters in length.
         *                 The hostname can contain letters, digits, and hyphens (-). It cannot start or end
         *                 with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
         *                 If you create multiple cloud desktops, you can specify the names of the cloud desktops
         *                 in the name_prefix[begin_number,bits]name_suffix format. For example, if you set Hostname to ecd--1,4-test, the hostname of the first cloud desktop is ecd-0001-test and the hostname of
         *                 the second cloud desktop is ecd-0002-test. The rest may be deduced by analogy.
         *                 name_prefix: the prefix of the hostname.
         *                 [begin_number,bits]: the ordered numbers in the hostname. begin_number: the start number. Valid values:
         *                 0 to 999999. Default value: 0. bits: the digit. Valid values: 1 to 6. Default value:
         *                 6.
         *                 name_suffix: the suffix of the hostname.
         * @return {@code this}
         */
        public Builder hostname(java.lang.String hostname) {
            this.hostname = hostname;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getHostname}
         * @param hostname Property hostname: The custom hostname that you specify for the cloud desktop.
         *                 You can only specify the
         *                 hostname of a Windows cloud desktop in the workspace of the enterprise AD account
         *                 type.
         *                 The hostname must meet the following requirements:
         *                 The hostname must be 2 to 15 characters in length.
         *                 The hostname can contain letters, digits, and hyphens (-). It cannot start or end
         *                 with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
         *                 If you create multiple cloud desktops, you can specify the names of the cloud desktops
         *                 in the name_prefix[begin_number,bits]name_suffix format. For example, if you set Hostname to ecd--1,4-test, the hostname of the first cloud desktop is ecd-0001-test and the hostname of
         *                 the second cloud desktop is ecd-0002-test. The rest may be deduced by analogy.
         *                 name_prefix: the prefix of the hostname.
         *                 [begin_number,bits]: the ordered numbers in the hostname. begin_number: the start number. Valid values:
         *                 0 to 999999. Default value: 0. bits: the digit. Valid values: 1 to 6. Default value:
         *                 6.
         *                 name_suffix: the suffix of the hostname.
         * @return {@code this}
         */
        public Builder hostname(com.aliyun.ros.cdk.core.IResolvable hostname) {
            this.hostname = hostname;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getPeriod}
         * @param period Property period: The subscription duration.
         *               The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
         *               If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
         *               If periodUnit is year, the valid range is 1 to 5
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getPeriod}
         * @param period Property period: The subscription duration.
         *               The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
         *               If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
         *               If periodUnit is year, the valid range is 1 to 5
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the subscription duration.
         *                   Valid values:
         *                   Month
         *                   Year
         *                   Default value: Month.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the subscription duration.
         *                   Valid values:
         *                   Month
         *                   Year
         *                   Default value: Month.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getPromotionId}
         * @param promotionId Property promotionId: promotion id.
         * @return {@code this}
         */
        public Builder promotionId(java.lang.String promotionId) {
            this.promotionId = promotionId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getPromotionId}
         * @param promotionId Property promotionId: promotion id.
         * @return {@code this}
         */
        public Builder promotionId(com.aliyun.ros.cdk.core.IResolvable promotionId) {
            this.promotionId = promotionId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getTags}
         * @param tags Property tags: The list of desktops tags in the form of key/value pairs.
         *             You can define a maximum of 20 tags for each desktops.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecd.RosDesktops.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecd.RosDesktops.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getUserAssignMode}
         * @param userAssignMode Property userAssignMode: The assignment mode of the cloud desktop.
         *                       Default value: ALL.
         *                       ALL: If you specify the EndUserId parameter, the cloud desktops that you create are
         *                       assigned to each regular user that you specify.
         *                       PER_USER: If you specify the EndUserId parameter, the cloud desktops that you create
         *                       are evenly assigned to all regular users that you specify. In this case, you must
         *                       make sure that the value of the Amount parameter can be divided by the N value of
         *                       the EndUserId.N parameter that you specify.
         *                       Note If you do not specify the EndUserId parameter, the cloud desktop that you create is
         *                       not assigned to regular users.
         * @return {@code this}
         */
        public Builder userAssignMode(java.lang.String userAssignMode) {
            this.userAssignMode = userAssignMode;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getUserAssignMode}
         * @param userAssignMode Property userAssignMode: The assignment mode of the cloud desktop.
         *                       Default value: ALL.
         *                       ALL: If you specify the EndUserId parameter, the cloud desktops that you create are
         *                       assigned to each regular user that you specify.
         *                       PER_USER: If you specify the EndUserId parameter, the cloud desktops that you create
         *                       are evenly assigned to all regular users that you specify. In this case, you must
         *                       make sure that the value of the Amount parameter can be divided by the N value of
         *                       the EndUserId.N parameter that you specify.
         *                       Note If you do not specify the EndUserId parameter, the cloud desktop that you create is
         *                       not assigned to regular users.
         * @return {@code this}
         */
        public Builder userAssignMode(com.aliyun.ros.cdk.core.IResolvable userAssignMode) {
            this.userAssignMode = userAssignMode;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getUserName}
         * @param userName Property userName: This parameter is not open for use.
         * @return {@code this}
         */
        public Builder userName(java.lang.String userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getUserName}
         * @param userName Property userName: This parameter is not open for use.
         * @return {@code this}
         */
        public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getVolumeEncryptionEnabled}
         * @param volumeEncryptionEnabled Property volumeEncryptionEnabled: Whether to enable disk encryption.
         * @return {@code this}
         */
        public Builder volumeEncryptionEnabled(java.lang.Boolean volumeEncryptionEnabled) {
            this.volumeEncryptionEnabled = volumeEncryptionEnabled;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getVolumeEncryptionEnabled}
         * @param volumeEncryptionEnabled Property volumeEncryptionEnabled: Whether to enable disk encryption.
         * @return {@code this}
         */
        public Builder volumeEncryptionEnabled(com.aliyun.ros.cdk.core.IResolvable volumeEncryptionEnabled) {
            this.volumeEncryptionEnabled = volumeEncryptionEnabled;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getVolumeEncryptionKey}
         * @param volumeEncryptionKey Property volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled.
         *                            It can be obtained through the ListKeys interface.
         * @return {@code this}
         */
        public Builder volumeEncryptionKey(java.lang.String volumeEncryptionKey) {
            this.volumeEncryptionKey = volumeEncryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getVolumeEncryptionKey}
         * @param volumeEncryptionKey Property volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled.
         *                            It can be obtained through the ListKeys interface.
         * @return {@code this}
         */
        public Builder volumeEncryptionKey(com.aliyun.ros.cdk.core.IResolvable volumeEncryptionKey) {
            this.volumeEncryptionKey = volumeEncryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getVpcId}
         * @param vpcId Property vpcId: This parameter is not open for use.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link DesktopsProps#getVpcId}
         * @param vpcId Property vpcId: This parameter is not open for use.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DesktopsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DesktopsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DesktopsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DesktopsProps {
        private final java.lang.Object bundleId;
        private final java.lang.Object officeSiteId;
        private final java.lang.Object policyGroupId;
        private final java.lang.Object amount;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoRenew;
        private final java.lang.Object chargeType;
        private final java.lang.Object desktopName;
        private final java.lang.Object desktopNameSuffix;
        private final java.lang.Object directoryId;
        private final java.lang.Object endUserId;
        private final java.lang.Object groupId;
        private final java.lang.Object hostname;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object promotionId;
        private final java.util.List<com.aliyun.ros.cdk.ecd.RosDesktops.TagsProperty> tags;
        private final java.lang.Object userAssignMode;
        private final java.lang.Object userName;
        private final java.lang.Object volumeEncryptionEnabled;
        private final java.lang.Object volumeEncryptionKey;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bundleId = software.amazon.jsii.Kernel.get(this, "bundleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.officeSiteId = software.amazon.jsii.Kernel.get(this, "officeSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyGroupId = software.amazon.jsii.Kernel.get(this, "policyGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.amount = software.amazon.jsii.Kernel.get(this, "amount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.desktopName = software.amazon.jsii.Kernel.get(this, "desktopName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.desktopNameSuffix = software.amazon.jsii.Kernel.get(this, "desktopNameSuffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.directoryId = software.amazon.jsii.Kernel.get(this, "directoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endUserId = software.amazon.jsii.Kernel.get(this, "endUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostname = software.amazon.jsii.Kernel.get(this, "hostname", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.promotionId = software.amazon.jsii.Kernel.get(this, "promotionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecd.RosDesktops.TagsProperty.class)));
            this.userAssignMode = software.amazon.jsii.Kernel.get(this, "userAssignMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.volumeEncryptionEnabled = software.amazon.jsii.Kernel.get(this, "volumeEncryptionEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.volumeEncryptionKey = software.amazon.jsii.Kernel.get(this, "volumeEncryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bundleId = java.util.Objects.requireNonNull(builder.bundleId, "bundleId is required");
            this.officeSiteId = java.util.Objects.requireNonNull(builder.officeSiteId, "officeSiteId is required");
            this.policyGroupId = java.util.Objects.requireNonNull(builder.policyGroupId, "policyGroupId is required");
            this.amount = builder.amount;
            this.autoPay = builder.autoPay;
            this.autoRenew = builder.autoRenew;
            this.chargeType = builder.chargeType;
            this.desktopName = builder.desktopName;
            this.desktopNameSuffix = builder.desktopNameSuffix;
            this.directoryId = builder.directoryId;
            this.endUserId = builder.endUserId;
            this.groupId = builder.groupId;
            this.hostname = builder.hostname;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.promotionId = builder.promotionId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecd.RosDesktops.TagsProperty>)builder.tags;
            this.userAssignMode = builder.userAssignMode;
            this.userName = builder.userName;
            this.volumeEncryptionEnabled = builder.volumeEncryptionEnabled;
            this.volumeEncryptionKey = builder.volumeEncryptionKey;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getBundleId() {
            return this.bundleId;
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
        public final java.lang.Object getAmount() {
            return this.amount;
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
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getDesktopName() {
            return this.desktopName;
        }

        @Override
        public final java.lang.Object getDesktopNameSuffix() {
            return this.desktopNameSuffix;
        }

        @Override
        public final java.lang.Object getDirectoryId() {
            return this.directoryId;
        }

        @Override
        public final java.lang.Object getEndUserId() {
            return this.endUserId;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getHostname() {
            return this.hostname;
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
        public final java.lang.Object getPromotionId() {
            return this.promotionId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecd.RosDesktops.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getUserAssignMode() {
            return this.userAssignMode;
        }

        @Override
        public final java.lang.Object getUserName() {
            return this.userName;
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
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bundleId", om.valueToTree(this.getBundleId()));
            data.set("officeSiteId", om.valueToTree(this.getOfficeSiteId()));
            data.set("policyGroupId", om.valueToTree(this.getPolicyGroupId()));
            if (this.getAmount() != null) {
                data.set("amount", om.valueToTree(this.getAmount()));
            }
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getDesktopName() != null) {
                data.set("desktopName", om.valueToTree(this.getDesktopName()));
            }
            if (this.getDesktopNameSuffix() != null) {
                data.set("desktopNameSuffix", om.valueToTree(this.getDesktopNameSuffix()));
            }
            if (this.getDirectoryId() != null) {
                data.set("directoryId", om.valueToTree(this.getDirectoryId()));
            }
            if (this.getEndUserId() != null) {
                data.set("endUserId", om.valueToTree(this.getEndUserId()));
            }
            if (this.getGroupId() != null) {
                data.set("groupId", om.valueToTree(this.getGroupId()));
            }
            if (this.getHostname() != null) {
                data.set("hostname", om.valueToTree(this.getHostname()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getPromotionId() != null) {
                data.set("promotionId", om.valueToTree(this.getPromotionId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getUserAssignMode() != null) {
                data.set("userAssignMode", om.valueToTree(this.getUserAssignMode()));
            }
            if (this.getUserName() != null) {
                data.set("userName", om.valueToTree(this.getUserName()));
            }
            if (this.getVolumeEncryptionEnabled() != null) {
                data.set("volumeEncryptionEnabled", om.valueToTree(this.getVolumeEncryptionEnabled()));
            }
            if (this.getVolumeEncryptionKey() != null) {
                data.set("volumeEncryptionKey", om.valueToTree(this.getVolumeEncryptionKey()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecd.DesktopsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DesktopsProps.Jsii$Proxy that = (DesktopsProps.Jsii$Proxy) o;

            if (!bundleId.equals(that.bundleId)) return false;
            if (!officeSiteId.equals(that.officeSiteId)) return false;
            if (!policyGroupId.equals(that.policyGroupId)) return false;
            if (this.amount != null ? !this.amount.equals(that.amount) : that.amount != null) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.desktopName != null ? !this.desktopName.equals(that.desktopName) : that.desktopName != null) return false;
            if (this.desktopNameSuffix != null ? !this.desktopNameSuffix.equals(that.desktopNameSuffix) : that.desktopNameSuffix != null) return false;
            if (this.directoryId != null ? !this.directoryId.equals(that.directoryId) : that.directoryId != null) return false;
            if (this.endUserId != null ? !this.endUserId.equals(that.endUserId) : that.endUserId != null) return false;
            if (this.groupId != null ? !this.groupId.equals(that.groupId) : that.groupId != null) return false;
            if (this.hostname != null ? !this.hostname.equals(that.hostname) : that.hostname != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.promotionId != null ? !this.promotionId.equals(that.promotionId) : that.promotionId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.userAssignMode != null ? !this.userAssignMode.equals(that.userAssignMode) : that.userAssignMode != null) return false;
            if (this.userName != null ? !this.userName.equals(that.userName) : that.userName != null) return false;
            if (this.volumeEncryptionEnabled != null ? !this.volumeEncryptionEnabled.equals(that.volumeEncryptionEnabled) : that.volumeEncryptionEnabled != null) return false;
            if (this.volumeEncryptionKey != null ? !this.volumeEncryptionKey.equals(that.volumeEncryptionKey) : that.volumeEncryptionKey != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bundleId.hashCode();
            result = 31 * result + (this.officeSiteId.hashCode());
            result = 31 * result + (this.policyGroupId.hashCode());
            result = 31 * result + (this.amount != null ? this.amount.hashCode() : 0);
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.desktopName != null ? this.desktopName.hashCode() : 0);
            result = 31 * result + (this.desktopNameSuffix != null ? this.desktopNameSuffix.hashCode() : 0);
            result = 31 * result + (this.directoryId != null ? this.directoryId.hashCode() : 0);
            result = 31 * result + (this.endUserId != null ? this.endUserId.hashCode() : 0);
            result = 31 * result + (this.groupId != null ? this.groupId.hashCode() : 0);
            result = 31 * result + (this.hostname != null ? this.hostname.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.promotionId != null ? this.promotionId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.userAssignMode != null ? this.userAssignMode.hashCode() : 0);
            result = 31 * result + (this.userName != null ? this.userName.hashCode() : 0);
            result = 31 * result + (this.volumeEncryptionEnabled != null ? this.volumeEncryptionEnabled.hashCode() : 0);
            result = 31 * result + (this.volumeEncryptionKey != null ? this.volumeEncryptionKey.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
