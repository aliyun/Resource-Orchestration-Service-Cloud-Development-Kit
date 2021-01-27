package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::SecurityGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.798Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosSecurityGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosSecurityGroupProps.Jsii$Proxy.class)
public interface RosSecurityGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupEgress() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIngress() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSecurityGroupName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSecurityGroupType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.core.RosTag> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSecurityGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSecurityGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSecurityGroupProps> {
        private java.lang.String description;
        private java.lang.String resourceGroupId;
        private java.lang.Object securityGroupEgress;
        private java.lang.Object securityGroupIngress;
        private java.lang.String securityGroupName;
        private java.lang.String securityGroupType;
        private java.util.List<com.aliyun.ros.cdk.core.RosTag> tags;
        private java.lang.String vpcId;

        /**
         * Sets the value of {@link RosSecurityGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupProps#getSecurityGroupEgress}
         * @param securityGroupEgress the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupEgress(com.aliyun.ros.cdk.core.IResolvable securityGroupEgress) {
            this.securityGroupEgress = securityGroupEgress;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupProps#getSecurityGroupEgress}
         * @param securityGroupEgress the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupEgress(java.util.List<? extends java.lang.Object> securityGroupEgress) {
            this.securityGroupEgress = securityGroupEgress;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupProps#getSecurityGroupIngress}
         * @param securityGroupIngress the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupIngress(com.aliyun.ros.cdk.core.IResolvable securityGroupIngress) {
            this.securityGroupIngress = securityGroupIngress;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupProps#getSecurityGroupIngress}
         * @param securityGroupIngress the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupIngress(java.util.List<? extends java.lang.Object> securityGroupIngress) {
            this.securityGroupIngress = securityGroupIngress;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupProps#getSecurityGroupName}
         * @param securityGroupName the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupName(java.lang.String securityGroupName) {
            this.securityGroupName = securityGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupProps#getSecurityGroupType}
         * @param securityGroupType the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupType(java.lang.String securityGroupType) {
            this.securityGroupType = securityGroupType;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.core.RosTag>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSecurityGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSecurityGroupProps build() {
            return new Jsii$Proxy(description, resourceGroupId, securityGroupEgress, securityGroupIngress, securityGroupName, securityGroupType, tags, vpcId);
        }
    }

    /**
     * An implementation for {@link RosSecurityGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSecurityGroupProps {
        private final java.lang.String description;
        private final java.lang.String resourceGroupId;
        private final java.lang.Object securityGroupEgress;
        private final java.lang.Object securityGroupIngress;
        private final java.lang.String securityGroupName;
        private final java.lang.String securityGroupType;
        private final java.util.List<com.aliyun.ros.cdk.core.RosTag> tags;
        private final java.lang.String vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.securityGroupEgress = software.amazon.jsii.Kernel.get(this, "securityGroupEgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupIngress = software.amazon.jsii.Kernel.get(this, "securityGroupIngress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupName = software.amazon.jsii.Kernel.get(this, "securityGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.securityGroupType = software.amazon.jsii.Kernel.get(this, "securityGroupType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.RosTag.class)));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.String description, final java.lang.String resourceGroupId, final java.lang.Object securityGroupEgress, final java.lang.Object securityGroupIngress, final java.lang.String securityGroupName, final java.lang.String securityGroupType, final java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags, final java.lang.String vpcId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = description;
            this.resourceGroupId = resourceGroupId;
            this.securityGroupEgress = securityGroupEgress;
            this.securityGroupIngress = securityGroupIngress;
            this.securityGroupName = securityGroupName;
            this.securityGroupType = securityGroupType;
            this.tags = (java.util.List<com.aliyun.ros.cdk.core.RosTag>)tags;
            this.vpcId = vpcId;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getResourceGroupId() {
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
        public final java.lang.String getSecurityGroupName() {
            return this.securityGroupName;
        }

        @Override
        public final java.lang.String getSecurityGroupType() {
            return this.securityGroupType;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.core.RosTag> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.String getVpcId() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosSecurityGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSecurityGroupProps.Jsii$Proxy that = (RosSecurityGroupProps.Jsii$Proxy) o;

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
