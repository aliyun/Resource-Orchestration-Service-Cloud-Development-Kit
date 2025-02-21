package com.aliyun.ros.cdk.ecd;

/**
 * Properties for defining a <code>RosDesktops</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-desktops
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:14.920Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.RosDesktopsProps")
@software.amazon.jsii.Jsii.Proxy(RosDesktopsProps.Jsii$Proxy.class)
public interface RosDesktopsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBundleId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOfficeSiteId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyGroupId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAmount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDesktopName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDesktopNameSuffix() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDirectoryId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndUserId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostname() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPromotionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecd.RosDesktops.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserAssignMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVolumeEncryptionEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVolumeEncryptionKey() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDesktopsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDesktopsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDesktopsProps> {
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
         * Sets the value of {@link RosDesktopsProps#getBundleId}
         * @param bundleId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bundleId(java.lang.String bundleId) {
            this.bundleId = bundleId;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getBundleId}
         * @param bundleId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bundleId(com.aliyun.ros.cdk.core.IResolvable bundleId) {
            this.bundleId = bundleId;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getOfficeSiteId}
         * @param officeSiteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder officeSiteId(java.lang.String officeSiteId) {
            this.officeSiteId = officeSiteId;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getOfficeSiteId}
         * @param officeSiteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder officeSiteId(com.aliyun.ros.cdk.core.IResolvable officeSiteId) {
            this.officeSiteId = officeSiteId;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getPolicyGroupId}
         * @param policyGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyGroupId(java.lang.String policyGroupId) {
            this.policyGroupId = policyGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getPolicyGroupId}
         * @param policyGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyGroupId(com.aliyun.ros.cdk.core.IResolvable policyGroupId) {
            this.policyGroupId = policyGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getAmount}
         * @param amount the value to be set.
         * @return {@code this}
         */
        public Builder amount(java.lang.Number amount) {
            this.amount = amount;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getAmount}
         * @param amount the value to be set.
         * @return {@code this}
         */
        public Builder amount(com.aliyun.ros.cdk.core.IResolvable amount) {
            this.amount = amount;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getChargeType}
         * @param chargeType the value to be set.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getChargeType}
         * @param chargeType the value to be set.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getDesktopName}
         * @param desktopName the value to be set.
         * @return {@code this}
         */
        public Builder desktopName(java.lang.String desktopName) {
            this.desktopName = desktopName;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getDesktopName}
         * @param desktopName the value to be set.
         * @return {@code this}
         */
        public Builder desktopName(com.aliyun.ros.cdk.core.IResolvable desktopName) {
            this.desktopName = desktopName;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getDesktopNameSuffix}
         * @param desktopNameSuffix the value to be set.
         * @return {@code this}
         */
        public Builder desktopNameSuffix(java.lang.Boolean desktopNameSuffix) {
            this.desktopNameSuffix = desktopNameSuffix;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getDesktopNameSuffix}
         * @param desktopNameSuffix the value to be set.
         * @return {@code this}
         */
        public Builder desktopNameSuffix(com.aliyun.ros.cdk.core.IResolvable desktopNameSuffix) {
            this.desktopNameSuffix = desktopNameSuffix;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getDirectoryId}
         * @param directoryId the value to be set.
         * @return {@code this}
         */
        public Builder directoryId(java.lang.String directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getDirectoryId}
         * @param directoryId the value to be set.
         * @return {@code this}
         */
        public Builder directoryId(com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getEndUserId}
         * @param endUserId the value to be set.
         * @return {@code this}
         */
        public Builder endUserId(java.util.List<? extends java.lang.Object> endUserId) {
            this.endUserId = endUserId;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getEndUserId}
         * @param endUserId the value to be set.
         * @return {@code this}
         */
        public Builder endUserId(com.aliyun.ros.cdk.core.IResolvable endUserId) {
            this.endUserId = endUserId;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getGroupId}
         * @param groupId the value to be set.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getGroupId}
         * @param groupId the value to be set.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getHostname}
         * @param hostname the value to be set.
         * @return {@code this}
         */
        public Builder hostname(java.lang.String hostname) {
            this.hostname = hostname;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getHostname}
         * @param hostname the value to be set.
         * @return {@code this}
         */
        public Builder hostname(com.aliyun.ros.cdk.core.IResolvable hostname) {
            this.hostname = hostname;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getPromotionId}
         * @param promotionId the value to be set.
         * @return {@code this}
         */
        public Builder promotionId(java.lang.String promotionId) {
            this.promotionId = promotionId;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getPromotionId}
         * @param promotionId the value to be set.
         * @return {@code this}
         */
        public Builder promotionId(com.aliyun.ros.cdk.core.IResolvable promotionId) {
            this.promotionId = promotionId;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecd.RosDesktops.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecd.RosDesktops.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getUserAssignMode}
         * @param userAssignMode the value to be set.
         * @return {@code this}
         */
        public Builder userAssignMode(java.lang.String userAssignMode) {
            this.userAssignMode = userAssignMode;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getUserAssignMode}
         * @param userAssignMode the value to be set.
         * @return {@code this}
         */
        public Builder userAssignMode(com.aliyun.ros.cdk.core.IResolvable userAssignMode) {
            this.userAssignMode = userAssignMode;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getUserName}
         * @param userName the value to be set.
         * @return {@code this}
         */
        public Builder userName(java.lang.String userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getUserName}
         * @param userName the value to be set.
         * @return {@code this}
         */
        public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getVolumeEncryptionEnabled}
         * @param volumeEncryptionEnabled the value to be set.
         * @return {@code this}
         */
        public Builder volumeEncryptionEnabled(java.lang.Boolean volumeEncryptionEnabled) {
            this.volumeEncryptionEnabled = volumeEncryptionEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getVolumeEncryptionEnabled}
         * @param volumeEncryptionEnabled the value to be set.
         * @return {@code this}
         */
        public Builder volumeEncryptionEnabled(com.aliyun.ros.cdk.core.IResolvable volumeEncryptionEnabled) {
            this.volumeEncryptionEnabled = volumeEncryptionEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getVolumeEncryptionKey}
         * @param volumeEncryptionKey the value to be set.
         * @return {@code this}
         */
        public Builder volumeEncryptionKey(java.lang.String volumeEncryptionKey) {
            this.volumeEncryptionKey = volumeEncryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getVolumeEncryptionKey}
         * @param volumeEncryptionKey the value to be set.
         * @return {@code this}
         */
        public Builder volumeEncryptionKey(com.aliyun.ros.cdk.core.IResolvable volumeEncryptionKey) {
            this.volumeEncryptionKey = volumeEncryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDesktopsProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDesktopsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDesktopsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDesktopsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDesktopsProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecd.RosDesktopsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDesktopsProps.Jsii$Proxy that = (RosDesktopsProps.Jsii$Proxy) o;

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
