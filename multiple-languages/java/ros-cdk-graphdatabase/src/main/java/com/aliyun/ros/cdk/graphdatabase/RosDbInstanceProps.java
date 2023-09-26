package com.aliyun.ros.cdk.graphdatabase;

/**
 * Properties for defining a <code>ALIYUN::GraphDatabase::DbInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:46.395Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.graphdatabase.$Module.class, fqn = "@alicloud/ros-cdk-graphdatabase.RosDbInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosDbInstanceProps.Jsii$Proxy.class)
public interface RosDbInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceCategory();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceNetworkType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceStorageType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbNodeClass();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbNodeStorage();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbVersion();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupSetId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCreateType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceIpArray() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcsSecurityGroupRelations() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaintainTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestoreType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceDbInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.graphdatabase.RosDbInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDbInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDbInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDbInstanceProps> {
        java.lang.Object dbInstanceCategory;
        java.lang.Object dbInstanceNetworkType;
        java.lang.Object dbInstanceStorageType;
        java.lang.Object dbNodeClass;
        java.lang.Object dbNodeStorage;
        java.lang.Object dbVersion;
        java.lang.Object backupSetId;
        java.lang.Object createType;
        java.lang.Object dbInstanceDescription;
        java.lang.Object dbInstanceIpArray;
        java.lang.Object ecsSecurityGroupRelations;
        java.lang.Object maintainTime;
        java.lang.Object paymentType;
        java.lang.Object resourceGroupId;
        java.lang.Object restoreType;
        java.lang.Object sourceDbInstanceId;
        java.util.List<com.aliyun.ros.cdk.graphdatabase.RosDbInstance.TagsProperty> tags;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link RosDbInstanceProps#getDbInstanceCategory}
         * @param dbInstanceCategory the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceCategory(java.lang.String dbInstanceCategory) {
            this.dbInstanceCategory = dbInstanceCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getDbInstanceCategory}
         * @param dbInstanceCategory the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceCategory(com.aliyun.ros.cdk.core.IResolvable dbInstanceCategory) {
            this.dbInstanceCategory = dbInstanceCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getDbInstanceNetworkType}
         * @param dbInstanceNetworkType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceNetworkType(java.lang.String dbInstanceNetworkType) {
            this.dbInstanceNetworkType = dbInstanceNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getDbInstanceNetworkType}
         * @param dbInstanceNetworkType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceNetworkType(com.aliyun.ros.cdk.core.IResolvable dbInstanceNetworkType) {
            this.dbInstanceNetworkType = dbInstanceNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getDbInstanceStorageType}
         * @param dbInstanceStorageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceStorageType(java.lang.String dbInstanceStorageType) {
            this.dbInstanceStorageType = dbInstanceStorageType;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getDbInstanceStorageType}
         * @param dbInstanceStorageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceStorageType(com.aliyun.ros.cdk.core.IResolvable dbInstanceStorageType) {
            this.dbInstanceStorageType = dbInstanceStorageType;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getDbNodeClass}
         * @param dbNodeClass the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNodeClass(java.lang.String dbNodeClass) {
            this.dbNodeClass = dbNodeClass;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getDbNodeClass}
         * @param dbNodeClass the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNodeClass(com.aliyun.ros.cdk.core.IResolvable dbNodeClass) {
            this.dbNodeClass = dbNodeClass;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getDbNodeStorage}
         * @param dbNodeStorage the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNodeStorage(java.lang.Number dbNodeStorage) {
            this.dbNodeStorage = dbNodeStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getDbNodeStorage}
         * @param dbNodeStorage the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNodeStorage(com.aliyun.ros.cdk.core.IResolvable dbNodeStorage) {
            this.dbNodeStorage = dbNodeStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getDbVersion}
         * @param dbVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbVersion(java.lang.String dbVersion) {
            this.dbVersion = dbVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getDbVersion}
         * @param dbVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbVersion(com.aliyun.ros.cdk.core.IResolvable dbVersion) {
            this.dbVersion = dbVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getBackupSetId}
         * @param backupSetId the value to be set.
         * @return {@code this}
         */
        public Builder backupSetId(java.lang.String backupSetId) {
            this.backupSetId = backupSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getBackupSetId}
         * @param backupSetId the value to be set.
         * @return {@code this}
         */
        public Builder backupSetId(com.aliyun.ros.cdk.core.IResolvable backupSetId) {
            this.backupSetId = backupSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getCreateType}
         * @param createType the value to be set.
         * @return {@code this}
         */
        public Builder createType(java.lang.String createType) {
            this.createType = createType;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getCreateType}
         * @param createType the value to be set.
         * @return {@code this}
         */
        public Builder createType(com.aliyun.ros.cdk.core.IResolvable createType) {
            this.createType = createType;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getDbInstanceIpArray}
         * @param dbInstanceIpArray the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceIpArray(com.aliyun.ros.cdk.core.IResolvable dbInstanceIpArray) {
            this.dbInstanceIpArray = dbInstanceIpArray;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getDbInstanceIpArray}
         * @param dbInstanceIpArray the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceIpArray(java.util.List<? extends java.lang.Object> dbInstanceIpArray) {
            this.dbInstanceIpArray = dbInstanceIpArray;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getEcsSecurityGroupRelations}
         * @param ecsSecurityGroupRelations the value to be set.
         * @return {@code this}
         */
        public Builder ecsSecurityGroupRelations(com.aliyun.ros.cdk.core.IResolvable ecsSecurityGroupRelations) {
            this.ecsSecurityGroupRelations = ecsSecurityGroupRelations;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getEcsSecurityGroupRelations}
         * @param ecsSecurityGroupRelations the value to be set.
         * @return {@code this}
         */
        public Builder ecsSecurityGroupRelations(java.util.List<? extends java.lang.Object> ecsSecurityGroupRelations) {
            this.ecsSecurityGroupRelations = ecsSecurityGroupRelations;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getMaintainTime}
         * @param maintainTime the value to be set.
         * @return {@code this}
         */
        public Builder maintainTime(java.lang.String maintainTime) {
            this.maintainTime = maintainTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getMaintainTime}
         * @param maintainTime the value to be set.
         * @return {@code this}
         */
        public Builder maintainTime(com.aliyun.ros.cdk.core.IResolvable maintainTime) {
            this.maintainTime = maintainTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getPaymentType}
         * @param paymentType the value to be set.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getPaymentType}
         * @param paymentType the value to be set.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getRestoreType}
         * @param restoreType the value to be set.
         * @return {@code this}
         */
        public Builder restoreType(java.lang.String restoreType) {
            this.restoreType = restoreType;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getRestoreType}
         * @param restoreType the value to be set.
         * @return {@code this}
         */
        public Builder restoreType(com.aliyun.ros.cdk.core.IResolvable restoreType) {
            this.restoreType = restoreType;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getSourceDbInstanceId}
         * @param sourceDbInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder sourceDbInstanceId(java.lang.String sourceDbInstanceId) {
            this.sourceDbInstanceId = sourceDbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getSourceDbInstanceId}
         * @param sourceDbInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder sourceDbInstanceId(com.aliyun.ros.cdk.core.IResolvable sourceDbInstanceId) {
            this.sourceDbInstanceId = sourceDbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.graphdatabase.RosDbInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.graphdatabase.RosDbInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDbInstanceProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDbInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDbInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDbInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDbInstanceProps {
        private final java.lang.Object dbInstanceCategory;
        private final java.lang.Object dbInstanceNetworkType;
        private final java.lang.Object dbInstanceStorageType;
        private final java.lang.Object dbNodeClass;
        private final java.lang.Object dbNodeStorage;
        private final java.lang.Object dbVersion;
        private final java.lang.Object backupSetId;
        private final java.lang.Object createType;
        private final java.lang.Object dbInstanceDescription;
        private final java.lang.Object dbInstanceIpArray;
        private final java.lang.Object ecsSecurityGroupRelations;
        private final java.lang.Object maintainTime;
        private final java.lang.Object paymentType;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object restoreType;
        private final java.lang.Object sourceDbInstanceId;
        private final java.util.List<com.aliyun.ros.cdk.graphdatabase.RosDbInstance.TagsProperty> tags;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceCategory = software.amazon.jsii.Kernel.get(this, "dbInstanceCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceNetworkType = software.amazon.jsii.Kernel.get(this, "dbInstanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceStorageType = software.amazon.jsii.Kernel.get(this, "dbInstanceStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbNodeClass = software.amazon.jsii.Kernel.get(this, "dbNodeClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbNodeStorage = software.amazon.jsii.Kernel.get(this, "dbNodeStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbVersion = software.amazon.jsii.Kernel.get(this, "dbVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupSetId = software.amazon.jsii.Kernel.get(this, "backupSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.createType = software.amazon.jsii.Kernel.get(this, "createType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceIpArray = software.amazon.jsii.Kernel.get(this, "dbInstanceIpArray", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsSecurityGroupRelations = software.amazon.jsii.Kernel.get(this, "ecsSecurityGroupRelations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maintainTime = software.amazon.jsii.Kernel.get(this, "maintainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restoreType = software.amazon.jsii.Kernel.get(this, "restoreType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceDbInstanceId = software.amazon.jsii.Kernel.get(this, "sourceDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.graphdatabase.RosDbInstance.TagsProperty.class)));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceCategory = java.util.Objects.requireNonNull(builder.dbInstanceCategory, "dbInstanceCategory is required");
            this.dbInstanceNetworkType = java.util.Objects.requireNonNull(builder.dbInstanceNetworkType, "dbInstanceNetworkType is required");
            this.dbInstanceStorageType = java.util.Objects.requireNonNull(builder.dbInstanceStorageType, "dbInstanceStorageType is required");
            this.dbNodeClass = java.util.Objects.requireNonNull(builder.dbNodeClass, "dbNodeClass is required");
            this.dbNodeStorage = java.util.Objects.requireNonNull(builder.dbNodeStorage, "dbNodeStorage is required");
            this.dbVersion = java.util.Objects.requireNonNull(builder.dbVersion, "dbVersion is required");
            this.backupSetId = builder.backupSetId;
            this.createType = builder.createType;
            this.dbInstanceDescription = builder.dbInstanceDescription;
            this.dbInstanceIpArray = builder.dbInstanceIpArray;
            this.ecsSecurityGroupRelations = builder.ecsSecurityGroupRelations;
            this.maintainTime = builder.maintainTime;
            this.paymentType = builder.paymentType;
            this.resourceGroupId = builder.resourceGroupId;
            this.restoreType = builder.restoreType;
            this.sourceDbInstanceId = builder.sourceDbInstanceId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.graphdatabase.RosDbInstance.TagsProperty>)builder.tags;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getDbInstanceCategory() {
            return this.dbInstanceCategory;
        }

        @Override
        public final java.lang.Object getDbInstanceNetworkType() {
            return this.dbInstanceNetworkType;
        }

        @Override
        public final java.lang.Object getDbInstanceStorageType() {
            return this.dbInstanceStorageType;
        }

        @Override
        public final java.lang.Object getDbNodeClass() {
            return this.dbNodeClass;
        }

        @Override
        public final java.lang.Object getDbNodeStorage() {
            return this.dbNodeStorage;
        }

        @Override
        public final java.lang.Object getDbVersion() {
            return this.dbVersion;
        }

        @Override
        public final java.lang.Object getBackupSetId() {
            return this.backupSetId;
        }

        @Override
        public final java.lang.Object getCreateType() {
            return this.createType;
        }

        @Override
        public final java.lang.Object getDbInstanceDescription() {
            return this.dbInstanceDescription;
        }

        @Override
        public final java.lang.Object getDbInstanceIpArray() {
            return this.dbInstanceIpArray;
        }

        @Override
        public final java.lang.Object getEcsSecurityGroupRelations() {
            return this.ecsSecurityGroupRelations;
        }

        @Override
        public final java.lang.Object getMaintainTime() {
            return this.maintainTime;
        }

        @Override
        public final java.lang.Object getPaymentType() {
            return this.paymentType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRestoreType() {
            return this.restoreType;
        }

        @Override
        public final java.lang.Object getSourceDbInstanceId() {
            return this.sourceDbInstanceId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.graphdatabase.RosDbInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbInstanceCategory", om.valueToTree(this.getDbInstanceCategory()));
            data.set("dbInstanceNetworkType", om.valueToTree(this.getDbInstanceNetworkType()));
            data.set("dbInstanceStorageType", om.valueToTree(this.getDbInstanceStorageType()));
            data.set("dbNodeClass", om.valueToTree(this.getDbNodeClass()));
            data.set("dbNodeStorage", om.valueToTree(this.getDbNodeStorage()));
            data.set("dbVersion", om.valueToTree(this.getDbVersion()));
            if (this.getBackupSetId() != null) {
                data.set("backupSetId", om.valueToTree(this.getBackupSetId()));
            }
            if (this.getCreateType() != null) {
                data.set("createType", om.valueToTree(this.getCreateType()));
            }
            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
            }
            if (this.getDbInstanceIpArray() != null) {
                data.set("dbInstanceIpArray", om.valueToTree(this.getDbInstanceIpArray()));
            }
            if (this.getEcsSecurityGroupRelations() != null) {
                data.set("ecsSecurityGroupRelations", om.valueToTree(this.getEcsSecurityGroupRelations()));
            }
            if (this.getMaintainTime() != null) {
                data.set("maintainTime", om.valueToTree(this.getMaintainTime()));
            }
            if (this.getPaymentType() != null) {
                data.set("paymentType", om.valueToTree(this.getPaymentType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRestoreType() != null) {
                data.set("restoreType", om.valueToTree(this.getRestoreType()));
            }
            if (this.getSourceDbInstanceId() != null) {
                data.set("sourceDbInstanceId", om.valueToTree(this.getSourceDbInstanceId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-graphdatabase.RosDbInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDbInstanceProps.Jsii$Proxy that = (RosDbInstanceProps.Jsii$Proxy) o;

            if (!dbInstanceCategory.equals(that.dbInstanceCategory)) return false;
            if (!dbInstanceNetworkType.equals(that.dbInstanceNetworkType)) return false;
            if (!dbInstanceStorageType.equals(that.dbInstanceStorageType)) return false;
            if (!dbNodeClass.equals(that.dbNodeClass)) return false;
            if (!dbNodeStorage.equals(that.dbNodeStorage)) return false;
            if (!dbVersion.equals(that.dbVersion)) return false;
            if (this.backupSetId != null ? !this.backupSetId.equals(that.backupSetId) : that.backupSetId != null) return false;
            if (this.createType != null ? !this.createType.equals(that.createType) : that.createType != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.dbInstanceIpArray != null ? !this.dbInstanceIpArray.equals(that.dbInstanceIpArray) : that.dbInstanceIpArray != null) return false;
            if (this.ecsSecurityGroupRelations != null ? !this.ecsSecurityGroupRelations.equals(that.ecsSecurityGroupRelations) : that.ecsSecurityGroupRelations != null) return false;
            if (this.maintainTime != null ? !this.maintainTime.equals(that.maintainTime) : that.maintainTime != null) return false;
            if (this.paymentType != null ? !this.paymentType.equals(that.paymentType) : that.paymentType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.restoreType != null ? !this.restoreType.equals(that.restoreType) : that.restoreType != null) return false;
            if (this.sourceDbInstanceId != null ? !this.sourceDbInstanceId.equals(that.sourceDbInstanceId) : that.sourceDbInstanceId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceCategory.hashCode();
            result = 31 * result + (this.dbInstanceNetworkType.hashCode());
            result = 31 * result + (this.dbInstanceStorageType.hashCode());
            result = 31 * result + (this.dbNodeClass.hashCode());
            result = 31 * result + (this.dbNodeStorage.hashCode());
            result = 31 * result + (this.dbVersion.hashCode());
            result = 31 * result + (this.backupSetId != null ? this.backupSetId.hashCode() : 0);
            result = 31 * result + (this.createType != null ? this.createType.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.dbInstanceIpArray != null ? this.dbInstanceIpArray.hashCode() : 0);
            result = 31 * result + (this.ecsSecurityGroupRelations != null ? this.ecsSecurityGroupRelations.hashCode() : 0);
            result = 31 * result + (this.maintainTime != null ? this.maintainTime.hashCode() : 0);
            result = 31 * result + (this.paymentType != null ? this.paymentType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.restoreType != null ? this.restoreType.hashCode() : 0);
            result = 31 * result + (this.sourceDbInstanceId != null ? this.sourceDbInstanceId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
