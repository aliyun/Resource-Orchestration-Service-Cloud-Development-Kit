package com.aliyun.ros.cdk.rocketmq;

/**
 * Properties for defining a `ALIYUN::ROCKETMQ::Topic`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.509Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq.TopicProps")
@software.amazon.jsii.Jsii.Proxy(TopicProps.Jsii$Proxy.class)
public interface TopicProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getMessageType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getTopic();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPerm() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRemark() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TopicProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TopicProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TopicProps> {
        private java.lang.String instanceId;
        private java.lang.Number messageType;
        private java.lang.String topic;
        private java.lang.Number perm;
        private java.lang.String remark;

        /**
         * Sets the value of {@link TopicProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getMessageType}
         * @param messageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder messageType(java.lang.Number messageType) {
            this.messageType = messageType;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getTopic}
         * @param topic the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topic(java.lang.String topic) {
            this.topic = topic;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getPerm}
         * @param perm the value to be set.
         * @return {@code this}
         */
        public Builder perm(java.lang.Number perm) {
            this.perm = perm;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getRemark}
         * @param remark the value to be set.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TopicProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TopicProps build() {
            return new Jsii$Proxy(instanceId, messageType, topic, perm, remark);
        }
    }

    /**
     * An implementation for {@link TopicProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TopicProps {
        private final java.lang.String instanceId;
        private final java.lang.Number messageType;
        private final java.lang.String topic;
        private final java.lang.Number perm;
        private final java.lang.String remark;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.messageType = software.amazon.jsii.Kernel.get(this, "messageType", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.topic = software.amazon.jsii.Kernel.get(this, "topic", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.perm = software.amazon.jsii.Kernel.get(this, "perm", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String instanceId, final java.lang.Number messageType, final java.lang.String topic, final java.lang.Number perm, final java.lang.String remark) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(instanceId, "instanceId is required");
            this.messageType = java.util.Objects.requireNonNull(messageType, "messageType is required");
            this.topic = java.util.Objects.requireNonNull(topic, "topic is required");
            this.perm = perm;
            this.remark = remark;
        }

        @Override
        public final java.lang.String getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Number getMessageType() {
            return this.messageType;
        }

        @Override
        public final java.lang.String getTopic() {
            return this.topic;
        }

        @Override
        public final java.lang.Number getPerm() {
            return this.perm;
        }

        @Override
        public final java.lang.String getRemark() {
            return this.remark;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("messageType", om.valueToTree(this.getMessageType()));
            data.set("topic", om.valueToTree(this.getTopic()));
            if (this.getPerm() != null) {
                data.set("perm", om.valueToTree(this.getPerm()));
            }
            if (this.getRemark() != null) {
                data.set("remark", om.valueToTree(this.getRemark()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rocketmq.TopicProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TopicProps.Jsii$Proxy that = (TopicProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!messageType.equals(that.messageType)) return false;
            if (!topic.equals(that.topic)) return false;
            if (this.perm != null ? !this.perm.equals(that.perm) : that.perm != null) return false;
            return this.remark != null ? this.remark.equals(that.remark) : that.remark == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.messageType.hashCode());
            result = 31 * result + (this.topic.hashCode());
            result = 31 * result + (this.perm != null ? this.perm.hashCode() : 0);
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            return result;
        }
    }
}
