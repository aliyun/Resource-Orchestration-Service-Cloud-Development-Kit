package com.aliyun.ros.cdk.cms2;

/**
 * Properties for defining a <code>IntegrationPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-integrationpolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:47.160Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.IntegrationPolicyProps")
@software.amazon.jsii.Jsii.Proxy(IntegrationPolicyProps.Jsii$Proxy.class)
public interface IntegrationPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property policyType: The type of the integration policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyType();

    /**
     * Property entityGroup: The entity group information.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEntityGroup() {
        return null;
    }

    /**
     * Property policyName: The name of the integration policy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicyName() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to integration policy.
     * <p>
     * Max support 20 tags to add during create integration policy. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cms2.RosIntegrationPolicy.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property workspace: The workspace of the integration policy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkspace() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link IntegrationPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link IntegrationPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<IntegrationPolicyProps> {
        java.lang.Object policyType;
        java.lang.Object entityGroup;
        java.lang.Object policyName;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.cms2.RosIntegrationPolicy.TagsProperty> tags;
        java.lang.Object workspace;

        /**
         * Sets the value of {@link IntegrationPolicyProps#getPolicyType}
         * @param policyType Property policyType: The type of the integration policy. This parameter is required.
         * @return {@code this}
         */
        public Builder policyType(java.lang.String policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link IntegrationPolicyProps#getPolicyType}
         * @param policyType Property policyType: The type of the integration policy. This parameter is required.
         * @return {@code this}
         */
        public Builder policyType(com.aliyun.ros.cdk.core.IResolvable policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link IntegrationPolicyProps#getEntityGroup}
         * @param entityGroup Property entityGroup: The entity group information.
         * @return {@code this}
         */
        public Builder entityGroup(com.aliyun.ros.cdk.core.IResolvable entityGroup) {
            this.entityGroup = entityGroup;
            return this;
        }

        /**
         * Sets the value of {@link IntegrationPolicyProps#getEntityGroup}
         * @param entityGroup Property entityGroup: The entity group information.
         * @return {@code this}
         */
        public Builder entityGroup(com.aliyun.ros.cdk.cms2.RosIntegrationPolicy.EntityGroupProperty entityGroup) {
            this.entityGroup = entityGroup;
            return this;
        }

        /**
         * Sets the value of {@link IntegrationPolicyProps#getPolicyName}
         * @param policyName Property policyName: The name of the integration policy.
         * @return {@code this}
         */
        public Builder policyName(java.lang.String policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link IntegrationPolicyProps#getPolicyName}
         * @param policyName Property policyName: The name of the integration policy.
         * @return {@code this}
         */
        public Builder policyName(com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link IntegrationPolicyProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link IntegrationPolicyProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link IntegrationPolicyProps#getTags}
         * @param tags Property tags: Tags to attach to integration policy.
         *             Max support 20 tags to add during create integration policy. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cms2.RosIntegrationPolicy.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.cms2.RosIntegrationPolicy.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link IntegrationPolicyProps#getWorkspace}
         * @param workspace Property workspace: The workspace of the integration policy.
         * @return {@code this}
         */
        public Builder workspace(java.lang.String workspace) {
            this.workspace = workspace;
            return this;
        }

        /**
         * Sets the value of {@link IntegrationPolicyProps#getWorkspace}
         * @param workspace Property workspace: The workspace of the integration policy.
         * @return {@code this}
         */
        public Builder workspace(com.aliyun.ros.cdk.core.IResolvable workspace) {
            this.workspace = workspace;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link IntegrationPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public IntegrationPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link IntegrationPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IntegrationPolicyProps {
        private final java.lang.Object policyType;
        private final java.lang.Object entityGroup;
        private final java.lang.Object policyName;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.cms2.RosIntegrationPolicy.TagsProperty> tags;
        private final java.lang.Object workspace;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.policyType = software.amazon.jsii.Kernel.get(this, "policyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.entityGroup = software.amazon.jsii.Kernel.get(this, "entityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyName = software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms2.RosIntegrationPolicy.TagsProperty.class)));
            this.workspace = software.amazon.jsii.Kernel.get(this, "workspace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.policyType = java.util.Objects.requireNonNull(builder.policyType, "policyType is required");
            this.entityGroup = builder.entityGroup;
            this.policyName = builder.policyName;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.cms2.RosIntegrationPolicy.TagsProperty>)builder.tags;
            this.workspace = builder.workspace;
        }

        @Override
        public final java.lang.Object getPolicyType() {
            return this.policyType;
        }

        @Override
        public final java.lang.Object getEntityGroup() {
            return this.entityGroup;
        }

        @Override
        public final java.lang.Object getPolicyName() {
            return this.policyName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.cms2.RosIntegrationPolicy.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getWorkspace() {
            return this.workspace;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("policyType", om.valueToTree(this.getPolicyType()));
            if (this.getEntityGroup() != null) {
                data.set("entityGroup", om.valueToTree(this.getEntityGroup()));
            }
            if (this.getPolicyName() != null) {
                data.set("policyName", om.valueToTree(this.getPolicyName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getWorkspace() != null) {
                data.set("workspace", om.valueToTree(this.getWorkspace()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms2.IntegrationPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            IntegrationPolicyProps.Jsii$Proxy that = (IntegrationPolicyProps.Jsii$Proxy) o;

            if (!policyType.equals(that.policyType)) return false;
            if (this.entityGroup != null ? !this.entityGroup.equals(that.entityGroup) : that.entityGroup != null) return false;
            if (this.policyName != null ? !this.policyName.equals(that.policyName) : that.policyName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.workspace != null ? this.workspace.equals(that.workspace) : that.workspace == null;
        }

        @Override
        public final int hashCode() {
            int result = this.policyType.hashCode();
            result = 31 * result + (this.entityGroup != null ? this.entityGroup.hashCode() : 0);
            result = 31 * result + (this.policyName != null ? this.policyName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.workspace != null ? this.workspace.hashCode() : 0);
            return result;
        }
    }
}
