package com.aliyun.ros.cdk.selectdb;

/**
 * Properties for defining a <code>RosDBInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-selectdb-dbinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:50.594Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.selectdb.$Module.class, fqn = "@alicloud/ros-cdk-selectdb.RosDBInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosDBInstanceProps.Jsii$Proxy.class)
public interface RosDBInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCacheSize();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChargeType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceClass();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngineVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionString() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEngine() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.selectdb.RosDBInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUsedTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDBInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDBInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDBInstanceProps> {
        java.lang.Object cacheSize;
        java.lang.Object chargeType;
        java.lang.Object dbInstanceClass;
        java.lang.Object engineVersion;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;
        java.lang.Object accountPassword;
        java.lang.Object connectionString;
        java.lang.Object dbInstanceDescription;
        java.lang.Object engine;
        java.lang.Object period;
        java.lang.Object resourceGroupId;
        java.lang.Object securityIpList;
        java.util.List<com.aliyun.ros.cdk.selectdb.RosDBInstance.TagsProperty> tags;
        java.lang.Object usedTime;

        /**
         * Sets the value of {@link RosDBInstanceProps#getCacheSize}
         * @param cacheSize the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cacheSize(java.lang.Number cacheSize) {
            this.cacheSize = cacheSize;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getCacheSize}
         * @param cacheSize the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cacheSize(com.aliyun.ros.cdk.core.IResolvable cacheSize) {
            this.cacheSize = cacheSize;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getChargeType}
         * @param chargeType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getChargeType}
         * @param chargeType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceClass}
         * @param dbInstanceClass the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceClass(java.lang.String dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceClass}
         * @param dbInstanceClass the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceClass(com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getEngineVersion}
         * @param engineVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getEngineVersion}
         * @param engineVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getAccountPassword}
         * @param accountPassword the value to be set.
         * @return {@code this}
         */
        public Builder accountPassword(java.lang.String accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getAccountPassword}
         * @param accountPassword the value to be set.
         * @return {@code this}
         */
        public Builder accountPassword(com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.accountPassword = accountPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getConnectionString}
         * @param connectionString the value to be set.
         * @return {@code this}
         */
        public Builder connectionString(java.lang.String connectionString) {
            this.connectionString = connectionString;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getConnectionString}
         * @param connectionString the value to be set.
         * @return {@code this}
         */
        public Builder connectionString(com.aliyun.ros.cdk.core.IResolvable connectionString) {
            this.connectionString = connectionString;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getEngine}
         * @param engine the value to be set.
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getEngine}
         * @param engine the value to be set.
         * @return {@code this}
         */
        public Builder engine(com.aliyun.ros.cdk.core.IResolvable engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.String period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSecurityIpList}
         * @param securityIpList the value to be set.
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSecurityIpList}
         * @param securityIpList the value to be set.
         * @return {@code this}
         */
        public Builder securityIpList(java.util.List<? extends java.lang.Object> securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.selectdb.RosDBInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.selectdb.RosDBInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getUsedTime}
         * @param usedTime the value to be set.
         * @return {@code this}
         */
        public Builder usedTime(java.lang.Number usedTime) {
            this.usedTime = usedTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getUsedTime}
         * @param usedTime the value to be set.
         * @return {@code this}
         */
        public Builder usedTime(com.aliyun.ros.cdk.core.IResolvable usedTime) {
            this.usedTime = usedTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDBInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDBInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDBInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDBInstanceProps {
        private final java.lang.Object cacheSize;
        private final java.lang.Object chargeType;
        private final java.lang.Object dbInstanceClass;
        private final java.lang.Object engineVersion;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;
        private final java.lang.Object accountPassword;
        private final java.lang.Object connectionString;
        private final java.lang.Object dbInstanceDescription;
        private final java.lang.Object engine;
        private final java.lang.Object period;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityIpList;
        private final java.util.List<com.aliyun.ros.cdk.selectdb.RosDBInstance.TagsProperty> tags;
        private final java.lang.Object usedTime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cacheSize = software.amazon.jsii.Kernel.get(this, "cacheSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceClass = software.amazon.jsii.Kernel.get(this, "dbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPassword = software.amazon.jsii.Kernel.get(this, "accountPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionString = software.amazon.jsii.Kernel.get(this, "connectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engine = software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.selectdb.RosDBInstance.TagsProperty.class)));
            this.usedTime = software.amazon.jsii.Kernel.get(this, "usedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cacheSize = java.util.Objects.requireNonNull(builder.cacheSize, "cacheSize is required");
            this.chargeType = java.util.Objects.requireNonNull(builder.chargeType, "chargeType is required");
            this.dbInstanceClass = java.util.Objects.requireNonNull(builder.dbInstanceClass, "dbInstanceClass is required");
            this.engineVersion = java.util.Objects.requireNonNull(builder.engineVersion, "engineVersion is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.accountPassword = builder.accountPassword;
            this.connectionString = builder.connectionString;
            this.dbInstanceDescription = builder.dbInstanceDescription;
            this.engine = builder.engine;
            this.period = builder.period;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityIpList = builder.securityIpList;
            this.tags = (java.util.List<com.aliyun.ros.cdk.selectdb.RosDBInstance.TagsProperty>)builder.tags;
            this.usedTime = builder.usedTime;
        }

        @Override
        public final java.lang.Object getCacheSize() {
            return this.cacheSize;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getDbInstanceClass() {
            return this.dbInstanceClass;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
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
        public final java.lang.Object getAccountPassword() {
            return this.accountPassword;
        }

        @Override
        public final java.lang.Object getConnectionString() {
            return this.connectionString;
        }

        @Override
        public final java.lang.Object getDbInstanceDescription() {
            return this.dbInstanceDescription;
        }

        @Override
        public final java.lang.Object getEngine() {
            return this.engine;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecurityIpList() {
            return this.securityIpList;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.selectdb.RosDBInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getUsedTime() {
            return this.usedTime;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cacheSize", om.valueToTree(this.getCacheSize()));
            data.set("chargeType", om.valueToTree(this.getChargeType()));
            data.set("dbInstanceClass", om.valueToTree(this.getDbInstanceClass()));
            data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getAccountPassword() != null) {
                data.set("accountPassword", om.valueToTree(this.getAccountPassword()));
            }
            if (this.getConnectionString() != null) {
                data.set("connectionString", om.valueToTree(this.getConnectionString()));
            }
            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
            }
            if (this.getEngine() != null) {
                data.set("engine", om.valueToTree(this.getEngine()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityIpList() != null) {
                data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getUsedTime() != null) {
                data.set("usedTime", om.valueToTree(this.getUsedTime()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-selectdb.RosDBInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDBInstanceProps.Jsii$Proxy that = (RosDBInstanceProps.Jsii$Proxy) o;

            if (!cacheSize.equals(that.cacheSize)) return false;
            if (!chargeType.equals(that.chargeType)) return false;
            if (!dbInstanceClass.equals(that.dbInstanceClass)) return false;
            if (!engineVersion.equals(that.engineVersion)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.accountPassword != null ? !this.accountPassword.equals(that.accountPassword) : that.accountPassword != null) return false;
            if (this.connectionString != null ? !this.connectionString.equals(that.connectionString) : that.connectionString != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.engine != null ? !this.engine.equals(that.engine) : that.engine != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityIpList != null ? !this.securityIpList.equals(that.securityIpList) : that.securityIpList != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.usedTime != null ? this.usedTime.equals(that.usedTime) : that.usedTime == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cacheSize.hashCode();
            result = 31 * result + (this.chargeType.hashCode());
            result = 31 * result + (this.dbInstanceClass.hashCode());
            result = 31 * result + (this.engineVersion.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.accountPassword != null ? this.accountPassword.hashCode() : 0);
            result = 31 * result + (this.connectionString != null ? this.connectionString.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.engine != null ? this.engine.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityIpList != null ? this.securityIpList.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.usedTime != null ? this.usedTime.hashCode() : 0);
            return result;
        }
    }
}
