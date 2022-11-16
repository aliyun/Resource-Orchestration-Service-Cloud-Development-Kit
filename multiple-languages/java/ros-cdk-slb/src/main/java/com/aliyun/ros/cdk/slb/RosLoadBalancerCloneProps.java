package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a `ALIYUN::SLB::LoadBalancerClone`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-16T03:59:11.228Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosLoadBalancerCloneProps")
@software.amazon.jsii.Jsii.Proxy(RosLoadBalancerCloneProps.Jsii$Proxy.class)
public interface RosLoadBalancerCloneProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceLoadBalancerId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackendServers() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackendServersPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.slb.RosLoadBalancerClone.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTagsPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosLoadBalancerCloneProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosLoadBalancerCloneProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosLoadBalancerCloneProps> {
        java.lang.Object sourceLoadBalancerId;
        java.lang.Object backendServers;
        java.lang.Object backendServersPolicy;
        java.lang.Object instanceChargeType;
        java.lang.Object loadBalancerName;
        java.lang.Object loadBalancerSpec;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.slb.RosLoadBalancerClone.TagsProperty> tags;
        java.lang.Object tagsPolicy;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getSourceLoadBalancerId}
         * @param sourceLoadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceLoadBalancerId(java.lang.String sourceLoadBalancerId) {
            this.sourceLoadBalancerId = sourceLoadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getSourceLoadBalancerId}
         * @param sourceLoadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceLoadBalancerId(com.aliyun.ros.cdk.core.IResolvable sourceLoadBalancerId) {
            this.sourceLoadBalancerId = sourceLoadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getBackendServers}
         * @param backendServers the value to be set.
         * @return {@code this}
         */
        public Builder backendServers(com.aliyun.ros.cdk.core.IResolvable backendServers) {
            this.backendServers = backendServers;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getBackendServers}
         * @param backendServers the value to be set.
         * @return {@code this}
         */
        public Builder backendServers(java.util.List<? extends java.lang.Object> backendServers) {
            this.backendServers = backendServers;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getBackendServersPolicy}
         * @param backendServersPolicy the value to be set.
         * @return {@code this}
         */
        public Builder backendServersPolicy(java.lang.String backendServersPolicy) {
            this.backendServersPolicy = backendServersPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getBackendServersPolicy}
         * @param backendServersPolicy the value to be set.
         * @return {@code this}
         */
        public Builder backendServersPolicy(com.aliyun.ros.cdk.core.IResolvable backendServersPolicy) {
            this.backendServersPolicy = backendServersPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getLoadBalancerName}
         * @param loadBalancerName the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancerName(java.lang.String loadBalancerName) {
            this.loadBalancerName = loadBalancerName;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getLoadBalancerName}
         * @param loadBalancerName the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancerName(com.aliyun.ros.cdk.core.IResolvable loadBalancerName) {
            this.loadBalancerName = loadBalancerName;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getLoadBalancerSpec}
         * @param loadBalancerSpec the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancerSpec(java.lang.String loadBalancerSpec) {
            this.loadBalancerSpec = loadBalancerSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getLoadBalancerSpec}
         * @param loadBalancerSpec the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancerSpec(com.aliyun.ros.cdk.core.IResolvable loadBalancerSpec) {
            this.loadBalancerSpec = loadBalancerSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.slb.RosLoadBalancerClone.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.slb.RosLoadBalancerClone.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getTagsPolicy}
         * @param tagsPolicy the value to be set.
         * @return {@code this}
         */
        public Builder tagsPolicy(java.lang.String tagsPolicy) {
            this.tagsPolicy = tagsPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getTagsPolicy}
         * @param tagsPolicy the value to be set.
         * @return {@code this}
         */
        public Builder tagsPolicy(com.aliyun.ros.cdk.core.IResolvable tagsPolicy) {
            this.tagsPolicy = tagsPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosLoadBalancerCloneProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosLoadBalancerCloneProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosLoadBalancerCloneProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosLoadBalancerCloneProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosLoadBalancerCloneProps {
        private final java.lang.Object sourceLoadBalancerId;
        private final java.lang.Object backendServers;
        private final java.lang.Object backendServersPolicy;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object loadBalancerName;
        private final java.lang.Object loadBalancerSpec;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.slb.RosLoadBalancerClone.TagsProperty> tags;
        private final java.lang.Object tagsPolicy;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.sourceLoadBalancerId = software.amazon.jsii.Kernel.get(this, "sourceLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backendServers = software.amazon.jsii.Kernel.get(this, "backendServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backendServersPolicy = software.amazon.jsii.Kernel.get(this, "backendServersPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerName = software.amazon.jsii.Kernel.get(this, "loadBalancerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerSpec = software.amazon.jsii.Kernel.get(this, "loadBalancerSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.RosLoadBalancerClone.TagsProperty.class)));
            this.tagsPolicy = software.amazon.jsii.Kernel.get(this, "tagsPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.sourceLoadBalancerId = java.util.Objects.requireNonNull(builder.sourceLoadBalancerId, "sourceLoadBalancerId is required");
            this.backendServers = builder.backendServers;
            this.backendServersPolicy = builder.backendServersPolicy;
            this.instanceChargeType = builder.instanceChargeType;
            this.loadBalancerName = builder.loadBalancerName;
            this.loadBalancerSpec = builder.loadBalancerSpec;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.slb.RosLoadBalancerClone.TagsProperty>)builder.tags;
            this.tagsPolicy = builder.tagsPolicy;
            this.vSwitchId = builder.vSwitchId;
        }

        @Override
        public final java.lang.Object getSourceLoadBalancerId() {
            return this.sourceLoadBalancerId;
        }

        @Override
        public final java.lang.Object getBackendServers() {
            return this.backendServers;
        }

        @Override
        public final java.lang.Object getBackendServersPolicy() {
            return this.backendServersPolicy;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getLoadBalancerName() {
            return this.loadBalancerName;
        }

        @Override
        public final java.lang.Object getLoadBalancerSpec() {
            return this.loadBalancerSpec;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.slb.RosLoadBalancerClone.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTagsPolicy() {
            return this.tagsPolicy;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("sourceLoadBalancerId", om.valueToTree(this.getSourceLoadBalancerId()));
            if (this.getBackendServers() != null) {
                data.set("backendServers", om.valueToTree(this.getBackendServers()));
            }
            if (this.getBackendServersPolicy() != null) {
                data.set("backendServersPolicy", om.valueToTree(this.getBackendServersPolicy()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getLoadBalancerName() != null) {
                data.set("loadBalancerName", om.valueToTree(this.getLoadBalancerName()));
            }
            if (this.getLoadBalancerSpec() != null) {
                data.set("loadBalancerSpec", om.valueToTree(this.getLoadBalancerSpec()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTagsPolicy() != null) {
                data.set("tagsPolicy", om.valueToTree(this.getTagsPolicy()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RosLoadBalancerCloneProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosLoadBalancerCloneProps.Jsii$Proxy that = (RosLoadBalancerCloneProps.Jsii$Proxy) o;

            if (!sourceLoadBalancerId.equals(that.sourceLoadBalancerId)) return false;
            if (this.backendServers != null ? !this.backendServers.equals(that.backendServers) : that.backendServers != null) return false;
            if (this.backendServersPolicy != null ? !this.backendServersPolicy.equals(that.backendServersPolicy) : that.backendServersPolicy != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.loadBalancerName != null ? !this.loadBalancerName.equals(that.loadBalancerName) : that.loadBalancerName != null) return false;
            if (this.loadBalancerSpec != null ? !this.loadBalancerSpec.equals(that.loadBalancerSpec) : that.loadBalancerSpec != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.tagsPolicy != null ? !this.tagsPolicy.equals(that.tagsPolicy) : that.tagsPolicy != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.sourceLoadBalancerId.hashCode();
            result = 31 * result + (this.backendServers != null ? this.backendServers.hashCode() : 0);
            result = 31 * result + (this.backendServersPolicy != null ? this.backendServersPolicy.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.loadBalancerName != null ? this.loadBalancerName.hashCode() : 0);
            result = 31 * result + (this.loadBalancerSpec != null ? this.loadBalancerSpec.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.tagsPolicy != null ? this.tagsPolicy.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
