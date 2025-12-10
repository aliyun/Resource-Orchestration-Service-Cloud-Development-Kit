package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>ScheduledPreloadJob</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.562Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IScheduledPreloadJob")
@software.amazon.jsii.Jsii.Proxy(IScheduledPreloadJob.Jsii$Proxy.class)
public interface IScheduledPreloadJob extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The time when the task was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Domains: The domain names to be prefetched.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomains();

    /**
     * Attribute ErrorInfo: The error message.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrErrorInfo();

    /**
     * Attribute FailedFileOss: OSS address of failed file.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFailedFileOss();

    /**
     * Attribute FileId: The ID of the URL list file, which can be used during downloads.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileId();

    /**
     * Attribute InsertWay: The method to submit the URLs to be prefetched.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInsertWay();

    /**
     * Attribute ScheduledPreloadJobId: The ID of the prefetch task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduledPreloadJobId();

    /**
     * Attribute ScheduledPreloadJobName: The task name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduledPreloadJobName();

    /**
     * Attribute SiteId: The site ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId();

    /**
     * Attribute TaskSubmitted: The number of submitted prefetch tasks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskSubmitted();

    /**
     * Attribute TaskType: The task type.
     * <p>
     * Valid values: refresh and preload.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskType();

    /**
     * Attribute UrlCount: The total number of URLs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrlCount();

    /**
     * Attribute UrlSubmitted: The number of submitted URLs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrlSubmitted();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ScheduledPreloadJobProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IScheduledPreloadJob.Jsii$Default {
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
         * Attribute CreateTime: The time when the task was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Domains: The domain names to be prefetched.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomains() {
            return software.amazon.jsii.Kernel.get(this, "attrDomains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ErrorInfo: The error message.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrErrorInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrErrorInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FailedFileOss: OSS address of failed file.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFailedFileOss() {
            return software.amazon.jsii.Kernel.get(this, "attrFailedFileOss", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FileId: The ID of the URL list file, which can be used during downloads.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileId() {
            return software.amazon.jsii.Kernel.get(this, "attrFileId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InsertWay: The method to submit the URLs to be prefetched.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInsertWay() {
            return software.amazon.jsii.Kernel.get(this, "attrInsertWay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScheduledPreloadJobId: The ID of the prefetch task.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduledPreloadJobId() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduledPreloadJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScheduledPreloadJobName: The task name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduledPreloadJobName() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduledPreloadJobName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteId: The site ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskSubmitted: The number of submitted prefetch tasks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskSubmitted() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskSubmitted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskType: The task type.
         * <p>
         * Valid values: refresh and preload.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskType() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UrlCount: The total number of URLs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrlCount() {
            return software.amazon.jsii.Kernel.get(this, "attrUrlCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UrlSubmitted: The number of submitted URLs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrlSubmitted() {
            return software.amazon.jsii.Kernel.get(this, "attrUrlSubmitted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ScheduledPreloadJobProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.ScheduledPreloadJobProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IScheduledPreloadJob}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IScheduledPreloadJob, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The time when the task was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Domains: The domain names to be prefetched.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomains() {
            return software.amazon.jsii.Kernel.get(this, "attrDomains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ErrorInfo: The error message.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrErrorInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrErrorInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FailedFileOss: OSS address of failed file.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFailedFileOss() {
            return software.amazon.jsii.Kernel.get(this, "attrFailedFileOss", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FileId: The ID of the URL list file, which can be used during downloads.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileId() {
            return software.amazon.jsii.Kernel.get(this, "attrFileId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InsertWay: The method to submit the URLs to be prefetched.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInsertWay() {
            return software.amazon.jsii.Kernel.get(this, "attrInsertWay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScheduledPreloadJobId: The ID of the prefetch task.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduledPreloadJobId() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduledPreloadJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScheduledPreloadJobName: The task name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduledPreloadJobName() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduledPreloadJobName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteId: The site ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskSubmitted: The number of submitted prefetch tasks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskSubmitted() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskSubmitted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskType: The task type.
         * <p>
         * Valid values: refresh and preload.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskType() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UrlCount: The total number of URLs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrlCount() {
            return software.amazon.jsii.Kernel.get(this, "attrUrlCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UrlSubmitted: The number of submitted URLs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrlSubmitted() {
            return software.amazon.jsii.Kernel.get(this, "attrUrlSubmitted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ScheduledPreloadJobProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.ScheduledPreloadJobProps.class));
        }
    }
}
