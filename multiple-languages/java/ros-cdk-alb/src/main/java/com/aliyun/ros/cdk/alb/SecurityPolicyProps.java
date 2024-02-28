package com.aliyun.ros.cdk.alb;

/**
 * Properties for defining a <code>SecurityPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-securitypolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:26.638Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.SecurityPolicyProps")
@software.amazon.jsii.Jsii.Proxy(SecurityPolicyProps.Jsii$Proxy.class)
public interface SecurityPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property ciphers: The supported cipher suites, which are determined by the TLS protocol version.
     * <p>
     * The specified cipher suites must be supported by at least one TLS protocol version that you specify.
     * Note For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCiphers();

    /**
     * Property securityPolicyName: The name of the security policy.
     * <p>
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityPolicyName();

    /**
     * Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol.
     * <p>
     * Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTlsVersions();

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SecurityPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SecurityPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SecurityPolicyProps> {
        java.lang.Object ciphers;
        java.lang.Object securityPolicyName;
        java.lang.Object tlsVersions;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link SecurityPolicyProps#getCiphers}
         * @param ciphers Property ciphers: The supported cipher suites, which are determined by the TLS protocol version. This parameter is required.
         *                The specified cipher suites must be supported by at least one TLS protocol version that you specify.
         *                Note For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.
         * @return {@code this}
         */
        public Builder ciphers(com.aliyun.ros.cdk.core.IResolvable ciphers) {
            this.ciphers = ciphers;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPolicyProps#getCiphers}
         * @param ciphers Property ciphers: The supported cipher suites, which are determined by the TLS protocol version. This parameter is required.
         *                The specified cipher suites must be supported by at least one TLS protocol version that you specify.
         *                Note For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.
         * @return {@code this}
         */
        public Builder ciphers(java.util.List<? extends java.lang.Object> ciphers) {
            this.ciphers = ciphers;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPolicyProps#getSecurityPolicyName}
         * @param securityPolicyName Property securityPolicyName: The name of the security policy. This parameter is required.
         *                           The name must be 2 to 128 characters in length, and can contain letters, digits, periods
         *                           (.), underscores (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder securityPolicyName(java.lang.String securityPolicyName) {
            this.securityPolicyName = securityPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPolicyProps#getSecurityPolicyName}
         * @param securityPolicyName Property securityPolicyName: The name of the security policy. This parameter is required.
         *                           The name must be 2 to 128 characters in length, and can contain letters, digits, periods
         *                           (.), underscores (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder securityPolicyName(com.aliyun.ros.cdk.core.IResolvable securityPolicyName) {
            this.securityPolicyName = securityPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPolicyProps#getTlsVersions}
         * @param tlsVersions Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. This parameter is required.
         *                    Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
         * @return {@code this}
         */
        public Builder tlsVersions(com.aliyun.ros.cdk.core.IResolvable tlsVersions) {
            this.tlsVersions = tlsVersions;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPolicyProps#getTlsVersions}
         * @param tlsVersions Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. This parameter is required.
         *                    Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
         * @return {@code this}
         */
        public Builder tlsVersions(java.util.List<? extends java.lang.Object> tlsVersions) {
            this.tlsVersions = tlsVersions;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPolicyProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityPolicyProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SecurityPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SecurityPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SecurityPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecurityPolicyProps {
        private final java.lang.Object ciphers;
        private final java.lang.Object securityPolicyName;
        private final java.lang.Object tlsVersions;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ciphers = software.amazon.jsii.Kernel.get(this, "ciphers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityPolicyName = software.amazon.jsii.Kernel.get(this, "securityPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tlsVersions = software.amazon.jsii.Kernel.get(this, "tlsVersions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ciphers = java.util.Objects.requireNonNull(builder.ciphers, "ciphers is required");
            this.securityPolicyName = java.util.Objects.requireNonNull(builder.securityPolicyName, "securityPolicyName is required");
            this.tlsVersions = java.util.Objects.requireNonNull(builder.tlsVersions, "tlsVersions is required");
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getCiphers() {
            return this.ciphers;
        }

        @Override
        public final java.lang.Object getSecurityPolicyName() {
            return this.securityPolicyName;
        }

        @Override
        public final java.lang.Object getTlsVersions() {
            return this.tlsVersions;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ciphers", om.valueToTree(this.getCiphers()));
            data.set("securityPolicyName", om.valueToTree(this.getSecurityPolicyName()));
            data.set("tlsVersions", om.valueToTree(this.getTlsVersions()));
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.SecurityPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SecurityPolicyProps.Jsii$Proxy that = (SecurityPolicyProps.Jsii$Proxy) o;

            if (!ciphers.equals(that.ciphers)) return false;
            if (!securityPolicyName.equals(that.securityPolicyName)) return false;
            if (!tlsVersions.equals(that.tlsVersions)) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ciphers.hashCode();
            result = 31 * result + (this.securityPolicyName.hashCode());
            result = 31 * result + (this.tlsVersions.hashCode());
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
