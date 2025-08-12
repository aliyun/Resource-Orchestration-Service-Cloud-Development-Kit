package com.aliyun.ros.cdk.rds.datasource;

/**
 * Properties for defining a <code>RosDBInstances</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstances
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:49.989Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.datasource.RosDBInstancesProps")
@software.amazon.jsii.Jsii.Proxy(RosDBInstancesProps.Jsii$Proxy.class)
public interface RosDBInstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionString() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceClass() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEngine() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEngineVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExpired() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceLevel() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceNetworkType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSearchKey() {
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
     * @return a {@link Builder} of {@link RosDBInstancesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDBInstancesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDBInstancesProps> {
        java.lang.Object connectionMode;
        java.lang.Object connectionString;
        java.lang.Object dbInstanceClass;
        java.lang.Object dbInstanceId;
        java.lang.Object dbInstanceStatus;
        java.lang.Object dbInstanceType;
        java.lang.Object dedicatedHostGroupId;
        java.lang.Object dedicatedHostId;
        java.lang.Object engine;
        java.lang.Object engineVersion;
        java.lang.Object expired;
        java.lang.Object instanceLevel;
        java.lang.Object instanceNetworkType;
        java.lang.Object payType;
        java.lang.Object proxyId;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;
        java.lang.Object searchKey;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link RosDBInstancesProps#getConnectionMode}
         * @param connectionMode the value to be set.
         * @return {@code this}
         */
        public Builder connectionMode(java.lang.String connectionMode) {
            this.connectionMode = connectionMode;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getConnectionMode}
         * @param connectionMode the value to be set.
         * @return {@code this}
         */
        public Builder connectionMode(com.aliyun.ros.cdk.core.IResolvable connectionMode) {
            this.connectionMode = connectionMode;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getConnectionString}
         * @param connectionString the value to be set.
         * @return {@code this}
         */
        public Builder connectionString(java.lang.String connectionString) {
            this.connectionString = connectionString;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getConnectionString}
         * @param connectionString the value to be set.
         * @return {@code this}
         */
        public Builder connectionString(com.aliyun.ros.cdk.core.IResolvable connectionString) {
            this.connectionString = connectionString;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getDbInstanceClass}
         * @param dbInstanceClass the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceClass(java.lang.String dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getDbInstanceClass}
         * @param dbInstanceClass the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceClass(com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getDbInstanceId}
         * @param dbInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getDbInstanceId}
         * @param dbInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getDbInstanceStatus}
         * @param dbInstanceStatus the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceStatus(java.lang.String dbInstanceStatus) {
            this.dbInstanceStatus = dbInstanceStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getDbInstanceStatus}
         * @param dbInstanceStatus the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceStatus(com.aliyun.ros.cdk.core.IResolvable dbInstanceStatus) {
            this.dbInstanceStatus = dbInstanceStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getDbInstanceType}
         * @param dbInstanceType the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceType(java.lang.String dbInstanceType) {
            this.dbInstanceType = dbInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getDbInstanceType}
         * @param dbInstanceType the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceType(com.aliyun.ros.cdk.core.IResolvable dbInstanceType) {
            this.dbInstanceType = dbInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(java.lang.String dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getDedicatedHostId}
         * @param dedicatedHostId the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostId(java.lang.String dedicatedHostId) {
            this.dedicatedHostId = dedicatedHostId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getDedicatedHostId}
         * @param dedicatedHostId the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostId) {
            this.dedicatedHostId = dedicatedHostId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getEngine}
         * @param engine the value to be set.
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getEngine}
         * @param engine the value to be set.
         * @return {@code this}
         */
        public Builder engine(com.aliyun.ros.cdk.core.IResolvable engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getEngineVersion}
         * @param engineVersion the value to be set.
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getEngineVersion}
         * @param engineVersion the value to be set.
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getExpired}
         * @param expired the value to be set.
         * @return {@code this}
         */
        public Builder expired(java.lang.String expired) {
            this.expired = expired;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getExpired}
         * @param expired the value to be set.
         * @return {@code this}
         */
        public Builder expired(com.aliyun.ros.cdk.core.IResolvable expired) {
            this.expired = expired;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getInstanceLevel}
         * @param instanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder instanceLevel(java.lang.Number instanceLevel) {
            this.instanceLevel = instanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getInstanceLevel}
         * @param instanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder instanceLevel(com.aliyun.ros.cdk.core.IResolvable instanceLevel) {
            this.instanceLevel = instanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getInstanceNetworkType}
         * @param instanceNetworkType the value to be set.
         * @return {@code this}
         */
        public Builder instanceNetworkType(java.lang.String instanceNetworkType) {
            this.instanceNetworkType = instanceNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getInstanceNetworkType}
         * @param instanceNetworkType the value to be set.
         * @return {@code this}
         */
        public Builder instanceNetworkType(com.aliyun.ros.cdk.core.IResolvable instanceNetworkType) {
            this.instanceNetworkType = instanceNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getPayType}
         * @param payType the value to be set.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getPayType}
         * @param payType the value to be set.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getProxyId}
         * @param proxyId the value to be set.
         * @return {@code this}
         */
        public Builder proxyId(java.lang.String proxyId) {
            this.proxyId = proxyId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getProxyId}
         * @param proxyId the value to be set.
         * @return {@code this}
         */
        public Builder proxyId(com.aliyun.ros.cdk.core.IResolvable proxyId) {
            this.proxyId = proxyId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getSearchKey}
         * @param searchKey the value to be set.
         * @return {@code this}
         */
        public Builder searchKey(java.lang.String searchKey) {
            this.searchKey = searchKey;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getSearchKey}
         * @param searchKey the value to be set.
         * @return {@code this}
         */
        public Builder searchKey(com.aliyun.ros.cdk.core.IResolvable searchKey) {
            this.searchKey = searchKey;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstancesProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDBInstancesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDBInstancesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDBInstancesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDBInstancesProps {
        private final java.lang.Object connectionMode;
        private final java.lang.Object connectionString;
        private final java.lang.Object dbInstanceClass;
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object dbInstanceStatus;
        private final java.lang.Object dbInstanceType;
        private final java.lang.Object dedicatedHostGroupId;
        private final java.lang.Object dedicatedHostId;
        private final java.lang.Object engine;
        private final java.lang.Object engineVersion;
        private final java.lang.Object expired;
        private final java.lang.Object instanceLevel;
        private final java.lang.Object instanceNetworkType;
        private final java.lang.Object payType;
        private final java.lang.Object proxyId;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object searchKey;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.connectionMode = software.amazon.jsii.Kernel.get(this, "connectionMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionString = software.amazon.jsii.Kernel.get(this, "connectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceClass = software.amazon.jsii.Kernel.get(this, "dbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceStatus = software.amazon.jsii.Kernel.get(this, "dbInstanceStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceType = software.amazon.jsii.Kernel.get(this, "dbInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedHostGroupId = software.amazon.jsii.Kernel.get(this, "dedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedHostId = software.amazon.jsii.Kernel.get(this, "dedicatedHostId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engine = software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.expired = software.amazon.jsii.Kernel.get(this, "expired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceLevel = software.amazon.jsii.Kernel.get(this, "instanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceNetworkType = software.amazon.jsii.Kernel.get(this, "instanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyId = software.amazon.jsii.Kernel.get(this, "proxyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.searchKey = software.amazon.jsii.Kernel.get(this, "searchKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.connectionMode = builder.connectionMode;
            this.connectionString = builder.connectionString;
            this.dbInstanceClass = builder.dbInstanceClass;
            this.dbInstanceId = builder.dbInstanceId;
            this.dbInstanceStatus = builder.dbInstanceStatus;
            this.dbInstanceType = builder.dbInstanceType;
            this.dedicatedHostGroupId = builder.dedicatedHostGroupId;
            this.dedicatedHostId = builder.dedicatedHostId;
            this.engine = builder.engine;
            this.engineVersion = builder.engineVersion;
            this.expired = builder.expired;
            this.instanceLevel = builder.instanceLevel;
            this.instanceNetworkType = builder.instanceNetworkType;
            this.payType = builder.payType;
            this.proxyId = builder.proxyId;
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupId = builder.resourceGroupId;
            this.searchKey = builder.searchKey;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getConnectionMode() {
            return this.connectionMode;
        }

        @Override
        public final java.lang.Object getConnectionString() {
            return this.connectionString;
        }

        @Override
        public final java.lang.Object getDbInstanceClass() {
            return this.dbInstanceClass;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getDbInstanceStatus() {
            return this.dbInstanceStatus;
        }

        @Override
        public final java.lang.Object getDbInstanceType() {
            return this.dbInstanceType;
        }

        @Override
        public final java.lang.Object getDedicatedHostGroupId() {
            return this.dedicatedHostGroupId;
        }

        @Override
        public final java.lang.Object getDedicatedHostId() {
            return this.dedicatedHostId;
        }

        @Override
        public final java.lang.Object getEngine() {
            return this.engine;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.Object getExpired() {
            return this.expired;
        }

        @Override
        public final java.lang.Object getInstanceLevel() {
            return this.instanceLevel;
        }

        @Override
        public final java.lang.Object getInstanceNetworkType() {
            return this.instanceNetworkType;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getProxyId() {
            return this.proxyId;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSearchKey() {
            return this.searchKey;
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

            if (this.getConnectionMode() != null) {
                data.set("connectionMode", om.valueToTree(this.getConnectionMode()));
            }
            if (this.getConnectionString() != null) {
                data.set("connectionString", om.valueToTree(this.getConnectionString()));
            }
            if (this.getDbInstanceClass() != null) {
                data.set("dbInstanceClass", om.valueToTree(this.getDbInstanceClass()));
            }
            if (this.getDbInstanceId() != null) {
                data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            }
            if (this.getDbInstanceStatus() != null) {
                data.set("dbInstanceStatus", om.valueToTree(this.getDbInstanceStatus()));
            }
            if (this.getDbInstanceType() != null) {
                data.set("dbInstanceType", om.valueToTree(this.getDbInstanceType()));
            }
            if (this.getDedicatedHostGroupId() != null) {
                data.set("dedicatedHostGroupId", om.valueToTree(this.getDedicatedHostGroupId()));
            }
            if (this.getDedicatedHostId() != null) {
                data.set("dedicatedHostId", om.valueToTree(this.getDedicatedHostId()));
            }
            if (this.getEngine() != null) {
                data.set("engine", om.valueToTree(this.getEngine()));
            }
            if (this.getEngineVersion() != null) {
                data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            }
            if (this.getExpired() != null) {
                data.set("expired", om.valueToTree(this.getExpired()));
            }
            if (this.getInstanceLevel() != null) {
                data.set("instanceLevel", om.valueToTree(this.getInstanceLevel()));
            }
            if (this.getInstanceNetworkType() != null) {
                data.set("instanceNetworkType", om.valueToTree(this.getInstanceNetworkType()));
            }
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
            }
            if (this.getProxyId() != null) {
                data.set("proxyId", om.valueToTree(this.getProxyId()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSearchKey() != null) {
                data.set("searchKey", om.valueToTree(this.getSearchKey()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.datasource.RosDBInstancesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDBInstancesProps.Jsii$Proxy that = (RosDBInstancesProps.Jsii$Proxy) o;

            if (this.connectionMode != null ? !this.connectionMode.equals(that.connectionMode) : that.connectionMode != null) return false;
            if (this.connectionString != null ? !this.connectionString.equals(that.connectionString) : that.connectionString != null) return false;
            if (this.dbInstanceClass != null ? !this.dbInstanceClass.equals(that.dbInstanceClass) : that.dbInstanceClass != null) return false;
            if (this.dbInstanceId != null ? !this.dbInstanceId.equals(that.dbInstanceId) : that.dbInstanceId != null) return false;
            if (this.dbInstanceStatus != null ? !this.dbInstanceStatus.equals(that.dbInstanceStatus) : that.dbInstanceStatus != null) return false;
            if (this.dbInstanceType != null ? !this.dbInstanceType.equals(that.dbInstanceType) : that.dbInstanceType != null) return false;
            if (this.dedicatedHostGroupId != null ? !this.dedicatedHostGroupId.equals(that.dedicatedHostGroupId) : that.dedicatedHostGroupId != null) return false;
            if (this.dedicatedHostId != null ? !this.dedicatedHostId.equals(that.dedicatedHostId) : that.dedicatedHostId != null) return false;
            if (this.engine != null ? !this.engine.equals(that.engine) : that.engine != null) return false;
            if (this.engineVersion != null ? !this.engineVersion.equals(that.engineVersion) : that.engineVersion != null) return false;
            if (this.expired != null ? !this.expired.equals(that.expired) : that.expired != null) return false;
            if (this.instanceLevel != null ? !this.instanceLevel.equals(that.instanceLevel) : that.instanceLevel != null) return false;
            if (this.instanceNetworkType != null ? !this.instanceNetworkType.equals(that.instanceNetworkType) : that.instanceNetworkType != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.proxyId != null ? !this.proxyId.equals(that.proxyId) : that.proxyId != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.searchKey != null ? !this.searchKey.equals(that.searchKey) : that.searchKey != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.connectionMode != null ? this.connectionMode.hashCode() : 0;
            result = 31 * result + (this.connectionString != null ? this.connectionString.hashCode() : 0);
            result = 31 * result + (this.dbInstanceClass != null ? this.dbInstanceClass.hashCode() : 0);
            result = 31 * result + (this.dbInstanceId != null ? this.dbInstanceId.hashCode() : 0);
            result = 31 * result + (this.dbInstanceStatus != null ? this.dbInstanceStatus.hashCode() : 0);
            result = 31 * result + (this.dbInstanceType != null ? this.dbInstanceType.hashCode() : 0);
            result = 31 * result + (this.dedicatedHostGroupId != null ? this.dedicatedHostGroupId.hashCode() : 0);
            result = 31 * result + (this.dedicatedHostId != null ? this.dedicatedHostId.hashCode() : 0);
            result = 31 * result + (this.engine != null ? this.engine.hashCode() : 0);
            result = 31 * result + (this.engineVersion != null ? this.engineVersion.hashCode() : 0);
            result = 31 * result + (this.expired != null ? this.expired.hashCode() : 0);
            result = 31 * result + (this.instanceLevel != null ? this.instanceLevel.hashCode() : 0);
            result = 31 * result + (this.instanceNetworkType != null ? this.instanceNetworkType.hashCode() : 0);
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.proxyId != null ? this.proxyId.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.searchKey != null ? this.searchKey.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
