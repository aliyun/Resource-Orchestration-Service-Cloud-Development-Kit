package com.aliyun.ros.cdk.config;

/**
 * Properties for defining a <code>RosReportTemplate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-reporttemplate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:01:48.364Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosReportTemplateProps")
@software.amazon.jsii.Jsii.Proxy(RosReportTemplateProps.Jsii$Proxy.class)
public interface RosReportTemplateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReportTemplateName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReportFileFormats() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReportGranularity() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReportLanguage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReportScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReportTemplateDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSubscriptionFrequency() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosReportTemplateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosReportTemplateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosReportTemplateProps> {
        java.lang.Object reportTemplateName;
        java.lang.Object reportFileFormats;
        java.lang.Object reportGranularity;
        java.lang.Object reportLanguage;
        java.lang.Object reportScope;
        java.lang.Object reportTemplateDescription;
        java.lang.Object subscriptionFrequency;

        /**
         * Sets the value of {@link RosReportTemplateProps#getReportTemplateName}
         * @param reportTemplateName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder reportTemplateName(java.lang.String reportTemplateName) {
            this.reportTemplateName = reportTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link RosReportTemplateProps#getReportTemplateName}
         * @param reportTemplateName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder reportTemplateName(com.aliyun.ros.cdk.core.IResolvable reportTemplateName) {
            this.reportTemplateName = reportTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link RosReportTemplateProps#getReportFileFormats}
         * @param reportFileFormats the value to be set.
         * @return {@code this}
         */
        public Builder reportFileFormats(java.lang.String reportFileFormats) {
            this.reportFileFormats = reportFileFormats;
            return this;
        }

        /**
         * Sets the value of {@link RosReportTemplateProps#getReportFileFormats}
         * @param reportFileFormats the value to be set.
         * @return {@code this}
         */
        public Builder reportFileFormats(com.aliyun.ros.cdk.core.IResolvable reportFileFormats) {
            this.reportFileFormats = reportFileFormats;
            return this;
        }

        /**
         * Sets the value of {@link RosReportTemplateProps#getReportGranularity}
         * @param reportGranularity the value to be set.
         * @return {@code this}
         */
        public Builder reportGranularity(java.lang.String reportGranularity) {
            this.reportGranularity = reportGranularity;
            return this;
        }

        /**
         * Sets the value of {@link RosReportTemplateProps#getReportGranularity}
         * @param reportGranularity the value to be set.
         * @return {@code this}
         */
        public Builder reportGranularity(com.aliyun.ros.cdk.core.IResolvable reportGranularity) {
            this.reportGranularity = reportGranularity;
            return this;
        }

        /**
         * Sets the value of {@link RosReportTemplateProps#getReportLanguage}
         * @param reportLanguage the value to be set.
         * @return {@code this}
         */
        public Builder reportLanguage(java.lang.String reportLanguage) {
            this.reportLanguage = reportLanguage;
            return this;
        }

        /**
         * Sets the value of {@link RosReportTemplateProps#getReportLanguage}
         * @param reportLanguage the value to be set.
         * @return {@code this}
         */
        public Builder reportLanguage(com.aliyun.ros.cdk.core.IResolvable reportLanguage) {
            this.reportLanguage = reportLanguage;
            return this;
        }

        /**
         * Sets the value of {@link RosReportTemplateProps#getReportScope}
         * @param reportScope the value to be set.
         * @return {@code this}
         */
        public Builder reportScope(com.aliyun.ros.cdk.core.IResolvable reportScope) {
            this.reportScope = reportScope;
            return this;
        }

        /**
         * Sets the value of {@link RosReportTemplateProps#getReportScope}
         * @param reportScope the value to be set.
         * @return {@code this}
         */
        public Builder reportScope(java.util.List<? extends java.lang.Object> reportScope) {
            this.reportScope = reportScope;
            return this;
        }

        /**
         * Sets the value of {@link RosReportTemplateProps#getReportTemplateDescription}
         * @param reportTemplateDescription the value to be set.
         * @return {@code this}
         */
        public Builder reportTemplateDescription(java.lang.String reportTemplateDescription) {
            this.reportTemplateDescription = reportTemplateDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosReportTemplateProps#getReportTemplateDescription}
         * @param reportTemplateDescription the value to be set.
         * @return {@code this}
         */
        public Builder reportTemplateDescription(com.aliyun.ros.cdk.core.IResolvable reportTemplateDescription) {
            this.reportTemplateDescription = reportTemplateDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosReportTemplateProps#getSubscriptionFrequency}
         * @param subscriptionFrequency the value to be set.
         * @return {@code this}
         */
        public Builder subscriptionFrequency(java.lang.String subscriptionFrequency) {
            this.subscriptionFrequency = subscriptionFrequency;
            return this;
        }

        /**
         * Sets the value of {@link RosReportTemplateProps#getSubscriptionFrequency}
         * @param subscriptionFrequency the value to be set.
         * @return {@code this}
         */
        public Builder subscriptionFrequency(com.aliyun.ros.cdk.core.IResolvable subscriptionFrequency) {
            this.subscriptionFrequency = subscriptionFrequency;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosReportTemplateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosReportTemplateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosReportTemplateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosReportTemplateProps {
        private final java.lang.Object reportTemplateName;
        private final java.lang.Object reportFileFormats;
        private final java.lang.Object reportGranularity;
        private final java.lang.Object reportLanguage;
        private final java.lang.Object reportScope;
        private final java.lang.Object reportTemplateDescription;
        private final java.lang.Object subscriptionFrequency;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.reportTemplateName = software.amazon.jsii.Kernel.get(this, "reportTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.reportFileFormats = software.amazon.jsii.Kernel.get(this, "reportFileFormats", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.reportGranularity = software.amazon.jsii.Kernel.get(this, "reportGranularity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.reportLanguage = software.amazon.jsii.Kernel.get(this, "reportLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.reportScope = software.amazon.jsii.Kernel.get(this, "reportScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.reportTemplateDescription = software.amazon.jsii.Kernel.get(this, "reportTemplateDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.subscriptionFrequency = software.amazon.jsii.Kernel.get(this, "subscriptionFrequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.reportTemplateName = java.util.Objects.requireNonNull(builder.reportTemplateName, "reportTemplateName is required");
            this.reportFileFormats = builder.reportFileFormats;
            this.reportGranularity = builder.reportGranularity;
            this.reportLanguage = builder.reportLanguage;
            this.reportScope = builder.reportScope;
            this.reportTemplateDescription = builder.reportTemplateDescription;
            this.subscriptionFrequency = builder.subscriptionFrequency;
        }

        @Override
        public final java.lang.Object getReportTemplateName() {
            return this.reportTemplateName;
        }

        @Override
        public final java.lang.Object getReportFileFormats() {
            return this.reportFileFormats;
        }

        @Override
        public final java.lang.Object getReportGranularity() {
            return this.reportGranularity;
        }

        @Override
        public final java.lang.Object getReportLanguage() {
            return this.reportLanguage;
        }

        @Override
        public final java.lang.Object getReportScope() {
            return this.reportScope;
        }

        @Override
        public final java.lang.Object getReportTemplateDescription() {
            return this.reportTemplateDescription;
        }

        @Override
        public final java.lang.Object getSubscriptionFrequency() {
            return this.subscriptionFrequency;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("reportTemplateName", om.valueToTree(this.getReportTemplateName()));
            if (this.getReportFileFormats() != null) {
                data.set("reportFileFormats", om.valueToTree(this.getReportFileFormats()));
            }
            if (this.getReportGranularity() != null) {
                data.set("reportGranularity", om.valueToTree(this.getReportGranularity()));
            }
            if (this.getReportLanguage() != null) {
                data.set("reportLanguage", om.valueToTree(this.getReportLanguage()));
            }
            if (this.getReportScope() != null) {
                data.set("reportScope", om.valueToTree(this.getReportScope()));
            }
            if (this.getReportTemplateDescription() != null) {
                data.set("reportTemplateDescription", om.valueToTree(this.getReportTemplateDescription()));
            }
            if (this.getSubscriptionFrequency() != null) {
                data.set("subscriptionFrequency", om.valueToTree(this.getSubscriptionFrequency()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-config.RosReportTemplateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosReportTemplateProps.Jsii$Proxy that = (RosReportTemplateProps.Jsii$Proxy) o;

            if (!reportTemplateName.equals(that.reportTemplateName)) return false;
            if (this.reportFileFormats != null ? !this.reportFileFormats.equals(that.reportFileFormats) : that.reportFileFormats != null) return false;
            if (this.reportGranularity != null ? !this.reportGranularity.equals(that.reportGranularity) : that.reportGranularity != null) return false;
            if (this.reportLanguage != null ? !this.reportLanguage.equals(that.reportLanguage) : that.reportLanguage != null) return false;
            if (this.reportScope != null ? !this.reportScope.equals(that.reportScope) : that.reportScope != null) return false;
            if (this.reportTemplateDescription != null ? !this.reportTemplateDescription.equals(that.reportTemplateDescription) : that.reportTemplateDescription != null) return false;
            return this.subscriptionFrequency != null ? this.subscriptionFrequency.equals(that.subscriptionFrequency) : that.subscriptionFrequency == null;
        }

        @Override
        public final int hashCode() {
            int result = this.reportTemplateName.hashCode();
            result = 31 * result + (this.reportFileFormats != null ? this.reportFileFormats.hashCode() : 0);
            result = 31 * result + (this.reportGranularity != null ? this.reportGranularity.hashCode() : 0);
            result = 31 * result + (this.reportLanguage != null ? this.reportLanguage.hashCode() : 0);
            result = 31 * result + (this.reportScope != null ? this.reportScope.hashCode() : 0);
            result = 31 * result + (this.reportTemplateDescription != null ? this.reportTemplateDescription.hashCode() : 0);
            result = 31 * result + (this.subscriptionFrequency != null ? this.subscriptionFrequency.hashCode() : 0);
            return result;
        }
    }
}
