package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RouteTables</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetables
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:18.142Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RouteTablesProps")
@software.amazon.jsii.Jsii.Proxy(RouteTablesProps.Jsii$Proxy.class)
public interface RouteTablesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property resourceGroupId: The ID of the resource group to which the route table belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property routerId: The ID of the VRouter to which the route table belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouterId() {
        return null;
    }

    /**
     * Property routerType: The type of the VRouter to which the route table belongs.
     * <p>
     * Valid values:
     * VRouter (default): VRouter.
     * VBR: Virtual Border Router (VBR).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouterType() {
        return null;
    }

    /**
     * Property routeTableId: The ID of the route table.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteTableId() {
        return null;
    }

    /**
     * Property routeTableName: The name of the route table.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteTableName() {
        return null;
    }

    /**
     * Property vpcId: The ID of the VRouter to which the route table belongs.
     * <p>
     * The value of the RouterType parameter is set to VRouter automatically when this parameter is specified.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RouteTablesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RouteTablesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RouteTablesProps> {
        java.lang.Object resourceGroupId;
        java.lang.Object routerId;
        java.lang.Object routerType;
        java.lang.Object routeTableId;
        java.lang.Object routeTableName;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link RouteTablesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the route table belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RouteTablesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the route table belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RouteTablesProps#getRouterId}
         * @param routerId Property routerId: The ID of the VRouter to which the route table belongs.
         * @return {@code this}
         */
        public Builder routerId(java.lang.String routerId) {
            this.routerId = routerId;
            return this;
        }

        /**
         * Sets the value of {@link RouteTablesProps#getRouterId}
         * @param routerId Property routerId: The ID of the VRouter to which the route table belongs.
         * @return {@code this}
         */
        public Builder routerId(com.aliyun.ros.cdk.core.IResolvable routerId) {
            this.routerId = routerId;
            return this;
        }

        /**
         * Sets the value of {@link RouteTablesProps#getRouterType}
         * @param routerType Property routerType: The type of the VRouter to which the route table belongs.
         *                   Valid values:
         *                   VRouter (default): VRouter.
         *                   VBR: Virtual Border Router (VBR).
         * @return {@code this}
         */
        public Builder routerType(java.lang.String routerType) {
            this.routerType = routerType;
            return this;
        }

        /**
         * Sets the value of {@link RouteTablesProps#getRouterType}
         * @param routerType Property routerType: The type of the VRouter to which the route table belongs.
         *                   Valid values:
         *                   VRouter (default): VRouter.
         *                   VBR: Virtual Border Router (VBR).
         * @return {@code this}
         */
        public Builder routerType(com.aliyun.ros.cdk.core.IResolvable routerType) {
            this.routerType = routerType;
            return this;
        }

        /**
         * Sets the value of {@link RouteTablesProps#getRouteTableId}
         * @param routeTableId Property routeTableId: The ID of the route table.
         * @return {@code this}
         */
        public Builder routeTableId(java.lang.String routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link RouteTablesProps#getRouteTableId}
         * @param routeTableId Property routeTableId: The ID of the route table.
         * @return {@code this}
         */
        public Builder routeTableId(com.aliyun.ros.cdk.core.IResolvable routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link RouteTablesProps#getRouteTableName}
         * @param routeTableName Property routeTableName: The name of the route table.
         * @return {@code this}
         */
        public Builder routeTableName(java.lang.String routeTableName) {
            this.routeTableName = routeTableName;
            return this;
        }

        /**
         * Sets the value of {@link RouteTablesProps#getRouteTableName}
         * @param routeTableName Property routeTableName: The name of the route table.
         * @return {@code this}
         */
        public Builder routeTableName(com.aliyun.ros.cdk.core.IResolvable routeTableName) {
            this.routeTableName = routeTableName;
            return this;
        }

        /**
         * Sets the value of {@link RouteTablesProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VRouter to which the route table belongs.
         *              The value of the RouterType parameter is set to VRouter automatically when this parameter is specified.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RouteTablesProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VRouter to which the route table belongs.
         *              The value of the RouterType parameter is set to VRouter automatically when this parameter is specified.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RouteTablesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RouteTablesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RouteTablesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RouteTablesProps {
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object routerId;
        private final java.lang.Object routerType;
        private final java.lang.Object routeTableId;
        private final java.lang.Object routeTableName;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routerId = software.amazon.jsii.Kernel.get(this, "routerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routerType = software.amazon.jsii.Kernel.get(this, "routerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTableId = software.amazon.jsii.Kernel.get(this, "routeTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTableName = software.amazon.jsii.Kernel.get(this, "routeTableName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.resourceGroupId = builder.resourceGroupId;
            this.routerId = builder.routerId;
            this.routerType = builder.routerType;
            this.routeTableId = builder.routeTableId;
            this.routeTableName = builder.routeTableName;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRouterId() {
            return this.routerId;
        }

        @Override
        public final java.lang.Object getRouterType() {
            return this.routerType;
        }

        @Override
        public final java.lang.Object getRouteTableId() {
            return this.routeTableId;
        }

        @Override
        public final java.lang.Object getRouteTableName() {
            return this.routeTableName;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRouterId() != null) {
                data.set("routerId", om.valueToTree(this.getRouterId()));
            }
            if (this.getRouterType() != null) {
                data.set("routerType", om.valueToTree(this.getRouterType()));
            }
            if (this.getRouteTableId() != null) {
                data.set("routeTableId", om.valueToTree(this.getRouteTableId()));
            }
            if (this.getRouteTableName() != null) {
                data.set("routeTableName", om.valueToTree(this.getRouteTableName()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RouteTablesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RouteTablesProps.Jsii$Proxy that = (RouteTablesProps.Jsii$Proxy) o;

            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.routerId != null ? !this.routerId.equals(that.routerId) : that.routerId != null) return false;
            if (this.routerType != null ? !this.routerType.equals(that.routerType) : that.routerType != null) return false;
            if (this.routeTableId != null ? !this.routeTableId.equals(that.routeTableId) : that.routeTableId != null) return false;
            if (this.routeTableName != null ? !this.routeTableName.equals(that.routeTableName) : that.routeTableName != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0;
            result = 31 * result + (this.routerId != null ? this.routerId.hashCode() : 0);
            result = 31 * result + (this.routerType != null ? this.routerType.hashCode() : 0);
            result = 31 * result + (this.routeTableId != null ? this.routeTableId.hashCode() : 0);
            result = 31 * result + (this.routeTableName != null ? this.routeTableName.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
