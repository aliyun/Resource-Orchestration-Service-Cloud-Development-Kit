package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>Route</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-route
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:09.390Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RouteProps")
@software.amazon.jsii.Jsii.Proxy(RouteProps.Jsii$Proxy.class)
public interface RouteProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property destinationCidrBlock: The RouteEntry's target network segment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationCidrBlock();

    /**
     * Property routeTableId: RouteTableId of created route entry.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouteTableId();

    /**
     * Property nextHopId: The route entry's next hop.
     * <p>
     * When the NextHopList is specified, the value will be ignored.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNextHopId() {
        return null;
    }

    /**
     * Property nextHopList: The route entry's next hop list.
     * <p>
     * If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNextHopList() {
        return null;
    }

    /**
     * Property nextHopType: The next hop type.
     * <p>
     * Now support 'Instance|HaVip|RouterInterface|NetworkInterface|VpnGateway|IPv6Gateway|NatGateway|Attachment'. The default value is Instance.When the NextHopList is specified, the value will be ignored.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNextHopType() {
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
        java.lang.Object destinationCidrBlock;
        java.lang.Object routeTableId;
        java.lang.Object nextHopId;
        java.lang.Object nextHopList;
        java.lang.Object nextHopType;

        /**
         * Sets the value of {@link RouteProps#getDestinationCidrBlock}
         * @param destinationCidrBlock Property destinationCidrBlock: The RouteEntry's target network segment. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationCidrBlock(java.lang.String destinationCidrBlock) {
            this.destinationCidrBlock = destinationCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getDestinationCidrBlock}
         * @param destinationCidrBlock Property destinationCidrBlock: The RouteEntry's target network segment. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationCidrBlock(com.aliyun.ros.cdk.core.IResolvable destinationCidrBlock) {
            this.destinationCidrBlock = destinationCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getRouteTableId}
         * @param routeTableId Property routeTableId: RouteTableId of created route entry. This parameter is required.
         * @return {@code this}
         */
        public Builder routeTableId(java.lang.String routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getRouteTableId}
         * @param routeTableId Property routeTableId: RouteTableId of created route entry. This parameter is required.
         * @return {@code this}
         */
        public Builder routeTableId(com.aliyun.ros.cdk.core.IResolvable routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getNextHopId}
         * @param nextHopId Property nextHopId: The route entry's next hop.
         *                  When the NextHopList is specified, the value will be ignored.
         * @return {@code this}
         */
        public Builder nextHopId(java.lang.String nextHopId) {
            this.nextHopId = nextHopId;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getNextHopId}
         * @param nextHopId Property nextHopId: The route entry's next hop.
         *                  When the NextHopList is specified, the value will be ignored.
         * @return {@code this}
         */
        public Builder nextHopId(com.aliyun.ros.cdk.core.IResolvable nextHopId) {
            this.nextHopId = nextHopId;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getNextHopList}
         * @param nextHopList Property nextHopList: The route entry's next hop list.
         *                    If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
         * @return {@code this}
         */
        public Builder nextHopList(com.aliyun.ros.cdk.core.IResolvable nextHopList) {
            this.nextHopList = nextHopList;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getNextHopList}
         * @param nextHopList Property nextHopList: The route entry's next hop list.
         *                    If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
         * @return {@code this}
         */
        public Builder nextHopList(java.util.List<? extends java.lang.Object> nextHopList) {
            this.nextHopList = nextHopList;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getNextHopType}
         * @param nextHopType Property nextHopType: The next hop type.
         *                    Now support 'Instance|HaVip|RouterInterface|NetworkInterface|VpnGateway|IPv6Gateway|NatGateway|Attachment'. The default value is Instance.When the NextHopList is specified, the value will be ignored.
         * @return {@code this}
         */
        public Builder nextHopType(java.lang.String nextHopType) {
            this.nextHopType = nextHopType;
            return this;
        }

        /**
         * Sets the value of {@link RouteProps#getNextHopType}
         * @param nextHopType Property nextHopType: The next hop type.
         *                    Now support 'Instance|HaVip|RouterInterface|NetworkInterface|VpnGateway|IPv6Gateway|NatGateway|Attachment'. The default value is Instance.When the NextHopList is specified, the value will be ignored.
         * @return {@code this}
         */
        public Builder nextHopType(com.aliyun.ros.cdk.core.IResolvable nextHopType) {
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
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RouteProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RouteProps {
        private final java.lang.Object destinationCidrBlock;
        private final java.lang.Object routeTableId;
        private final java.lang.Object nextHopId;
        private final java.lang.Object nextHopList;
        private final java.lang.Object nextHopType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.destinationCidrBlock = software.amazon.jsii.Kernel.get(this, "destinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTableId = software.amazon.jsii.Kernel.get(this, "routeTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nextHopId = software.amazon.jsii.Kernel.get(this, "nextHopId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nextHopList = software.amazon.jsii.Kernel.get(this, "nextHopList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nextHopType = software.amazon.jsii.Kernel.get(this, "nextHopType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.destinationCidrBlock = java.util.Objects.requireNonNull(builder.destinationCidrBlock, "destinationCidrBlock is required");
            this.routeTableId = java.util.Objects.requireNonNull(builder.routeTableId, "routeTableId is required");
            this.nextHopId = builder.nextHopId;
            this.nextHopList = builder.nextHopList;
            this.nextHopType = builder.nextHopType;
        }

        @Override
        public final java.lang.Object getDestinationCidrBlock() {
            return this.destinationCidrBlock;
        }

        @Override
        public final java.lang.Object getRouteTableId() {
            return this.routeTableId;
        }

        @Override
        public final java.lang.Object getNextHopId() {
            return this.nextHopId;
        }

        @Override
        public final java.lang.Object getNextHopList() {
            return this.nextHopList;
        }

        @Override
        public final java.lang.Object getNextHopType() {
            return this.nextHopType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("destinationCidrBlock", om.valueToTree(this.getDestinationCidrBlock()));
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
            if (!routeTableId.equals(that.routeTableId)) return false;
            if (this.nextHopId != null ? !this.nextHopId.equals(that.nextHopId) : that.nextHopId != null) return false;
            if (this.nextHopList != null ? !this.nextHopList.equals(that.nextHopList) : that.nextHopList != null) return false;
            return this.nextHopType != null ? this.nextHopType.equals(that.nextHopType) : that.nextHopType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.destinationCidrBlock.hashCode();
            result = 31 * result + (this.routeTableId.hashCode());
            result = 31 * result + (this.nextHopId != null ? this.nextHopId.hashCode() : 0);
            result = 31 * result + (this.nextHopList != null ? this.nextHopList.hashCode() : 0);
            result = 31 * result + (this.nextHopType != null ? this.nextHopType.hashCode() : 0);
            return result;
        }
    }
}
