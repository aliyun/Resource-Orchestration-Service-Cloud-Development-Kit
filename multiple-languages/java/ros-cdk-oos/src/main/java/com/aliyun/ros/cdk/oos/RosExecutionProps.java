package com.aliyun.ros.cdk.oos;

/**
 * Properties for defining a `ALIYUN::OOS::Execution`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.135Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.RosExecutionProps")
@software.amazon.jsii.Jsii.Proxy(RosExecutionProps.Jsii$Proxy.class)
public interface RosExecutionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getTemplateName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getParentExecutionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSafetyCheck() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTemplateVersion() {
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
        private java.lang.String templateName;
        private java.lang.String mode;
        private java.lang.Object parameters;
        private java.lang.String parentExecutionId;
        private java.lang.Object resourceOptions;
        private java.lang.String safetyCheck;
        private java.lang.String templateVersion;

        /**
         * Sets the value of {@link RosExecutionProps#getTemplateName}
         * @param templateName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder templateName(java.lang.String templateName) {
            this.templateName = templateName;
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
         * Sets the value of {@link RosExecutionProps#getTemplateVersion}
         * @param templateVersion the value to be set.
         * @return {@code this}
         */
        public Builder templateVersion(java.lang.String templateVersion) {
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
            return new Jsii$Proxy(templateName, mode, parameters, parentExecutionId, resourceOptions, safetyCheck, templateVersion);
        }
    }

    /**
     * An implementation for {@link RosExecutionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosExecutionProps {
        private final java.lang.String templateName;
        private final java.lang.String mode;
        private final java.lang.Object parameters;
        private final java.lang.String parentExecutionId;
        private final java.lang.Object resourceOptions;
        private final java.lang.String safetyCheck;
        private final java.lang.String templateVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.templateName = software.amazon.jsii.Kernel.get(this, "templateName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.mode = software.amazon.jsii.Kernel.get(this, "mode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parentExecutionId = software.amazon.jsii.Kernel.get(this, "parentExecutionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.resourceOptions = software.amazon.jsii.Kernel.get(this, "resourceOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.safetyCheck = software.amazon.jsii.Kernel.get(this, "safetyCheck", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.templateVersion = software.amazon.jsii.Kernel.get(this, "templateVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String templateName, final java.lang.String mode, final java.lang.Object parameters, final java.lang.String parentExecutionId, final java.lang.Object resourceOptions, final java.lang.String safetyCheck, final java.lang.String templateVersion) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.templateName = java.util.Objects.requireNonNull(templateName, "templateName is required");
            this.mode = mode;
            this.parameters = parameters;
            this.parentExecutionId = parentExecutionId;
            this.resourceOptions = resourceOptions;
            this.safetyCheck = safetyCheck;
            this.templateVersion = templateVersion;
        }

        @Override
        public final java.lang.String getTemplateName() {
            return this.templateName;
        }

        @Override
        public final java.lang.String getMode() {
            return this.mode;
        }

        @Override
        public final java.lang.Object getParameters() {
            return this.parameters;
        }

        @Override
        public final java.lang.String getParentExecutionId() {
            return this.parentExecutionId;
        }

        @Override
        public final java.lang.Object getResourceOptions() {
            return this.resourceOptions;
        }

        @Override
        public final java.lang.String getSafetyCheck() {
            return this.safetyCheck;
        }

        @Override
        public final java.lang.String getTemplateVersion() {
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
            if (this.getResourceOptions() != null) {
                data.set("resourceOptions", om.valueToTree(this.getResourceOptions()));
            }
            if (this.getSafetyCheck() != null) {
                data.set("safetyCheck", om.valueToTree(this.getSafetyCheck()));
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

            if (!templateName.equals(that.templateName)) return false;
            if (this.mode != null ? !this.mode.equals(that.mode) : that.mode != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.parentExecutionId != null ? !this.parentExecutionId.equals(that.parentExecutionId) : that.parentExecutionId != null) return false;
            if (this.resourceOptions != null ? !this.resourceOptions.equals(that.resourceOptions) : that.resourceOptions != null) return false;
            if (this.safetyCheck != null ? !this.safetyCheck.equals(that.safetyCheck) : that.safetyCheck != null) return false;
            return this.templateVersion != null ? this.templateVersion.equals(that.templateVersion) : that.templateVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.templateName.hashCode();
            result = 31 * result + (this.mode != null ? this.mode.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.parentExecutionId != null ? this.parentExecutionId.hashCode() : 0);
            result = 31 * result + (this.resourceOptions != null ? this.resourceOptions.hashCode() : 0);
            result = 31 * result + (this.safetyCheck != null ? this.safetyCheck.hashCode() : 0);
            result = 31 * result + (this.templateVersion != null ? this.templateVersion.hashCode() : 0);
            return result;
        }
    }
}
