package com.aliyun.ros.cdk.polardb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::POLARDB::DBClusterEndpoint</code>, which is used to create a custom endpoint for a PolarDB cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:10.560Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.DBClusterEndpoint")
public class DBClusterEndpoint extends com.aliyun.ros.cdk.core.Resource {

    protected DBClusterEndpoint(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DBClusterEndpoint(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public DBClusterEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterEndpointProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DBClusterEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterEndpointProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Addresses: The address items of the db cluster endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddresses() {
        return software.amazon.jsii.Kernel.get(this, "attrAddresses", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ConnectionString: The first connection string of the db cluster endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBEndpointId: DB cluster endpoint ID.
     * <p>
     * E.g. pe-xxxxxxxx.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbEndpointId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbEndpointId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterEndpointProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.DBClusterEndpointProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterEndpointProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.DBClusterEndpoint}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.DBClusterEndpoint> {
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
        private final com.aliyun.ros.cdk.polardb.DBClusterEndpointProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardb.DBClusterEndpointProps.Builder();
        }

        /**
         * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created. This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created. This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * Property autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
         * <p>
         * Valid values: Enable, Disable.
         * Default value: Disable.
         * <p>
         * @return {@code this}
         * @param autoAddNewNodes Property autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point. This parameter is required.
         */
        public Builder autoAddNewNodes(final java.lang.String autoAddNewNodes) {
            this.props.autoAddNewNodes(autoAddNewNodes);
            return this;
        }
        /**
         * Property autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
         * <p>
         * Valid values: Enable, Disable.
         * Default value: Disable.
         * <p>
         * @return {@code this}
         * @param autoAddNewNodes Property autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point. This parameter is required.
         */
        public Builder autoAddNewNodes(final com.aliyun.ros.cdk.core.IResolvable autoAddNewNodes) {
            this.props.autoAddNewNodes(autoAddNewNodes);
            return this;
        }

        /**
         * Property endpointConfig:.
         * <p>
         * @return {@code this}
         * @param endpointConfig Property endpointConfig:. This parameter is required.
         */
        public Builder endpointConfig(final com.aliyun.ros.cdk.core.IResolvable endpointConfig) {
            this.props.endpointConfig(endpointConfig);
            return this;
        }
        /**
         * Property endpointConfig:.
         * <p>
         * @return {@code this}
         * @param endpointConfig Property endpointConfig:. This parameter is required.
         */
        public Builder endpointConfig(final com.aliyun.ros.cdk.polardb.RosDBClusterEndpoint.EndpointConfigProperty endpointConfig) {
            this.props.endpointConfig(endpointConfig);
            return this;
        }

        /**
         * Property endpointType: The type of the cluster connection point.
         * <p>
         * Set this parameter to Custom.
         * <p>
         * @return {@code this}
         * @param endpointType Property endpointType: The type of the cluster connection point. This parameter is required.
         */
        public Builder endpointType(final java.lang.String endpointType) {
            this.props.endpointType(endpointType);
            return this;
        }
        /**
         * Property endpointType: The type of the cluster connection point.
         * <p>
         * Set this parameter to Custom.
         * <p>
         * @return {@code this}
         * @param endpointType Property endpointType: The type of the cluster connection point. This parameter is required.
         */
        public Builder endpointType(final com.aliyun.ros.cdk.core.IResolvable endpointType) {
            this.props.endpointType(endpointType);
            return this;
        }

        /**
         * Property nodes: The nodes to be added to this connection point to process read requests from this connection point.
         * <p>
         * Add at least two nodes.
         * If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
         * <p>
         * @return {@code this}
         * @param nodes Property nodes: The nodes to be added to this connection point to process read requests from this connection point. This parameter is required.
         */
        public Builder nodes(final java.util.List<? extends java.lang.Object> nodes) {
            this.props.nodes(nodes);
            return this;
        }
        /**
         * Property nodes: The nodes to be added to this connection point to process read requests from this connection point.
         * <p>
         * Add at least two nodes.
         * If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
         * <p>
         * @return {@code this}
         * @param nodes Property nodes: The nodes to be added to this connection point to process read requests from this connection point. This parameter is required.
         */
        public Builder nodes(final com.aliyun.ros.cdk.core.IResolvable nodes) {
            this.props.nodes(nodes);
            return this;
        }

        /**
         * Property readWriteMode: The read/write mode of the cluster connection point.
         * <p>
         * Valid values:
         * ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
         * ReadOnly: receives and forwards only read requests.
         * Default value: ReadOnly.
         * <p>
         * @return {@code this}
         * @param readWriteMode Property readWriteMode: The read/write mode of the cluster connection point. This parameter is required.
         */
        public Builder readWriteMode(final java.lang.String readWriteMode) {
            this.props.readWriteMode(readWriteMode);
            return this;
        }
        /**
         * Property readWriteMode: The read/write mode of the cluster connection point.
         * <p>
         * Valid values:
         * ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
         * ReadOnly: receives and forwards only read requests.
         * Default value: ReadOnly.
         * <p>
         * @return {@code this}
         * @param readWriteMode Property readWriteMode: The read/write mode of the cluster connection point. This parameter is required.
         */
        public Builder readWriteMode(final com.aliyun.ros.cdk.core.IResolvable readWriteMode) {
            this.props.readWriteMode(readWriteMode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.polardb.DBClusterEndpoint}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.DBClusterEndpoint build() {
            return new com.aliyun.ros.cdk.polardb.DBClusterEndpoint(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
