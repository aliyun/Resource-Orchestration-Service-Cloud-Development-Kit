package com.aliyun.ros.cdk.rocketmq5.datasource;

/**
 * Properties for defining a <code>Topic</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-topic
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:33.154Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.datasource.TopicProps")
@software.amazon.jsii.Jsii.Proxy(TopicProps.Jsii$Proxy.class)
public interface TopicProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The ID of the instance to which the topic belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property topicName: The name of the topic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTopicName();

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
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
        java.lang.Object instanceId;
        java.lang.Object topicName;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link TopicProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance to which the topic belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance to which the topic belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getTopicName}
         * @param topicName Property topicName: The name of the topic. This parameter is required.
         * @return {@code this}
         */
        public Builder topicName(java.lang.String topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getTopicName}
         * @param topicName Property topicName: The name of the topic. This parameter is required.
         * @return {@code this}
         */
        public Builder topicName(com.aliyun.ros.cdk.core.IResolvable topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TopicProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TopicProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TopicProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TopicProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object topicName;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.topicName = software.amazon.jsii.Kernel.get(this, "topicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.topicName = java.util.Objects.requireNonNull(builder.topicName, "topicName is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getTopicName() {
            return this.topicName;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("topicName", om.valueToTree(this.getTopicName()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rocketmq5.datasource.TopicProps"));
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
            if (!topicName.equals(that.topicName)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.topicName.hashCode());
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}