package com.aliyun.ros.cdk.oos;

/**
 * Properties for defining a <code>Template</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-template
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:29.004Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.TemplateProps")
@software.amazon.jsii.Jsii.Proxy(TemplateProps.Jsii$Proxy.class)
public interface TemplateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property content: The content of the template.
     * <p>
     * The template must be in the JSON or YAML format. Maximum size: 64 KB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContent();

    /**
     * Property templateName: The name of the template.
     * <p>
     * The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTemplateName();

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TemplateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TemplateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TemplateProps> {
        java.lang.Object content;
        java.lang.Object templateName;
        java.lang.Object resourceGroupId;
        java.util.Map<java.lang.String, java.lang.Object> tags;

        /**
         * Sets the value of {@link TemplateProps#getContent}
         * @param content Property content: The content of the template. This parameter is required.
         *                The template must be in the JSON or YAML format. Maximum size: 64 KB.
         * @return {@code this}
         */
        public Builder content(java.lang.String content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link TemplateProps#getContent}
         * @param content Property content: The content of the template. This parameter is required.
         *                The template must be in the JSON or YAML format. Maximum size: 64 KB.
         * @return {@code this}
         */
        public Builder content(com.aliyun.ros.cdk.core.IResolvable content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link TemplateProps#getTemplateName}
         * @param templateName Property templateName: The name of the template. This parameter is required.
         *                     The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
         * @return {@code this}
         */
        public Builder templateName(java.lang.String templateName) {
            this.templateName = templateName;
            return this;
        }

        /**
         * Sets the value of {@link TemplateProps#getTemplateName}
         * @param templateName Property templateName: The name of the template. This parameter is required.
         *                     The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
         * @return {@code this}
         */
        public Builder templateName(com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.templateName = templateName;
            return this;
        }

        /**
         * Sets the value of {@link TemplateProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link TemplateProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link TemplateProps#getTags}
         * @param tags Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TemplateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TemplateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TemplateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TemplateProps {
        private final java.lang.Object content;
        private final java.lang.Object templateName;
        private final java.lang.Object resourceGroupId;
        private final java.util.Map<java.lang.String, java.lang.Object> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.content = software.amazon.jsii.Kernel.get(this, "content", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateName = software.amazon.jsii.Kernel.get(this, "templateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.content = java.util.Objects.requireNonNull(builder.content, "content is required");
            this.templateName = java.util.Objects.requireNonNull(builder.templateName, "templateName is required");
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)builder.tags;
        }

        @Override
        public final java.lang.Object getContent() {
            return this.content;
        }

        @Override
        public final java.lang.Object getTemplateName() {
            return this.templateName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.Object> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("content", om.valueToTree(this.getContent()));
            data.set("templateName", om.valueToTree(this.getTemplateName()));
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.TemplateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TemplateProps.Jsii$Proxy that = (TemplateProps.Jsii$Proxy) o;

            if (!content.equals(that.content)) return false;
            if (!templateName.equals(that.templateName)) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.content.hashCode();
            result = 31 * result + (this.templateName.hashCode());
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
