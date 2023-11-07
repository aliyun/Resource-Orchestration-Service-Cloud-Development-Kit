package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>DATASOURCE::VPC::Vpcs</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:37.801Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosVpcsProps")
@software.amazon.jsii.Jsii.Proxy(RosVpcsProps.Jsii$Proxy.class)
public interface RosVpcsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDhcpOptionsSetId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsDefault() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcOwnerId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosVpcsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVpcsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVpcsProps> {
        java.lang.Object dhcpOptionsSetId;
        java.lang.Object isDefault;
        java.lang.Object resourceGroupId;
        java.lang.Object vpcIds;
        java.lang.Object vpcName;
        java.lang.Object vpcOwnerId;

        /**
         * Sets the value of {@link RosVpcsProps#getDhcpOptionsSetId}
         * @param dhcpOptionsSetId the value to be set.
         * @return {@code this}
         */
        public Builder dhcpOptionsSetId(java.lang.String dhcpOptionsSetId) {
            this.dhcpOptionsSetId = dhcpOptionsSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcsProps#getDhcpOptionsSetId}
         * @param dhcpOptionsSetId the value to be set.
         * @return {@code this}
         */
        public Builder dhcpOptionsSetId(com.aliyun.ros.cdk.core.IResolvable dhcpOptionsSetId) {
            this.dhcpOptionsSetId = dhcpOptionsSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcsProps#getIsDefault}
         * @param isDefault the value to be set.
         * @return {@code this}
         */
        public Builder isDefault(java.lang.Boolean isDefault) {
            this.isDefault = isDefault;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcsProps#getIsDefault}
         * @param isDefault the value to be set.
         * @return {@code this}
         */
        public Builder isDefault(com.aliyun.ros.cdk.core.IResolvable isDefault) {
            this.isDefault = isDefault;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcsProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcsProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcsProps#getVpcIds}
         * @param vpcIds the value to be set.
         * @return {@code this}
         */
        public Builder vpcIds(com.aliyun.ros.cdk.core.IResolvable vpcIds) {
            this.vpcIds = vpcIds;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcsProps#getVpcIds}
         * @param vpcIds the value to be set.
         * @return {@code this}
         */
        public Builder vpcIds(java.util.List<? extends java.lang.Object> vpcIds) {
            this.vpcIds = vpcIds;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcsProps#getVpcName}
         * @param vpcName the value to be set.
         * @return {@code this}
         */
        public Builder vpcName(java.lang.String vpcName) {
            this.vpcName = vpcName;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcsProps#getVpcName}
         * @param vpcName the value to be set.
         * @return {@code this}
         */
        public Builder vpcName(com.aliyun.ros.cdk.core.IResolvable vpcName) {
            this.vpcName = vpcName;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcsProps#getVpcOwnerId}
         * @param vpcOwnerId the value to be set.
         * @return {@code this}
         */
        public Builder vpcOwnerId(java.lang.String vpcOwnerId) {
            this.vpcOwnerId = vpcOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcsProps#getVpcOwnerId}
         * @param vpcOwnerId the value to be set.
         * @return {@code this}
         */
        public Builder vpcOwnerId(com.aliyun.ros.cdk.core.IResolvable vpcOwnerId) {
            this.vpcOwnerId = vpcOwnerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVpcsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVpcsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVpcsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVpcsProps {
        private final java.lang.Object dhcpOptionsSetId;
        private final java.lang.Object isDefault;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object vpcIds;
        private final java.lang.Object vpcName;
        private final java.lang.Object vpcOwnerId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dhcpOptionsSetId = software.amazon.jsii.Kernel.get(this, "dhcpOptionsSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isDefault = software.amazon.jsii.Kernel.get(this, "isDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcIds = software.amazon.jsii.Kernel.get(this, "vpcIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcName = software.amazon.jsii.Kernel.get(this, "vpcName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcOwnerId = software.amazon.jsii.Kernel.get(this, "vpcOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dhcpOptionsSetId = builder.dhcpOptionsSetId;
            this.isDefault = builder.isDefault;
            this.resourceGroupId = builder.resourceGroupId;
            this.vpcIds = builder.vpcIds;
            this.vpcName = builder.vpcName;
            this.vpcOwnerId = builder.vpcOwnerId;
        }

        @Override
        public final java.lang.Object getDhcpOptionsSetId() {
            return this.dhcpOptionsSetId;
        }

        @Override
        public final java.lang.Object getIsDefault() {
            return this.isDefault;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getVpcIds() {
            return this.vpcIds;
        }

        @Override
        public final java.lang.Object getVpcName() {
            return this.vpcName;
        }

        @Override
        public final java.lang.Object getVpcOwnerId() {
            return this.vpcOwnerId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDhcpOptionsSetId() != null) {
                data.set("dhcpOptionsSetId", om.valueToTree(this.getDhcpOptionsSetId()));
            }
            if (this.getIsDefault() != null) {
                data.set("isDefault", om.valueToTree(this.getIsDefault()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getVpcIds() != null) {
                data.set("vpcIds", om.valueToTree(this.getVpcIds()));
            }
            if (this.getVpcName() != null) {
                data.set("vpcName", om.valueToTree(this.getVpcName()));
            }
            if (this.getVpcOwnerId() != null) {
                data.set("vpcOwnerId", om.valueToTree(this.getVpcOwnerId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosVpcsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVpcsProps.Jsii$Proxy that = (RosVpcsProps.Jsii$Proxy) o;

            if (this.dhcpOptionsSetId != null ? !this.dhcpOptionsSetId.equals(that.dhcpOptionsSetId) : that.dhcpOptionsSetId != null) return false;
            if (this.isDefault != null ? !this.isDefault.equals(that.isDefault) : that.isDefault != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.vpcIds != null ? !this.vpcIds.equals(that.vpcIds) : that.vpcIds != null) return false;
            if (this.vpcName != null ? !this.vpcName.equals(that.vpcName) : that.vpcName != null) return false;
            return this.vpcOwnerId != null ? this.vpcOwnerId.equals(that.vpcOwnerId) : that.vpcOwnerId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dhcpOptionsSetId != null ? this.dhcpOptionsSetId.hashCode() : 0;
            result = 31 * result + (this.isDefault != null ? this.isDefault.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.vpcIds != null ? this.vpcIds.hashCode() : 0);
            result = 31 * result + (this.vpcName != null ? this.vpcName.hashCode() : 0);
            result = 31 * result + (this.vpcOwnerId != null ? this.vpcOwnerId.hashCode() : 0);
            return result;
        }
    }
}
