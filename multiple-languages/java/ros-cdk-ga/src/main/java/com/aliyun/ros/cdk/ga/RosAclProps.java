package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>RosAcl</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-acl
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:07.259Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosAclProps")
@software.amazon.jsii.Jsii.Proxy(RosAclProps.Jsii$Proxy.class)
public interface RosAclProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAddressIpVersion();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclEntries() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ga.RosAcl.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAclProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAclProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAclProps> {
        java.lang.Object addressIpVersion;
        java.lang.Object aclEntries;
        java.lang.Object aclName;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.ga.RosAcl.TagsProperty> tags;

        /**
         * Sets the value of {@link RosAclProps#getAddressIpVersion}
         * @param addressIpVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder addressIpVersion(java.lang.String addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosAclProps#getAddressIpVersion}
         * @param addressIpVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder addressIpVersion(com.aliyun.ros.cdk.core.IResolvable addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosAclProps#getAclEntries}
         * @param aclEntries the value to be set.
         * @return {@code this}
         */
        public Builder aclEntries(com.aliyun.ros.cdk.core.IResolvable aclEntries) {
            this.aclEntries = aclEntries;
            return this;
        }

        /**
         * Sets the value of {@link RosAclProps#getAclEntries}
         * @param aclEntries the value to be set.
         * @return {@code this}
         */
        public Builder aclEntries(java.util.List<? extends java.lang.Object> aclEntries) {
            this.aclEntries = aclEntries;
            return this;
        }

        /**
         * Sets the value of {@link RosAclProps#getAclName}
         * @param aclName the value to be set.
         * @return {@code this}
         */
        public Builder aclName(java.lang.String aclName) {
            this.aclName = aclName;
            return this;
        }

        /**
         * Sets the value of {@link RosAclProps#getAclName}
         * @param aclName the value to be set.
         * @return {@code this}
         */
        public Builder aclName(com.aliyun.ros.cdk.core.IResolvable aclName) {
            this.aclName = aclName;
            return this;
        }

        /**
         * Sets the value of {@link RosAclProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosAclProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosAclProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ga.RosAcl.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ga.RosAcl.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAclProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAclProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAclProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAclProps {
        private final java.lang.Object addressIpVersion;
        private final java.lang.Object aclEntries;
        private final java.lang.Object aclName;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.ga.RosAcl.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.addressIpVersion = software.amazon.jsii.Kernel.get(this, "addressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclEntries = software.amazon.jsii.Kernel.get(this, "aclEntries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclName = software.amazon.jsii.Kernel.get(this, "aclName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.RosAcl.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.addressIpVersion = java.util.Objects.requireNonNull(builder.addressIpVersion, "addressIpVersion is required");
            this.aclEntries = builder.aclEntries;
            this.aclName = builder.aclName;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ga.RosAcl.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getAddressIpVersion() {
            return this.addressIpVersion;
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
        public final java.util.List<com.aliyun.ros.cdk.ga.RosAcl.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("addressIpVersion", om.valueToTree(this.getAddressIpVersion()));
            if (this.getAclEntries() != null) {
                data.set("aclEntries", om.valueToTree(this.getAclEntries()));
            }
            if (this.getAclName() != null) {
                data.set("aclName", om.valueToTree(this.getAclName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosAclProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAclProps.Jsii$Proxy that = (RosAclProps.Jsii$Proxy) o;

            if (!addressIpVersion.equals(that.addressIpVersion)) return false;
            if (this.aclEntries != null ? !this.aclEntries.equals(that.aclEntries) : that.aclEntries != null) return false;
            if (this.aclName != null ? !this.aclName.equals(that.aclName) : that.aclName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.addressIpVersion.hashCode();
            result = 31 * result + (this.aclEntries != null ? this.aclEntries.hashCode() : 0);
            result = 31 * result + (this.aclName != null ? this.aclName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
