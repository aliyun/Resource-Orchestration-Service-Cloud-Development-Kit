package com.aliyun.ros.cdk.mns.datasource;

/**
 * Properties for defining a <code>DATASOURCE::MNS::Queues</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:49.282Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.datasource.QueuesProps")
@software.amazon.jsii.Jsii.Proxy(QueuesProps.Jsii$Proxy.class)
public interface QueuesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property queueName: Queue name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueueName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link QueuesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link QueuesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<QueuesProps> {
        java.lang.Object queueName;

        /**
         * Sets the value of {@link QueuesProps#getQueueName}
         * @param queueName Property queueName: Queue name.
         * @return {@code this}
         */
        public Builder queueName(java.lang.String queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Sets the value of {@link QueuesProps#getQueueName}
         * @param queueName Property queueName: Queue name.
         * @return {@code this}
         */
        public Builder queueName(com.aliyun.ros.cdk.core.IResolvable queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link QueuesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public QueuesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link QueuesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QueuesProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mns.datasource.QueuesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            QueuesProps.Jsii$Proxy that = (QueuesProps.Jsii$Proxy) o;

            return this.queueName != null ? this.queueName.equals(that.queueName) : that.queueName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.queueName != null ? this.queueName.hashCode() : 0;
            return result;
        }
    }
}
