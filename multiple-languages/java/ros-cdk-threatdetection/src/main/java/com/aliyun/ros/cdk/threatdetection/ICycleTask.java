package com.aliyun.ros.cdk.threatdetection;

/**
 * Represents a <code>CycleTask</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.646Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.ICycleTask")
@software.amazon.jsii.Jsii.Proxy(ICycleTask.Jsii$Proxy.class)
public interface ICycleTask extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ConfigId: Configuration ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId();

    /**
     * Attribute Enable: Specifies whether to enable the task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnable();

    /**
     * Attribute FirstDateStr: The first time when the task is performed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFirstDateStr();

    /**
     * Attribute IntervalPeriod: The interval at which the task is run.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntervalPeriod();

    /**
     * Attribute Param: The additional information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParam();

    /**
     * Attribute PeriodUnit: The unit of the scan interval.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriodUnit();

    /**
     * Attribute TargetEndTime: The time when the task ends.
     * <p>
     * Unit: hours.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetEndTime();

    /**
     * Attribute TargetStartTime: The time when the task is started.
     * <p>
     * Unit: hours.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetStartTime();

    /**
     * Attribute TaskName: The task name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskName();

    /**
     * Attribute TaskType: The type of the task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.CycleTaskProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.threatdetection.ICycleTask.Jsii$Default {
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
         * Attribute ConfigId: Configuration ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Enable: Specifies whether to enable the task.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FirstDateStr: The first time when the task is performed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFirstDateStr() {
            return software.amazon.jsii.Kernel.get(this, "attrFirstDateStr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntervalPeriod: The interval at which the task is run.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntervalPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrIntervalPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Param: The additional information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParam() {
            return software.amazon.jsii.Kernel.get(this, "attrParam", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PeriodUnit: The unit of the scan interval.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriodUnit() {
            return software.amazon.jsii.Kernel.get(this, "attrPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetEndTime: The time when the task ends.
         * <p>
         * Unit: hours.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetStartTime: The time when the task is started.
         * <p>
         * Unit: hours.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskName: The task name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskName() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskType: The type of the task.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskType() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.CycleTaskProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.CycleTaskProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ICycleTask}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ICycleTask, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ConfigId: Configuration ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Enable: Specifies whether to enable the task.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FirstDateStr: The first time when the task is performed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFirstDateStr() {
            return software.amazon.jsii.Kernel.get(this, "attrFirstDateStr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntervalPeriod: The interval at which the task is run.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntervalPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrIntervalPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Param: The additional information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParam() {
            return software.amazon.jsii.Kernel.get(this, "attrParam", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PeriodUnit: The unit of the scan interval.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriodUnit() {
            return software.amazon.jsii.Kernel.get(this, "attrPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetEndTime: The time when the task ends.
         * <p>
         * Unit: hours.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetStartTime: The time when the task is started.
         * <p>
         * Unit: hours.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskName: The task name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskName() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskType: The type of the task.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskType() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.CycleTaskProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.CycleTaskProps.class));
        }
    }
}
