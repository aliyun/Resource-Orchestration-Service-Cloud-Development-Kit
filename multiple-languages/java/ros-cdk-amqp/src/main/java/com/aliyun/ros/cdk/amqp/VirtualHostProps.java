package com.aliyun.ros.cdk.amqp;

/**
 * Properties for defining a <code>VirtualHost</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-virtualhost
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.580Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.VirtualHostProps")
@software.amazon.jsii.Jsii.Proxy(VirtualHostProps.Jsii$Proxy.class)
public interface VirtualHostProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: InstanceId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property virtualHost: The name of the virtual host.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVirtualHost();

    /**
     * @return a {@link Builder} of {@link VirtualHostProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VirtualHostProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VirtualHostProps> {
        java.lang.Object instanceId;
        java.lang.Object virtualHost;

        /**
         * Sets the value of {@link VirtualHostProps#getInstanceId}
         * @param instanceId Property instanceId: InstanceId. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link VirtualHostProps#getInstanceId}
         * @param instanceId Property instanceId: InstanceId. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link VirtualHostProps#getVirtualHost}
         * @param virtualHost Property virtualHost: The name of the virtual host. This parameter is required.
         * @return {@code this}
         */
        public Builder virtualHost(java.lang.String virtualHost) {
            this.virtualHost = virtualHost;
            return this;
        }

        /**
         * Sets the value of {@link VirtualHostProps#getVirtualHost}
         * @param virtualHost Property virtualHost: The name of the virtual host. This parameter is required.
         * @return {@code this}
         */
        public Builder virtualHost(com.aliyun.ros.cdk.core.IResolvable virtualHost) {
            this.virtualHost = virtualHost;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VirtualHostProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VirtualHostProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VirtualHostProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VirtualHostProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object virtualHost;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.virtualHost = software.amazon.jsii.Kernel.get(this, "virtualHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.virtualHost = java.util.Objects.requireNonNull(builder.virtualHost, "virtualHost is required");
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getVirtualHost() {
            return this.virtualHost;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("virtualHost", om.valueToTree(this.getVirtualHost()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-amqp.VirtualHostProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VirtualHostProps.Jsii$Proxy that = (VirtualHostProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            return this.virtualHost.equals(that.virtualHost);
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.virtualHost.hashCode());
            return result;
        }
    }
}
