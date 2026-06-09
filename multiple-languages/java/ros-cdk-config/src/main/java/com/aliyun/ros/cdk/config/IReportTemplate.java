package com.aliyun.ros.cdk.config;

/**
 * Represents a <code>ReportTemplate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:01:48.329Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.IReportTemplate")
@software.amazon.jsii.Jsii.Proxy(IReportTemplate.Jsii$Proxy.class)
public interface IReportTemplate extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ReportFileFormats: Report Format.
     * <p>
     * Currently only support <code>excel</code>.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportFileFormats();

    /**
     * Attribute ReportGranularity: Report Aggregation Granularity.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportGranularity();

    /**
     * Attribute ReportLanguage: Report Content Language, Currently only support <code>zh-CN</code> or <code>en-US</code>.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportLanguage();

    /**
     * Attribute ReportScope: Report range, yes and logic between multiple sets of k-v pairs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportScope();

    /**
     * Attribute ReportTemplateDescription: Report Template Description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportTemplateDescription();

    /**
     * Attribute ReportTemplateId: Report template Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportTemplateId();

    /**
     * Attribute ReportTemplateName: Report Template Name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportTemplateName();

    /**
     * Attribute SubscriptionFrequency: Report subscription frequency.
     * <p>
     * If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubscriptionFrequency();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.ReportTemplateProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.config.IReportTemplate.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute ReportFileFormats: Report Format.
         * <p>
         * Currently only support <code>excel</code>.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportFileFormats() {
            return software.amazon.jsii.Kernel.get(this, "attrReportFileFormats", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReportGranularity: Report Aggregation Granularity.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportGranularity() {
            return software.amazon.jsii.Kernel.get(this, "attrReportGranularity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReportLanguage: Report Content Language, Currently only support <code>zh-CN</code> or <code>en-US</code>.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportLanguage() {
            return software.amazon.jsii.Kernel.get(this, "attrReportLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReportScope: Report range, yes and logic between multiple sets of k-v pairs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportScope() {
            return software.amazon.jsii.Kernel.get(this, "attrReportScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReportTemplateDescription: Report Template Description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportTemplateDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrReportTemplateDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReportTemplateId: Report template Id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportTemplateId() {
            return software.amazon.jsii.Kernel.get(this, "attrReportTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReportTemplateName: Report Template Name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportTemplateName() {
            return software.amazon.jsii.Kernel.get(this, "attrReportTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SubscriptionFrequency: Report subscription frequency.
         * <p>
         * If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubscriptionFrequency() {
            return software.amazon.jsii.Kernel.get(this, "attrSubscriptionFrequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.ReportTemplateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.config.ReportTemplateProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IReportTemplate}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IReportTemplate, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute ReportFileFormats: Report Format.
         * <p>
         * Currently only support <code>excel</code>.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportFileFormats() {
            return software.amazon.jsii.Kernel.get(this, "attrReportFileFormats", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReportGranularity: Report Aggregation Granularity.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportGranularity() {
            return software.amazon.jsii.Kernel.get(this, "attrReportGranularity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReportLanguage: Report Content Language, Currently only support <code>zh-CN</code> or <code>en-US</code>.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportLanguage() {
            return software.amazon.jsii.Kernel.get(this, "attrReportLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReportScope: Report range, yes and logic between multiple sets of k-v pairs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportScope() {
            return software.amazon.jsii.Kernel.get(this, "attrReportScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReportTemplateDescription: Report Template Description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportTemplateDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrReportTemplateDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReportTemplateId: Report template Id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportTemplateId() {
            return software.amazon.jsii.Kernel.get(this, "attrReportTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReportTemplateName: Report Template Name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReportTemplateName() {
            return software.amazon.jsii.Kernel.get(this, "attrReportTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SubscriptionFrequency: Report subscription frequency.
         * <p>
         * If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubscriptionFrequency() {
            return software.amazon.jsii.Kernel.get(this, "attrSubscriptionFrequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.ReportTemplateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.config.ReportTemplateProps.class));
        }
    }
}
