package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a `ALIYUN::RAM::ManagedPolicy`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:20.253Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosManagedPolicyProps")
@software.amazon.jsii.Jsii.Proxy(RosManagedPolicyProps.Jsii$Proxy.class)
public interface RosManagedPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroups() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicyDocument() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicyDocumentUnchecked() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRoles() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUsers() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosManagedPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosManagedPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosManagedPolicyProps> {
        java.lang.Object policyName;
        java.lang.Object description;
        java.lang.Object groups;
        java.lang.Object policyDocument;
        java.lang.Object policyDocumentUnchecked;
        java.lang.Object roles;
        java.lang.Object users;

        /**
         * Sets the value of {@link RosManagedPolicyProps#getPolicyName}
         * @param policyName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(java.lang.String policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedPolicyProps#getPolicyName}
         * @param policyName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedPolicyProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedPolicyProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedPolicyProps#getGroups}
         * @param groups the value to be set.
         * @return {@code this}
         */
        public Builder groups(java.util.List<? extends java.lang.Object> groups) {
            this.groups = groups;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedPolicyProps#getGroups}
         * @param groups the value to be set.
         * @return {@code this}
         */
        public Builder groups(com.aliyun.ros.cdk.core.IResolvable groups) {
            this.groups = groups;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedPolicyProps#getPolicyDocument}
         * @param policyDocument the value to be set.
         * @return {@code this}
         */
        public Builder policyDocument(com.aliyun.ros.cdk.core.IResolvable policyDocument) {
            this.policyDocument = policyDocument;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedPolicyProps#getPolicyDocument}
         * @param policyDocument the value to be set.
         * @return {@code this}
         */
        public Builder policyDocument(com.aliyun.ros.cdk.ram.RosManagedPolicy.PolicyDocumentProperty policyDocument) {
            this.policyDocument = policyDocument;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedPolicyProps#getPolicyDocumentUnchecked}
         * @param policyDocumentUnchecked the value to be set.
         * @return {@code this}
         */
        public Builder policyDocumentUnchecked(com.aliyun.ros.cdk.core.IResolvable policyDocumentUnchecked) {
            this.policyDocumentUnchecked = policyDocumentUnchecked;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedPolicyProps#getPolicyDocumentUnchecked}
         * @param policyDocumentUnchecked the value to be set.
         * @return {@code this}
         */
        public Builder policyDocumentUnchecked(java.util.Map<java.lang.String, ? extends java.lang.Object> policyDocumentUnchecked) {
            this.policyDocumentUnchecked = policyDocumentUnchecked;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedPolicyProps#getRoles}
         * @param roles the value to be set.
         * @return {@code this}
         */
        public Builder roles(java.util.List<? extends java.lang.Object> roles) {
            this.roles = roles;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedPolicyProps#getRoles}
         * @param roles the value to be set.
         * @return {@code this}
         */
        public Builder roles(com.aliyun.ros.cdk.core.IResolvable roles) {
            this.roles = roles;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedPolicyProps#getUsers}
         * @param users the value to be set.
         * @return {@code this}
         */
        public Builder users(java.util.List<? extends java.lang.Object> users) {
            this.users = users;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedPolicyProps#getUsers}
         * @param users the value to be set.
         * @return {@code this}
         */
        public Builder users(com.aliyun.ros.cdk.core.IResolvable users) {
            this.users = users;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosManagedPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosManagedPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosManagedPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosManagedPolicyProps {
        private final java.lang.Object policyName;
        private final java.lang.Object description;
        private final java.lang.Object groups;
        private final java.lang.Object policyDocument;
        private final java.lang.Object policyDocumentUnchecked;
        private final java.lang.Object roles;
        private final java.lang.Object users;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.policyName = software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groups = software.amazon.jsii.Kernel.get(this, "groups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyDocument = software.amazon.jsii.Kernel.get(this, "policyDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyDocumentUnchecked = software.amazon.jsii.Kernel.get(this, "policyDocumentUnchecked", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.roles = software.amazon.jsii.Kernel.get(this, "roles", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.users = software.amazon.jsii.Kernel.get(this, "users", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.policyName = java.util.Objects.requireNonNull(builder.policyName, "policyName is required");
            this.description = builder.description;
            this.groups = builder.groups;
            this.policyDocument = builder.policyDocument;
            this.policyDocumentUnchecked = builder.policyDocumentUnchecked;
            this.roles = builder.roles;
            this.users = builder.users;
        }

        @Override
        public final java.lang.Object getPolicyName() {
            return this.policyName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getGroups() {
            return this.groups;
        }

        @Override
        public final java.lang.Object getPolicyDocument() {
            return this.policyDocument;
        }

        @Override
        public final java.lang.Object getPolicyDocumentUnchecked() {
            return this.policyDocumentUnchecked;
        }

        @Override
        public final java.lang.Object getRoles() {
            return this.roles;
        }

        @Override
        public final java.lang.Object getUsers() {
            return this.users;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("policyName", om.valueToTree(this.getPolicyName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getGroups() != null) {
                data.set("groups", om.valueToTree(this.getGroups()));
            }
            if (this.getPolicyDocument() != null) {
                data.set("policyDocument", om.valueToTree(this.getPolicyDocument()));
            }
            if (this.getPolicyDocumentUnchecked() != null) {
                data.set("policyDocumentUnchecked", om.valueToTree(this.getPolicyDocumentUnchecked()));
            }
            if (this.getRoles() != null) {
                data.set("roles", om.valueToTree(this.getRoles()));
            }
            if (this.getUsers() != null) {
                data.set("users", om.valueToTree(this.getUsers()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosManagedPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosManagedPolicyProps.Jsii$Proxy that = (RosManagedPolicyProps.Jsii$Proxy) o;

            if (!policyName.equals(that.policyName)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.groups != null ? !this.groups.equals(that.groups) : that.groups != null) return false;
            if (this.policyDocument != null ? !this.policyDocument.equals(that.policyDocument) : that.policyDocument != null) return false;
            if (this.policyDocumentUnchecked != null ? !this.policyDocumentUnchecked.equals(that.policyDocumentUnchecked) : that.policyDocumentUnchecked != null) return false;
            if (this.roles != null ? !this.roles.equals(that.roles) : that.roles != null) return false;
            return this.users != null ? this.users.equals(that.users) : that.users == null;
        }

        @Override
        public final int hashCode() {
            int result = this.policyName.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.groups != null ? this.groups.hashCode() : 0);
            result = 31 * result + (this.policyDocument != null ? this.policyDocument.hashCode() : 0);
            result = 31 * result + (this.policyDocumentUnchecked != null ? this.policyDocumentUnchecked.hashCode() : 0);
            result = 31 * result + (this.roles != null ? this.roles.hashCode() : 0);
            result = 31 * result + (this.users != null ? this.users.hashCode() : 0);
            return result;
        }
    }
}
