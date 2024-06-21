package com.aliyun.ros.cdk.kafka.datasource;

/**
 * Properties for defining a <code>Topics</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topics
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:10.482Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.datasource.TopicsProps")
@software.amazon.jsii.Jsii.Proxy(TopicsProps.Jsii$Proxy.class)
public interface TopicsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: Resource id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property topic: Topic Name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTopic();

    /**
     * @return a {@link Builder} of {@link TopicsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TopicsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TopicsProps> {
        java.lang.Object instanceId;
        java.lang.Object topic;

        /**
         * Sets the value of {@link TopicsProps#getInstanceId}
         * @param instanceId Property instanceId: Resource id. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link TopicsProps#getInstanceId}
         * @param instanceId Property instanceId: Resource id. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link TopicsProps#getTopic}
         * @param topic Property topic: Topic Name. This parameter is required.
         * @return {@code this}
         */
        public Builder topic(java.lang.String topic) {
            this.topic = topic;
            return this;
        }

        /**
         * Sets the value of {@link TopicsProps#getTopic}
         * @param topic Property topic: Topic Name. This parameter is required.
         * @return {@code this}
         */
        public Builder topic(com.aliyun.ros.cdk.core.IResolvable topic) {
            this.topic = topic;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TopicsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TopicsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TopicsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TopicsProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object topic;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.topic = software.amazon.jsii.Kernel.get(this, "topic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.topic = java.util.Objects.requireNonNull(builder.topic, "topic is required");
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getTopic() {
            return this.topic;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("topic", om.valueToTree(this.getTopic()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kafka.datasource.TopicsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TopicsProps.Jsii$Proxy that = (TopicsProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            return this.topic.equals(that.topic);
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.topic.hashCode());
            return result;
        }
    }
}
