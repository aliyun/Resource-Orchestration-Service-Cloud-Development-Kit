package com.aliyun.ros.cdk.polardb;

/**
 * A ROS resource type:  `ALIYUN::POLARDB::DBClusterEndpointAddress`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:11.096Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.DBClusterEndpointAddress")
public class DBClusterEndpointAddress extends com.aliyun.ros.cdk.core.Resource {

    protected DBClusterEndpointAddress(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DBClusterEndpointAddress(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::POLARDB::DBClusterEndpointAddress`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public DBClusterEndpointAddress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterEndpointAddressProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::POLARDB::DBClusterEndpointAddress`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DBClusterEndpointAddress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterEndpointAddressProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Address: The details of the endpoint address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ConnectionString: The connection string of the endpoint address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.DBClusterEndpointAddress}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.DBClusterEndpointAddress> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.polardb.DBClusterEndpointAddressProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardb.DBClusterEndpointAddressProps.Builder();
        }

        /**
         * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created. This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created. This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * Property dbEndpointId: The ID of the cluster connection point.
         * <p>
         * @return {@code this}
         * @param dbEndpointId Property dbEndpointId: The ID of the cluster connection point. This parameter is required.
         */
        public Builder dbEndpointId(final java.lang.String dbEndpointId) {
            this.props.dbEndpointId(dbEndpointId);
            return this;
        }
        /**
         * Property dbEndpointId: The ID of the cluster connection point.
         * <p>
         * @return {@code this}
         * @param dbEndpointId Property dbEndpointId: The ID of the cluster connection point. This parameter is required.
         */
        public Builder dbEndpointId(final com.aliyun.ros.cdk.core.IResolvable dbEndpointId) {
            this.props.dbEndpointId(dbEndpointId);
            return this;
        }

        /**
         * Property connectionStringPrefix: The prefix of the connection string.
         * <p>
         * The prefix must comply with the following rules:
         * It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
         * The length is 6~30 characters.
         * <p>
         * @return {@code this}
         * @param connectionStringPrefix Property connectionStringPrefix: The prefix of the connection string. This parameter is required.
         */
        public Builder connectionStringPrefix(final java.lang.String connectionStringPrefix) {
            this.props.connectionStringPrefix(connectionStringPrefix);
            return this;
        }
        /**
         * Property connectionStringPrefix: The prefix of the connection string.
         * <p>
         * The prefix must comply with the following rules:
         * It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
         * The length is 6~30 characters.
         * <p>
         * @return {@code this}
         * @param connectionStringPrefix Property connectionStringPrefix: The prefix of the connection string. This parameter is required.
         */
        public Builder connectionStringPrefix(final com.aliyun.ros.cdk.core.IResolvable connectionStringPrefix) {
            this.props.connectionStringPrefix(connectionStringPrefix);
            return this;
        }

        /**
         * Property netType: The network type of the connection string.
         * <p>
         * If set to Public, ROS will create, modify and delete Public address for you.
         * If set to Private, ROS will only modify Private address for you.
         * Default to Public.
         * <p>
         * @return {@code this}
         * @param netType Property netType: The network type of the connection string. This parameter is required.
         */
        public Builder netType(final java.lang.String netType) {
            this.props.netType(netType);
            return this;
        }
        /**
         * Property netType: The network type of the connection string.
         * <p>
         * If set to Public, ROS will create, modify and delete Public address for you.
         * If set to Private, ROS will only modify Private address for you.
         * Default to Public.
         * <p>
         * @return {@code this}
         * @param netType Property netType: The network type of the connection string. This parameter is required.
         */
        public Builder netType(final com.aliyun.ros.cdk.core.IResolvable netType) {
            this.props.netType(netType);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.polardb.DBClusterEndpointAddress}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.DBClusterEndpointAddress build() {
            return new com.aliyun.ros.cdk.polardb.DBClusterEndpointAddress(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
