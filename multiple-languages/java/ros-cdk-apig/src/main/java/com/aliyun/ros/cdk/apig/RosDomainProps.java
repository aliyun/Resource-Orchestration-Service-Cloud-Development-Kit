package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>RosDomain</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-domain
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.362Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosDomainProps")
@software.amazon.jsii.Jsii.Proxy(RosDomainProps.Jsii$Proxy.class)
public interface RosDomainProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtocol();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertIdentifier() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getForceHttps() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttp2Option() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTlsCipherSuitesConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTlsMax() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTlsMin() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDomainProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDomainProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDomainProps> {
        java.lang.Object domainName;
        java.lang.Object protocol;
        java.lang.Object certIdentifier;
        java.lang.Object forceHttps;
        java.lang.Object http2Option;
        java.lang.Object resourceGroupId;
        java.lang.Object tlsCipherSuitesConfig;
        java.lang.Object tlsMax;
        java.lang.Object tlsMin;

        /**
         * Sets the value of {@link RosDomainProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getProtocol}
         * @param protocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder protocol(java.lang.String protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getProtocol}
         * @param protocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getCertIdentifier}
         * @param certIdentifier the value to be set.
         * @return {@code this}
         */
        public Builder certIdentifier(java.lang.String certIdentifier) {
            this.certIdentifier = certIdentifier;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getCertIdentifier}
         * @param certIdentifier the value to be set.
         * @return {@code this}
         */
        public Builder certIdentifier(com.aliyun.ros.cdk.core.IResolvable certIdentifier) {
            this.certIdentifier = certIdentifier;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getForceHttps}
         * @param forceHttps the value to be set.
         * @return {@code this}
         */
        public Builder forceHttps(java.lang.Boolean forceHttps) {
            this.forceHttps = forceHttps;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getForceHttps}
         * @param forceHttps the value to be set.
         * @return {@code this}
         */
        public Builder forceHttps(com.aliyun.ros.cdk.core.IResolvable forceHttps) {
            this.forceHttps = forceHttps;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getHttp2Option}
         * @param http2Option the value to be set.
         * @return {@code this}
         */
        public Builder http2Option(java.lang.String http2Option) {
            this.http2Option = http2Option;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getHttp2Option}
         * @param http2Option the value to be set.
         * @return {@code this}
         */
        public Builder http2Option(com.aliyun.ros.cdk.core.IResolvable http2Option) {
            this.http2Option = http2Option;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getTlsCipherSuitesConfig}
         * @param tlsCipherSuitesConfig the value to be set.
         * @return {@code this}
         */
        public Builder tlsCipherSuitesConfig(com.aliyun.ros.cdk.core.IResolvable tlsCipherSuitesConfig) {
            this.tlsCipherSuitesConfig = tlsCipherSuitesConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getTlsCipherSuitesConfig}
         * @param tlsCipherSuitesConfig the value to be set.
         * @return {@code this}
         */
        public Builder tlsCipherSuitesConfig(com.aliyun.ros.cdk.apig.RosDomain.TlsCipherSuitesConfigProperty tlsCipherSuitesConfig) {
            this.tlsCipherSuitesConfig = tlsCipherSuitesConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getTlsMax}
         * @param tlsMax the value to be set.
         * @return {@code this}
         */
        public Builder tlsMax(java.lang.String tlsMax) {
            this.tlsMax = tlsMax;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getTlsMax}
         * @param tlsMax the value to be set.
         * @return {@code this}
         */
        public Builder tlsMax(com.aliyun.ros.cdk.core.IResolvable tlsMax) {
            this.tlsMax = tlsMax;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getTlsMin}
         * @param tlsMin the value to be set.
         * @return {@code this}
         */
        public Builder tlsMin(java.lang.String tlsMin) {
            this.tlsMin = tlsMin;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getTlsMin}
         * @param tlsMin the value to be set.
         * @return {@code this}
         */
        public Builder tlsMin(com.aliyun.ros.cdk.core.IResolvable tlsMin) {
            this.tlsMin = tlsMin;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDomainProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDomainProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDomainProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDomainProps {
        private final java.lang.Object domainName;
        private final java.lang.Object protocol;
        private final java.lang.Object certIdentifier;
        private final java.lang.Object forceHttps;
        private final java.lang.Object http2Option;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object tlsCipherSuitesConfig;
        private final java.lang.Object tlsMax;
        private final java.lang.Object tlsMin;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certIdentifier = software.amazon.jsii.Kernel.get(this, "certIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.forceHttps = software.amazon.jsii.Kernel.get(this, "forceHttps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.http2Option = software.amazon.jsii.Kernel.get(this, "http2Option", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tlsCipherSuitesConfig = software.amazon.jsii.Kernel.get(this, "tlsCipherSuitesConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tlsMax = software.amazon.jsii.Kernel.get(this, "tlsMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tlsMin = software.amazon.jsii.Kernel.get(this, "tlsMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainName = java.util.Objects.requireNonNull(builder.domainName, "domainName is required");
            this.protocol = java.util.Objects.requireNonNull(builder.protocol, "protocol is required");
            this.certIdentifier = builder.certIdentifier;
            this.forceHttps = builder.forceHttps;
            this.http2Option = builder.http2Option;
            this.resourceGroupId = builder.resourceGroupId;
            this.tlsCipherSuitesConfig = builder.tlsCipherSuitesConfig;
            this.tlsMax = builder.tlsMax;
            this.tlsMin = builder.tlsMin;
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
        public final java.lang.Object getCertIdentifier() {
            return this.certIdentifier;
        }

        @Override
        public final java.lang.Object getForceHttps() {
            return this.forceHttps;
        }

        @Override
        public final java.lang.Object getHttp2Option() {
            return this.http2Option;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getTlsCipherSuitesConfig() {
            return this.tlsCipherSuitesConfig;
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

            data.set("domainName", om.valueToTree(this.getDomainName()));
            data.set("protocol", om.valueToTree(this.getProtocol()));
            if (this.getCertIdentifier() != null) {
                data.set("certIdentifier", om.valueToTree(this.getCertIdentifier()));
            }
            if (this.getForceHttps() != null) {
                data.set("forceHttps", om.valueToTree(this.getForceHttps()));
            }
            if (this.getHttp2Option() != null) {
                data.set("http2Option", om.valueToTree(this.getHttp2Option()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTlsCipherSuitesConfig() != null) {
                data.set("tlsCipherSuitesConfig", om.valueToTree(this.getTlsCipherSuitesConfig()));
            }
            if (this.getTlsMax() != null) {
                data.set("tlsMax", om.valueToTree(this.getTlsMax()));
            }
            if (this.getTlsMin() != null) {
                data.set("tlsMin", om.valueToTree(this.getTlsMin()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosDomainProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDomainProps.Jsii$Proxy that = (RosDomainProps.Jsii$Proxy) o;

            if (!domainName.equals(that.domainName)) return false;
            if (!protocol.equals(that.protocol)) return false;
            if (this.certIdentifier != null ? !this.certIdentifier.equals(that.certIdentifier) : that.certIdentifier != null) return false;
            if (this.forceHttps != null ? !this.forceHttps.equals(that.forceHttps) : that.forceHttps != null) return false;
            if (this.http2Option != null ? !this.http2Option.equals(that.http2Option) : that.http2Option != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tlsCipherSuitesConfig != null ? !this.tlsCipherSuitesConfig.equals(that.tlsCipherSuitesConfig) : that.tlsCipherSuitesConfig != null) return false;
            if (this.tlsMax != null ? !this.tlsMax.equals(that.tlsMax) : that.tlsMax != null) return false;
            return this.tlsMin != null ? this.tlsMin.equals(that.tlsMin) : that.tlsMin == null;
        }

        @Override
        public final int hashCode() {
            int result = this.domainName.hashCode();
            result = 31 * result + (this.protocol.hashCode());
            result = 31 * result + (this.certIdentifier != null ? this.certIdentifier.hashCode() : 0);
            result = 31 * result + (this.forceHttps != null ? this.forceHttps.hashCode() : 0);
            result = 31 * result + (this.http2Option != null ? this.http2Option.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tlsCipherSuitesConfig != null ? this.tlsCipherSuitesConfig.hashCode() : 0);
            result = 31 * result + (this.tlsMax != null ? this.tlsMax.hashCode() : 0);
            result = 31 * result + (this.tlsMin != null ? this.tlsMin.hashCode() : 0);
            return result;
        }
    }
}
