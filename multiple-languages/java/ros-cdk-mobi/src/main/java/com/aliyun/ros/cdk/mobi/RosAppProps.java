package com.aliyun.ros.cdk.mobi;

/**
 * Properties for defining a <code>RosApp</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mobi-app
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:18.014Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mobi.$Module.class, fqn = "@alicloud/ros-cdk-mobi.RosAppProps")
@software.amazon.jsii.Jsii.Proxy(RosAppProps.Jsii$Proxy.class)
public interface RosAppProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppIcon();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppWorkspaceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTemplate();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAppProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAppProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAppProps> {
        java.lang.Object appIcon;
        java.lang.Object appName;
        java.lang.Object appWorkspaceId;
        java.lang.Object template;
        java.lang.Object appDescription;
        java.lang.Object appType;

        /**
         * Sets the value of {@link RosAppProps#getAppIcon}
         * @param appIcon the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appIcon(java.lang.String appIcon) {
            this.appIcon = appIcon;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getAppIcon}
         * @param appIcon the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appIcon(com.aliyun.ros.cdk.core.IResolvable appIcon) {
            this.appIcon = appIcon;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getAppName}
         * @param appName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(java.lang.String appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getAppName}
         * @param appName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(com.aliyun.ros.cdk.core.IResolvable appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getAppWorkspaceId}
         * @param appWorkspaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appWorkspaceId(java.lang.String appWorkspaceId) {
            this.appWorkspaceId = appWorkspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getAppWorkspaceId}
         * @param appWorkspaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appWorkspaceId(com.aliyun.ros.cdk.core.IResolvable appWorkspaceId) {
            this.appWorkspaceId = appWorkspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getTemplate}
         * @param template the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder template(com.aliyun.ros.cdk.core.IResolvable template) {
            this.template = template;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getTemplate}
         * @param template the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder template(com.aliyun.ros.cdk.mobi.RosApp.TemplateProperty template) {
            this.template = template;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getAppDescription}
         * @param appDescription the value to be set.
         * @return {@code this}
         */
        public Builder appDescription(java.lang.String appDescription) {
            this.appDescription = appDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getAppDescription}
         * @param appDescription the value to be set.
         * @return {@code this}
         */
        public Builder appDescription(com.aliyun.ros.cdk.core.IResolvable appDescription) {
            this.appDescription = appDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getAppType}
         * @param appType the value to be set.
         * @return {@code this}
         */
        public Builder appType(java.lang.String appType) {
            this.appType = appType;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getAppType}
         * @param appType the value to be set.
         * @return {@code this}
         */
        public Builder appType(com.aliyun.ros.cdk.core.IResolvable appType) {
            this.appType = appType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAppProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAppProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAppProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAppProps {
        private final java.lang.Object appIcon;
        private final java.lang.Object appName;
        private final java.lang.Object appWorkspaceId;
        private final java.lang.Object template;
        private final java.lang.Object appDescription;
        private final java.lang.Object appType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appIcon = software.amazon.jsii.Kernel.get(this, "appIcon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appName = software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appWorkspaceId = software.amazon.jsii.Kernel.get(this, "appWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.template = software.amazon.jsii.Kernel.get(this, "template", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appDescription = software.amazon.jsii.Kernel.get(this, "appDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appType = software.amazon.jsii.Kernel.get(this, "appType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appIcon = java.util.Objects.requireNonNull(builder.appIcon, "appIcon is required");
            this.appName = java.util.Objects.requireNonNull(builder.appName, "appName is required");
            this.appWorkspaceId = java.util.Objects.requireNonNull(builder.appWorkspaceId, "appWorkspaceId is required");
            this.template = java.util.Objects.requireNonNull(builder.template, "template is required");
            this.appDescription = builder.appDescription;
            this.appType = builder.appType;
        }

        @Override
        public final java.lang.Object getAppIcon() {
            return this.appIcon;
        }

        @Override
        public final java.lang.Object getAppName() {
            return this.appName;
        }

        @Override
        public final java.lang.Object getAppWorkspaceId() {
            return this.appWorkspaceId;
        }

        @Override
        public final java.lang.Object getTemplate() {
            return this.template;
        }

        @Override
        public final java.lang.Object getAppDescription() {
            return this.appDescription;
        }

        @Override
        public final java.lang.Object getAppType() {
            return this.appType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("appIcon", om.valueToTree(this.getAppIcon()));
            data.set("appName", om.valueToTree(this.getAppName()));
            data.set("appWorkspaceId", om.valueToTree(this.getAppWorkspaceId()));
            data.set("template", om.valueToTree(this.getTemplate()));
            if (this.getAppDescription() != null) {
                data.set("appDescription", om.valueToTree(this.getAppDescription()));
            }
            if (this.getAppType() != null) {
                data.set("appType", om.valueToTree(this.getAppType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mobi.RosAppProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAppProps.Jsii$Proxy that = (RosAppProps.Jsii$Proxy) o;

            if (!appIcon.equals(that.appIcon)) return false;
            if (!appName.equals(that.appName)) return false;
            if (!appWorkspaceId.equals(that.appWorkspaceId)) return false;
            if (!template.equals(that.template)) return false;
            if (this.appDescription != null ? !this.appDescription.equals(that.appDescription) : that.appDescription != null) return false;
            return this.appType != null ? this.appType.equals(that.appType) : that.appType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.appIcon.hashCode();
            result = 31 * result + (this.appName.hashCode());
            result = 31 * result + (this.appWorkspaceId.hashCode());
            result = 31 * result + (this.template.hashCode());
            result = 31 * result + (this.appDescription != null ? this.appDescription.hashCode() : 0);
            result = 31 * result + (this.appType != null ? this.appType.hashCode() : 0);
            return result;
        }
    }
}
