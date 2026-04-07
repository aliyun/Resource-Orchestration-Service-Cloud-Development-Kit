package com.aliyun.ros.cdk.arms;

/**
 * Properties for defining a <code>RosRum</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-rum
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:21.977Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RosRumProps")
@software.amazon.jsii.Jsii.Proxy(RosRumProps.Jsii$Proxy.class)
public interface RosRumProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppGroup() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLanguage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNickName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPackageName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRealRegionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSource() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.arms.RosRum.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRumProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRumProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRumProps> {
        java.lang.Object appName;
        java.lang.Object siteType;
        java.lang.Object appGroup;
        java.lang.Object description;
        java.lang.Object language;
        java.lang.Object nickName;
        java.lang.Object packageName;
        java.lang.Object realRegionId;
        java.lang.Object resourceGroupId;
        java.lang.Object source;
        java.util.List<com.aliyun.ros.cdk.arms.RosRum.TagsProperty> tags;

        /**
         * Sets the value of {@link RosRumProps#getAppName}
         * @param appName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(java.lang.String appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getAppName}
         * @param appName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(com.aliyun.ros.cdk.core.IResolvable appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getSiteType}
         * @param siteType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteType(java.lang.String siteType) {
            this.siteType = siteType;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getSiteType}
         * @param siteType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteType(com.aliyun.ros.cdk.core.IResolvable siteType) {
            this.siteType = siteType;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getAppGroup}
         * @param appGroup the value to be set.
         * @return {@code this}
         */
        public Builder appGroup(java.lang.String appGroup) {
            this.appGroup = appGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getAppGroup}
         * @param appGroup the value to be set.
         * @return {@code this}
         */
        public Builder appGroup(com.aliyun.ros.cdk.core.IResolvable appGroup) {
            this.appGroup = appGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getLanguage}
         * @param language the value to be set.
         * @return {@code this}
         */
        public Builder language(java.lang.String language) {
            this.language = language;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getLanguage}
         * @param language the value to be set.
         * @return {@code this}
         */
        public Builder language(com.aliyun.ros.cdk.core.IResolvable language) {
            this.language = language;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getNickName}
         * @param nickName the value to be set.
         * @return {@code this}
         */
        public Builder nickName(java.lang.String nickName) {
            this.nickName = nickName;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getNickName}
         * @param nickName the value to be set.
         * @return {@code this}
         */
        public Builder nickName(com.aliyun.ros.cdk.core.IResolvable nickName) {
            this.nickName = nickName;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getPackageName}
         * @param packageName the value to be set.
         * @return {@code this}
         */
        public Builder packageName(java.lang.String packageName) {
            this.packageName = packageName;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getPackageName}
         * @param packageName the value to be set.
         * @return {@code this}
         */
        public Builder packageName(com.aliyun.ros.cdk.core.IResolvable packageName) {
            this.packageName = packageName;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getRealRegionId}
         * @param realRegionId the value to be set.
         * @return {@code this}
         */
        public Builder realRegionId(java.lang.String realRegionId) {
            this.realRegionId = realRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getRealRegionId}
         * @param realRegionId the value to be set.
         * @return {@code this}
         */
        public Builder realRegionId(com.aliyun.ros.cdk.core.IResolvable realRegionId) {
            this.realRegionId = realRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getSource}
         * @param source the value to be set.
         * @return {@code this}
         */
        public Builder source(java.lang.String source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getSource}
         * @param source the value to be set.
         * @return {@code this}
         */
        public Builder source(com.aliyun.ros.cdk.core.IResolvable source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link RosRumProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.arms.RosRum.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.arms.RosRum.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRumProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRumProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRumProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRumProps {
        private final java.lang.Object appName;
        private final java.lang.Object siteType;
        private final java.lang.Object appGroup;
        private final java.lang.Object description;
        private final java.lang.Object language;
        private final java.lang.Object nickName;
        private final java.lang.Object packageName;
        private final java.lang.Object realRegionId;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object source;
        private final java.util.List<com.aliyun.ros.cdk.arms.RosRum.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appName = software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteType = software.amazon.jsii.Kernel.get(this, "siteType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appGroup = software.amazon.jsii.Kernel.get(this, "appGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.language = software.amazon.jsii.Kernel.get(this, "language", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nickName = software.amazon.jsii.Kernel.get(this, "nickName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.packageName = software.amazon.jsii.Kernel.get(this, "packageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.realRegionId = software.amazon.jsii.Kernel.get(this, "realRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.source = software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.RosRum.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appName = java.util.Objects.requireNonNull(builder.appName, "appName is required");
            this.siteType = java.util.Objects.requireNonNull(builder.siteType, "siteType is required");
            this.appGroup = builder.appGroup;
            this.description = builder.description;
            this.language = builder.language;
            this.nickName = builder.nickName;
            this.packageName = builder.packageName;
            this.realRegionId = builder.realRegionId;
            this.resourceGroupId = builder.resourceGroupId;
            this.source = builder.source;
            this.tags = (java.util.List<com.aliyun.ros.cdk.arms.RosRum.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getAppName() {
            return this.appName;
        }

        @Override
        public final java.lang.Object getSiteType() {
            return this.siteType;
        }

        @Override
        public final java.lang.Object getAppGroup() {
            return this.appGroup;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getLanguage() {
            return this.language;
        }

        @Override
        public final java.lang.Object getNickName() {
            return this.nickName;
        }

        @Override
        public final java.lang.Object getPackageName() {
            return this.packageName;
        }

        @Override
        public final java.lang.Object getRealRegionId() {
            return this.realRegionId;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSource() {
            return this.source;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.arms.RosRum.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("appName", om.valueToTree(this.getAppName()));
            data.set("siteType", om.valueToTree(this.getSiteType()));
            if (this.getAppGroup() != null) {
                data.set("appGroup", om.valueToTree(this.getAppGroup()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getLanguage() != null) {
                data.set("language", om.valueToTree(this.getLanguage()));
            }
            if (this.getNickName() != null) {
                data.set("nickName", om.valueToTree(this.getNickName()));
            }
            if (this.getPackageName() != null) {
                data.set("packageName", om.valueToTree(this.getPackageName()));
            }
            if (this.getRealRegionId() != null) {
                data.set("realRegionId", om.valueToTree(this.getRealRegionId()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSource() != null) {
                data.set("source", om.valueToTree(this.getSource()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.RosRumProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRumProps.Jsii$Proxy that = (RosRumProps.Jsii$Proxy) o;

            if (!appName.equals(that.appName)) return false;
            if (!siteType.equals(that.siteType)) return false;
            if (this.appGroup != null ? !this.appGroup.equals(that.appGroup) : that.appGroup != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.language != null ? !this.language.equals(that.language) : that.language != null) return false;
            if (this.nickName != null ? !this.nickName.equals(that.nickName) : that.nickName != null) return false;
            if (this.packageName != null ? !this.packageName.equals(that.packageName) : that.packageName != null) return false;
            if (this.realRegionId != null ? !this.realRegionId.equals(that.realRegionId) : that.realRegionId != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.source != null ? !this.source.equals(that.source) : that.source != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.appName.hashCode();
            result = 31 * result + (this.siteType.hashCode());
            result = 31 * result + (this.appGroup != null ? this.appGroup.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.language != null ? this.language.hashCode() : 0);
            result = 31 * result + (this.nickName != null ? this.nickName.hashCode() : 0);
            result = 31 * result + (this.packageName != null ? this.packageName.hashCode() : 0);
            result = 31 * result + (this.realRegionId != null ? this.realRegionId.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.source != null ? this.source.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
