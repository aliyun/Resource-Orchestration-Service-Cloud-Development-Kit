package com.aliyun.ros.cdk.config;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::Config::ReportTemplate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:01:48.334Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.ReportTemplate")
public class ReportTemplate extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.config.IReportTemplate {

    protected ReportTemplate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ReportTemplate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ReportTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.ReportTemplateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ReportTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.ReportTemplateProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ReportFileFormats: Report Format.
     * <p>
     * Currently only support <code>excel</code>.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportFileFormats() {
        return software.amazon.jsii.Kernel.get(this, "attrReportFileFormats", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReportGranularity: Report Aggregation Granularity.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportGranularity() {
        return software.amazon.jsii.Kernel.get(this, "attrReportGranularity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReportLanguage: Report Content Language, Currently only support <code>zh-CN</code> or <code>en-US</code>.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportLanguage() {
        return software.amazon.jsii.Kernel.get(this, "attrReportLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReportScope: Report range, yes and logic between multiple sets of k-v pairs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportScope() {
        return software.amazon.jsii.Kernel.get(this, "attrReportScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReportTemplateDescription: Report Template Description.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportTemplateDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrReportTemplateDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReportTemplateId: Report template Id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "attrReportTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReportTemplateName: Report Template Name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "attrReportTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SubscriptionFrequency: Report subscription frequency.
     * <p>
     * If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubscriptionFrequency() {
        return software.amazon.jsii.Kernel.get(this, "attrSubscriptionFrequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.ReportTemplateProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.config.ReportTemplateProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.config.ReportTemplate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.config.ReportTemplate> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.config.ReportTemplateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.config.ReportTemplateProps.Builder();
        }

        /**
         * Property reportTemplateName: Report Template Name.
         * <p>
         * @return {@code this}
         * @param reportTemplateName Property reportTemplateName: Report Template Name. This parameter is required.
         */
        public Builder reportTemplateName(final java.lang.String reportTemplateName) {
            this.props.reportTemplateName(reportTemplateName);
            return this;
        }
        /**
         * Property reportTemplateName: Report Template Name.
         * <p>
         * @return {@code this}
         * @param reportTemplateName Property reportTemplateName: Report Template Name. This parameter is required.
         */
        public Builder reportTemplateName(final com.aliyun.ros.cdk.core.IResolvable reportTemplateName) {
            this.props.reportTemplateName(reportTemplateName);
            return this;
        }

        /**
         * Property reportFileFormats: Report Format.
         * <p>
         * Currently only support <code>excel</code>.
         * <p>
         * @return {@code this}
         * @param reportFileFormats Property reportFileFormats: Report Format. This parameter is required.
         */
        public Builder reportFileFormats(final java.lang.String reportFileFormats) {
            this.props.reportFileFormats(reportFileFormats);
            return this;
        }
        /**
         * Property reportFileFormats: Report Format.
         * <p>
         * Currently only support <code>excel</code>.
         * <p>
         * @return {@code this}
         * @param reportFileFormats Property reportFileFormats: Report Format. This parameter is required.
         */
        public Builder reportFileFormats(final com.aliyun.ros.cdk.core.IResolvable reportFileFormats) {
            this.props.reportFileFormats(reportFileFormats);
            return this;
        }

        /**
         * Property reportGranularity: Report Aggregation Granularity.
         * <p>
         * @return {@code this}
         * @param reportGranularity Property reportGranularity: Report Aggregation Granularity. This parameter is required.
         */
        public Builder reportGranularity(final java.lang.String reportGranularity) {
            this.props.reportGranularity(reportGranularity);
            return this;
        }
        /**
         * Property reportGranularity: Report Aggregation Granularity.
         * <p>
         * @return {@code this}
         * @param reportGranularity Property reportGranularity: Report Aggregation Granularity. This parameter is required.
         */
        public Builder reportGranularity(final com.aliyun.ros.cdk.core.IResolvable reportGranularity) {
            this.props.reportGranularity(reportGranularity);
            return this;
        }

        /**
         * Property reportLanguage: Report Content Language, Currently only support <code>zh-CN</code> or <code>en-US</code>.
         * <p>
         * @return {@code this}
         * @param reportLanguage Property reportLanguage: Report Content Language, Currently only support <code>zh-CN</code> or <code>en-US</code>. This parameter is required.
         */
        public Builder reportLanguage(final java.lang.String reportLanguage) {
            this.props.reportLanguage(reportLanguage);
            return this;
        }
        /**
         * Property reportLanguage: Report Content Language, Currently only support <code>zh-CN</code> or <code>en-US</code>.
         * <p>
         * @return {@code this}
         * @param reportLanguage Property reportLanguage: Report Content Language, Currently only support <code>zh-CN</code> or <code>en-US</code>. This parameter is required.
         */
        public Builder reportLanguage(final com.aliyun.ros.cdk.core.IResolvable reportLanguage) {
            this.props.reportLanguage(reportLanguage);
            return this;
        }

        /**
         * Property reportScope: Report range, yes and logic between multiple sets of k-v pairs.
         * <p>
         * @return {@code this}
         * @param reportScope Property reportScope: Report range, yes and logic between multiple sets of k-v pairs. This parameter is required.
         */
        public Builder reportScope(final com.aliyun.ros.cdk.core.IResolvable reportScope) {
            this.props.reportScope(reportScope);
            return this;
        }
        /**
         * Property reportScope: Report range, yes and logic between multiple sets of k-v pairs.
         * <p>
         * @return {@code this}
         * @param reportScope Property reportScope: Report range, yes and logic between multiple sets of k-v pairs. This parameter is required.
         */
        public Builder reportScope(final java.util.List<? extends java.lang.Object> reportScope) {
            this.props.reportScope(reportScope);
            return this;
        }

        /**
         * Property reportTemplateDescription: Report Template Description.
         * <p>
         * @return {@code this}
         * @param reportTemplateDescription Property reportTemplateDescription: Report Template Description. This parameter is required.
         */
        public Builder reportTemplateDescription(final java.lang.String reportTemplateDescription) {
            this.props.reportTemplateDescription(reportTemplateDescription);
            return this;
        }
        /**
         * Property reportTemplateDescription: Report Template Description.
         * <p>
         * @return {@code this}
         * @param reportTemplateDescription Property reportTemplateDescription: Report Template Description. This parameter is required.
         */
        public Builder reportTemplateDescription(final com.aliyun.ros.cdk.core.IResolvable reportTemplateDescription) {
            this.props.reportTemplateDescription(reportTemplateDescription);
            return this;
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
         * <p>
         * @return {@code this}
         * @param subscriptionFrequency Property subscriptionFrequency: Report subscription frequency. This parameter is required.
         */
        public Builder subscriptionFrequency(final java.lang.String subscriptionFrequency) {
            this.props.subscriptionFrequency(subscriptionFrequency);
            return this;
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
         * <p>
         * @return {@code this}
         * @param subscriptionFrequency Property subscriptionFrequency: Report subscription frequency. This parameter is required.
         */
        public Builder subscriptionFrequency(final com.aliyun.ros.cdk.core.IResolvable subscriptionFrequency) {
            this.props.subscriptionFrequency(subscriptionFrequency);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.config.ReportTemplate}.
         */
        @Override
        public com.aliyun.ros.cdk.config.ReportTemplate build() {
            return new com.aliyun.ros.cdk.config.ReportTemplate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
