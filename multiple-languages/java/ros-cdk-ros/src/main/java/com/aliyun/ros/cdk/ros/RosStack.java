package com.aliyun.ros.cdk.ros;

/**
 * A ROS template type:  `ALIYUN::ROS::Stack`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:08.418Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosStack")
public class RosStack extends com.aliyun.ros.cdk.core.RosResource {

    protected RosStack(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosStack(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ros.RosStack.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ROS::Stack`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosStack(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.RosStackProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "parameters", value);
    }

    /**
     */
    public void setParameters(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "parameters", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateBody() {
        return software.amazon.jsii.Kernel.get(this, "templateBody", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateBody(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateBody", value);
    }

    /**
     */
    public void setTemplateBody(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "templateBody", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "templateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateId", value);
    }

    /**
     */
    public void setTemplateId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateUrl() {
        return software.amazon.jsii.Kernel.get(this, "templateUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateUrl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateUrl", value);
    }

    /**
     */
    public void setTemplateUrl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateUrl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateVersion() {
        return software.amazon.jsii.Kernel.get(this, "templateVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateVersion", value);
    }

    /**
     */
    public void setTemplateVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutMins() {
        return software.amazon.jsii.Kernel.get(this, "timeoutMins", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimeoutMins(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "timeoutMins", value);
    }

    /**
     */
    public void setTimeoutMins(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timeoutMins", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ros.RosStack}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ros.RosStack> {
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
        private final com.aliyun.ros.cdk.ros.RosStackProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ros.RosStackProps.Builder();
        }

        /**
         * @return {@code this}
         * @param parameters This parameter is required.
         */
        public Builder parameters(final com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.props.parameters(parameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param parameters This parameter is required.
         */
        public Builder parameters(final java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.props.parameters(parameters);
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
         * @param templateBody This parameter is required.
         */
        public Builder templateBody(final com.aliyun.ros.cdk.core.IResolvable templateBody) {
            this.props.templateBody(templateBody);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateBody This parameter is required.
         */
        public Builder templateBody(final java.util.Map<java.lang.String, ? extends java.lang.Object> templateBody) {
            this.props.templateBody(templateBody);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateId This parameter is required.
         */
        public Builder templateId(final java.lang.String templateId) {
            this.props.templateId(templateId);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateId This parameter is required.
         */
        public Builder templateId(final com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.props.templateId(templateId);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateUrl This parameter is required.
         */
        public Builder templateUrl(final java.lang.String templateUrl) {
            this.props.templateUrl(templateUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateUrl This parameter is required.
         */
        public Builder templateUrl(final com.aliyun.ros.cdk.core.IResolvable templateUrl) {
            this.props.templateUrl(templateUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateVersion This parameter is required.
         */
        public Builder templateVersion(final java.lang.String templateVersion) {
            this.props.templateVersion(templateVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateVersion This parameter is required.
         */
        public Builder templateVersion(final com.aliyun.ros.cdk.core.IResolvable templateVersion) {
            this.props.templateVersion(templateVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param timeoutMins This parameter is required.
         */
        public Builder timeoutMins(final java.lang.Number timeoutMins) {
            this.props.timeoutMins(timeoutMins);
            return this;
        }
        /**
         * @return {@code this}
         * @param timeoutMins This parameter is required.
         */
        public Builder timeoutMins(final com.aliyun.ros.cdk.core.IResolvable timeoutMins) {
            this.props.timeoutMins(timeoutMins);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ros.RosStack}.
         */
        @Override
        public com.aliyun.ros.cdk.ros.RosStack build() {
            return new com.aliyun.ros.cdk.ros.RosStack(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
