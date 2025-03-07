package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RosRouteTables</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetables
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.863Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosRouteTablesProps")
@software.amazon.jsii.Jsii.Proxy(RosRouteTablesProps.Jsii$Proxy.class)
public interface RosRouteTablesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouterId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouterType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteTableId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteTableName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRouteTablesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRouteTablesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRouteTablesProps> {
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;
        java.lang.Object routerId;
        java.lang.Object routerType;
        java.lang.Object routeTableId;
        java.lang.Object routeTableName;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link RosRouteTablesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTablesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTablesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTablesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTablesProps#getRouterId}
         * @param routerId the value to be set.
         * @return {@code this}
         */
        public Builder routerId(java.lang.String routerId) {
            this.routerId = routerId;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTablesProps#getRouterId}
         * @param routerId the value to be set.
         * @return {@code this}
         */
        public Builder routerId(com.aliyun.ros.cdk.core.IResolvable routerId) {
            this.routerId = routerId;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTablesProps#getRouterType}
         * @param routerType the value to be set.
         * @return {@code this}
         */
        public Builder routerType(java.lang.String routerType) {
            this.routerType = routerType;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTablesProps#getRouterType}
         * @param routerType the value to be set.
         * @return {@code this}
         */
        public Builder routerType(com.aliyun.ros.cdk.core.IResolvable routerType) {
            this.routerType = routerType;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTablesProps#getRouteTableId}
         * @param routeTableId the value to be set.
         * @return {@code this}
         */
        public Builder routeTableId(java.lang.String routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTablesProps#getRouteTableId}
         * @param routeTableId the value to be set.
         * @return {@code this}
         */
        public Builder routeTableId(com.aliyun.ros.cdk.core.IResolvable routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTablesProps#getRouteTableName}
         * @param routeTableName the value to be set.
         * @return {@code this}
         */
        public Builder routeTableName(java.lang.String routeTableName) {
            this.routeTableName = routeTableName;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTablesProps#getRouteTableName}
         * @param routeTableName the value to be set.
         * @return {@code this}
         */
        public Builder routeTableName(com.aliyun.ros.cdk.core.IResolvable routeTableName) {
            this.routeTableName = routeTableName;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTablesProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTablesProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRouteTablesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRouteTablesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRouteTablesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRouteTablesProps {
        private final java.lang.Object refreshOptions;
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
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupId = builder.resourceGroupId;
            this.routerId = builder.routerId;
            this.routerType = builder.routerType;
            this.routeTableId = builder.routeTableId;
            this.routeTableName = builder.routeTableName;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
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

            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosRouteTablesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRouteTablesProps.Jsii$Proxy that = (RosRouteTablesProps.Jsii$Proxy) o;

            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.routerId != null ? !this.routerId.equals(that.routerId) : that.routerId != null) return false;
            if (this.routerType != null ? !this.routerType.equals(that.routerType) : that.routerType != null) return false;
            if (this.routeTableId != null ? !this.routeTableId.equals(that.routeTableId) : that.routeTableId != null) return false;
            if (this.routeTableName != null ? !this.routeTableName.equals(that.routeTableName) : that.routeTableName != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.refreshOptions != null ? this.refreshOptions.hashCode() : 0;
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.routerId != null ? this.routerId.hashCode() : 0);
            result = 31 * result + (this.routerType != null ? this.routerType.hashCode() : 0);
            result = 31 * result + (this.routeTableId != null ? this.routeTableId.hashCode() : 0);
            result = 31 * result + (this.routeTableName != null ? this.routeTableName.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
