package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>ALIYUN::VPC::PrefixList</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:12.008Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosPrefixListProps")
@software.amazon.jsii.Jsii.Proxy(RosPrefixListProps.Jsii$Proxy.class)
public interface RosPrefixListProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEntries() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxEntries() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrefixListDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrefixListName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosPrefixList.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosPrefixListProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPrefixListProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPrefixListProps> {
        java.lang.Object entries;
        java.lang.Object ipVersion;
        java.lang.Object maxEntries;
        java.lang.Object prefixListDescription;
        java.lang.Object prefixListName;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.vpc.RosPrefixList.TagsProperty> tags;

        /**
         * Sets the value of {@link RosPrefixListProps#getEntries}
         * @param entries the value to be set.
         * @return {@code this}
         */
        public Builder entries(com.aliyun.ros.cdk.core.IResolvable entries) {
            this.entries = entries;
            return this;
        }

        /**
         * Sets the value of {@link RosPrefixListProps#getEntries}
         * @param entries the value to be set.
         * @return {@code this}
         */
        public Builder entries(java.util.List<? extends java.lang.Object> entries) {
            this.entries = entries;
            return this;
        }

        /**
         * Sets the value of {@link RosPrefixListProps#getIpVersion}
         * @param ipVersion the value to be set.
         * @return {@code this}
         */
        public Builder ipVersion(java.lang.String ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosPrefixListProps#getIpVersion}
         * @param ipVersion the value to be set.
         * @return {@code this}
         */
        public Builder ipVersion(com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosPrefixListProps#getMaxEntries}
         * @param maxEntries the value to be set.
         * @return {@code this}
         */
        public Builder maxEntries(java.lang.Number maxEntries) {
            this.maxEntries = maxEntries;
            return this;
        }

        /**
         * Sets the value of {@link RosPrefixListProps#getMaxEntries}
         * @param maxEntries the value to be set.
         * @return {@code this}
         */
        public Builder maxEntries(com.aliyun.ros.cdk.core.IResolvable maxEntries) {
            this.maxEntries = maxEntries;
            return this;
        }

        /**
         * Sets the value of {@link RosPrefixListProps#getPrefixListDescription}
         * @param prefixListDescription the value to be set.
         * @return {@code this}
         */
        public Builder prefixListDescription(java.lang.String prefixListDescription) {
            this.prefixListDescription = prefixListDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosPrefixListProps#getPrefixListDescription}
         * @param prefixListDescription the value to be set.
         * @return {@code this}
         */
        public Builder prefixListDescription(com.aliyun.ros.cdk.core.IResolvable prefixListDescription) {
            this.prefixListDescription = prefixListDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosPrefixListProps#getPrefixListName}
         * @param prefixListName the value to be set.
         * @return {@code this}
         */
        public Builder prefixListName(java.lang.String prefixListName) {
            this.prefixListName = prefixListName;
            return this;
        }

        /**
         * Sets the value of {@link RosPrefixListProps#getPrefixListName}
         * @param prefixListName the value to be set.
         * @return {@code this}
         */
        public Builder prefixListName(com.aliyun.ros.cdk.core.IResolvable prefixListName) {
            this.prefixListName = prefixListName;
            return this;
        }

        /**
         * Sets the value of {@link RosPrefixListProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosPrefixListProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosPrefixListProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.vpc.RosPrefixList.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosPrefixList.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPrefixListProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPrefixListProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPrefixListProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPrefixListProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosPrefixListProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPrefixListProps.Jsii$Proxy that = (RosPrefixListProps.Jsii$Proxy) o;

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
