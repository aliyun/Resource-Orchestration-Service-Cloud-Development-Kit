package com.aliyun.ros.cdk.dcdn;

/**
 * Properties for defining a <code>Domain</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dcdn-domain
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:25.142Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dcdn.$Module.class, fqn = "@alicloud/ros-cdk-dcdn.DomainProps")
@software.amazon.jsii.Jsii.Proxy(DomainProps.Jsii$Proxy.class)
public interface DomainProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property domainName: The DCDN domain name.
     * <p>
     * Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainName();

    /**
     * Property sources: The list of origin URLs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSources();

    /**
     * Property checkUrl: The validation of the origin.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCheckUrl() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     * <p>
     * If this is left blank, the system automatically fills in the ID of the default resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property scope: Valid values: domestic, overseas, and global.
     * <p>
     * Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScope() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.dcdn.RosDomain.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTopLevelDomain() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DomainProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DomainProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DomainProps> {
        java.lang.Object domainName;
        java.lang.Object sources;
        java.lang.Object checkUrl;
        java.lang.Object resourceGroupId;
        java.lang.Object scope;
        java.util.List<com.aliyun.ros.cdk.dcdn.RosDomain.TagsProperty> tags;
        java.lang.Object topLevelDomain;

        /**
         * Sets the value of {@link DomainProps#getDomainName}
         * @param domainName Property domainName: The DCDN domain name. This parameter is required.
         *                   Wildcard domain names that start with periods (.) are supported. For example, .a.com.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getDomainName}
         * @param domainName Property domainName: The DCDN domain name. This parameter is required.
         *                   Wildcard domain names that start with periods (.) are supported. For example, .a.com.
         * @return {@code this}
         */
        public Builder domainName(com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getSources}
         * @param sources Property sources: The list of origin URLs. This parameter is required.
         * @return {@code this}
         */
        public Builder sources(com.aliyun.ros.cdk.core.IResolvable sources) {
            this.sources = sources;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getSources}
         * @param sources Property sources: The list of origin URLs. This parameter is required.
         * @return {@code this}
         */
        public Builder sources(java.util.List<? extends java.lang.Object> sources) {
            this.sources = sources;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getCheckUrl}
         * @param checkUrl Property checkUrl: The validation of the origin.
         * @return {@code this}
         */
        public Builder checkUrl(java.lang.String checkUrl) {
            this.checkUrl = checkUrl;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getCheckUrl}
         * @param checkUrl Property checkUrl: The validation of the origin.
         * @return {@code this}
         */
        public Builder checkUrl(com.aliyun.ros.cdk.core.IResolvable checkUrl) {
            this.checkUrl = checkUrl;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         *                        If this is left blank, the system automatically fills in the ID of the default resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         *                        If this is left blank, the system automatically fills in the ID of the default resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getScope}
         * @param scope Property scope: Valid values: domestic, overseas, and global.
         *              Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
         * @return {@code this}
         */
        public Builder scope(java.lang.String scope) {
            this.scope = scope;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getScope}
         * @param scope Property scope: Valid values: domestic, overseas, and global.
         *              Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
         * @return {@code this}
         */
        public Builder scope(com.aliyun.ros.cdk.core.IResolvable scope) {
            this.scope = scope;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.dcdn.RosDomain.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.dcdn.RosDomain.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getTopLevelDomain}
         * @param topLevelDomain Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
         * @return {@code this}
         */
        public Builder topLevelDomain(java.lang.String topLevelDomain) {
            this.topLevelDomain = topLevelDomain;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getTopLevelDomain}
         * @param topLevelDomain Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
         * @return {@code this}
         */
        public Builder topLevelDomain(com.aliyun.ros.cdk.core.IResolvable topLevelDomain) {
            this.topLevelDomain = topLevelDomain;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DomainProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DomainProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DomainProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DomainProps {
        private final java.lang.Object domainName;
        private final java.lang.Object sources;
        private final java.lang.Object checkUrl;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object scope;
        private final java.util.List<com.aliyun.ros.cdk.dcdn.RosDomain.TagsProperty> tags;
        private final java.lang.Object topLevelDomain;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sources = software.amazon.jsii.Kernel.get(this, "sources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.checkUrl = software.amazon.jsii.Kernel.get(this, "checkUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scope = software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dcdn.RosDomain.TagsProperty.class)));
            this.topLevelDomain = software.amazon.jsii.Kernel.get(this, "topLevelDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainName = java.util.Objects.requireNonNull(builder.domainName, "domainName is required");
            this.sources = java.util.Objects.requireNonNull(builder.sources, "sources is required");
            this.checkUrl = builder.checkUrl;
            this.resourceGroupId = builder.resourceGroupId;
            this.scope = builder.scope;
            this.tags = (java.util.List<com.aliyun.ros.cdk.dcdn.RosDomain.TagsProperty>)builder.tags;
            this.topLevelDomain = builder.topLevelDomain;
        }

        @Override
        public final java.lang.Object getDomainName() {
            return this.domainName;
        }

        @Override
        public final java.lang.Object getSources() {
            return this.sources;
        }

        @Override
        public final java.lang.Object getCheckUrl() {
            return this.checkUrl;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getScope() {
            return this.scope;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.dcdn.RosDomain.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTopLevelDomain() {
            return this.topLevelDomain;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domainName", om.valueToTree(this.getDomainName()));
            data.set("sources", om.valueToTree(this.getSources()));
            if (this.getCheckUrl() != null) {
                data.set("checkUrl", om.valueToTree(this.getCheckUrl()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getScope() != null) {
                data.set("scope", om.valueToTree(this.getScope()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTopLevelDomain() != null) {
                data.set("topLevelDomain", om.valueToTree(this.getTopLevelDomain()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dcdn.DomainProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DomainProps.Jsii$Proxy that = (DomainProps.Jsii$Proxy) o;

            if (!domainName.equals(that.domainName)) return false;
            if (!sources.equals(that.sources)) return false;
            if (this.checkUrl != null ? !this.checkUrl.equals(that.checkUrl) : that.checkUrl != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.scope != null ? !this.scope.equals(that.scope) : that.scope != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.topLevelDomain != null ? this.topLevelDomain.equals(that.topLevelDomain) : that.topLevelDomain == null;
        }

        @Override
        public final int hashCode() {
            int result = this.domainName.hashCode();
            result = 31 * result + (this.sources.hashCode());
            result = 31 * result + (this.checkUrl != null ? this.checkUrl.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.scope != null ? this.scope.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.topLevelDomain != null ? this.topLevelDomain.hashCode() : 0);
            return result;
        }
    }
}
