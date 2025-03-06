package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosRouteTableWithGatewayAssociation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetablewithgatewayassociation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.458Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosRouteTableWithGatewayAssociationProps")
@software.amazon.jsii.Jsii.Proxy(RosRouteTableWithGatewayAssociationProps.Jsii$Proxy.class)
public interface RosRouteTableWithGatewayAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGatewayId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGatewayType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouteTableId();

    /**
     * @return a {@link Builder} of {@link RosRouteTableWithGatewayAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRouteTableWithGatewayAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRouteTableWithGatewayAssociationProps> {
        java.lang.Object gatewayId;
        java.lang.Object gatewayType;
        java.lang.Object routeTableId;

        /**
         * Sets the value of {@link RosRouteTableWithGatewayAssociationProps#getGatewayId}
         * @param gatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayId(java.lang.String gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTableWithGatewayAssociationProps#getGatewayId}
         * @param gatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayId(com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTableWithGatewayAssociationProps#getGatewayType}
         * @param gatewayType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayType(java.lang.String gatewayType) {
            this.gatewayType = gatewayType;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTableWithGatewayAssociationProps#getGatewayType}
         * @param gatewayType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayType(com.aliyun.ros.cdk.core.IResolvable gatewayType) {
            this.gatewayType = gatewayType;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTableWithGatewayAssociationProps#getRouteTableId}
         * @param routeTableId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeTableId(java.lang.String routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTableWithGatewayAssociationProps#getRouteTableId}
         * @param routeTableId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routeTableId(com.aliyun.ros.cdk.core.IResolvable routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRouteTableWithGatewayAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRouteTableWithGatewayAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRouteTableWithGatewayAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRouteTableWithGatewayAssociationProps {
        private final java.lang.Object gatewayId;
        private final java.lang.Object gatewayType;
        private final java.lang.Object routeTableId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.gatewayId = software.amazon.jsii.Kernel.get(this, "gatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gatewayType = software.amazon.jsii.Kernel.get(this, "gatewayType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTableId = software.amazon.jsii.Kernel.get(this, "routeTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.gatewayId = java.util.Objects.requireNonNull(builder.gatewayId, "gatewayId is required");
            this.gatewayType = java.util.Objects.requireNonNull(builder.gatewayType, "gatewayType is required");
            this.routeTableId = java.util.Objects.requireNonNull(builder.routeTableId, "routeTableId is required");
        }

        @Override
        public final java.lang.Object getGatewayId() {
            return this.gatewayId;
        }

        @Override
        public final java.lang.Object getGatewayType() {
            return this.gatewayType;
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

            data.set("gatewayId", om.valueToTree(this.getGatewayId()));
            data.set("gatewayType", om.valueToTree(this.getGatewayType()));
            data.set("routeTableId", om.valueToTree(this.getRouteTableId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosRouteTableWithGatewayAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRouteTableWithGatewayAssociationProps.Jsii$Proxy that = (RosRouteTableWithGatewayAssociationProps.Jsii$Proxy) o;

            if (!gatewayId.equals(that.gatewayId)) return false;
            if (!gatewayType.equals(that.gatewayType)) return false;
            return this.routeTableId.equals(that.routeTableId);
        }

        @Override
        public final int hashCode() {
            int result = this.gatewayId.hashCode();
            result = 31 * result + (this.gatewayType.hashCode());
            result = 31 * result + (this.routeTableId.hashCode());
            return result;
        }
    }
}
