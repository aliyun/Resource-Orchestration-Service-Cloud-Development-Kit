package com.aliyun.ros.cdk.actiontrail;

/**
 * Represents a <code>TrailLogging</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:51.890Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.actiontrail.$Module.class, fqn = "@alicloud/ros-cdk-actiontrail.ITrailLogging")
@software.amazon.jsii.Jsii.Proxy(ITrailLogging.Jsii$Proxy.class)
public interface ITrailLogging extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute IsLogging: Indicates whether the trail is logging API invocations.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsLogging();

    /**
     * Attribute LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestDeliveryError();

    /**
     * Attribute LatestDeliveryTime: The date and time of the last successful delivery of a log file.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestDeliveryTime();

    /**
     * Attribute StartLoggingTime: The most recent date and time when the user enables the trail.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartLoggingTime();

    /**
     * Attribute StopLoggingTime: The most recent date and time when the user disables the trail.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStopLoggingTime();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.actiontrail.TrailLoggingProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.actiontrail.ITrailLogging.Jsii$Default {
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
         * Attribute IsLogging: Indicates whether the trail is logging API invocations.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsLogging() {
            return software.amazon.jsii.Kernel.get(this, "attrIsLogging", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestDeliveryError() {
            return software.amazon.jsii.Kernel.get(this, "attrLatestDeliveryError", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LatestDeliveryTime: The date and time of the last successful delivery of a log file.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestDeliveryTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLatestDeliveryTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StartLoggingTime: The most recent date and time when the user enables the trail.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartLoggingTime() {
            return software.amazon.jsii.Kernel.get(this, "attrStartLoggingTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StopLoggingTime: The most recent date and time when the user disables the trail.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStopLoggingTime() {
            return software.amazon.jsii.Kernel.get(this, "attrStopLoggingTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.actiontrail.TrailLoggingProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.actiontrail.TrailLoggingProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ITrailLogging}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITrailLogging, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute IsLogging: Indicates whether the trail is logging API invocations.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsLogging() {
            return software.amazon.jsii.Kernel.get(this, "attrIsLogging", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestDeliveryError() {
            return software.amazon.jsii.Kernel.get(this, "attrLatestDeliveryError", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LatestDeliveryTime: The date and time of the last successful delivery of a log file.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestDeliveryTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLatestDeliveryTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StartLoggingTime: The most recent date and time when the user enables the trail.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartLoggingTime() {
            return software.amazon.jsii.Kernel.get(this, "attrStartLoggingTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StopLoggingTime: The most recent date and time when the user disables the trail.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStopLoggingTime() {
            return software.amazon.jsii.Kernel.get(this, "attrStopLoggingTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.actiontrail.TrailLoggingProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.actiontrail.TrailLoggingProps.class));
        }
    }
}
