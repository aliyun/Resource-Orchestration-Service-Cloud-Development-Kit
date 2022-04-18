package com.aliyun.ros.cdk.mongodb;

/**
 * Properties for defining a `ALIYUN::MONGODB::ServerlessInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:26.394Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.ServerlessInstanceProps")
@software.amazon.jsii.Jsii.Proxy(ServerlessInstanceProps.Jsii$Proxy.class)
public interface ServerlessInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbInstanceStorage: Database instance storage size.
     * <p>
     * MongoDB is [1,10], increased every 1 GB, Unit in GB
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceStorage();

    /**
     * Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountPassword() {
        return null;
    }

    /**
     * Property autoRenew: Indicates whether automatic renewal is enabled for the instance.
     * <p>
     * Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property dbInstanceDescription: Description of created database instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return null;
    }

    /**
     * Property engineVersion: Database instance version.Support 4.2.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEngineVersion() {
        return null;
    }

    /**
     * Property networkType: The instance network type.
     * <p>
     * Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
        return null;
    }

    /**
     * Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodPriceType: Charge period for created instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodPriceType() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property securityIpArray: Security ips to add or remove.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpArray() {
        return null;
    }

    /**
     * Property storageEngine: Database storage engine.Support WiredTiger.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageEngine() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.mongodb.RosServerlessInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).
     * <p>
     * Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTdeStatus() {
        return null;
    }

    /**
     * Property vpcId: The VPC id to create mongodb instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * Property zoneId: On which zone to create the instance.
     * <p>
     * If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ServerlessInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ServerlessInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ServerlessInstanceProps> {
        java.lang.Object dbInstanceStorage;
        java.lang.Object accountPassword;
        java.lang.Object autoRenew;
        java.lang.Object chargeType;
        java.lang.Object dbInstanceDescription;
        java.lang.Object engineVersion;
        java.lang.Object networkType;
        java.lang.Object period;
        java.lang.Object periodPriceType;
        java.lang.Object resourceGroupId;
        java.lang.Object securityIpArray;
        java.lang.Object storageEngine;
        java.util.List<com.aliyun.ros.cdk.mongodb.RosServerlessInstance.TagsProperty> tags;
        java.lang.Object tdeStatus;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link ServerlessInstanceProps#getDbInstanceStorage}
         * @param dbInstanceStorage Property dbInstanceStorage: Database instance storage size. This parameter is required.
         *                          MongoDB is [1,10], increased every 1 GB, Unit in GB
         * @return {@code this}
         */
        public Builder dbInstanceStorage(java.lang.Number dbInstanceStorage) {
            this.dbInstanceStorage = dbInstanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getDbInstanceStorage}
         * @param dbInstanceStorage Property dbInstanceStorage: Database instance storage size. This parameter is required.
         *                          MongoDB is [1,10], increased every 1 GB, Unit in GB
         * @return {@code this}
         */
        public Builder dbInstanceStorage(com.aliyun.ros.cdk.core.IResolvable dbInstanceStorage) {
            this.dbInstanceStorage = dbInstanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getAccountPassword}
         * @param accountPassword Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
         * @return {@code this}
         */
        public Builder accountPassword(java.lang.String accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getAccountPassword}
         * @param accountPassword Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
         * @return {@code this}
         */
        public Builder accountPassword(com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Indicates whether automatic renewal is enabled for the instance.
         *                  Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Indicates whether automatic renewal is enabled for the instance.
         *                  Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: Database instance version.Support 4.2.
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: Database instance version.Support 4.2.
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getNetworkType}
         * @param networkType Property networkType: The instance network type.
         *                    Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getNetworkType}
         * @param networkType Property networkType: The instance network type.
         *                    Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getPeriod}
         * @param period Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getPeriod}
         * @param period Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getPeriodPriceType}
         * @param periodPriceType Property periodPriceType: Charge period for created instance.
         * @return {@code this}
         */
        public Builder periodPriceType(java.lang.String periodPriceType) {
            this.periodPriceType = periodPriceType;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getPeriodPriceType}
         * @param periodPriceType Property periodPriceType: Charge period for created instance.
         * @return {@code this}
         */
        public Builder periodPriceType(com.aliyun.ros.cdk.core.IResolvable periodPriceType) {
            this.periodPriceType = periodPriceType;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getSecurityIpArray}
         * @param securityIpArray Property securityIpArray: Security ips to add or remove.
         * @return {@code this}
         */
        public Builder securityIpArray(java.lang.String securityIpArray) {
            this.securityIpArray = securityIpArray;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getSecurityIpArray}
         * @param securityIpArray Property securityIpArray: Security ips to add or remove.
         * @return {@code this}
         */
        public Builder securityIpArray(com.aliyun.ros.cdk.core.IResolvable securityIpArray) {
            this.securityIpArray = securityIpArray;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getStorageEngine}
         * @param storageEngine Property storageEngine: Database storage engine.Support WiredTiger.
         * @return {@code this}
         */
        public Builder storageEngine(java.lang.String storageEngine) {
            this.storageEngine = storageEngine;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getStorageEngine}
         * @param storageEngine Property storageEngine: Database storage engine.Support WiredTiger.
         * @return {@code this}
         */
        public Builder storageEngine(com.aliyun.ros.cdk.core.IResolvable storageEngine) {
            this.storageEngine = storageEngine;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.mongodb.RosServerlessInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.mongodb.RosServerlessInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getTdeStatus}
         * @param tdeStatus Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).
         *                  Valid values:
         *                  true: enable TDE
         *                  false: disable TDE (default)
         *                  Note: You cannot disable TDE after it is enabled.
         * @return {@code this}
         */
        public Builder tdeStatus(java.lang.Boolean tdeStatus) {
            this.tdeStatus = tdeStatus;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getTdeStatus}
         * @param tdeStatus Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).
         *                  Valid values:
         *                  true: enable TDE
         *                  false: disable TDE (default)
         *                  Note: You cannot disable TDE after it is enabled.
         * @return {@code this}
         */
        public Builder tdeStatus(com.aliyun.ros.cdk.core.IResolvable tdeStatus) {
            this.tdeStatus = tdeStatus;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id to create mongodb instance.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id to create mongodb instance.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create mongodb instance.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create mongodb instance.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getZoneId}
         * @param zoneId Property zoneId: On which zone to create the instance.
         *               If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessInstanceProps#getZoneId}
         * @param zoneId Property zoneId: On which zone to create the instance.
         *               If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ServerlessInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ServerlessInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ServerlessInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServerlessInstanceProps {
        private final java.lang.Object dbInstanceStorage;
        private final java.lang.Object accountPassword;
        private final java.lang.Object autoRenew;
        private final java.lang.Object chargeType;
        private final java.lang.Object dbInstanceDescription;
        private final java.lang.Object engineVersion;
        private final java.lang.Object networkType;
        private final java.lang.Object period;
        private final java.lang.Object periodPriceType;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityIpArray;
        private final java.lang.Object storageEngine;
        private final java.util.List<com.aliyun.ros.cdk.mongodb.RosServerlessInstance.TagsProperty> tags;
        private final java.lang.Object tdeStatus;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceStorage = software.amazon.jsii.Kernel.get(this, "dbInstanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPassword = software.amazon.jsii.Kernel.get(this, "accountPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodPriceType = software.amazon.jsii.Kernel.get(this, "periodPriceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpArray = software.amazon.jsii.Kernel.get(this, "securityIpArray", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageEngine = software.amazon.jsii.Kernel.get(this, "storageEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mongodb.RosServerlessInstance.TagsProperty.class)));
            this.tdeStatus = software.amazon.jsii.Kernel.get(this, "tdeStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.dbInstanceStorage = java.util.Objects.requireNonNull(builder.dbInstanceStorage, "dbInstanceStorage is required");
            this.accountPassword = builder.accountPassword;
            this.autoRenew = builder.autoRenew;
            this.chargeType = builder.chargeType;
            this.dbInstanceDescription = builder.dbInstanceDescription;
            this.engineVersion = builder.engineVersion;
            this.networkType = builder.networkType;
            this.period = builder.period;
            this.periodPriceType = builder.periodPriceType;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityIpArray = builder.securityIpArray;
            this.storageEngine = builder.storageEngine;
            this.tags = (java.util.List<com.aliyun.ros.cdk.mongodb.RosServerlessInstance.TagsProperty>)builder.tags;
            this.tdeStatus = builder.tdeStatus;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getDbInstanceStorage() {
            return this.dbInstanceStorage;
        }

        @Override
        public final java.lang.Object getAccountPassword() {
            return this.accountPassword;
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
        public final java.lang.Object getDbInstanceDescription() {
            return this.dbInstanceDescription;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodPriceType() {
            return this.periodPriceType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecurityIpArray() {
            return this.securityIpArray;
        }

        @Override
        public final java.lang.Object getStorageEngine() {
            return this.storageEngine;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.mongodb.RosServerlessInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTdeStatus() {
            return this.tdeStatus;
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

            data.set("dbInstanceStorage", om.valueToTree(this.getDbInstanceStorage()));
            if (this.getAccountPassword() != null) {
                data.set("accountPassword", om.valueToTree(this.getAccountPassword()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
            }
            if (this.getEngineVersion() != null) {
                data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            }
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodPriceType() != null) {
                data.set("periodPriceType", om.valueToTree(this.getPeriodPriceType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityIpArray() != null) {
                data.set("securityIpArray", om.valueToTree(this.getSecurityIpArray()));
            }
            if (this.getStorageEngine() != null) {
                data.set("storageEngine", om.valueToTree(this.getStorageEngine()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTdeStatus() != null) {
                data.set("tdeStatus", om.valueToTree(this.getTdeStatus()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.ServerlessInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ServerlessInstanceProps.Jsii$Proxy that = (ServerlessInstanceProps.Jsii$Proxy) o;

            if (!dbInstanceStorage.equals(that.dbInstanceStorage)) return false;
            if (this.accountPassword != null ? !this.accountPassword.equals(that.accountPassword) : that.accountPassword != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.engineVersion != null ? !this.engineVersion.equals(that.engineVersion) : that.engineVersion != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodPriceType != null ? !this.periodPriceType.equals(that.periodPriceType) : that.periodPriceType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityIpArray != null ? !this.securityIpArray.equals(that.securityIpArray) : that.securityIpArray != null) return false;
            if (this.storageEngine != null ? !this.storageEngine.equals(that.storageEngine) : that.storageEngine != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.tdeStatus != null ? !this.tdeStatus.equals(that.tdeStatus) : that.tdeStatus != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceStorage.hashCode();
            result = 31 * result + (this.accountPassword != null ? this.accountPassword.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.engineVersion != null ? this.engineVersion.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodPriceType != null ? this.periodPriceType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityIpArray != null ? this.securityIpArray.hashCode() : 0);
            result = 31 * result + (this.storageEngine != null ? this.storageEngine.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.tdeStatus != null ? this.tdeStatus.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
