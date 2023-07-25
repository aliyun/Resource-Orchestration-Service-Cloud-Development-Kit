package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>DATASOURCE::ECS::AutoSnapshotPolicies</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:55:59.862Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.RosAutoSnapshotPoliciesProps")
@software.amazon.jsii.Jsii.Proxy(RosAutoSnapshotPoliciesProps.Jsii$Proxy.class)
public interface RosAutoSnapshotPoliciesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoSnapshotPolicyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosAutoSnapshotPolicies.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAutoSnapshotPoliciesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAutoSnapshotPoliciesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAutoSnapshotPoliciesProps> {
        java.lang.Object autoSnapshotPolicyId;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosAutoSnapshotPolicies.TagsProperty> tags;

        /**
         * Sets the value of {@link RosAutoSnapshotPoliciesProps#getAutoSnapshotPolicyId}
         * @param autoSnapshotPolicyId the value to be set.
         * @return {@code this}
         */
        public Builder autoSnapshotPolicyId(java.lang.String autoSnapshotPolicyId) {
            this.autoSnapshotPolicyId = autoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoSnapshotPoliciesProps#getAutoSnapshotPolicyId}
         * @param autoSnapshotPolicyId the value to be set.
         * @return {@code this}
         */
        public Builder autoSnapshotPolicyId(com.aliyun.ros.cdk.core.IResolvable autoSnapshotPolicyId) {
            this.autoSnapshotPolicyId = autoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoSnapshotPoliciesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoSnapshotPoliciesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoSnapshotPoliciesProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.datasource.RosAutoSnapshotPolicies.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosAutoSnapshotPolicies.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAutoSnapshotPoliciesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAutoSnapshotPoliciesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAutoSnapshotPoliciesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAutoSnapshotPoliciesProps {
        private final java.lang.Object autoSnapshotPolicyId;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosAutoSnapshotPolicies.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.autoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "autoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.RosAutoSnapshotPolicies.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.autoSnapshotPolicyId = builder.autoSnapshotPolicyId;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosAutoSnapshotPolicies.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getAutoSnapshotPolicyId() {
            return this.autoSnapshotPolicyId;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosAutoSnapshotPolicies.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAutoSnapshotPolicyId() != null) {
                data.set("autoSnapshotPolicyId", om.valueToTree(this.getAutoSnapshotPolicyId()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.RosAutoSnapshotPoliciesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAutoSnapshotPoliciesProps.Jsii$Proxy that = (RosAutoSnapshotPoliciesProps.Jsii$Proxy) o;

            if (this.autoSnapshotPolicyId != null ? !this.autoSnapshotPolicyId.equals(that.autoSnapshotPolicyId) : that.autoSnapshotPolicyId != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.autoSnapshotPolicyId != null ? this.autoSnapshotPolicyId.hashCode() : 0;
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
