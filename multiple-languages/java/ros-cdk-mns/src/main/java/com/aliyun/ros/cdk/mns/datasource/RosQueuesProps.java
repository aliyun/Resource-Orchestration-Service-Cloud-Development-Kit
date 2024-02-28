package com.aliyun.ros.cdk.mns.datasource;

/**
 * Properties for defining a <code>RosQueues</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queues
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:29.599Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.datasource.RosQueuesProps")
@software.amazon.jsii.Jsii.Proxy(RosQueuesProps.Jsii$Proxy.class)
public interface RosQueuesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueueName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosQueuesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosQueuesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosQueuesProps> {
        java.lang.Object queueName;

        /**
         * Sets the value of {@link RosQueuesProps#getQueueName}
         * @param queueName the value to be set.
         * @return {@code this}
         */
        public Builder queueName(java.lang.String queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Sets the value of {@link RosQueuesProps#getQueueName}
         * @param queueName the value to be set.
         * @return {@code this}
         */
        public Builder queueName(com.aliyun.ros.cdk.core.IResolvable queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosQueuesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosQueuesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosQueuesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosQueuesProps {
        private final java.lang.Object queueName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.queueName = software.amazon.jsii.Kernel.get(this, "queueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.queueName = builder.queueName;
        }

        @Override
        public final java.lang.Object getQueueName() {
            return this.queueName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getQueueName() != null) {
                data.set("queueName", om.valueToTree(this.getQueueName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mns.datasource.RosQueuesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosQueuesProps.Jsii$Proxy that = (RosQueuesProps.Jsii$Proxy) o;

            return this.queueName != null ? this.queueName.equals(that.queueName) : that.queueName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.queueName != null ? this.queueName.hashCode() : 0;
            return result;
        }
    }
}
