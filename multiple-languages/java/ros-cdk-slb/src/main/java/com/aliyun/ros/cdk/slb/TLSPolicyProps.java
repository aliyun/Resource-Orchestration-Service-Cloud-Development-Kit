package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a <code>TLSPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-tlspolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:33.560Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.TLSPolicyProps")
@software.amazon.jsii.Jsii.Proxy(TLSPolicyProps.Jsii$Proxy.class)
public interface TLSPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property ciphers: The supported cipher suites, which are determined by the TLS protocol version.
     * <p>
     * You can specify at most 32 cipher suites.TLS 1.0 and TLS 1.1 support the following cipher suites:
     * ECDHE-ECDSA-AES128-SHA
     * ECDHE-ECDSA-AES256-SHA
     * ECDHE-RSA-AES128-SHA
     * ECDHE-RSA-AES256-SHA
     * AES128-SHA
     * AES256-SHA
     * DES-CBC3-SHA
     * TLS 1.2 supports the following cipher suites:
     * ECDHE-ECDSA-AES128-SHA
     * ECDHE-ECDSA-AES256-SHA
     * ECDHE-RSA-AES128-SHA
     * ECDHE-RSA-AES256-SHA
     * AES128-SHA
     * AES256-SHA
     * DES-CBC3-SHA
     * ECDHE-ECDSA-AES128-GCM-SHA256
     * ECDHE-ECDSA-AES256-GCM-SHA384
     * ECDHE-ECDSA-AES128-SHA256
     * ECDHE-ECDSA-AES256-SHA384
     * ECDHE-RSA-AES128-GCM-SHA256
     * ECDHE-RSA-AES256-GCM-SHA384
     * ECDHE-RSA-AES128-SHA256
     * ECDHE-RSA-AES256-SHA384
     * AES128-GCM-SHA256
     * AES256-GCM-SHA384
     * AES128-SHA256
     * AES256-SHA256
     * TLS 1.3 supports the following cipher suites:
     * TLS_AES_128_GCM_SHA256
     * TLS_AES_256_GCM_SHA384
     * TLS_CHACHA20_POLY1305_SHA256
     * TLS_AES_128_CCM_SHA256
     * TLS_AES_128_CCM_8_SHA256
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCiphers();

    /**
     * Property tlsPolicyName: The name of the TLS policy.
     * <p>
     * The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTlsPolicyName();

    /**
     * Property tlsVersions: The version of the TLS protocol.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTlsVersions();

    /**
     * @return a {@link Builder} of {@link TLSPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TLSPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TLSPolicyProps> {
        java.lang.Object ciphers;
        java.lang.Object tlsPolicyName;
        java.lang.Object tlsVersions;

        /**
         * Sets the value of {@link TLSPolicyProps#getCiphers}
         * @param ciphers Property ciphers: The supported cipher suites, which are determined by the TLS protocol version. This parameter is required.
         *                You can specify at most 32 cipher suites.TLS 1.0 and TLS 1.1 support the following cipher suites:
         *                ECDHE-ECDSA-AES128-SHA
         *                ECDHE-ECDSA-AES256-SHA
         *                ECDHE-RSA-AES128-SHA
         *                ECDHE-RSA-AES256-SHA
         *                AES128-SHA
         *                AES256-SHA
         *                DES-CBC3-SHA
         *                TLS 1.2 supports the following cipher suites:
         *                ECDHE-ECDSA-AES128-SHA
         *                ECDHE-ECDSA-AES256-SHA
         *                ECDHE-RSA-AES128-SHA
         *                ECDHE-RSA-AES256-SHA
         *                AES128-SHA
         *                AES256-SHA
         *                DES-CBC3-SHA
         *                ECDHE-ECDSA-AES128-GCM-SHA256
         *                ECDHE-ECDSA-AES256-GCM-SHA384
         *                ECDHE-ECDSA-AES128-SHA256
         *                ECDHE-ECDSA-AES256-SHA384
         *                ECDHE-RSA-AES128-GCM-SHA256
         *                ECDHE-RSA-AES256-GCM-SHA384
         *                ECDHE-RSA-AES128-SHA256
         *                ECDHE-RSA-AES256-SHA384
         *                AES128-GCM-SHA256
         *                AES256-GCM-SHA384
         *                AES128-SHA256
         *                AES256-SHA256
         *                TLS 1.3 supports the following cipher suites:
         *                TLS_AES_128_GCM_SHA256
         *                TLS_AES_256_GCM_SHA384
         *                TLS_CHACHA20_POLY1305_SHA256
         *                TLS_AES_128_CCM_SHA256
         *                TLS_AES_128_CCM_8_SHA256
         * @return {@code this}
         */
        public Builder ciphers(com.aliyun.ros.cdk.core.IResolvable ciphers) {
            this.ciphers = ciphers;
            return this;
        }

        /**
         * Sets the value of {@link TLSPolicyProps#getCiphers}
         * @param ciphers Property ciphers: The supported cipher suites, which are determined by the TLS protocol version. This parameter is required.
         *                You can specify at most 32 cipher suites.TLS 1.0 and TLS 1.1 support the following cipher suites:
         *                ECDHE-ECDSA-AES128-SHA
         *                ECDHE-ECDSA-AES256-SHA
         *                ECDHE-RSA-AES128-SHA
         *                ECDHE-RSA-AES256-SHA
         *                AES128-SHA
         *                AES256-SHA
         *                DES-CBC3-SHA
         *                TLS 1.2 supports the following cipher suites:
         *                ECDHE-ECDSA-AES128-SHA
         *                ECDHE-ECDSA-AES256-SHA
         *                ECDHE-RSA-AES128-SHA
         *                ECDHE-RSA-AES256-SHA
         *                AES128-SHA
         *                AES256-SHA
         *                DES-CBC3-SHA
         *                ECDHE-ECDSA-AES128-GCM-SHA256
         *                ECDHE-ECDSA-AES256-GCM-SHA384
         *                ECDHE-ECDSA-AES128-SHA256
         *                ECDHE-ECDSA-AES256-SHA384
         *                ECDHE-RSA-AES128-GCM-SHA256
         *                ECDHE-RSA-AES256-GCM-SHA384
         *                ECDHE-RSA-AES128-SHA256
         *                ECDHE-RSA-AES256-SHA384
         *                AES128-GCM-SHA256
         *                AES256-GCM-SHA384
         *                AES128-SHA256
         *                AES256-SHA256
         *                TLS 1.3 supports the following cipher suites:
         *                TLS_AES_128_GCM_SHA256
         *                TLS_AES_256_GCM_SHA384
         *                TLS_CHACHA20_POLY1305_SHA256
         *                TLS_AES_128_CCM_SHA256
         *                TLS_AES_128_CCM_8_SHA256
         * @return {@code this}
         */
        public Builder ciphers(java.util.List<? extends java.lang.Object> ciphers) {
            this.ciphers = ciphers;
            return this;
        }

        /**
         * Sets the value of {@link TLSPolicyProps#getTlsPolicyName}
         * @param tlsPolicyName Property tlsPolicyName: The name of the TLS policy. This parameter is required.
         *                      The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder tlsPolicyName(java.lang.String tlsPolicyName) {
            this.tlsPolicyName = tlsPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link TLSPolicyProps#getTlsPolicyName}
         * @param tlsPolicyName Property tlsPolicyName: The name of the TLS policy. This parameter is required.
         *                      The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder tlsPolicyName(com.aliyun.ros.cdk.core.IResolvable tlsPolicyName) {
            this.tlsPolicyName = tlsPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link TLSPolicyProps#getTlsVersions}
         * @param tlsVersions Property tlsVersions: The version of the TLS protocol. This parameter is required.
         * @return {@code this}
         */
        public Builder tlsVersions(com.aliyun.ros.cdk.core.IResolvable tlsVersions) {
            this.tlsVersions = tlsVersions;
            return this;
        }

        /**
         * Sets the value of {@link TLSPolicyProps#getTlsVersions}
         * @param tlsVersions Property tlsVersions: The version of the TLS protocol. This parameter is required.
         * @return {@code this}
         */
        public Builder tlsVersions(java.util.List<? extends java.lang.Object> tlsVersions) {
            this.tlsVersions = tlsVersions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TLSPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TLSPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TLSPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TLSPolicyProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.TLSPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TLSPolicyProps.Jsii$Proxy that = (TLSPolicyProps.Jsii$Proxy) o;

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
