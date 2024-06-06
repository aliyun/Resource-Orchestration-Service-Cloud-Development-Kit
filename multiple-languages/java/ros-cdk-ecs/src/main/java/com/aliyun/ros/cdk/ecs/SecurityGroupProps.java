package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>SecurityGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:14.625Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SecurityGroupProps")
@software.amazon.jsii.Jsii.Proxy(SecurityGroupProps.Jsii$Proxy.class)
public interface SecurityGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property description: Description of the security group, [2, 256] characters.
     * <p>
     * Do not fill or empty, the default is empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property securityGroupEgress: egress rules for the security group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupEgress() {
        return null;
    }

    /**
     * Property securityGroupIngress: Ingress rules for the security group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIngress() {
        return null;
    }

    /**
     * Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupType() {
        return null;
    }

    /**
     * Property tags: Tags to attach to security group.
     * <p>
     * Max support 20 tags to add during create security group. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosSecurityGroup.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vpcId: Physical ID of the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SecurityGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SecurityGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SecurityGroupProps> {
        java.lang.Object description;
        java.lang.Object resourceGroupId;
        java.lang.Object securityGroupEgress;
        java.lang.Object securityGroupIngress;
        java.lang.Object securityGroupName;
        java.lang.Object securityGroupType;
        java.util.List<com.aliyun.ros.cdk.ecs.RosSecurityGroup.TagsProperty> tags;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link SecurityGroupProps#getDescription}
         * @param description Property description: Description of the security group, [2, 256] characters.
         *                    Do not fill or empty, the default is empty.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getDescription}
         * @param description Property description: Description of the security group, [2, 256] characters.
         *                    Do not fill or empty, the default is empty.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getSecurityGroupEgress}
         * @param securityGroupEgress Property securityGroupEgress: egress rules for the security group.
         * @return {@code this}
         */
        public Builder securityGroupEgress(com.aliyun.ros.cdk.core.IResolvable securityGroupEgress) {
            this.securityGroupEgress = securityGroupEgress;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getSecurityGroupEgress}
         * @param securityGroupEgress Property securityGroupEgress: egress rules for the security group.
         * @return {@code this}
         */
        public Builder securityGroupEgress(java.util.List<? extends java.lang.Object> securityGroupEgress) {
            this.securityGroupEgress = securityGroupEgress;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getSecurityGroupIngress}
         * @param securityGroupIngress Property securityGroupIngress: Ingress rules for the security group.
         * @return {@code this}
         */
        public Builder securityGroupIngress(com.aliyun.ros.cdk.core.IResolvable securityGroupIngress) {
            this.securityGroupIngress = securityGroupIngress;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getSecurityGroupIngress}
         * @param securityGroupIngress Property securityGroupIngress: Ingress rules for the security group.
         * @return {@code this}
         */
        public Builder securityGroupIngress(java.util.List<? extends java.lang.Object> securityGroupIngress) {
            this.securityGroupIngress = securityGroupIngress;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getSecurityGroupName}
         * @param securityGroupName Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder securityGroupName(java.lang.String securityGroupName) {
            this.securityGroupName = securityGroupName;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getSecurityGroupName}
         * @param securityGroupName Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder securityGroupName(com.aliyun.ros.cdk.core.IResolvable securityGroupName) {
            this.securityGroupName = securityGroupName;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getSecurityGroupType}
         * @param securityGroupType Property securityGroupType: The type of the security group.
         *                          Valid values:
         *                          normal: basic security group
         *                          enterprise: advanced security group
         * @return {@code this}
         */
        public Builder securityGroupType(java.lang.String securityGroupType) {
            this.securityGroupType = securityGroupType;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getSecurityGroupType}
         * @param securityGroupType Property securityGroupType: The type of the security group.
         *                          Valid values:
         *                          normal: basic security group
         *                          enterprise: advanced security group
         * @return {@code this}
         */
        public Builder securityGroupType(com.aliyun.ros.cdk.core.IResolvable securityGroupType) {
            this.securityGroupType = securityGroupType;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getTags}
         * @param tags Property tags: Tags to attach to security group.
         *             Max support 20 tags to add during create security group. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosSecurityGroup.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosSecurityGroup.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getVpcId}
         * @param vpcId Property vpcId: Physical ID of the VPC.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getVpcId}
         * @param vpcId Property vpcId: Physical ID of the VPC.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SecurityGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SecurityGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SecurityGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecurityGroupProps {
        private final java.lang.Object description;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityGroupEgress;
        private final java.lang.Object securityGroupIngress;
        private final java.lang.Object securityGroupName;
        private final java.lang.Object securityGroupType;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosSecurityGroup.TagsProperty> tags;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupEgress = software.amazon.jsii.Kernel.get(this, "securityGroupEgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupIngress = software.amazon.jsii.Kernel.get(this, "securityGroupIngress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupName = software.amazon.jsii.Kernel.get(this, "securityGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupType = software.amazon.jsii.Kernel.get(this, "securityGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosSecurityGroup.TagsProperty.class)));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = builder.description;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityGroupEgress = builder.securityGroupEgress;
            this.securityGroupIngress = builder.securityGroupIngress;
            this.securityGroupName = builder.securityGroupName;
            this.securityGroupType = builder.securityGroupType;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosSecurityGroup.TagsProperty>)builder.tags;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupEgress() {
            return this.securityGroupEgress;
        }

        @Override
        public final java.lang.Object getSecurityGroupIngress() {
            return this.securityGroupIngress;
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
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosSecurityGroup.TagsProperty> getTags() {
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

            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityGroupEgress() != null) {
                data.set("securityGroupEgress", om.valueToTree(this.getSecurityGroupEgress()));
            }
            if (this.getSecurityGroupIngress() != null) {
                data.set("securityGroupIngress", om.valueToTree(this.getSecurityGroupIngress()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.SecurityGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SecurityGroupProps.Jsii$Proxy that = (SecurityGroupProps.Jsii$Proxy) o;

            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityGroupEgress != null ? !this.securityGroupEgress.equals(that.securityGroupEgress) : that.securityGroupEgress != null) return false;
            if (this.securityGroupIngress != null ? !this.securityGroupIngress.equals(that.securityGroupIngress) : that.securityGroupIngress != null) return false;
            if (this.securityGroupName != null ? !this.securityGroupName.equals(that.securityGroupName) : that.securityGroupName != null) return false;
            if (this.securityGroupType != null ? !this.securityGroupType.equals(that.securityGroupType) : that.securityGroupType != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description != null ? this.description.hashCode() : 0;
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupEgress != null ? this.securityGroupEgress.hashCode() : 0);
            result = 31 * result + (this.securityGroupIngress != null ? this.securityGroupIngress.hashCode() : 0);
            result = 31 * result + (this.securityGroupName != null ? this.securityGroupName.hashCode() : 0);
            result = 31 * result + (this.securityGroupType != null ? this.securityGroupType.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
