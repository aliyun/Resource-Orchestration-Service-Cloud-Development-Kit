package com.aliyun.ros.cdk.rds.datasource;

/**
 * This class is a base encapsulation around the ROS resource type <code>DATASOURCE::RDS::DBInstances</code>, which is used to query ApsaraDB RDS instances.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:57.100Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.datasource.RosDBInstances")
public class RosDBInstances extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDBInstances(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDBInstances(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.rds.datasource.RosDBInstances.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDBInstances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.datasource.RosDBInstancesProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstances", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConnectionMode() {
        return software.amazon.jsii.Kernel.get(this, "connectionMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConnectionMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "connectionMode", value);
    }

    /**
     */
    public void setConnectionMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "connectionMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "connectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConnectionString(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "connectionString", value);
    }

    /**
     */
    public void setConnectionString(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "connectionString", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceClass() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceClass(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceClass", value);
    }

    /**
     */
    public void setDbInstanceClass(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceClass", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceId", value);
    }

    /**
     */
    public void setDbInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceStatus() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceStatus", value);
    }

    /**
     */
    public void setDbInstanceStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceStatus", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceType", value);
    }

    /**
     */
    public void setDbInstanceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostGroupId() {
        return software.amazon.jsii.Kernel.get(this, "dedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDedicatedHostGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dedicatedHostGroupId", value);
    }

    /**
     */
    public void setDedicatedHostGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dedicatedHostGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostId() {
        return software.amazon.jsii.Kernel.get(this, "dedicatedHostId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDedicatedHostId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dedicatedHostId", value);
    }

    /**
     */
    public void setDedicatedHostId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dedicatedHostId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEngine() {
        return software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEngine(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "engine", value);
    }

    /**
     */
    public void setEngine(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "engine", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEngineVersion() {
        return software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEngineVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "engineVersion", value);
    }

    /**
     */
    public void setEngineVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "engineVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExpired() {
        return software.amazon.jsii.Kernel.get(this, "expired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExpired(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "expired", value);
    }

    /**
     */
    public void setExpired(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "expired", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceLevel() {
        return software.amazon.jsii.Kernel.get(this, "instanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceLevel(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "instanceLevel", value);
    }

    /**
     */
    public void setInstanceLevel(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceLevel", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "instanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceNetworkType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceNetworkType", value);
    }

    /**
     */
    public void setInstanceNetworkType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceNetworkType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPayType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "payType", value);
    }

    /**
     */
    public void setPayType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "payType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProxyId() {
        return software.amazon.jsii.Kernel.get(this, "proxyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProxyId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "proxyId", value);
    }

    /**
     */
    public void setProxyId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "proxyId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSearchKey() {
        return software.amazon.jsii.Kernel.get(this, "searchKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSearchKey(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "searchKey", value);
    }

    /**
     */
    public void setSearchKey(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "searchKey", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", value);
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.datasource.RosDBInstances}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.datasource.RosDBInstances> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.rds.datasource.RosDBInstancesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rds.datasource.RosDBInstancesProps.Builder();
        }

        /**
         * @return {@code this}
         * @param connectionMode This parameter is required.
         */
        public Builder connectionMode(final java.lang.String connectionMode) {
            this.props.connectionMode(connectionMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param connectionMode This parameter is required.
         */
        public Builder connectionMode(final com.aliyun.ros.cdk.core.IResolvable connectionMode) {
            this.props.connectionMode(connectionMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param connectionString This parameter is required.
         */
        public Builder connectionString(final java.lang.String connectionString) {
            this.props.connectionString(connectionString);
            return this;
        }
        /**
         * @return {@code this}
         * @param connectionString This parameter is required.
         */
        public Builder connectionString(final com.aliyun.ros.cdk.core.IResolvable connectionString) {
            this.props.connectionString(connectionString);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceClass This parameter is required.
         */
        public Builder dbInstanceClass(final java.lang.String dbInstanceClass) {
            this.props.dbInstanceClass(dbInstanceClass);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceClass This parameter is required.
         */
        public Builder dbInstanceClass(final com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.props.dbInstanceClass(dbInstanceClass);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceId This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceId This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceStatus This parameter is required.
         */
        public Builder dbInstanceStatus(final java.lang.String dbInstanceStatus) {
            this.props.dbInstanceStatus(dbInstanceStatus);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceStatus This parameter is required.
         */
        public Builder dbInstanceStatus(final com.aliyun.ros.cdk.core.IResolvable dbInstanceStatus) {
            this.props.dbInstanceStatus(dbInstanceStatus);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceType This parameter is required.
         */
        public Builder dbInstanceType(final java.lang.String dbInstanceType) {
            this.props.dbInstanceType(dbInstanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceType This parameter is required.
         */
        public Builder dbInstanceType(final com.aliyun.ros.cdk.core.IResolvable dbInstanceType) {
            this.props.dbInstanceType(dbInstanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param dedicatedHostGroupId This parameter is required.
         */
        public Builder dedicatedHostGroupId(final java.lang.String dedicatedHostGroupId) {
            this.props.dedicatedHostGroupId(dedicatedHostGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dedicatedHostGroupId This parameter is required.
         */
        public Builder dedicatedHostGroupId(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.props.dedicatedHostGroupId(dedicatedHostGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param dedicatedHostId This parameter is required.
         */
        public Builder dedicatedHostId(final java.lang.String dedicatedHostId) {
            this.props.dedicatedHostId(dedicatedHostId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dedicatedHostId This parameter is required.
         */
        public Builder dedicatedHostId(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostId) {
            this.props.dedicatedHostId(dedicatedHostId);
            return this;
        }

        /**
         * @return {@code this}
         * @param engine This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.props.engine(engine);
            return this;
        }
        /**
         * @return {@code this}
         * @param engine This parameter is required.
         */
        public Builder engine(final com.aliyun.ros.cdk.core.IResolvable engine) {
            this.props.engine(engine);
            return this;
        }

        /**
         * @return {@code this}
         * @param engineVersion This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param engineVersion This parameter is required.
         */
        public Builder engineVersion(final com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param expired This parameter is required.
         */
        public Builder expired(final java.lang.String expired) {
            this.props.expired(expired);
            return this;
        }
        /**
         * @return {@code this}
         * @param expired This parameter is required.
         */
        public Builder expired(final com.aliyun.ros.cdk.core.IResolvable expired) {
            this.props.expired(expired);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceLevel This parameter is required.
         */
        public Builder instanceLevel(final java.lang.Number instanceLevel) {
            this.props.instanceLevel(instanceLevel);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceLevel This parameter is required.
         */
        public Builder instanceLevel(final com.aliyun.ros.cdk.core.IResolvable instanceLevel) {
            this.props.instanceLevel(instanceLevel);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceNetworkType This parameter is required.
         */
        public Builder instanceNetworkType(final java.lang.String instanceNetworkType) {
            this.props.instanceNetworkType(instanceNetworkType);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceNetworkType This parameter is required.
         */
        public Builder instanceNetworkType(final com.aliyun.ros.cdk.core.IResolvable instanceNetworkType) {
            this.props.instanceNetworkType(instanceNetworkType);
            return this;
        }

        /**
         * @return {@code this}
         * @param payType This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * @return {@code this}
         * @param payType This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * @return {@code this}
         * @param proxyId This parameter is required.
         */
        public Builder proxyId(final java.lang.String proxyId) {
            this.props.proxyId(proxyId);
            return this;
        }
        /**
         * @return {@code this}
         * @param proxyId This parameter is required.
         */
        public Builder proxyId(final com.aliyun.ros.cdk.core.IResolvable proxyId) {
            this.props.proxyId(proxyId);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param searchKey This parameter is required.
         */
        public Builder searchKey(final java.lang.String searchKey) {
            this.props.searchKey(searchKey);
            return this;
        }
        /**
         * @return {@code this}
         * @param searchKey This parameter is required.
         */
        public Builder searchKey(final com.aliyun.ros.cdk.core.IResolvable searchKey) {
            this.props.searchKey(searchKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rds.datasource.RosDBInstances}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.datasource.RosDBInstances build() {
            return new com.aliyun.ros.cdk.rds.datasource.RosDBInstances(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
