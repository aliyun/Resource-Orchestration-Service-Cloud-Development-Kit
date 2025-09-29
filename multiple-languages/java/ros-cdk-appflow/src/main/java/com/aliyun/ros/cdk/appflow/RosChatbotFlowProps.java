package com.aliyun.ros.cdk.appflow;

/**
 * Properties for defining a <code>RosChatbotFlow</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotflow
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:21.342Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.appflow.$Module.class, fqn = "@alicloud/ros-cdk-appflow.RosChatbotFlowProps")
@software.amazon.jsii.Jsii.Proxy(RosChatbotFlowProps.Jsii$Proxy.class)
public interface RosChatbotFlowProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChatbotId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFlowConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFlowName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFlowType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosChatbotFlowProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosChatbotFlowProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosChatbotFlowProps> {
        java.lang.Object chatbotId;
        java.lang.Object flowConfig;
        java.lang.Object flowName;
        java.lang.Object flowType;

        /**
         * Sets the value of {@link RosChatbotFlowProps#getChatbotId}
         * @param chatbotId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder chatbotId(java.lang.String chatbotId) {
            this.chatbotId = chatbotId;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotFlowProps#getChatbotId}
         * @param chatbotId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder chatbotId(com.aliyun.ros.cdk.core.IResolvable chatbotId) {
            this.chatbotId = chatbotId;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotFlowProps#getFlowConfig}
         * @param flowConfig the value to be set.
         * @return {@code this}
         */
        public Builder flowConfig(com.aliyun.ros.cdk.core.IResolvable flowConfig) {
            this.flowConfig = flowConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotFlowProps#getFlowConfig}
         * @param flowConfig the value to be set.
         * @return {@code this}
         */
        public Builder flowConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> flowConfig) {
            this.flowConfig = flowConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotFlowProps#getFlowName}
         * @param flowName the value to be set.
         * @return {@code this}
         */
        public Builder flowName(java.lang.String flowName) {
            this.flowName = flowName;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotFlowProps#getFlowName}
         * @param flowName the value to be set.
         * @return {@code this}
         */
        public Builder flowName(com.aliyun.ros.cdk.core.IResolvable flowName) {
            this.flowName = flowName;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotFlowProps#getFlowType}
         * @param flowType the value to be set.
         * @return {@code this}
         */
        public Builder flowType(java.lang.String flowType) {
            this.flowType = flowType;
            return this;
        }

        /**
         * Sets the value of {@link RosChatbotFlowProps#getFlowType}
         * @param flowType the value to be set.
         * @return {@code this}
         */
        public Builder flowType(com.aliyun.ros.cdk.core.IResolvable flowType) {
            this.flowType = flowType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosChatbotFlowProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosChatbotFlowProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosChatbotFlowProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosChatbotFlowProps {
        private final java.lang.Object chatbotId;
        private final java.lang.Object flowConfig;
        private final java.lang.Object flowName;
        private final java.lang.Object flowType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.chatbotId = software.amazon.jsii.Kernel.get(this, "chatbotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.flowConfig = software.amazon.jsii.Kernel.get(this, "flowConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.flowName = software.amazon.jsii.Kernel.get(this, "flowName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.flowType = software.amazon.jsii.Kernel.get(this, "flowType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.chatbotId = java.util.Objects.requireNonNull(builder.chatbotId, "chatbotId is required");
            this.flowConfig = builder.flowConfig;
            this.flowName = builder.flowName;
            this.flowType = builder.flowType;
        }

        @Override
        public final java.lang.Object getChatbotId() {
            return this.chatbotId;
        }

        @Override
        public final java.lang.Object getFlowConfig() {
            return this.flowConfig;
        }

        @Override
        public final java.lang.Object getFlowName() {
            return this.flowName;
        }

        @Override
        public final java.lang.Object getFlowType() {
            return this.flowType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("chatbotId", om.valueToTree(this.getChatbotId()));
            if (this.getFlowConfig() != null) {
                data.set("flowConfig", om.valueToTree(this.getFlowConfig()));
            }
            if (this.getFlowName() != null) {
                data.set("flowName", om.valueToTree(this.getFlowName()));
            }
            if (this.getFlowType() != null) {
                data.set("flowType", om.valueToTree(this.getFlowType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-appflow.RosChatbotFlowProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosChatbotFlowProps.Jsii$Proxy that = (RosChatbotFlowProps.Jsii$Proxy) o;

            if (!chatbotId.equals(that.chatbotId)) return false;
            if (this.flowConfig != null ? !this.flowConfig.equals(that.flowConfig) : that.flowConfig != null) return false;
            if (this.flowName != null ? !this.flowName.equals(that.flowName) : that.flowName != null) return false;
            return this.flowType != null ? this.flowType.equals(that.flowType) : that.flowType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.chatbotId.hashCode();
            result = 31 * result + (this.flowConfig != null ? this.flowConfig.hashCode() : 0);
            result = 31 * result + (this.flowName != null ? this.flowName.hashCode() : 0);
            result = 31 * result + (this.flowType != null ? this.flowType.hashCode() : 0);
            return result;
        }
    }
}
