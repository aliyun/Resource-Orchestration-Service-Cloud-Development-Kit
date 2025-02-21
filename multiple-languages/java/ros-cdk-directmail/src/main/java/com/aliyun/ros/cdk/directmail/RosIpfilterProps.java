package com.aliyun.ros.cdk.directmail;

/**
 * Properties for defining a <code>RosIpfilter</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-ipfilter
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:14.045Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.directmail.$Module.class, fqn = "@alicloud/ros-cdk-directmail.RosIpfilterProps")
@software.amazon.jsii.Jsii.Proxy(RosIpfilterProps.Jsii$Proxy.class)
public interface RosIpfilterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpAddress();

    /**
     * @return a {@link Builder} of {@link RosIpfilterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosIpfilterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosIpfilterProps> {
        java.lang.Object ipAddress;

        /**
         * Sets the value of {@link RosIpfilterProps#getIpAddress}
         * @param ipAddress the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipAddress(java.lang.String ipAddress) {
            this.ipAddress = ipAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosIpfilterProps#getIpAddress}
         * @param ipAddress the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipAddress(com.aliyun.ros.cdk.core.IResolvable ipAddress) {
            this.ipAddress = ipAddress;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosIpfilterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosIpfilterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosIpfilterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosIpfilterProps {
        private final java.lang.Object ipAddress;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ipAddress = software.amazon.jsii.Kernel.get(this, "ipAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ipAddress = java.util.Objects.requireNonNull(builder.ipAddress, "ipAddress is required");
        }

        @Override
        public final java.lang.Object getIpAddress() {
            return this.ipAddress;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ipAddress", om.valueToTree(this.getIpAddress()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-directmail.RosIpfilterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosIpfilterProps.Jsii$Proxy that = (RosIpfilterProps.Jsii$Proxy) o;

            return this.ipAddress.equals(that.ipAddress);
        }

        @Override
        public final int hashCode() {
            int result = this.ipAddress.hashCode();
            return result;
        }
    }
}
