package com.aliyun.ros.cdk.rocketmq5;

/**
 * Properties for defining a <code>ALIYUN::ROCKETMQ5::Topic</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:50.199Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.RosTopicProps")
@software.amazon.jsii.Jsii.Proxy(RosTopicProps.Jsii$Proxy.class)
public interface RosTopicProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMessageType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTopicName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTopicProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTopicProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTopicProps> {
        java.lang.Object instanceId;
        java.lang.Object messageType;
        java.lang.Object topicName;
        java.lang.Object remark;

        /**
         * Sets the value of {@link RosTopicProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getMessageType}
         * @param messageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder messageType(java.lang.String messageType) {
            this.messageType = messageType;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getMessageType}
         * @param messageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder messageType(com.aliyun.ros.cdk.core.IResolvable messageType) {
            this.messageType = messageType;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getTopicName}
         * @param topicName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topicName(java.lang.String topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getTopicName}
         * @param topicName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topicName(com.aliyun.ros.cdk.core.IResolvable topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getRemark}
         * @param remark the value to be set.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getRemark}
         * @param remark the value to be set.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTopicProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTopicProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTopicProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTopicProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object messageType;
        private final java.lang.Object topicName;
        private final java.lang.Object remark;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.messageType = software.amazon.jsii.Kernel.get(this, "messageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.topicName = software.amazon.jsii.Kernel.get(this, "topicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.messageType = java.util.Objects.requireNonNull(builder.messageType, "messageType is required");
            this.topicName = java.util.Objects.requireNonNull(builder.topicName, "topicName is required");
            this.remark = builder.remark;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getMessageType() {
            return this.messageType;
        }

        @Override
        public final java.lang.Object getTopicName() {
            return this.topicName;
        }

        @Override
        public final java.lang.Object getRemark() {
            return this.remark;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("messageType", om.valueToTree(this.getMessageType()));
            data.set("topicName", om.valueToTree(this.getTopicName()));
            if (this.getRemark() != null) {
                data.set("remark", om.valueToTree(this.getRemark()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rocketmq5.RosTopicProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTopicProps.Jsii$Proxy that = (RosTopicProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!messageType.equals(that.messageType)) return false;
            if (!topicName.equals(that.topicName)) return false;
            return this.remark != null ? this.remark.equals(that.remark) : that.remark == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.messageType.hashCode());
            result = 31 * result + (this.topicName.hashCode());
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            return result;
        }
    }
}
