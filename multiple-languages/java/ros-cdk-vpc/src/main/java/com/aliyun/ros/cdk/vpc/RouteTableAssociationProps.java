package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RouteTableAssociation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetableassociation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:43.173Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RouteTableAssociationProps")
@software.amazon.jsii.Jsii.Proxy(RouteTableAssociationProps.Jsii$Proxy.class)
public interface RouteTableAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property routeTableId: The ID of the route table.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouteTableId();

    /**
     * Property vSwitchId: The ID of the VSwitch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * @return a {@link Builder} of {@link RouteTableAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RouteTableAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RouteTableAssociationProps> {
        java.lang.Object routeTableId;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link RouteTableAssociationProps#getRouteTableId}
         * @param routeTableId Property routeTableId: The ID of the route table. This parameter is required.
         * @return {@code this}
         */
        public Builder routeTableId(java.lang.String routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link RouteTableAssociationProps#getRouteTableId}
         * @param routeTableId Property routeTableId: The ID of the route table. This parameter is required.
         * @return {@code this}
         */
        public Builder routeTableId(com.aliyun.ros.cdk.core.IResolvable routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link RouteTableAssociationProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RouteTableAssociationProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RouteTableAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RouteTableAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RouteTableAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RouteTableAssociationProps {
        private final java.lang.Object routeTableId;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.routeTableId = software.amazon.jsii.Kernel.get(this, "routeTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.routeTableId = java.util.Objects.requireNonNull(builder.routeTableId, "routeTableId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
        }

        @Override
        public final java.lang.Object getRouteTableId() {
            return this.routeTableId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("routeTableId", om.valueToTree(this.getRouteTableId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RouteTableAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RouteTableAssociationProps.Jsii$Proxy that = (RouteTableAssociationProps.Jsii$Proxy) o;

            if (!routeTableId.equals(that.routeTableId)) return false;
            return this.vSwitchId.equals(that.vSwitchId);
        }

        @Override
        public final int hashCode() {
            int result = this.routeTableId.hashCode();
            result = 31 * result + (this.vSwitchId.hashCode());
            return result;
        }
    }
}
