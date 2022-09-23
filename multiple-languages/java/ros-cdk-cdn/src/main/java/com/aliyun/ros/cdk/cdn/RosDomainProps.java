package com.aliyun.ros.cdk.cdn;

/**
 * Properties for defining a `ALIYUN::CDN::Domain`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:09.191Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdn.$Module.class, fqn = "@alicloud/ros-cdk-cdn.RosDomainProps")
@software.amazon.jsii.Jsii.Proxy(RosDomainProps.Jsii$Proxy.class)
public interface RosDomainProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCdnType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCheckUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSources() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cdn.RosDomain.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTopLevelDomain() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDomainProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDomainProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDomainProps> {
        java.lang.Object cdnType;
        java.lang.Object domainName;
        java.lang.Object checkUrl;
        java.lang.Object resourceGroupId;
        java.lang.Object scope;
        java.lang.Object sources;
        java.util.List<com.aliyun.ros.cdk.cdn.RosDomain.TagsProperty> tags;
        java.lang.Object topLevelDomain;

        /**
         * Sets the value of {@link RosDomainProps#getCdnType}
         * @param cdnType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cdnType(java.lang.String cdnType) {
            this.cdnType = cdnType;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getCdnType}
         * @param cdnType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cdnType(com.aliyun.ros.cdk.core.IResolvable cdnType) {
            this.cdnType = cdnType;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getCheckUrl}
         * @param checkUrl the value to be set.
         * @return {@code this}
         */
        public Builder checkUrl(java.lang.String checkUrl) {
            this.checkUrl = checkUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getCheckUrl}
         * @param checkUrl the value to be set.
         * @return {@code this}
         */
        public Builder checkUrl(com.aliyun.ros.cdk.core.IResolvable checkUrl) {
            this.checkUrl = checkUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getScope}
         * @param scope the value to be set.
         * @return {@code this}
         */
        public Builder scope(java.lang.String scope) {
            this.scope = scope;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getScope}
         * @param scope the value to be set.
         * @return {@code this}
         */
        public Builder scope(com.aliyun.ros.cdk.core.IResolvable scope) {
            this.scope = scope;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getSources}
         * @param sources the value to be set.
         * @return {@code this}
         */
        public Builder sources(java.lang.String sources) {
            this.sources = sources;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getSources}
         * @param sources the value to be set.
         * @return {@code this}
         */
        public Builder sources(com.aliyun.ros.cdk.core.IResolvable sources) {
            this.sources = sources;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cdn.RosDomain.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.cdn.RosDomain.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getTopLevelDomain}
         * @param topLevelDomain the value to be set.
         * @return {@code this}
         */
        public Builder topLevelDomain(java.lang.String topLevelDomain) {
            this.topLevelDomain = topLevelDomain;
            return this;
        }

        /**
         * Sets the value of {@link RosDomainProps#getTopLevelDomain}
         * @param topLevelDomain the value to be set.
         * @return {@code this}
         */
        public Builder topLevelDomain(com.aliyun.ros.cdk.core.IResolvable topLevelDomain) {
            this.topLevelDomain = topLevelDomain;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDomainProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDomainProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDomainProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDomainProps {
        private final java.lang.Object cdnType;
        private final java.lang.Object domainName;
        private final java.lang.Object checkUrl;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object scope;
        private final java.lang.Object sources;
        private final java.util.List<com.aliyun.ros.cdk.cdn.RosDomain.TagsProperty> tags;
        private final java.lang.Object topLevelDomain;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cdnType = software.amazon.jsii.Kernel.get(this, "cdnType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.checkUrl = software.amazon.jsii.Kernel.get(this, "checkUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scope = software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sources = software.amazon.jsii.Kernel.get(this, "sources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cdn.RosDomain.TagsProperty.class)));
            this.topLevelDomain = software.amazon.jsii.Kernel.get(this, "topLevelDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cdnType = java.util.Objects.requireNonNull(builder.cdnType, "cdnType is required");
            this.domainName = java.util.Objects.requireNonNull(builder.domainName, "domainName is required");
            this.checkUrl = builder.checkUrl;
            this.resourceGroupId = builder.resourceGroupId;
            this.scope = builder.scope;
            this.sources = builder.sources;
            this.tags = (java.util.List<com.aliyun.ros.cdk.cdn.RosDomain.TagsProperty>)builder.tags;
            this.topLevelDomain = builder.topLevelDomain;
        }

        @Override
        public final java.lang.Object getCdnType() {
            return this.cdnType;
        }

        @Override
        public final java.lang.Object getDomainName() {
            return this.domainName;
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
        public final java.lang.Object getSources() {
            return this.sources;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.cdn.RosDomain.TagsProperty> getTags() {
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

            data.set("cdnType", om.valueToTree(this.getCdnType()));
            data.set("domainName", om.valueToTree(this.getDomainName()));
            if (this.getCheckUrl() != null) {
                data.set("checkUrl", om.valueToTree(this.getCheckUrl()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getScope() != null) {
                data.set("scope", om.valueToTree(this.getScope()));
            }
            if (this.getSources() != null) {
                data.set("sources", om.valueToTree(this.getSources()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTopLevelDomain() != null) {
                data.set("topLevelDomain", om.valueToTree(this.getTopLevelDomain()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cdn.RosDomainProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDomainProps.Jsii$Proxy that = (RosDomainProps.Jsii$Proxy) o;

            if (!cdnType.equals(that.cdnType)) return false;
            if (!domainName.equals(that.domainName)) return false;
            if (this.checkUrl != null ? !this.checkUrl.equals(that.checkUrl) : that.checkUrl != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.scope != null ? !this.scope.equals(that.scope) : that.scope != null) return false;
            if (this.sources != null ? !this.sources.equals(that.sources) : that.sources != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.topLevelDomain != null ? this.topLevelDomain.equals(that.topLevelDomain) : that.topLevelDomain == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cdnType.hashCode();
            result = 31 * result + (this.domainName.hashCode());
            result = 31 * result + (this.checkUrl != null ? this.checkUrl.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.scope != null ? this.scope.hashCode() : 0);
            result = 31 * result + (this.sources != null ? this.sources.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.topLevelDomain != null ? this.topLevelDomain.hashCode() : 0);
            return result;
        }
    }
}
