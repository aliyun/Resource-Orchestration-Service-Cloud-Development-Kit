package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>ScheduledPreloadExecution</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:49:07.704Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IScheduledPreloadExecution")
@software.amazon.jsii.Jsii.Proxy(IScheduledPreloadExecution.Jsii$Proxy.class)
public interface IScheduledPreloadExecution extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute EndTime: The end time of the prefetch plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime();

    /**
     * Attribute Interval: The time interval between each batch execution.
     * <p>
     * Unit: seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterval();

    /**
     * Attribute ScheduledPreloadExecutionId: The ID of the prefetch plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduledPreloadExecutionId();

    /**
     * Attribute ScheduledPreloadJobId: The ID of the prefetch task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduledPreloadJobId();

    /**
     * Attribute SliceLen: The number of URLs prefetched in each batch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSliceLen();

    /**
     * Attribute StartTime: The start time of the prefetch plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ScheduledPreloadExecutionProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IScheduledPreloadExecution.Jsii$Default {
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
         * Attribute EndTime: The end time of the prefetch plan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Interval: The time interval between each batch execution.
         * <p>
         * Unit: seconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScheduledPreloadExecutionId: The ID of the prefetch plan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduledPreloadExecutionId() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduledPreloadExecutionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScheduledPreloadJobId: The ID of the prefetch task.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduledPreloadJobId() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduledPreloadJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SliceLen: The number of URLs prefetched in each batch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSliceLen() {
            return software.amazon.jsii.Kernel.get(this, "attrSliceLen", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StartTime: The start time of the prefetch plan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ScheduledPreloadExecutionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.ScheduledPreloadExecutionProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IScheduledPreloadExecution}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IScheduledPreloadExecution, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute EndTime: The end time of the prefetch plan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Interval: The time interval between each batch execution.
         * <p>
         * Unit: seconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScheduledPreloadExecutionId: The ID of the prefetch plan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduledPreloadExecutionId() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduledPreloadExecutionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScheduledPreloadJobId: The ID of the prefetch task.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduledPreloadJobId() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduledPreloadJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SliceLen: The number of URLs prefetched in each batch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSliceLen() {
            return software.amazon.jsii.Kernel.get(this, "attrSliceLen", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StartTime: The start time of the prefetch plan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ScheduledPreloadExecutionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.ScheduledPreloadExecutionProps.class));
        }
    }
}
