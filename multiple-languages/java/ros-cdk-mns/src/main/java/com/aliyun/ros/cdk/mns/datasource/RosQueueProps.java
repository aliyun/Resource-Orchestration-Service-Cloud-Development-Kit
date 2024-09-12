package com.aliyun.ros.cdk.mns.datasource;

/**
 * Properties for defining a <code>RosQueue</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queue
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:28.394Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.datasource.RosQueueProps")
@software.amazon.jsii.Jsii.Proxy(RosQueueProps.Jsii$Proxy.class)
public interface RosQueueProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQueueName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosQueueProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosQueueProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosQueueProps> {
        java.lang.Object queueName;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosQueueProps#getQueueName}
         * @param queueName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queueName(java.lang.String queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getQueueName}
         * @param queueName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queueName(com.aliyun.ros.cdk.core.IResolvable queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosQueueProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosQueueProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosQueueProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosQueueProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosQueueProps {
        private final java.lang.Object queueName;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.queueName = software.amazon.jsii.Kernel.get(this, "queueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.queueName = java.util.Objects.requireNonNull(builder.queueName, "queueName is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getQueueName() {
            return this.queueName;
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

            data.set("queueName", om.valueToTree(this.getQueueName()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mns.datasource.RosQueueProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosQueueProps.Jsii$Proxy that = (RosQueueProps.Jsii$Proxy) o;

            if (!queueName.equals(that.queueName)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.queueName.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
