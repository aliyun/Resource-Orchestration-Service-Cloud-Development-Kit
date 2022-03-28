package com.aliyun.ros.cdk.polardb;

/**
 * A ROS template type:  `ALIYUN::POLARDB::DBNodes`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:03.193Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosDBNodes")
public class RosDBNodes extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDBNodes(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDBNodes(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.polardb.RosDBNodes.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::POLARDB::DBNodes`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDBNodes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.RosDBNodesProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbNodeIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderIds() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAmount() {
        return software.amazon.jsii.Kernel.get(this, "amount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAmount(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "amount", java.util.Objects.requireNonNull(value, "amount is required"));
    }

    /**
     */
    public void setAmount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "amount", java.util.Objects.requireNonNull(value, "amount is required"));
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

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.RosDBNodes}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.RosDBNodes> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.polardb.RosDBNodesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardb.RosDBNodesProps.Builder();
        }

        /**
         * @return {@code this}
         * @param amount This parameter is required.
         */
        public Builder amount(final java.lang.Number amount) {
            this.props.amount(amount);
            return this;
        }
        /**
         * @return {@code this}
         * @param amount This parameter is required.
         */
        public Builder amount(final com.aliyun.ros.cdk.core.IResolvable amount) {
            this.props.amount(amount);
            return this;
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.polardb.RosDBNodes}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.RosDBNodes build() {
            return new com.aliyun.ros.cdk.polardb.RosDBNodes(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
