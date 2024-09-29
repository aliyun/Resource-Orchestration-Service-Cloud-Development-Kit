package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>VSwitches</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitches
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:43.417Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.VSwitchesProps")
@software.amazon.jsii.Jsii.Proxy(VSwitchesProps.Jsii$Proxy.class)
public interface VSwitchesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dhcpOptionsSetId: The ID of the DHCP options set.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDhcpOptionsSetId() {
        return null;
    }

    /**
     * Property isDefault: Specifies whether to query the default VPC in the specified region.
     * <p>
     * Valid values:
     * true(default): queries all VPCs in the specified region.
     * false: does not query the default VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsDefault() {
        return null;
    }

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property routeTableId: The ID of the route table.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteTableId() {
        return null;
    }

    /**
     * Property vpcId: The ID of the VPC to which the vSwitch belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchIds: The list of The vSwitch IDs.
     * <p>
     * You can specify up to 20 vSwitch IDs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchIds() {
        return null;
    }

    /**
     * Property vSwitchName: The name of the vSwitch.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchName() {
        return null;
    }

    /**
     * Property vSwitchOwnerId: The ID of the Alibaba Cloud account to which the vSwitch belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchOwnerId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VSwitchesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VSwitchesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VSwitchesProps> {
        java.lang.Object dhcpOptionsSetId;
        java.lang.Object isDefault;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;
        java.lang.Object routeTableId;
        java.lang.Object vpcId;
        java.lang.Object vSwitchIds;
        java.lang.Object vSwitchName;
        java.lang.Object vSwitchOwnerId;

        /**
         * Sets the value of {@link VSwitchesProps#getDhcpOptionsSetId}
         * @param dhcpOptionsSetId Property dhcpOptionsSetId: The ID of the DHCP options set.
         * @return {@code this}
         */
        public Builder dhcpOptionsSetId(java.lang.String dhcpOptionsSetId) {
            this.dhcpOptionsSetId = dhcpOptionsSetId;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchesProps#getDhcpOptionsSetId}
         * @param dhcpOptionsSetId Property dhcpOptionsSetId: The ID of the DHCP options set.
         * @return {@code this}
         */
        public Builder dhcpOptionsSetId(com.aliyun.ros.cdk.core.IResolvable dhcpOptionsSetId) {
            this.dhcpOptionsSetId = dhcpOptionsSetId;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchesProps#getIsDefault}
         * @param isDefault Property isDefault: Specifies whether to query the default VPC in the specified region.
         *                  Valid values:
         *                  true(default): queries all VPCs in the specified region.
         *                  false: does not query the default VPC.
         * @return {@code this}
         */
        public Builder isDefault(java.lang.Boolean isDefault) {
            this.isDefault = isDefault;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchesProps#getIsDefault}
         * @param isDefault Property isDefault: Specifies whether to query the default VPC in the specified region.
         *                  Valid values:
         *                  true(default): queries all VPCs in the specified region.
         *                  false: does not query the default VPC.
         * @return {@code this}
         */
        public Builder isDefault(com.aliyun.ros.cdk.core.IResolvable isDefault) {
            this.isDefault = isDefault;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchesProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchesProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchesProps#getRouteTableId}
         * @param routeTableId Property routeTableId: The ID of the route table.
         * @return {@code this}
         */
        public Builder routeTableId(java.lang.String routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchesProps#getRouteTableId}
         * @param routeTableId Property routeTableId: The ID of the route table.
         * @return {@code this}
         */
        public Builder routeTableId(com.aliyun.ros.cdk.core.IResolvable routeTableId) {
            this.routeTableId = routeTableId;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchesProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to which the vSwitch belongs.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchesProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to which the vSwitch belongs.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchesProps#getVSwitchIds}
         * @param vSwitchIds Property vSwitchIds: The list of The vSwitch IDs.
         *                   You can specify up to 20 vSwitch IDs.
         * @return {@code this}
         */
        public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchesProps#getVSwitchIds}
         * @param vSwitchIds Property vSwitchIds: The list of The vSwitch IDs.
         *                   You can specify up to 20 vSwitch IDs.
         * @return {@code this}
         */
        public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchesProps#getVSwitchName}
         * @param vSwitchName Property vSwitchName: The name of the vSwitch.
         * @return {@code this}
         */
        public Builder vSwitchName(java.lang.String vSwitchName) {
            this.vSwitchName = vSwitchName;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchesProps#getVSwitchName}
         * @param vSwitchName Property vSwitchName: The name of the vSwitch.
         * @return {@code this}
         */
        public Builder vSwitchName(com.aliyun.ros.cdk.core.IResolvable vSwitchName) {
            this.vSwitchName = vSwitchName;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchesProps#getVSwitchOwnerId}
         * @param vSwitchOwnerId Property vSwitchOwnerId: The ID of the Alibaba Cloud account to which the vSwitch belongs.
         * @return {@code this}
         */
        public Builder vSwitchOwnerId(java.lang.String vSwitchOwnerId) {
            this.vSwitchOwnerId = vSwitchOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchesProps#getVSwitchOwnerId}
         * @param vSwitchOwnerId Property vSwitchOwnerId: The ID of the Alibaba Cloud account to which the vSwitch belongs.
         * @return {@code this}
         */
        public Builder vSwitchOwnerId(com.aliyun.ros.cdk.core.IResolvable vSwitchOwnerId) {
            this.vSwitchOwnerId = vSwitchOwnerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VSwitchesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VSwitchesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VSwitchesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VSwitchesProps {
        private final java.lang.Object dhcpOptionsSetId;
        private final java.lang.Object isDefault;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object routeTableId;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchIds;
        private final java.lang.Object vSwitchName;
        private final java.lang.Object vSwitchOwnerId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dhcpOptionsSetId = software.amazon.jsii.Kernel.get(this, "dhcpOptionsSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isDefault = software.amazon.jsii.Kernel.get(this, "isDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTableId = software.amazon.jsii.Kernel.get(this, "routeTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchName = software.amazon.jsii.Kernel.get(this, "vSwitchName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchOwnerId = software.amazon.jsii.Kernel.get(this, "vSwitchOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dhcpOptionsSetId = builder.dhcpOptionsSetId;
            this.isDefault = builder.isDefault;
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupId = builder.resourceGroupId;
            this.routeTableId = builder.routeTableId;
            this.vpcId = builder.vpcId;
            this.vSwitchIds = builder.vSwitchIds;
            this.vSwitchName = builder.vSwitchName;
            this.vSwitchOwnerId = builder.vSwitchOwnerId;
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
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRouteTableId() {
            return this.routeTableId;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchIds() {
            return this.vSwitchIds;
        }

        @Override
        public final java.lang.Object getVSwitchName() {
            return this.vSwitchName;
        }

        @Override
        public final java.lang.Object getVSwitchOwnerId() {
            return this.vSwitchOwnerId;
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
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRouteTableId() != null) {
                data.set("routeTableId", om.valueToTree(this.getRouteTableId()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchIds() != null) {
                data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
            }
            if (this.getVSwitchName() != null) {
                data.set("vSwitchName", om.valueToTree(this.getVSwitchName()));
            }
            if (this.getVSwitchOwnerId() != null) {
                data.set("vSwitchOwnerId", om.valueToTree(this.getVSwitchOwnerId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.VSwitchesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VSwitchesProps.Jsii$Proxy that = (VSwitchesProps.Jsii$Proxy) o;

            if (this.dhcpOptionsSetId != null ? !this.dhcpOptionsSetId.equals(that.dhcpOptionsSetId) : that.dhcpOptionsSetId != null) return false;
            if (this.isDefault != null ? !this.isDefault.equals(that.isDefault) : that.isDefault != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.routeTableId != null ? !this.routeTableId.equals(that.routeTableId) : that.routeTableId != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchIds != null ? !this.vSwitchIds.equals(that.vSwitchIds) : that.vSwitchIds != null) return false;
            if (this.vSwitchName != null ? !this.vSwitchName.equals(that.vSwitchName) : that.vSwitchName != null) return false;
            return this.vSwitchOwnerId != null ? this.vSwitchOwnerId.equals(that.vSwitchOwnerId) : that.vSwitchOwnerId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dhcpOptionsSetId != null ? this.dhcpOptionsSetId.hashCode() : 0;
            result = 31 * result + (this.isDefault != null ? this.isDefault.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.routeTableId != null ? this.routeTableId.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchIds != null ? this.vSwitchIds.hashCode() : 0);
            result = 31 * result + (this.vSwitchName != null ? this.vSwitchName.hashCode() : 0);
            result = 31 * result + (this.vSwitchOwnerId != null ? this.vSwitchOwnerId.hashCode() : 0);
            return result;
        }
    }
}
