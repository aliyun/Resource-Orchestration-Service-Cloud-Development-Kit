package com.aliyun.ros.cdk.fnf.datasource;

/**
 * Represents a <code>Schedule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.019Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fnf.$Module.class, fqn = "@alicloud/ros-cdk-fnf.datasource.ISchedule")
@software.amazon.jsii.Jsii.Proxy(ISchedule.Jsii$Proxy.class)
public interface ISchedule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The time when the time-based schedule was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute CronExpression: The CRON expression of the time-based schedule to be created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCronExpression();

    /**
     * Attribute Description: The description of the time-based schedule to be created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute LastModifiedTime: The time when the time-based schedule was last updated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifiedTime();

    /**
     * Attribute Payload: The trigger message of the time-based schedule to be created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayload();

    /**
     * Attribute ScheduleId: The ID of the time-based schedule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduleId();

    /**
     * Attribute ScheduleName: The name of the time-based schedule to be created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduleName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.datasource.ScheduleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.fnf.datasource.ISchedule.Jsii$Default {
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
         * Attribute CreateTime: The time when the time-based schedule was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CronExpression: The CRON expression of the time-based schedule to be created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCronExpression() {
            return software.amazon.jsii.Kernel.get(this, "attrCronExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the time-based schedule to be created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastModifiedTime: The time when the time-based schedule was last updated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLastModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Payload: The trigger message of the time-based schedule to be created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayload() {
            return software.amazon.jsii.Kernel.get(this, "attrPayload", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScheduleId: The ID of the time-based schedule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduleId() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScheduleName: The name of the time-based schedule to be created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduleName() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.datasource.ScheduleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fnf.datasource.ScheduleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ISchedule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ISchedule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The time when the time-based schedule was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CronExpression: The CRON expression of the time-based schedule to be created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCronExpression() {
            return software.amazon.jsii.Kernel.get(this, "attrCronExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the time-based schedule to be created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastModifiedTime: The time when the time-based schedule was last updated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLastModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Payload: The trigger message of the time-based schedule to be created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayload() {
            return software.amazon.jsii.Kernel.get(this, "attrPayload", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScheduleId: The ID of the time-based schedule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduleId() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScheduleName: The name of the time-based schedule to be created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduleName() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.datasource.ScheduleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fnf.datasource.ScheduleProps.class));
        }
    }
}
