package com.aliyun.ros.cdk.appflow;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::AppFlow::Chatbot</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.696Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.appflow.$Module.class, fqn = "@alicloud/ros-cdk-appflow.Chatbot")
public class Chatbot extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.appflow.IChatbot {

    protected Chatbot(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Chatbot(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Chatbot(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.ChatbotProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Chatbot(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.ChatbotProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ChatbotId: The ID of the chatbot.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrChatbotId() {
        return software.amazon.jsii.Kernel.get(this, "attrChatbotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.ChatbotProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.appflow.ChatbotProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.appflow.Chatbot}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.appflow.Chatbot> {
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
        private final com.aliyun.ros.cdk.appflow.ChatbotProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.appflow.ChatbotProps.Builder();
        }

        /**
         * Property chatbotName: The name of the chatbot.
         * <p>
         * @return {@code this}
         * @param chatbotName Property chatbotName: The name of the chatbot. This parameter is required.
         */
        public Builder chatbotName(final java.lang.String chatbotName) {
            this.props.chatbotName(chatbotName);
            return this;
        }
        /**
         * Property chatbotName: The name of the chatbot.
         * <p>
         * @return {@code this}
         * @param chatbotName Property chatbotName: The name of the chatbot. This parameter is required.
         */
        public Builder chatbotName(final com.aliyun.ros.cdk.core.IResolvable chatbotName) {
            this.props.chatbotName(chatbotName);
            return this;
        }

        /**
         * Property chatbotConfig: AI assistant configuration.
         * <p>
         * @return {@code this}
         * @param chatbotConfig Property chatbotConfig: AI assistant configuration. This parameter is required.
         */
        public Builder chatbotConfig(final com.aliyun.ros.cdk.core.IResolvable chatbotConfig) {
            this.props.chatbotConfig(chatbotConfig);
            return this;
        }
        /**
         * Property chatbotConfig: AI assistant configuration.
         * <p>
         * @return {@code this}
         * @param chatbotConfig Property chatbotConfig: AI assistant configuration. This parameter is required.
         */
        public Builder chatbotConfig(final com.aliyun.ros.cdk.appflow.RosChatbot.ChatbotConfigProperty chatbotConfig) {
            this.props.chatbotConfig(chatbotConfig);
            return this;
        }

        /**
         * Property chatbotDesc: The description of the chatbot.
         * <p>
         * @return {@code this}
         * @param chatbotDesc Property chatbotDesc: The description of the chatbot. This parameter is required.
         */
        public Builder chatbotDesc(final java.lang.String chatbotDesc) {
            this.props.chatbotDesc(chatbotDesc);
            return this;
        }
        /**
         * Property chatbotDesc: The description of the chatbot.
         * <p>
         * @return {@code this}
         * @param chatbotDesc Property chatbotDesc: The description of the chatbot. This parameter is required.
         */
        public Builder chatbotDesc(final com.aliyun.ros.cdk.core.IResolvable chatbotDesc) {
            this.props.chatbotDesc(chatbotDesc);
            return this;
        }

        /**
         * Property chatbotIcon: The icon of the chatbot.
         * <p>
         * @return {@code this}
         * @param chatbotIcon Property chatbotIcon: The icon of the chatbot. This parameter is required.
         */
        public Builder chatbotIcon(final java.lang.String chatbotIcon) {
            this.props.chatbotIcon(chatbotIcon);
            return this;
        }
        /**
         * Property chatbotIcon: The icon of the chatbot.
         * <p>
         * @return {@code this}
         * @param chatbotIcon Property chatbotIcon: The icon of the chatbot. This parameter is required.
         */
        public Builder chatbotIcon(final com.aliyun.ros.cdk.core.IResolvable chatbotIcon) {
            this.props.chatbotIcon(chatbotIcon);
            return this;
        }

        /**
         * Property from: The source of the request.
         * <p>
         * @return {@code this}
         * @param from Property from: The source of the request. This parameter is required.
         */
        public Builder from(final java.lang.String from) {
            this.props.from(from);
            return this;
        }
        /**
         * Property from: The source of the request.
         * <p>
         * @return {@code this}
         * @param from Property from: The source of the request. This parameter is required.
         */
        public Builder from(final com.aliyun.ros.cdk.core.IResolvable from) {
            this.props.from(from);
            return this;
        }

        /**
         * Property templateId: The ID of the chatbot template.
         * <p>
         * @return {@code this}
         * @param templateId Property templateId: The ID of the chatbot template. This parameter is required.
         */
        public Builder templateId(final java.lang.String templateId) {
            this.props.templateId(templateId);
            return this;
        }
        /**
         * Property templateId: The ID of the chatbot template.
         * <p>
         * @return {@code this}
         * @param templateId Property templateId: The ID of the chatbot template. This parameter is required.
         */
        public Builder templateId(final com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.props.templateId(templateId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.appflow.Chatbot}.
         */
        @Override
        public com.aliyun.ros.cdk.appflow.Chatbot build() {
            return new com.aliyun.ros.cdk.appflow.Chatbot(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
