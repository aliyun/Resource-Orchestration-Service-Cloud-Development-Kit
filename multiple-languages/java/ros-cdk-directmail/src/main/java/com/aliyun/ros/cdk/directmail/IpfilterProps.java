package com.aliyun.ros.cdk.directmail;

/**
 * Properties for defining a `ALIYUN::DirectMail::Ipfilter`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:18.907Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.directmail.$Module.class, fqn = "@alicloud/ros-cdk-directmail.IpfilterProps")
@software.amazon.jsii.Jsii.Proxy(IpfilterProps.Jsii$Proxy.class)
public interface IpfilterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property ipAddress: The whitelist IP address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpAddress();

    /**
     * @return a {@link Builder} of {@link IpfilterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link IpfilterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<IpfilterProps> {
        java.lang.Object ipAddress;

        /**
         * Sets the value of {@link IpfilterProps#getIpAddress}
         * @param ipAddress Property ipAddress: The whitelist IP address. This parameter is required.
         * @return {@code this}
         */
        public Builder ipAddress(java.lang.String ipAddress) {
            this.ipAddress = ipAddress;
            return this;
        }

        /**
         * Sets the value of {@link IpfilterProps#getIpAddress}
         * @param ipAddress Property ipAddress: The whitelist IP address. This parameter is required.
         * @return {@code this}
         */
        public Builder ipAddress(com.aliyun.ros.cdk.core.IResolvable ipAddress) {
            this.ipAddress = ipAddress;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link IpfilterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public IpfilterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link IpfilterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IpfilterProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-directmail.IpfilterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            IpfilterProps.Jsii$Proxy that = (IpfilterProps.Jsii$Proxy) o;

            return this.ipAddress.equals(that.ipAddress);
        }

        @Override
        public final int hashCode() {
            int result = this.ipAddress.hashCode();
            return result;
        }
    }
}
