package com.aliyun.ros.cdk.slb.datasource;

/**
 * Properties for defining a <code>DATASOURCE::SLB::DomainExtensions</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:39.907Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.datasource.DomainExtensionsProps")
@software.amazon.jsii.Jsii.Proxy(DomainExtensionsProps.Jsii$Proxy.class)
public interface DomainExtensionsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance.
     * <p>
     * Valid values: 1 to 65535.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerPort();

    /**
     * Property loadBalancerId: The ID of the CLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId();

    /**
     * Property domainExtensionId: The ID of the additional certificate.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomainExtensionId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DomainExtensionsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DomainExtensionsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DomainExtensionsProps> {
        java.lang.Object listenerPort;
        java.lang.Object loadBalancerId;
        java.lang.Object domainExtensionId;

        /**
         * Sets the value of {@link DomainExtensionsProps#getListenerPort}
         * @param listenerPort Property listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance. This parameter is required.
         *                     Valid values: 1 to 65535.
         * @return {@code this}
         */
        public Builder listenerPort(java.lang.Number listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

        /**
         * Sets the value of {@link DomainExtensionsProps#getListenerPort}
         * @param listenerPort Property listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance. This parameter is required.
         *                     Valid values: 1 to 65535.
         * @return {@code this}
         */
        public Builder listenerPort(com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

        /**
         * Sets the value of {@link DomainExtensionsProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: The ID of the CLB instance. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link DomainExtensionsProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: The ID of the CLB instance. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link DomainExtensionsProps#getDomainExtensionId}
         * @param domainExtensionId Property domainExtensionId: The ID of the additional certificate.
         * @return {@code this}
         */
        public Builder domainExtensionId(java.lang.String domainExtensionId) {
            this.domainExtensionId = domainExtensionId;
            return this;
        }

        /**
         * Sets the value of {@link DomainExtensionsProps#getDomainExtensionId}
         * @param domainExtensionId Property domainExtensionId: The ID of the additional certificate.
         * @return {@code this}
         */
        public Builder domainExtensionId(com.aliyun.ros.cdk.core.IResolvable domainExtensionId) {
            this.domainExtensionId = domainExtensionId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DomainExtensionsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DomainExtensionsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DomainExtensionsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DomainExtensionsProps {
        private final java.lang.Object listenerPort;
        private final java.lang.Object loadBalancerId;
        private final java.lang.Object domainExtensionId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.listenerPort = software.amazon.jsii.Kernel.get(this, "listenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainExtensionId = software.amazon.jsii.Kernel.get(this, "domainExtensionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.listenerPort = java.util.Objects.requireNonNull(builder.listenerPort, "listenerPort is required");
            this.loadBalancerId = java.util.Objects.requireNonNull(builder.loadBalancerId, "loadBalancerId is required");
            this.domainExtensionId = builder.domainExtensionId;
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
        public final java.lang.Object getDomainExtensionId() {
            return this.domainExtensionId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("listenerPort", om.valueToTree(this.getListenerPort()));
            data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            if (this.getDomainExtensionId() != null) {
                data.set("domainExtensionId", om.valueToTree(this.getDomainExtensionId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.datasource.DomainExtensionsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DomainExtensionsProps.Jsii$Proxy that = (DomainExtensionsProps.Jsii$Proxy) o;

            if (!listenerPort.equals(that.listenerPort)) return false;
            if (!loadBalancerId.equals(that.loadBalancerId)) return false;
            return this.domainExtensionId != null ? this.domainExtensionId.equals(that.domainExtensionId) : that.domainExtensionId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.listenerPort.hashCode();
            result = 31 * result + (this.loadBalancerId.hashCode());
            result = 31 * result + (this.domainExtensionId != null ? this.domainExtensionId.hashCode() : 0);
            return result;
        }
    }
}
