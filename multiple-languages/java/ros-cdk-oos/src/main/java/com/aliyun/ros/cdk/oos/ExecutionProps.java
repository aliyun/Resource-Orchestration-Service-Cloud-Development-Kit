package com.aliyun.ros.cdk.oos;

/**
 * Properties for defining a <code>Execution</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-execution
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:17.057Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.ExecutionProps")
@software.amazon.jsii.Jsii.Proxy(ExecutionProps.Jsii$Proxy.class)
public interface ExecutionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property templateName: Template name.
     * <p>
     * Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTemplateName();

    /**
     * Property mode: Execution mode.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMode() {
        return null;
    }

    /**
     * Property parameters: Parameters for the execution of template.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return null;
    }

    /**
     * Property parentExecutionId: Parent execution ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParentExecutionId() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property resourceOptions: Resource options user by ROS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceOptions() {
        return null;
    }

    /**
     * Property safetyCheck: Security check mode.
     * <p>
     * Allowed values:
     * <p>
     * <ul>
     * <li>Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.</li>
     * <li>ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSafetyCheck() {
        return null;
    }

    /**
     * Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getTags() {
        return null;
    }

    /**
     * Property templateVersion: Version number of template.
     * <p>
     * Default to the latest version.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ExecutionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ExecutionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ExecutionProps> {
        java.lang.Object templateName;
        java.lang.Object mode;
        java.lang.Object parameters;
        java.lang.Object parentExecutionId;
        java.lang.Object resourceGroupId;
        java.lang.Object resourceOptions;
        java.lang.Object safetyCheck;
        java.util.Map<java.lang.String, java.lang.Object> tags;
        java.lang.Object templateVersion;

        /**
         * Sets the value of {@link ExecutionProps#getTemplateName}
         * @param templateName Property templateName: Template name. This parameter is required.
         *                     Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
         * @return {@code this}
         */
        public Builder templateName(java.lang.String templateName) {
            this.templateName = templateName;
            return this;
        }

        /**
         * Sets the value of {@link ExecutionProps#getTemplateName}
         * @param templateName Property templateName: Template name. This parameter is required.
         *                     Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
         * @return {@code this}
         */
        public Builder templateName(com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.templateName = templateName;
            return this;
        }

        /**
         * Sets the value of {@link ExecutionProps#getMode}
         * @param mode Property mode: Execution mode.
         * @return {@code this}
         */
        public Builder mode(java.lang.String mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Sets the value of {@link ExecutionProps#getMode}
         * @param mode Property mode: Execution mode.
         * @return {@code this}
         */
        public Builder mode(com.aliyun.ros.cdk.core.IResolvable mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Sets the value of {@link ExecutionProps#getParameters}
         * @param parameters Property parameters: Parameters for the execution of template.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link ExecutionProps#getParameters}
         * @param parameters Property parameters: Parameters for the execution of template.
         * @return {@code this}
         */
        public Builder parameters(java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link ExecutionProps#getParentExecutionId}
         * @param parentExecutionId Property parentExecutionId: Parent execution ID.
         * @return {@code this}
         */
        public Builder parentExecutionId(java.lang.String parentExecutionId) {
            this.parentExecutionId = parentExecutionId;
            return this;
        }

        /**
         * Sets the value of {@link ExecutionProps#getParentExecutionId}
         * @param parentExecutionId Property parentExecutionId: Parent execution ID.
         * @return {@code this}
         */
        public Builder parentExecutionId(com.aliyun.ros.cdk.core.IResolvable parentExecutionId) {
            this.parentExecutionId = parentExecutionId;
            return this;
        }

        /**
         * Sets the value of {@link ExecutionProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ExecutionProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ExecutionProps#getResourceOptions}
         * @param resourceOptions Property resourceOptions: Resource options user by ROS.
         * @return {@code this}
         */
        public Builder resourceOptions(com.aliyun.ros.cdk.core.IResolvable resourceOptions) {
            this.resourceOptions = resourceOptions;
            return this;
        }

        /**
         * Sets the value of {@link ExecutionProps#getResourceOptions}
         * @param resourceOptions Property resourceOptions: Resource options user by ROS.
         * @return {@code this}
         */
        public Builder resourceOptions(com.aliyun.ros.cdk.oos.RosExecution.ResourceOptionsProperty resourceOptions) {
            this.resourceOptions = resourceOptions;
            return this;
        }

        /**
         * Sets the value of {@link ExecutionProps#getSafetyCheck}
         * @param safetyCheck Property safetyCheck: Security check mode.
         *                    Allowed values:
         *                    <p>
         *                    <ul>
         *                    <li>Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.</li>
         *                    <li>ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder safetyCheck(java.lang.String safetyCheck) {
            this.safetyCheck = safetyCheck;
            return this;
        }

        /**
         * Sets the value of {@link ExecutionProps#getSafetyCheck}
         * @param safetyCheck Property safetyCheck: Security check mode.
         *                    Allowed values:
         *                    <p>
         *                    <ul>
         *                    <li>Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.</li>
         *                    <li>ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder safetyCheck(com.aliyun.ros.cdk.core.IResolvable safetyCheck) {
            this.safetyCheck = safetyCheck;
            return this;
        }

        /**
         * Sets the value of {@link ExecutionProps#getTags}
         * @param tags Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ExecutionProps#getTemplateVersion}
         * @param templateVersion Property templateVersion: Version number of template.
         *                        Default to the latest version.
         * @return {@code this}
         */
        public Builder templateVersion(java.lang.String templateVersion) {
            this.templateVersion = templateVersion;
            return this;
        }

        /**
         * Sets the value of {@link ExecutionProps#getTemplateVersion}
         * @param templateVersion Property templateVersion: Version number of template.
         *                        Default to the latest version.
         * @return {@code this}
         */
        public Builder templateVersion(com.aliyun.ros.cdk.core.IResolvable templateVersion) {
            this.templateVersion = templateVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ExecutionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ExecutionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ExecutionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ExecutionProps {
        private final java.lang.Object templateName;
        private final java.lang.Object mode;
        private final java.lang.Object parameters;
        private final java.lang.Object parentExecutionId;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object resourceOptions;
        private final java.lang.Object safetyCheck;
        private final java.util.Map<java.lang.String, java.lang.Object> tags;
        private final java.lang.Object templateVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.templateName = software.amazon.jsii.Kernel.get(this, "templateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mode = software.amazon.jsii.Kernel.get(this, "mode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parentExecutionId = software.amazon.jsii.Kernel.get(this, "parentExecutionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceOptions = software.amazon.jsii.Kernel.get(this, "resourceOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.safetyCheck = software.amazon.jsii.Kernel.get(this, "safetyCheck", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)));
            this.templateVersion = software.amazon.jsii.Kernel.get(this, "templateVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.templateName = java.util.Objects.requireNonNull(builder.templateName, "templateName is required");
            this.mode = builder.mode;
            this.parameters = builder.parameters;
            this.parentExecutionId = builder.parentExecutionId;
            this.resourceGroupId = builder.resourceGroupId;
            this.resourceOptions = builder.resourceOptions;
            this.safetyCheck = builder.safetyCheck;
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)builder.tags;
            this.templateVersion = builder.templateVersion;
        }

        @Override
        public final java.lang.Object getTemplateName() {
            return this.templateName;
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
        public final java.lang.Object getTemplateVersion() {
            return this.templateVersion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("templateName", om.valueToTree(this.getTemplateName()));
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
            if (this.getTemplateVersion() != null) {
                data.set("templateVersion", om.valueToTree(this.getTemplateVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.ExecutionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ExecutionProps.Jsii$Proxy that = (ExecutionProps.Jsii$Proxy) o;

            if (!templateName.equals(that.templateName)) return false;
            if (this.mode != null ? !this.mode.equals(that.mode) : that.mode != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.parentExecutionId != null ? !this.parentExecutionId.equals(that.parentExecutionId) : that.parentExecutionId != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.resourceOptions != null ? !this.resourceOptions.equals(that.resourceOptions) : that.resourceOptions != null) return false;
            if (this.safetyCheck != null ? !this.safetyCheck.equals(that.safetyCheck) : that.safetyCheck != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.templateVersion != null ? this.templateVersion.equals(that.templateVersion) : that.templateVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.templateName.hashCode();
            result = 31 * result + (this.mode != null ? this.mode.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.parentExecutionId != null ? this.parentExecutionId.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.resourceOptions != null ? this.resourceOptions.hashCode() : 0);
            result = 31 * result + (this.safetyCheck != null ? this.safetyCheck.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.templateVersion != null ? this.templateVersion.hashCode() : 0);
            return result;
        }
    }
}
