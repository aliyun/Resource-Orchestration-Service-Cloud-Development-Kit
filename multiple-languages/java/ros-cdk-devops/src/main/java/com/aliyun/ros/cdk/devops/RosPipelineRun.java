package com.aliyun.ros.cdk.devops;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DEVOPS::PipelineRun</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.448Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.devops.$Module.class, fqn = "@alicloud/ros-cdk-devops.RosPipelineRun")
public class RosPipelineRun extends com.aliyun.ros.cdk.core.RosResource {

    protected RosPipelineRun(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosPipelineRun(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.devops.RosPipelineRun.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosPipelineRun(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.devops.RosPipelineRunProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPipelineRunId() {
        return software.amazon.jsii.Kernel.get(this, "attrPipelineRunId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getOrganizationId() {
        return software.amazon.jsii.Kernel.get(this, "organizationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOrganizationId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "organizationId", java.util.Objects.requireNonNull(value, "organizationId is required"));
    }

    /**
     */
    public void setOrganizationId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "organizationId", java.util.Objects.requireNonNull(value, "organizationId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPipelineId() {
        return software.amazon.jsii.Kernel.get(this, "pipelineId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPipelineId(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "pipelineId", java.util.Objects.requireNonNull(value, "pipelineId is required"));
    }

    /**
     */
    public void setPipelineId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pipelineId", java.util.Objects.requireNonNull(value, "pipelineId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getParams() {
        return software.amazon.jsii.Kernel.get(this, "params", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setParams(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "params", value);
    }

    /**
     */
    public void setParams(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "params", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSync() {
        return software.amazon.jsii.Kernel.get(this, "sync", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSync(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "sync", value);
    }

    /**
     */
    public void setSync(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sync", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "timeout", value);
    }

    /**
     */
    public void setTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timeout", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.devops.RosPipelineRun}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.devops.RosPipelineRun> {
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
        private final com.aliyun.ros.cdk.devops.RosPipelineRunProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.devops.RosPipelineRunProps.Builder();
        }

        /**
         * @return {@code this}
         * @param organizationId This parameter is required.
         */
        public Builder organizationId(final java.lang.String organizationId) {
            this.props.organizationId(organizationId);
            return this;
        }
        /**
         * @return {@code this}
         * @param organizationId This parameter is required.
         */
        public Builder organizationId(final com.aliyun.ros.cdk.core.IResolvable organizationId) {
            this.props.organizationId(organizationId);
            return this;
        }

        /**
         * @return {@code this}
         * @param pipelineId This parameter is required.
         */
        public Builder pipelineId(final java.lang.Number pipelineId) {
            this.props.pipelineId(pipelineId);
            return this;
        }
        /**
         * @return {@code this}
         * @param pipelineId This parameter is required.
         */
        public Builder pipelineId(final com.aliyun.ros.cdk.core.IResolvable pipelineId) {
            this.props.pipelineId(pipelineId);
            return this;
        }

        /**
         * @return {@code this}
         * @param params This parameter is required.
         */
        public Builder params(final com.aliyun.ros.cdk.core.IResolvable params) {
            this.props.params(params);
            return this;
        }
        /**
         * @return {@code this}
         * @param params This parameter is required.
         */
        public Builder params(final java.util.Map<java.lang.String, ? extends java.lang.Object> params) {
            this.props.params(params);
            return this;
        }

        /**
         * @return {@code this}
         * @param sync This parameter is required.
         */
        public Builder sync(final java.lang.Boolean sync) {
            this.props.sync(sync);
            return this;
        }
        /**
         * @return {@code this}
         * @param sync This parameter is required.
         */
        public Builder sync(final com.aliyun.ros.cdk.core.IResolvable sync) {
            this.props.sync(sync);
            return this;
        }

        /**
         * @return {@code this}
         * @param timeout This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param timeout This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.devops.RosPipelineRun}.
         */
        @Override
        public com.aliyun.ros.cdk.devops.RosPipelineRun build() {
            return new com.aliyun.ros.cdk.devops.RosPipelineRun(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
