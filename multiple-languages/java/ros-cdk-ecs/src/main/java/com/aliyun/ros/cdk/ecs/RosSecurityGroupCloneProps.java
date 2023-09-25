package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>ALIYUN::ECS::SecurityGroupClone</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:45.669Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosSecurityGroupCloneProps")
@software.amazon.jsii.Jsii.Proxy(RosSecurityGroupCloneProps.Jsii$Proxy.class)
public interface RosSecurityGroupCloneProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceSecurityGroupId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationRegionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSecurityGroupCloneProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSecurityGroupCloneProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSecurityGroupCloneProps> {
        java.lang.Object sourceSecurityGroupId;
        java.lang.Object description;
        java.lang.Object destinationRegionId;
        java.lang.Object networkType;
        java.lang.Object resourceGroupId;
        java.lang.Object securityGroupName;
        java.lang.Object securityGroupType;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link RosSecurityGroupCloneProps#getSourceSecurityGroupId}
         * @param sourceSecurityGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceSecurityGroupId(java.lang.String sourceSecurityGroupId) {
            this.sourceSecurityGroupId = sourceSecurityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupCloneProps#getSourceSecurityGroupId}
         * @param sourceSecurityGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceSecurityGroupId(com.aliyun.ros.cdk.core.IResolvable sourceSecurityGroupId) {
            this.sourceSecurityGroupId = sourceSecurityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupCloneProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupCloneProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupCloneProps#getDestinationRegionId}
         * @param destinationRegionId the value to be set.
         * @return {@code this}
         */
        public Builder destinationRegionId(java.lang.String destinationRegionId) {
            this.destinationRegionId = destinationRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupCloneProps#getDestinationRegionId}
         * @param destinationRegionId the value to be set.
         * @return {@code this}
         */
        public Builder destinationRegionId(com.aliyun.ros.cdk.core.IResolvable destinationRegionId) {
            this.destinationRegionId = destinationRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupCloneProps#getNetworkType}
         * @param networkType the value to be set.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupCloneProps#getNetworkType}
         * @param networkType the value to be set.
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupCloneProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupCloneProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupCloneProps#getSecurityGroupName}
         * @param securityGroupName the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupName(java.lang.String securityGroupName) {
            this.securityGroupName = securityGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupCloneProps#getSecurityGroupName}
         * @param securityGroupName the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupName(com.aliyun.ros.cdk.core.IResolvable securityGroupName) {
            this.securityGroupName = securityGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupCloneProps#getSecurityGroupType}
         * @param securityGroupType the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupType(java.lang.String securityGroupType) {
            this.securityGroupType = securityGroupType;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupCloneProps#getSecurityGroupType}
         * @param securityGroupType the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupType(com.aliyun.ros.cdk.core.IResolvable securityGroupType) {
            this.securityGroupType = securityGroupType;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupCloneProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupCloneProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSecurityGroupCloneProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSecurityGroupCloneProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSecurityGroupCloneProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSecurityGroupCloneProps {
        private final java.lang.Object sourceSecurityGroupId;
        private final java.lang.Object description;
        private final java.lang.Object destinationRegionId;
        private final java.lang.Object networkType;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityGroupName;
        private final java.lang.Object securityGroupType;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.sourceSecurityGroupId = software.amazon.jsii.Kernel.get(this, "sourceSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationRegionId = software.amazon.jsii.Kernel.get(this, "destinationRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupName = software.amazon.jsii.Kernel.get(this, "securityGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupType = software.amazon.jsii.Kernel.get(this, "securityGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.sourceSecurityGroupId = java.util.Objects.requireNonNull(builder.sourceSecurityGroupId, "sourceSecurityGroupId is required");
            this.description = builder.description;
            this.destinationRegionId = builder.destinationRegionId;
            this.networkType = builder.networkType;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityGroupName = builder.securityGroupName;
            this.securityGroupType = builder.securityGroupType;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getSourceSecurityGroupId() {
            return this.sourceSecurityGroupId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDestinationRegionId() {
            return this.destinationRegionId;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
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
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("sourceSecurityGroupId", om.valueToTree(this.getSourceSecurityGroupId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDestinationRegionId() != null) {
                data.set("destinationRegionId", om.valueToTree(this.getDestinationRegionId()));
            }
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityGroupName() != null) {
                data.set("securityGroupName", om.valueToTree(this.getSecurityGroupName()));
            }
            if (this.getSecurityGroupType() != null) {
                data.set("securityGroupType", om.valueToTree(this.getSecurityGroupType()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosSecurityGroupCloneProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSecurityGroupCloneProps.Jsii$Proxy that = (RosSecurityGroupCloneProps.Jsii$Proxy) o;

            if (!sourceSecurityGroupId.equals(that.sourceSecurityGroupId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.destinationRegionId != null ? !this.destinationRegionId.equals(that.destinationRegionId) : that.destinationRegionId != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityGroupName != null ? !this.securityGroupName.equals(that.securityGroupName) : that.securityGroupName != null) return false;
            if (this.securityGroupType != null ? !this.securityGroupType.equals(that.securityGroupType) : that.securityGroupType != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.sourceSecurityGroupId.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.destinationRegionId != null ? this.destinationRegionId.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupName != null ? this.securityGroupName.hashCode() : 0);
            result = 31 * result + (this.securityGroupType != null ? this.securityGroupType.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
