package com.aliyun.ros.cdk.waf;

/**
 * Properties for defining a `ALIYUN::WAF::Domain`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.724Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.DomainProps")
@software.amazon.jsii.Jsii.Proxy(DomainProps.Jsii$Proxy.class)
public interface DomainProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDomainName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getIsAccessProduct();

    /**
     */
    @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> getSourceIps();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getClusterType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getConnectionTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getHttp2Port() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getHttpPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getHttpsPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getHttpsRedirect() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getHttpToUserIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getLoadBalancing() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogHeaders() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getReadTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getWriteTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DomainProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DomainProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DomainProps> {
        private java.lang.String domainName;
        private java.lang.String instanceId;
        private java.lang.String isAccessProduct;
        private java.util.List<java.lang.String> sourceIps;
        private java.lang.String clusterType;
        private java.lang.Number connectionTime;
        private java.util.List<java.lang.String> http2Port;
        private java.util.List<java.lang.String> httpPort;
        private java.util.List<java.lang.String> httpsPort;
        private java.lang.String httpsRedirect;
        private java.lang.String httpToUserIp;
        private java.lang.String loadBalancing;
        private java.lang.Object logHeaders;
        private java.lang.Number readTime;
        private java.lang.String resourceGroupId;
        private java.lang.Number writeTime;

        /**
         * Sets the value of {@link DomainProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getIsAccessProduct}
         * @param isAccessProduct the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder isAccessProduct(java.lang.String isAccessProduct) {
            this.isAccessProduct = isAccessProduct;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getSourceIps}
         * @param sourceIps the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceIps(java.util.List<java.lang.String> sourceIps) {
            this.sourceIps = sourceIps;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getClusterType}
         * @param clusterType the value to be set.
         * @return {@code this}
         */
        public Builder clusterType(java.lang.String clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getConnectionTime}
         * @param connectionTime the value to be set.
         * @return {@code this}
         */
        public Builder connectionTime(java.lang.Number connectionTime) {
            this.connectionTime = connectionTime;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getHttp2Port}
         * @param http2Port the value to be set.
         * @return {@code this}
         */
        public Builder http2Port(java.util.List<java.lang.String> http2Port) {
            this.http2Port = http2Port;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getHttpPort}
         * @param httpPort the value to be set.
         * @return {@code this}
         */
        public Builder httpPort(java.util.List<java.lang.String> httpPort) {
            this.httpPort = httpPort;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getHttpsPort}
         * @param httpsPort the value to be set.
         * @return {@code this}
         */
        public Builder httpsPort(java.util.List<java.lang.String> httpsPort) {
            this.httpsPort = httpsPort;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getHttpsRedirect}
         * @param httpsRedirect the value to be set.
         * @return {@code this}
         */
        public Builder httpsRedirect(java.lang.String httpsRedirect) {
            this.httpsRedirect = httpsRedirect;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getHttpToUserIp}
         * @param httpToUserIp the value to be set.
         * @return {@code this}
         */
        public Builder httpToUserIp(java.lang.String httpToUserIp) {
            this.httpToUserIp = httpToUserIp;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getLoadBalancing}
         * @param loadBalancing the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancing(java.lang.String loadBalancing) {
            this.loadBalancing = loadBalancing;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getLogHeaders}
         * @param logHeaders the value to be set.
         * @return {@code this}
         */
        public Builder logHeaders(com.aliyun.ros.cdk.core.IResolvable logHeaders) {
            this.logHeaders = logHeaders;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getLogHeaders}
         * @param logHeaders the value to be set.
         * @return {@code this}
         */
        public Builder logHeaders(java.util.List<? extends java.lang.Object> logHeaders) {
            this.logHeaders = logHeaders;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getReadTime}
         * @param readTime the value to be set.
         * @return {@code this}
         */
        public Builder readTime(java.lang.Number readTime) {
            this.readTime = readTime;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getWriteTime}
         * @param writeTime the value to be set.
         * @return {@code this}
         */
        public Builder writeTime(java.lang.Number writeTime) {
            this.writeTime = writeTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DomainProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DomainProps build() {
            return new Jsii$Proxy(domainName, instanceId, isAccessProduct, sourceIps, clusterType, connectionTime, http2Port, httpPort, httpsPort, httpsRedirect, httpToUserIp, loadBalancing, logHeaders, readTime, resourceGroupId, writeTime);
        }
    }

    /**
     * An implementation for {@link DomainProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DomainProps {
        private final java.lang.String domainName;
        private final java.lang.String instanceId;
        private final java.lang.String isAccessProduct;
        private final java.util.List<java.lang.String> sourceIps;
        private final java.lang.String clusterType;
        private final java.lang.Number connectionTime;
        private final java.util.List<java.lang.String> http2Port;
        private final java.util.List<java.lang.String> httpPort;
        private final java.util.List<java.lang.String> httpsPort;
        private final java.lang.String httpsRedirect;
        private final java.lang.String httpToUserIp;
        private final java.lang.String loadBalancing;
        private final java.lang.Object logHeaders;
        private final java.lang.Number readTime;
        private final java.lang.String resourceGroupId;
        private final java.lang.Number writeTime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.isAccessProduct = software.amazon.jsii.Kernel.get(this, "isAccessProduct", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourceIps = software.amazon.jsii.Kernel.get(this, "sourceIps", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.connectionTime = software.amazon.jsii.Kernel.get(this, "connectionTime", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.http2Port = software.amazon.jsii.Kernel.get(this, "http2Port", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.httpPort = software.amazon.jsii.Kernel.get(this, "httpPort", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.httpsPort = software.amazon.jsii.Kernel.get(this, "httpsPort", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.httpsRedirect = software.amazon.jsii.Kernel.get(this, "httpsRedirect", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.httpToUserIp = software.amazon.jsii.Kernel.get(this, "httpToUserIp", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.loadBalancing = software.amazon.jsii.Kernel.get(this, "loadBalancing", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.logHeaders = software.amazon.jsii.Kernel.get(this, "logHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.readTime = software.amazon.jsii.Kernel.get(this, "readTime", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.writeTime = software.amazon.jsii.Kernel.get(this, "writeTime", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String domainName, final java.lang.String instanceId, final java.lang.String isAccessProduct, final java.util.List<java.lang.String> sourceIps, final java.lang.String clusterType, final java.lang.Number connectionTime, final java.util.List<java.lang.String> http2Port, final java.util.List<java.lang.String> httpPort, final java.util.List<java.lang.String> httpsPort, final java.lang.String httpsRedirect, final java.lang.String httpToUserIp, final java.lang.String loadBalancing, final java.lang.Object logHeaders, final java.lang.Number readTime, final java.lang.String resourceGroupId, final java.lang.Number writeTime) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainName = java.util.Objects.requireNonNull(domainName, "domainName is required");
            this.instanceId = java.util.Objects.requireNonNull(instanceId, "instanceId is required");
            this.isAccessProduct = java.util.Objects.requireNonNull(isAccessProduct, "isAccessProduct is required");
            this.sourceIps = java.util.Objects.requireNonNull(sourceIps, "sourceIps is required");
            this.clusterType = clusterType;
            this.connectionTime = connectionTime;
            this.http2Port = http2Port;
            this.httpPort = httpPort;
            this.httpsPort = httpsPort;
            this.httpsRedirect = httpsRedirect;
            this.httpToUserIp = httpToUserIp;
            this.loadBalancing = loadBalancing;
            this.logHeaders = logHeaders;
            this.readTime = readTime;
            this.resourceGroupId = resourceGroupId;
            this.writeTime = writeTime;
        }

        @Override
        public final java.lang.String getDomainName() {
            return this.domainName;
        }

        @Override
        public final java.lang.String getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.String getIsAccessProduct() {
            return this.isAccessProduct;
        }

        @Override
        public final java.util.List<java.lang.String> getSourceIps() {
            return this.sourceIps;
        }

        @Override
        public final java.lang.String getClusterType() {
            return this.clusterType;
        }

        @Override
        public final java.lang.Number getConnectionTime() {
            return this.connectionTime;
        }

        @Override
        public final java.util.List<java.lang.String> getHttp2Port() {
            return this.http2Port;
        }

        @Override
        public final java.util.List<java.lang.String> getHttpPort() {
            return this.httpPort;
        }

        @Override
        public final java.util.List<java.lang.String> getHttpsPort() {
            return this.httpsPort;
        }

        @Override
        public final java.lang.String getHttpsRedirect() {
            return this.httpsRedirect;
        }

        @Override
        public final java.lang.String getHttpToUserIp() {
            return this.httpToUserIp;
        }

        @Override
        public final java.lang.String getLoadBalancing() {
            return this.loadBalancing;
        }

        @Override
        public final java.lang.Object getLogHeaders() {
            return this.logHeaders;
        }

        @Override
        public final java.lang.Number getReadTime() {
            return this.readTime;
        }

        @Override
        public final java.lang.String getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Number getWriteTime() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-waf.DomainProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DomainProps.Jsii$Proxy that = (DomainProps.Jsii$Proxy) o;

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
