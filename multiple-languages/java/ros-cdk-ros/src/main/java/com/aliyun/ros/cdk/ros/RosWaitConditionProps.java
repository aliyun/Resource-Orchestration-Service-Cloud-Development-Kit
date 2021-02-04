package com.aliyun.ros.cdk.ros;

/**
 * Properties for defining a `ALIYUN::ROS::WaitCondition`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:36.345Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosWaitConditionProps")
@software.amazon.jsii.Jsii.Proxy(RosWaitConditionProps.Jsii$Proxy.class)
public interface RosWaitConditionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getHandle();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getTimeout();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getCount() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosWaitConditionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosWaitConditionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosWaitConditionProps> {
        private java.lang.String handle;
        private java.lang.Number timeout;
        private java.lang.Number count;

        /**
         * Sets the value of {@link RosWaitConditionProps#getHandle}
         * @param handle the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder handle(java.lang.String handle) {
            this.handle = handle;
            return this;
        }

        /**
         * Sets the value of {@link RosWaitConditionProps#getTimeout}
         * @param timeout the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RosWaitConditionProps#getCount}
         * @param count the value to be set.
         * @return {@code this}
         */
        public Builder count(java.lang.Number count) {
            this.count = count;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosWaitConditionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosWaitConditionProps build() {
            return new Jsii$Proxy(handle, timeout, count);
        }
    }

    /**
     * An implementation for {@link RosWaitConditionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosWaitConditionProps {
        private final java.lang.String handle;
        private final java.lang.Number timeout;
        private final java.lang.Number count;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.handle = software.amazon.jsii.Kernel.get(this, "handle", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.count = software.amazon.jsii.Kernel.get(this, "count", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String handle, final java.lang.Number timeout, final java.lang.Number count) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.handle = java.util.Objects.requireNonNull(handle, "handle is required");
            this.timeout = java.util.Objects.requireNonNull(timeout, "timeout is required");
            this.count = count;
        }

        @Override
        public final java.lang.String getHandle() {
            return this.handle;
        }

        @Override
        public final java.lang.Number getTimeout() {
            return this.timeout;
        }

        @Override
        public final java.lang.Number getCount() {
            return this.count;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("handle", om.valueToTree(this.getHandle()));
            data.set("timeout", om.valueToTree(this.getTimeout()));
            if (this.getCount() != null) {
                data.set("count", om.valueToTree(this.getCount()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.RosWaitConditionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosWaitConditionProps.Jsii$Proxy that = (RosWaitConditionProps.Jsii$Proxy) o;

            if (!handle.equals(that.handle)) return false;
            if (!timeout.equals(that.timeout)) return false;
            return this.count != null ? this.count.equals(that.count) : that.count == null;
        }

        @Override
        public final int hashCode() {
            int result = this.handle.hashCode();
            result = 31 * result + (this.timeout.hashCode());
            result = 31 * result + (this.count != null ? this.count.hashCode() : 0);
            return result;
        }
    }
}
