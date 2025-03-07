package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>SslVpnClientCert</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnclientcert
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.559Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.SslVpnClientCertProps")
@software.amazon.jsii.Jsii.Proxy(SslVpnClientCertProps.Jsii$Proxy.class)
public interface SslVpnClientCertProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property sslVpnServerId: ID of the SSL-VPN server.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSslVpnServerId();

    /**
     * Property name: The name of the client certificate.
     * <p>
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SslVpnClientCertProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SslVpnClientCertProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SslVpnClientCertProps> {
        java.lang.Object sslVpnServerId;
        java.lang.Object name;

        /**
         * Sets the value of {@link SslVpnClientCertProps#getSslVpnServerId}
         * @param sslVpnServerId Property sslVpnServerId: ID of the SSL-VPN server. This parameter is required.
         * @return {@code this}
         */
        public Builder sslVpnServerId(java.lang.String sslVpnServerId) {
            this.sslVpnServerId = sslVpnServerId;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnClientCertProps#getSslVpnServerId}
         * @param sslVpnServerId Property sslVpnServerId: ID of the SSL-VPN server. This parameter is required.
         * @return {@code this}
         */
        public Builder sslVpnServerId(com.aliyun.ros.cdk.core.IResolvable sslVpnServerId) {
            this.sslVpnServerId = sslVpnServerId;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnClientCertProps#getName}
         * @param name Property name: The name of the client certificate.
         *             The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnClientCertProps#getName}
         * @param name Property name: The name of the client certificate.
         *             The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SslVpnClientCertProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SslVpnClientCertProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SslVpnClientCertProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SslVpnClientCertProps {
        private final java.lang.Object sslVpnServerId;
        private final java.lang.Object name;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.sslVpnServerId = software.amazon.jsii.Kernel.get(this, "sslVpnServerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.sslVpnServerId = java.util.Objects.requireNonNull(builder.sslVpnServerId, "sslVpnServerId is required");
            this.name = builder.name;
        }

        @Override
        public final java.lang.Object getSslVpnServerId() {
            return this.sslVpnServerId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("sslVpnServerId", om.valueToTree(this.getSslVpnServerId()));
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.SslVpnClientCertProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SslVpnClientCertProps.Jsii$Proxy that = (SslVpnClientCertProps.Jsii$Proxy) o;

            if (!sslVpnServerId.equals(that.sslVpnServerId)) return false;
            return this.name != null ? this.name.equals(that.name) : that.name == null;
        }

        @Override
        public final int hashCode() {
            int result = this.sslVpnServerId.hashCode();
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            return result;
        }
    }
}
