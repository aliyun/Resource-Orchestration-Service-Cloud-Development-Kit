package com.aliyun.ros.cdk.appflow;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::AppFlow::ChatbotFlow</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.918Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.appflow.$Module.class, fqn = "@alicloud/ros-cdk-appflow.RosChatbotFlow")
public class RosChatbotFlow extends com.aliyun.ros.cdk.core.RosResource {

    protected RosChatbotFlow(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosChatbotFlow(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.appflow.RosChatbotFlow.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosChatbotFlow(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.RosChatbotFlowProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrChatbotFlowId() {
        return software.amazon.jsii.Kernel.get(this, "attrChatbotFlowId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getFlowConfig() {
        return software.amazon.jsii.Kernel.get(this, "flowConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFlowConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "flowConfig", value);
    }

    /**
     */
    public void setFlowConfig(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "flowConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFlowName() {
        return software.amazon.jsii.Kernel.get(this, "flowName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFlowName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flowName", value);
    }

    /**
     */
    public void setFlowName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "flowName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFlowType() {
        return software.amazon.jsii.Kernel.get(this, "flowType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFlowType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "flowType", value);
    }

    /**
     */
    public void setFlowType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "flowType", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.appflow.RosChatbotFlow}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.appflow.RosChatbotFlow> {
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
        private final com.aliyun.ros.cdk.appflow.RosChatbotFlowProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.appflow.RosChatbotFlowProps.Builder();
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
         * @param flowConfig This parameter is required.
         */
        public Builder flowConfig(final com.aliyun.ros.cdk.core.IResolvable flowConfig) {
            this.props.flowConfig(flowConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param flowConfig This parameter is required.
         */
        public Builder flowConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> flowConfig) {
            this.props.flowConfig(flowConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param flowName This parameter is required.
         */
        public Builder flowName(final java.lang.String flowName) {
            this.props.flowName(flowName);
            return this;
        }
        /**
         * @return {@code this}
         * @param flowName This parameter is required.
         */
        public Builder flowName(final com.aliyun.ros.cdk.core.IResolvable flowName) {
            this.props.flowName(flowName);
            return this;
        }

        /**
         * @return {@code this}
         * @param flowType This parameter is required.
         */
        public Builder flowType(final java.lang.String flowType) {
            this.props.flowType(flowType);
            return this;
        }
        /**
         * @return {@code this}
         * @param flowType This parameter is required.
         */
        public Builder flowType(final com.aliyun.ros.cdk.core.IResolvable flowType) {
            this.props.flowType(flowType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.appflow.RosChatbotFlow}.
         */
        @Override
        public com.aliyun.ros.cdk.appflow.RosChatbotFlow build() {
            return new com.aliyun.ros.cdk.appflow.RosChatbotFlow(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
