package com.aliyun.ros.cdk.oos;

/**
 * Properties for defining a `ALIYUN::OOS::Execution`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:15.982Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.RosExecutionProps")
@software.amazon.jsii.Jsii.Proxy(RosExecutionProps.Jsii$Proxy.class)
public interface RosExecutionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTemplateName();

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
        java.lang.Object templateName;
        java.lang.Object mode;
        java.lang.Object parameters;
        java.lang.Object parentExecutionId;
        java.lang.Object resourceOptions;
        java.lang.Object safetyCheck;
        java.util.Map<java.lang.String, java.lang.Object> tags;
        java.lang.Object templateVersion;

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
         * Sets the value of {@link RosExecutionProps#getTemplateName}
         * @param templateName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder templateName(com.aliyun.ros.cdk.core.IResolvable templateName) {
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
        private final java.lang.Object templateName;
        private final java.lang.Object mode;
        private final java.lang.Object parameters;
        private final java.lang.Object parentExecutionId;
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
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
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
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.templateVersion != null ? this.templateVersion.hashCode() : 0);
            return result;
        }
    }
}
