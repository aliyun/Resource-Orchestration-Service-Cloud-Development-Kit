package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosVpnPbrRouteEntry</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnpbrrouteentry
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.407Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnPbrRouteEntryProps")
@software.amazon.jsii.Jsii.Proxy(RosVpnPbrRouteEntryProps.Jsii$Proxy.class)
public interface RosVpnPbrRouteEntryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNextHop();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPublishVpc();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouteDest();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouteSource();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpnGatewayId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWeight();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOverlayMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosVpnPbrRouteEntryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVpnPbrRouteEntryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVpnPbrRouteEntryProps> {
        java.lang.Object nextHop;
        java.lang.Object publishVpc;
        java.lang.Object routeDest;
        java.lang.Object routeSource;
        java.lang.Object vpnGatewayId;
        java.lang.Object weight;
        java.lang.Object description;
        java.lang.Object overlayMode;
        java.lang.Object priority;

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getNextHop}
         * @param nextHop the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nextHop(java.lang.String nextHop) {
            this.nextHop = nextHop;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getNextHop}
         * @param nextHop the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nextHop(com.aliyun.ros.cdk.core.IResolvable nextHop) {
            this.nextHop = nextHop;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getPublishVpc}
         * @param publishVpc the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder publishVpc(java.lang.Boolean publishVpc) {
            this.publishVpc = publishVpc;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getPublishVpc}
         * @param publishVpc the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder publishVpc(com.aliyun.ros.cdk.core.IResolvable publishVpc) {
            this.publishVpc = publishVpc;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getRouteDest}
         * @param routeDest the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeDest(java.lang.String routeDest) {
            this.routeDest = routeDest;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getRouteDest}
         * @param routeDest the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeDest(com.aliyun.ros.cdk.core.IResolvable routeDest) {
            this.routeDest = routeDest;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getRouteSource}
         * @param routeSource the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeSource(java.lang.String routeSource) {
            this.routeSource = routeSource;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getRouteSource}
         * @param routeSource the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeSource(com.aliyun.ros.cdk.core.IResolvable routeSource) {
            this.routeSource = routeSource;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getVpnGatewayId}
         * @param vpnGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnGatewayId(java.lang.String vpnGatewayId) {
            this.vpnGatewayId = vpnGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getVpnGatewayId}
         * @param vpnGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnGatewayId(com.aliyun.ros.cdk.core.IResolvable vpnGatewayId) {
            this.vpnGatewayId = vpnGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getWeight}
         * @param weight the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder weight(java.lang.Number weight) {
            this.weight = weight;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getWeight}
         * @param weight the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder weight(com.aliyun.ros.cdk.core.IResolvable weight) {
            this.weight = weight;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getOverlayMode}
         * @param overlayMode the value to be set.
         * @return {@code this}
         */
        public Builder overlayMode(java.lang.String overlayMode) {
            this.overlayMode = overlayMode;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getOverlayMode}
         * @param overlayMode the value to be set.
         * @return {@code this}
         */
        public Builder overlayMode(com.aliyun.ros.cdk.core.IResolvable overlayMode) {
            this.overlayMode = overlayMode;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getPriority}
         * @param priority the value to be set.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnPbrRouteEntryProps#getPriority}
         * @param priority the value to be set.
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVpnPbrRouteEntryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVpnPbrRouteEntryProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVpnPbrRouteEntryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVpnPbrRouteEntryProps {
        private final java.lang.Object nextHop;
        private final java.lang.Object publishVpc;
        private final java.lang.Object routeDest;
        private final java.lang.Object routeSource;
        private final java.lang.Object vpnGatewayId;
        private final java.lang.Object weight;
        private final java.lang.Object description;
        private final java.lang.Object overlayMode;
        private final java.lang.Object priority;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.nextHop = software.amazon.jsii.Kernel.get(this, "nextHop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.publishVpc = software.amazon.jsii.Kernel.get(this, "publishVpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeDest = software.amazon.jsii.Kernel.get(this, "routeDest", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeSource = software.amazon.jsii.Kernel.get(this, "routeSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpnGatewayId = software.amazon.jsii.Kernel.get(this, "vpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.weight = software.amazon.jsii.Kernel.get(this, "weight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.overlayMode = software.amazon.jsii.Kernel.get(this, "overlayMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.nextHop = java.util.Objects.requireNonNull(builder.nextHop, "nextHop is required");
            this.publishVpc = java.util.Objects.requireNonNull(builder.publishVpc, "publishVpc is required");
            this.routeDest = java.util.Objects.requireNonNull(builder.routeDest, "routeDest is required");
            this.routeSource = java.util.Objects.requireNonNull(builder.routeSource, "routeSource is required");
            this.vpnGatewayId = java.util.Objects.requireNonNull(builder.vpnGatewayId, "vpnGatewayId is required");
            this.weight = java.util.Objects.requireNonNull(builder.weight, "weight is required");
            this.description = builder.description;
            this.overlayMode = builder.overlayMode;
            this.priority = builder.priority;
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
        public final java.lang.Object getRouteSource() {
            return this.routeSource;
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
        public final java.lang.Object getPriority() {
            return this.priority;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("nextHop", om.valueToTree(this.getNextHop()));
            data.set("publishVpc", om.valueToTree(this.getPublishVpc()));
            data.set("routeDest", om.valueToTree(this.getRouteDest()));
            data.set("routeSource", om.valueToTree(this.getRouteSource()));
            data.set("vpnGatewayId", om.valueToTree(this.getVpnGatewayId()));
            data.set("weight", om.valueToTree(this.getWeight()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getOverlayMode() != null) {
                data.set("overlayMode", om.valueToTree(this.getOverlayMode()));
            }
            if (this.getPriority() != null) {
                data.set("priority", om.valueToTree(this.getPriority()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVpnPbrRouteEntryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVpnPbrRouteEntryProps.Jsii$Proxy that = (RosVpnPbrRouteEntryProps.Jsii$Proxy) o;

            if (!nextHop.equals(that.nextHop)) return false;
            if (!publishVpc.equals(that.publishVpc)) return false;
            if (!routeDest.equals(that.routeDest)) return false;
            if (!routeSource.equals(that.routeSource)) return false;
            if (!vpnGatewayId.equals(that.vpnGatewayId)) return false;
            if (!weight.equals(that.weight)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.overlayMode != null ? !this.overlayMode.equals(that.overlayMode) : that.overlayMode != null) return false;
            return this.priority != null ? this.priority.equals(that.priority) : that.priority == null;
        }

        @Override
        public final int hashCode() {
            int result = this.nextHop.hashCode();
            result = 31 * result + (this.publishVpc.hashCode());
            result = 31 * result + (this.routeDest.hashCode());
            result = 31 * result + (this.routeSource.hashCode());
            result = 31 * result + (this.vpnGatewayId.hashCode());
            result = 31 * result + (this.weight.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.overlayMode != null ? this.overlayMode.hashCode() : 0);
            result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
            return result;
        }
    }
}
