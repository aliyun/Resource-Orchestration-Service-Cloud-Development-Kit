package com.aliyun.ros.cdk.fc;

/**
 * Properties for defining a <code>RosCustomDomain</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-customdomain
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:55.215Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosCustomDomainProps")
@software.amazon.jsii.Jsii.Proxy(RosCustomDomainProps.Jsii$Proxy.class)
public interface RosCustomDomainProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtocol();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApiVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteConfig() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCustomDomainProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCustomDomainProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCustomDomainProps> {
        java.lang.Object domainName;
        java.lang.Object protocol;
        java.lang.Object apiVersion;
        java.lang.Object certConfig;
        java.lang.Object routeConfig;

        /**
         * Sets the value of {@link RosCustomDomainProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getProtocol}
         * @param protocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder protocol(java.lang.String protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getProtocol}
         * @param protocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getApiVersion}
         * @param apiVersion the value to be set.
         * @return {@code this}
         */
        public Builder apiVersion(java.lang.String apiVersion) {
            this.apiVersion = apiVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getApiVersion}
         * @param apiVersion the value to be set.
         * @return {@code this}
         */
        public Builder apiVersion(com.aliyun.ros.cdk.core.IResolvable apiVersion) {
            this.apiVersion = apiVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getCertConfig}
         * @param certConfig the value to be set.
         * @return {@code this}
         */
        public Builder certConfig(com.aliyun.ros.cdk.core.IResolvable certConfig) {
            this.certConfig = certConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getCertConfig}
         * @param certConfig the value to be set.
         * @return {@code this}
         */
        public Builder certConfig(com.aliyun.ros.cdk.fc.RosCustomDomain.CertConfigProperty certConfig) {
            this.certConfig = certConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getRouteConfig}
         * @param routeConfig the value to be set.
         * @return {@code this}
         */
        public Builder routeConfig(com.aliyun.ros.cdk.core.IResolvable routeConfig) {
            this.routeConfig = routeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getRouteConfig}
         * @param routeConfig the value to be set.
         * @return {@code this}
         */
        public Builder routeConfig(com.aliyun.ros.cdk.fc.RosCustomDomain.RouteConfigProperty routeConfig) {
            this.routeConfig = routeConfig;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCustomDomainProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCustomDomainProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCustomDomainProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCustomDomainProps {
        private final java.lang.Object domainName;
        private final java.lang.Object protocol;
        private final java.lang.Object apiVersion;
        private final java.lang.Object certConfig;
        private final java.lang.Object routeConfig;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.apiVersion = software.amazon.jsii.Kernel.get(this, "apiVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certConfig = software.amazon.jsii.Kernel.get(this, "certConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeConfig = software.amazon.jsii.Kernel.get(this, "routeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainName = java.util.Objects.requireNonNull(builder.domainName, "domainName is required");
            this.protocol = java.util.Objects.requireNonNull(builder.protocol, "protocol is required");
            this.apiVersion = builder.apiVersion;
            this.certConfig = builder.certConfig;
            this.routeConfig = builder.routeConfig;
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
        public final java.lang.Object getApiVersion() {
            return this.apiVersion;
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domainName", om.valueToTree(this.getDomainName()));
            data.set("protocol", om.valueToTree(this.getProtocol()));
            if (this.getApiVersion() != null) {
                data.set("apiVersion", om.valueToTree(this.getApiVersion()));
            }
            if (this.getCertConfig() != null) {
                data.set("certConfig", om.valueToTree(this.getCertConfig()));
            }
            if (this.getRouteConfig() != null) {
                data.set("routeConfig", om.valueToTree(this.getRouteConfig()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosCustomDomainProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCustomDomainProps.Jsii$Proxy that = (RosCustomDomainProps.Jsii$Proxy) o;

            if (!domainName.equals(that.domainName)) return false;
            if (!protocol.equals(that.protocol)) return false;
            if (this.apiVersion != null ? !this.apiVersion.equals(that.apiVersion) : that.apiVersion != null) return false;
            if (this.certConfig != null ? !this.certConfig.equals(that.certConfig) : that.certConfig != null) return false;
            return this.routeConfig != null ? this.routeConfig.equals(that.routeConfig) : that.routeConfig == null;
        }

        @Override
        public final int hashCode() {
            int result = this.domainName.hashCode();
            result = 31 * result + (this.protocol.hashCode());
            result = 31 * result + (this.apiVersion != null ? this.apiVersion.hashCode() : 0);
            result = 31 * result + (this.certConfig != null ? this.certConfig.hashCode() : 0);
            result = 31 * result + (this.routeConfig != null ? this.routeConfig.hashCode() : 0);
            return result;
        }
    }
}
