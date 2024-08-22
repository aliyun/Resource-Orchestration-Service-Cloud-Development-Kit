package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a <code>MetricRuleTemplate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletemplate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:18.600Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.MetricRuleTemplateProps")
@software.amazon.jsii.Jsii.Proxy(MetricRuleTemplateProps.Jsii$Proxy.class)
public interface MetricRuleTemplateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property name: The name of the alert template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property alertTemplates: Valid values of N: 0 to 200.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlertTemplates() {
        return null;
    }

    /**
     * Property description: The description of the alert template.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property restVersion: The version of the alert template.
     * <p>
     * Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
     * to obtain information about the alert templates. The combination of version and ID
     * uniquely identifies an alert template.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestVersion() {
        return null;
    }

    /**
     * Property templateId: The ID of the alert template.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateId() {
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
        java.lang.Object name;
        java.lang.Object alertTemplates;
        java.lang.Object description;
        java.lang.Object restVersion;
        java.lang.Object templateId;

        /**
         * Sets the value of {@link MetricRuleTemplateProps#getName}
         * @param name Property name: The name of the alert template. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateProps#getName}
         * @param name Property name: The name of the alert template. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateProps#getAlertTemplates}
         * @param alertTemplates Property alertTemplates: Valid values of N: 0 to 200.
         * @return {@code this}
         */
        public Builder alertTemplates(com.aliyun.ros.cdk.core.IResolvable alertTemplates) {
            this.alertTemplates = alertTemplates;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateProps#getAlertTemplates}
         * @param alertTemplates Property alertTemplates: Valid values of N: 0 to 200.
         * @return {@code this}
         */
        public Builder alertTemplates(java.util.List<? extends java.lang.Object> alertTemplates) {
            this.alertTemplates = alertTemplates;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateProps#getDescription}
         * @param description Property description: The description of the alert template.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateProps#getDescription}
         * @param description Property description: The description of the alert template.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateProps#getRestVersion}
         * @param restVersion Property restVersion: The version of the alert template.
         *                    Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
         *                    to obtain information about the alert templates. The combination of version and ID
         *                    uniquely identifies an alert template.
         * @return {@code this}
         */
        public Builder restVersion(java.lang.Number restVersion) {
            this.restVersion = restVersion;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateProps#getRestVersion}
         * @param restVersion Property restVersion: The version of the alert template.
         *                    Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
         *                    to obtain information about the alert templates. The combination of version and ID
         *                    uniquely identifies an alert template.
         * @return {@code this}
         */
        public Builder restVersion(com.aliyun.ros.cdk.core.IResolvable restVersion) {
            this.restVersion = restVersion;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateProps#getTemplateId}
         * @param templateId Property templateId: The ID of the alert template.
         * @return {@code this}
         */
        public Builder templateId(java.lang.Number templateId) {
            this.templateId = templateId;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateProps#getTemplateId}
         * @param templateId Property templateId: The ID of the alert template.
         * @return {@code this}
         */
        public Builder templateId(com.aliyun.ros.cdk.core.IResolvable templateId) {
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
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link MetricRuleTemplateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MetricRuleTemplateProps {
        private final java.lang.Object name;
        private final java.lang.Object alertTemplates;
        private final java.lang.Object description;
        private final java.lang.Object restVersion;
        private final java.lang.Object templateId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.alertTemplates = software.amazon.jsii.Kernel.get(this, "alertTemplates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restVersion = software.amazon.jsii.Kernel.get(this, "restVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateId = software.amazon.jsii.Kernel.get(this, "templateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.alertTemplates = builder.alertTemplates;
            this.description = builder.description;
            this.restVersion = builder.restVersion;
            this.templateId = builder.templateId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getAlertTemplates() {
            return this.alertTemplates;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getRestVersion() {
            return this.restVersion;
        }

        @Override
        public final java.lang.Object getTemplateId() {
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
