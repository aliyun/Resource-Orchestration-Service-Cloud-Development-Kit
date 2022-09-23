package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a `ALIYUN::ResourceManager::PolicyAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:11.447Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.PolicyAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(PolicyAttachmentProps.Jsii$Proxy.class)
public interface PolicyAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property policyName: The name of the policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyName();

    /**
     * Property policyType: The type of the policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyType();

    /**
     * Property principalName: The name of the object to which you want to attach the policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrincipalName();

    /**
     * Property principalType: The type of the object to which you want to attach the policy.
     * <p>
     * Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrincipalType();

    /**
     * Property resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceGroupId();

    /**
     * @return a {@link Builder} of {@link PolicyAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PolicyAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PolicyAttachmentProps> {
        java.lang.Object policyName;
        java.lang.Object policyType;
        java.lang.Object principalName;
        java.lang.Object principalType;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link PolicyAttachmentProps#getPolicyName}
         * @param policyName Property policyName: The name of the policy. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(java.lang.String policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link PolicyAttachmentProps#getPolicyName}
         * @param policyName Property policyName: The name of the policy. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link PolicyAttachmentProps#getPolicyType}
         * @param policyType Property policyType: The type of the policy. This parameter is required.
         * @return {@code this}
         */
        public Builder policyType(java.lang.String policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link PolicyAttachmentProps#getPolicyType}
         * @param policyType Property policyType: The type of the policy. This parameter is required.
         * @return {@code this}
         */
        public Builder policyType(com.aliyun.ros.cdk.core.IResolvable policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link PolicyAttachmentProps#getPrincipalName}
         * @param principalName Property principalName: The name of the object to which you want to attach the policy. This parameter is required.
         * @return {@code this}
         */
        public Builder principalName(java.lang.String principalName) {
            this.principalName = principalName;
            return this;
        }

        /**
         * Sets the value of {@link PolicyAttachmentProps#getPrincipalName}
         * @param principalName Property principalName: The name of the object to which you want to attach the policy. This parameter is required.
         * @return {@code this}
         */
        public Builder principalName(com.aliyun.ros.cdk.core.IResolvable principalName) {
            this.principalName = principalName;
            return this;
        }

        /**
         * Sets the value of {@link PolicyAttachmentProps#getPrincipalType}
         * @param principalType Property principalType: The type of the object to which you want to attach the policy. This parameter is required.
         *                      Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
         * @return {@code this}
         */
        public Builder principalType(java.lang.String principalType) {
            this.principalType = principalType;
            return this;
        }

        /**
         * Sets the value of {@link PolicyAttachmentProps#getPrincipalType}
         * @param principalType Property principalType: The type of the object to which you want to attach the policy. This parameter is required.
         *                      Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
         * @return {@code this}
         */
        public Builder principalType(com.aliyun.ros.cdk.core.IResolvable principalType) {
            this.principalType = principalType;
            return this;
        }

        /**
         * Sets the value of {@link PolicyAttachmentProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PolicyAttachmentProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PolicyAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PolicyAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PolicyAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PolicyAttachmentProps {
        private final java.lang.Object policyName;
        private final java.lang.Object policyType;
        private final java.lang.Object principalName;
        private final java.lang.Object principalType;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.policyName = software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyType = software.amazon.jsii.Kernel.get(this, "policyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.principalName = software.amazon.jsii.Kernel.get(this, "principalName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.principalType = software.amazon.jsii.Kernel.get(this, "principalType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.policyName = java.util.Objects.requireNonNull(builder.policyName, "policyName is required");
            this.policyType = java.util.Objects.requireNonNull(builder.policyType, "policyType is required");
            this.principalName = java.util.Objects.requireNonNull(builder.principalName, "principalName is required");
            this.principalType = java.util.Objects.requireNonNull(builder.principalType, "principalType is required");
            this.resourceGroupId = java.util.Objects.requireNonNull(builder.resourceGroupId, "resourceGroupId is required");
        }

        @Override
        public final java.lang.Object getPolicyName() {
            return this.policyName;
        }

        @Override
        public final java.lang.Object getPolicyType() {
            return this.policyType;
        }

        @Override
        public final java.lang.Object getPrincipalName() {
            return this.principalName;
        }

        @Override
        public final java.lang.Object getPrincipalType() {
            return this.principalType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("policyName", om.valueToTree(this.getPolicyName()));
            data.set("policyType", om.valueToTree(this.getPolicyType()));
            data.set("principalName", om.valueToTree(this.getPrincipalName()));
            data.set("principalType", om.valueToTree(this.getPrincipalType()));
            data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.PolicyAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PolicyAttachmentProps.Jsii$Proxy that = (PolicyAttachmentProps.Jsii$Proxy) o;

            if (!policyName.equals(that.policyName)) return false;
            if (!policyType.equals(that.policyType)) return false;
            if (!principalName.equals(that.principalName)) return false;
            if (!principalType.equals(that.principalType)) return false;
            return this.resourceGroupId.equals(that.resourceGroupId);
        }

        @Override
        public final int hashCode() {
            int result = this.policyName.hashCode();
            result = 31 * result + (this.policyType.hashCode());
            result = 31 * result + (this.principalName.hashCode());
            result = 31 * result + (this.principalType.hashCode());
            result = 31 * result + (this.resourceGroupId.hashCode());
            return result;
        }
    }
}
