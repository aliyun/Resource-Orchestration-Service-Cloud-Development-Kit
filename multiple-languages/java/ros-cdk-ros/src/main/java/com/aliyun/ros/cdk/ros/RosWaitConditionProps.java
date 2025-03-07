package com.aliyun.ros.cdk.ros;

/**
 * Properties for defining a <code>RosWaitCondition</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-waitcondition
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:10.248Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosWaitConditionProps")
@software.amazon.jsii.Jsii.Proxy(RosWaitConditionProps.Jsii$Proxy.class)
public interface RosWaitConditionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHandle();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTimeout();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShowProgressEvent() {
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
        java.lang.Object handle;
        java.lang.Object timeout;
        java.lang.Object count;
        java.lang.Object showProgressEvent;

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
         * Sets the value of {@link RosWaitConditionProps#getHandle}
         * @param handle the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder handle(com.aliyun.ros.cdk.core.IResolvable handle) {
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
         * Sets the value of {@link RosWaitConditionProps#getTimeout}
         * @param timeout the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
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
         * Sets the value of {@link RosWaitConditionProps#getCount}
         * @param count the value to be set.
         * @return {@code this}
         */
        public Builder count(com.aliyun.ros.cdk.core.IResolvable count) {
            this.count = count;
            return this;
        }

        /**
         * Sets the value of {@link RosWaitConditionProps#getShowProgressEvent}
         * @param showProgressEvent the value to be set.
         * @return {@code this}
         */
        public Builder showProgressEvent(java.lang.String showProgressEvent) {
            this.showProgressEvent = showProgressEvent;
            return this;
        }

        /**
         * Sets the value of {@link RosWaitConditionProps#getShowProgressEvent}
         * @param showProgressEvent the value to be set.
         * @return {@code this}
         */
        public Builder showProgressEvent(com.aliyun.ros.cdk.core.IResolvable showProgressEvent) {
            this.showProgressEvent = showProgressEvent;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosWaitConditionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosWaitConditionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosWaitConditionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosWaitConditionProps {
        private final java.lang.Object handle;
        private final java.lang.Object timeout;
        private final java.lang.Object count;
        private final java.lang.Object showProgressEvent;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.handle = software.amazon.jsii.Kernel.get(this, "handle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.count = software.amazon.jsii.Kernel.get(this, "count", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.showProgressEvent = software.amazon.jsii.Kernel.get(this, "showProgressEvent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.handle = java.util.Objects.requireNonNull(builder.handle, "handle is required");
            this.timeout = java.util.Objects.requireNonNull(builder.timeout, "timeout is required");
            this.count = builder.count;
            this.showProgressEvent = builder.showProgressEvent;
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
        public final java.lang.Object getShowProgressEvent() {
            return this.showProgressEvent;
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
            if (this.getShowProgressEvent() != null) {
                data.set("showProgressEvent", om.valueToTree(this.getShowProgressEvent()));
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
            if (this.count != null ? !this.count.equals(that.count) : that.count != null) return false;
            return this.showProgressEvent != null ? this.showProgressEvent.equals(that.showProgressEvent) : that.showProgressEvent == null;
        }

        @Override
        public final int hashCode() {
            int result = this.handle.hashCode();
            result = 31 * result + (this.timeout.hashCode());
            result = 31 * result + (this.count != null ? this.count.hashCode() : 0);
            result = 31 * result + (this.showProgressEvent != null ? this.showProgressEvent.hashCode() : 0);
            return result;
        }
    }
}
