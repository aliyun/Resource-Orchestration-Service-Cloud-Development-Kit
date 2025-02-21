package com.aliyun.ros.cdk.aligreen;

/**
 * Properties for defining a <code>RosKeywordLib</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-keywordlib
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:11.556Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.RosKeywordLibProps")
@software.amazon.jsii.Jsii.Proxy(RosKeywordLibProps.Jsii$Proxy.class)
public interface RosKeywordLibProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getKeywordLibName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBizTypes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLanguage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLibType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMatchMode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosKeywordLibProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosKeywordLibProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosKeywordLibProps> {
        java.lang.Object keywordLibName;
        java.lang.Object resourceType;
        java.lang.Object bizTypes;
        java.lang.Object category;
        java.lang.Object enable;
        java.lang.Object language;
        java.lang.Object libType;
        java.lang.Object matchMode;

        /**
         * Sets the value of {@link RosKeywordLibProps#getKeywordLibName}
         * @param keywordLibName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder keywordLibName(java.lang.String keywordLibName) {
            this.keywordLibName = keywordLibName;
            return this;
        }

        /**
         * Sets the value of {@link RosKeywordLibProps#getKeywordLibName}
         * @param keywordLibName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder keywordLibName(com.aliyun.ros.cdk.core.IResolvable keywordLibName) {
            this.keywordLibName = keywordLibName;
            return this;
        }

        /**
         * Sets the value of {@link RosKeywordLibProps#getResourceType}
         * @param resourceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceType(java.lang.String resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosKeywordLibProps#getResourceType}
         * @param resourceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosKeywordLibProps#getBizTypes}
         * @param bizTypes the value to be set.
         * @return {@code this}
         */
        public Builder bizTypes(com.aliyun.ros.cdk.core.IResolvable bizTypes) {
            this.bizTypes = bizTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosKeywordLibProps#getBizTypes}
         * @param bizTypes the value to be set.
         * @return {@code this}
         */
        public Builder bizTypes(java.util.List<? extends java.lang.Object> bizTypes) {
            this.bizTypes = bizTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosKeywordLibProps#getCategory}
         * @param category the value to be set.
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosKeywordLibProps#getCategory}
         * @param category the value to be set.
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosKeywordLibProps#getEnable}
         * @param enable the value to be set.
         * @return {@code this}
         */
        public Builder enable(java.lang.Boolean enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link RosKeywordLibProps#getEnable}
         * @param enable the value to be set.
         * @return {@code this}
         */
        public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link RosKeywordLibProps#getLanguage}
         * @param language the value to be set.
         * @return {@code this}
         */
        public Builder language(java.lang.String language) {
            this.language = language;
            return this;
        }

        /**
         * Sets the value of {@link RosKeywordLibProps#getLanguage}
         * @param language the value to be set.
         * @return {@code this}
         */
        public Builder language(com.aliyun.ros.cdk.core.IResolvable language) {
            this.language = language;
            return this;
        }

        /**
         * Sets the value of {@link RosKeywordLibProps#getLibType}
         * @param libType the value to be set.
         * @return {@code this}
         */
        public Builder libType(java.lang.String libType) {
            this.libType = libType;
            return this;
        }

        /**
         * Sets the value of {@link RosKeywordLibProps#getLibType}
         * @param libType the value to be set.
         * @return {@code this}
         */
        public Builder libType(com.aliyun.ros.cdk.core.IResolvable libType) {
            this.libType = libType;
            return this;
        }

        /**
         * Sets the value of {@link RosKeywordLibProps#getMatchMode}
         * @param matchMode the value to be set.
         * @return {@code this}
         */
        public Builder matchMode(java.lang.String matchMode) {
            this.matchMode = matchMode;
            return this;
        }

        /**
         * Sets the value of {@link RosKeywordLibProps#getMatchMode}
         * @param matchMode the value to be set.
         * @return {@code this}
         */
        public Builder matchMode(com.aliyun.ros.cdk.core.IResolvable matchMode) {
            this.matchMode = matchMode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosKeywordLibProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosKeywordLibProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosKeywordLibProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosKeywordLibProps {
        private final java.lang.Object keywordLibName;
        private final java.lang.Object resourceType;
        private final java.lang.Object bizTypes;
        private final java.lang.Object category;
        private final java.lang.Object enable;
        private final java.lang.Object language;
        private final java.lang.Object libType;
        private final java.lang.Object matchMode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.keywordLibName = software.amazon.jsii.Kernel.get(this, "keywordLibName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bizTypes = software.amazon.jsii.Kernel.get(this, "bizTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.language = software.amazon.jsii.Kernel.get(this, "language", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.libType = software.amazon.jsii.Kernel.get(this, "libType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.matchMode = software.amazon.jsii.Kernel.get(this, "matchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.keywordLibName = java.util.Objects.requireNonNull(builder.keywordLibName, "keywordLibName is required");
            this.resourceType = java.util.Objects.requireNonNull(builder.resourceType, "resourceType is required");
            this.bizTypes = builder.bizTypes;
            this.category = builder.category;
            this.enable = builder.enable;
            this.language = builder.language;
            this.libType = builder.libType;
            this.matchMode = builder.matchMode;
        }

        @Override
        public final java.lang.Object getKeywordLibName() {
            return this.keywordLibName;
        }

        @Override
        public final java.lang.Object getResourceType() {
            return this.resourceType;
        }

        @Override
        public final java.lang.Object getBizTypes() {
            return this.bizTypes;
        }

        @Override
        public final java.lang.Object getCategory() {
            return this.category;
        }

        @Override
        public final java.lang.Object getEnable() {
            return this.enable;
        }

        @Override
        public final java.lang.Object getLanguage() {
            return this.language;
        }

        @Override
        public final java.lang.Object getLibType() {
            return this.libType;
        }

        @Override
        public final java.lang.Object getMatchMode() {
            return this.matchMode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("keywordLibName", om.valueToTree(this.getKeywordLibName()));
            data.set("resourceType", om.valueToTree(this.getResourceType()));
            if (this.getBizTypes() != null) {
                data.set("bizTypes", om.valueToTree(this.getBizTypes()));
            }
            if (this.getCategory() != null) {
                data.set("category", om.valueToTree(this.getCategory()));
            }
            if (this.getEnable() != null) {
                data.set("enable", om.valueToTree(this.getEnable()));
            }
            if (this.getLanguage() != null) {
                data.set("language", om.valueToTree(this.getLanguage()));
            }
            if (this.getLibType() != null) {
                data.set("libType", om.valueToTree(this.getLibType()));
            }
            if (this.getMatchMode() != null) {
                data.set("matchMode", om.valueToTree(this.getMatchMode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-aligreen.RosKeywordLibProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosKeywordLibProps.Jsii$Proxy that = (RosKeywordLibProps.Jsii$Proxy) o;

            if (!keywordLibName.equals(that.keywordLibName)) return false;
            if (!resourceType.equals(that.resourceType)) return false;
            if (this.bizTypes != null ? !this.bizTypes.equals(that.bizTypes) : that.bizTypes != null) return false;
            if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
            if (this.enable != null ? !this.enable.equals(that.enable) : that.enable != null) return false;
            if (this.language != null ? !this.language.equals(that.language) : that.language != null) return false;
            if (this.libType != null ? !this.libType.equals(that.libType) : that.libType != null) return false;
            return this.matchMode != null ? this.matchMode.equals(that.matchMode) : that.matchMode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.keywordLibName.hashCode();
            result = 31 * result + (this.resourceType.hashCode());
            result = 31 * result + (this.bizTypes != null ? this.bizTypes.hashCode() : 0);
            result = 31 * result + (this.category != null ? this.category.hashCode() : 0);
            result = 31 * result + (this.enable != null ? this.enable.hashCode() : 0);
            result = 31 * result + (this.language != null ? this.language.hashCode() : 0);
            result = 31 * result + (this.libType != null ? this.libType.hashCode() : 0);
            result = 31 * result + (this.matchMode != null ? this.matchMode.hashCode() : 0);
            return result;
        }
    }
}
