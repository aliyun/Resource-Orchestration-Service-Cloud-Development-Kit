package com.aliyun.ros.cdk.polardb;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::POLARDB::DBClusterEndpointAddress</code>, which is used to create a public endpoint for an Apsara PolarDB cluster.
 * <p>
 * The public endpoint can be a primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:34.476Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosDBClusterEndpointAddress")
public class RosDBClusterEndpointAddress extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDBClusterEndpointAddress(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDBClusterEndpointAddress(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.polardb.RosDBClusterEndpointAddress.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDBClusterEndpointAddress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.RosDBClusterEndpointAddressProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbClusterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbClusterId", java.util.Objects.requireNonNull(value, "dbClusterId is required"));
    }

    /**
     */
    public void setDbClusterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbClusterId", java.util.Objects.requireNonNull(value, "dbClusterId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbEndpointId() {
        return software.amazon.jsii.Kernel.get(this, "dbEndpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbEndpointId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbEndpointId", java.util.Objects.requireNonNull(value, "dbEndpointId is required"));
    }

    /**
     */
    public void setDbEndpointId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbEndpointId", java.util.Objects.requireNonNull(value, "dbEndpointId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConnectionStringPrefix() {
        return software.amazon.jsii.Kernel.get(this, "connectionStringPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConnectionStringPrefix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "connectionStringPrefix", value);
    }

    /**
     */
    public void setConnectionStringPrefix(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "connectionStringPrefix", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNetType() {
        return software.amazon.jsii.Kernel.get(this, "netType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "netType", value);
    }

    /**
     */
    public void setNetType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "netType", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.RosDBClusterEndpointAddress}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.RosDBClusterEndpointAddress> {
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
        private final com.aliyun.ros.cdk.polardb.RosDBClusterEndpointAddressProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardb.RosDBClusterEndpointAddressProps.Builder();
        }

        /**
         * @return {@code this}
         * @param dbClusterId This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbClusterId This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbEndpointId This parameter is required.
         */
        public Builder dbEndpointId(final java.lang.String dbEndpointId) {
            this.props.dbEndpointId(dbEndpointId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbEndpointId This parameter is required.
         */
        public Builder dbEndpointId(final com.aliyun.ros.cdk.core.IResolvable dbEndpointId) {
            this.props.dbEndpointId(dbEndpointId);
            return this;
        }

        /**
         * @return {@code this}
         * @param connectionStringPrefix This parameter is required.
         */
        public Builder connectionStringPrefix(final java.lang.String connectionStringPrefix) {
            this.props.connectionStringPrefix(connectionStringPrefix);
            return this;
        }
        /**
         * @return {@code this}
         * @param connectionStringPrefix This parameter is required.
         */
        public Builder connectionStringPrefix(final com.aliyun.ros.cdk.core.IResolvable connectionStringPrefix) {
            this.props.connectionStringPrefix(connectionStringPrefix);
            return this;
        }

        /**
         * @return {@code this}
         * @param netType This parameter is required.
         */
        public Builder netType(final java.lang.String netType) {
            this.props.netType(netType);
            return this;
        }
        /**
         * @return {@code this}
         * @param netType This parameter is required.
         */
        public Builder netType(final com.aliyun.ros.cdk.core.IResolvable netType) {
            this.props.netType(netType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.polardb.RosDBClusterEndpointAddress}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.RosDBClusterEndpointAddress build() {
            return new com.aliyun.ros.cdk.polardb.RosDBClusterEndpointAddress(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
