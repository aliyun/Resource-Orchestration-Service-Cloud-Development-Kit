package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a <code>RosRole</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-role
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:38:07.313Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.RosRoleProps")
@software.amazon.jsii.Jsii.Proxy(RosRoleProps.Jsii$Proxy.class)
public interface RosRoleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAssumeRolePolicyDocument();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRoleName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxSessionDuration() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRoleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRoleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRoleProps> {
        java.lang.Object assumeRolePolicyDocument;
        java.lang.Object roleName;
        java.lang.Object description;
        java.lang.Object maxSessionDuration;

        /**
         * Sets the value of {@link RosRoleProps#getAssumeRolePolicyDocument}
         * @param assumeRolePolicyDocument the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder assumeRolePolicyDocument(com.aliyun.ros.cdk.core.IResolvable assumeRolePolicyDocument) {
            this.assumeRolePolicyDocument = assumeRolePolicyDocument;
            return this;
        }

        /**
         * Sets the value of {@link RosRoleProps#getAssumeRolePolicyDocument}
         * @param assumeRolePolicyDocument the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder assumeRolePolicyDocument(java.util.Map<java.lang.String, ? extends java.lang.Object> assumeRolePolicyDocument) {
            this.assumeRolePolicyDocument = assumeRolePolicyDocument;
            return this;
        }

        /**
         * Sets the value of {@link RosRoleProps#getRoleName}
         * @param roleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder roleName(java.lang.String roleName) {
            this.roleName = roleName;
            return this;
        }

        /**
         * Sets the value of {@link RosRoleProps#getRoleName}
         * @param roleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder roleName(com.aliyun.ros.cdk.core.IResolvable roleName) {
            this.roleName = roleName;
            return this;
        }

        /**
         * Sets the value of {@link RosRoleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosRoleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosRoleProps#getMaxSessionDuration}
         * @param maxSessionDuration the value to be set.
         * @return {@code this}
         */
        public Builder maxSessionDuration(java.lang.Number maxSessionDuration) {
            this.maxSessionDuration = maxSessionDuration;
            return this;
        }

        /**
         * Sets the value of {@link RosRoleProps#getMaxSessionDuration}
         * @param maxSessionDuration the value to be set.
         * @return {@code this}
         */
        public Builder maxSessionDuration(com.aliyun.ros.cdk.core.IResolvable maxSessionDuration) {
            this.maxSessionDuration = maxSessionDuration;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRoleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRoleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRoleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRoleProps {
        private final java.lang.Object assumeRolePolicyDocument;
        private final java.lang.Object roleName;
        private final java.lang.Object description;
        private final java.lang.Object maxSessionDuration;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.assumeRolePolicyDocument = software.amazon.jsii.Kernel.get(this, "assumeRolePolicyDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.roleName = software.amazon.jsii.Kernel.get(this, "roleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxSessionDuration = software.amazon.jsii.Kernel.get(this, "maxSessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.assumeRolePolicyDocument = java.util.Objects.requireNonNull(builder.assumeRolePolicyDocument, "assumeRolePolicyDocument is required");
            this.roleName = java.util.Objects.requireNonNull(builder.roleName, "roleName is required");
            this.description = builder.description;
            this.maxSessionDuration = builder.maxSessionDuration;
        }

        @Override
        public final java.lang.Object getAssumeRolePolicyDocument() {
            return this.assumeRolePolicyDocument;
        }

        @Override
        public final java.lang.Object getRoleName() {
            return this.roleName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getMaxSessionDuration() {
            return this.maxSessionDuration;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("assumeRolePolicyDocument", om.valueToTree(this.getAssumeRolePolicyDocument()));
            data.set("roleName", om.valueToTree(this.getRoleName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getMaxSessionDuration() != null) {
                data.set("maxSessionDuration", om.valueToTree(this.getMaxSessionDuration()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.RosRoleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRoleProps.Jsii$Proxy that = (RosRoleProps.Jsii$Proxy) o;

            if (!assumeRolePolicyDocument.equals(that.assumeRolePolicyDocument)) return false;
            if (!roleName.equals(that.roleName)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.maxSessionDuration != null ? this.maxSessionDuration.equals(that.maxSessionDuration) : that.maxSessionDuration == null;
        }

        @Override
        public final int hashCode() {
            int result = this.assumeRolePolicyDocument.hashCode();
            result = 31 * result + (this.roleName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.maxSessionDuration != null ? this.maxSessionDuration.hashCode() : 0);
            return result;
        }
    }
}
