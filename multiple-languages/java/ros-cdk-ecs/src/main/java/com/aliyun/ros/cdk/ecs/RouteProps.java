package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::Route`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.805Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RouteProps")
@software.amazon.jsii.Jsii.Proxy(RouteProps.Jsii$Proxy.class)
public interface RouteProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDestinationCidrBlock();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRouteId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRouteTableId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getNextHopId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNextHopList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getNextHopType() {
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
        private java.lang.String destinationCidrBlock;
        private java.lang.String routeId;
        private java.lang.String routeTableId;
        private java.lang.String nextHopId;
        private java.lang.Object nextHopList;
        private java.lang.String nextHopType;

        /**
         * Sets the value of {@link RouteProps#getDestinationCidrBlock}
         * @param destinationCidrBlock the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationCidrBlock(java.lang.String destinationCidrBlock) {
            this.destinationCidrBlock = destinationCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getRouteId}
         * @param routeId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeId(java.lang.String routeId) {
            this.routeId = routeId;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getRouteTableId}
         * @param routeTableId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeTableId(java.lang.String routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getNextHopId}
         * @param nextHopId the value to be set.
         * @return {@code this}
         */
        public Builder nextHopId(java.lang.String nextHopId) {
            this.nextHopId = nextHopId;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getNextHopList}
         * @param nextHopList the value to be set.
         * @return {@code this}
         */
        public Builder nextHopList(com.aliyun.ros.cdk.core.IResolvable nextHopList) {
            this.nextHopList = nextHopList;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getNextHopList}
         * @param nextHopList the value to be set.
         * @return {@code this}
         */
        public Builder nextHopList(java.util.List<? extends java.lang.Object> nextHopList) {
            this.nextHopList = nextHopList;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getNextHopType}
         * @param nextHopType the value to be set.
         * @return {@code this}
         */
        public Builder nextHopType(java.lang.String nextHopType) {
            this.nextHopType = nextHopType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RouteProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RouteProps build() {
            return new Jsii$Proxy(destinationCidrBlock, routeId, routeTableId, nextHopId, nextHopList, nextHopType);
        }
    }

    /**
     * An implementation for {@link RouteProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RouteProps {
        private final java.lang.String destinationCidrBlock;
        private final java.lang.String routeId;
        private final java.lang.String routeTableId;
        private final java.lang.String nextHopId;
        private final java.lang.Object nextHopList;
        private final java.lang.String nextHopType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.destinationCidrBlock = software.amazon.jsii.Kernel.get(this, "destinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.routeId = software.amazon.jsii.Kernel.get(this, "routeId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.routeTableId = software.amazon.jsii.Kernel.get(this, "routeTableId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.nextHopId = software.amazon.jsii.Kernel.get(this, "nextHopId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.nextHopList = software.amazon.jsii.Kernel.get(this, "nextHopList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nextHopType = software.amazon.jsii.Kernel.get(this, "nextHopType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String destinationCidrBlock, final java.lang.String routeId, final java.lang.String routeTableId, final java.lang.String nextHopId, final java.lang.Object nextHopList, final java.lang.String nextHopType) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.destinationCidrBlock = java.util.Objects.requireNonNull(destinationCidrBlock, "destinationCidrBlock is required");
            this.routeId = java.util.Objects.requireNonNull(routeId, "routeId is required");
            this.routeTableId = java.util.Objects.requireNonNull(routeTableId, "routeTableId is required");
            this.nextHopId = nextHopId;
            this.nextHopList = nextHopList;
            this.nextHopType = nextHopType;
        }

        @Override
        public final java.lang.String getDestinationCidrBlock() {
            return this.destinationCidrBlock;
        }

        @Override
        public final java.lang.String getRouteId() {
            return this.routeId;
        }

        @Override
        public final java.lang.String getRouteTableId() {
            return this.routeTableId;
        }

        @Override
        public final java.lang.String getNextHopId() {
            return this.nextHopId;
        }

        @Override
        public final java.lang.Object getNextHopList() {
            return this.nextHopList;
        }

        @Override
        public final java.lang.String getNextHopType() {
            return this.nextHopType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("destinationCidrBlock", om.valueToTree(this.getDestinationCidrBlock()));
            data.set("routeId", om.valueToTree(this.getRouteId()));
            data.set("routeTableId", om.valueToTree(this.getRouteTableId()));
            if (this.getNextHopId() != null) {
                data.set("nextHopId", om.valueToTree(this.getNextHopId()));
            }
            if (this.getNextHopList() != null) {
                data.set("nextHopList", om.valueToTree(this.getNextHopList()));
            }
            if (this.getNextHopType() != null) {
                data.set("nextHopType", om.valueToTree(this.getNextHopType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RouteProps"));
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

            if (!destinationCidrBlock.equals(that.destinationCidrBlock)) return false;
            if (!routeId.equals(that.routeId)) return false;
            if (!routeTableId.equals(that.routeTableId)) return false;
            if (this.nextHopId != null ? !this.nextHopId.equals(that.nextHopId) : that.nextHopId != null) return false;
            if (this.nextHopList != null ? !this.nextHopList.equals(that.nextHopList) : that.nextHopList != null) return false;
            return this.nextHopType != null ? this.nextHopType.equals(that.nextHopType) : that.nextHopType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.destinationCidrBlock.hashCode();
            result = 31 * result + (this.routeId.hashCode());
            result = 31 * result + (this.routeTableId.hashCode());
            result = 31 * result + (this.nextHopId != null ? this.nextHopId.hashCode() : 0);
            result = 31 * result + (this.nextHopList != null ? this.nextHopList.hashCode() : 0);
            result = 31 * result + (this.nextHopType != null ? this.nextHopType.hashCode() : 0);
            return result;
        }
    }
}
