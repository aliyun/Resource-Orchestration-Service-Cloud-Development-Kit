package com.aliyun.ros.cdk.appflow;

/**
 * Properties for defining a <code>RosChatbotModel</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotmodel
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:21.344Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.appflow.$Module.class, fqn = "@alicloud/ros-cdk-appflow.RosChatbotModelProps")
@software.amazon.jsii.Jsii.Proxy(RosChatbotModelProps.Jsii$Proxy.class)
public interface RosChatbotModelProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChatbotId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getModelActionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getModelId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserAuthConfigId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosChatbotModelProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosChatbotModelProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosChatbotModelProps> {
        java.lang.Object chatbotId;
        java.lang.Object modelActionId;
        java.lang.Object modelId;
        java.lang.Object parameters;
        java.lang.Object status;
        java.lang.Object userAuthConfigId;

        /**
         * Sets the value of {@link RosChatbotModelProps#getChatbotId}
         * @param chatbotId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder chatbotId(java.lang.String chatbotId) {
            this.chatbotId = chatbotId;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotModelProps#getChatbotId}
         * @param chatbotId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder chatbotId(com.aliyun.ros.cdk.core.IResolvable chatbotId) {
            this.chatbotId = chatbotId;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotModelProps#getModelActionId}
         * @param modelActionId the value to be set.
         * @return {@code this}
         */
        public Builder modelActionId(java.lang.String modelActionId) {
            this.modelActionId = modelActionId;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotModelProps#getModelActionId}
         * @param modelActionId the value to be set.
         * @return {@code this}
         */
        public Builder modelActionId(com.aliyun.ros.cdk.core.IResolvable modelActionId) {
            this.modelActionId = modelActionId;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotModelProps#getModelId}
         * @param modelId the value to be set.
         * @return {@code this}
         */
        public Builder modelId(java.lang.String modelId) {
            this.modelId = modelId;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotModelProps#getModelId}
         * @param modelId the value to be set.
         * @return {@code this}
         */
        public Builder modelId(com.aliyun.ros.cdk.core.IResolvable modelId) {
            this.modelId = modelId;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotModelProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotModelProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotModelProps#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotModelProps#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotModelProps#getUserAuthConfigId}
         * @param userAuthConfigId the value to be set.
         * @return {@code this}
         */
        public Builder userAuthConfigId(java.lang.String userAuthConfigId) {
            this.userAuthConfigId = userAuthConfigId;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotModelProps#getUserAuthConfigId}
         * @param userAuthConfigId the value to be set.
         * @return {@code this}
         */
        public Builder userAuthConfigId(com.aliyun.ros.cdk.core.IResolvable userAuthConfigId) {
            this.userAuthConfigId = userAuthConfigId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosChatbotModelProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosChatbotModelProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosChatbotModelProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosChatbotModelProps {
        private final java.lang.Object chatbotId;
        private final java.lang.Object modelActionId;
        private final java.lang.Object modelId;
        private final java.lang.Object parameters;
        private final java.lang.Object status;
        private final java.lang.Object userAuthConfigId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.chatbotId = software.amazon.jsii.Kernel.get(this, "chatbotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.modelActionId = software.amazon.jsii.Kernel.get(this, "modelActionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.modelId = software.amazon.jsii.Kernel.get(this, "modelId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userAuthConfigId = software.amazon.jsii.Kernel.get(this, "userAuthConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.chatbotId = java.util.Objects.requireNonNull(builder.chatbotId, "chatbotId is required");
            this.modelActionId = builder.modelActionId;
            this.modelId = builder.modelId;
            this.parameters = builder.parameters;
            this.status = builder.status;
            this.userAuthConfigId = builder.userAuthConfigId;
        }

        @Override
        public final java.lang.Object getChatbotId() {
            return this.chatbotId;
        }

        @Override
        public final java.lang.Object getModelActionId() {
            return this.modelActionId;
        }

        @Override
        public final java.lang.Object getModelId() {
            return this.modelId;
        }

        @Override
        public final java.lang.Object getParameters() {
            return this.parameters;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        public final java.lang.Object getUserAuthConfigId() {
            return this.userAuthConfigId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("chatbotId", om.valueToTree(this.getChatbotId()));
            if (this.getModelActionId() != null) {
                data.set("modelActionId", om.valueToTree(this.getModelActionId()));
            }
            if (this.getModelId() != null) {
                data.set("modelId", om.valueToTree(this.getModelId()));
            }
            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }
            if (this.getUserAuthConfigId() != null) {
                data.set("userAuthConfigId", om.valueToTree(this.getUserAuthConfigId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-appflow.RosChatbotModelProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosChatbotModelProps.Jsii$Proxy that = (RosChatbotModelProps.Jsii$Proxy) o;

            if (!chatbotId.equals(that.chatbotId)) return false;
            if (this.modelActionId != null ? !this.modelActionId.equals(that.modelActionId) : that.modelActionId != null) return false;
            if (this.modelId != null ? !this.modelId.equals(that.modelId) : that.modelId != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.status != null ? !this.status.equals(that.status) : that.status != null) return false;
            return this.userAuthConfigId != null ? this.userAuthConfigId.equals(that.userAuthConfigId) : that.userAuthConfigId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.chatbotId.hashCode();
            result = 31 * result + (this.modelActionId != null ? this.modelActionId.hashCode() : 0);
            result = 31 * result + (this.modelId != null ? this.modelId.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            result = 31 * result + (this.userAuthConfigId != null ? this.userAuthConfigId.hashCode() : 0);
            return result;
        }
    }
}
