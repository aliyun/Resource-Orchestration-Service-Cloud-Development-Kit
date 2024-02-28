package com.aliyun.ros.cdk.waf;

/**
 * Properties for defining a <code>DomainConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-domainconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:31.394Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.DomainConfigProps")
@software.amazon.jsii.Jsii.Proxy(DomainConfigProps.Jsii$Proxy.class)
public interface DomainConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property domain: Domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomain();

    /**
     * Property instanceId: WAF instance ID.
     * <p>
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of: 0: none. 1: expressed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIsAccessProduct();

    /**
     * Property protocols: The domain supports access protocols, values: http: expressed support for the HTTP protocol.
     * <p>
     * https: support for HTTPS protocol.
     * http, https: supports HTTP, HTTPS protocol.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtocols();

    /**
     * Property httpPort: HTTP protocol configuration port.
     * <p>
     * When specifying a plurality of HTTP port "," separated. Example values: [80].
     * Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpPort() {
        return null;
    }

    /**
     * Property httpsPort: HTTPS protocol configuration port.
     * <p>
     * When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
     * Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpsPort() {
        return null;
    }

    /**
     * Property httpsRedirect: HTTPS is turned forcefully jump the argument: 0: off (default) 1: Turn Description required to complete the request parameters using only HTTPS access protocol.
     * <p>
     * After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpsRedirect() {
        return null;
    }

    /**
     * Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of: 0: off (default) 1: Turn Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpToUserIp() {
        return null;
    }

    /**
     * Property loadBalancing: Back to the source load balancing policy values: 0: IP Hash way.
     * <p>
     * 1: represents a polling mode.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancing() {
        return null;
    }

    /**
     * Property region: Examples of areas where the WAF.
     * <p>
     * Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRegion() {
        return null;
    }

    /**
     * Property rsType: Back to the source address type the domain name values: 0: back to the source to IP.
     * <p>
     * 1: Indicates the domain name back to the source.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRsType() {
        return null;
    }

    /**
     * Property sourceIps: Source station IP, supports a plurality of specified IP.
     * <p>
     * Example values: [ "1.1.1.1"].
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceIps() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DomainConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DomainConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DomainConfigProps> {
        java.lang.Object domain;
        java.lang.Object instanceId;
        java.lang.Object isAccessProduct;
        java.lang.Object protocols;
        java.lang.Object httpPort;
        java.lang.Object httpsPort;
        java.lang.Object httpsRedirect;
        java.lang.Object httpToUserIp;
        java.lang.Object loadBalancing;
        java.lang.Object region;
        java.lang.Object rsType;
        java.lang.Object sourceIps;

        /**
         * Sets the value of {@link DomainConfigProps#getDomain}
         * @param domain Property domain: Domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder domain(java.lang.String domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getDomain}
         * @param domain Property domain: Domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder domain(com.aliyun.ros.cdk.core.IResolvable domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getInstanceId}
         * @param instanceId Property instanceId: WAF instance ID. This parameter is required.
         *                   Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getInstanceId}
         * @param instanceId Property instanceId: WAF instance ID. This parameter is required.
         *                   Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getIsAccessProduct}
         * @param isAccessProduct Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of: 0: none. 1: expressed. This parameter is required.
         * @return {@code this}
         */
        public Builder isAccessProduct(java.lang.Number isAccessProduct) {
            this.isAccessProduct = isAccessProduct;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getIsAccessProduct}
         * @param isAccessProduct Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of: 0: none. 1: expressed. This parameter is required.
         * @return {@code this}
         */
        public Builder isAccessProduct(com.aliyun.ros.cdk.core.IResolvable isAccessProduct) {
            this.isAccessProduct = isAccessProduct;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getProtocols}
         * @param protocols Property protocols: The domain supports access protocols, values: http: expressed support for the HTTP protocol. This parameter is required.
         *                  https: support for HTTPS protocol.
         *                  http, https: supports HTTP, HTTPS protocol.
         * @return {@code this}
         */
        public Builder protocols(java.lang.String protocols) {
            this.protocols = protocols;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getProtocols}
         * @param protocols Property protocols: The domain supports access protocols, values: http: expressed support for the HTTP protocol. This parameter is required.
         *                  https: support for HTTPS protocol.
         *                  http, https: supports HTTP, HTTPS protocol.
         * @return {@code this}
         */
        public Builder protocols(com.aliyun.ros.cdk.core.IResolvable protocols) {
            this.protocols = protocols;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getHttpPort}
         * @param httpPort Property httpPort: HTTP protocol configuration port.
         *                 When specifying a plurality of HTTP port "," separated. Example values: [80].
         *                 Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
         * @return {@code this}
         */
        public Builder httpPort(java.lang.String httpPort) {
            this.httpPort = httpPort;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getHttpPort}
         * @param httpPort Property httpPort: HTTP protocol configuration port.
         *                 When specifying a plurality of HTTP port "," separated. Example values: [80].
         *                 Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
         * @return {@code this}
         */
        public Builder httpPort(com.aliyun.ros.cdk.core.IResolvable httpPort) {
            this.httpPort = httpPort;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getHttpsPort}
         * @param httpsPort Property httpsPort: HTTPS protocol configuration port.
         *                  When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
         *                  Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
         * @return {@code this}
         */
        public Builder httpsPort(java.lang.String httpsPort) {
            this.httpsPort = httpsPort;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getHttpsPort}
         * @param httpsPort Property httpsPort: HTTPS protocol configuration port.
         *                  When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
         *                  Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
         * @return {@code this}
         */
        public Builder httpsPort(com.aliyun.ros.cdk.core.IResolvable httpsPort) {
            this.httpsPort = httpsPort;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getHttpsRedirect}
         * @param httpsRedirect Property httpsRedirect: HTTPS is turned forcefully jump the argument: 0: off (default) 1: Turn Description required to complete the request parameters using only HTTPS access protocol.
         *                      After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
         * @return {@code this}
         */
        public Builder httpsRedirect(java.lang.Number httpsRedirect) {
            this.httpsRedirect = httpsRedirect;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getHttpsRedirect}
         * @param httpsRedirect Property httpsRedirect: HTTPS is turned forcefully jump the argument: 0: off (default) 1: Turn Description required to complete the request parameters using only HTTPS access protocol.
         *                      After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
         * @return {@code this}
         */
        public Builder httpsRedirect(com.aliyun.ros.cdk.core.IResolvable httpsRedirect) {
            this.httpsRedirect = httpsRedirect;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getHttpToUserIp}
         * @param httpToUserIp Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of: 0: off (default) 1: Turn Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
         * @return {@code this}
         */
        public Builder httpToUserIp(java.lang.Number httpToUserIp) {
            this.httpToUserIp = httpToUserIp;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getHttpToUserIp}
         * @param httpToUserIp Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of: 0: off (default) 1: Turn Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
         * @return {@code this}
         */
        public Builder httpToUserIp(com.aliyun.ros.cdk.core.IResolvable httpToUserIp) {
            this.httpToUserIp = httpToUserIp;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getLoadBalancing}
         * @param loadBalancing Property loadBalancing: Back to the source load balancing policy values: 0: IP Hash way.
         *                      1: represents a polling mode.
         * @return {@code this}
         */
        public Builder loadBalancing(java.lang.Number loadBalancing) {
            this.loadBalancing = loadBalancing;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getLoadBalancing}
         * @param loadBalancing Property loadBalancing: Back to the source load balancing policy values: 0: IP Hash way.
         *                      1: represents a polling mode.
         * @return {@code this}
         */
        public Builder loadBalancing(com.aliyun.ros.cdk.core.IResolvable loadBalancing) {
            this.loadBalancing = loadBalancing;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getRegion}
         * @param region Property region: Examples of areas where the WAF.
         *               Value:
         *               cn: China mainland (default)
         *               cn-hongkong: China HongKong and other overseas
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getRegion}
         * @param region Property region: Examples of areas where the WAF.
         *               Value:
         *               cn: China mainland (default)
         *               cn-hongkong: China HongKong and other overseas
         * @return {@code this}
         */
        public Builder region(com.aliyun.ros.cdk.core.IResolvable region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getRsType}
         * @param rsType Property rsType: Back to the source address type the domain name values: 0: back to the source to IP.
         *               1: Indicates the domain name back to the source.
         * @return {@code this}
         */
        public Builder rsType(java.lang.Number rsType) {
            this.rsType = rsType;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getRsType}
         * @param rsType Property rsType: Back to the source address type the domain name values: 0: back to the source to IP.
         *               1: Indicates the domain name back to the source.
         * @return {@code this}
         */
        public Builder rsType(com.aliyun.ros.cdk.core.IResolvable rsType) {
            this.rsType = rsType;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getSourceIps}
         * @param sourceIps Property sourceIps: Source station IP, supports a plurality of specified IP.
         *                  Example values: [ "1.1.1.1"].
         * @return {@code this}
         */
        public Builder sourceIps(java.lang.String sourceIps) {
            this.sourceIps = sourceIps;
            return this;
        }

        /**
         * Sets the value of {@link DomainConfigProps#getSourceIps}
         * @param sourceIps Property sourceIps: Source station IP, supports a plurality of specified IP.
         *                  Example values: [ "1.1.1.1"].
         * @return {@code this}
         */
        public Builder sourceIps(com.aliyun.ros.cdk.core.IResolvable sourceIps) {
            this.sourceIps = sourceIps;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DomainConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DomainConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DomainConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DomainConfigProps {
        private final java.lang.Object domain;
        private final java.lang.Object instanceId;
        private final java.lang.Object isAccessProduct;
        private final java.lang.Object protocols;
        private final java.lang.Object httpPort;
        private final java.lang.Object httpsPort;
        private final java.lang.Object httpsRedirect;
        private final java.lang.Object httpToUserIp;
        private final java.lang.Object loadBalancing;
        private final java.lang.Object region;
        private final java.lang.Object rsType;
        private final java.lang.Object sourceIps;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isAccessProduct = software.amazon.jsii.Kernel.get(this, "isAccessProduct", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocols = software.amazon.jsii.Kernel.get(this, "protocols", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpPort = software.amazon.jsii.Kernel.get(this, "httpPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpsPort = software.amazon.jsii.Kernel.get(this, "httpsPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpsRedirect = software.amazon.jsii.Kernel.get(this, "httpsRedirect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpToUserIp = software.amazon.jsii.Kernel.get(this, "httpToUserIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancing = software.amazon.jsii.Kernel.get(this, "loadBalancing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rsType = software.amazon.jsii.Kernel.get(this, "rsType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceIps = software.amazon.jsii.Kernel.get(this, "sourceIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domain = java.util.Objects.requireNonNull(builder.domain, "domain is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.isAccessProduct = java.util.Objects.requireNonNull(builder.isAccessProduct, "isAccessProduct is required");
            this.protocols = java.util.Objects.requireNonNull(builder.protocols, "protocols is required");
            this.httpPort = builder.httpPort;
            this.httpsPort = builder.httpsPort;
            this.httpsRedirect = builder.httpsRedirect;
            this.httpToUserIp = builder.httpToUserIp;
            this.loadBalancing = builder.loadBalancing;
            this.region = builder.region;
            this.rsType = builder.rsType;
            this.sourceIps = builder.sourceIps;
        }

        @Override
        public final java.lang.Object getDomain() {
            return this.domain;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getIsAccessProduct() {
            return this.isAccessProduct;
        }

        @Override
        public final java.lang.Object getProtocols() {
            return this.protocols;
        }

        @Override
        public final java.lang.Object getHttpPort() {
            return this.httpPort;
        }

        @Override
        public final java.lang.Object getHttpsPort() {
            return this.httpsPort;
        }

        @Override
        public final java.lang.Object getHttpsRedirect() {
            return this.httpsRedirect;
        }

        @Override
        public final java.lang.Object getHttpToUserIp() {
            return this.httpToUserIp;
        }

        @Override
        public final java.lang.Object getLoadBalancing() {
            return this.loadBalancing;
        }

        @Override
        public final java.lang.Object getRegion() {
            return this.region;
        }

        @Override
        public final java.lang.Object getRsType() {
            return this.rsType;
        }

        @Override
        public final java.lang.Object getSourceIps() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-waf.DomainConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DomainConfigProps.Jsii$Proxy that = (DomainConfigProps.Jsii$Proxy) o;

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
