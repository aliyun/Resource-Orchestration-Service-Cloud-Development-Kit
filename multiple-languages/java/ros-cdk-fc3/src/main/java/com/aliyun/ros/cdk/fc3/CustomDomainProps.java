package com.aliyun.ros.cdk.fc3;

/**
 * Properties for defining a <code>CustomDomain</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-customdomain
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.007Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.CustomDomainProps")
@software.amazon.jsii.Jsii.Proxy(CustomDomainProps.Jsii$Proxy.class)
public interface CustomDomainProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property authConfig: Permission authentication configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAuthConfig();

    /**
     * Property domainName: Domain name.
     * <p>
     * Fill in the custom domain name that has been filed in Ali cloud or access to the record.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainName();

    /**
     * Property protocol: Protocol types supported by the domain name.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>HTTP: Only HTTP protocol is supported.</li>
     * <li>HTTPS: HTTPS only is supported.</li>
     * <li>HTTP,HTTPS: Supports HTTP and HTTPS protocols.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtocol();

    /**
     * Property certConfig: HTTPS certificate information.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertConfig() {
        return null;
    }

    /**
     * Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteConfig() {
        return null;
    }

    /**
     * Property tlsConfig: TLS config.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTlsConfig() {
        return null;
    }

    /**
     * Property wafConfig: Web application firewall configuration information.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWafConfig() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CustomDomainProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CustomDomainProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CustomDomainProps> {
        java.lang.Object authConfig;
        java.lang.Object domainName;
        java.lang.Object protocol;
        java.lang.Object certConfig;
        java.lang.Object routeConfig;
        java.lang.Object tlsConfig;
        java.lang.Object wafConfig;

        /**
         * Sets the value of {@link CustomDomainProps#getAuthConfig}
         * @param authConfig Property authConfig: Permission authentication configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder authConfig(com.aliyun.ros.cdk.core.IResolvable authConfig) {
            this.authConfig = authConfig;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getAuthConfig}
         * @param authConfig Property authConfig: Permission authentication configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder authConfig(com.aliyun.ros.cdk.fc3.RosCustomDomain.AuthConfigProperty authConfig) {
            this.authConfig = authConfig;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getDomainName}
         * @param domainName Property domainName: Domain name. This parameter is required.
         *                   Fill in the custom domain name that has been filed in Ali cloud or access to the record.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getDomainName}
         * @param domainName Property domainName: Domain name. This parameter is required.
         *                   Fill in the custom domain name that has been filed in Ali cloud or access to the record.
         * @return {@code this}
         */
        public Builder domainName(com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getProtocol}
         * @param protocol Property protocol: Protocol types supported by the domain name. This parameter is required.
         *                 Valid values:
         *                 <p>
         *                 <ul>
         *                 <li>HTTP: Only HTTP protocol is supported.</li>
         *                 <li>HTTPS: HTTPS only is supported.</li>
         *                 <li>HTTP,HTTPS: Supports HTTP and HTTPS protocols.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder protocol(java.lang.String protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getProtocol}
         * @param protocol Property protocol: Protocol types supported by the domain name. This parameter is required.
         *                 Valid values:
         *                 <p>
         *                 <ul>
         *                 <li>HTTP: Only HTTP protocol is supported.</li>
         *                 <li>HTTPS: HTTPS only is supported.</li>
         *                 <li>HTTP,HTTPS: Supports HTTP and HTTPS protocols.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getCertConfig}
         * @param certConfig Property certConfig: HTTPS certificate information.
         * @return {@code this}
         */
        public Builder certConfig(com.aliyun.ros.cdk.core.IResolvable certConfig) {
            this.certConfig = certConfig;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getCertConfig}
         * @param certConfig Property certConfig: HTTPS certificate information.
         * @return {@code this}
         */
        public Builder certConfig(com.aliyun.ros.cdk.fc3.RosCustomDomain.CertConfigProperty certConfig) {
            this.certConfig = certConfig;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getRouteConfig}
         * @param routeConfig Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.
         * @return {@code this}
         */
        public Builder routeConfig(com.aliyun.ros.cdk.core.IResolvable routeConfig) {
            this.routeConfig = routeConfig;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getRouteConfig}
         * @param routeConfig Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.
         * @return {@code this}
         */
        public Builder routeConfig(com.aliyun.ros.cdk.fc3.RosCustomDomain.RouteConfigProperty routeConfig) {
            this.routeConfig = routeConfig;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getTlsConfig}
         * @param tlsConfig Property tlsConfig: TLS config.
         * @return {@code this}
         */
        public Builder tlsConfig(com.aliyun.ros.cdk.core.IResolvable tlsConfig) {
            this.tlsConfig = tlsConfig;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getTlsConfig}
         * @param tlsConfig Property tlsConfig: TLS config.
         * @return {@code this}
         */
        public Builder tlsConfig(com.aliyun.ros.cdk.fc3.RosCustomDomain.TlsConfigProperty tlsConfig) {
            this.tlsConfig = tlsConfig;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getWafConfig}
         * @param wafConfig Property wafConfig: Web application firewall configuration information.
         * @return {@code this}
         */
        public Builder wafConfig(com.aliyun.ros.cdk.core.IResolvable wafConfig) {
            this.wafConfig = wafConfig;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getWafConfig}
         * @param wafConfig Property wafConfig: Web application firewall configuration information.
         * @return {@code this}
         */
        public Builder wafConfig(com.aliyun.ros.cdk.fc3.RosCustomDomain.WafConfigProperty wafConfig) {
            this.wafConfig = wafConfig;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CustomDomainProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CustomDomainProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CustomDomainProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomDomainProps {
        private final java.lang.Object authConfig;
        private final java.lang.Object domainName;
        private final java.lang.Object protocol;
        private final java.lang.Object certConfig;
        private final java.lang.Object routeConfig;
        private final java.lang.Object tlsConfig;
        private final java.lang.Object wafConfig;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.authConfig = software.amazon.jsii.Kernel.get(this, "authConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certConfig = software.amazon.jsii.Kernel.get(this, "certConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeConfig = software.amazon.jsii.Kernel.get(this, "routeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tlsConfig = software.amazon.jsii.Kernel.get(this, "tlsConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.wafConfig = software.amazon.jsii.Kernel.get(this, "wafConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.authConfig = java.util.Objects.requireNonNull(builder.authConfig, "authConfig is required");
            this.domainName = java.util.Objects.requireNonNull(builder.domainName, "domainName is required");
            this.protocol = java.util.Objects.requireNonNull(builder.protocol, "protocol is required");
            this.certConfig = builder.certConfig;
            this.routeConfig = builder.routeConfig;
            this.tlsConfig = builder.tlsConfig;
            this.wafConfig = builder.wafConfig;
        }

        @Override
        public final java.lang.Object getAuthConfig() {
            return this.authConfig;
        }

        @Override
        public final java.lang.Object getDomainName() {
            return this.domainName;
        }

        @Override
        public final java.lang.Object getProtocol() {
            return this.protocol;
        }

        @Override
        public final java.lang.Object getCertConfig() {
            return this.certConfig;
        }

        @Override
        public final java.lang.Object getRouteConfig() {
            return this.routeConfig;
        }

        @Override
        public final java.lang.Object getTlsConfig() {
            return this.tlsConfig;
        }

        @Override
        public final java.lang.Object getWafConfig() {
            return this.wafConfig;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("authConfig", om.valueToTree(this.getAuthConfig()));
            data.set("domainName", om.valueToTree(this.getDomainName()));
            data.set("protocol", om.valueToTree(this.getProtocol()));
            if (this.getCertConfig() != null) {
                data.set("certConfig", om.valueToTree(this.getCertConfig()));
            }
            if (this.getRouteConfig() != null) {
                data.set("routeConfig", om.valueToTree(this.getRouteConfig()));
            }
            if (this.getTlsConfig() != null) {
                data.set("tlsConfig", om.valueToTree(this.getTlsConfig()));
            }
            if (this.getWafConfig() != null) {
                data.set("wafConfig", om.valueToTree(this.getWafConfig()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.CustomDomainProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CustomDomainProps.Jsii$Proxy that = (CustomDomainProps.Jsii$Proxy) o;

            if (!authConfig.equals(that.authConfig)) return false;
            if (!domainName.equals(that.domainName)) return false;
            if (!protocol.equals(that.protocol)) return false;
            if (this.certConfig != null ? !this.certConfig.equals(that.certConfig) : that.certConfig != null) return false;
            if (this.routeConfig != null ? !this.routeConfig.equals(that.routeConfig) : that.routeConfig != null) return false;
            if (this.tlsConfig != null ? !this.tlsConfig.equals(that.tlsConfig) : that.tlsConfig != null) return false;
            return this.wafConfig != null ? this.wafConfig.equals(that.wafConfig) : that.wafConfig == null;
        }

        @Override
        public final int hashCode() {
            int result = this.authConfig.hashCode();
            result = 31 * result + (this.domainName.hashCode());
            result = 31 * result + (this.protocol.hashCode());
            result = 31 * result + (this.certConfig != null ? this.certConfig.hashCode() : 0);
            result = 31 * result + (this.routeConfig != null ? this.routeConfig.hashCode() : 0);
            result = 31 * result + (this.tlsConfig != null ? this.tlsConfig.hashCode() : 0);
            result = 31 * result + (this.wafConfig != null ? this.wafConfig.hashCode() : 0);
            return result;
        }
    }
}
