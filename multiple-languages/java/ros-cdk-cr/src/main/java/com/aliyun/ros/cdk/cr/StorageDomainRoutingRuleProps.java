package com.aliyun.ros.cdk.cr;

/**
 * Properties for defining a <code>StorageDomainRoutingRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-storagedomainroutingrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:47.347Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.StorageDomainRoutingRuleProps")
@software.amazon.jsii.Jsii.Proxy(StorageDomainRoutingRuleProps.Jsii$Proxy.class)
public interface StorageDomainRoutingRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: ACR Instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property routes: Domain name routing entry.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRoutes();

    /**
     * @return a {@link Builder} of {@link StorageDomainRoutingRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link StorageDomainRoutingRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<StorageDomainRoutingRuleProps> {
        java.lang.Object instanceId;
        java.lang.Object routes;

        /**
         * Sets the value of {@link StorageDomainRoutingRuleProps#getInstanceId}
         * @param instanceId Property instanceId: ACR Instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link StorageDomainRoutingRuleProps#getInstanceId}
         * @param instanceId Property instanceId: ACR Instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link StorageDomainRoutingRuleProps#getRoutes}
         * @param routes Property routes: Domain name routing entry. This parameter is required.
         * @return {@code this}
         */
        public Builder routes(com.aliyun.ros.cdk.core.IResolvable routes) {
            this.routes = routes;
            return this;
        }

        /**
         * Sets the value of {@link StorageDomainRoutingRuleProps#getRoutes}
         * @param routes Property routes: Domain name routing entry. This parameter is required.
         * @return {@code this}
         */
        public Builder routes(java.util.List<? extends java.lang.Object> routes) {
            this.routes = routes;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link StorageDomainRoutingRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public StorageDomainRoutingRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link StorageDomainRoutingRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements StorageDomainRoutingRuleProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object routes;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routes = software.amazon.jsii.Kernel.get(this, "routes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.routes = java.util.Objects.requireNonNull(builder.routes, "routes is required");
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getRoutes() {
            return this.routes;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("routes", om.valueToTree(this.getRoutes()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cr.StorageDomainRoutingRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            StorageDomainRoutingRuleProps.Jsii$Proxy that = (StorageDomainRoutingRuleProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            return this.routes.equals(that.routes);
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.routes.hashCode());
            return result;
        }
    }
}
