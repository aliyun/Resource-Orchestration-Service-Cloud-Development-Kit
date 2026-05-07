package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>TransitRouterCidr</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutercidr
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.431Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterCidrProps")
@software.amazon.jsii.Jsii.Proxy(TransitRouterCidrProps.Jsii$Proxy.class)
public interface TransitRouterCidrProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property cidr: The CIDR block of the transit router.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCidr();

    /**
     * Property transitRouterId: The ID of the transit router.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterId();

    /**
     * Property description: The new description of the transit router CIDR block.
     * <p>
     * The description must be 1 to 256 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property publishCidrRoute: Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.
     * <p>
     * <ul>
     * <li>true (default)
     * If you set the value to true, after you create a VPN attachment on a private VPN gateway and enable route learning for the VPN attachment, the system automatically adds the following route to the route table of the transit router that is in route learning relationship with the VPN attachment:
     * A blackhole route whose destination CIDR block is the transit router CIDR block, which refers to the CIDR block from which gateway IP addresses are allocated to the IPsec-VPN connection. The blackhole route is advertised only to the route tables of virtual border routers (VBRs) connected to the transit router.</li>
     * <li>false.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPublishCidrRoute() {
        return null;
    }

    /**
     * Property transitRouterCidrName: The new name of the transit router CIDR block.
     * <p>
     * The name must be 1 to 128 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterCidrName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TransitRouterCidrProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TransitRouterCidrProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TransitRouterCidrProps> {
        java.lang.Object cidr;
        java.lang.Object transitRouterId;
        java.lang.Object description;
        java.lang.Object publishCidrRoute;
        java.lang.Object transitRouterCidrName;

        /**
         * Sets the value of {@link TransitRouterCidrProps#getCidr}
         * @param cidr Property cidr: The CIDR block of the transit router. This parameter is required.
         * @return {@code this}
         */
        public Builder cidr(java.lang.String cidr) {
            this.cidr = cidr;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterCidrProps#getCidr}
         * @param cidr Property cidr: The CIDR block of the transit router. This parameter is required.
         * @return {@code this}
         */
        public Builder cidr(com.aliyun.ros.cdk.core.IResolvable cidr) {
            this.cidr = cidr;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterCidrProps#getTransitRouterId}
         * @param transitRouterId Property transitRouterId: The ID of the transit router. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterId(java.lang.String transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterCidrProps#getTransitRouterId}
         * @param transitRouterId Property transitRouterId: The ID of the transit router. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterId(com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterCidrProps#getDescription}
         * @param description Property description: The new description of the transit router CIDR block.
         *                    The description must be 1 to 256 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterCidrProps#getDescription}
         * @param description Property description: The new description of the transit router CIDR block.
         *                    The description must be 1 to 256 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterCidrProps#getPublishCidrRoute}
         * @param publishCidrRoute Property publishCidrRoute: Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.
         *                         <ul>
         *                         <li>true (default)
         *                         If you set the value to true, after you create a VPN attachment on a private VPN gateway and enable route learning for the VPN attachment, the system automatically adds the following route to the route table of the transit router that is in route learning relationship with the VPN attachment:
         *                         A blackhole route whose destination CIDR block is the transit router CIDR block, which refers to the CIDR block from which gateway IP addresses are allocated to the IPsec-VPN connection. The blackhole route is advertised only to the route tables of virtual border routers (VBRs) connected to the transit router.</li>
         *                         <li>false.</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder publishCidrRoute(java.lang.Boolean publishCidrRoute) {
            this.publishCidrRoute = publishCidrRoute;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterCidrProps#getPublishCidrRoute}
         * @param publishCidrRoute Property publishCidrRoute: Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.
         *                         <ul>
         *                         <li>true (default)
         *                         If you set the value to true, after you create a VPN attachment on a private VPN gateway and enable route learning for the VPN attachment, the system automatically adds the following route to the route table of the transit router that is in route learning relationship with the VPN attachment:
         *                         A blackhole route whose destination CIDR block is the transit router CIDR block, which refers to the CIDR block from which gateway IP addresses are allocated to the IPsec-VPN connection. The blackhole route is advertised only to the route tables of virtual border routers (VBRs) connected to the transit router.</li>
         *                         <li>false.</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder publishCidrRoute(com.aliyun.ros.cdk.core.IResolvable publishCidrRoute) {
            this.publishCidrRoute = publishCidrRoute;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterCidrProps#getTransitRouterCidrName}
         * @param transitRouterCidrName Property transitRouterCidrName: The new name of the transit router CIDR block.
         *                              The name must be 1 to 128 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.
         * @return {@code this}
         */
        public Builder transitRouterCidrName(java.lang.String transitRouterCidrName) {
            this.transitRouterCidrName = transitRouterCidrName;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterCidrProps#getTransitRouterCidrName}
         * @param transitRouterCidrName Property transitRouterCidrName: The new name of the transit router CIDR block.
         *                              The name must be 1 to 128 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.
         * @return {@code this}
         */
        public Builder transitRouterCidrName(com.aliyun.ros.cdk.core.IResolvable transitRouterCidrName) {
            this.transitRouterCidrName = transitRouterCidrName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TransitRouterCidrProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TransitRouterCidrProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TransitRouterCidrProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TransitRouterCidrProps {
        private final java.lang.Object cidr;
        private final java.lang.Object transitRouterId;
        private final java.lang.Object description;
        private final java.lang.Object publishCidrRoute;
        private final java.lang.Object transitRouterCidrName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cidr = software.amazon.jsii.Kernel.get(this, "cidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterId = software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.publishCidrRoute = software.amazon.jsii.Kernel.get(this, "publishCidrRoute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterCidrName = software.amazon.jsii.Kernel.get(this, "transitRouterCidrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cidr = java.util.Objects.requireNonNull(builder.cidr, "cidr is required");
            this.transitRouterId = java.util.Objects.requireNonNull(builder.transitRouterId, "transitRouterId is required");
            this.description = builder.description;
            this.publishCidrRoute = builder.publishCidrRoute;
            this.transitRouterCidrName = builder.transitRouterCidrName;
        }

        @Override
        public final java.lang.Object getCidr() {
            return this.cidr;
        }

        @Override
        public final java.lang.Object getTransitRouterId() {
            return this.transitRouterId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getPublishCidrRoute() {
            return this.publishCidrRoute;
        }

        @Override
        public final java.lang.Object getTransitRouterCidrName() {
            return this.transitRouterCidrName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cidr", om.valueToTree(this.getCidr()));
            data.set("transitRouterId", om.valueToTree(this.getTransitRouterId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getPublishCidrRoute() != null) {
                data.set("publishCidrRoute", om.valueToTree(this.getPublishCidrRoute()));
            }
            if (this.getTransitRouterCidrName() != null) {
                data.set("transitRouterCidrName", om.valueToTree(this.getTransitRouterCidrName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.TransitRouterCidrProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TransitRouterCidrProps.Jsii$Proxy that = (TransitRouterCidrProps.Jsii$Proxy) o;

            if (!cidr.equals(that.cidr)) return false;
            if (!transitRouterId.equals(that.transitRouterId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.publishCidrRoute != null ? !this.publishCidrRoute.equals(that.publishCidrRoute) : that.publishCidrRoute != null) return false;
            return this.transitRouterCidrName != null ? this.transitRouterCidrName.equals(that.transitRouterCidrName) : that.transitRouterCidrName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cidr.hashCode();
            result = 31 * result + (this.transitRouterId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.publishCidrRoute != null ? this.publishCidrRoute.hashCode() : 0);
            result = 31 * result + (this.transitRouterCidrName != null ? this.transitRouterCidrName.hashCode() : 0);
            return result;
        }
    }
}
