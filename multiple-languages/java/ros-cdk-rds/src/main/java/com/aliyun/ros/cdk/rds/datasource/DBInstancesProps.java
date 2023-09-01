package com.aliyun.ros.cdk.rds.datasource;

/**
 * Properties for defining a <code>DATASOURCE::RDS::DBInstances</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:39.189Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.datasource.DBInstancesProps")
@software.amazon.jsii.Jsii.Proxy(DBInstancesProps.Jsii$Proxy.class)
public interface DBInstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property connectionMode: The connection mode of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionMode() {
        return null;
    }

    /**
     * Property connectionString: The endpoint of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionString() {
        return null;
    }

    /**
     * Property dbInstanceClass: The instance type of the instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceClass() {
        return null;
    }

    /**
     * Property dbInstanceId: The ID of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceId() {
        return null;
    }

    /**
     * Property dbInstanceStatus: The status of the instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceStatus() {
        return null;
    }

    /**
     * Property dbInstanceType: The role of the instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceType() {
        return null;
    }

    /**
     * Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostGroupId() {
        return null;
    }

    /**
     * Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostId() {
        return null;
    }

    /**
     * Property engine: The database engine that is run by the instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEngine() {
        return null;
    }

    /**
     * Property engineVersion: The version of the database engine that is run by the instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEngineVersion() {
        return null;
    }

    /**
     * Property expired: Specifies whether the instances have expired.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExpired() {
        return null;
    }

    /**
     * Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceLevel() {
        return null;
    }

    /**
     * Property instanceNetworkType: The network type of the instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceNetworkType() {
        return null;
    }

    /**
     * Property payType: The billing method of the instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     * Property proxyId: The ID of the proxy mode.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxyId() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the instances belong.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSearchKey() {
        return null;
    }

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * Property zoneId: The ID of the zone to which the instances belong.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DBInstancesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DBInstancesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DBInstancesProps> {
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
        java.lang.Object resourceGroupId;
        java.lang.Object searchKey;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link DBInstancesProps#getConnectionMode}
         * @param connectionMode Property connectionMode: The connection mode of the instance.
         * @return {@code this}
         */
        public Builder connectionMode(java.lang.String connectionMode) {
            this.connectionMode = connectionMode;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getConnectionMode}
         * @param connectionMode Property connectionMode: The connection mode of the instance.
         * @return {@code this}
         */
        public Builder connectionMode(com.aliyun.ros.cdk.core.IResolvable connectionMode) {
            this.connectionMode = connectionMode;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getConnectionString}
         * @param connectionString Property connectionString: The endpoint of the instance.
         * @return {@code this}
         */
        public Builder connectionString(java.lang.String connectionString) {
            this.connectionString = connectionString;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getConnectionString}
         * @param connectionString Property connectionString: The endpoint of the instance.
         * @return {@code this}
         */
        public Builder connectionString(com.aliyun.ros.cdk.core.IResolvable connectionString) {
            this.connectionString = connectionString;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getDbInstanceClass}
         * @param dbInstanceClass Property dbInstanceClass: The instance type of the instances.
         * @return {@code this}
         */
        public Builder dbInstanceClass(java.lang.String dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getDbInstanceClass}
         * @param dbInstanceClass Property dbInstanceClass: The instance type of the instances.
         * @return {@code this}
         */
        public Builder dbInstanceClass(com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getDbInstanceStatus}
         * @param dbInstanceStatus Property dbInstanceStatus: The status of the instances.
         * @return {@code this}
         */
        public Builder dbInstanceStatus(java.lang.String dbInstanceStatus) {
            this.dbInstanceStatus = dbInstanceStatus;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getDbInstanceStatus}
         * @param dbInstanceStatus Property dbInstanceStatus: The status of the instances.
         * @return {@code this}
         */
        public Builder dbInstanceStatus(com.aliyun.ros.cdk.core.IResolvable dbInstanceStatus) {
            this.dbInstanceStatus = dbInstanceStatus;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getDbInstanceType}
         * @param dbInstanceType Property dbInstanceType: The role of the instances.
         * @return {@code this}
         */
        public Builder dbInstanceType(java.lang.String dbInstanceType) {
            this.dbInstanceType = dbInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getDbInstanceType}
         * @param dbInstanceType Property dbInstanceType: The role of the instances.
         * @return {@code this}
         */
        public Builder dbInstanceType(com.aliyun.ros.cdk.core.IResolvable dbInstanceType) {
            this.dbInstanceType = dbInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(java.lang.String dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getDedicatedHostId}
         * @param dedicatedHostId Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
         * @return {@code this}
         */
        public Builder dedicatedHostId(java.lang.String dedicatedHostId) {
            this.dedicatedHostId = dedicatedHostId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getDedicatedHostId}
         * @param dedicatedHostId Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
         * @return {@code this}
         */
        public Builder dedicatedHostId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostId) {
            this.dedicatedHostId = dedicatedHostId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getEngine}
         * @param engine Property engine: The database engine that is run by the instances.
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getEngine}
         * @param engine Property engine: The database engine that is run by the instances.
         * @return {@code this}
         */
        public Builder engine(com.aliyun.ros.cdk.core.IResolvable engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the database engine that is run by the instances.
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the database engine that is run by the instances.
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getExpired}
         * @param expired Property expired: Specifies whether the instances have expired.
         * @return {@code this}
         */
        public Builder expired(java.lang.String expired) {
            this.expired = expired;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getExpired}
         * @param expired Property expired: Specifies whether the instances have expired.
         * @return {@code this}
         */
        public Builder expired(com.aliyun.ros.cdk.core.IResolvable expired) {
            this.expired = expired;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getInstanceLevel}
         * @param instanceLevel Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
         * @return {@code this}
         */
        public Builder instanceLevel(java.lang.Number instanceLevel) {
            this.instanceLevel = instanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getInstanceLevel}
         * @param instanceLevel Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
         * @return {@code this}
         */
        public Builder instanceLevel(com.aliyun.ros.cdk.core.IResolvable instanceLevel) {
            this.instanceLevel = instanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getInstanceNetworkType}
         * @param instanceNetworkType Property instanceNetworkType: The network type of the instances.
         * @return {@code this}
         */
        public Builder instanceNetworkType(java.lang.String instanceNetworkType) {
            this.instanceNetworkType = instanceNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getInstanceNetworkType}
         * @param instanceNetworkType Property instanceNetworkType: The network type of the instances.
         * @return {@code this}
         */
        public Builder instanceNetworkType(com.aliyun.ros.cdk.core.IResolvable instanceNetworkType) {
            this.instanceNetworkType = instanceNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getPayType}
         * @param payType Property payType: The billing method of the instances.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getPayType}
         * @param payType Property payType: The billing method of the instances.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getProxyId}
         * @param proxyId Property proxyId: The ID of the proxy mode.
         * @return {@code this}
         */
        public Builder proxyId(java.lang.String proxyId) {
            this.proxyId = proxyId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getProxyId}
         * @param proxyId Property proxyId: The ID of the proxy mode.
         * @return {@code this}
         */
        public Builder proxyId(com.aliyun.ros.cdk.core.IResolvable proxyId) {
            this.proxyId = proxyId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instances belong.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instances belong.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getSearchKey}
         * @param searchKey Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.
         * @return {@code this}
         */
        public Builder searchKey(java.lang.String searchKey) {
            this.searchKey = searchKey;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getSearchKey}
         * @param searchKey Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.
         * @return {@code this}
         */
        public Builder searchKey(com.aliyun.ros.cdk.core.IResolvable searchKey) {
            this.searchKey = searchKey;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone to which the instances belong.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstancesProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone to which the instances belong.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DBInstancesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DBInstancesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DBInstancesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBInstancesProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.datasource.DBInstancesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DBInstancesProps.Jsii$Proxy that = (DBInstancesProps.Jsii$Proxy) o;

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
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.searchKey != null ? this.searchKey.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
