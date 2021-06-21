package com.aliyun.ros.cdk.rocketmq;

/**
 * Properties for defining a `ALIYUN::ROCKETMQ::Topic`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:44.018Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq.TopicProps")
@software.amazon.jsii.Jsii.Proxy(TopicProps.Jsii$Proxy.class)
public interface TopicProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property messageType: The type of the message.
     * <p>
     * Valid values:
     * 0: normal message
     * 1: partitionally ordered message
     * 2: globally ordered message
     * 4: transactional message
     * 5: scheduled/delayed message
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMessageType();

    /**
     * Property topic: The name of the topic you want to create.
     * <p>
     * Note:
     * "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
     * If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
     * If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTopic();

    /**
     * Property perm: Set the read-write mode for the topic Valid values.: 6: Both read and write operations are supported. 4: Write operation is prohibited. 2: Read operation is prohibited.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPerm() {
        return null;
    }

    /**
     * Property remark: The remarks on the request.
     * <p>
     * This parameter can be left blank.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
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
        private java.lang.Object instanceId;
        private java.lang.Object messageType;
        private java.lang.Object topic;
        private java.lang.Object perm;
        private java.lang.Object remark;

        /**
         * Sets the value of {@link TopicProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getMessageType}
         * @param messageType Property messageType: The type of the message. This parameter is required.
         *                    Valid values:
         *                    0: normal message
         *                    1: partitionally ordered message
         *                    2: globally ordered message
         *                    4: transactional message
         *                    5: scheduled/delayed message
         * @return {@code this}
         */
        public Builder messageType(java.lang.Number messageType) {
            this.messageType = messageType;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getMessageType}
         * @param messageType Property messageType: The type of the message. This parameter is required.
         *                    Valid values:
         *                    0: normal message
         *                    1: partitionally ordered message
         *                    2: globally ordered message
         *                    4: transactional message
         *                    5: scheduled/delayed message
         * @return {@code this}
         */
        public Builder messageType(com.aliyun.ros.cdk.core.IResolvable messageType) {
            this.messageType = messageType;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getTopic}
         * @param topic Property topic: The name of the topic you want to create. This parameter is required.
         *              Note:
         *              "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
         *              If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
         *              If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
         * @return {@code this}
         */
        public Builder topic(java.lang.String topic) {
            this.topic = topic;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getTopic}
         * @param topic Property topic: The name of the topic you want to create. This parameter is required.
         *              Note:
         *              "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
         *              If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
         *              If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
         * @return {@code this}
         */
        public Builder topic(com.aliyun.ros.cdk.core.IResolvable topic) {
            this.topic = topic;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getPerm}
         * @param perm Property perm: Set the read-write mode for the topic Valid values.: 6: Both read and write operations are supported. 4: Write operation is prohibited. 2: Read operation is prohibited.
         * @return {@code this}
         */
        public Builder perm(java.lang.Number perm) {
            this.perm = perm;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getPerm}
         * @param perm Property perm: Set the read-write mode for the topic Valid values.: 6: Both read and write operations are supported. 4: Write operation is prohibited. 2: Read operation is prohibited.
         * @return {@code this}
         */
        public Builder perm(com.aliyun.ros.cdk.core.IResolvable perm) {
            this.perm = perm;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getRemark}
         * @param remark Property remark: The remarks on the request.
         *               This parameter can be left blank.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getRemark}
         * @param remark Property remark: The remarks on the request.
         *               This parameter can be left blank.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
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
        private final java.lang.Object instanceId;
        private final java.lang.Object messageType;
        private final java.lang.Object topic;
        private final java.lang.Object perm;
        private final java.lang.Object remark;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.messageType = software.amazon.jsii.Kernel.get(this, "messageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.topic = software.amazon.jsii.Kernel.get(this, "topic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.perm = software.amazon.jsii.Kernel.get(this, "perm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object instanceId, final java.lang.Object messageType, final java.lang.Object topic, final java.lang.Object perm, final java.lang.Object remark) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(instanceId, "instanceId is required");
            this.messageType = java.util.Objects.requireNonNull(messageType, "messageType is required");
            this.topic = java.util.Objects.requireNonNull(topic, "topic is required");
            this.perm = perm;
            this.remark = remark;
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
        public final java.lang.Object getTopic() {
            return this.topic;
        }

        @Override
        public final java.lang.Object getPerm() {
            return this.perm;
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
