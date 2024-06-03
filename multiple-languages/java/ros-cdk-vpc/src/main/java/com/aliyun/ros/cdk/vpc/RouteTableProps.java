package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RouteTable</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetable
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:54.962Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RouteTableProps")
@software.amazon.jsii.Jsii.Proxy(RouteTableProps.Jsii$Proxy.class)
public interface RouteTableProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property vpcId: The ID of the VPC to which the custom route table belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property description: The description of the route table.
     * <p>
     * The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property routeTableName: The name of the route table.
     * <p>
     * The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteTableName() {
        return null;
    }

    /**
     * Property tags: Tags to attach to routetable.
     * <p>
     * Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosRouteTable.TagsProperty> getTags() {
        return null;
    }

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
        java.lang.Object vpcId;
        java.lang.Object description;
        java.lang.Object routeTableName;
        java.util.List<com.aliyun.ros.cdk.vpc.RosRouteTable.TagsProperty> tags;

        /**
         * Sets the value of {@link RouteTableProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to which the custom route table belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RouteTableProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to which the custom route table belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RouteTableProps#getDescription}
         * @param description Property description: The description of the route table.
         *                    The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RouteTableProps#getDescription}
         * @param description Property description: The description of the route table.
         *                    The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RouteTableProps#getRouteTableName}
         * @param routeTableName Property routeTableName: The name of the route table.
         *                       The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder routeTableName(java.lang.String routeTableName) {
            this.routeTableName = routeTableName;
            return this;
        }

        /**
         * Sets the value of {@link RouteTableProps#getRouteTableName}
         * @param routeTableName Property routeTableName: The name of the route table.
         *                       The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder routeTableName(com.aliyun.ros.cdk.core.IResolvable routeTableName) {
            this.routeTableName = routeTableName;
            return this;
        }

        /**
         * Sets the value of {@link RouteTableProps#getTags}
         * @param tags Property tags: Tags to attach to routetable.
         *             Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.vpc.RosRouteTable.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosRouteTable.TagsProperty>)tags;
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
        private final java.lang.Object vpcId;
        private final java.lang.Object description;
        private final java.lang.Object routeTableName;
        private final java.util.List<com.aliyun.ros.cdk.vpc.RosRouteTable.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTableName = software.amazon.jsii.Kernel.get(this, "routeTableName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.RosRouteTable.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.description = builder.description;
            this.routeTableName = builder.routeTableName;
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosRouteTable.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getRouteTableName() {
            return this.routeTableName;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.vpc.RosRouteTable.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getRouteTableName() != null) {
                data.set("routeTableName", om.valueToTree(this.getRouteTableName()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RouteTableProps"));
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

            if (!vpcId.equals(that.vpcId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.routeTableName != null ? !this.routeTableName.equals(that.routeTableName) : that.routeTableName != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vpcId.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.routeTableName != null ? this.routeTableName.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
