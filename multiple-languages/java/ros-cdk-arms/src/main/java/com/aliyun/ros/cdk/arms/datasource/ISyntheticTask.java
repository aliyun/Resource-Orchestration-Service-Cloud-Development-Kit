package com.aliyun.ros.cdk.arms.datasource;

/**
 * Represents a <code>SyntheticTask</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:35.048Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.datasource.ISyntheticTask")
@software.amazon.jsii.Jsii.Proxy(ISyntheticTask.Jsii$Proxy.class)
public interface ISyntheticTask extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AvailableAssertions: The list of assertions.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAvailableAssertions();

    /**
     * Attribute CommonSetting: The general settings.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonSetting();

    /**
     * Attribute CustomPeriod: The custom cycle.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomPeriod();

    /**
     * Attribute Frequency: The detection frequency.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFrequency();

    /**
     * Attribute MonitorCategory: The detection point type.
     * <p>
     * 1: PC. 2: mobile device.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMonitorCategory();

    /**
     * Attribute MonitorConf: The monitoring configurations.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMonitorConf();

    /**
     * Attribute Monitors: The list of monitoring points.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMonitors();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SyntheticTaskName: The name of synthetic task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSyntheticTaskName();

    /**
     * Attribute Tags: The tags of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute TaskId: The ID of the synthetic monitoring task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskId();

    /**
     * Attribute TaskType: The type of the task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.SyntheticTaskProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.arms.datasource.ISyntheticTask.Jsii$Default {
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AvailableAssertions: The list of assertions.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAvailableAssertions() {
            return software.amazon.jsii.Kernel.get(this, "attrAvailableAssertions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonSetting: The general settings.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonSetting() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonSetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CustomPeriod: The custom cycle.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrCustomPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Frequency: The detection frequency.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFrequency() {
            return software.amazon.jsii.Kernel.get(this, "attrFrequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MonitorCategory: The detection point type.
         * <p>
         * 1: PC. 2: mobile device.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMonitorCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrMonitorCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MonitorConf: The monitoring configurations.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMonitorConf() {
            return software.amazon.jsii.Kernel.get(this, "attrMonitorConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Monitors: The list of monitoring points.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMonitors() {
            return software.amazon.jsii.Kernel.get(this, "attrMonitors", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SyntheticTaskName: The name of synthetic task.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSyntheticTaskName() {
            return software.amazon.jsii.Kernel.get(this, "attrSyntheticTaskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskId: The ID of the synthetic monitoring task.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskId() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskType: The type of the task.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskType() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.SyntheticTaskProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.datasource.SyntheticTaskProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ISyntheticTask}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ISyntheticTask, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AvailableAssertions: The list of assertions.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAvailableAssertions() {
            return software.amazon.jsii.Kernel.get(this, "attrAvailableAssertions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonSetting: The general settings.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonSetting() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonSetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CustomPeriod: The custom cycle.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrCustomPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Frequency: The detection frequency.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFrequency() {
            return software.amazon.jsii.Kernel.get(this, "attrFrequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MonitorCategory: The detection point type.
         * <p>
         * 1: PC. 2: mobile device.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMonitorCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrMonitorCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MonitorConf: The monitoring configurations.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMonitorConf() {
            return software.amazon.jsii.Kernel.get(this, "attrMonitorConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Monitors: The list of monitoring points.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMonitors() {
            return software.amazon.jsii.Kernel.get(this, "attrMonitors", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SyntheticTaskName: The name of synthetic task.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSyntheticTaskName() {
            return software.amazon.jsii.Kernel.get(this, "attrSyntheticTaskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskId: The ID of the synthetic monitoring task.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskId() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskType: The type of the task.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskType() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.SyntheticTaskProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.datasource.SyntheticTaskProps.class));
        }
    }
}
