package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RouteTable</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:55.121Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RouteTableProps")
@software.amazon.jsii.Jsii.Proxy(RouteTableProps.Jsii$Proxy.class)
public interface RouteTableProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property routeTableId: The ID of the routing table.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouteTableId();

    /**
     * @return a {@link Builder} of {@link RouteTableProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RouteTableProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RouteTableProps> {
        java.lang.Object routeTableId;

        /**
         * Sets the value of {@link RouteTableProps#getRouteTableId}
         * @param routeTableId Property routeTableId: The ID of the routing table. This parameter is required.
         * @return {@code this}
         */
        public Builder routeTableId(java.lang.String routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link RouteTableProps#getRouteTableId}
         * @param routeTableId Property routeTableId: The ID of the routing table. This parameter is required.
         * @return {@code this}
         */
        public Builder routeTableId(com.aliyun.ros.cdk.core.IResolvable routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RouteTableProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RouteTableProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RouteTableProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RouteTableProps {
        private final java.lang.Object routeTableId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.routeTableId = software.amazon.jsii.Kernel.get(this, "routeTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.routeTableId = java.util.Objects.requireNonNull(builder.routeTableId, "routeTableId is required");
        }

        @Override
        public final java.lang.Object getRouteTableId() {
            return this.routeTableId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("routeTableId", om.valueToTree(this.getRouteTableId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RouteTableProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RouteTableProps.Jsii$Proxy that = (RouteTableProps.Jsii$Proxy) o;

            return this.routeTableId.equals(that.routeTableId);
        }

        @Override
        public final int hashCode() {
            int result = this.routeTableId.hashCode();
            return result;
        }
    }
}
