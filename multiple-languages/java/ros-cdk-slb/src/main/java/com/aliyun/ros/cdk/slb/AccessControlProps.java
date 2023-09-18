package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a <code>ALIYUN::SLB::AccessControl</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:28.291Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.AccessControlProps")
@software.amazon.jsii.Jsii.Proxy(AccessControlProps.Jsii$Proxy.class)
public interface AccessControlProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property aclName: The name of the access control list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAclName();

    /**
     * Property aclEntries: A list of acl entries.
     * <p>
     * Each entry can be IP addresses or CIDR blocks. Max length: 50.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclEntries() {
        return null;
    }

    /**
     * Property addressIpVersion: IP version.
     * <p>
     * Could be "ipv4" or "ipv6".
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressIpVersion() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.slb.RosAccessControl.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AccessControlProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AccessControlProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AccessControlProps> {
        java.lang.Object aclName;
        java.lang.Object aclEntries;
        java.lang.Object addressIpVersion;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.slb.RosAccessControl.TagsProperty> tags;

        /**
         * Sets the value of {@link AccessControlProps#getAclName}
         * @param aclName Property aclName: The name of the access control list. This parameter is required.
         * @return {@code this}
         */
        public Builder aclName(java.lang.String aclName) {
            this.aclName = aclName;
            return this;
        }

        /**
         * Sets the value of {@link AccessControlProps#getAclName}
         * @param aclName Property aclName: The name of the access control list. This parameter is required.
         * @return {@code this}
         */
        public Builder aclName(com.aliyun.ros.cdk.core.IResolvable aclName) {
            this.aclName = aclName;
            return this;
        }

        /**
         * Sets the value of {@link AccessControlProps#getAclEntries}
         * @param aclEntries Property aclEntries: A list of acl entries.
         *                   Each entry can be IP addresses or CIDR blocks. Max length: 50.
         * @return {@code this}
         */
        public Builder aclEntries(com.aliyun.ros.cdk.core.IResolvable aclEntries) {
            this.aclEntries = aclEntries;
            return this;
        }

        /**
         * Sets the value of {@link AccessControlProps#getAclEntries}
         * @param aclEntries Property aclEntries: A list of acl entries.
         *                   Each entry can be IP addresses or CIDR blocks. Max length: 50.
         * @return {@code this}
         */
        public Builder aclEntries(java.util.List<? extends java.lang.Object> aclEntries) {
            this.aclEntries = aclEntries;
            return this;
        }

        /**
         * Sets the value of {@link AccessControlProps#getAddressIpVersion}
         * @param addressIpVersion Property addressIpVersion: IP version.
         *                         Could be "ipv4" or "ipv6".
         * @return {@code this}
         */
        public Builder addressIpVersion(java.lang.String addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link AccessControlProps#getAddressIpVersion}
         * @param addressIpVersion Property addressIpVersion: IP version.
         *                         Could be "ipv4" or "ipv6".
         * @return {@code this}
         */
        public Builder addressIpVersion(com.aliyun.ros.cdk.core.IResolvable addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link AccessControlProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link AccessControlProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link AccessControlProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.slb.RosAccessControl.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.slb.RosAccessControl.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AccessControlProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AccessControlProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AccessControlProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccessControlProps {
        private final java.lang.Object aclName;
        private final java.lang.Object aclEntries;
        private final java.lang.Object addressIpVersion;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.slb.RosAccessControl.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aclName = software.amazon.jsii.Kernel.get(this, "aclName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclEntries = software.amazon.jsii.Kernel.get(this, "aclEntries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addressIpVersion = software.amazon.jsii.Kernel.get(this, "addressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.RosAccessControl.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aclName = java.util.Objects.requireNonNull(builder.aclName, "aclName is required");
            this.aclEntries = builder.aclEntries;
            this.addressIpVersion = builder.addressIpVersion;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.slb.RosAccessControl.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getAclName() {
            return this.aclName;
        }

        @Override
        public final java.lang.Object getAclEntries() {
            return this.aclEntries;
        }

        @Override
        public final java.lang.Object getAddressIpVersion() {
            return this.addressIpVersion;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.slb.RosAccessControl.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("aclName", om.valueToTree(this.getAclName()));
            if (this.getAclEntries() != null) {
                data.set("aclEntries", om.valueToTree(this.getAclEntries()));
            }
            if (this.getAddressIpVersion() != null) {
                data.set("addressIpVersion", om.valueToTree(this.getAddressIpVersion()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.AccessControlProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AccessControlProps.Jsii$Proxy that = (AccessControlProps.Jsii$Proxy) o;

            if (!aclName.equals(that.aclName)) return false;
            if (this.aclEntries != null ? !this.aclEntries.equals(that.aclEntries) : that.aclEntries != null) return false;
            if (this.addressIpVersion != null ? !this.addressIpVersion.equals(that.addressIpVersion) : that.addressIpVersion != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.aclName.hashCode();
            result = 31 * result + (this.aclEntries != null ? this.aclEntries.hashCode() : 0);
            result = 31 * result + (this.addressIpVersion != null ? this.addressIpVersion.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
