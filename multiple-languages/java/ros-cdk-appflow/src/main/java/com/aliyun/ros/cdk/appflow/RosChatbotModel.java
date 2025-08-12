package com.aliyun.ros.cdk.appflow;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::AppFlow::ChatbotModel</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.920Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.appflow.$Module.class, fqn = "@alicloud/ros-cdk-appflow.RosChatbotModel")
public class RosChatbotModel extends com.aliyun.ros.cdk.core.RosResource {

    protected RosChatbotModel(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosChatbotModel(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.appflow.RosChatbotModel.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosChatbotModel(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.RosChatbotModelProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrChatbotModelId() {
        return software.amazon.jsii.Kernel.get(this, "attrChatbotModelId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getChatbotId() {
        return software.amazon.jsii.Kernel.get(this, "chatbotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChatbotId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "chatbotId", java.util.Objects.requireNonNull(value, "chatbotId is required"));
    }

    /**
     */
    public void setChatbotId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "chatbotId", java.util.Objects.requireNonNull(value, "chatbotId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getModelActionId() {
        return software.amazon.jsii.Kernel.get(this, "modelActionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setModelActionId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "modelActionId", value);
    }

    /**
     */
    public void setModelActionId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "modelActionId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getModelId() {
        return software.amazon.jsii.Kernel.get(this, "modelId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setModelId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "modelId", value);
    }

    /**
     */
    public void setModelId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "modelId", value);
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
        software.amazon.jsii.Kernel.set(this, "parameters", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "status", value);
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "status", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUserAuthConfigId() {
        return software.amazon.jsii.Kernel.get(this, "userAuthConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserAuthConfigId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "userAuthConfigId", value);
    }

    /**
     */
    public void setUserAuthConfigId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userAuthConfigId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.appflow.RosChatbotModel}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.appflow.RosChatbotModel> {
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
        private final com.aliyun.ros.cdk.appflow.RosChatbotModelProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.appflow.RosChatbotModelProps.Builder();
        }

        /**
         * @return {@code this}
         * @param chatbotId This parameter is required.
         */
        public Builder chatbotId(final java.lang.String chatbotId) {
            this.props.chatbotId(chatbotId);
            return this;
        }
        /**
         * @return {@code this}
         * @param chatbotId This parameter is required.
         */
        public Builder chatbotId(final com.aliyun.ros.cdk.core.IResolvable chatbotId) {
            this.props.chatbotId(chatbotId);
            return this;
        }

        /**
         * @return {@code this}
         * @param modelActionId This parameter is required.
         */
        public Builder modelActionId(final java.lang.String modelActionId) {
            this.props.modelActionId(modelActionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param modelActionId This parameter is required.
         */
        public Builder modelActionId(final com.aliyun.ros.cdk.core.IResolvable modelActionId) {
            this.props.modelActionId(modelActionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param modelId This parameter is required.
         */
        public Builder modelId(final java.lang.String modelId) {
            this.props.modelId(modelId);
            return this;
        }
        /**
         * @return {@code this}
         * @param modelId This parameter is required.
         */
        public Builder modelId(final com.aliyun.ros.cdk.core.IResolvable modelId) {
            this.props.modelId(modelId);
            return this;
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
         * @param status This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * @return {@code this}
         * @param status This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * @return {@code this}
         * @param userAuthConfigId This parameter is required.
         */
        public Builder userAuthConfigId(final java.lang.String userAuthConfigId) {
            this.props.userAuthConfigId(userAuthConfigId);
            return this;
        }
        /**
         * @return {@code this}
         * @param userAuthConfigId This parameter is required.
         */
        public Builder userAuthConfigId(final com.aliyun.ros.cdk.core.IResolvable userAuthConfigId) {
            this.props.userAuthConfigId(userAuthConfigId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.appflow.RosChatbotModel}.
         */
        @Override
        public com.aliyun.ros.cdk.appflow.RosChatbotModel build() {
            return new com.aliyun.ros.cdk.appflow.RosChatbotModel(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
