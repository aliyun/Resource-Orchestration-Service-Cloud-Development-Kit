package com.aliyun.ros.cdk.waf;

/**
 * Properties for defining a `ALIYUN::WAF::DomainConfig`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.733Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.RosDomainConfigProps")
@software.amazon.jsii.Jsii.Proxy(RosDomainConfigProps.Jsii$Proxy.class)
public interface RosDomainConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDomain();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getIsAccessProduct();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getProtocols();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getHttpPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getHttpsPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getHttpsRedirect() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getHttpToUserIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getLoadBalancing() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRegion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getRsType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSourceIps() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDomainConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDomainConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDomainConfigProps> {
        private java.lang.String domain;
        private java.lang.String instanceId;
        private java.lang.Number isAccessProduct;
        private java.lang.String protocols;
        private java.lang.String httpPort;
        private java.lang.String httpsPort;
        private java.lang.Number httpsRedirect;
        private java.lang.Number httpToUserIp;
        private java.lang.Number loadBalancing;
        private java.lang.String region;
        private java.lang.Number rsType;
        private java.lang.String sourceIps;

        /**
         * Sets the value of {@link RosDomainConfigProps#getDomain}
         * @param domain the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domain(java.lang.String domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainConfigProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainConfigProps#getIsAccessProduct}
         * @param isAccessProduct the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder isAccessProduct(java.lang.Number isAccessProduct) {
            this.isAccessProduct = isAccessProduct;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainConfigProps#getProtocols}
         * @param protocols the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder protocols(java.lang.String protocols) {
            this.protocols = protocols;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainConfigProps#getHttpPort}
         * @param httpPort the value to be set.
         * @return {@code this}
         */
        public Builder httpPort(java.lang.String httpPort) {
            this.httpPort = httpPort;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainConfigProps#getHttpsPort}
         * @param httpsPort the value to be set.
         * @return {@code this}
         */
        public Builder httpsPort(java.lang.String httpsPort) {
            this.httpsPort = httpsPort;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainConfigProps#getHttpsRedirect}
         * @param httpsRedirect the value to be set.
         * @return {@code this}
         */
        public Builder httpsRedirect(java.lang.Number httpsRedirect) {
            this.httpsRedirect = httpsRedirect;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainConfigProps#getHttpToUserIp}
         * @param httpToUserIp the value to be set.
         * @return {@code this}
         */
        public Builder httpToUserIp(java.lang.Number httpToUserIp) {
            this.httpToUserIp = httpToUserIp;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainConfigProps#getLoadBalancing}
         * @param loadBalancing the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancing(java.lang.Number loadBalancing) {
            this.loadBalancing = loadBalancing;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainConfigProps#getRegion}
         * @param region the value to be set.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainConfigProps#getRsType}
         * @param rsType the value to be set.
         * @return {@code this}
         */
        public Builder rsType(java.lang.Number rsType) {
            this.rsType = rsType;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainConfigProps#getSourceIps}
         * @param sourceIps the value to be set.
         * @return {@code this}
         */
        public Builder sourceIps(java.lang.String sourceIps) {
            this.sourceIps = sourceIps;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDomainConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDomainConfigProps build() {
            return new Jsii$Proxy(domain, instanceId, isAccessProduct, protocols, httpPort, httpsPort, httpsRedirect, httpToUserIp, loadBalancing, region, rsType, sourceIps);
        }
    }

    /**
     * An implementation for {@link RosDomainConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDomainConfigProps {
        private final java.lang.String domain;
        private final java.lang.String instanceId;
        private final java.lang.Number isAccessProduct;
        private final java.lang.String protocols;
        private final java.lang.String httpPort;
        private final java.lang.String httpsPort;
        private final java.lang.Number httpsRedirect;
        private final java.lang.Number httpToUserIp;
        private final java.lang.Number loadBalancing;
        private final java.lang.String region;
        private final java.lang.Number rsType;
        private final java.lang.String sourceIps;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.isAccessProduct = software.amazon.jsii.Kernel.get(this, "isAccessProduct", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.protocols = software.amazon.jsii.Kernel.get(this, "protocols", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.httpPort = software.amazon.jsii.Kernel.get(this, "httpPort", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.httpsPort = software.amazon.jsii.Kernel.get(this, "httpsPort", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.httpsRedirect = software.amazon.jsii.Kernel.get(this, "httpsRedirect", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.httpToUserIp = software.amazon.jsii.Kernel.get(this, "httpToUserIp", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.loadBalancing = software.amazon.jsii.Kernel.get(this, "loadBalancing", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.rsType = software.amazon.jsii.Kernel.get(this, "rsType", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.sourceIps = software.amazon.jsii.Kernel.get(this, "sourceIps", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String domain, final java.lang.String instanceId, final java.lang.Number isAccessProduct, final java.lang.String protocols, final java.lang.String httpPort, final java.lang.String httpsPort, final java.lang.Number httpsRedirect, final java.lang.Number httpToUserIp, final java.lang.Number loadBalancing, final java.lang.String region, final java.lang.Number rsType, final java.lang.String sourceIps) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domain = java.util.Objects.requireNonNull(domain, "domain is required");
            this.instanceId = java.util.Objects.requireNonNull(instanceId, "instanceId is required");
            this.isAccessProduct = java.util.Objects.requireNonNull(isAccessProduct, "isAccessProduct is required");
            this.protocols = java.util.Objects.requireNonNull(protocols, "protocols is required");
            this.httpPort = httpPort;
            this.httpsPort = httpsPort;
            this.httpsRedirect = httpsRedirect;
            this.httpToUserIp = httpToUserIp;
            this.loadBalancing = loadBalancing;
            this.region = region;
            this.rsType = rsType;
            this.sourceIps = sourceIps;
        }

        @Override
        public final java.lang.String getDomain() {
            return this.domain;
        }

        @Override
        public final java.lang.String getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Number getIsAccessProduct() {
            return this.isAccessProduct;
        }

        @Override
        public final java.lang.String getProtocols() {
            return this.protocols;
        }

        @Override
        public final java.lang.String getHttpPort() {
            return this.httpPort;
        }

        @Override
        public final java.lang.String getHttpsPort() {
            return this.httpsPort;
        }

        @Override
        public final java.lang.Number getHttpsRedirect() {
            return this.httpsRedirect;
        }

        @Override
        public final java.lang.Number getHttpToUserIp() {
            return this.httpToUserIp;
        }

        @Override
        public final java.lang.Number getLoadBalancing() {
            return this.loadBalancing;
        }

        @Override
        public final java.lang.String getRegion() {
            return this.region;
        }

        @Override
        public final java.lang.Number getRsType() {
            return this.rsType;
        }

        @Override
        public final java.lang.String getSourceIps() {
            return this.sourceIps;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domain", om.valueToTree(this.getDomain()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("isAccessProduct", om.valueToTree(this.getIsAccessProduct()));
            data.set("protocols", om.valueToTree(this.getProtocols()));
            if (this.getHttpPort() != null) {
                data.set("httpPort", om.valueToTree(this.getHttpPort()));
            }
            if (this.getHttpsPort() != null) {
                data.set("httpsPort", om.valueToTree(this.getHttpsPort()));
            }
            if (this.getHttpsRedirect() != null) {
                data.set("httpsRedirect", om.valueToTree(this.getHttpsRedirect()));
            }
            if (this.getHttpToUserIp() != null) {
                data.set("httpToUserIp", om.valueToTree(this.getHttpToUserIp()));
            }
            if (this.getLoadBalancing() != null) {
                data.set("loadBalancing", om.valueToTree(this.getLoadBalancing()));
            }
            if (this.getRegion() != null) {
                data.set("region", om.valueToTree(this.getRegion()));
            }
            if (this.getRsType() != null) {
                data.set("rsType", om.valueToTree(this.getRsType()));
            }
            if (this.getSourceIps() != null) {
                data.set("sourceIps", om.valueToTree(this.getSourceIps()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-waf.RosDomainConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDomainConfigProps.Jsii$Proxy that = (RosDomainConfigProps.Jsii$Proxy) o;

            if (!domain.equals(that.domain)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!isAccessProduct.equals(that.isAccessProduct)) return false;
            if (!protocols.equals(that.protocols)) return false;
            if (this.httpPort != null ? !this.httpPort.equals(that.httpPort) : that.httpPort != null) return false;
            if (this.httpsPort != null ? !this.httpsPort.equals(that.httpsPort) : that.httpsPort != null) return false;
            if (this.httpsRedirect != null ? !this.httpsRedirect.equals(that.httpsRedirect) : that.httpsRedirect != null) return false;
            if (this.httpToUserIp != null ? !this.httpToUserIp.equals(that.httpToUserIp) : that.httpToUserIp != null) return false;
            if (this.loadBalancing != null ? !this.loadBalancing.equals(that.loadBalancing) : that.loadBalancing != null) return false;
            if (this.region != null ? !this.region.equals(that.region) : that.region != null) return false;
            if (this.rsType != null ? !this.rsType.equals(that.rsType) : that.rsType != null) return false;
            return this.sourceIps != null ? this.sourceIps.equals(that.sourceIps) : that.sourceIps == null;
        }

        @Override
        public final int hashCode() {
            int result = this.domain.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.isAccessProduct.hashCode());
            result = 31 * result + (this.protocols.hashCode());
            result = 31 * result + (this.httpPort != null ? this.httpPort.hashCode() : 0);
            result = 31 * result + (this.httpsPort != null ? this.httpsPort.hashCode() : 0);
            result = 31 * result + (this.httpsRedirect != null ? this.httpsRedirect.hashCode() : 0);
            result = 31 * result + (this.httpToUserIp != null ? this.httpToUserIp.hashCode() : 0);
            result = 31 * result + (this.loadBalancing != null ? this.loadBalancing.hashCode() : 0);
            result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
            result = 31 * result + (this.rsType != null ? this.rsType.hashCode() : 0);
            result = 31 * result + (this.sourceIps != null ? this.sourceIps.hashCode() : 0);
            return result;
        }
    }
}
