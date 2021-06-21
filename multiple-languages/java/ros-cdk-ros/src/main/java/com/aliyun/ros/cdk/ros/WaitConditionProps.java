package com.aliyun.ros.cdk.ros;

/**
 * Properties for defining a `ALIYUN::ROS::WaitCondition`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:44.040Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.WaitConditionProps")
@software.amazon.jsii.Jsii.Proxy(WaitConditionProps.Jsii$Proxy.class)
public interface WaitConditionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property handle: A reference to the wait condition handle used to signal this wait condition.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHandle();

    /**
     * Property timeout: The number of seconds to wait for the correct number of signals to arrive.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTimeout();

    /**
     * Property count: The number of success signals that must be received before the stack creation process continues.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCount() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link WaitConditionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link WaitConditionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<WaitConditionProps> {
        private java.lang.Object handle;
        private java.lang.Object timeout;
        private java.lang.Object count;

        /**
         * Sets the value of {@link WaitConditionProps#getHandle}
         * @param handle Property handle: A reference to the wait condition handle used to signal this wait condition. This parameter is required.
         * @return {@code this}
         */
        public Builder handle(java.lang.String handle) {
            this.handle = handle;
            return this;
        }

        /**
         * Sets the value of {@link WaitConditionProps#getHandle}
         * @param handle Property handle: A reference to the wait condition handle used to signal this wait condition. This parameter is required.
         * @return {@code this}
         */
        public Builder handle(com.aliyun.ros.cdk.core.IResolvable handle) {
            this.handle = handle;
            return this;
        }

        /**
         * Sets the value of {@link WaitConditionProps#getTimeout}
         * @param timeout Property timeout: The number of seconds to wait for the correct number of signals to arrive. This parameter is required.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link WaitConditionProps#getTimeout}
         * @param timeout Property timeout: The number of seconds to wait for the correct number of signals to arrive. This parameter is required.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link WaitConditionProps#getCount}
         * @param count Property count: The number of success signals that must be received before the stack creation process continues.
         * @return {@code this}
         */
        public Builder count(java.lang.Number count) {
            this.count = count;
            return this;
        }

        /**
         * Sets the value of {@link WaitConditionProps#getCount}
         * @param count Property count: The number of success signals that must be received before the stack creation process continues.
         * @return {@code this}
         */
        public Builder count(com.aliyun.ros.cdk.core.IResolvable count) {
            this.count = count;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link WaitConditionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public WaitConditionProps build() {
            return new Jsii$Proxy(handle, timeout, count);
        }
    }

    /**
     * An implementation for {@link WaitConditionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WaitConditionProps {
        private final java.lang.Object handle;
        private final java.lang.Object timeout;
        private final java.lang.Object count;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.handle = software.amazon.jsii.Kernel.get(this, "handle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.count = software.amazon.jsii.Kernel.get(this, "count", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object handle, final java.lang.Object timeout, final java.lang.Object count) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.handle = java.util.Objects.requireNonNull(handle, "handle is required");
            this.timeout = java.util.Objects.requireNonNull(timeout, "timeout is required");
            this.count = count;
        }

        @Override
        public final java.lang.Object getHandle() {
            return this.handle;
        }

        @Override
        public final java.lang.Object getTimeout() {
            return this.timeout;
        }

        @Override
        public final java.lang.Object getCount() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.WaitConditionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            WaitConditionProps.Jsii$Proxy that = (WaitConditionProps.Jsii$Proxy) o;

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
