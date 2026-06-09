package com.aliyun.ros.cdk.dataworks;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DataWorks::DataSourceSharedRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:09:51.222Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dataworks.$Module.class, fqn = "@alicloud/ros-cdk-dataworks.RosDataSourceSharedRule")
public class RosDataSourceSharedRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDataSourceSharedRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDataSourceSharedRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dataworks.RosDataSourceSharedRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDataSourceSharedRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.RosDataSourceSharedRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateUser() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateUser", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDataSourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDataSourceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDataSourceSharedRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrDataSourceSharedRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnvType() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSharedDataSourceName() {
        return software.amazon.jsii.Kernel.get(this, "attrSharedDataSourceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSharedUser() {
        return software.amazon.jsii.Kernel.get(this, "attrSharedUser", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceProjectId() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceProjectId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTargetProjectId() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetProjectId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDataSourceId() {
        return software.amazon.jsii.Kernel.get(this, "dataSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataSourceId(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "dataSourceId", java.util.Objects.requireNonNull(value, "dataSourceId is required"));
    }

    /**
     */
    public void setDataSourceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataSourceId", java.util.Objects.requireNonNull(value, "dataSourceId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEnvType() {
        return software.amazon.jsii.Kernel.get(this, "envType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnvType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "envType", java.util.Objects.requireNonNull(value, "envType is required"));
    }

    /**
     */
    public void setEnvType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "envType", java.util.Objects.requireNonNull(value, "envType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargetProjectId() {
        return software.amazon.jsii.Kernel.get(this, "targetProjectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetProjectId(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "targetProjectId", java.util.Objects.requireNonNull(value, "targetProjectId is required"));
    }

    /**
     */
    public void setTargetProjectId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetProjectId", java.util.Objects.requireNonNull(value, "targetProjectId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSharedUser() {
        return software.amazon.jsii.Kernel.get(this, "sharedUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSharedUser(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sharedUser", value);
    }

    /**
     */
    public void setSharedUser(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sharedUser", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dataworks.RosDataSourceSharedRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dataworks.RosDataSourceSharedRule> {
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
        private final com.aliyun.ros.cdk.dataworks.RosDataSourceSharedRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dataworks.RosDataSourceSharedRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param dataSourceId This parameter is required.
         */
        public Builder dataSourceId(final java.lang.Number dataSourceId) {
            this.props.dataSourceId(dataSourceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataSourceId This parameter is required.
         */
        public Builder dataSourceId(final com.aliyun.ros.cdk.core.IResolvable dataSourceId) {
            this.props.dataSourceId(dataSourceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param envType This parameter is required.
         */
        public Builder envType(final java.lang.String envType) {
            this.props.envType(envType);
            return this;
        }
        /**
         * @return {@code this}
         * @param envType This parameter is required.
         */
        public Builder envType(final com.aliyun.ros.cdk.core.IResolvable envType) {
            this.props.envType(envType);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetProjectId This parameter is required.
         */
        public Builder targetProjectId(final java.lang.Number targetProjectId) {
            this.props.targetProjectId(targetProjectId);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetProjectId This parameter is required.
         */
        public Builder targetProjectId(final com.aliyun.ros.cdk.core.IResolvable targetProjectId) {
            this.props.targetProjectId(targetProjectId);
            return this;
        }

        /**
         * @return {@code this}
         * @param sharedUser This parameter is required.
         */
        public Builder sharedUser(final java.lang.String sharedUser) {
            this.props.sharedUser(sharedUser);
            return this;
        }
        /**
         * @return {@code this}
         * @param sharedUser This parameter is required.
         */
        public Builder sharedUser(final com.aliyun.ros.cdk.core.IResolvable sharedUser) {
            this.props.sharedUser(sharedUser);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dataworks.RosDataSourceSharedRule}.
         */
        @Override
        public com.aliyun.ros.cdk.dataworks.RosDataSourceSharedRule build() {
            return new com.aliyun.ros.cdk.dataworks.RosDataSourceSharedRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
