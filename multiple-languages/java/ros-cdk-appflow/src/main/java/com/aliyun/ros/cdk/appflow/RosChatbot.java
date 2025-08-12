package com.aliyun.ros.cdk.appflow;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::AppFlow::Chatbot</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.916Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.appflow.$Module.class, fqn = "@alicloud/ros-cdk-appflow.RosChatbot")
public class RosChatbot extends com.aliyun.ros.cdk.core.RosResource {

    protected RosChatbot(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosChatbot(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.appflow.RosChatbot.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosChatbot(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.RosChatbotProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrChatbotId() {
        return software.amazon.jsii.Kernel.get(this, "attrChatbotId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getChatbotName() {
        return software.amazon.jsii.Kernel.get(this, "chatbotName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChatbotName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "chatbotName", java.util.Objects.requireNonNull(value, "chatbotName is required"));
    }

    /**
     */
    public void setChatbotName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "chatbotName", java.util.Objects.requireNonNull(value, "chatbotName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getChatbotConfig() {
        return software.amazon.jsii.Kernel.get(this, "chatbotConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChatbotConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "chatbotConfig", value);
    }

    /**
     */
    public void setChatbotConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.appflow.RosChatbot.ChatbotConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "chatbotConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getChatbotDesc() {
        return software.amazon.jsii.Kernel.get(this, "chatbotDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChatbotDesc(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "chatbotDesc", value);
    }

    /**
     */
    public void setChatbotDesc(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "chatbotDesc", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getChatbotIcon() {
        return software.amazon.jsii.Kernel.get(this, "chatbotIcon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChatbotIcon(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "chatbotIcon", value);
    }

    /**
     */
    public void setChatbotIcon(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "chatbotIcon", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFrom() {
        return software.amazon.jsii.Kernel.get(this, "from", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFrom(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "from", value);
    }

    /**
     */
    public void setFrom(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "from", value);
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.appflow.$Module.class, fqn = "@alicloud/ros-cdk-appflow.RosChatbot.ChatbotConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(ChatbotConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ChatbotConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWelcome() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ChatbotConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ChatbotConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ChatbotConfigProperty> {
            java.lang.Object config;
            java.lang.Object welcome;

            /**
             * Sets the value of {@link ChatbotConfigProperty#getConfig}
             * @param config the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder config(com.aliyun.ros.cdk.core.IResolvable config) {
                this.config = config;
                return this;
            }

            /**
             * Sets the value of {@link ChatbotConfigProperty#getConfig}
             * @param config the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder config(com.aliyun.ros.cdk.appflow.RosChatbot.ConfigProperty config) {
                this.config = config;
                return this;
            }

            /**
             * Sets the value of {@link ChatbotConfigProperty#getWelcome}
             * @param welcome the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder welcome(java.lang.String welcome) {
                this.welcome = welcome;
                return this;
            }

            /**
             * Sets the value of {@link ChatbotConfigProperty#getWelcome}
             * @param welcome the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder welcome(com.aliyun.ros.cdk.core.IResolvable welcome) {
                this.welcome = welcome;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ChatbotConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ChatbotConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ChatbotConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ChatbotConfigProperty {
            private final java.lang.Object config;
            private final java.lang.Object welcome;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.config = software.amazon.jsii.Kernel.get(this, "config", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.welcome = software.amazon.jsii.Kernel.get(this, "welcome", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.config = builder.config;
                this.welcome = builder.welcome;
            }

            @Override
            public final java.lang.Object getConfig() {
                return this.config;
            }

            @Override
            public final java.lang.Object getWelcome() {
                return this.welcome;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getConfig() != null) {
                    data.set("config", om.valueToTree(this.getConfig()));
                }
                if (this.getWelcome() != null) {
                    data.set("welcome", om.valueToTree(this.getWelcome()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-appflow.RosChatbot.ChatbotConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ChatbotConfigProperty.Jsii$Proxy that = (ChatbotConfigProperty.Jsii$Proxy) o;

                if (this.config != null ? !this.config.equals(that.config) : that.config != null) return false;
                return this.welcome != null ? this.welcome.equals(that.welcome) : that.welcome == null;
            }

            @Override
            public final int hashCode() {
                int result = this.config != null ? this.config.hashCode() : 0;
                result = 31 * result + (this.welcome != null ? this.welcome.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.appflow.$Module.class, fqn = "@alicloud/ros-cdk-appflow.RosChatbot.ConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(ConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHistoryCount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInput() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPrompt() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQuestions() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getShowDocumentReference() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlsLogEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlsProjectInfo() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConfigProperty> {
            java.lang.Object historyCount;
            java.lang.Object input;
            java.lang.Object prompt;
            java.lang.Object questions;
            java.lang.Object showDocumentReference;
            java.lang.Object slsLogEnabled;
            java.lang.Object slsProjectInfo;

            /**
             * Sets the value of {@link ConfigProperty#getHistoryCount}
             * @param historyCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder historyCount(java.lang.Number historyCount) {
                this.historyCount = historyCount;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getHistoryCount}
             * @param historyCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder historyCount(com.aliyun.ros.cdk.core.IResolvable historyCount) {
                this.historyCount = historyCount;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getInput}
             * @param input the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder input(java.lang.String input) {
                this.input = input;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getInput}
             * @param input the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder input(com.aliyun.ros.cdk.core.IResolvable input) {
                this.input = input;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getPrompt}
             * @param prompt the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prompt(java.lang.String prompt) {
                this.prompt = prompt;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getPrompt}
             * @param prompt the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prompt(com.aliyun.ros.cdk.core.IResolvable prompt) {
                this.prompt = prompt;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getQuestions}
             * @param questions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder questions(com.aliyun.ros.cdk.core.IResolvable questions) {
                this.questions = questions;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getQuestions}
             * @param questions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder questions(java.util.List<? extends java.lang.Object> questions) {
                this.questions = questions;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getShowDocumentReference}
             * @param showDocumentReference the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder showDocumentReference(java.lang.Boolean showDocumentReference) {
                this.showDocumentReference = showDocumentReference;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getShowDocumentReference}
             * @param showDocumentReference the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder showDocumentReference(com.aliyun.ros.cdk.core.IResolvable showDocumentReference) {
                this.showDocumentReference = showDocumentReference;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getSlsLogEnabled}
             * @param slsLogEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsLogEnabled(java.lang.Boolean slsLogEnabled) {
                this.slsLogEnabled = slsLogEnabled;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getSlsLogEnabled}
             * @param slsLogEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsLogEnabled(com.aliyun.ros.cdk.core.IResolvable slsLogEnabled) {
                this.slsLogEnabled = slsLogEnabled;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getSlsProjectInfo}
             * @param slsProjectInfo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsProjectInfo(com.aliyun.ros.cdk.core.IResolvable slsProjectInfo) {
                this.slsProjectInfo = slsProjectInfo;
                return this;
            }

            /**
             * Sets the value of {@link ConfigProperty#getSlsProjectInfo}
             * @param slsProjectInfo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsProjectInfo(com.aliyun.ros.cdk.appflow.RosChatbot.SlsProjectInfoProperty slsProjectInfo) {
                this.slsProjectInfo = slsProjectInfo;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConfigProperty {
            private final java.lang.Object historyCount;
            private final java.lang.Object input;
            private final java.lang.Object prompt;
            private final java.lang.Object questions;
            private final java.lang.Object showDocumentReference;
            private final java.lang.Object slsLogEnabled;
            private final java.lang.Object slsProjectInfo;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.historyCount = software.amazon.jsii.Kernel.get(this, "historyCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.input = software.amazon.jsii.Kernel.get(this, "input", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.prompt = software.amazon.jsii.Kernel.get(this, "prompt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.questions = software.amazon.jsii.Kernel.get(this, "questions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.showDocumentReference = software.amazon.jsii.Kernel.get(this, "showDocumentReference", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slsLogEnabled = software.amazon.jsii.Kernel.get(this, "slsLogEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slsProjectInfo = software.amazon.jsii.Kernel.get(this, "slsProjectInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.historyCount = builder.historyCount;
                this.input = builder.input;
                this.prompt = builder.prompt;
                this.questions = builder.questions;
                this.showDocumentReference = builder.showDocumentReference;
                this.slsLogEnabled = builder.slsLogEnabled;
                this.slsProjectInfo = builder.slsProjectInfo;
            }

            @Override
            public final java.lang.Object getHistoryCount() {
                return this.historyCount;
            }

            @Override
            public final java.lang.Object getInput() {
                return this.input;
            }

            @Override
            public final java.lang.Object getPrompt() {
                return this.prompt;
            }

            @Override
            public final java.lang.Object getQuestions() {
                return this.questions;
            }

            @Override
            public final java.lang.Object getShowDocumentReference() {
                return this.showDocumentReference;
            }

            @Override
            public final java.lang.Object getSlsLogEnabled() {
                return this.slsLogEnabled;
            }

            @Override
            public final java.lang.Object getSlsProjectInfo() {
                return this.slsProjectInfo;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getHistoryCount() != null) {
                    data.set("historyCount", om.valueToTree(this.getHistoryCount()));
                }
                if (this.getInput() != null) {
                    data.set("input", om.valueToTree(this.getInput()));
                }
                if (this.getPrompt() != null) {
                    data.set("prompt", om.valueToTree(this.getPrompt()));
                }
                if (this.getQuestions() != null) {
                    data.set("questions", om.valueToTree(this.getQuestions()));
                }
                if (this.getShowDocumentReference() != null) {
                    data.set("showDocumentReference", om.valueToTree(this.getShowDocumentReference()));
                }
                if (this.getSlsLogEnabled() != null) {
                    data.set("slsLogEnabled", om.valueToTree(this.getSlsLogEnabled()));
                }
                if (this.getSlsProjectInfo() != null) {
                    data.set("slsProjectInfo", om.valueToTree(this.getSlsProjectInfo()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-appflow.RosChatbot.ConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConfigProperty.Jsii$Proxy that = (ConfigProperty.Jsii$Proxy) o;

                if (this.historyCount != null ? !this.historyCount.equals(that.historyCount) : that.historyCount != null) return false;
                if (this.input != null ? !this.input.equals(that.input) : that.input != null) return false;
                if (this.prompt != null ? !this.prompt.equals(that.prompt) : that.prompt != null) return false;
                if (this.questions != null ? !this.questions.equals(that.questions) : that.questions != null) return false;
                if (this.showDocumentReference != null ? !this.showDocumentReference.equals(that.showDocumentReference) : that.showDocumentReference != null) return false;
                if (this.slsLogEnabled != null ? !this.slsLogEnabled.equals(that.slsLogEnabled) : that.slsLogEnabled != null) return false;
                return this.slsProjectInfo != null ? this.slsProjectInfo.equals(that.slsProjectInfo) : that.slsProjectInfo == null;
            }

            @Override
            public final int hashCode() {
                int result = this.historyCount != null ? this.historyCount.hashCode() : 0;
                result = 31 * result + (this.input != null ? this.input.hashCode() : 0);
                result = 31 * result + (this.prompt != null ? this.prompt.hashCode() : 0);
                result = 31 * result + (this.questions != null ? this.questions.hashCode() : 0);
                result = 31 * result + (this.showDocumentReference != null ? this.showDocumentReference.hashCode() : 0);
                result = 31 * result + (this.slsLogEnabled != null ? this.slsLogEnabled.hashCode() : 0);
                result = 31 * result + (this.slsProjectInfo != null ? this.slsProjectInfo.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.appflow.$Module.class, fqn = "@alicloud/ros-cdk-appflow.RosChatbot.SlsProjectInfoProperty")
    @software.amazon.jsii.Jsii.Proxy(SlsProjectInfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SlsProjectInfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLogStoreName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProjectName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegionId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SlsProjectInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SlsProjectInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SlsProjectInfoProperty> {
            java.lang.Object logStoreName;
            java.lang.Object projectName;
            java.lang.Object regionId;

            /**
             * Sets the value of {@link SlsProjectInfoProperty#getLogStoreName}
             * @param logStoreName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logStoreName(java.lang.String logStoreName) {
                this.logStoreName = logStoreName;
                return this;
            }

            /**
             * Sets the value of {@link SlsProjectInfoProperty#getLogStoreName}
             * @param logStoreName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logStoreName(com.aliyun.ros.cdk.core.IResolvable logStoreName) {
                this.logStoreName = logStoreName;
                return this;
            }

            /**
             * Sets the value of {@link SlsProjectInfoProperty#getProjectName}
             * @param projectName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder projectName(java.lang.String projectName) {
                this.projectName = projectName;
                return this;
            }

            /**
             * Sets the value of {@link SlsProjectInfoProperty#getProjectName}
             * @param projectName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
                this.projectName = projectName;
                return this;
            }

            /**
             * Sets the value of {@link SlsProjectInfoProperty#getRegionId}
             * @param regionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(java.lang.String regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Sets the value of {@link SlsProjectInfoProperty#getRegionId}
             * @param regionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SlsProjectInfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SlsProjectInfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SlsProjectInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SlsProjectInfoProperty {
            private final java.lang.Object logStoreName;
            private final java.lang.Object projectName;
            private final java.lang.Object regionId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.logStoreName = software.amazon.jsii.Kernel.get(this, "logStoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.logStoreName = builder.logStoreName;
                this.projectName = builder.projectName;
                this.regionId = builder.regionId;
            }

            @Override
            public final java.lang.Object getLogStoreName() {
                return this.logStoreName;
            }

            @Override
            public final java.lang.Object getProjectName() {
                return this.projectName;
            }

            @Override
            public final java.lang.Object getRegionId() {
                return this.regionId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getLogStoreName() != null) {
                    data.set("logStoreName", om.valueToTree(this.getLogStoreName()));
                }
                if (this.getProjectName() != null) {
                    data.set("projectName", om.valueToTree(this.getProjectName()));
                }
                if (this.getRegionId() != null) {
                    data.set("regionId", om.valueToTree(this.getRegionId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-appflow.RosChatbot.SlsProjectInfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SlsProjectInfoProperty.Jsii$Proxy that = (SlsProjectInfoProperty.Jsii$Proxy) o;

                if (this.logStoreName != null ? !this.logStoreName.equals(that.logStoreName) : that.logStoreName != null) return false;
                if (this.projectName != null ? !this.projectName.equals(that.projectName) : that.projectName != null) return false;
                return this.regionId != null ? this.regionId.equals(that.regionId) : that.regionId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.logStoreName != null ? this.logStoreName.hashCode() : 0;
                result = 31 * result + (this.projectName != null ? this.projectName.hashCode() : 0);
                result = 31 * result + (this.regionId != null ? this.regionId.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.appflow.RosChatbot}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.appflow.RosChatbot> {
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
        private final com.aliyun.ros.cdk.appflow.RosChatbotProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.appflow.RosChatbotProps.Builder();
        }

        /**
         * @return {@code this}
         * @param chatbotName This parameter is required.
         */
        public Builder chatbotName(final java.lang.String chatbotName) {
            this.props.chatbotName(chatbotName);
            return this;
        }
        /**
         * @return {@code this}
         * @param chatbotName This parameter is required.
         */
        public Builder chatbotName(final com.aliyun.ros.cdk.core.IResolvable chatbotName) {
            this.props.chatbotName(chatbotName);
            return this;
        }

        /**
         * @return {@code this}
         * @param chatbotConfig This parameter is required.
         */
        public Builder chatbotConfig(final com.aliyun.ros.cdk.core.IResolvable chatbotConfig) {
            this.props.chatbotConfig(chatbotConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param chatbotConfig This parameter is required.
         */
        public Builder chatbotConfig(final com.aliyun.ros.cdk.appflow.RosChatbot.ChatbotConfigProperty chatbotConfig) {
            this.props.chatbotConfig(chatbotConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param chatbotDesc This parameter is required.
         */
        public Builder chatbotDesc(final java.lang.String chatbotDesc) {
            this.props.chatbotDesc(chatbotDesc);
            return this;
        }
        /**
         * @return {@code this}
         * @param chatbotDesc This parameter is required.
         */
        public Builder chatbotDesc(final com.aliyun.ros.cdk.core.IResolvable chatbotDesc) {
            this.props.chatbotDesc(chatbotDesc);
            return this;
        }

        /**
         * @return {@code this}
         * @param chatbotIcon This parameter is required.
         */
        public Builder chatbotIcon(final java.lang.String chatbotIcon) {
            this.props.chatbotIcon(chatbotIcon);
            return this;
        }
        /**
         * @return {@code this}
         * @param chatbotIcon This parameter is required.
         */
        public Builder chatbotIcon(final com.aliyun.ros.cdk.core.IResolvable chatbotIcon) {
            this.props.chatbotIcon(chatbotIcon);
            return this;
        }

        /**
         * @return {@code this}
         * @param from This parameter is required.
         */
        public Builder from(final java.lang.String from) {
            this.props.from(from);
            return this;
        }
        /**
         * @return {@code this}
         * @param from This parameter is required.
         */
        public Builder from(final com.aliyun.ros.cdk.core.IResolvable from) {
            this.props.from(from);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.appflow.RosChatbot}.
         */
        @Override
        public com.aliyun.ros.cdk.appflow.RosChatbot build() {
            return new com.aliyun.ros.cdk.appflow.RosChatbot(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
