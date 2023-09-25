package com.aliyun.ros.cdk.cen.datasource;

/**
 * Properties for defining a <code>DATASOURCE::CEN::CenRouteMaps</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:23.745Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.datasource.RosCenRouteMapsProps")
@software.amazon.jsii.Jsii.Proxy(RosCenRouteMapsProps.Jsii$Proxy.class)
public interface RosCenRouteMapsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCenRegionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteMapId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterRouteTableId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransmitDirection() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCenRouteMapsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCenRouteMapsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCenRouteMapsProps> {
        java.lang.Object cenId;
        java.lang.Object cenRegionId;
        java.lang.Object routeMapId;
        java.lang.Object transitRouterRouteTableId;
        java.lang.Object transmitDirection;

        /**
         * Sets the value of {@link RosCenRouteMapsProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapsProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapsProps#getCenRegionId}
         * @param cenRegionId the value to be set.
         * @return {@code this}
         */
        public Builder cenRegionId(java.lang.String cenRegionId) {
            this.cenRegionId = cenRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapsProps#getCenRegionId}
         * @param cenRegionId the value to be set.
         * @return {@code this}
         */
        public Builder cenRegionId(com.aliyun.ros.cdk.core.IResolvable cenRegionId) {
            this.cenRegionId = cenRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapsProps#getRouteMapId}
         * @param routeMapId the value to be set.
         * @return {@code this}
         */
        public Builder routeMapId(java.lang.String routeMapId) {
            this.routeMapId = routeMapId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapsProps#getRouteMapId}
         * @param routeMapId the value to be set.
         * @return {@code this}
         */
        public Builder routeMapId(com.aliyun.ros.cdk.core.IResolvable routeMapId) {
            this.routeMapId = routeMapId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapsProps#getTransitRouterRouteTableId}
         * @param transitRouterRouteTableId the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterRouteTableId(java.lang.String transitRouterRouteTableId) {
            this.transitRouterRouteTableId = transitRouterRouteTableId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapsProps#getTransitRouterRouteTableId}
         * @param transitRouterRouteTableId the value to be set.
         * @return {@code this}
         */
        public Builder transitRouterRouteTableId(com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableId) {
            this.transitRouterRouteTableId = transitRouterRouteTableId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapsProps#getTransmitDirection}
         * @param transmitDirection the value to be set.
         * @return {@code this}
         */
        public Builder transmitDirection(java.lang.String transmitDirection) {
            this.transmitDirection = transmitDirection;
            return this;
        }

        /**
         * Sets the value of {@link RosCenRouteMapsProps#getTransmitDirection}
         * @param transmitDirection the value to be set.
         * @return {@code this}
         */
        public Builder transmitDirection(com.aliyun.ros.cdk.core.IResolvable transmitDirection) {
            this.transmitDirection = transmitDirection;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCenRouteMapsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCenRouteMapsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCenRouteMapsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCenRouteMapsProps {
        private final java.lang.Object cenId;
        private final java.lang.Object cenRegionId;
        private final java.lang.Object routeMapId;
        private final java.lang.Object transitRouterRouteTableId;
        private final java.lang.Object transmitDirection;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenRegionId = software.amazon.jsii.Kernel.get(this, "cenRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeMapId = software.amazon.jsii.Kernel.get(this, "routeMapId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterRouteTableId = software.amazon.jsii.Kernel.get(this, "transitRouterRouteTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transmitDirection = software.amazon.jsii.Kernel.get(this, "transmitDirection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = java.util.Objects.requireNonNull(builder.cenId, "cenId is required");
            this.cenRegionId = builder.cenRegionId;
            this.routeMapId = builder.routeMapId;
            this.transitRouterRouteTableId = builder.transitRouterRouteTableId;
            this.transmitDirection = builder.transmitDirection;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getCenRegionId() {
            return this.cenRegionId;
        }

        @Override
        public final java.lang.Object getRouteMapId() {
            return this.routeMapId;
        }

        @Override
        public final java.lang.Object getTransitRouterRouteTableId() {
            return this.transitRouterRouteTableId;
        }

        @Override
        public final java.lang.Object getTransmitDirection() {
            return this.transmitDirection;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cenId", om.valueToTree(this.getCenId()));
            if (this.getCenRegionId() != null) {
                data.set("cenRegionId", om.valueToTree(this.getCenRegionId()));
            }
            if (this.getRouteMapId() != null) {
                data.set("routeMapId", om.valueToTree(this.getRouteMapId()));
            }
            if (this.getTransitRouterRouteTableId() != null) {
                data.set("transitRouterRouteTableId", om.valueToTree(this.getTransitRouterRouteTableId()));
            }
            if (this.getTransmitDirection() != null) {
                data.set("transmitDirection", om.valueToTree(this.getTransmitDirection()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.datasource.RosCenRouteMapsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCenRouteMapsProps.Jsii$Proxy that = (RosCenRouteMapsProps.Jsii$Proxy) o;

            if (!cenId.equals(that.cenId)) return false;
            if (this.cenRegionId != null ? !this.cenRegionId.equals(that.cenRegionId) : that.cenRegionId != null) return false;
            if (this.routeMapId != null ? !this.routeMapId.equals(that.routeMapId) : that.routeMapId != null) return false;
            if (this.transitRouterRouteTableId != null ? !this.transitRouterRouteTableId.equals(that.transitRouterRouteTableId) : that.transitRouterRouteTableId != null) return false;
            return this.transmitDirection != null ? this.transmitDirection.equals(that.transmitDirection) : that.transmitDirection == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cenId.hashCode();
            result = 31 * result + (this.cenRegionId != null ? this.cenRegionId.hashCode() : 0);
            result = 31 * result + (this.routeMapId != null ? this.routeMapId.hashCode() : 0);
            result = 31 * result + (this.transitRouterRouteTableId != null ? this.transitRouterRouteTableId.hashCode() : 0);
            result = 31 * result + (this.transmitDirection != null ? this.transmitDirection.hashCode() : 0);
            return result;
        }
    }
}
