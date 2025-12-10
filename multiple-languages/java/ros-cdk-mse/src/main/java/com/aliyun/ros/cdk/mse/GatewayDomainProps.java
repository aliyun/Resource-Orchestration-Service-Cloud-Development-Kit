package com.aliyun.ros.cdk.mse;

/**
 * Properties for defining a <code>GatewayDomain</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewaydomain
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.203Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.GatewayDomainProps")
@software.amazon.jsii.Jsii.Proxy(GatewayDomainProps.Jsii$Proxy.class)
public interface GatewayDomainProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property gatewayUniqueId: The unique identifier of the gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGatewayUniqueId();

    /**
     * Property name: The domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property protocol: The protocol type: HTTP, HTTPS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtocol();

    /**
     * Property certIdentifier: Certificate ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertIdentifier() {
        return null;
    }

    /**
     * Property http2: Whether to enable Http2: open, close, globalConfig.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttp2() {
        return null;
    }

    /**
     * Property mustHttps: Whether to enable HTTPS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMustHttps() {
        return null;
    }

    /**
     * Property tlsCipherSuitesConfigJson: TLS encryption suite configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTlsCipherSuitesConfigJson() {
        return null;
    }

    /**
     * Property tlsMax: The maximum TLS version.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTlsMax() {
        return null;
    }

    /**
     * Property tlsMin: The minimum TLS version.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTlsMin() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link GatewayDomainProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link GatewayDomainProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<GatewayDomainProps> {
        java.lang.Object gatewayUniqueId;
        java.lang.Object name;
        java.lang.Object protocol;
        java.lang.Object certIdentifier;
        java.lang.Object http2;
        java.lang.Object mustHttps;
        java.lang.Object tlsCipherSuitesConfigJson;
        java.lang.Object tlsMax;
        java.lang.Object tlsMin;

        /**
         * Sets the value of {@link GatewayDomainProps#getGatewayUniqueId}
         * @param gatewayUniqueId Property gatewayUniqueId: The unique identifier of the gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayUniqueId(java.lang.String gatewayUniqueId) {
            this.gatewayUniqueId = gatewayUniqueId;
            return this;
        }

        /**
         * Sets the value of {@link GatewayDomainProps#getGatewayUniqueId}
         * @param gatewayUniqueId Property gatewayUniqueId: The unique identifier of the gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayUniqueId(com.aliyun.ros.cdk.core.IResolvable gatewayUniqueId) {
            this.gatewayUniqueId = gatewayUniqueId;
            return this;
        }

        /**
         * Sets the value of {@link GatewayDomainProps#getName}
         * @param name Property name: The domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link GatewayDomainProps#getName}
         * @param name Property name: The domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link GatewayDomainProps#getProtocol}
         * @param protocol Property protocol: The protocol type: HTTP, HTTPS. This parameter is required.
         * @return {@code this}
         */
        public Builder protocol(java.lang.String protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link GatewayDomainProps#getProtocol}
         * @param protocol Property protocol: The protocol type: HTTP, HTTPS. This parameter is required.
         * @return {@code this}
         */
        public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link GatewayDomainProps#getCertIdentifier}
         * @param certIdentifier Property certIdentifier: Certificate ID.
         * @return {@code this}
         */
        public Builder certIdentifier(java.lang.String certIdentifier) {
            this.certIdentifier = certIdentifier;
            return this;
        }

        /**
         * Sets the value of {@link GatewayDomainProps#getCertIdentifier}
         * @param certIdentifier Property certIdentifier: Certificate ID.
         * @return {@code this}
         */
        public Builder certIdentifier(com.aliyun.ros.cdk.core.IResolvable certIdentifier) {
            this.certIdentifier = certIdentifier;
            return this;
        }

        /**
         * Sets the value of {@link GatewayDomainProps#getHttp2}
         * @param http2 Property http2: Whether to enable Http2: open, close, globalConfig.
         * @return {@code this}
         */
        public Builder http2(java.lang.String http2) {
            this.http2 = http2;
            return this;
        }

        /**
         * Sets the value of {@link GatewayDomainProps#getHttp2}
         * @param http2 Property http2: Whether to enable Http2: open, close, globalConfig.
         * @return {@code this}
         */
        public Builder http2(com.aliyun.ros.cdk.core.IResolvable http2) {
            this.http2 = http2;
            return this;
        }

        /**
         * Sets the value of {@link GatewayDomainProps#getMustHttps}
         * @param mustHttps Property mustHttps: Whether to enable HTTPS.
         * @return {@code this}
         */
        public Builder mustHttps(java.lang.Boolean mustHttps) {
            this.mustHttps = mustHttps;
            return this;
        }

        /**
         * Sets the value of {@link GatewayDomainProps#getMustHttps}
         * @param mustHttps Property mustHttps: Whether to enable HTTPS.
         * @return {@code this}
         */
        public Builder mustHttps(com.aliyun.ros.cdk.core.IResolvable mustHttps) {
            this.mustHttps = mustHttps;
            return this;
        }

        /**
         * Sets the value of {@link GatewayDomainProps#getTlsCipherSuitesConfigJson}
         * @param tlsCipherSuitesConfigJson Property tlsCipherSuitesConfigJson: TLS encryption suite configuration.
         * @return {@code this}
         */
        public Builder tlsCipherSuitesConfigJson(com.aliyun.ros.cdk.core.IResolvable tlsCipherSuitesConfigJson) {
            this.tlsCipherSuitesConfigJson = tlsCipherSuitesConfigJson;
            return this;
        }

        /**
         * Sets the value of {@link GatewayDomainProps#getTlsCipherSuitesConfigJson}
         * @param tlsCipherSuitesConfigJson Property tlsCipherSuitesConfigJson: TLS encryption suite configuration.
         * @return {@code this}
         */
        public Builder tlsCipherSuitesConfigJson(com.aliyun.ros.cdk.mse.RosGatewayDomain.TlsCipherSuitesConfigJSONProperty tlsCipherSuitesConfigJson) {
            this.tlsCipherSuitesConfigJson = tlsCipherSuitesConfigJson;
            return this;
        }

        /**
         * Sets the value of {@link GatewayDomainProps#getTlsMax}
         * @param tlsMax Property tlsMax: The maximum TLS version.
         * @return {@code this}
         */
        public Builder tlsMax(java.lang.String tlsMax) {
            this.tlsMax = tlsMax;
            return this;
        }

        /**
         * Sets the value of {@link GatewayDomainProps#getTlsMax}
         * @param tlsMax Property tlsMax: The maximum TLS version.
         * @return {@code this}
         */
        public Builder tlsMax(com.aliyun.ros.cdk.core.IResolvable tlsMax) {
            this.tlsMax = tlsMax;
            return this;
        }

        /**
         * Sets the value of {@link GatewayDomainProps#getTlsMin}
         * @param tlsMin Property tlsMin: The minimum TLS version.
         * @return {@code this}
         */
        public Builder tlsMin(java.lang.String tlsMin) {
            this.tlsMin = tlsMin;
            return this;
        }

        /**
         * Sets the value of {@link GatewayDomainProps#getTlsMin}
         * @param tlsMin Property tlsMin: The minimum TLS version.
         * @return {@code this}
         */
        public Builder tlsMin(com.aliyun.ros.cdk.core.IResolvable tlsMin) {
            this.tlsMin = tlsMin;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link GatewayDomainProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public GatewayDomainProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link GatewayDomainProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GatewayDomainProps {
        private final java.lang.Object gatewayUniqueId;
        private final java.lang.Object name;
        private final java.lang.Object protocol;
        private final java.lang.Object certIdentifier;
        private final java.lang.Object http2;
        private final java.lang.Object mustHttps;
        private final java.lang.Object tlsCipherSuitesConfigJson;
        private final java.lang.Object tlsMax;
        private final java.lang.Object tlsMin;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.gatewayUniqueId = software.amazon.jsii.Kernel.get(this, "gatewayUniqueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certIdentifier = software.amazon.jsii.Kernel.get(this, "certIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.http2 = software.amazon.jsii.Kernel.get(this, "http2", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mustHttps = software.amazon.jsii.Kernel.get(this, "mustHttps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tlsCipherSuitesConfigJson = software.amazon.jsii.Kernel.get(this, "tlsCipherSuitesConfigJson", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tlsMax = software.amazon.jsii.Kernel.get(this, "tlsMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tlsMin = software.amazon.jsii.Kernel.get(this, "tlsMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.gatewayUniqueId = java.util.Objects.requireNonNull(builder.gatewayUniqueId, "gatewayUniqueId is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.protocol = java.util.Objects.requireNonNull(builder.protocol, "protocol is required");
            this.certIdentifier = builder.certIdentifier;
            this.http2 = builder.http2;
            this.mustHttps = builder.mustHttps;
            this.tlsCipherSuitesConfigJson = builder.tlsCipherSuitesConfigJson;
            this.tlsMax = builder.tlsMax;
            this.tlsMin = builder.tlsMin;
        }

        @Override
        public final java.lang.Object getGatewayUniqueId() {
            return this.gatewayUniqueId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getProtocol() {
            return this.protocol;
        }

        @Override
        public final java.lang.Object getCertIdentifier() {
            return this.certIdentifier;
        }

        @Override
        public final java.lang.Object getHttp2() {
            return this.http2;
        }

        @Override
        public final java.lang.Object getMustHttps() {
            return this.mustHttps;
        }

        @Override
        public final java.lang.Object getTlsCipherSuitesConfigJson() {
            return this.tlsCipherSuitesConfigJson;
        }

        @Override
        public final java.lang.Object getTlsMax() {
            return this.tlsMax;
        }

        @Override
        public final java.lang.Object getTlsMin() {
            return this.tlsMin;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("gatewayUniqueId", om.valueToTree(this.getGatewayUniqueId()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("protocol", om.valueToTree(this.getProtocol()));
            if (this.getCertIdentifier() != null) {
                data.set("certIdentifier", om.valueToTree(this.getCertIdentifier()));
            }
            if (this.getHttp2() != null) {
                data.set("http2", om.valueToTree(this.getHttp2()));
            }
            if (this.getMustHttps() != null) {
                data.set("mustHttps", om.valueToTree(this.getMustHttps()));
            }
            if (this.getTlsCipherSuitesConfigJson() != null) {
                data.set("tlsCipherSuitesConfigJson", om.valueToTree(this.getTlsCipherSuitesConfigJson()));
            }
            if (this.getTlsMax() != null) {
                data.set("tlsMax", om.valueToTree(this.getTlsMax()));
            }
            if (this.getTlsMin() != null) {
                data.set("tlsMin", om.valueToTree(this.getTlsMin()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.GatewayDomainProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            GatewayDomainProps.Jsii$Proxy that = (GatewayDomainProps.Jsii$Proxy) o;

            if (!gatewayUniqueId.equals(that.gatewayUniqueId)) return false;
            if (!name.equals(that.name)) return false;
            if (!protocol.equals(that.protocol)) return false;
            if (this.certIdentifier != null ? !this.certIdentifier.equals(that.certIdentifier) : that.certIdentifier != null) return false;
            if (this.http2 != null ? !this.http2.equals(that.http2) : that.http2 != null) return false;
            if (this.mustHttps != null ? !this.mustHttps.equals(that.mustHttps) : that.mustHttps != null) return false;
            if (this.tlsCipherSuitesConfigJson != null ? !this.tlsCipherSuitesConfigJson.equals(that.tlsCipherSuitesConfigJson) : that.tlsCipherSuitesConfigJson != null) return false;
            if (this.tlsMax != null ? !this.tlsMax.equals(that.tlsMax) : that.tlsMax != null) return false;
            return this.tlsMin != null ? this.tlsMin.equals(that.tlsMin) : that.tlsMin == null;
        }

        @Override
        public final int hashCode() {
            int result = this.gatewayUniqueId.hashCode();
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.protocol.hashCode());
            result = 31 * result + (this.certIdentifier != null ? this.certIdentifier.hashCode() : 0);
            result = 31 * result + (this.http2 != null ? this.http2.hashCode() : 0);
            result = 31 * result + (this.mustHttps != null ? this.mustHttps.hashCode() : 0);
            result = 31 * result + (this.tlsCipherSuitesConfigJson != null ? this.tlsCipherSuitesConfigJson.hashCode() : 0);
            result = 31 * result + (this.tlsMax != null ? this.tlsMax.hashCode() : 0);
            result = 31 * result + (this.tlsMin != null ? this.tlsMin.hashCode() : 0);
            return result;
        }
    }
}
