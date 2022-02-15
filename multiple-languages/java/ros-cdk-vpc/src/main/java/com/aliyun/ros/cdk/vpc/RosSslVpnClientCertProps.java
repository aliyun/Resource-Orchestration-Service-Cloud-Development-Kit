package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::SslVpnClientCert`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:08.604Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosSslVpnClientCertProps")
@software.amazon.jsii.Jsii.Proxy(RosSslVpnClientCertProps.Jsii$Proxy.class)
public interface RosSslVpnClientCertProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSslVpnServerId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSslVpnClientCertProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSslVpnClientCertProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSslVpnClientCertProps> {
        java.lang.Object sslVpnServerId;
        java.lang.Object name;

        /**
         * Sets the value of {@link RosSslVpnClientCertProps#getSslVpnServerId}
         * @param sslVpnServerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sslVpnServerId(java.lang.String sslVpnServerId) {
            this.sslVpnServerId = sslVpnServerId;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnClientCertProps#getSslVpnServerId}
         * @param sslVpnServerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sslVpnServerId(com.aliyun.ros.cdk.core.IResolvable sslVpnServerId) {
            this.sslVpnServerId = sslVpnServerId;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnClientCertProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnClientCertProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSslVpnClientCertProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSslVpnClientCertProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSslVpnClientCertProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSslVpnClientCertProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosSslVpnClientCertProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSslVpnClientCertProps.Jsii$Proxy that = (RosSslVpnClientCertProps.Jsii$Proxy) o;

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
