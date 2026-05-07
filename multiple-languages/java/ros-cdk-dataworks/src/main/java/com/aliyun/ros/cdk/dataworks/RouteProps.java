package com.aliyun.ros.cdk.dataworks;

/**
 * Properties for defining a <code>Route</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-route
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:47.636Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dataworks.$Module.class, fqn = "@alicloud/ros-cdk-dataworks.RouteProps")
@software.amazon.jsii.Jsii.Proxy(RouteProps.Jsii$Proxy.class)
public interface RouteProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property destinationCidr: The CIDR blocks of the destination-based route.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationCidr();

    /**
     * Property networkId: The ID of the network resource to which the route belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkId();

    /**
     * Property dwResourceGroupId: ID of the resource group to which the route belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDwResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RouteProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RouteProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RouteProps> {
        java.lang.Object destinationCidr;
        java.lang.Object networkId;
        java.lang.Object dwResourceGroupId;

        /**
         * Sets the value of {@link RouteProps#getDestinationCidr}
         * @param destinationCidr Property destinationCidr: The CIDR blocks of the destination-based route. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationCidr(java.lang.String destinationCidr) {
            this.destinationCidr = destinationCidr;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getDestinationCidr}
         * @param destinationCidr Property destinationCidr: The CIDR blocks of the destination-based route. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationCidr(com.aliyun.ros.cdk.core.IResolvable destinationCidr) {
            this.destinationCidr = destinationCidr;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getNetworkId}
         * @param networkId Property networkId: The ID of the network resource to which the route belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder networkId(java.lang.Number networkId) {
            this.networkId = networkId;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getNetworkId}
         * @param networkId Property networkId: The ID of the network resource to which the route belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder networkId(com.aliyun.ros.cdk.core.IResolvable networkId) {
            this.networkId = networkId;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getDwResourceGroupId}
         * @param dwResourceGroupId Property dwResourceGroupId: ID of the resource group to which the route belongs.
         * @return {@code this}
         */
        public Builder dwResourceGroupId(java.lang.String dwResourceGroupId) {
            this.dwResourceGroupId = dwResourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getDwResourceGroupId}
         * @param dwResourceGroupId Property dwResourceGroupId: ID of the resource group to which the route belongs.
         * @return {@code this}
         */
        public Builder dwResourceGroupId(com.aliyun.ros.cdk.core.IResolvable dwResourceGroupId) {
            this.dwResourceGroupId = dwResourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RouteProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RouteProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RouteProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RouteProps {
        private final java.lang.Object destinationCidr;
        private final java.lang.Object networkId;
        private final java.lang.Object dwResourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.destinationCidr = software.amazon.jsii.Kernel.get(this, "destinationCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkId = software.amazon.jsii.Kernel.get(this, "networkId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dwResourceGroupId = software.amazon.jsii.Kernel.get(this, "dwResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.destinationCidr = java.util.Objects.requireNonNull(builder.destinationCidr, "destinationCidr is required");
            this.networkId = java.util.Objects.requireNonNull(builder.networkId, "networkId is required");
            this.dwResourceGroupId = builder.dwResourceGroupId;
        }

        @Override
        public final java.lang.Object getDestinationCidr() {
            return this.destinationCidr;
        }

        @Override
        public final java.lang.Object getNetworkId() {
            return this.networkId;
        }

        @Override
        public final java.lang.Object getDwResourceGroupId() {
            return this.dwResourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("destinationCidr", om.valueToTree(this.getDestinationCidr()));
            data.set("networkId", om.valueToTree(this.getNetworkId()));
            if (this.getDwResourceGroupId() != null) {
                data.set("dwResourceGroupId", om.valueToTree(this.getDwResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dataworks.RouteProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RouteProps.Jsii$Proxy that = (RouteProps.Jsii$Proxy) o;

            if (!destinationCidr.equals(that.destinationCidr)) return false;
            if (!networkId.equals(that.networkId)) return false;
            return this.dwResourceGroupId != null ? this.dwResourceGroupId.equals(that.dwResourceGroupId) : that.dwResourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.destinationCidr.hashCode();
            result = 31 * result + (this.networkId.hashCode());
            result = 31 * result + (this.dwResourceGroupId != null ? this.dwResourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
