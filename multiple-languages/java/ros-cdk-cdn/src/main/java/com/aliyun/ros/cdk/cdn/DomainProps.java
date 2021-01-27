package com.aliyun.ros.cdk.cdn;

/**
 * Properties for defining a `ALIYUN::CDN::Domain`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.248Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdn.$Module.class, fqn = "@alicloud/ros-cdk-cdn.DomainProps")
@software.amazon.jsii.Jsii.Proxy(DomainProps.Jsii$Proxy.class)
public interface DomainProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getCdnType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDomainName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCheckUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSources() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTopLevelDomain() {
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
        private java.lang.String cdnType;
        private java.lang.String domainName;
        private java.lang.String checkUrl;
        private java.lang.String resourceGroupId;
        private java.lang.String scope;
        private java.lang.String sources;
        private java.lang.String topLevelDomain;

        /**
         * Sets the value of {@link DomainProps#getCdnType}
         * @param cdnType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cdnType(java.lang.String cdnType) {
            this.cdnType = cdnType;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getCheckUrl}
         * @param checkUrl the value to be set.
         * @return {@code this}
         */
        public Builder checkUrl(java.lang.String checkUrl) {
            this.checkUrl = checkUrl;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getScope}
         * @param scope the value to be set.
         * @return {@code this}
         */
        public Builder scope(java.lang.String scope) {
            this.scope = scope;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getSources}
         * @param sources the value to be set.
         * @return {@code this}
         */
        public Builder sources(java.lang.String sources) {
            this.sources = sources;
            return this;
        }

        /**
         * Sets the value of {@link DomainProps#getTopLevelDomain}
         * @param topLevelDomain the value to be set.
         * @return {@code this}
         */
        public Builder topLevelDomain(java.lang.String topLevelDomain) {
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
            return new Jsii$Proxy(cdnType, domainName, checkUrl, resourceGroupId, scope, sources, topLevelDomain);
        }
    }

    /**
     * An implementation for {@link DomainProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DomainProps {
        private final java.lang.String cdnType;
        private final java.lang.String domainName;
        private final java.lang.String checkUrl;
        private final java.lang.String resourceGroupId;
        private final java.lang.String scope;
        private final java.lang.String sources;
        private final java.lang.String topLevelDomain;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cdnType = software.amazon.jsii.Kernel.get(this, "cdnType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.checkUrl = software.amazon.jsii.Kernel.get(this, "checkUrl", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.scope = software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sources = software.amazon.jsii.Kernel.get(this, "sources", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.topLevelDomain = software.amazon.jsii.Kernel.get(this, "topLevelDomain", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String cdnType, final java.lang.String domainName, final java.lang.String checkUrl, final java.lang.String resourceGroupId, final java.lang.String scope, final java.lang.String sources, final java.lang.String topLevelDomain) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cdnType = java.util.Objects.requireNonNull(cdnType, "cdnType is required");
            this.domainName = java.util.Objects.requireNonNull(domainName, "domainName is required");
            this.checkUrl = checkUrl;
            this.resourceGroupId = resourceGroupId;
            this.scope = scope;
            this.sources = sources;
            this.topLevelDomain = topLevelDomain;
        }

        @Override
        public final java.lang.String getCdnType() {
            return this.cdnType;
        }

        @Override
        public final java.lang.String getDomainName() {
            return this.domainName;
        }

        @Override
        public final java.lang.String getCheckUrl() {
            return this.checkUrl;
        }

        @Override
        public final java.lang.String getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.String getScope() {
            return this.scope;
        }

        @Override
        public final java.lang.String getSources() {
            return this.sources;
        }

        @Override
        public final java.lang.String getTopLevelDomain() {
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
            if (this.getTopLevelDomain() != null) {
                data.set("topLevelDomain", om.valueToTree(this.getTopLevelDomain()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cdn.DomainProps"));
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

            if (!cdnType.equals(that.cdnType)) return false;
            if (!domainName.equals(that.domainName)) return false;
            if (this.checkUrl != null ? !this.checkUrl.equals(that.checkUrl) : that.checkUrl != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.scope != null ? !this.scope.equals(that.scope) : that.scope != null) return false;
            if (this.sources != null ? !this.sources.equals(that.sources) : that.sources != null) return false;
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
            result = 31 * result + (this.topLevelDomain != null ? this.topLevelDomain.hashCode() : 0);
            return result;
        }
    }
}
