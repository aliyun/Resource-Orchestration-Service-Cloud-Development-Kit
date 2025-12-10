package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosVpcGatewayEndpointAssociation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpointassociation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:01.155Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpcGatewayEndpointAssociationProps")
@software.amazon.jsii.Jsii.Proxy(RosVpcGatewayEndpointAssociationProps.Jsii$Proxy.class)
public interface RosVpcGatewayEndpointAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpointId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouteTableIds();

    /**
     * @return a {@link Builder} of {@link RosVpcGatewayEndpointAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVpcGatewayEndpointAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVpcGatewayEndpointAssociationProps> {
        java.lang.Object endpointId;
        java.lang.Object routeTableIds;

        /**
         * Sets the value of {@link RosVpcGatewayEndpointAssociationProps#getEndpointId}
         * @param endpointId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointId(java.lang.String endpointId) {
            this.endpointId = endpointId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcGatewayEndpointAssociationProps#getEndpointId}
         * @param endpointId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointId(com.aliyun.ros.cdk.core.IResolvable endpointId) {
            this.endpointId = endpointId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcGatewayEndpointAssociationProps#getRouteTableIds}
         * @param routeTableIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeTableIds(com.aliyun.ros.cdk.core.IResolvable routeTableIds) {
            this.routeTableIds = routeTableIds;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcGatewayEndpointAssociationProps#getRouteTableIds}
         * @param routeTableIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeTableIds(java.util.List<? extends java.lang.Object> routeTableIds) {
            this.routeTableIds = routeTableIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVpcGatewayEndpointAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVpcGatewayEndpointAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVpcGatewayEndpointAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVpcGatewayEndpointAssociationProps {
        private final java.lang.Object endpointId;
        private final java.lang.Object routeTableIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.endpointId = software.amazon.jsii.Kernel.get(this, "endpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTableIds = software.amazon.jsii.Kernel.get(this, "routeTableIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.endpointId = java.util.Objects.requireNonNull(builder.endpointId, "endpointId is required");
            this.routeTableIds = java.util.Objects.requireNonNull(builder.routeTableIds, "routeTableIds is required");
        }

        @Override
        public final java.lang.Object getEndpointId() {
            return this.endpointId;
        }

        @Override
        public final java.lang.Object getRouteTableIds() {
            return this.routeTableIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("endpointId", om.valueToTree(this.getEndpointId()));
            data.set("routeTableIds", om.valueToTree(this.getRouteTableIds()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVpcGatewayEndpointAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVpcGatewayEndpointAssociationProps.Jsii$Proxy that = (RosVpcGatewayEndpointAssociationProps.Jsii$Proxy) o;

            if (!endpointId.equals(that.endpointId)) return false;
            return this.routeTableIds.equals(that.routeTableIds);
        }

        @Override
        public final int hashCode() {
            int result = this.endpointId.hashCode();
            result = 31 * result + (this.routeTableIds.hashCode());
            return result;
        }
    }
}
