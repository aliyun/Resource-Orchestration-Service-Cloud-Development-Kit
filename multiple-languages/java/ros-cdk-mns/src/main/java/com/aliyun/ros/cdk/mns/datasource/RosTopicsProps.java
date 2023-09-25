package com.aliyun.ros.cdk.mns.datasource;

/**
 * Properties for defining a <code>DATASOURCE::MNS::Topics</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:46.625Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.datasource.RosTopicsProps")
@software.amazon.jsii.Jsii.Proxy(RosTopicsProps.Jsii$Proxy.class)
public interface RosTopicsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTopicName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTopicsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTopicsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTopicsProps> {
        java.lang.Object topicName;

        /**
         * Sets the value of {@link RosTopicsProps#getTopicName}
         * @param topicName the value to be set.
         * @return {@code this}
         */
        public Builder topicName(java.lang.String topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicsProps#getTopicName}
         * @param topicName the value to be set.
         * @return {@code this}
         */
        public Builder topicName(com.aliyun.ros.cdk.core.IResolvable topicName) {
            this.topicName = topicName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTopicsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTopicsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTopicsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTopicsProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mns.datasource.RosTopicsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTopicsProps.Jsii$Proxy that = (RosTopicsProps.Jsii$Proxy) o;

            return this.topicName != null ? this.topicName.equals(that.topicName) : that.topicName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.topicName != null ? this.topicName.hashCode() : 0;
            return result;
        }
    }
}
