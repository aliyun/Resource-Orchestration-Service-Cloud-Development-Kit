package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::RouteTable`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T03:36:10.692Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosRouteTableProps")
@software.amazon.jsii.Jsii.Proxy(RosRouteTableProps.Jsii$Proxy.class)
public interface RosRouteTableProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getVpcId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRouteTableName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.core.RosTag> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRouteTableProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRouteTableProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRouteTableProps> {
        private java.lang.String vpcId;
        private java.lang.String description;
        private java.lang.String routeTableName;
        private java.util.List<com.aliyun.ros.cdk.core.RosTag> tags;

        /**
         * Sets the value of {@link RosRouteTableProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTableProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTableProps#getRouteTableName}
         * @param routeTableName the value to be set.
         * @return {@code this}
         */
        public Builder routeTableName(java.lang.String routeTableName) {
            this.routeTableName = routeTableName;
            return this;
        }

        /**
         * Sets the value of {@link RosRouteTableProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.core.RosTag>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRouteTableProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRouteTableProps build() {
            return new Jsii$Proxy(vpcId, description, routeTableName, tags);
        }
    }

    /**
     * An implementation for {@link RosRouteTableProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRouteTableProps {
        private final java.lang.String vpcId;
        private final java.lang.String description;
        private final java.lang.String routeTableName;
        private final java.util.List<com.aliyun.ros.cdk.core.RosTag> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.routeTableName = software.amazon.jsii.Kernel.get(this, "routeTableName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.RosTag.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.String vpcId, final java.lang.String description, final java.lang.String routeTableName, final java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vpcId = java.util.Objects.requireNonNull(vpcId, "vpcId is required");
            this.description = description;
            this.routeTableName = routeTableName;
            this.tags = (java.util.List<com.aliyun.ros.cdk.core.RosTag>)tags;
        }

        @Override
        public final java.lang.String getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getRouteTableName() {
            return this.routeTableName;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.core.RosTag> getTags() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosRouteTableProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRouteTableProps.Jsii$Proxy that = (RosRouteTableProps.Jsii$Proxy) o;

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
