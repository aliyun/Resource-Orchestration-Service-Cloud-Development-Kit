package com.aliyun.ros.cdk.milvus;

/**
 * Properties for defining a <code>Instance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-milvus-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T10:05:59.850Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.milvus.$Module.class, fqn = "@alicloud/ros-cdk-milvus.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property components: The component specifications of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getComponents();

    /**
     * Property dbAdminPassword: The database administrator password.
     * <p>
     * The password must be 8 to 30 characters in length and contain at least one uppercase letter, lowercase letter, digit, and special character from &#64;#$%^*_+-.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbAdminPassword();

    /**
     * Property dbVersion: The database engine version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbVersion();

    /**
     * Property instanceName: The name of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName();

    /**
     * Property paymentType: The billing method of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPaymentType();

    /**
     * Property vpcId: The VPC ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property vSwitchIds: The vSwitch configurations.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchIds();

    /**
     * Property zoneId: The primary zone ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property aiFunction: Whether the AI function is enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAiFunction() {
        return null;
    }

    /**
     * Property autoBackup: Whether automatic backup is enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoBackup() {
        return null;
    }

    /**
     * Property autoPay: Whether the order is automatically paid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     * Property autoRenew: Whether the subscription is automatically renewed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property backupRestoreInfo: The backup restore information.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupRestoreInfo() {
        return null;
    }

    /**
     * Property configuration: The instance configuration in YAML format.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfiguration() {
        return null;
    }

    /**
     * Property encrypted: Whether OSS encryption is enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
        return null;
    }

    /**
     * Property ha: Whether high availability is enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHa() {
        return null;
    }

    /**
     * Property isMultiAzStorage: Whether multi-zone storage is enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsMultiAzStorage() {
        return null;
    }

    /**
     * Property kmsKeyId: The ID of the KMS key used for encryption.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKmsKeyId() {
        return null;
    }

    /**
     * Property loadReplicas: The number of load replicas.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadReplicas() {
        return null;
    }

    /**
     * Property multiZoneMode: The multi-zone deployment mode.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMultiZoneMode() {
        return null;
    }

    /**
     * Property paymentDuration: The subscription duration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentDuration() {
        return null;
    }

    /**
     * Property paymentDurationUnit: The unit of the subscription duration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentDurationUnit() {
        return null;
    }

    /**
     * Property promotionNo: The promotion number.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPromotionNo() {
        return null;
    }

    /**
     * Property resourceGroupId: The resource group ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to Milvus instance.
     * <p>
     * Max support 20 tags to add during create Milvus instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.milvus.RosInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceProps> {
        java.lang.Object components;
        java.lang.Object dbAdminPassword;
        java.lang.Object dbVersion;
        java.lang.Object instanceName;
        java.lang.Object paymentType;
        java.lang.Object vpcId;
        java.lang.Object vSwitchIds;
        java.lang.Object zoneId;
        java.lang.Object aiFunction;
        java.lang.Object autoBackup;
        java.lang.Object autoPay;
        java.lang.Object autoRenew;
        java.lang.Object backupRestoreInfo;
        java.lang.Object configuration;
        java.lang.Object encrypted;
        java.lang.Object ha;
        java.lang.Object isMultiAzStorage;
        java.lang.Object kmsKeyId;
        java.lang.Object loadReplicas;
        java.lang.Object multiZoneMode;
        java.lang.Object paymentDuration;
        java.lang.Object paymentDurationUnit;
        java.lang.Object promotionNo;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.milvus.RosInstance.TagsProperty> tags;

        /**
         * Sets the value of {@link InstanceProps#getComponents}
         * @param components Property components: The component specifications of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder components(com.aliyun.ros.cdk.core.IResolvable components) {
            this.components = components;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getComponents}
         * @param components Property components: The component specifications of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder components(java.util.List<? extends java.lang.Object> components) {
            this.components = components;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDbAdminPassword}
         * @param dbAdminPassword Property dbAdminPassword: The database administrator password. This parameter is required.
         *                        The password must be 8 to 30 characters in length and contain at least one uppercase letter, lowercase letter, digit, and special character from &#64;#$%^*_+-.
         * @return {@code this}
         */
        public Builder dbAdminPassword(java.lang.String dbAdminPassword) {
            this.dbAdminPassword = dbAdminPassword;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDbAdminPassword}
         * @param dbAdminPassword Property dbAdminPassword: The database administrator password. This parameter is required.
         *                        The password must be 8 to 30 characters in length and contain at least one uppercase letter, lowercase letter, digit, and special character from &#64;#$%^*_+-.
         * @return {@code this}
         */
        public Builder dbAdminPassword(com.aliyun.ros.cdk.core.IResolvable dbAdminPassword) {
            this.dbAdminPassword = dbAdminPassword;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDbVersion}
         * @param dbVersion Property dbVersion: The database engine version. This parameter is required.
         * @return {@code this}
         */
        public Builder dbVersion(java.lang.String dbVersion) {
            this.dbVersion = dbVersion;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDbVersion}
         * @param dbVersion Property dbVersion: The database engine version. This parameter is required.
         * @return {@code this}
         */
        public Builder dbVersion(com.aliyun.ros.cdk.core.IResolvable dbVersion) {
            this.dbVersion = dbVersion;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPaymentType}
         * @param paymentType Property paymentType: The billing method of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPaymentType}
         * @param paymentType Property paymentType: The billing method of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVSwitchIds}
         * @param vSwitchIds Property vSwitchIds: The vSwitch configurations. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVSwitchIds}
         * @param vSwitchIds Property vSwitchIds: The vSwitch configurations. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getZoneId}
         * @param zoneId Property zoneId: The primary zone ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getZoneId}
         * @param zoneId Property zoneId: The primary zone ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAiFunction}
         * @param aiFunction Property aiFunction: Whether the AI function is enabled.
         * @return {@code this}
         */
        public Builder aiFunction(java.lang.Boolean aiFunction) {
            this.aiFunction = aiFunction;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAiFunction}
         * @param aiFunction Property aiFunction: Whether the AI function is enabled.
         * @return {@code this}
         */
        public Builder aiFunction(com.aliyun.ros.cdk.core.IResolvable aiFunction) {
            this.aiFunction = aiFunction;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoBackup}
         * @param autoBackup Property autoBackup: Whether automatic backup is enabled.
         * @return {@code this}
         */
        public Builder autoBackup(java.lang.Boolean autoBackup) {
            this.autoBackup = autoBackup;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoBackup}
         * @param autoBackup Property autoBackup: Whether automatic backup is enabled.
         * @return {@code this}
         */
        public Builder autoBackup(com.aliyun.ros.cdk.core.IResolvable autoBackup) {
            this.autoBackup = autoBackup;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoPay}
         * @param autoPay Property autoPay: Whether the order is automatically paid.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoPay}
         * @param autoPay Property autoPay: Whether the order is automatically paid.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether the subscription is automatically renewed.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether the subscription is automatically renewed.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getBackupRestoreInfo}
         * @param backupRestoreInfo Property backupRestoreInfo: The backup restore information.
         * @return {@code this}
         */
        public Builder backupRestoreInfo(com.aliyun.ros.cdk.core.IResolvable backupRestoreInfo) {
            this.backupRestoreInfo = backupRestoreInfo;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getBackupRestoreInfo}
         * @param backupRestoreInfo Property backupRestoreInfo: The backup restore information.
         * @return {@code this}
         */
        public Builder backupRestoreInfo(com.aliyun.ros.cdk.milvus.RosInstance.BackupRestoreInfoProperty backupRestoreInfo) {
            this.backupRestoreInfo = backupRestoreInfo;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getConfiguration}
         * @param configuration Property configuration: The instance configuration in YAML format.
         * @return {@code this}
         */
        public Builder configuration(java.lang.String configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getConfiguration}
         * @param configuration Property configuration: The instance configuration in YAML format.
         * @return {@code this}
         */
        public Builder configuration(com.aliyun.ros.cdk.core.IResolvable configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEncrypted}
         * @param encrypted Property encrypted: Whether OSS encryption is enabled.
         * @return {@code this}
         */
        public Builder encrypted(java.lang.Boolean encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEncrypted}
         * @param encrypted Property encrypted: Whether OSS encryption is enabled.
         * @return {@code this}
         */
        public Builder encrypted(com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getHa}
         * @param ha Property ha: Whether high availability is enabled.
         * @return {@code this}
         */
        public Builder ha(java.lang.Boolean ha) {
            this.ha = ha;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getHa}
         * @param ha Property ha: Whether high availability is enabled.
         * @return {@code this}
         */
        public Builder ha(com.aliyun.ros.cdk.core.IResolvable ha) {
            this.ha = ha;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getIsMultiAzStorage}
         * @param isMultiAzStorage Property isMultiAzStorage: Whether multi-zone storage is enabled.
         * @return {@code this}
         */
        public Builder isMultiAzStorage(java.lang.Boolean isMultiAzStorage) {
            this.isMultiAzStorage = isMultiAzStorage;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getIsMultiAzStorage}
         * @param isMultiAzStorage Property isMultiAzStorage: Whether multi-zone storage is enabled.
         * @return {@code this}
         */
        public Builder isMultiAzStorage(com.aliyun.ros.cdk.core.IResolvable isMultiAzStorage) {
            this.isMultiAzStorage = isMultiAzStorage;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getKmsKeyId}
         * @param kmsKeyId Property kmsKeyId: The ID of the KMS key used for encryption.
         * @return {@code this}
         */
        public Builder kmsKeyId(java.lang.String kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getKmsKeyId}
         * @param kmsKeyId Property kmsKeyId: The ID of the KMS key used for encryption.
         * @return {@code this}
         */
        public Builder kmsKeyId(com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLoadReplicas}
         * @param loadReplicas Property loadReplicas: The number of load replicas.
         * @return {@code this}
         */
        public Builder loadReplicas(java.lang.Number loadReplicas) {
            this.loadReplicas = loadReplicas;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLoadReplicas}
         * @param loadReplicas Property loadReplicas: The number of load replicas.
         * @return {@code this}
         */
        public Builder loadReplicas(com.aliyun.ros.cdk.core.IResolvable loadReplicas) {
            this.loadReplicas = loadReplicas;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getMultiZoneMode}
         * @param multiZoneMode Property multiZoneMode: The multi-zone deployment mode.
         * @return {@code this}
         */
        public Builder multiZoneMode(java.lang.String multiZoneMode) {
            this.multiZoneMode = multiZoneMode;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getMultiZoneMode}
         * @param multiZoneMode Property multiZoneMode: The multi-zone deployment mode.
         * @return {@code this}
         */
        public Builder multiZoneMode(com.aliyun.ros.cdk.core.IResolvable multiZoneMode) {
            this.multiZoneMode = multiZoneMode;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPaymentDuration}
         * @param paymentDuration Property paymentDuration: The subscription duration.
         * @return {@code this}
         */
        public Builder paymentDuration(java.lang.Number paymentDuration) {
            this.paymentDuration = paymentDuration;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPaymentDuration}
         * @param paymentDuration Property paymentDuration: The subscription duration.
         * @return {@code this}
         */
        public Builder paymentDuration(com.aliyun.ros.cdk.core.IResolvable paymentDuration) {
            this.paymentDuration = paymentDuration;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPaymentDurationUnit}
         * @param paymentDurationUnit Property paymentDurationUnit: The unit of the subscription duration.
         * @return {@code this}
         */
        public Builder paymentDurationUnit(java.lang.String paymentDurationUnit) {
            this.paymentDurationUnit = paymentDurationUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPaymentDurationUnit}
         * @param paymentDurationUnit Property paymentDurationUnit: The unit of the subscription duration.
         * @return {@code this}
         */
        public Builder paymentDurationUnit(com.aliyun.ros.cdk.core.IResolvable paymentDurationUnit) {
            this.paymentDurationUnit = paymentDurationUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPromotionNo}
         * @param promotionNo Property promotionNo: The promotion number.
         * @return {@code this}
         */
        public Builder promotionNo(java.lang.String promotionNo) {
            this.promotionNo = promotionNo;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPromotionNo}
         * @param promotionNo Property promotionNo: The promotion number.
         * @return {@code this}
         */
        public Builder promotionNo(com.aliyun.ros.cdk.core.IResolvable promotionNo) {
            this.promotionNo = promotionNo;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The resource group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The resource group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTags}
         * @param tags Property tags: Tags to attach to Milvus instance.
         *             Max support 20 tags to add during create Milvus instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.milvus.RosInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.milvus.RosInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceProps {
        private final java.lang.Object components;
        private final java.lang.Object dbAdminPassword;
        private final java.lang.Object dbVersion;
        private final java.lang.Object instanceName;
        private final java.lang.Object paymentType;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchIds;
        private final java.lang.Object zoneId;
        private final java.lang.Object aiFunction;
        private final java.lang.Object autoBackup;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoRenew;
        private final java.lang.Object backupRestoreInfo;
        private final java.lang.Object configuration;
        private final java.lang.Object encrypted;
        private final java.lang.Object ha;
        private final java.lang.Object isMultiAzStorage;
        private final java.lang.Object kmsKeyId;
        private final java.lang.Object loadReplicas;
        private final java.lang.Object multiZoneMode;
        private final java.lang.Object paymentDuration;
        private final java.lang.Object paymentDurationUnit;
        private final java.lang.Object promotionNo;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.milvus.RosInstance.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.components = software.amazon.jsii.Kernel.get(this, "components", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbAdminPassword = software.amazon.jsii.Kernel.get(this, "dbAdminPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbVersion = software.amazon.jsii.Kernel.get(this, "dbVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aiFunction = software.amazon.jsii.Kernel.get(this, "aiFunction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoBackup = software.amazon.jsii.Kernel.get(this, "autoBackup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupRestoreInfo = software.amazon.jsii.Kernel.get(this, "backupRestoreInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.configuration = software.amazon.jsii.Kernel.get(this, "configuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encrypted = software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ha = software.amazon.jsii.Kernel.get(this, "ha", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isMultiAzStorage = software.amazon.jsii.Kernel.get(this, "isMultiAzStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kmsKeyId = software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadReplicas = software.amazon.jsii.Kernel.get(this, "loadReplicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiZoneMode = software.amazon.jsii.Kernel.get(this, "multiZoneMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentDuration = software.amazon.jsii.Kernel.get(this, "paymentDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentDurationUnit = software.amazon.jsii.Kernel.get(this, "paymentDurationUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.promotionNo = software.amazon.jsii.Kernel.get(this, "promotionNo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.milvus.RosInstance.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.components = java.util.Objects.requireNonNull(builder.components, "components is required");
            this.dbAdminPassword = java.util.Objects.requireNonNull(builder.dbAdminPassword, "dbAdminPassword is required");
            this.dbVersion = java.util.Objects.requireNonNull(builder.dbVersion, "dbVersion is required");
            this.instanceName = java.util.Objects.requireNonNull(builder.instanceName, "instanceName is required");
            this.paymentType = java.util.Objects.requireNonNull(builder.paymentType, "paymentType is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchIds = java.util.Objects.requireNonNull(builder.vSwitchIds, "vSwitchIds is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.aiFunction = builder.aiFunction;
            this.autoBackup = builder.autoBackup;
            this.autoPay = builder.autoPay;
            this.autoRenew = builder.autoRenew;
            this.backupRestoreInfo = builder.backupRestoreInfo;
            this.configuration = builder.configuration;
            this.encrypted = builder.encrypted;
            this.ha = builder.ha;
            this.isMultiAzStorage = builder.isMultiAzStorage;
            this.kmsKeyId = builder.kmsKeyId;
            this.loadReplicas = builder.loadReplicas;
            this.multiZoneMode = builder.multiZoneMode;
            this.paymentDuration = builder.paymentDuration;
            this.paymentDurationUnit = builder.paymentDurationUnit;
            this.promotionNo = builder.promotionNo;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.milvus.RosInstance.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getComponents() {
            return this.components;
        }

        @Override
        public final java.lang.Object getDbAdminPassword() {
            return this.dbAdminPassword;
        }

        @Override
        public final java.lang.Object getDbVersion() {
            return this.dbVersion;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getPaymentType() {
            return this.paymentType;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchIds() {
            return this.vSwitchIds;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getAiFunction() {
            return this.aiFunction;
        }

        @Override
        public final java.lang.Object getAutoBackup() {
            return this.autoBackup;
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
        public final java.lang.Object getBackupRestoreInfo() {
            return this.backupRestoreInfo;
        }

        @Override
        public final java.lang.Object getConfiguration() {
            return this.configuration;
        }

        @Override
        public final java.lang.Object getEncrypted() {
            return this.encrypted;
        }

        @Override
        public final java.lang.Object getHa() {
            return this.ha;
        }

        @Override
        public final java.lang.Object getIsMultiAzStorage() {
            return this.isMultiAzStorage;
        }

        @Override
        public final java.lang.Object getKmsKeyId() {
            return this.kmsKeyId;
        }

        @Override
        public final java.lang.Object getLoadReplicas() {
            return this.loadReplicas;
        }

        @Override
        public final java.lang.Object getMultiZoneMode() {
            return this.multiZoneMode;
        }

        @Override
        public final java.lang.Object getPaymentDuration() {
            return this.paymentDuration;
        }

        @Override
        public final java.lang.Object getPaymentDurationUnit() {
            return this.paymentDurationUnit;
        }

        @Override
        public final java.lang.Object getPromotionNo() {
            return this.promotionNo;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.milvus.RosInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("components", om.valueToTree(this.getComponents()));
            data.set("dbAdminPassword", om.valueToTree(this.getDbAdminPassword()));
            data.set("dbVersion", om.valueToTree(this.getDbVersion()));
            data.set("instanceName", om.valueToTree(this.getInstanceName()));
            data.set("paymentType", om.valueToTree(this.getPaymentType()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getAiFunction() != null) {
                data.set("aiFunction", om.valueToTree(this.getAiFunction()));
            }
            if (this.getAutoBackup() != null) {
                data.set("autoBackup", om.valueToTree(this.getAutoBackup()));
            }
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getBackupRestoreInfo() != null) {
                data.set("backupRestoreInfo", om.valueToTree(this.getBackupRestoreInfo()));
            }
            if (this.getConfiguration() != null) {
                data.set("configuration", om.valueToTree(this.getConfiguration()));
            }
            if (this.getEncrypted() != null) {
                data.set("encrypted", om.valueToTree(this.getEncrypted()));
            }
            if (this.getHa() != null) {
                data.set("ha", om.valueToTree(this.getHa()));
            }
            if (this.getIsMultiAzStorage() != null) {
                data.set("isMultiAzStorage", om.valueToTree(this.getIsMultiAzStorage()));
            }
            if (this.getKmsKeyId() != null) {
                data.set("kmsKeyId", om.valueToTree(this.getKmsKeyId()));
            }
            if (this.getLoadReplicas() != null) {
                data.set("loadReplicas", om.valueToTree(this.getLoadReplicas()));
            }
            if (this.getMultiZoneMode() != null) {
                data.set("multiZoneMode", om.valueToTree(this.getMultiZoneMode()));
            }
            if (this.getPaymentDuration() != null) {
                data.set("paymentDuration", om.valueToTree(this.getPaymentDuration()));
            }
            if (this.getPaymentDurationUnit() != null) {
                data.set("paymentDurationUnit", om.valueToTree(this.getPaymentDurationUnit()));
            }
            if (this.getPromotionNo() != null) {
                data.set("promotionNo", om.valueToTree(this.getPromotionNo()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-milvus.InstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceProps.Jsii$Proxy that = (InstanceProps.Jsii$Proxy) o;

            if (!components.equals(that.components)) return false;
            if (!dbAdminPassword.equals(that.dbAdminPassword)) return false;
            if (!dbVersion.equals(that.dbVersion)) return false;
            if (!instanceName.equals(that.instanceName)) return false;
            if (!paymentType.equals(that.paymentType)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchIds.equals(that.vSwitchIds)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.aiFunction != null ? !this.aiFunction.equals(that.aiFunction) : that.aiFunction != null) return false;
            if (this.autoBackup != null ? !this.autoBackup.equals(that.autoBackup) : that.autoBackup != null) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.backupRestoreInfo != null ? !this.backupRestoreInfo.equals(that.backupRestoreInfo) : that.backupRestoreInfo != null) return false;
            if (this.configuration != null ? !this.configuration.equals(that.configuration) : that.configuration != null) return false;
            if (this.encrypted != null ? !this.encrypted.equals(that.encrypted) : that.encrypted != null) return false;
            if (this.ha != null ? !this.ha.equals(that.ha) : that.ha != null) return false;
            if (this.isMultiAzStorage != null ? !this.isMultiAzStorage.equals(that.isMultiAzStorage) : that.isMultiAzStorage != null) return false;
            if (this.kmsKeyId != null ? !this.kmsKeyId.equals(that.kmsKeyId) : that.kmsKeyId != null) return false;
            if (this.loadReplicas != null ? !this.loadReplicas.equals(that.loadReplicas) : that.loadReplicas != null) return false;
            if (this.multiZoneMode != null ? !this.multiZoneMode.equals(that.multiZoneMode) : that.multiZoneMode != null) return false;
            if (this.paymentDuration != null ? !this.paymentDuration.equals(that.paymentDuration) : that.paymentDuration != null) return false;
            if (this.paymentDurationUnit != null ? !this.paymentDurationUnit.equals(that.paymentDurationUnit) : that.paymentDurationUnit != null) return false;
            if (this.promotionNo != null ? !this.promotionNo.equals(that.promotionNo) : that.promotionNo != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.components.hashCode();
            result = 31 * result + (this.dbAdminPassword.hashCode());
            result = 31 * result + (this.dbVersion.hashCode());
            result = 31 * result + (this.instanceName.hashCode());
            result = 31 * result + (this.paymentType.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchIds.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.aiFunction != null ? this.aiFunction.hashCode() : 0);
            result = 31 * result + (this.autoBackup != null ? this.autoBackup.hashCode() : 0);
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.backupRestoreInfo != null ? this.backupRestoreInfo.hashCode() : 0);
            result = 31 * result + (this.configuration != null ? this.configuration.hashCode() : 0);
            result = 31 * result + (this.encrypted != null ? this.encrypted.hashCode() : 0);
            result = 31 * result + (this.ha != null ? this.ha.hashCode() : 0);
            result = 31 * result + (this.isMultiAzStorage != null ? this.isMultiAzStorage.hashCode() : 0);
            result = 31 * result + (this.kmsKeyId != null ? this.kmsKeyId.hashCode() : 0);
            result = 31 * result + (this.loadReplicas != null ? this.loadReplicas.hashCode() : 0);
            result = 31 * result + (this.multiZoneMode != null ? this.multiZoneMode.hashCode() : 0);
            result = 31 * result + (this.paymentDuration != null ? this.paymentDuration.hashCode() : 0);
            result = 31 * result + (this.paymentDurationUnit != null ? this.paymentDurationUnit.hashCode() : 0);
            result = 31 * result + (this.promotionNo != null ? this.promotionNo.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
