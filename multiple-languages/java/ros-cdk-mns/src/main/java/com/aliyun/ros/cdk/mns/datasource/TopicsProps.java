package com.aliyun.ros.cdk.mns.datasource;

/**
 * Properties for defining a <code>Topics</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topics
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:10.759Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.datasource.TopicsProps")
@software.amazon.jsii.Jsii.Proxy(TopicsProps.Jsii$Proxy.class)
public interface TopicsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property topicName: Topic name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTopicName() {
        return null;
    }

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
        java.lang.Object topicName;

        /**
         * Sets the value of {@link TopicsProps#getTopicName}
         * @param topicName Property topicName: Topic name.
         * @return {@code this}
         */
        public Builder topicName(java.lang.String topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link TopicsProps#getTopicName}
         * @param topicName Property topicName: Topic name.
         * @return {@code this}
         */
        public Builder topicName(com.aliyun.ros.cdk.core.IResolvable topicName) {
            this.topicName = topicName;
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
        private final java.lang.Object topicName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.topicName = software.amazon.jsii.Kernel.get(this, "topicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.topicName = builder.topicName;
        }

        @Override
        public final java.lang.Object getTopicName() {
            return this.topicName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getTopicName() != null) {
                data.set("topicName", om.valueToTree(this.getTopicName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mns.datasource.TopicsProps"));
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

            return this.topicName != null ? this.topicName.equals(that.topicName) : that.topicName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.topicName != null ? this.topicName.hashCode() : 0;
            return result;
        }
    }
}
