package com.aliyun.ros.cdk.kms;

/**
 * Properties for defining a <code>RosPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-policy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.727Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.RosPolicyProps")
@software.amazon.jsii.Jsii.Proxy(RosPolicyProps.Jsii$Proxy.class)
public interface RosPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessControlRules();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getKmsInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPermissions();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResources();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPolicyProps> {
        java.lang.Object accessControlRules;
        java.lang.Object kmsInstanceId;
        java.lang.Object permissions;
        java.lang.Object policyName;
        java.lang.Object resources;
        java.lang.Object description;

        /**
         * Sets the value of {@link RosPolicyProps#getAccessControlRules}
         * @param accessControlRules the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessControlRules(com.aliyun.ros.cdk.core.IResolvable accessControlRules) {
            this.accessControlRules = accessControlRules;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getAccessControlRules}
         * @param accessControlRules the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessControlRules(com.aliyun.ros.cdk.kms.RosPolicy.AccessControlRulesProperty accessControlRules) {
            this.accessControlRules = accessControlRules;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getKmsInstanceId}
         * @param kmsInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder kmsInstanceId(java.lang.String kmsInstanceId) {
            this.kmsInstanceId = kmsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getKmsInstanceId}
         * @param kmsInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder kmsInstanceId(com.aliyun.ros.cdk.core.IResolvable kmsInstanceId) {
            this.kmsInstanceId = kmsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getPermissions}
         * @param permissions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder permissions(com.aliyun.ros.cdk.core.IResolvable permissions) {
            this.permissions = permissions;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getPermissions}
         * @param permissions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder permissions(java.util.List<? extends java.lang.Object> permissions) {
            this.permissions = permissions;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getPolicyName}
         * @param policyName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(java.lang.String policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getPolicyName}
         * @param policyName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getResources}
         * @param resources the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resources(com.aliyun.ros.cdk.core.IResolvable resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getResources}
         * @param resources the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resources(java.util.List<? extends java.lang.Object> resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPolicyProps {
        private final java.lang.Object accessControlRules;
        private final java.lang.Object kmsInstanceId;
        private final java.lang.Object permissions;
        private final java.lang.Object policyName;
        private final java.lang.Object resources;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessControlRules = software.amazon.jsii.Kernel.get(this, "accessControlRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kmsInstanceId = software.amazon.jsii.Kernel.get(this, "kmsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.permissions = software.amazon.jsii.Kernel.get(this, "permissions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyName = software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resources = software.amazon.jsii.Kernel.get(this, "resources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessControlRules = java.util.Objects.requireNonNull(builder.accessControlRules, "accessControlRules is required");
            this.kmsInstanceId = java.util.Objects.requireNonNull(builder.kmsInstanceId, "kmsInstanceId is required");
            this.permissions = java.util.Objects.requireNonNull(builder.permissions, "permissions is required");
            this.policyName = java.util.Objects.requireNonNull(builder.policyName, "policyName is required");
            this.resources = java.util.Objects.requireNonNull(builder.resources, "resources is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getAccessControlRules() {
            return this.accessControlRules;
        }

        @Override
        public final java.lang.Object getKmsInstanceId() {
            return this.kmsInstanceId;
        }

        @Override
        public final java.lang.Object getPermissions() {
            return this.permissions;
        }

        @Override
        public final java.lang.Object getPolicyName() {
            return this.policyName;
        }

        @Override
        public final java.lang.Object getResources() {
            return this.resources;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accessControlRules", om.valueToTree(this.getAccessControlRules()));
            data.set("kmsInstanceId", om.valueToTree(this.getKmsInstanceId()));
            data.set("permissions", om.valueToTree(this.getPermissions()));
            data.set("policyName", om.valueToTree(this.getPolicyName()));
            data.set("resources", om.valueToTree(this.getResources()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kms.RosPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPolicyProps.Jsii$Proxy that = (RosPolicyProps.Jsii$Proxy) o;

            if (!accessControlRules.equals(that.accessControlRules)) return false;
            if (!kmsInstanceId.equals(that.kmsInstanceId)) return false;
            if (!permissions.equals(that.permissions)) return false;
            if (!policyName.equals(that.policyName)) return false;
            if (!resources.equals(that.resources)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessControlRules.hashCode();
            result = 31 * result + (this.kmsInstanceId.hashCode());
            result = 31 * result + (this.permissions.hashCode());
            result = 31 * result + (this.policyName.hashCode());
            result = 31 * result + (this.resources.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
