package com.aliyun.ros.cdk.alb;

/**
 * Properties for defining a `ALIYUN::ALB::Acl`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:27.368Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.AclProps")
@software.amazon.jsii.Jsii.Proxy(AclProps.Jsii$Proxy.class)
public interface AclProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property aclEntries: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclEntries() {
        return null;
    }

    /**
     * Property aclName: The name of the ACL.
     * <p>
     * The name must be 2 to 128 characters in length, and can contain
     * letters, digits, hyphens (-) and underscores (_). It must start with a letter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclName() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AclProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AclProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AclProps> {
        java.lang.Object aclEntries;
        java.lang.Object aclName;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link AclProps#getAclEntries}
         * @param aclEntries Property aclEntries: undefined.
         * @return {@code this}
         */
        public Builder aclEntries(com.aliyun.ros.cdk.core.IResolvable aclEntries) {
            this.aclEntries = aclEntries;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getAclEntries}
         * @param aclEntries Property aclEntries: undefined.
         * @return {@code this}
         */
        public Builder aclEntries(java.util.List<? extends java.lang.Object> aclEntries) {
            this.aclEntries = aclEntries;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getAclName}
         * @param aclName Property aclName: The name of the ACL.
         *                The name must be 2 to 128 characters in length, and can contain
         *                letters, digits, hyphens (-) and underscores (_). It must start with a letter.
         * @return {@code this}
         */
        public Builder aclName(java.lang.String aclName) {
            this.aclName = aclName;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getAclName}
         * @param aclName Property aclName: The name of the ACL.
         *                The name must be 2 to 128 characters in length, and can contain
         *                letters, digits, hyphens (-) and underscores (_). It must start with a letter.
         * @return {@code this}
         */
        public Builder aclName(com.aliyun.ros.cdk.core.IResolvable aclName) {
            this.aclName = aclName;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AclProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AclProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AclProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AclProps {
        private final java.lang.Object aclEntries;
        private final java.lang.Object aclName;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aclEntries = software.amazon.jsii.Kernel.get(this, "aclEntries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclName = software.amazon.jsii.Kernel.get(this, "aclName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aclEntries = builder.aclEntries;
            this.aclName = builder.aclName;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getAclEntries() {
            return this.aclEntries;
        }

        @Override
        public final java.lang.Object getAclName() {
            return this.aclName;
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

            if (this.getAclEntries() != null) {
                data.set("aclEntries", om.valueToTree(this.getAclEntries()));
            }
            if (this.getAclName() != null) {
                data.set("aclName", om.valueToTree(this.getAclName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.AclProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AclProps.Jsii$Proxy that = (AclProps.Jsii$Proxy) o;

            if (this.aclEntries != null ? !this.aclEntries.equals(that.aclEntries) : that.aclEntries != null) return false;
            if (this.aclName != null ? !this.aclName.equals(that.aclName) : that.aclName != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.aclEntries != null ? this.aclEntries.hashCode() : 0;
            result = 31 * result + (this.aclName != null ? this.aclName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
