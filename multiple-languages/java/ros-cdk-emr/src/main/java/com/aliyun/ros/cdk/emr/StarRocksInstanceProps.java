package com.aliyun.ros.cdk.emr;

/**
 * Properties for defining a <code>StarRocksInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-starrocksinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.244Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.StarRocksInstanceProps")
@software.amazon.jsii.Jsii.Proxy(StarRocksInstanceProps.Jsii$Proxy.class)
public interface StarRocksInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property adminPassword: Password of admin user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAdminPassword();

    /**
     * Property clusterZoneId: Primary ZoneId of StarRocks instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterZoneId();

    /**
     * Property instanceName: The name of the StarRocks instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName();

    /**
     * Property packageType: The package type of the instance: - **trial: Starter Edition - **official: Standard.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPackageType();

    /**
     * Property payType: The pay type of the StarRocks instance: - **prePaid - **postPaid.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     * Property runMode: The run mode of the instance: - **shared_nothing: Storage and calculation.
     * <p>
     * <ul>
     * <li>**shared_data: Storage and calculation separation.</li>
     * <li>**lakehouse: Data lake analysis.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRunMode();

    /**
     * Property version: The version of the StarRocks instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVersion();

    /**
     * Property vpcId: The VPC ID of the StarRocks instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property autoRenew: Whether to enable automatic renewal.
     * <p>
     * This is only meaningful when payType is set to PrePaid. Disabled by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property backendNodeGroups: List of BE or CN compute group information.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackendNodeGroups() {
        return null;
    }

    /**
     * Property duration: Duration of purchase.
     * <p>
     * It is only meaningful when PayType is set to PrePaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return null;
    }

    /**
     * Property encrypted: Whether encrypted.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
        return null;
    }

    /**
     * Property frontendNodeGroups: List of FE Node Group Information.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFrontendNodeGroups() {
        return null;
    }

    /**
     * Property kmsKeyId: The ID of the Key Management Service (KMS) key.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKmsKeyId() {
        return null;
    }

    /**
     * Property observerNodeGroups: list of Observer calculates group information.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getObserverNodeGroups() {
        return null;
    }

    /**
     * Property orderId: Order ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOrderId() {
        return null;
    }

    /**
     * Property ossAccessingRoleName: Role name used for password-free access to OSS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOssAccessingRoleName() {
        return null;
    }

    /**
     * Property pricingCycle: The duration unit for purchasing: - Month - Year This is only meaningful when PayType is set to PrePaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return null;
    }

    /**
     * Property promotionOptionNo: Promotion ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPromotionOptionNo() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the StarRocks instance belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property resourceType: Resource type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceType() {
        return null;
    }

    /**
     * Property tags: Tags of StarRocks.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.emr.RosStarRocksInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vswitches: The VSwitches info of the StarRocks instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVswitches() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link StarRocksInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link StarRocksInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<StarRocksInstanceProps> {
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
         * Sets the value of {@link StarRocksInstanceProps#getAdminPassword}
         * @param adminPassword Property adminPassword: Password of admin user. This parameter is required.
         * @return {@code this}
         */
        public Builder adminPassword(java.lang.String adminPassword) {
            this.adminPassword = adminPassword;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getAdminPassword}
         * @param adminPassword Property adminPassword: Password of admin user. This parameter is required.
         * @return {@code this}
         */
        public Builder adminPassword(com.aliyun.ros.cdk.core.IResolvable adminPassword) {
            this.adminPassword = adminPassword;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getClusterZoneId}
         * @param clusterZoneId Property clusterZoneId: Primary ZoneId of StarRocks instance. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterZoneId(java.lang.String clusterZoneId) {
            this.clusterZoneId = clusterZoneId;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getClusterZoneId}
         * @param clusterZoneId Property clusterZoneId: Primary ZoneId of StarRocks instance. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterZoneId(com.aliyun.ros.cdk.core.IResolvable clusterZoneId) {
            this.clusterZoneId = clusterZoneId;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the StarRocks instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the StarRocks instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getPackageType}
         * @param packageType Property packageType: The package type of the instance: - **trial: Starter Edition - **official: Standard. This parameter is required.
         * @return {@code this}
         */
        public Builder packageType(java.lang.String packageType) {
            this.packageType = packageType;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getPackageType}
         * @param packageType Property packageType: The package type of the instance: - **trial: Starter Edition - **official: Standard. This parameter is required.
         * @return {@code this}
         */
        public Builder packageType(com.aliyun.ros.cdk.core.IResolvable packageType) {
            this.packageType = packageType;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getPayType}
         * @param payType Property payType: The pay type of the StarRocks instance: - **prePaid - **postPaid. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getPayType}
         * @param payType Property payType: The pay type of the StarRocks instance: - **prePaid - **postPaid. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getRunMode}
         * @param runMode Property runMode: The run mode of the instance: - **shared_nothing: Storage and calculation. This parameter is required.
         *                <ul>
         *                <li>**shared_data: Storage and calculation separation.</li>
         *                <li>**lakehouse: Data lake analysis.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder runMode(java.lang.String runMode) {
            this.runMode = runMode;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getRunMode}
         * @param runMode Property runMode: The run mode of the instance: - **shared_nothing: Storage and calculation. This parameter is required.
         *                <ul>
         *                <li>**shared_data: Storage and calculation separation.</li>
         *                <li>**lakehouse: Data lake analysis.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder runMode(com.aliyun.ros.cdk.core.IResolvable runMode) {
            this.runMode = runMode;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getVersion}
         * @param version Property version: The version of the StarRocks instance. This parameter is required.
         * @return {@code this}
         */
        public Builder version(java.lang.String version) {
            this.version = version;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getVersion}
         * @param version Property version: The version of the StarRocks instance. This parameter is required.
         * @return {@code this}
         */
        public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
            this.version = version;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC ID of the StarRocks instance. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC ID of the StarRocks instance. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether to enable automatic renewal.
         *                  This is only meaningful when payType is set to PrePaid. Disabled by default.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether to enable automatic renewal.
         *                  This is only meaningful when payType is set to PrePaid. Disabled by default.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getBackendNodeGroups}
         * @param backendNodeGroups Property backendNodeGroups: List of BE or CN compute group information.
         * @return {@code this}
         */
        public Builder backendNodeGroups(com.aliyun.ros.cdk.core.IResolvable backendNodeGroups) {
            this.backendNodeGroups = backendNodeGroups;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getBackendNodeGroups}
         * @param backendNodeGroups Property backendNodeGroups: List of BE or CN compute group information.
         * @return {@code this}
         */
        public Builder backendNodeGroups(java.util.List<? extends java.lang.Object> backendNodeGroups) {
            this.backendNodeGroups = backendNodeGroups;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getDuration}
         * @param duration Property duration: Duration of purchase.
         *                 It is only meaningful when PayType is set to PrePaid.
         * @return {@code this}
         */
        public Builder duration(java.lang.Number duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getDuration}
         * @param duration Property duration: Duration of purchase.
         *                 It is only meaningful when PayType is set to PrePaid.
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getEncrypted}
         * @param encrypted Property encrypted: Whether encrypted.
         * @return {@code this}
         */
        public Builder encrypted(java.lang.Boolean encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getEncrypted}
         * @param encrypted Property encrypted: Whether encrypted.
         * @return {@code this}
         */
        public Builder encrypted(com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getFrontendNodeGroups}
         * @param frontendNodeGroups Property frontendNodeGroups: List of FE Node Group Information.
         * @return {@code this}
         */
        public Builder frontendNodeGroups(com.aliyun.ros.cdk.core.IResolvable frontendNodeGroups) {
            this.frontendNodeGroups = frontendNodeGroups;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getFrontendNodeGroups}
         * @param frontendNodeGroups Property frontendNodeGroups: List of FE Node Group Information.
         * @return {@code this}
         */
        public Builder frontendNodeGroups(java.util.List<? extends java.lang.Object> frontendNodeGroups) {
            this.frontendNodeGroups = frontendNodeGroups;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getKmsKeyId}
         * @param kmsKeyId Property kmsKeyId: The ID of the Key Management Service (KMS) key.
         * @return {@code this}
         */
        public Builder kmsKeyId(java.lang.String kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getKmsKeyId}
         * @param kmsKeyId Property kmsKeyId: The ID of the Key Management Service (KMS) key.
         * @return {@code this}
         */
        public Builder kmsKeyId(com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getObserverNodeGroups}
         * @param observerNodeGroups Property observerNodeGroups: list of Observer calculates group information.
         * @return {@code this}
         */
        public Builder observerNodeGroups(com.aliyun.ros.cdk.core.IResolvable observerNodeGroups) {
            this.observerNodeGroups = observerNodeGroups;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getObserverNodeGroups}
         * @param observerNodeGroups Property observerNodeGroups: list of Observer calculates group information.
         * @return {@code this}
         */
        public Builder observerNodeGroups(java.util.List<? extends java.lang.Object> observerNodeGroups) {
            this.observerNodeGroups = observerNodeGroups;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getOrderId}
         * @param orderId Property orderId: Order ID.
         * @return {@code this}
         */
        public Builder orderId(java.lang.Number orderId) {
            this.orderId = orderId;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getOrderId}
         * @param orderId Property orderId: Order ID.
         * @return {@code this}
         */
        public Builder orderId(com.aliyun.ros.cdk.core.IResolvable orderId) {
            this.orderId = orderId;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getOssAccessingRoleName}
         * @param ossAccessingRoleName Property ossAccessingRoleName: Role name used for password-free access to OSS.
         * @return {@code this}
         */
        public Builder ossAccessingRoleName(java.lang.String ossAccessingRoleName) {
            this.ossAccessingRoleName = ossAccessingRoleName;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getOssAccessingRoleName}
         * @param ossAccessingRoleName Property ossAccessingRoleName: Role name used for password-free access to OSS.
         * @return {@code this}
         */
        public Builder ossAccessingRoleName(com.aliyun.ros.cdk.core.IResolvable ossAccessingRoleName) {
            this.ossAccessingRoleName = ossAccessingRoleName;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: The duration unit for purchasing: - Month - Year This is only meaningful when PayType is set to PrePaid.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: The duration unit for purchasing: - Month - Year This is only meaningful when PayType is set to PrePaid.
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getPromotionOptionNo}
         * @param promotionOptionNo Property promotionOptionNo: Promotion ID.
         * @return {@code this}
         */
        public Builder promotionOptionNo(java.lang.String promotionOptionNo) {
            this.promotionOptionNo = promotionOptionNo;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getPromotionOptionNo}
         * @param promotionOptionNo Property promotionOptionNo: Promotion ID.
         * @return {@code this}
         */
        public Builder promotionOptionNo(com.aliyun.ros.cdk.core.IResolvable promotionOptionNo) {
            this.promotionOptionNo = promotionOptionNo;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the StarRocks instance belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the StarRocks instance belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getResourceType}
         * @param resourceType Property resourceType: Resource type.
         * @return {@code this}
         */
        public Builder resourceType(java.lang.String resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getResourceType}
         * @param resourceType Property resourceType: Resource type.
         * @return {@code this}
         */
        public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getTags}
         * @param tags Property tags: Tags of StarRocks.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.emr.RosStarRocksInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.emr.RosStarRocksInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getVswitches}
         * @param vswitches Property vswitches: The VSwitches info of the StarRocks instance.
         * @return {@code this}
         */
        public Builder vswitches(com.aliyun.ros.cdk.core.IResolvable vswitches) {
            this.vswitches = vswitches;
            return this;
        }

        /**
         * Sets the value of {@link StarRocksInstanceProps#getVswitches}
         * @param vswitches Property vswitches: The VSwitches info of the StarRocks instance.
         * @return {@code this}
         */
        public Builder vswitches(java.util.List<? extends java.lang.Object> vswitches) {
            this.vswitches = vswitches;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link StarRocksInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public StarRocksInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link StarRocksInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements StarRocksInstanceProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.StarRocksInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            StarRocksInstanceProps.Jsii$Proxy that = (StarRocksInstanceProps.Jsii$Proxy) o;

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
