package com.aliyun.ros.cdk.emr;

/**
 * Properties for defining a <code>RosStarRocksInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-starrocksinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.292Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosStarRocksInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosStarRocksInstanceProps.Jsii$Proxy.class)
public interface RosStarRocksInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAdminPassword();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterZoneId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPackageType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRunMode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackendNodeGroups() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFrontendNodeGroups() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKmsKeyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getObserverNodeGroups() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOrderId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOssAccessingRoleName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPromotionOptionNo() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.emr.RosStarRocksInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVswitches() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosStarRocksInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosStarRocksInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosStarRocksInstanceProps> {
        java.lang.Object adminPassword;
        java.lang.Object clusterZoneId;
        java.lang.Object instanceName;
        java.lang.Object packageType;
        java.lang.Object payType;
        java.lang.Object runMode;
        java.lang.Object version;
        java.lang.Object vpcId;
        java.lang.Object autoRenew;
        java.lang.Object backendNodeGroups;
        java.lang.Object duration;
        java.lang.Object encrypted;
        java.lang.Object frontendNodeGroups;
        java.lang.Object kmsKeyId;
        java.lang.Object observerNodeGroups;
        java.lang.Object orderId;
        java.lang.Object ossAccessingRoleName;
        java.lang.Object pricingCycle;
        java.lang.Object promotionOptionNo;
        java.lang.Object resourceGroupId;
        java.lang.Object resourceType;
        java.util.List<com.aliyun.ros.cdk.emr.RosStarRocksInstance.TagsProperty> tags;
        java.lang.Object vswitches;

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getAdminPassword}
         * @param adminPassword the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder adminPassword(java.lang.String adminPassword) {
            this.adminPassword = adminPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getAdminPassword}
         * @param adminPassword the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder adminPassword(com.aliyun.ros.cdk.core.IResolvable adminPassword) {
            this.adminPassword = adminPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getClusterZoneId}
         * @param clusterZoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterZoneId(java.lang.String clusterZoneId) {
            this.clusterZoneId = clusterZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getClusterZoneId}
         * @param clusterZoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterZoneId(com.aliyun.ros.cdk.core.IResolvable clusterZoneId) {
            this.clusterZoneId = clusterZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getInstanceName}
         * @param instanceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getInstanceName}
         * @param instanceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getPackageType}
         * @param packageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder packageType(java.lang.String packageType) {
            this.packageType = packageType;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getPackageType}
         * @param packageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder packageType(com.aliyun.ros.cdk.core.IResolvable packageType) {
            this.packageType = packageType;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getRunMode}
         * @param runMode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder runMode(java.lang.String runMode) {
            this.runMode = runMode;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getRunMode}
         * @param runMode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder runMode(com.aliyun.ros.cdk.core.IResolvable runMode) {
            this.runMode = runMode;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getVersion}
         * @param version the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder version(java.lang.String version) {
            this.version = version;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getVersion}
         * @param version the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
            this.version = version;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getBackendNodeGroups}
         * @param backendNodeGroups the value to be set.
         * @return {@code this}
         */
        public Builder backendNodeGroups(com.aliyun.ros.cdk.core.IResolvable backendNodeGroups) {
            this.backendNodeGroups = backendNodeGroups;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getBackendNodeGroups}
         * @param backendNodeGroups the value to be set.
         * @return {@code this}
         */
        public Builder backendNodeGroups(java.util.List<? extends java.lang.Object> backendNodeGroups) {
            this.backendNodeGroups = backendNodeGroups;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getDuration}
         * @param duration the value to be set.
         * @return {@code this}
         */
        public Builder duration(java.lang.Number duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getDuration}
         * @param duration the value to be set.
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getEncrypted}
         * @param encrypted the value to be set.
         * @return {@code this}
         */
        public Builder encrypted(java.lang.Boolean encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getEncrypted}
         * @param encrypted the value to be set.
         * @return {@code this}
         */
        public Builder encrypted(com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getFrontendNodeGroups}
         * @param frontendNodeGroups the value to be set.
         * @return {@code this}
         */
        public Builder frontendNodeGroups(com.aliyun.ros.cdk.core.IResolvable frontendNodeGroups) {
            this.frontendNodeGroups = frontendNodeGroups;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getFrontendNodeGroups}
         * @param frontendNodeGroups the value to be set.
         * @return {@code this}
         */
        public Builder frontendNodeGroups(java.util.List<? extends java.lang.Object> frontendNodeGroups) {
            this.frontendNodeGroups = frontendNodeGroups;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getKmsKeyId}
         * @param kmsKeyId the value to be set.
         * @return {@code this}
         */
        public Builder kmsKeyId(java.lang.String kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getKmsKeyId}
         * @param kmsKeyId the value to be set.
         * @return {@code this}
         */
        public Builder kmsKeyId(com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getObserverNodeGroups}
         * @param observerNodeGroups the value to be set.
         * @return {@code this}
         */
        public Builder observerNodeGroups(com.aliyun.ros.cdk.core.IResolvable observerNodeGroups) {
            this.observerNodeGroups = observerNodeGroups;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getObserverNodeGroups}
         * @param observerNodeGroups the value to be set.
         * @return {@code this}
         */
        public Builder observerNodeGroups(java.util.List<? extends java.lang.Object> observerNodeGroups) {
            this.observerNodeGroups = observerNodeGroups;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getOrderId}
         * @param orderId the value to be set.
         * @return {@code this}
         */
        public Builder orderId(java.lang.Number orderId) {
            this.orderId = orderId;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getOrderId}
         * @param orderId the value to be set.
         * @return {@code this}
         */
        public Builder orderId(com.aliyun.ros.cdk.core.IResolvable orderId) {
            this.orderId = orderId;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getOssAccessingRoleName}
         * @param ossAccessingRoleName the value to be set.
         * @return {@code this}
         */
        public Builder ossAccessingRoleName(java.lang.String ossAccessingRoleName) {
            this.ossAccessingRoleName = ossAccessingRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getOssAccessingRoleName}
         * @param ossAccessingRoleName the value to be set.
         * @return {@code this}
         */
        public Builder ossAccessingRoleName(com.aliyun.ros.cdk.core.IResolvable ossAccessingRoleName) {
            this.ossAccessingRoleName = ossAccessingRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getPricingCycle}
         * @param pricingCycle the value to be set.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getPricingCycle}
         * @param pricingCycle the value to be set.
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getPromotionOptionNo}
         * @param promotionOptionNo the value to be set.
         * @return {@code this}
         */
        public Builder promotionOptionNo(java.lang.String promotionOptionNo) {
            this.promotionOptionNo = promotionOptionNo;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getPromotionOptionNo}
         * @param promotionOptionNo the value to be set.
         * @return {@code this}
         */
        public Builder promotionOptionNo(com.aliyun.ros.cdk.core.IResolvable promotionOptionNo) {
            this.promotionOptionNo = promotionOptionNo;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getResourceType}
         * @param resourceType the value to be set.
         * @return {@code this}
         */
        public Builder resourceType(java.lang.String resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getResourceType}
         * @param resourceType the value to be set.
         * @return {@code this}
         */
        public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.emr.RosStarRocksInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.emr.RosStarRocksInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getVswitches}
         * @param vswitches the value to be set.
         * @return {@code this}
         */
        public Builder vswitches(com.aliyun.ros.cdk.core.IResolvable vswitches) {
            this.vswitches = vswitches;
            return this;
        }

        /**
         * Sets the value of {@link RosStarRocksInstanceProps#getVswitches}
         * @param vswitches the value to be set.
         * @return {@code this}
         */
        public Builder vswitches(java.util.List<? extends java.lang.Object> vswitches) {
            this.vswitches = vswitches;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosStarRocksInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosStarRocksInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosStarRocksInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosStarRocksInstanceProps {
        private final java.lang.Object adminPassword;
        private final java.lang.Object clusterZoneId;
        private final java.lang.Object instanceName;
        private final java.lang.Object packageType;
        private final java.lang.Object payType;
        private final java.lang.Object runMode;
        private final java.lang.Object version;
        private final java.lang.Object vpcId;
        private final java.lang.Object autoRenew;
        private final java.lang.Object backendNodeGroups;
        private final java.lang.Object duration;
        private final java.lang.Object encrypted;
        private final java.lang.Object frontendNodeGroups;
        private final java.lang.Object kmsKeyId;
        private final java.lang.Object observerNodeGroups;
        private final java.lang.Object orderId;
        private final java.lang.Object ossAccessingRoleName;
        private final java.lang.Object pricingCycle;
        private final java.lang.Object promotionOptionNo;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object resourceType;
        private final java.util.List<com.aliyun.ros.cdk.emr.RosStarRocksInstance.TagsProperty> tags;
        private final java.lang.Object vswitches;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.adminPassword = software.amazon.jsii.Kernel.get(this, "adminPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterZoneId = software.amazon.jsii.Kernel.get(this, "clusterZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.packageType = software.amazon.jsii.Kernel.get(this, "packageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.runMode = software.amazon.jsii.Kernel.get(this, "runMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backendNodeGroups = software.amazon.jsii.Kernel.get(this, "backendNodeGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encrypted = software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.frontendNodeGroups = software.amazon.jsii.Kernel.get(this, "frontendNodeGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kmsKeyId = software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.observerNodeGroups = software.amazon.jsii.Kernel.get(this, "observerNodeGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.orderId = software.amazon.jsii.Kernel.get(this, "orderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ossAccessingRoleName = software.amazon.jsii.Kernel.get(this, "ossAccessingRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.promotionOptionNo = software.amazon.jsii.Kernel.get(this, "promotionOptionNo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.RosStarRocksInstance.TagsProperty.class)));
            this.vswitches = software.amazon.jsii.Kernel.get(this, "vswitches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.adminPassword = java.util.Objects.requireNonNull(builder.adminPassword, "adminPassword is required");
            this.clusterZoneId = java.util.Objects.requireNonNull(builder.clusterZoneId, "clusterZoneId is required");
            this.instanceName = java.util.Objects.requireNonNull(builder.instanceName, "instanceName is required");
            this.packageType = java.util.Objects.requireNonNull(builder.packageType, "packageType is required");
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.runMode = java.util.Objects.requireNonNull(builder.runMode, "runMode is required");
            this.version = java.util.Objects.requireNonNull(builder.version, "version is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.autoRenew = builder.autoRenew;
            this.backendNodeGroups = builder.backendNodeGroups;
            this.duration = builder.duration;
            this.encrypted = builder.encrypted;
            this.frontendNodeGroups = builder.frontendNodeGroups;
            this.kmsKeyId = builder.kmsKeyId;
            this.observerNodeGroups = builder.observerNodeGroups;
            this.orderId = builder.orderId;
            this.ossAccessingRoleName = builder.ossAccessingRoleName;
            this.pricingCycle = builder.pricingCycle;
            this.promotionOptionNo = builder.promotionOptionNo;
            this.resourceGroupId = builder.resourceGroupId;
            this.resourceType = builder.resourceType;
            this.tags = (java.util.List<com.aliyun.ros.cdk.emr.RosStarRocksInstance.TagsProperty>)builder.tags;
            this.vswitches = builder.vswitches;
        }

        @Override
        public final java.lang.Object getAdminPassword() {
            return this.adminPassword;
        }

        @Override
        public final java.lang.Object getClusterZoneId() {
            return this.clusterZoneId;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getPackageType() {
            return this.packageType;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getRunMode() {
            return this.runMode;
        }

        @Override
        public final java.lang.Object getVersion() {
            return this.version;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getBackendNodeGroups() {
            return this.backendNodeGroups;
        }

        @Override
        public final java.lang.Object getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.Object getEncrypted() {
            return this.encrypted;
        }

        @Override
        public final java.lang.Object getFrontendNodeGroups() {
            return this.frontendNodeGroups;
        }

        @Override
        public final java.lang.Object getKmsKeyId() {
            return this.kmsKeyId;
        }

        @Override
        public final java.lang.Object getObserverNodeGroups() {
            return this.observerNodeGroups;
        }

        @Override
        public final java.lang.Object getOrderId() {
            return this.orderId;
        }

        @Override
        public final java.lang.Object getOssAccessingRoleName() {
            return this.ossAccessingRoleName;
        }

        @Override
        public final java.lang.Object getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        public final java.lang.Object getPromotionOptionNo() {
            return this.promotionOptionNo;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getResourceType() {
            return this.resourceType;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.emr.RosStarRocksInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVswitches() {
            return this.vswitches;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("adminPassword", om.valueToTree(this.getAdminPassword()));
            data.set("clusterZoneId", om.valueToTree(this.getClusterZoneId()));
            data.set("instanceName", om.valueToTree(this.getInstanceName()));
            data.set("packageType", om.valueToTree(this.getPackageType()));
            data.set("payType", om.valueToTree(this.getPayType()));
            data.set("runMode", om.valueToTree(this.getRunMode()));
            data.set("version", om.valueToTree(this.getVersion()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getBackendNodeGroups() != null) {
                data.set("backendNodeGroups", om.valueToTree(this.getBackendNodeGroups()));
            }
            if (this.getDuration() != null) {
                data.set("duration", om.valueToTree(this.getDuration()));
            }
            if (this.getEncrypted() != null) {
                data.set("encrypted", om.valueToTree(this.getEncrypted()));
            }
            if (this.getFrontendNodeGroups() != null) {
                data.set("frontendNodeGroups", om.valueToTree(this.getFrontendNodeGroups()));
            }
            if (this.getKmsKeyId() != null) {
                data.set("kmsKeyId", om.valueToTree(this.getKmsKeyId()));
            }
            if (this.getObserverNodeGroups() != null) {
                data.set("observerNodeGroups", om.valueToTree(this.getObserverNodeGroups()));
            }
            if (this.getOrderId() != null) {
                data.set("orderId", om.valueToTree(this.getOrderId()));
            }
            if (this.getOssAccessingRoleName() != null) {
                data.set("ossAccessingRoleName", om.valueToTree(this.getOssAccessingRoleName()));
            }
            if (this.getPricingCycle() != null) {
                data.set("pricingCycle", om.valueToTree(this.getPricingCycle()));
            }
            if (this.getPromotionOptionNo() != null) {
                data.set("promotionOptionNo", om.valueToTree(this.getPromotionOptionNo()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getResourceType() != null) {
                data.set("resourceType", om.valueToTree(this.getResourceType()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVswitches() != null) {
                data.set("vswitches", om.valueToTree(this.getVswitches()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosStarRocksInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosStarRocksInstanceProps.Jsii$Proxy that = (RosStarRocksInstanceProps.Jsii$Proxy) o;

            if (!adminPassword.equals(that.adminPassword)) return false;
            if (!clusterZoneId.equals(that.clusterZoneId)) return false;
            if (!instanceName.equals(that.instanceName)) return false;
            if (!packageType.equals(that.packageType)) return false;
            if (!payType.equals(that.payType)) return false;
            if (!runMode.equals(that.runMode)) return false;
            if (!version.equals(that.version)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.backendNodeGroups != null ? !this.backendNodeGroups.equals(that.backendNodeGroups) : that.backendNodeGroups != null) return false;
            if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
            if (this.encrypted != null ? !this.encrypted.equals(that.encrypted) : that.encrypted != null) return false;
            if (this.frontendNodeGroups != null ? !this.frontendNodeGroups.equals(that.frontendNodeGroups) : that.frontendNodeGroups != null) return false;
            if (this.kmsKeyId != null ? !this.kmsKeyId.equals(that.kmsKeyId) : that.kmsKeyId != null) return false;
            if (this.observerNodeGroups != null ? !this.observerNodeGroups.equals(that.observerNodeGroups) : that.observerNodeGroups != null) return false;
            if (this.orderId != null ? !this.orderId.equals(that.orderId) : that.orderId != null) return false;
            if (this.ossAccessingRoleName != null ? !this.ossAccessingRoleName.equals(that.ossAccessingRoleName) : that.ossAccessingRoleName != null) return false;
            if (this.pricingCycle != null ? !this.pricingCycle.equals(that.pricingCycle) : that.pricingCycle != null) return false;
            if (this.promotionOptionNo != null ? !this.promotionOptionNo.equals(that.promotionOptionNo) : that.promotionOptionNo != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.resourceType != null ? !this.resourceType.equals(that.resourceType) : that.resourceType != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.vswitches != null ? this.vswitches.equals(that.vswitches) : that.vswitches == null;
        }

        @Override
        public final int hashCode() {
            int result = this.adminPassword.hashCode();
            result = 31 * result + (this.clusterZoneId.hashCode());
            result = 31 * result + (this.instanceName.hashCode());
            result = 31 * result + (this.packageType.hashCode());
            result = 31 * result + (this.payType.hashCode());
            result = 31 * result + (this.runMode.hashCode());
            result = 31 * result + (this.version.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.backendNodeGroups != null ? this.backendNodeGroups.hashCode() : 0);
            result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
            result = 31 * result + (this.encrypted != null ? this.encrypted.hashCode() : 0);
            result = 31 * result + (this.frontendNodeGroups != null ? this.frontendNodeGroups.hashCode() : 0);
            result = 31 * result + (this.kmsKeyId != null ? this.kmsKeyId.hashCode() : 0);
            result = 31 * result + (this.observerNodeGroups != null ? this.observerNodeGroups.hashCode() : 0);
            result = 31 * result + (this.orderId != null ? this.orderId.hashCode() : 0);
            result = 31 * result + (this.ossAccessingRoleName != null ? this.ossAccessingRoleName.hashCode() : 0);
            result = 31 * result + (this.pricingCycle != null ? this.pricingCycle.hashCode() : 0);
            result = 31 * result + (this.promotionOptionNo != null ? this.promotionOptionNo.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.resourceType != null ? this.resourceType.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vswitches != null ? this.vswitches.hashCode() : 0);
            return result;
        }
    }
}
