package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>VpnRouteEntry</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnrouteentry
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:45.310Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpnRouteEntryProps")
@software.amazon.jsii.Jsii.Proxy(VpnRouteEntryProps.Jsii$Proxy.class)
public interface VpnRouteEntryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property nextHop: The next hop of the destination route entry.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNextHop();

    /**
     * Property publishVpc: Indicates whether to publish the destination route to the VPC.
     * <p>
     * Valid values:
     * true: Publish the destination route to the VPC.
     * false: Do not publish the destination route to the VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPublishVpc();

    /**
     * Property routeDest: The destination CIDR block of the destination route.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouteDest();

    /**
     * Property vpnGatewayId: The ID of the VPN Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpnGatewayId();

    /**
     * Property weight: The weight of the destination route.
     * <p>
     * Valid values: 0|100.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWeight();

    /**
     * Property description: The description of the VPN destination route.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property overlayMode: The overlay mode.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOverlayMode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VpnRouteEntryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpnRouteEntryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpnRouteEntryProps> {
        java.lang.Object nextHop;
        java.lang.Object publishVpc;
        java.lang.Object routeDest;
        java.lang.Object vpnGatewayId;
        java.lang.Object weight;
        java.lang.Object description;
        java.lang.Object overlayMode;

        /**
         * Sets the value of {@link VpnRouteEntryProps#getNextHop}
         * @param nextHop Property nextHop: The next hop of the destination route entry. This parameter is required.
         * @return {@code this}
         */
        public Builder nextHop(java.lang.String nextHop) {
            this.nextHop = nextHop;
            return this;
        }

        /**
         * Sets the value of {@link VpnRouteEntryProps#getNextHop}
         * @param nextHop Property nextHop: The next hop of the destination route entry. This parameter is required.
         * @return {@code this}
         */
        public Builder nextHop(com.aliyun.ros.cdk.core.IResolvable nextHop) {
            this.nextHop = nextHop;
            return this;
        }

        /**
         * Sets the value of {@link VpnRouteEntryProps#getPublishVpc}
         * @param publishVpc Property publishVpc: Indicates whether to publish the destination route to the VPC. This parameter is required.
         *                   Valid values:
         *                   true: Publish the destination route to the VPC.
         *                   false: Do not publish the destination route to the VPC.
         * @return {@code this}
         */
        public Builder publishVpc(java.lang.Boolean publishVpc) {
            this.publishVpc = publishVpc;
            return this;
        }

        /**
         * Sets the value of {@link VpnRouteEntryProps#getPublishVpc}
         * @param publishVpc Property publishVpc: Indicates whether to publish the destination route to the VPC. This parameter is required.
         *                   Valid values:
         *                   true: Publish the destination route to the VPC.
         *                   false: Do not publish the destination route to the VPC.
         * @return {@code this}
         */
        public Builder publishVpc(com.aliyun.ros.cdk.core.IResolvable publishVpc) {
            this.publishVpc = publishVpc;
            return this;
        }

        /**
         * Sets the value of {@link VpnRouteEntryProps#getRouteDest}
         * @param routeDest Property routeDest: The destination CIDR block of the destination route. This parameter is required.
         * @return {@code this}
         */
        public Builder routeDest(java.lang.String routeDest) {
            this.routeDest = routeDest;
            return this;
        }

        /**
         * Sets the value of {@link VpnRouteEntryProps#getRouteDest}
         * @param routeDest Property routeDest: The destination CIDR block of the destination route. This parameter is required.
         * @return {@code this}
         */
        public Builder routeDest(com.aliyun.ros.cdk.core.IResolvable routeDest) {
            this.routeDest = routeDest;
            return this;
        }

        /**
         * Sets the value of {@link VpnRouteEntryProps#getVpnGatewayId}
         * @param vpnGatewayId Property vpnGatewayId: The ID of the VPN Gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnGatewayId(java.lang.String vpnGatewayId) {
            this.vpnGatewayId = vpnGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link VpnRouteEntryProps#getVpnGatewayId}
         * @param vpnGatewayId Property vpnGatewayId: The ID of the VPN Gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnGatewayId(com.aliyun.ros.cdk.core.IResolvable vpnGatewayId) {
            this.vpnGatewayId = vpnGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link VpnRouteEntryProps#getWeight}
         * @param weight Property weight: The weight of the destination route. This parameter is required.
         *               Valid values: 0|100.
         * @return {@code this}
         */
        public Builder weight(java.lang.Number weight) {
            this.weight = weight;
            return this;
        }

        /**
         * Sets the value of {@link VpnRouteEntryProps#getWeight}
         * @param weight Property weight: The weight of the destination route. This parameter is required.
         *               Valid values: 0|100.
         * @return {@code this}
         */
        public Builder weight(com.aliyun.ros.cdk.core.IResolvable weight) {
            this.weight = weight;
            return this;
        }

        /**
         * Sets the value of {@link VpnRouteEntryProps#getDescription}
         * @param description Property description: The description of the VPN destination route.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VpnRouteEntryProps#getDescription}
         * @param description Property description: The description of the VPN destination route.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VpnRouteEntryProps#getOverlayMode}
         * @param overlayMode Property overlayMode: The overlay mode.
         * @return {@code this}
         */
        public Builder overlayMode(java.lang.String overlayMode) {
            this.overlayMode = overlayMode;
            return this;
        }

        /**
         * Sets the value of {@link VpnRouteEntryProps#getOverlayMode}
         * @param overlayMode Property overlayMode: The overlay mode.
         * @return {@code this}
         */
        public Builder overlayMode(com.aliyun.ros.cdk.core.IResolvable overlayMode) {
            this.overlayMode = overlayMode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpnRouteEntryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpnRouteEntryProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VpnRouteEntryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpnRouteEntryProps {
        private final java.lang.Object nextHop;
        private final java.lang.Object publishVpc;
        private final java.lang.Object routeDest;
        private final java.lang.Object vpnGatewayId;
        private final java.lang.Object weight;
        private final java.lang.Object description;
        private final java.lang.Object overlayMode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.nextHop = software.amazon.jsii.Kernel.get(this, "nextHop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.publishVpc = software.amazon.jsii.Kernel.get(this, "publishVpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeDest = software.amazon.jsii.Kernel.get(this, "routeDest", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpnGatewayId = software.amazon.jsii.Kernel.get(this, "vpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.weight = software.amazon.jsii.Kernel.get(this, "weight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.overlayMode = software.amazon.jsii.Kernel.get(this, "overlayMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.nextHop = java.util.Objects.requireNonNull(builder.nextHop, "nextHop is required");
            this.publishVpc = java.util.Objects.requireNonNull(builder.publishVpc, "publishVpc is required");
            this.routeDest = java.util.Objects.requireNonNull(builder.routeDest, "routeDest is required");
            this.vpnGatewayId = java.util.Objects.requireNonNull(builder.vpnGatewayId, "vpnGatewayId is required");
            this.weight = java.util.Objects.requireNonNull(builder.weight, "weight is required");
            this.description = builder.description;
            this.overlayMode = builder.overlayMode;
        }

        @Override
        public final java.lang.Object getNextHop() {
            return this.nextHop;
        }

        @Override
        public final java.lang.Object getPublishVpc() {
            return this.publishVpc;
        }

        @Override
        public final java.lang.Object getRouteDest() {
            return this.routeDest;
        }

        @Override
        public final java.lang.Object getVpnGatewayId() {
            return this.vpnGatewayId;
        }

        @Override
        public final java.lang.Object getWeight() {
            return this.weight;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getOverlayMode() {
            return this.overlayMode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("nextHop", om.valueToTree(this.getNextHop()));
            data.set("publishVpc", om.valueToTree(this.getPublishVpc()));
            data.set("routeDest", om.valueToTree(this.getRouteDest()));
            data.set("vpnGatewayId", om.valueToTree(this.getVpnGatewayId()));
            data.set("weight", om.valueToTree(this.getWeight()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getOverlayMode() != null) {
                data.set("overlayMode", om.valueToTree(this.getOverlayMode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.VpnRouteEntryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpnRouteEntryProps.Jsii$Proxy that = (VpnRouteEntryProps.Jsii$Proxy) o;

            if (!nextHop.equals(that.nextHop)) return false;
            if (!publishVpc.equals(that.publishVpc)) return false;
            if (!routeDest.equals(that.routeDest)) return false;
            if (!vpnGatewayId.equals(that.vpnGatewayId)) return false;
            if (!weight.equals(that.weight)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.overlayMode != null ? this.overlayMode.equals(that.overlayMode) : that.overlayMode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.nextHop.hashCode();
            result = 31 * result + (this.publishVpc.hashCode());
            result = 31 * result + (this.routeDest.hashCode());
            result = 31 * result + (this.vpnGatewayId.hashCode());
            result = 31 * result + (this.weight.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.overlayMode != null ? this.overlayMode.hashCode() : 0);
            return result;
        }
    }
}
