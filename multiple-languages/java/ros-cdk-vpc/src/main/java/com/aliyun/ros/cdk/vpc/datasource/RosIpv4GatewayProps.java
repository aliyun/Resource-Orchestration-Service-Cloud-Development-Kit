package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RosIpv4Gateway</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:01.449Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosIpv4GatewayProps")
@software.amazon.jsii.Jsii.Proxy(RosIpv4GatewayProps.Jsii$Proxy.class)
public interface RosIpv4GatewayProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpv4GatewayId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosIpv4GatewayProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosIpv4GatewayProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosIpv4GatewayProps> {
        java.lang.Object ipv4GatewayId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosIpv4GatewayProps#getIpv4GatewayId}
         * @param ipv4GatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipv4GatewayId(java.lang.String ipv4GatewayId) {
            this.ipv4GatewayId = ipv4GatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpv4GatewayProps#getIpv4GatewayId}
         * @param ipv4GatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipv4GatewayId(com.aliyun.ros.cdk.core.IResolvable ipv4GatewayId) {
            this.ipv4GatewayId = ipv4GatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpv4GatewayProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosIpv4GatewayProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosIpv4GatewayProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosIpv4GatewayProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosIpv4GatewayProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosIpv4GatewayProps {
        private final java.lang.Object ipv4GatewayId;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ipv4GatewayId = software.amazon.jsii.Kernel.get(this, "ipv4GatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ipv4GatewayId = java.util.Objects.requireNonNull(builder.ipv4GatewayId, "ipv4GatewayId is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getIpv4GatewayId() {
            return this.ipv4GatewayId;
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

            data.set("ipv4GatewayId", om.valueToTree(this.getIpv4GatewayId()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosIpv4GatewayProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosIpv4GatewayProps.Jsii$Proxy that = (RosIpv4GatewayProps.Jsii$Proxy) o;

            if (!ipv4GatewayId.equals(that.ipv4GatewayId)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ipv4GatewayId.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
