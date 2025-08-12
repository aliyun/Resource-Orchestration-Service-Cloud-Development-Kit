package com.aliyun.ros.cdk.appflow;

/**
 * Properties for defining a <code>Chatbot</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbot
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.888Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.appflow.$Module.class, fqn = "@alicloud/ros-cdk-appflow.ChatbotProps")
@software.amazon.jsii.Jsii.Proxy(ChatbotProps.Jsii$Proxy.class)
public interface ChatbotProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property chatbotName: The name of the chatbot.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChatbotName();

    /**
     * Property chatbotConfig: AI assistant configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChatbotConfig() {
        return null;
    }

    /**
     * Property chatbotDesc: The description of the chatbot.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChatbotDesc() {
        return null;
    }

    /**
     * Property chatbotIcon: The icon of the chatbot.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChatbotIcon() {
        return null;
    }

    /**
     * Property from: The source of the request.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFrom() {
        return null;
    }

    /**
     * Property templateId: The ID of the chatbot template.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ChatbotProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ChatbotProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ChatbotProps> {
        java.lang.Object chatbotName;
        java.lang.Object chatbotConfig;
        java.lang.Object chatbotDesc;
        java.lang.Object chatbotIcon;
        java.lang.Object from;
        java.lang.Object templateId;

        /**
         * Sets the value of {@link ChatbotProps#getChatbotName}
         * @param chatbotName Property chatbotName: The name of the chatbot. This parameter is required.
         * @return {@code this}
         */
        public Builder chatbotName(java.lang.String chatbotName) {
            this.chatbotName = chatbotName;
            return this;
        }

        /**
         * Sets the value of {@link ChatbotProps#getChatbotName}
         * @param chatbotName Property chatbotName: The name of the chatbot. This parameter is required.
         * @return {@code this}
         */
        public Builder chatbotName(com.aliyun.ros.cdk.core.IResolvable chatbotName) {
            this.chatbotName = chatbotName;
            return this;
        }

        /**
         * Sets the value of {@link ChatbotProps#getChatbotConfig}
         * @param chatbotConfig Property chatbotConfig: AI assistant configuration.
         * @return {@code this}
         */
        public Builder chatbotConfig(com.aliyun.ros.cdk.core.IResolvable chatbotConfig) {
            this.chatbotConfig = chatbotConfig;
            return this;
        }

        /**
         * Sets the value of {@link ChatbotProps#getChatbotConfig}
         * @param chatbotConfig Property chatbotConfig: AI assistant configuration.
         * @return {@code this}
         */
        public Builder chatbotConfig(com.aliyun.ros.cdk.appflow.RosChatbot.ChatbotConfigProperty chatbotConfig) {
            this.chatbotConfig = chatbotConfig;
            return this;
        }

        /**
         * Sets the value of {@link ChatbotProps#getChatbotDesc}
         * @param chatbotDesc Property chatbotDesc: The description of the chatbot.
         * @return {@code this}
         */
        public Builder chatbotDesc(java.lang.String chatbotDesc) {
            this.chatbotDesc = chatbotDesc;
            return this;
        }

        /**
         * Sets the value of {@link ChatbotProps#getChatbotDesc}
         * @param chatbotDesc Property chatbotDesc: The description of the chatbot.
         * @return {@code this}
         */
        public Builder chatbotDesc(com.aliyun.ros.cdk.core.IResolvable chatbotDesc) {
            this.chatbotDesc = chatbotDesc;
            return this;
        }

        /**
         * Sets the value of {@link ChatbotProps#getChatbotIcon}
         * @param chatbotIcon Property chatbotIcon: The icon of the chatbot.
         * @return {@code this}
         */
        public Builder chatbotIcon(java.lang.String chatbotIcon) {
            this.chatbotIcon = chatbotIcon;
            return this;
        }

        /**
         * Sets the value of {@link ChatbotProps#getChatbotIcon}
         * @param chatbotIcon Property chatbotIcon: The icon of the chatbot.
         * @return {@code this}
         */
        public Builder chatbotIcon(com.aliyun.ros.cdk.core.IResolvable chatbotIcon) {
            this.chatbotIcon = chatbotIcon;
            return this;
        }

        /**
         * Sets the value of {@link ChatbotProps#getFrom}
         * @param from Property from: The source of the request.
         * @return {@code this}
         */
        public Builder from(java.lang.String from) {
            this.from = from;
            return this;
        }

        /**
         * Sets the value of {@link ChatbotProps#getFrom}
         * @param from Property from: The source of the request.
         * @return {@code this}
         */
        public Builder from(com.aliyun.ros.cdk.core.IResolvable from) {
            this.from = from;
            return this;
        }

        /**
         * Sets the value of {@link ChatbotProps#getTemplateId}
         * @param templateId Property templateId: The ID of the chatbot template.
         * @return {@code this}
         */
        public Builder templateId(java.lang.String templateId) {
            this.templateId = templateId;
            return this;
        }

        /**
         * Sets the value of {@link ChatbotProps#getTemplateId}
         * @param templateId Property templateId: The ID of the chatbot template.
         * @return {@code this}
         */
        public Builder templateId(com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.templateId = templateId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ChatbotProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ChatbotProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ChatbotProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ChatbotProps {
        private final java.lang.Object chatbotName;
        private final java.lang.Object chatbotConfig;
        private final java.lang.Object chatbotDesc;
        private final java.lang.Object chatbotIcon;
        private final java.lang.Object from;
        private final java.lang.Object templateId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.chatbotName = software.amazon.jsii.Kernel.get(this, "chatbotName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chatbotConfig = software.amazon.jsii.Kernel.get(this, "chatbotConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chatbotDesc = software.amazon.jsii.Kernel.get(this, "chatbotDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chatbotIcon = software.amazon.jsii.Kernel.get(this, "chatbotIcon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.from = software.amazon.jsii.Kernel.get(this, "from", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateId = software.amazon.jsii.Kernel.get(this, "templateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.chatbotName = java.util.Objects.requireNonNull(builder.chatbotName, "chatbotName is required");
            this.chatbotConfig = builder.chatbotConfig;
            this.chatbotDesc = builder.chatbotDesc;
            this.chatbotIcon = builder.chatbotIcon;
            this.from = builder.from;
            this.templateId = builder.templateId;
        }

        @Override
        public final java.lang.Object getChatbotName() {
            return this.chatbotName;
        }

        @Override
        public final java.lang.Object getChatbotConfig() {
            return this.chatbotConfig;
        }

        @Override
        public final java.lang.Object getChatbotDesc() {
            return this.chatbotDesc;
        }

        @Override
        public final java.lang.Object getChatbotIcon() {
            return this.chatbotIcon;
        }

        @Override
        public final java.lang.Object getFrom() {
            return this.from;
        }

        @Override
        public final java.lang.Object getTemplateId() {
            return this.templateId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("chatbotName", om.valueToTree(this.getChatbotName()));
            if (this.getChatbotConfig() != null) {
                data.set("chatbotConfig", om.valueToTree(this.getChatbotConfig()));
            }
            if (this.getChatbotDesc() != null) {
                data.set("chatbotDesc", om.valueToTree(this.getChatbotDesc()));
            }
            if (this.getChatbotIcon() != null) {
                data.set("chatbotIcon", om.valueToTree(this.getChatbotIcon()));
            }
            if (this.getFrom() != null) {
                data.set("from", om.valueToTree(this.getFrom()));
            }
            if (this.getTemplateId() != null) {
                data.set("templateId", om.valueToTree(this.getTemplateId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-appflow.ChatbotProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ChatbotProps.Jsii$Proxy that = (ChatbotProps.Jsii$Proxy) o;

            if (!chatbotName.equals(that.chatbotName)) return false;
            if (this.chatbotConfig != null ? !this.chatbotConfig.equals(that.chatbotConfig) : that.chatbotConfig != null) return false;
            if (this.chatbotDesc != null ? !this.chatbotDesc.equals(that.chatbotDesc) : that.chatbotDesc != null) return false;
            if (this.chatbotIcon != null ? !this.chatbotIcon.equals(that.chatbotIcon) : that.chatbotIcon != null) return false;
            if (this.from != null ? !this.from.equals(that.from) : that.from != null) return false;
            return this.templateId != null ? this.templateId.equals(that.templateId) : that.templateId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.chatbotName.hashCode();
            result = 31 * result + (this.chatbotConfig != null ? this.chatbotConfig.hashCode() : 0);
            result = 31 * result + (this.chatbotDesc != null ? this.chatbotDesc.hashCode() : 0);
            result = 31 * result + (this.chatbotIcon != null ? this.chatbotIcon.hashCode() : 0);
            result = 31 * result + (this.from != null ? this.from.hashCode() : 0);
            result = 31 * result + (this.templateId != null ? this.templateId.hashCode() : 0);
            return result;
        }
    }
}
