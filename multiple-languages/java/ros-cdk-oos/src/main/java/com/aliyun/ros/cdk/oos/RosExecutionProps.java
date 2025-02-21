package com.aliyun.ros.cdk.oos;

/**
 * Properties for defining a <code>RosExecution</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-execution
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:18.430Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.RosExecutionProps")
@software.amazon.jsii.Jsii.Proxy(RosExecutionProps.Jsii$Proxy.class)
public interface RosExecutionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoopMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParentExecutionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSafetyCheck() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateContent() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosExecutionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosExecutionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosExecutionProps> {
        java.lang.Object description;
        java.lang.Object loopMode;
        java.lang.Object mode;
        java.lang.Object parameters;
        java.lang.Object parentExecutionId;
        java.lang.Object resourceGroupId;
        java.lang.Object resourceOptions;
        java.lang.Object safetyCheck;
        java.util.Map<java.lang.String, java.lang.Object> tags;
        java.lang.Object templateContent;
        java.lang.Object templateName;
        java.lang.Object templateUrl;
        java.lang.Object templateVersion;

        /**
         * Sets the value of {@link RosExecutionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getLoopMode}
         * @param loopMode the value to be set.
         * @return {@code this}
         */
        public Builder loopMode(java.lang.String loopMode) {
            this.loopMode = loopMode;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getLoopMode}
         * @param loopMode the value to be set.
         * @return {@code this}
         */
        public Builder loopMode(com.aliyun.ros.cdk.core.IResolvable loopMode) {
            this.loopMode = loopMode;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getMode}
         * @param mode the value to be set.
         * @return {@code this}
         */
        public Builder mode(java.lang.String mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getMode}
         * @param mode the value to be set.
         * @return {@code this}
         */
        public Builder mode(com.aliyun.ros.cdk.core.IResolvable mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getParentExecutionId}
         * @param parentExecutionId the value to be set.
         * @return {@code this}
         */
        public Builder parentExecutionId(java.lang.String parentExecutionId) {
            this.parentExecutionId = parentExecutionId;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getParentExecutionId}
         * @param parentExecutionId the value to be set.
         * @return {@code this}
         */
        public Builder parentExecutionId(com.aliyun.ros.cdk.core.IResolvable parentExecutionId) {
            this.parentExecutionId = parentExecutionId;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getResourceOptions}
         * @param resourceOptions the value to be set.
         * @return {@code this}
         */
        public Builder resourceOptions(com.aliyun.ros.cdk.core.IResolvable resourceOptions) {
            this.resourceOptions = resourceOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getResourceOptions}
         * @param resourceOptions the value to be set.
         * @return {@code this}
         */
        public Builder resourceOptions(com.aliyun.ros.cdk.oos.RosExecution.ResourceOptionsProperty resourceOptions) {
            this.resourceOptions = resourceOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getSafetyCheck}
         * @param safetyCheck the value to be set.
         * @return {@code this}
         */
        public Builder safetyCheck(java.lang.String safetyCheck) {
            this.safetyCheck = safetyCheck;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getSafetyCheck}
         * @param safetyCheck the value to be set.
         * @return {@code this}
         */
        public Builder safetyCheck(com.aliyun.ros.cdk.core.IResolvable safetyCheck) {
            this.safetyCheck = safetyCheck;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getTemplateContent}
         * @param templateContent the value to be set.
         * @return {@code this}
         */
        public Builder templateContent(java.lang.String templateContent) {
            this.templateContent = templateContent;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getTemplateContent}
         * @param templateContent the value to be set.
         * @return {@code this}
         */
        public Builder templateContent(com.aliyun.ros.cdk.core.IResolvable templateContent) {
            this.templateContent = templateContent;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getTemplateName}
         * @param templateName the value to be set.
         * @return {@code this}
         */
        public Builder templateName(java.lang.String templateName) {
            this.templateName = templateName;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getTemplateName}
         * @param templateName the value to be set.
         * @return {@code this}
         */
        public Builder templateName(com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.templateName = templateName;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getTemplateUrl}
         * @param templateUrl the value to be set.
         * @return {@code this}
         */
        public Builder templateUrl(java.lang.String templateUrl) {
            this.templateUrl = templateUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getTemplateUrl}
         * @param templateUrl the value to be set.
         * @return {@code this}
         */
        public Builder templateUrl(com.aliyun.ros.cdk.core.IResolvable templateUrl) {
            this.templateUrl = templateUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getTemplateVersion}
         * @param templateVersion the value to be set.
         * @return {@code this}
         */
        public Builder templateVersion(java.lang.String templateVersion) {
            this.templateVersion = templateVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosExecutionProps#getTemplateVersion}
         * @param templateVersion the value to be set.
         * @return {@code this}
         */
        public Builder templateVersion(com.aliyun.ros.cdk.core.IResolvable templateVersion) {
            this.templateVersion = templateVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosExecutionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosExecutionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosExecutionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosExecutionProps {
        private final java.lang.Object description;
        private final java.lang.Object loopMode;
        private final java.lang.Object mode;
        private final java.lang.Object parameters;
        private final java.lang.Object parentExecutionId;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object resourceOptions;
        private final java.lang.Object safetyCheck;
        private final java.util.Map<java.lang.String, java.lang.Object> tags;
        private final java.lang.Object templateContent;
        private final java.lang.Object templateName;
        private final java.lang.Object templateUrl;
        private final java.lang.Object templateVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loopMode = software.amazon.jsii.Kernel.get(this, "loopMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mode = software.amazon.jsii.Kernel.get(this, "mode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parentExecutionId = software.amazon.jsii.Kernel.get(this, "parentExecutionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceOptions = software.amazon.jsii.Kernel.get(this, "resourceOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.safetyCheck = software.amazon.jsii.Kernel.get(this, "safetyCheck", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)));
            this.templateContent = software.amazon.jsii.Kernel.get(this, "templateContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateName = software.amazon.jsii.Kernel.get(this, "templateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateUrl = software.amazon.jsii.Kernel.get(this, "templateUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateVersion = software.amazon.jsii.Kernel.get(this, "templateVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = builder.description;
            this.loopMode = builder.loopMode;
            this.mode = builder.mode;
            this.parameters = builder.parameters;
            this.parentExecutionId = builder.parentExecutionId;
            this.resourceGroupId = builder.resourceGroupId;
            this.resourceOptions = builder.resourceOptions;
            this.safetyCheck = builder.safetyCheck;
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)builder.tags;
            this.templateContent = builder.templateContent;
            this.templateName = builder.templateName;
            this.templateUrl = builder.templateUrl;
            this.templateVersion = builder.templateVersion;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getLoopMode() {
            return this.loopMode;
        }

        @Override
        public final java.lang.Object getMode() {
            return this.mode;
        }

        @Override
        public final java.lang.Object getParameters() {
            return this.parameters;
        }

        @Override
        public final java.lang.Object getParentExecutionId() {
            return this.parentExecutionId;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getResourceOptions() {
            return this.resourceOptions;
        }

        @Override
        public final java.lang.Object getSafetyCheck() {
            return this.safetyCheck;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.Object> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTemplateContent() {
            return this.templateContent;
        }

        @Override
        public final java.lang.Object getTemplateName() {
            return this.templateName;
        }

        @Override
        public final java.lang.Object getTemplateUrl() {
            return this.templateUrl;
        }

        @Override
        public final java.lang.Object getTemplateVersion() {
            return this.templateVersion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getLoopMode() != null) {
                data.set("loopMode", om.valueToTree(this.getLoopMode()));
            }
            if (this.getMode() != null) {
                data.set("mode", om.valueToTree(this.getMode()));
            }
            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
            }
            if (this.getParentExecutionId() != null) {
                data.set("parentExecutionId", om.valueToTree(this.getParentExecutionId()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getResourceOptions() != null) {
                data.set("resourceOptions", om.valueToTree(this.getResourceOptions()));
            }
            if (this.getSafetyCheck() != null) {
                data.set("safetyCheck", om.valueToTree(this.getSafetyCheck()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTemplateContent() != null) {
                data.set("templateContent", om.valueToTree(this.getTemplateContent()));
            }
            if (this.getTemplateName() != null) {
                data.set("templateName", om.valueToTree(this.getTemplateName()));
            }
            if (this.getTemplateUrl() != null) {
                data.set("templateUrl", om.valueToTree(this.getTemplateUrl()));
            }
            if (this.getTemplateVersion() != null) {
                data.set("templateVersion", om.valueToTree(this.getTemplateVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.RosExecutionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosExecutionProps.Jsii$Proxy that = (RosExecutionProps.Jsii$Proxy) o;

            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.loopMode != null ? !this.loopMode.equals(that.loopMode) : that.loopMode != null) return false;
            if (this.mode != null ? !this.mode.equals(that.mode) : that.mode != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.parentExecutionId != null ? !this.parentExecutionId.equals(that.parentExecutionId) : that.parentExecutionId != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.resourceOptions != null ? !this.resourceOptions.equals(that.resourceOptions) : that.resourceOptions != null) return false;
            if (this.safetyCheck != null ? !this.safetyCheck.equals(that.safetyCheck) : that.safetyCheck != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.templateContent != null ? !this.templateContent.equals(that.templateContent) : that.templateContent != null) return false;
            if (this.templateName != null ? !this.templateName.equals(that.templateName) : that.templateName != null) return false;
            if (this.templateUrl != null ? !this.templateUrl.equals(that.templateUrl) : that.templateUrl != null) return false;
            return this.templateVersion != null ? this.templateVersion.equals(that.templateVersion) : that.templateVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description != null ? this.description.hashCode() : 0;
            result = 31 * result + (this.loopMode != null ? this.loopMode.hashCode() : 0);
            result = 31 * result + (this.mode != null ? this.mode.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.parentExecutionId != null ? this.parentExecutionId.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.resourceOptions != null ? this.resourceOptions.hashCode() : 0);
            result = 31 * result + (this.safetyCheck != null ? this.safetyCheck.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.templateContent != null ? this.templateContent.hashCode() : 0);
            result = 31 * result + (this.templateName != null ? this.templateName.hashCode() : 0);
            result = 31 * result + (this.templateUrl != null ? this.templateUrl.hashCode() : 0);
            result = 31 * result + (this.templateVersion != null ? this.templateVersion.hashCode() : 0);
            return result;
        }
    }
}
