package com.aliyun.ros.cdk.clickhouse;

/**
 * Properties for defining a `ALIYUN::ClickHouse::DBCluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:03.065Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.RosDBClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosDBClusterProps.Jsii$Proxy.class)
public interface RosDBClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCategory();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterNetworkType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbNodeCount();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbNodeStorage();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbNodeStorageType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPaymentType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbClusterDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionKey() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUsedTime() {
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
     * @return a {@link Builder} of {@link RosDBClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDBClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDBClusterProps> {
        java.lang.Object category;
        java.lang.Object dbClusterNetworkType;
        java.lang.Object dbClusterType;
        java.lang.Object dbClusterVersion;
        java.lang.Object dbNodeCount;
        java.lang.Object dbNodeStorage;
        java.lang.Object dbNodeStorageType;
        java.lang.Object paymentType;
        java.lang.Object dbClusterDescription;
        java.lang.Object encryptionKey;
        java.lang.Object encryptionType;
        java.lang.Object period;
        java.lang.Object usedTime;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link RosDBClusterProps#getCategory}
         * @param category the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getCategory}
         * @param category the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterNetworkType}
         * @param dbClusterNetworkType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterNetworkType(java.lang.String dbClusterNetworkType) {
            this.dbClusterNetworkType = dbClusterNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterNetworkType}
         * @param dbClusterNetworkType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterNetworkType(com.aliyun.ros.cdk.core.IResolvable dbClusterNetworkType) {
            this.dbClusterNetworkType = dbClusterNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterType}
         * @param dbClusterType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterType(java.lang.String dbClusterType) {
            this.dbClusterType = dbClusterType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterType}
         * @param dbClusterType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterType(com.aliyun.ros.cdk.core.IResolvable dbClusterType) {
            this.dbClusterType = dbClusterType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterVersion}
         * @param dbClusterVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterVersion(java.lang.String dbClusterVersion) {
            this.dbClusterVersion = dbClusterVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterVersion}
         * @param dbClusterVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterVersion(com.aliyun.ros.cdk.core.IResolvable dbClusterVersion) {
            this.dbClusterVersion = dbClusterVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbNodeCount}
         * @param dbNodeCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNodeCount(java.lang.Number dbNodeCount) {
            this.dbNodeCount = dbNodeCount;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbNodeCount}
         * @param dbNodeCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNodeCount(com.aliyun.ros.cdk.core.IResolvable dbNodeCount) {
            this.dbNodeCount = dbNodeCount;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbNodeStorage}
         * @param dbNodeStorage the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNodeStorage(java.lang.Number dbNodeStorage) {
            this.dbNodeStorage = dbNodeStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbNodeStorage}
         * @param dbNodeStorage the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNodeStorage(com.aliyun.ros.cdk.core.IResolvable dbNodeStorage) {
            this.dbNodeStorage = dbNodeStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbNodeStorageType}
         * @param dbNodeStorageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNodeStorageType(java.lang.String dbNodeStorageType) {
            this.dbNodeStorageType = dbNodeStorageType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbNodeStorageType}
         * @param dbNodeStorageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNodeStorageType(com.aliyun.ros.cdk.core.IResolvable dbNodeStorageType) {
            this.dbNodeStorageType = dbNodeStorageType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getPaymentType}
         * @param paymentType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getPaymentType}
         * @param paymentType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterDescription}
         * @param dbClusterDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterDescription(java.lang.String dbClusterDescription) {
            this.dbClusterDescription = dbClusterDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterDescription}
         * @param dbClusterDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterDescription(com.aliyun.ros.cdk.core.IResolvable dbClusterDescription) {
            this.dbClusterDescription = dbClusterDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getEncryptionKey}
         * @param encryptionKey the value to be set.
         * @return {@code this}
         */
        public Builder encryptionKey(java.lang.String encryptionKey) {
            this.encryptionKey = encryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getEncryptionKey}
         * @param encryptionKey the value to be set.
         * @return {@code this}
         */
        public Builder encryptionKey(com.aliyun.ros.cdk.core.IResolvable encryptionKey) {
            this.encryptionKey = encryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getEncryptionType}
         * @param encryptionType the value to be set.
         * @return {@code this}
         */
        public Builder encryptionType(java.lang.String encryptionType) {
            this.encryptionType = encryptionType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getEncryptionType}
         * @param encryptionType the value to be set.
         * @return {@code this}
         */
        public Builder encryptionType(com.aliyun.ros.cdk.core.IResolvable encryptionType) {
            this.encryptionType = encryptionType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.String period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getUsedTime}
         * @param usedTime the value to be set.
         * @return {@code this}
         */
        public Builder usedTime(java.lang.String usedTime) {
            this.usedTime = usedTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getUsedTime}
         * @param usedTime the value to be set.
         * @return {@code this}
         */
        public Builder usedTime(com.aliyun.ros.cdk.core.IResolvable usedTime) {
            this.usedTime = usedTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDBClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDBClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDBClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDBClusterProps {
        private final java.lang.Object category;
        private final java.lang.Object dbClusterNetworkType;
        private final java.lang.Object dbClusterType;
        private final java.lang.Object dbClusterVersion;
        private final java.lang.Object dbNodeCount;
        private final java.lang.Object dbNodeStorage;
        private final java.lang.Object dbNodeStorageType;
        private final java.lang.Object paymentType;
        private final java.lang.Object dbClusterDescription;
        private final java.lang.Object encryptionKey;
        private final java.lang.Object encryptionType;
        private final java.lang.Object period;
        private final java.lang.Object usedTime;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterNetworkType = software.amazon.jsii.Kernel.get(this, "dbClusterNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterType = software.amazon.jsii.Kernel.get(this, "dbClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterVersion = software.amazon.jsii.Kernel.get(this, "dbClusterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbNodeCount = software.amazon.jsii.Kernel.get(this, "dbNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbNodeStorage = software.amazon.jsii.Kernel.get(this, "dbNodeStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbNodeStorageType = software.amazon.jsii.Kernel.get(this, "dbNodeStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterDescription = software.amazon.jsii.Kernel.get(this, "dbClusterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptionKey = software.amazon.jsii.Kernel.get(this, "encryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptionType = software.amazon.jsii.Kernel.get(this, "encryptionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.usedTime = software.amazon.jsii.Kernel.get(this, "usedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.category = java.util.Objects.requireNonNull(builder.category, "category is required");
            this.dbClusterNetworkType = java.util.Objects.requireNonNull(builder.dbClusterNetworkType, "dbClusterNetworkType is required");
            this.dbClusterType = java.util.Objects.requireNonNull(builder.dbClusterType, "dbClusterType is required");
            this.dbClusterVersion = java.util.Objects.requireNonNull(builder.dbClusterVersion, "dbClusterVersion is required");
            this.dbNodeCount = java.util.Objects.requireNonNull(builder.dbNodeCount, "dbNodeCount is required");
            this.dbNodeStorage = java.util.Objects.requireNonNull(builder.dbNodeStorage, "dbNodeStorage is required");
            this.dbNodeStorageType = java.util.Objects.requireNonNull(builder.dbNodeStorageType, "dbNodeStorageType is required");
            this.paymentType = java.util.Objects.requireNonNull(builder.paymentType, "paymentType is required");
            this.dbClusterDescription = builder.dbClusterDescription;
            this.encryptionKey = builder.encryptionKey;
            this.encryptionType = builder.encryptionType;
            this.period = builder.period;
            this.usedTime = builder.usedTime;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getCategory() {
            return this.category;
        }

        @Override
        public final java.lang.Object getDbClusterNetworkType() {
            return this.dbClusterNetworkType;
        }

        @Override
        public final java.lang.Object getDbClusterType() {
            return this.dbClusterType;
        }

        @Override
        public final java.lang.Object getDbClusterVersion() {
            return this.dbClusterVersion;
        }

        @Override
        public final java.lang.Object getDbNodeCount() {
            return this.dbNodeCount;
        }

        @Override
        public final java.lang.Object getDbNodeStorage() {
            return this.dbNodeStorage;
        }

        @Override
        public final java.lang.Object getDbNodeStorageType() {
            return this.dbNodeStorageType;
        }

        @Override
        public final java.lang.Object getPaymentType() {
            return this.paymentType;
        }

        @Override
        public final java.lang.Object getDbClusterDescription() {
            return this.dbClusterDescription;
        }

        @Override
        public final java.lang.Object getEncryptionKey() {
            return this.encryptionKey;
        }

        @Override
        public final java.lang.Object getEncryptionType() {
            return this.encryptionType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getUsedTime() {
            return this.usedTime;
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

            data.set("category", om.valueToTree(this.getCategory()));
            data.set("dbClusterNetworkType", om.valueToTree(this.getDbClusterNetworkType()));
            data.set("dbClusterType", om.valueToTree(this.getDbClusterType()));
            data.set("dbClusterVersion", om.valueToTree(this.getDbClusterVersion()));
            data.set("dbNodeCount", om.valueToTree(this.getDbNodeCount()));
            data.set("dbNodeStorage", om.valueToTree(this.getDbNodeStorage()));
            data.set("dbNodeStorageType", om.valueToTree(this.getDbNodeStorageType()));
            data.set("paymentType", om.valueToTree(this.getPaymentType()));
            if (this.getDbClusterDescription() != null) {
                data.set("dbClusterDescription", om.valueToTree(this.getDbClusterDescription()));
            }
            if (this.getEncryptionKey() != null) {
                data.set("encryptionKey", om.valueToTree(this.getEncryptionKey()));
            }
            if (this.getEncryptionType() != null) {
                data.set("encryptionType", om.valueToTree(this.getEncryptionType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getUsedTime() != null) {
                data.set("usedTime", om.valueToTree(this.getUsedTime()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-clickhouse.RosDBClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDBClusterProps.Jsii$Proxy that = (RosDBClusterProps.Jsii$Proxy) o;

            if (!category.equals(that.category)) return false;
            if (!dbClusterNetworkType.equals(that.dbClusterNetworkType)) return false;
            if (!dbClusterType.equals(that.dbClusterType)) return false;
            if (!dbClusterVersion.equals(that.dbClusterVersion)) return false;
            if (!dbNodeCount.equals(that.dbNodeCount)) return false;
            if (!dbNodeStorage.equals(that.dbNodeStorage)) return false;
            if (!dbNodeStorageType.equals(that.dbNodeStorageType)) return false;
            if (!paymentType.equals(that.paymentType)) return false;
            if (this.dbClusterDescription != null ? !this.dbClusterDescription.equals(that.dbClusterDescription) : that.dbClusterDescription != null) return false;
            if (this.encryptionKey != null ? !this.encryptionKey.equals(that.encryptionKey) : that.encryptionKey != null) return false;
            if (this.encryptionType != null ? !this.encryptionType.equals(that.encryptionType) : that.encryptionType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.usedTime != null ? !this.usedTime.equals(that.usedTime) : that.usedTime != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.category.hashCode();
            result = 31 * result + (this.dbClusterNetworkType.hashCode());
            result = 31 * result + (this.dbClusterType.hashCode());
            result = 31 * result + (this.dbClusterVersion.hashCode());
            result = 31 * result + (this.dbNodeCount.hashCode());
            result = 31 * result + (this.dbNodeStorage.hashCode());
            result = 31 * result + (this.dbNodeStorageType.hashCode());
            result = 31 * result + (this.paymentType.hashCode());
            result = 31 * result + (this.dbClusterDescription != null ? this.dbClusterDescription.hashCode() : 0);
            result = 31 * result + (this.encryptionKey != null ? this.encryptionKey.hashCode() : 0);
            result = 31 * result + (this.encryptionType != null ? this.encryptionType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.usedTime != null ? this.usedTime.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
