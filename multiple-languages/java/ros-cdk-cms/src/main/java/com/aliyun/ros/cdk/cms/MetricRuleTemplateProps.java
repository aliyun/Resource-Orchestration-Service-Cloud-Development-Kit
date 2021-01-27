package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a `ALIYUN::CMS::MetricRuleTemplate`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.311Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.MetricRuleTemplateProps")
@software.amazon.jsii.Jsii.Proxy(MetricRuleTemplateProps.Jsii$Proxy.class)
public interface MetricRuleTemplateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlertTemplates() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getRestVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getTemplateId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link MetricRuleTemplateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MetricRuleTemplateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MetricRuleTemplateProps> {
        private java.lang.String name;
        private java.lang.Object alertTemplates;
        private java.lang.String description;
        private java.lang.Number restVersion;
        private java.lang.Number templateId;

        /**
         * Sets the value of {@link MetricRuleTemplateProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateProps#getAlertTemplates}
         * @param alertTemplates the value to be set.
         * @return {@code this}
         */
        public Builder alertTemplates(com.aliyun.ros.cdk.core.IResolvable alertTemplates) {
            this.alertTemplates = alertTemplates;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateProps#getAlertTemplates}
         * @param alertTemplates the value to be set.
         * @return {@code this}
         */
        public Builder alertTemplates(java.util.List<? extends java.lang.Object> alertTemplates) {
            this.alertTemplates = alertTemplates;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateProps#getRestVersion}
         * @param restVersion the value to be set.
         * @return {@code this}
         */
        public Builder restVersion(java.lang.Number restVersion) {
            this.restVersion = restVersion;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateProps#getTemplateId}
         * @param templateId the value to be set.
         * @return {@code this}
         */
        public Builder templateId(java.lang.Number templateId) {
            this.templateId = templateId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MetricRuleTemplateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MetricRuleTemplateProps build() {
            return new Jsii$Proxy(name, alertTemplates, description, restVersion, templateId);
        }
    }

    /**
     * An implementation for {@link MetricRuleTemplateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MetricRuleTemplateProps {
        private final java.lang.String name;
        private final java.lang.Object alertTemplates;
        private final java.lang.String description;
        private final java.lang.Number restVersion;
        private final java.lang.Number templateId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.alertTemplates = software.amazon.jsii.Kernel.get(this, "alertTemplates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.restVersion = software.amazon.jsii.Kernel.get(this, "restVersion", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.templateId = software.amazon.jsii.Kernel.get(this, "templateId", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String name, final java.lang.Object alertTemplates, final java.lang.String description, final java.lang.Number restVersion, final java.lang.Number templateId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(name, "name is required");
            this.alertTemplates = alertTemplates;
            this.description = description;
            this.restVersion = restVersion;
            this.templateId = templateId;
        }

        @Override
        public final java.lang.String getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getAlertTemplates() {
            return this.alertTemplates;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Number getRestVersion() {
            return this.restVersion;
        }

        @Override
        public final java.lang.Number getTemplateId() {
            return this.templateId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            if (this.getAlertTemplates() != null) {
                data.set("alertTemplates", om.valueToTree(this.getAlertTemplates()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getRestVersion() != null) {
                data.set("restVersion", om.valueToTree(this.getRestVersion()));
            }
            if (this.getTemplateId() != null) {
                data.set("templateId", om.valueToTree(this.getTemplateId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.MetricRuleTemplateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MetricRuleTemplateProps.Jsii$Proxy that = (MetricRuleTemplateProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (this.alertTemplates != null ? !this.alertTemplates.equals(that.alertTemplates) : that.alertTemplates != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.restVersion != null ? !this.restVersion.equals(that.restVersion) : that.restVersion != null) return false;
            return this.templateId != null ? this.templateId.equals(that.templateId) : that.templateId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.alertTemplates != null ? this.alertTemplates.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.restVersion != null ? this.restVersion.hashCode() : 0);
            result = 31 * result + (this.templateId != null ? this.templateId.hashCode() : 0);
            return result;
        }
    }
}
