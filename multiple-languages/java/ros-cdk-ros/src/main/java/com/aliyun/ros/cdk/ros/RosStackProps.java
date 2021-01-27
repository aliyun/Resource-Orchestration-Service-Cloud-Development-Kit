package com.aliyun.ros.cdk.ros;

/**
 * Properties for defining a `ALIYUN::ROS::Stack`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.514Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosStackProps")
@software.amazon.jsii.Jsii.Proxy(RosStackProps.Jsii$Proxy.class)
public interface RosStackProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateBody() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTemplateId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTemplateUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTemplateVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getTimeoutMins() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosStackProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosStackProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosStackProps> {
        private java.lang.Object parameters;
        private java.lang.Object templateBody;
        private java.lang.String templateId;
        private java.lang.String templateUrl;
        private java.lang.String templateVersion;
        private java.lang.Number timeoutMins;

        /**
         * Sets the value of {@link RosStackProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosStackProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosStackProps#getTemplateBody}
         * @param templateBody the value to be set.
         * @return {@code this}
         */
        public Builder templateBody(com.aliyun.ros.cdk.core.IResolvable templateBody) {
            this.templateBody = templateBody;
            return this;
        }

        /**
         * Sets the value of {@link RosStackProps#getTemplateBody}
         * @param templateBody the value to be set.
         * @return {@code this}
         */
        public Builder templateBody(java.util.Map<java.lang.String, ? extends java.lang.Object> templateBody) {
            this.templateBody = templateBody;
            return this;
        }

        /**
         * Sets the value of {@link RosStackProps#getTemplateId}
         * @param templateId the value to be set.
         * @return {@code this}
         */
        public Builder templateId(java.lang.String templateId) {
            this.templateId = templateId;
            return this;
        }

        /**
         * Sets the value of {@link RosStackProps#getTemplateUrl}
         * @param templateUrl the value to be set.
         * @return {@code this}
         */
        public Builder templateUrl(java.lang.String templateUrl) {
            this.templateUrl = templateUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosStackProps#getTemplateVersion}
         * @param templateVersion the value to be set.
         * @return {@code this}
         */
        public Builder templateVersion(java.lang.String templateVersion) {
            this.templateVersion = templateVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosStackProps#getTimeoutMins}
         * @param timeoutMins the value to be set.
         * @return {@code this}
         */
        public Builder timeoutMins(java.lang.Number timeoutMins) {
            this.timeoutMins = timeoutMins;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosStackProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosStackProps build() {
            return new Jsii$Proxy(parameters, templateBody, templateId, templateUrl, templateVersion, timeoutMins);
        }
    }

    /**
     * An implementation for {@link RosStackProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosStackProps {
        private final java.lang.Object parameters;
        private final java.lang.Object templateBody;
        private final java.lang.String templateId;
        private final java.lang.String templateUrl;
        private final java.lang.String templateVersion;
        private final java.lang.Number timeoutMins;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateBody = software.amazon.jsii.Kernel.get(this, "templateBody", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateId = software.amazon.jsii.Kernel.get(this, "templateId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.templateUrl = software.amazon.jsii.Kernel.get(this, "templateUrl", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.templateVersion = software.amazon.jsii.Kernel.get(this, "templateVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.timeoutMins = software.amazon.jsii.Kernel.get(this, "timeoutMins", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object parameters, final java.lang.Object templateBody, final java.lang.String templateId, final java.lang.String templateUrl, final java.lang.String templateVersion, final java.lang.Number timeoutMins) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.parameters = parameters;
            this.templateBody = templateBody;
            this.templateId = templateId;
            this.templateUrl = templateUrl;
            this.templateVersion = templateVersion;
            this.timeoutMins = timeoutMins;
        }

        @Override
        public final java.lang.Object getParameters() {
            return this.parameters;
        }

        @Override
        public final java.lang.Object getTemplateBody() {
            return this.templateBody;
        }

        @Override
        public final java.lang.String getTemplateId() {
            return this.templateId;
        }

        @Override
        public final java.lang.String getTemplateUrl() {
            return this.templateUrl;
        }

        @Override
        public final java.lang.String getTemplateVersion() {
            return this.templateVersion;
        }

        @Override
        public final java.lang.Number getTimeoutMins() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.RosStackProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosStackProps.Jsii$Proxy that = (RosStackProps.Jsii$Proxy) o;

            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.templateBody != null ? !this.templateBody.equals(that.templateBody) : that.templateBody != null) return false;
            if (this.templateId != null ? !this.templateId.equals(that.templateId) : that.templateId != null) return false;
            if (this.templateUrl != null ? !this.templateUrl.equals(that.templateUrl) : that.templateUrl != null) return false;
            if (this.templateVersion != null ? !this.templateVersion.equals(that.templateVersion) : that.templateVersion != null) return false;
            return this.timeoutMins != null ? this.timeoutMins.equals(that.timeoutMins) : that.timeoutMins == null;
        }

        @Override
        public final int hashCode() {
            int result = this.parameters != null ? this.parameters.hashCode() : 0;
            result = 31 * result + (this.templateBody != null ? this.templateBody.hashCode() : 0);
            result = 31 * result + (this.templateId != null ? this.templateId.hashCode() : 0);
            result = 31 * result + (this.templateUrl != null ? this.templateUrl.hashCode() : 0);
            result = 31 * result + (this.templateVersion != null ? this.templateVersion.hashCode() : 0);
            result = 31 * result + (this.timeoutMins != null ? this.timeoutMins.hashCode() : 0);
            return result;
        }
    }
}
