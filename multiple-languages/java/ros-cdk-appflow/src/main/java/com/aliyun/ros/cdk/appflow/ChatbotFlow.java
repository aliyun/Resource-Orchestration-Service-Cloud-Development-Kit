package com.aliyun.ros.cdk.appflow;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::AppFlow::ChatbotFlow</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.884Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.appflow.$Module.class, fqn = "@alicloud/ros-cdk-appflow.ChatbotFlow")
public class ChatbotFlow extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.appflow.IChatbotFlow {

    protected ChatbotFlow(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ChatbotFlow(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ChatbotFlow(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.ChatbotFlowProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ChatbotFlow(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.ChatbotFlowProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ChatbotFlowId: The ID of the chatbot flow.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrChatbotFlowId() {
        return software.amazon.jsii.Kernel.get(this, "attrChatbotFlowId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.ChatbotFlowProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.appflow.ChatbotFlowProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.appflow.ChatbotFlow}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.appflow.ChatbotFlow> {
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
        private final com.aliyun.ros.cdk.appflow.ChatbotFlowProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.appflow.ChatbotFlowProps.Builder();
        }

        /**
         * Property chatbotId: The ID of the chatbot.
         * <p>
         * @return {@code this}
         * @param chatbotId Property chatbotId: The ID of the chatbot. This parameter is required.
         */
        public Builder chatbotId(final java.lang.String chatbotId) {
            this.props.chatbotId(chatbotId);
            return this;
        }
        /**
         * Property chatbotId: The ID of the chatbot.
         * <p>
         * @return {@code this}
         * @param chatbotId Property chatbotId: The ID of the chatbot. This parameter is required.
         */
        public Builder chatbotId(final com.aliyun.ros.cdk.core.IResolvable chatbotId) {
            this.props.chatbotId(chatbotId);
            return this;
        }

        /**
         * Property flowConfig: The config of the chatbot flow.
         * <p>
         * @return {@code this}
         * @param flowConfig Property flowConfig: The config of the chatbot flow. This parameter is required.
         */
        public Builder flowConfig(final com.aliyun.ros.cdk.core.IResolvable flowConfig) {
            this.props.flowConfig(flowConfig);
            return this;
        }
        /**
         * Property flowConfig: The config of the chatbot flow.
         * <p>
         * @return {@code this}
         * @param flowConfig Property flowConfig: The config of the chatbot flow. This parameter is required.
         */
        public Builder flowConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> flowConfig) {
            this.props.flowConfig(flowConfig);
            return this;
        }

        /**
         * Property flowName: The name of the chatbot flow.
         * <p>
         * @return {@code this}
         * @param flowName Property flowName: The name of the chatbot flow. This parameter is required.
         */
        public Builder flowName(final java.lang.String flowName) {
            this.props.flowName(flowName);
            return this;
        }
        /**
         * Property flowName: The name of the chatbot flow.
         * <p>
         * @return {@code this}
         * @param flowName Property flowName: The name of the chatbot flow. This parameter is required.
         */
        public Builder flowName(final com.aliyun.ros.cdk.core.IResolvable flowName) {
            this.props.flowName(flowName);
            return this;
        }

        /**
         * Property flowType: The type of the chatbot flow.
         * <p>
         * @return {@code this}
         * @param flowType Property flowType: The type of the chatbot flow. This parameter is required.
         */
        public Builder flowType(final java.lang.String flowType) {
            this.props.flowType(flowType);
            return this;
        }
        /**
         * Property flowType: The type of the chatbot flow.
         * <p>
         * @return {@code this}
         * @param flowType Property flowType: The type of the chatbot flow. This parameter is required.
         */
        public Builder flowType(final com.aliyun.ros.cdk.core.IResolvable flowType) {
            this.props.flowType(flowType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.appflow.ChatbotFlow}.
         */
        @Override
        public com.aliyun.ros.cdk.appflow.ChatbotFlow build() {
            return new com.aliyun.ros.cdk.appflow.ChatbotFlow(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
