package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a <code>RosTLSPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-tlspolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:09.345Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosTLSPolicyProps")
@software.amazon.jsii.Jsii.Proxy(RosTLSPolicyProps.Jsii$Proxy.class)
public interface RosTLSPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCiphers();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTlsPolicyName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTlsVersions();

    /**
     * @return a {@link Builder} of {@link RosTLSPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTLSPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTLSPolicyProps> {
        java.lang.Object ciphers;
        java.lang.Object tlsPolicyName;
        java.lang.Object tlsVersions;

        /**
         * Sets the value of {@link RosTLSPolicyProps#getCiphers}
         * @param ciphers the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ciphers(com.aliyun.ros.cdk.core.IResolvable ciphers) {
            this.ciphers = ciphers;
            return this;
        }

        /**
         * Sets the value of {@link RosTLSPolicyProps#getCiphers}
         * @param ciphers the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ciphers(java.util.List<? extends java.lang.Object> ciphers) {
            this.ciphers = ciphers;
            return this;
        }

        /**
         * Sets the value of {@link RosTLSPolicyProps#getTlsPolicyName}
         * @param tlsPolicyName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder tlsPolicyName(java.lang.String tlsPolicyName) {
            this.tlsPolicyName = tlsPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link RosTLSPolicyProps#getTlsPolicyName}
         * @param tlsPolicyName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder tlsPolicyName(com.aliyun.ros.cdk.core.IResolvable tlsPolicyName) {
            this.tlsPolicyName = tlsPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link RosTLSPolicyProps#getTlsVersions}
         * @param tlsVersions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder tlsVersions(com.aliyun.ros.cdk.core.IResolvable tlsVersions) {
            this.tlsVersions = tlsVersions;
            return this;
        }

        /**
         * Sets the value of {@link RosTLSPolicyProps#getTlsVersions}
         * @param tlsVersions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder tlsVersions(java.util.List<? extends java.lang.Object> tlsVersions) {
            this.tlsVersions = tlsVersions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTLSPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTLSPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTLSPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTLSPolicyProps {
        private final java.lang.Object ciphers;
        private final java.lang.Object tlsPolicyName;
        private final java.lang.Object tlsVersions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ciphers = software.amazon.jsii.Kernel.get(this, "ciphers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tlsPolicyName = software.amazon.jsii.Kernel.get(this, "tlsPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tlsVersions = software.amazon.jsii.Kernel.get(this, "tlsVersions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ciphers = java.util.Objects.requireNonNull(builder.ciphers, "ciphers is required");
            this.tlsPolicyName = java.util.Objects.requireNonNull(builder.tlsPolicyName, "tlsPolicyName is required");
            this.tlsVersions = java.util.Objects.requireNonNull(builder.tlsVersions, "tlsVersions is required");
        }

        @Override
        public final java.lang.Object getCiphers() {
            return this.ciphers;
        }

        @Override
        public final java.lang.Object getTlsPolicyName() {
            return this.tlsPolicyName;
        }

        @Override
        public final java.lang.Object getTlsVersions() {
            return this.tlsVersions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ciphers", om.valueToTree(this.getCiphers()));
            data.set("tlsPolicyName", om.valueToTree(this.getTlsPolicyName()));
            data.set("tlsVersions", om.valueToTree(this.getTlsVersions()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RosTLSPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTLSPolicyProps.Jsii$Proxy that = (RosTLSPolicyProps.Jsii$Proxy) o;

            if (!ciphers.equals(that.ciphers)) return false;
            if (!tlsPolicyName.equals(that.tlsPolicyName)) return false;
            return this.tlsVersions.equals(that.tlsVersions);
        }

        @Override
        public final int hashCode() {
            int result = this.ciphers.hashCode();
            result = 31 * result + (this.tlsPolicyName.hashCode());
            result = 31 * result + (this.tlsVersions.hashCode());
            return result;
        }
    }
}
