package com.aliyun.ros.cdk.apigateway;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ApiGateway::TrafficControlBinding</code>, which is used to bind a custom throttling policy to APIs.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:13.921Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosTrafficControlBinding")
public class RosTrafficControlBinding extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTrafficControlBinding(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTrafficControlBinding(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.apigateway.RosTrafficControlBinding.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTrafficControlBinding(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.RosTrafficControlBindingProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getApiIds() {
        return software.amazon.jsii.Kernel.get(this, "apiIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApiIds(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "apiIds", java.util.Objects.requireNonNull(value, "apiIds is required"));
    }

    /**
     */
    public void setApiIds(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "apiIds", java.util.Objects.requireNonNull(value, "apiIds is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getGroupId() {
        return software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "groupId", java.util.Objects.requireNonNull(value, "groupId is required"));
    }

    /**
     */
    public void setGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupId", java.util.Objects.requireNonNull(value, "groupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getStageName() {
        return software.amazon.jsii.Kernel.get(this, "stageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStageName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "stageName", java.util.Objects.requireNonNull(value, "stageName is required"));
    }

    /**
     */
    public void setStageName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "stageName", java.util.Objects.requireNonNull(value, "stageName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTrafficControlId() {
        return software.amazon.jsii.Kernel.get(this, "trafficControlId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrafficControlId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "trafficControlId", java.util.Objects.requireNonNull(value, "trafficControlId is required"));
    }

    /**
     */
    public void setTrafficControlId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trafficControlId", java.util.Objects.requireNonNull(value, "trafficControlId is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.RosTrafficControlBinding}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.RosTrafficControlBinding> {
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
        private final com.aliyun.ros.cdk.apigateway.RosTrafficControlBindingProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.RosTrafficControlBindingProps.Builder();
        }

        /**
         * @return {@code this}
         * @param apiIds This parameter is required.
         */
        public Builder apiIds(final java.util.List<? extends java.lang.Object> apiIds) {
            this.props.apiIds(apiIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param apiIds This parameter is required.
         */
        public Builder apiIds(final com.aliyun.ros.cdk.core.IResolvable apiIds) {
            this.props.apiIds(apiIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param groupId This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupId This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param stageName This parameter is required.
         */
        public Builder stageName(final java.lang.String stageName) {
            this.props.stageName(stageName);
            return this;
        }
        /**
         * @return {@code this}
         * @param stageName This parameter is required.
         */
        public Builder stageName(final com.aliyun.ros.cdk.core.IResolvable stageName) {
            this.props.stageName(stageName);
            return this;
        }

        /**
         * @return {@code this}
         * @param trafficControlId This parameter is required.
         */
        public Builder trafficControlId(final java.lang.String trafficControlId) {
            this.props.trafficControlId(trafficControlId);
            return this;
        }
        /**
         * @return {@code this}
         * @param trafficControlId This parameter is required.
         */
        public Builder trafficControlId(final com.aliyun.ros.cdk.core.IResolvable trafficControlId) {
            this.props.trafficControlId(trafficControlId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apigateway.RosTrafficControlBinding}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.RosTrafficControlBinding build() {
            return new com.aliyun.ros.cdk.apigateway.RosTrafficControlBinding(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
