package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a <code>DomainExtension</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-domainextension
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:09.285Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.DomainExtensionProps")
@software.amazon.jsii.Jsii.Proxy(DomainExtensionProps.Jsii$Proxy.class)
public interface DomainExtensionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property domain: The domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomain();

    /**
     * Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.
     * <p>
     * Valid value:
     * 1-65535
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerPort();

    /**
     * Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId();

    /**
     * Property serverCertificateId: The ID of the certificate corresponding to the domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServerCertificateId();

    /**
     * @return a {@link Builder} of {@link DomainExtensionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DomainExtensionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DomainExtensionProps> {
        java.lang.Object domain;
        java.lang.Object listenerPort;
        java.lang.Object loadBalancerId;
        java.lang.Object serverCertificateId;

        /**
         * Sets the value of {@link DomainExtensionProps#getDomain}
         * @param domain Property domain: The domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder domain(java.lang.String domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link DomainExtensionProps#getDomain}
         * @param domain Property domain: The domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder domain(com.aliyun.ros.cdk.core.IResolvable domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link DomainExtensionProps#getListenerPort}
         * @param listenerPort Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. This parameter is required.
         *                     Valid value:
         *                     1-65535
         * @return {@code this}
         */
        public Builder listenerPort(java.lang.Number listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

        /**
         * Sets the value of {@link DomainExtensionProps#getListenerPort}
         * @param listenerPort Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. This parameter is required.
         *                     Valid value:
         *                     1-65535
         * @return {@code this}
         */
        public Builder listenerPort(com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

        /**
         * Sets the value of {@link DomainExtensionProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: The ID of Server Load Balancer instance. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link DomainExtensionProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: The ID of Server Load Balancer instance. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link DomainExtensionProps#getServerCertificateId}
         * @param serverCertificateId Property serverCertificateId: The ID of the certificate corresponding to the domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder serverCertificateId(java.lang.String serverCertificateId) {
            this.serverCertificateId = serverCertificateId;
            return this;
        }

        /**
         * Sets the value of {@link DomainExtensionProps#getServerCertificateId}
         * @param serverCertificateId Property serverCertificateId: The ID of the certificate corresponding to the domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder serverCertificateId(com.aliyun.ros.cdk.core.IResolvable serverCertificateId) {
            this.serverCertificateId = serverCertificateId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DomainExtensionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DomainExtensionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DomainExtensionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DomainExtensionProps {
        private final java.lang.Object domain;
        private final java.lang.Object listenerPort;
        private final java.lang.Object loadBalancerId;
        private final java.lang.Object serverCertificateId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerPort = software.amazon.jsii.Kernel.get(this, "listenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverCertificateId = software.amazon.jsii.Kernel.get(this, "serverCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domain = java.util.Objects.requireNonNull(builder.domain, "domain is required");
            this.listenerPort = java.util.Objects.requireNonNull(builder.listenerPort, "listenerPort is required");
            this.loadBalancerId = java.util.Objects.requireNonNull(builder.loadBalancerId, "loadBalancerId is required");
            this.serverCertificateId = java.util.Objects.requireNonNull(builder.serverCertificateId, "serverCertificateId is required");
        }

        @Override
        public final java.lang.Object getDomain() {
            return this.domain;
        }

        @Override
        public final java.lang.Object getListenerPort() {
            return this.listenerPort;
        }

        @Override
        public final java.lang.Object getLoadBalancerId() {
            return this.loadBalancerId;
        }

        @Override
        public final java.lang.Object getServerCertificateId() {
            return this.serverCertificateId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domain", om.valueToTree(this.getDomain()));
            data.set("listenerPort", om.valueToTree(this.getListenerPort()));
            data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            data.set("serverCertificateId", om.valueToTree(this.getServerCertificateId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.DomainExtensionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DomainExtensionProps.Jsii$Proxy that = (DomainExtensionProps.Jsii$Proxy) o;

            if (!domain.equals(that.domain)) return false;
            if (!listenerPort.equals(that.listenerPort)) return false;
            if (!loadBalancerId.equals(that.loadBalancerId)) return false;
            return this.serverCertificateId.equals(that.serverCertificateId);
        }

        @Override
        public final int hashCode() {
            int result = this.domain.hashCode();
            result = 31 * result + (this.listenerPort.hashCode());
            result = 31 * result + (this.loadBalancerId.hashCode());
            result = 31 * result + (this.serverCertificateId.hashCode());
            return result;
        }
    }
}
