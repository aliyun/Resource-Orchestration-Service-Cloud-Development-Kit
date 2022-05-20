package com.aliyun.ros.cdk.waf;

/**
 * Properties for defining a `ALIYUN::WAF::Domain`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:03.981Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.RosDomainProps")
@software.amazon.jsii.Jsii.Proxy(RosDomainProps.Jsii$Proxy.class)
public interface RosDomainProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIsAccessProduct();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceIps();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttp2Port() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpsPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpsRedirect() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpToUserIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancing() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogHeaders() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReadTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWriteTime() {
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
        java.lang.Object instanceId;
        java.lang.Object isAccessProduct;
        java.lang.Object sourceIps;
        java.lang.Object clusterType;
        java.lang.Object connectionTime;
        java.lang.Object http2Port;
        java.lang.Object httpPort;
        java.lang.Object httpsPort;
        java.lang.Object httpsRedirect;
        java.lang.Object httpToUserIp;
        java.lang.Object loadBalancing;
        java.lang.Object logHeaders;
        java.lang.Object readTime;
        java.lang.Object resourceGroupId;
        java.lang.Object writeTime;

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
         * Sets the value of {@link RosDomainProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getIsAccessProduct}
         * @param isAccessProduct the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder isAccessProduct(java.lang.String isAccessProduct) {
            this.isAccessProduct = isAccessProduct;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getIsAccessProduct}
         * @param isAccessProduct the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder isAccessProduct(com.aliyun.ros.cdk.core.IResolvable isAccessProduct) {
            this.isAccessProduct = isAccessProduct;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getSourceIps}
         * @param sourceIps the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceIps(com.aliyun.ros.cdk.core.IResolvable sourceIps) {
            this.sourceIps = sourceIps;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getSourceIps}
         * @param sourceIps the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceIps(java.util.List<? extends java.lang.Object> sourceIps) {
            this.sourceIps = sourceIps;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getClusterType}
         * @param clusterType the value to be set.
         * @return {@code this}
         */
        public Builder clusterType(java.lang.String clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getClusterType}
         * @param clusterType the value to be set.
         * @return {@code this}
         */
        public Builder clusterType(com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getConnectionTime}
         * @param connectionTime the value to be set.
         * @return {@code this}
         */
        public Builder connectionTime(java.lang.Number connectionTime) {
            this.connectionTime = connectionTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getConnectionTime}
         * @param connectionTime the value to be set.
         * @return {@code this}
         */
        public Builder connectionTime(com.aliyun.ros.cdk.core.IResolvable connectionTime) {
            this.connectionTime = connectionTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getHttp2Port}
         * @param http2Port the value to be set.
         * @return {@code this}
         */
        public Builder http2Port(com.aliyun.ros.cdk.core.IResolvable http2Port) {
            this.http2Port = http2Port;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getHttp2Port}
         * @param http2Port the value to be set.
         * @return {@code this}
         */
        public Builder http2Port(java.util.List<? extends java.lang.Object> http2Port) {
            this.http2Port = http2Port;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getHttpPort}
         * @param httpPort the value to be set.
         * @return {@code this}
         */
        public Builder httpPort(com.aliyun.ros.cdk.core.IResolvable httpPort) {
            this.httpPort = httpPort;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getHttpPort}
         * @param httpPort the value to be set.
         * @return {@code this}
         */
        public Builder httpPort(java.util.List<? extends java.lang.Object> httpPort) {
            this.httpPort = httpPort;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getHttpsPort}
         * @param httpsPort the value to be set.
         * @return {@code this}
         */
        public Builder httpsPort(com.aliyun.ros.cdk.core.IResolvable httpsPort) {
            this.httpsPort = httpsPort;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getHttpsPort}
         * @param httpsPort the value to be set.
         * @return {@code this}
         */
        public Builder httpsPort(java.util.List<? extends java.lang.Object> httpsPort) {
            this.httpsPort = httpsPort;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getHttpsRedirect}
         * @param httpsRedirect the value to be set.
         * @return {@code this}
         */
        public Builder httpsRedirect(java.lang.String httpsRedirect) {
            this.httpsRedirect = httpsRedirect;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getHttpsRedirect}
         * @param httpsRedirect the value to be set.
         * @return {@code this}
         */
        public Builder httpsRedirect(com.aliyun.ros.cdk.core.IResolvable httpsRedirect) {
            this.httpsRedirect = httpsRedirect;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getHttpToUserIp}
         * @param httpToUserIp the value to be set.
         * @return {@code this}
         */
        public Builder httpToUserIp(java.lang.String httpToUserIp) {
            this.httpToUserIp = httpToUserIp;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getHttpToUserIp}
         * @param httpToUserIp the value to be set.
         * @return {@code this}
         */
        public Builder httpToUserIp(com.aliyun.ros.cdk.core.IResolvable httpToUserIp) {
            this.httpToUserIp = httpToUserIp;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getLoadBalancing}
         * @param loadBalancing the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancing(java.lang.String loadBalancing) {
            this.loadBalancing = loadBalancing;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getLoadBalancing}
         * @param loadBalancing the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancing(com.aliyun.ros.cdk.core.IResolvable loadBalancing) {
            this.loadBalancing = loadBalancing;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getLogHeaders}
         * @param logHeaders the value to be set.
         * @return {@code this}
         */
        public Builder logHeaders(com.aliyun.ros.cdk.core.IResolvable logHeaders) {
            this.logHeaders = logHeaders;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getLogHeaders}
         * @param logHeaders the value to be set.
         * @return {@code this}
         */
        public Builder logHeaders(java.util.List<? extends java.lang.Object> logHeaders) {
            this.logHeaders = logHeaders;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getReadTime}
         * @param readTime the value to be set.
         * @return {@code this}
         */
        public Builder readTime(java.lang.Number readTime) {
            this.readTime = readTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getReadTime}
         * @param readTime the value to be set.
         * @return {@code this}
         */
        public Builder readTime(com.aliyun.ros.cdk.core.IResolvable readTime) {
            this.readTime = readTime;
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
         * Sets the value of {@link RosDomainProps#getWriteTime}
         * @param writeTime the value to be set.
         * @return {@code this}
         */
        public Builder writeTime(java.lang.Number writeTime) {
            this.writeTime = writeTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getWriteTime}
         * @param writeTime the value to be set.
         * @return {@code this}
         */
        public Builder writeTime(com.aliyun.ros.cdk.core.IResolvable writeTime) {
            this.writeTime = writeTime;
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
        private final java.lang.Object instanceId;
        private final java.lang.Object isAccessProduct;
        private final java.lang.Object sourceIps;
        private final java.lang.Object clusterType;
        private final java.lang.Object connectionTime;
        private final java.lang.Object http2Port;
        private final java.lang.Object httpPort;
        private final java.lang.Object httpsPort;
        private final java.lang.Object httpsRedirect;
        private final java.lang.Object httpToUserIp;
        private final java.lang.Object loadBalancing;
        private final java.lang.Object logHeaders;
        private final java.lang.Object readTime;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object writeTime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isAccessProduct = software.amazon.jsii.Kernel.get(this, "isAccessProduct", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceIps = software.amazon.jsii.Kernel.get(this, "sourceIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionTime = software.amazon.jsii.Kernel.get(this, "connectionTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.http2Port = software.amazon.jsii.Kernel.get(this, "http2Port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpPort = software.amazon.jsii.Kernel.get(this, "httpPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpsPort = software.amazon.jsii.Kernel.get(this, "httpsPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpsRedirect = software.amazon.jsii.Kernel.get(this, "httpsRedirect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpToUserIp = software.amazon.jsii.Kernel.get(this, "httpToUserIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancing = software.amazon.jsii.Kernel.get(this, "loadBalancing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logHeaders = software.amazon.jsii.Kernel.get(this, "logHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.readTime = software.amazon.jsii.Kernel.get(this, "readTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.writeTime = software.amazon.jsii.Kernel.get(this, "writeTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainName = java.util.Objects.requireNonNull(builder.domainName, "domainName is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.isAccessProduct = java.util.Objects.requireNonNull(builder.isAccessProduct, "isAccessProduct is required");
            this.sourceIps = java.util.Objects.requireNonNull(builder.sourceIps, "sourceIps is required");
            this.clusterType = builder.clusterType;
            this.connectionTime = builder.connectionTime;
            this.http2Port = builder.http2Port;
            this.httpPort = builder.httpPort;
            this.httpsPort = builder.httpsPort;
            this.httpsRedirect = builder.httpsRedirect;
            this.httpToUserIp = builder.httpToUserIp;
            this.loadBalancing = builder.loadBalancing;
            this.logHeaders = builder.logHeaders;
            this.readTime = builder.readTime;
            this.resourceGroupId = builder.resourceGroupId;
            this.writeTime = builder.writeTime;
        }

        @Override
        public final java.lang.Object getDomainName() {
            return this.domainName;
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
        public final java.lang.Object getSourceIps() {
            return this.sourceIps;
        }

        @Override
        public final java.lang.Object getClusterType() {
            return this.clusterType;
        }

        @Override
        public final java.lang.Object getConnectionTime() {
            return this.connectionTime;
        }

        @Override
        public final java.lang.Object getHttp2Port() {
            return this.http2Port;
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
        public final java.lang.Object getLogHeaders() {
            return this.logHeaders;
        }

        @Override
        public final java.lang.Object getReadTime() {
            return this.readTime;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getWriteTime() {
            return this.writeTime;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domainName", om.valueToTree(this.getDomainName()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("isAccessProduct", om.valueToTree(this.getIsAccessProduct()));
            data.set("sourceIps", om.valueToTree(this.getSourceIps()));
            if (this.getClusterType() != null) {
                data.set("clusterType", om.valueToTree(this.getClusterType()));
            }
            if (this.getConnectionTime() != null) {
                data.set("connectionTime", om.valueToTree(this.getConnectionTime()));
            }
            if (this.getHttp2Port() != null) {
                data.set("http2Port", om.valueToTree(this.getHttp2Port()));
            }
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
            if (this.getLogHeaders() != null) {
                data.set("logHeaders", om.valueToTree(this.getLogHeaders()));
            }
            if (this.getReadTime() != null) {
                data.set("readTime", om.valueToTree(this.getReadTime()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getWriteTime() != null) {
                data.set("writeTime", om.valueToTree(this.getWriteTime()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-waf.RosDomainProps"));
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
            if (!instanceId.equals(that.instanceId)) return false;
            if (!isAccessProduct.equals(that.isAccessProduct)) return false;
            if (!sourceIps.equals(that.sourceIps)) return false;
            if (this.clusterType != null ? !this.clusterType.equals(that.clusterType) : that.clusterType != null) return false;
            if (this.connectionTime != null ? !this.connectionTime.equals(that.connectionTime) : that.connectionTime != null) return false;
            if (this.http2Port != null ? !this.http2Port.equals(that.http2Port) : that.http2Port != null) return false;
            if (this.httpPort != null ? !this.httpPort.equals(that.httpPort) : that.httpPort != null) return false;
            if (this.httpsPort != null ? !this.httpsPort.equals(that.httpsPort) : that.httpsPort != null) return false;
            if (this.httpsRedirect != null ? !this.httpsRedirect.equals(that.httpsRedirect) : that.httpsRedirect != null) return false;
            if (this.httpToUserIp != null ? !this.httpToUserIp.equals(that.httpToUserIp) : that.httpToUserIp != null) return false;
            if (this.loadBalancing != null ? !this.loadBalancing.equals(that.loadBalancing) : that.loadBalancing != null) return false;
            if (this.logHeaders != null ? !this.logHeaders.equals(that.logHeaders) : that.logHeaders != null) return false;
            if (this.readTime != null ? !this.readTime.equals(that.readTime) : that.readTime != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.writeTime != null ? this.writeTime.equals(that.writeTime) : that.writeTime == null;
        }

        @Override
        public final int hashCode() {
            int result = this.domainName.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.isAccessProduct.hashCode());
            result = 31 * result + (this.sourceIps.hashCode());
            result = 31 * result + (this.clusterType != null ? this.clusterType.hashCode() : 0);
            result = 31 * result + (this.connectionTime != null ? this.connectionTime.hashCode() : 0);
            result = 31 * result + (this.http2Port != null ? this.http2Port.hashCode() : 0);
            result = 31 * result + (this.httpPort != null ? this.httpPort.hashCode() : 0);
            result = 31 * result + (this.httpsPort != null ? this.httpsPort.hashCode() : 0);
            result = 31 * result + (this.httpsRedirect != null ? this.httpsRedirect.hashCode() : 0);
            result = 31 * result + (this.httpToUserIp != null ? this.httpToUserIp.hashCode() : 0);
            result = 31 * result + (this.loadBalancing != null ? this.loadBalancing.hashCode() : 0);
            result = 31 * result + (this.logHeaders != null ? this.logHeaders.hashCode() : 0);
            result = 31 * result + (this.readTime != null ? this.readTime.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.writeTime != null ? this.writeTime.hashCode() : 0);
            return result;
        }
    }
}
