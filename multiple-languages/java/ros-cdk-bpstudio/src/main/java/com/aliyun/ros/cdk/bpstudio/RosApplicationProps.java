package com.aliyun.ros.cdk.bpstudio;

/**
 * Properties for defining a <code>RosApplication</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bpstudio-application
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:37:10.206Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bpstudio.$Module.class, fqn = "@alicloud/ros-cdk-bpstudio.RosApplicationProps")
@software.amazon.jsii.Jsii.Proxy(RosApplicationProps.Jsii$Proxy.class)
public interface RosApplicationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageUrl();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTemplateId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTopoUrl();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApplicationName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosApplicationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosApplicationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosApplicationProps> {
        java.lang.Object imageUrl;
        java.lang.Object templateId;
        java.lang.Object topoUrl;
        java.lang.Object applicationName;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link RosApplicationProps#getImageUrl}
         * @param imageUrl the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageUrl(java.lang.String imageUrl) {
            this.imageUrl = imageUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getImageUrl}
         * @param imageUrl the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageUrl(com.aliyun.ros.cdk.core.IResolvable imageUrl) {
            this.imageUrl = imageUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getTemplateId}
         * @param templateId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder templateId(java.lang.String templateId) {
            this.templateId = templateId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getTemplateId}
         * @param templateId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder templateId(com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.templateId = templateId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getTopoUrl}
         * @param topoUrl the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topoUrl(java.lang.String topoUrl) {
            this.topoUrl = topoUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getTopoUrl}
         * @param topoUrl the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topoUrl(com.aliyun.ros.cdk.core.IResolvable topoUrl) {
            this.topoUrl = topoUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getApplicationName}
         * @param applicationName the value to be set.
         * @return {@code this}
         */
        public Builder applicationName(java.lang.String applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getApplicationName}
         * @param applicationName the value to be set.
         * @return {@code this}
         */
        public Builder applicationName(com.aliyun.ros.cdk.core.IResolvable applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosApplicationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosApplicationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosApplicationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosApplicationProps {
        private final java.lang.Object imageUrl;
        private final java.lang.Object templateId;
        private final java.lang.Object topoUrl;
        private final java.lang.Object applicationName;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.imageUrl = software.amazon.jsii.Kernel.get(this, "imageUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateId = software.amazon.jsii.Kernel.get(this, "templateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.topoUrl = software.amazon.jsii.Kernel.get(this, "topoUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.applicationName = software.amazon.jsii.Kernel.get(this, "applicationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.imageUrl = java.util.Objects.requireNonNull(builder.imageUrl, "imageUrl is required");
            this.templateId = java.util.Objects.requireNonNull(builder.templateId, "templateId is required");
            this.topoUrl = java.util.Objects.requireNonNull(builder.topoUrl, "topoUrl is required");
            this.applicationName = builder.applicationName;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getImageUrl() {
            return this.imageUrl;
        }

        @Override
        public final java.lang.Object getTemplateId() {
            return this.templateId;
        }

        @Override
        public final java.lang.Object getTopoUrl() {
            return this.topoUrl;
        }

        @Override
        public final java.lang.Object getApplicationName() {
            return this.applicationName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("imageUrl", om.valueToTree(this.getImageUrl()));
            data.set("templateId", om.valueToTree(this.getTemplateId()));
            data.set("topoUrl", om.valueToTree(this.getTopoUrl()));
            if (this.getApplicationName() != null) {
                data.set("applicationName", om.valueToTree(this.getApplicationName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-bpstudio.RosApplicationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosApplicationProps.Jsii$Proxy that = (RosApplicationProps.Jsii$Proxy) o;

            if (!imageUrl.equals(that.imageUrl)) return false;
            if (!templateId.equals(that.templateId)) return false;
            if (!topoUrl.equals(that.topoUrl)) return false;
            if (this.applicationName != null ? !this.applicationName.equals(that.applicationName) : that.applicationName != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.imageUrl.hashCode();
            result = 31 * result + (this.templateId.hashCode());
            result = 31 * result + (this.topoUrl.hashCode());
            result = 31 * result + (this.applicationName != null ? this.applicationName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
