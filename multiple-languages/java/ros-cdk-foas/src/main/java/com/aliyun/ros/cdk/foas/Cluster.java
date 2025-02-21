package com.aliyun.ros.cdk.foas;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::FOAS::Cluster</code>, which is used to create a cluster for an order in exclusive mode.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:17.014Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.foas.$Module.class, fqn = "@alicloud/ros-cdk-foas.Cluster")
public class Cluster extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.foas.ICluster {

    protected Cluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Cluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.foas.ClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.foas.ClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterId: Cluster ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EngineVersions: Engine Versions.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersions() {
        return software.amazon.jsii.Kernel.get(this, "attrEngineVersions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MasterInstanceInfos: Master instance infos.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterInstanceInfos() {
        return software.amazon.jsii.Kernel.get(this, "attrMasterInstanceInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OrderId: Order ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityGroupId: Security group Id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SlaveInstanceInfos: Slave instance infos.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlaveInstanceInfos() {
        return software.amazon.jsii.Kernel.get(this, "attrSlaveInstanceInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute State: Cluster status.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrState() {
        return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VSwitchIds: VSwitch Ids.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchIds() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.foas.ClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.foas.ClusterProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.foas.Cluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.foas.Cluster> {
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
        private final com.aliyun.ros.cdk.foas.ClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.foas.ClusterProps.Builder();
        }

        /**
         * Property clusterName: Cluster name.
         * <p>
         * It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: Cluster name. This parameter is required.
         */
        public Builder clusterName(final java.lang.String clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }
        /**
         * Property clusterName: Cluster name.
         * <p>
         * It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: Cluster name. This parameter is required.
         */
        public Builder clusterName(final com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }

        /**
         * Property description: Cluster description.
         * <p>
         * @return {@code this}
         * @param description Property description: Cluster description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Cluster description.
         * <p>
         * @return {@code this}
         * @param description Property description: Cluster description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property ossBucket: Bucket name in your OSS.
         * <p>
         * @return {@code this}
         * @param ossBucket Property ossBucket: Bucket name in your OSS. This parameter is required.
         */
        public Builder ossBucket(final java.lang.String ossBucket) {
            this.props.ossBucket(ossBucket);
            return this;
        }
        /**
         * Property ossBucket: Bucket name in your OSS.
         * <p>
         * @return {@code this}
         * @param ossBucket Property ossBucket: Bucket name in your OSS. This parameter is required.
         */
        public Builder ossBucket(final com.aliyun.ros.cdk.core.IResolvable ossBucket) {
            this.props.ossBucket(ossBucket);
            return this;
        }

        /**
         * Property vSwitchId: VSwitch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VSwitch ID. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: VSwitch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VSwitch ID. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property order: Order detail.
         * <p>
         * Only one of property Order or OrderId can be specified.
         * Order is not suggested.
         * Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
         * The order can not be cancelled.
         * <p>
         * @return {@code this}
         * @param order Property order: Order detail. This parameter is required.
         */
        public Builder order(final com.aliyun.ros.cdk.core.IResolvable order) {
            this.props.order(order);
            return this;
        }
        /**
         * Property order: Order detail.
         * <p>
         * Only one of property Order or OrderId can be specified.
         * Order is not suggested.
         * Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
         * The order can not be cancelled.
         * <p>
         * @return {@code this}
         * @param order Property order: Order detail. This parameter is required.
         */
        public Builder order(final com.aliyun.ros.cdk.foas.RosCluster.OrderProperty order) {
            this.props.order(order);
            return this;
        }

        /**
         * Property orderId: Order Id.
         * <p>
         * Only one of property Order or OrderId can be specified.
         * OrderId is suggested.
         * <p>
         * @return {@code this}
         * @param orderId Property orderId: Order Id. This parameter is required.
         */
        public Builder orderId(final java.lang.String orderId) {
            this.props.orderId(orderId);
            return this;
        }
        /**
         * Property orderId: Order Id.
         * <p>
         * Only one of property Order or OrderId can be specified.
         * OrderId is suggested.
         * <p>
         * @return {@code this}
         * @param orderId Property orderId: Order Id. This parameter is required.
         */
        public Builder orderId(final com.aliyun.ros.cdk.core.IResolvable orderId) {
            this.props.orderId(orderId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.foas.Cluster}.
         */
        @Override
        public com.aliyun.ros.cdk.foas.Cluster build() {
            return new com.aliyun.ros.cdk.foas.Cluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
