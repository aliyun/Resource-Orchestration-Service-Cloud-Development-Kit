package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>PrefixList</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-prefixlist
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:17.842Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.PrefixListProps")
@software.amazon.jsii.Jsii.Proxy(PrefixListProps.Jsii$Proxy.class)
public interface PrefixListProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property entries: The CIDR address block list of the prefix list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEntries() {
        return null;
    }

    /**
     * Property ipVersion: The IP version of the prefix list.
     * <p>
     * Value:
     * <p>
     * <ul>
     * <li><strong>IPvv4</strong>:IPv4 version.</li>
     * <li><strong>IPv6</strong>:IPv6.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpVersion() {
        return null;
    }

    /**
     * Property maxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxEntries() {
        return null;
    }

    /**
     * Property prefixListDescription: The description of the prefix list.
     * <p>
     * It must be 2 to 256 characters in length and must start with a letter or Chinese, but cannot start with http:// or https.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrefixListDescription() {
        return null;
    }

    /**
     * Property prefixListName: The name of the prefix list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrefixListName() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags of prefix list.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosPrefixList.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PrefixListProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PrefixListProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PrefixListProps> {
        java.lang.Object entries;
        java.lang.Object ipVersion;
        java.lang.Object maxEntries;
        java.lang.Object prefixListDescription;
        java.lang.Object prefixListName;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.vpc.RosPrefixList.TagsProperty> tags;

        /**
         * Sets the value of {@link PrefixListProps#getEntries}
         * @param entries Property entries: The CIDR address block list of the prefix list.
         * @return {@code this}
         */
        public Builder entries(com.aliyun.ros.cdk.core.IResolvable entries) {
            this.entries = entries;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getEntries}
         * @param entries Property entries: The CIDR address block list of the prefix list.
         * @return {@code this}
         */
        public Builder entries(java.util.List<? extends java.lang.Object> entries) {
            this.entries = entries;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getIpVersion}
         * @param ipVersion Property ipVersion: The IP version of the prefix list.
         *                  Value:
         *                  <p>
         *                  <ul>
         *                  <li><strong>IPvv4</strong>:IPv4 version.</li>
         *                  <li><strong>IPv6</strong>:IPv6.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder ipVersion(java.lang.String ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getIpVersion}
         * @param ipVersion Property ipVersion: The IP version of the prefix list.
         *                  Value:
         *                  <p>
         *                  <ul>
         *                  <li><strong>IPvv4</strong>:IPv4 version.</li>
         *                  <li><strong>IPv6</strong>:IPv6.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder ipVersion(com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getMaxEntries}
         * @param maxEntries Property maxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
         * @return {@code this}
         */
        public Builder maxEntries(java.lang.Number maxEntries) {
            this.maxEntries = maxEntries;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getMaxEntries}
         * @param maxEntries Property maxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
         * @return {@code this}
         */
        public Builder maxEntries(com.aliyun.ros.cdk.core.IResolvable maxEntries) {
            this.maxEntries = maxEntries;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getPrefixListDescription}
         * @param prefixListDescription Property prefixListDescription: The description of the prefix list.
         *                              It must be 2 to 256 characters in length and must start with a letter or Chinese, but cannot start with http:// or https.
         * @return {@code this}
         */
        public Builder prefixListDescription(java.lang.String prefixListDescription) {
            this.prefixListDescription = prefixListDescription;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getPrefixListDescription}
         * @param prefixListDescription Property prefixListDescription: The description of the prefix list.
         *                              It must be 2 to 256 characters in length and must start with a letter or Chinese, but cannot start with http:// or https.
         * @return {@code this}
         */
        public Builder prefixListDescription(com.aliyun.ros.cdk.core.IResolvable prefixListDescription) {
            this.prefixListDescription = prefixListDescription;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getPrefixListName}
         * @param prefixListName Property prefixListName: The name of the prefix list.
         * @return {@code this}
         */
        public Builder prefixListName(java.lang.String prefixListName) {
            this.prefixListName = prefixListName;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getPrefixListName}
         * @param prefixListName Property prefixListName: The name of the prefix list.
         * @return {@code this}
         */
        public Builder prefixListName(com.aliyun.ros.cdk.core.IResolvable prefixListName) {
            this.prefixListName = prefixListName;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the VPC belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the VPC belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListProps#getTags}
         * @param tags Property tags: Tags of prefix list.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.vpc.RosPrefixList.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosPrefixList.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PrefixListProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PrefixListProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PrefixListProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrefixListProps {
        private final java.lang.Object entries;
        private final java.lang.Object ipVersion;
        private final java.lang.Object maxEntries;
        private final java.lang.Object prefixListDescription;
        private final java.lang.Object prefixListName;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.vpc.RosPrefixList.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.entries = software.amazon.jsii.Kernel.get(this, "entries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipVersion = software.amazon.jsii.Kernel.get(this, "ipVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxEntries = software.amazon.jsii.Kernel.get(this, "maxEntries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.prefixListDescription = software.amazon.jsii.Kernel.get(this, "prefixListDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.prefixListName = software.amazon.jsii.Kernel.get(this, "prefixListName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.RosPrefixList.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.entries = builder.entries;
            this.ipVersion = builder.ipVersion;
            this.maxEntries = builder.maxEntries;
            this.prefixListDescription = builder.prefixListDescription;
            this.prefixListName = builder.prefixListName;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosPrefixList.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getEntries() {
            return this.entries;
        }

        @Override
        public final java.lang.Object getIpVersion() {
            return this.ipVersion;
        }

        @Override
        public final java.lang.Object getMaxEntries() {
            return this.maxEntries;
        }

        @Override
        public final java.lang.Object getPrefixListDescription() {
            return this.prefixListDescription;
        }

        @Override
        public final java.lang.Object getPrefixListName() {
            return this.prefixListName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.vpc.RosPrefixList.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getEntries() != null) {
                data.set("entries", om.valueToTree(this.getEntries()));
            }
            if (this.getIpVersion() != null) {
                data.set("ipVersion", om.valueToTree(this.getIpVersion()));
            }
            if (this.getMaxEntries() != null) {
                data.set("maxEntries", om.valueToTree(this.getMaxEntries()));
            }
            if (this.getPrefixListDescription() != null) {
                data.set("prefixListDescription", om.valueToTree(this.getPrefixListDescription()));
            }
            if (this.getPrefixListName() != null) {
                data.set("prefixListName", om.valueToTree(this.getPrefixListName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.PrefixListProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PrefixListProps.Jsii$Proxy that = (PrefixListProps.Jsii$Proxy) o;

            if (this.entries != null ? !this.entries.equals(that.entries) : that.entries != null) return false;
            if (this.ipVersion != null ? !this.ipVersion.equals(that.ipVersion) : that.ipVersion != null) return false;
            if (this.maxEntries != null ? !this.maxEntries.equals(that.maxEntries) : that.maxEntries != null) return false;
            if (this.prefixListDescription != null ? !this.prefixListDescription.equals(that.prefixListDescription) : that.prefixListDescription != null) return false;
            if (this.prefixListName != null ? !this.prefixListName.equals(that.prefixListName) : that.prefixListName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.entries != null ? this.entries.hashCode() : 0;
            result = 31 * result + (this.ipVersion != null ? this.ipVersion.hashCode() : 0);
            result = 31 * result + (this.maxEntries != null ? this.maxEntries.hashCode() : 0);
            result = 31 * result + (this.prefixListDescription != null ? this.prefixListDescription.hashCode() : 0);
            result = 31 * result + (this.prefixListName != null ? this.prefixListName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
