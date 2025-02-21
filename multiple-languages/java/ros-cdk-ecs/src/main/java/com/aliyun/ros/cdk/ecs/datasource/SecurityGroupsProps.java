package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>SecurityGroups</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroups
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:16.053Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.SecurityGroupsProps")
@software.amazon.jsii.Jsii.Proxy(SecurityGroupsProps.Jsii$Proxy.class)
public interface SecurityGroupsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property networkType: The network type of the security group.
     * <p>
     * Valid values:
     * vpc
     * classic
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
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
     * Property resourceGroupId: The ID of the resource group to which the instance belongs.
     * <p>
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property securityGroupId: The ID of the security group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property securityGroupIds: The IDs of security groups.
     * <p>
     * The value is a JSON array that consists of up to 100 security group IDs. Separate multiple security group IDs with commas (,).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIds() {
        return null;
    }

    /**
     * Property securityGroupName: The name of the security group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupName() {
        return null;
    }

    /**
     * Property securityGroupType: The type of the security group.
     * <p>
     * Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     * Note If you do not specify this parameter, both basic and advanced security groups are queried.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupType() {
        return null;
    }

    /**
     * Property tags: Tags of securitygroup.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosSecurityGroups.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) to which the security group belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SecurityGroupsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SecurityGroupsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SecurityGroupsProps> {
        java.lang.Object networkType;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;
        java.lang.Object securityGroupId;
        java.lang.Object securityGroupIds;
        java.lang.Object securityGroupName;
        java.lang.Object securityGroupType;
        java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosSecurityGroups.TagsProperty> tags;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link SecurityGroupsProps#getNetworkType}
         * @param networkType Property networkType: The network type of the security group.
         *                    Valid values:
         *                    vpc
         *                    classic
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupsProps#getNetworkType}
         * @param networkType Property networkType: The network type of the security group.
         *                    Valid values:
         *                    vpc
         *                    classic
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupsProps#getRefreshOptions}
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
         * Sets the value of {@link SecurityGroupsProps#getRefreshOptions}
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
         * Sets the value of {@link SecurityGroupsProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs.
         *                        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupsProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs.
         *                        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupsProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the security group.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupsProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the security group.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupsProps#getSecurityGroupIds}
         * @param securityGroupIds Property securityGroupIds: The IDs of security groups.
         *                         The value is a JSON array that consists of up to 100 security group IDs. Separate multiple security group IDs with commas (,).
         * @return {@code this}
         */
        public Builder securityGroupIds(com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupsProps#getSecurityGroupIds}
         * @param securityGroupIds Property securityGroupIds: The IDs of security groups.
         *                         The value is a JSON array that consists of up to 100 security group IDs. Separate multiple security group IDs with commas (,).
         * @return {@code this}
         */
        public Builder securityGroupIds(java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupsProps#getSecurityGroupName}
         * @param securityGroupName Property securityGroupName: The name of the security group.
         * @return {@code this}
         */
        public Builder securityGroupName(java.lang.String securityGroupName) {
            this.securityGroupName = securityGroupName;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupsProps#getSecurityGroupName}
         * @param securityGroupName Property securityGroupName: The name of the security group.
         * @return {@code this}
         */
        public Builder securityGroupName(com.aliyun.ros.cdk.core.IResolvable securityGroupName) {
            this.securityGroupName = securityGroupName;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupsProps#getSecurityGroupType}
         * @param securityGroupType Property securityGroupType: The type of the security group.
         *                          Valid values:
         *                          normal: basic security group
         *                          enterprise: advanced security group
         *                          Note If you do not specify this parameter, both basic and advanced security groups are queried.
         * @return {@code this}
         */
        public Builder securityGroupType(java.lang.String securityGroupType) {
            this.securityGroupType = securityGroupType;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupsProps#getSecurityGroupType}
         * @param securityGroupType Property securityGroupType: The type of the security group.
         *                          Valid values:
         *                          normal: basic security group
         *                          enterprise: advanced security group
         *                          Note If you do not specify this parameter, both basic and advanced security groups are queried.
         * @return {@code this}
         */
        public Builder securityGroupType(com.aliyun.ros.cdk.core.IResolvable securityGroupType) {
            this.securityGroupType = securityGroupType;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupsProps#getTags}
         * @param tags Property tags: Tags of securitygroup.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.datasource.RosSecurityGroups.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosSecurityGroups.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupsProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the security group belongs.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupsProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the security group belongs.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SecurityGroupsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SecurityGroupsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SecurityGroupsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecurityGroupsProps {
        private final java.lang.Object networkType;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object securityGroupIds;
        private final java.lang.Object securityGroupName;
        private final java.lang.Object securityGroupType;
        private final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosSecurityGroups.TagsProperty> tags;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupIds = software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupName = software.amazon.jsii.Kernel.get(this, "securityGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupType = software.amazon.jsii.Kernel.get(this, "securityGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.RosSecurityGroups.TagsProperty.class)));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.networkType = builder.networkType;
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityGroupId = builder.securityGroupId;
            this.securityGroupIds = builder.securityGroupIds;
            this.securityGroupName = builder.securityGroupName;
            this.securityGroupType = builder.securityGroupType;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosSecurityGroups.TagsProperty>)builder.tags;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
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
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupIds() {
            return this.securityGroupIds;
        }

        @Override
        public final java.lang.Object getSecurityGroupName() {
            return this.securityGroupName;
        }

        @Override
        public final java.lang.Object getSecurityGroupType() {
            return this.securityGroupType;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosSecurityGroups.TagsProperty> getTags() {
            return this.tags;
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

            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSecurityGroupIds() != null) {
                data.set("securityGroupIds", om.valueToTree(this.getSecurityGroupIds()));
            }
            if (this.getSecurityGroupName() != null) {
                data.set("securityGroupName", om.valueToTree(this.getSecurityGroupName()));
            }
            if (this.getSecurityGroupType() != null) {
                data.set("securityGroupType", om.valueToTree(this.getSecurityGroupType()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.SecurityGroupsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SecurityGroupsProps.Jsii$Proxy that = (SecurityGroupsProps.Jsii$Proxy) o;

            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityGroupIds != null ? !this.securityGroupIds.equals(that.securityGroupIds) : that.securityGroupIds != null) return false;
            if (this.securityGroupName != null ? !this.securityGroupName.equals(that.securityGroupName) : that.securityGroupName != null) return false;
            if (this.securityGroupType != null ? !this.securityGroupType.equals(that.securityGroupType) : that.securityGroupType != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.networkType != null ? this.networkType.hashCode() : 0;
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupIds != null ? this.securityGroupIds.hashCode() : 0);
            result = 31 * result + (this.securityGroupName != null ? this.securityGroupName.hashCode() : 0);
            result = 31 * result + (this.securityGroupType != null ? this.securityGroupType.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
