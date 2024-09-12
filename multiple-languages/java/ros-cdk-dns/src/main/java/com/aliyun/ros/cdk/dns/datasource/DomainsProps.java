package com.aliyun.ros.cdk.dns.datasource;

/**
 * Properties for defining a <code>Domains</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domains
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:25.351Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.datasource.DomainsProps")
@software.amazon.jsii.Jsii.Proxy(DomainsProps.Jsii$Proxy.class)
public interface DomainsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property groupId: The ID of the domain name group.
     * <p>
     * If you do not specify this parameter, all domain names are queried by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupId() {
        return null;
    }

    /**
     * Property keyWord: The keyword for searches in "%KeyWord%" mode.
     * <p>
     * The value is not case-sensitive.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyWord() {
        return null;
    }

    /**
     * Property lang: The language type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLang() {
        return null;
    }

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property searchMode: The search mode.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSearchMode() {
        return null;
    }

    /**
     * Property starmark: Specifies whether to query the starmark of the domain name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStarmark() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DomainsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DomainsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DomainsProps> {
        java.lang.Object groupId;
        java.lang.Object keyWord;
        java.lang.Object lang;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;
        java.lang.Object searchMode;
        java.lang.Object starmark;

        /**
         * Sets the value of {@link DomainsProps#getGroupId}
         * @param groupId Property groupId: The ID of the domain name group.
         *                If you do not specify this parameter, all domain names are queried by default.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link DomainsProps#getGroupId}
         * @param groupId Property groupId: The ID of the domain name group.
         *                If you do not specify this parameter, all domain names are queried by default.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link DomainsProps#getKeyWord}
         * @param keyWord Property keyWord: The keyword for searches in "%KeyWord%" mode.
         *                The value is not case-sensitive.
         * @return {@code this}
         */
        public Builder keyWord(java.lang.String keyWord) {
            this.keyWord = keyWord;
            return this;
        }

        /**
         * Sets the value of {@link DomainsProps#getKeyWord}
         * @param keyWord Property keyWord: The keyword for searches in "%KeyWord%" mode.
         *                The value is not case-sensitive.
         * @return {@code this}
         */
        public Builder keyWord(com.aliyun.ros.cdk.core.IResolvable keyWord) {
            this.keyWord = keyWord;
            return this;
        }

        /**
         * Sets the value of {@link DomainsProps#getLang}
         * @param lang Property lang: The language type.
         * @return {@code this}
         */
        public Builder lang(java.lang.String lang) {
            this.lang = lang;
            return this;
        }

        /**
         * Sets the value of {@link DomainsProps#getLang}
         * @param lang Property lang: The language type.
         * @return {@code this}
         */
        public Builder lang(com.aliyun.ros.cdk.core.IResolvable lang) {
            this.lang = lang;
            return this;
        }

        /**
         * Sets the value of {@link DomainsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link DomainsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link DomainsProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DomainsProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DomainsProps#getSearchMode}
         * @param searchMode Property searchMode: The search mode.
         * @return {@code this}
         */
        public Builder searchMode(java.lang.String searchMode) {
            this.searchMode = searchMode;
            return this;
        }

        /**
         * Sets the value of {@link DomainsProps#getSearchMode}
         * @param searchMode Property searchMode: The search mode.
         * @return {@code this}
         */
        public Builder searchMode(com.aliyun.ros.cdk.core.IResolvable searchMode) {
            this.searchMode = searchMode;
            return this;
        }

        /**
         * Sets the value of {@link DomainsProps#getStarmark}
         * @param starmark Property starmark: Specifies whether to query the starmark of the domain name.
         * @return {@code this}
         */
        public Builder starmark(java.lang.Boolean starmark) {
            this.starmark = starmark;
            return this;
        }

        /**
         * Sets the value of {@link DomainsProps#getStarmark}
         * @param starmark Property starmark: Specifies whether to query the starmark of the domain name.
         * @return {@code this}
         */
        public Builder starmark(com.aliyun.ros.cdk.core.IResolvable starmark) {
            this.starmark = starmark;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DomainsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DomainsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DomainsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DomainsProps {
        private final java.lang.Object groupId;
        private final java.lang.Object keyWord;
        private final java.lang.Object lang;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object searchMode;
        private final java.lang.Object starmark;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyWord = software.amazon.jsii.Kernel.get(this, "keyWord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lang = software.amazon.jsii.Kernel.get(this, "lang", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.searchMode = software.amazon.jsii.Kernel.get(this, "searchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.starmark = software.amazon.jsii.Kernel.get(this, "starmark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupId = builder.groupId;
            this.keyWord = builder.keyWord;
            this.lang = builder.lang;
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupId = builder.resourceGroupId;
            this.searchMode = builder.searchMode;
            this.starmark = builder.starmark;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getKeyWord() {
            return this.keyWord;
        }

        @Override
        public final java.lang.Object getLang() {
            return this.lang;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSearchMode() {
            return this.searchMode;
        }

        @Override
        public final java.lang.Object getStarmark() {
            return this.starmark;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getGroupId() != null) {
                data.set("groupId", om.valueToTree(this.getGroupId()));
            }
            if (this.getKeyWord() != null) {
                data.set("keyWord", om.valueToTree(this.getKeyWord()));
            }
            if (this.getLang() != null) {
                data.set("lang", om.valueToTree(this.getLang()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSearchMode() != null) {
                data.set("searchMode", om.valueToTree(this.getSearchMode()));
            }
            if (this.getStarmark() != null) {
                data.set("starmark", om.valueToTree(this.getStarmark()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dns.datasource.DomainsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DomainsProps.Jsii$Proxy that = (DomainsProps.Jsii$Proxy) o;

            if (this.groupId != null ? !this.groupId.equals(that.groupId) : that.groupId != null) return false;
            if (this.keyWord != null ? !this.keyWord.equals(that.keyWord) : that.keyWord != null) return false;
            if (this.lang != null ? !this.lang.equals(that.lang) : that.lang != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.searchMode != null ? !this.searchMode.equals(that.searchMode) : that.searchMode != null) return false;
            return this.starmark != null ? this.starmark.equals(that.starmark) : that.starmark == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupId != null ? this.groupId.hashCode() : 0;
            result = 31 * result + (this.keyWord != null ? this.keyWord.hashCode() : 0);
            result = 31 * result + (this.lang != null ? this.lang.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.searchMode != null ? this.searchMode.hashCode() : 0);
            result = 31 * result + (this.starmark != null ? this.starmark.hashCode() : 0);
            return result;
        }
    }
}
