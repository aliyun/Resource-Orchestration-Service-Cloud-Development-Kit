package com.aliyun.ros.cdk.config;

/**
 * Properties for defining a <code>ReportTemplate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-reporttemplate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:01:48.337Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.ReportTemplateProps")
@software.amazon.jsii.Jsii.Proxy(ReportTemplateProps.Jsii$Proxy.class)
public interface ReportTemplateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property reportTemplateName: Report Template Name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReportTemplateName();

    /**
     * Property reportFileFormats: Report Format.
     * <p>
     * Currently only support <code>excel</code>.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReportFileFormats() {
        return null;
    }

    /**
     * Property reportGranularity: Report Aggregation Granularity.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReportGranularity() {
        return null;
    }

    /**
     * Property reportLanguage: Report Content Language, Currently only support <code>zh-CN</code> or <code>en-US</code>.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReportLanguage() {
        return null;
    }

    /**
     * Property reportScope: Report range, yes and logic between multiple sets of k-v pairs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReportScope() {
        return null;
    }

    /**
     * Property reportTemplateDescription: Report Template Description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReportTemplateDescription() {
        return null;
    }

    /**
     * Property subscriptionFrequency: Report subscription frequency.
     * <p>
     * If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
     * The format is: Seconds, time, day, month, week. The following are examples of commonly used Cron expressions:
     * <p>
     * <ul>
     * <li>Execute at 0 o'clock every day: 0 0 0 * *?</li>
     * <li>Every Monday at 15: 30: 0 30 15? * MON</li>
     * <li>Execute at 2 o'clock on the 1st of each month: 0 0 2 1 *?
     * Among them:</li>
     * <li>"*" Indicates any value</li>
     * <li>What-? Used for day and week fields, indicating that no specific value is specified</li>
     * <li>MON means Monday</li>
     * </ul>
     * <p>
     * <blockquote>
     * <p>
     * The trigger time is UTC +8, and the settings of the cron expression can be converted according to the time zone.
     * It can only be triggered according to the cron expression time as much as possible. The cron expression limits the same template to trigger at most one notification per day.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSubscriptionFrequency() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ReportTemplateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ReportTemplateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ReportTemplateProps> {
        java.lang.Object reportTemplateName;
        java.lang.Object reportFileFormats;
        java.lang.Object reportGranularity;
        java.lang.Object reportLanguage;
        java.lang.Object reportScope;
        java.lang.Object reportTemplateDescription;
        java.lang.Object subscriptionFrequency;

        /**
         * Sets the value of {@link ReportTemplateProps#getReportTemplateName}
         * @param reportTemplateName Property reportTemplateName: Report Template Name. This parameter is required.
         * @return {@code this}
         */
        public Builder reportTemplateName(java.lang.String reportTemplateName) {
            this.reportTemplateName = reportTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link ReportTemplateProps#getReportTemplateName}
         * @param reportTemplateName Property reportTemplateName: Report Template Name. This parameter is required.
         * @return {@code this}
         */
        public Builder reportTemplateName(com.aliyun.ros.cdk.core.IResolvable reportTemplateName) {
            this.reportTemplateName = reportTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link ReportTemplateProps#getReportFileFormats}
         * @param reportFileFormats Property reportFileFormats: Report Format.
         *                          Currently only support <code>excel</code>.
         * @return {@code this}
         */
        public Builder reportFileFormats(java.lang.String reportFileFormats) {
            this.reportFileFormats = reportFileFormats;
            return this;
        }

        /**
         * Sets the value of {@link ReportTemplateProps#getReportFileFormats}
         * @param reportFileFormats Property reportFileFormats: Report Format.
         *                          Currently only support <code>excel</code>.
         * @return {@code this}
         */
        public Builder reportFileFormats(com.aliyun.ros.cdk.core.IResolvable reportFileFormats) {
            this.reportFileFormats = reportFileFormats;
            return this;
        }

        /**
         * Sets the value of {@link ReportTemplateProps#getReportGranularity}
         * @param reportGranularity Property reportGranularity: Report Aggregation Granularity.
         * @return {@code this}
         */
        public Builder reportGranularity(java.lang.String reportGranularity) {
            this.reportGranularity = reportGranularity;
            return this;
        }

        /**
         * Sets the value of {@link ReportTemplateProps#getReportGranularity}
         * @param reportGranularity Property reportGranularity: Report Aggregation Granularity.
         * @return {@code this}
         */
        public Builder reportGranularity(com.aliyun.ros.cdk.core.IResolvable reportGranularity) {
            this.reportGranularity = reportGranularity;
            return this;
        }

        /**
         * Sets the value of {@link ReportTemplateProps#getReportLanguage}
         * @param reportLanguage Property reportLanguage: Report Content Language, Currently only support <code>zh-CN</code> or <code>en-US</code>.
         * @return {@code this}
         */
        public Builder reportLanguage(java.lang.String reportLanguage) {
            this.reportLanguage = reportLanguage;
            return this;
        }

        /**
         * Sets the value of {@link ReportTemplateProps#getReportLanguage}
         * @param reportLanguage Property reportLanguage: Report Content Language, Currently only support <code>zh-CN</code> or <code>en-US</code>.
         * @return {@code this}
         */
        public Builder reportLanguage(com.aliyun.ros.cdk.core.IResolvable reportLanguage) {
            this.reportLanguage = reportLanguage;
            return this;
        }

        /**
         * Sets the value of {@link ReportTemplateProps#getReportScope}
         * @param reportScope Property reportScope: Report range, yes and logic between multiple sets of k-v pairs.
         * @return {@code this}
         */
        public Builder reportScope(com.aliyun.ros.cdk.core.IResolvable reportScope) {
            this.reportScope = reportScope;
            return this;
        }

        /**
         * Sets the value of {@link ReportTemplateProps#getReportScope}
         * @param reportScope Property reportScope: Report range, yes and logic between multiple sets of k-v pairs.
         * @return {@code this}
         */
        public Builder reportScope(java.util.List<? extends java.lang.Object> reportScope) {
            this.reportScope = reportScope;
            return this;
        }

        /**
         * Sets the value of {@link ReportTemplateProps#getReportTemplateDescription}
         * @param reportTemplateDescription Property reportTemplateDescription: Report Template Description.
         * @return {@code this}
         */
        public Builder reportTemplateDescription(java.lang.String reportTemplateDescription) {
            this.reportTemplateDescription = reportTemplateDescription;
            return this;
        }

        /**
         * Sets the value of {@link ReportTemplateProps#getReportTemplateDescription}
         * @param reportTemplateDescription Property reportTemplateDescription: Report Template Description.
         * @return {@code this}
         */
        public Builder reportTemplateDescription(com.aliyun.ros.cdk.core.IResolvable reportTemplateDescription) {
            this.reportTemplateDescription = reportTemplateDescription;
            return this;
        }

        /**
         * Sets the value of {@link ReportTemplateProps#getSubscriptionFrequency}
         * @param subscriptionFrequency Property subscriptionFrequency: Report subscription frequency.
         *                              If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
         *                              The format is: Seconds, time, day, month, week. The following are examples of commonly used Cron expressions:
         *                              <p>
         *                              <ul>
         *                              <li>Execute at 0 o'clock every day: 0 0 0 * *?</li>
         *                              <li>Every Monday at 15: 30: 0 30 15? * MON</li>
         *                              <li>Execute at 2 o'clock on the 1st of each month: 0 0 2 1 *?
         *                              Among them:</li>
         *                              <li>"*" Indicates any value</li>
         *                              <li>What-? Used for day and week fields, indicating that no specific value is specified</li>
         *                              <li>MON means Monday</li>
         *                              </ul>
         *                              <p>
         *                              <blockquote>
         *                              <p>
         *                              The trigger time is UTC +8, and the settings of the cron expression can be converted according to the time zone.
         *                              It can only be triggered according to the cron expression time as much as possible. The cron expression limits the same template to trigger at most one notification per day.
         *                              <p>
         *                              </blockquote>
         * @return {@code this}
         */
        public Builder subscriptionFrequency(java.lang.String subscriptionFrequency) {
            this.subscriptionFrequency = subscriptionFrequency;
            return this;
        }

        /**
         * Sets the value of {@link ReportTemplateProps#getSubscriptionFrequency}
         * @param subscriptionFrequency Property subscriptionFrequency: Report subscription frequency.
         *                              If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
         *                              The format is: Seconds, time, day, month, week. The following are examples of commonly used Cron expressions:
         *                              <p>
         *                              <ul>
         *                              <li>Execute at 0 o'clock every day: 0 0 0 * *?</li>
         *                              <li>Every Monday at 15: 30: 0 30 15? * MON</li>
         *                              <li>Execute at 2 o'clock on the 1st of each month: 0 0 2 1 *?
         *                              Among them:</li>
         *                              <li>"*" Indicates any value</li>
         *                              <li>What-? Used for day and week fields, indicating that no specific value is specified</li>
         *                              <li>MON means Monday</li>
         *                              </ul>
         *                              <p>
         *                              <blockquote>
         *                              <p>
         *                              The trigger time is UTC +8, and the settings of the cron expression can be converted according to the time zone.
         *                              It can only be triggered according to the cron expression time as much as possible. The cron expression limits the same template to trigger at most one notification per day.
         *                              <p>
         *                              </blockquote>
         * @return {@code this}
         */
        public Builder subscriptionFrequency(com.aliyun.ros.cdk.core.IResolvable subscriptionFrequency) {
            this.subscriptionFrequency = subscriptionFrequency;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ReportTemplateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ReportTemplateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ReportTemplateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ReportTemplateProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-config.ReportTemplateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ReportTemplateProps.Jsii$Proxy that = (ReportTemplateProps.Jsii$Proxy) o;

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
