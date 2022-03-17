package com.aliyun.ros.cdk.ros;

/**
 * Properties for defining a `ALIYUN::ROS::Stack`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:16.372Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.StackProps")
@software.amazon.jsii.Jsii.Proxy(StackProps.Jsii$Proxy.class)
public interface StackProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property parameters: The set of parameters passed to this nested stack.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property templateBody: Structure containing the template body.
     * <p>
     * It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateBody() {
        return null;
    }

    /**
     * Property templateId: Template ID of template containing the template body.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateId() {
        return null;
    }

    /**
     * Property templateUrl: Location of file containing the template body.
     * <p>
     * The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateUrl() {
        return null;
    }

    /**
     * Property templateVersion: Template version of template containing the template body.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateVersion() {
        return null;
    }

    /**
     * Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update.
     * <p>
     * Default to 60 minutes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutMins() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link StackProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link StackProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<StackProps> {
        java.lang.Object parameters;
        java.lang.Object resourceGroupId;
        java.lang.Object templateBody;
        java.lang.Object templateId;
        java.lang.Object templateUrl;
        java.lang.Object templateVersion;
        java.lang.Object timeoutMins;

        /**
         * Sets the value of {@link StackProps#getParameters}
         * @param parameters Property parameters: The set of parameters passed to this nested stack.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getParameters}
         * @param parameters Property parameters: The set of parameters passed to this nested stack.
         * @return {@code this}
         */
        public Builder parameters(java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getTemplateBody}
         * @param templateBody Property templateBody: Structure containing the template body.
         *                     It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
         *                     You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
         * @return {@code this}
         */
        public Builder templateBody(com.aliyun.ros.cdk.core.IResolvable templateBody) {
            this.templateBody = templateBody;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getTemplateBody}
         * @param templateBody Property templateBody: Structure containing the template body.
         *                     It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
         *                     You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
         * @return {@code this}
         */
        public Builder templateBody(java.util.Map<java.lang.String, ? extends java.lang.Object> templateBody) {
            this.templateBody = templateBody;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getTemplateId}
         * @param templateId Property templateId: Template ID of template containing the template body.
         * @return {@code this}
         */
        public Builder templateId(java.lang.String templateId) {
            this.templateId = templateId;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getTemplateId}
         * @param templateId Property templateId: Template ID of template containing the template body.
         * @return {@code this}
         */
        public Builder templateId(com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.templateId = templateId;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getTemplateUrl}
         * @param templateUrl Property templateUrl: Location of file containing the template body.
         *                    The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
         *                    You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
         * @return {@code this}
         */
        public Builder templateUrl(java.lang.String templateUrl) {
            this.templateUrl = templateUrl;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getTemplateUrl}
         * @param templateUrl Property templateUrl: Location of file containing the template body.
         *                    The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
         *                    You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
         * @return {@code this}
         */
        public Builder templateUrl(com.aliyun.ros.cdk.core.IResolvable templateUrl) {
            this.templateUrl = templateUrl;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getTemplateVersion}
         * @param templateVersion Property templateVersion: Template version of template containing the template body.
         * @return {@code this}
         */
        public Builder templateVersion(java.lang.String templateVersion) {
            this.templateVersion = templateVersion;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getTemplateVersion}
         * @param templateVersion Property templateVersion: Template version of template containing the template body.
         * @return {@code this}
         */
        public Builder templateVersion(com.aliyun.ros.cdk.core.IResolvable templateVersion) {
            this.templateVersion = templateVersion;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getTimeoutMins}
         * @param timeoutMins Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update.
         *                    Default to 60 minutes.
         * @return {@code this}
         */
        public Builder timeoutMins(java.lang.Number timeoutMins) {
            this.timeoutMins = timeoutMins;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getTimeoutMins}
         * @param timeoutMins Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update.
         *                    Default to 60 minutes.
         * @return {@code this}
         */
        public Builder timeoutMins(com.aliyun.ros.cdk.core.IResolvable timeoutMins) {
            this.timeoutMins = timeoutMins;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link StackProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public StackProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link StackProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements StackProps {
        private final java.lang.Object parameters;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object templateBody;
        private final java.lang.Object templateId;
        private final java.lang.Object templateUrl;
        private final java.lang.Object templateVersion;
        private final java.lang.Object timeoutMins;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateBody = software.amazon.jsii.Kernel.get(this, "templateBody", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateId = software.amazon.jsii.Kernel.get(this, "templateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateUrl = software.amazon.jsii.Kernel.get(this, "templateUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateVersion = software.amazon.jsii.Kernel.get(this, "templateVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeoutMins = software.amazon.jsii.Kernel.get(this, "timeoutMins", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.parameters = builder.parameters;
            this.resourceGroupId = builder.resourceGroupId;
            this.templateBody = builder.templateBody;
            this.templateId = builder.templateId;
            this.templateUrl = builder.templateUrl;
            this.templateVersion = builder.templateVersion;
            this.timeoutMins = builder.timeoutMins;
        }

        @Override
        public final java.lang.Object getParameters() {
            return this.parameters;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getTemplateBody() {
            return this.templateBody;
        }

        @Override
        public final java.lang.Object getTemplateId() {
            return this.templateId;
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
        public final java.lang.Object getTimeoutMins() {
            return this.timeoutMins;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTemplateBody() != null) {
                data.set("templateBody", om.valueToTree(this.getTemplateBody()));
            }
            if (this.getTemplateId() != null) {
                data.set("templateId", om.valueToTree(this.getTemplateId()));
            }
            if (this.getTemplateUrl() != null) {
                data.set("templateUrl", om.valueToTree(this.getTemplateUrl()));
            }
            if (this.getTemplateVersion() != null) {
                data.set("templateVersion", om.valueToTree(this.getTemplateVersion()));
            }
            if (this.getTimeoutMins() != null) {
                data.set("timeoutMins", om.valueToTree(this.getTimeoutMins()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.StackProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            StackProps.Jsii$Proxy that = (StackProps.Jsii$Proxy) o;

            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.templateBody != null ? !this.templateBody.equals(that.templateBody) : that.templateBody != null) return false;
            if (this.templateId != null ? !this.templateId.equals(that.templateId) : that.templateId != null) return false;
            if (this.templateUrl != null ? !this.templateUrl.equals(that.templateUrl) : that.templateUrl != null) return false;
            if (this.templateVersion != null ? !this.templateVersion.equals(that.templateVersion) : that.templateVersion != null) return false;
            return this.timeoutMins != null ? this.timeoutMins.equals(that.timeoutMins) : that.timeoutMins == null;
        }

        @Override
        public final int hashCode() {
            int result = this.parameters != null ? this.parameters.hashCode() : 0;
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.templateBody != null ? this.templateBody.hashCode() : 0);
            result = 31 * result + (this.templateId != null ? this.templateId.hashCode() : 0);
            result = 31 * result + (this.templateUrl != null ? this.templateUrl.hashCode() : 0);
            result = 31 * result + (this.templateVersion != null ? this.templateVersion.hashCode() : 0);
            result = 31 * result + (this.timeoutMins != null ? this.timeoutMins.hashCode() : 0);
            return result;
        }
    }
}
