package com.aliyun.ros.cdk.dts.datasource;

/**
 * Represents a <code>JobMonitorRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.819Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.datasource.IJobMonitorRule")
@software.amazon.jsii.Jsii.Proxy(IJobMonitorRule.Jsii$Proxy.class)
public interface IJobMonitorRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute DelayRuleTime: The threshold that triggers the alert.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDelayRuleTime();

    /**
     * Attribute DtsJobId: The ID of the data migration, data synchronization, or change tracking task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsJobId();

    /**
     * Attribute Period: The statistical period for incremental validation tasks, in minutes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriod();

    /**
     * Attribute Phone: The mobile phone numbers that receive alert notifications.
     * <p>
     * Multiple mobile numbers are separated by commas (,).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPhone();

    /**
     * Attribute State: Indicates whether the monitoring rule is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrState();

    /**
     * Attribute Times: The number of cycles for the incremental validation task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimes();

    /**
     * Attribute Type: The type of the monitoring rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.datasource.JobMonitorRuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.dts.datasource.IJobMonitorRule.Jsii$Default {
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
         * Attribute DelayRuleTime: The threshold that triggers the alert.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDelayRuleTime() {
            return software.amazon.jsii.Kernel.get(this, "attrDelayRuleTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DtsJobId: The ID of the data migration, data synchronization, or change tracking task.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsJobId() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Period: The statistical period for incremental validation tasks, in minutes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Phone: The mobile phone numbers that receive alert notifications.
         * <p>
         * Multiple mobile numbers are separated by commas (,).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPhone() {
            return software.amazon.jsii.Kernel.get(this, "attrPhone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute State: Indicates whether the monitoring rule is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrState() {
            return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Times: The number of cycles for the incremental validation task.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimes() {
            return software.amazon.jsii.Kernel.get(this, "attrTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of the monitoring rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.datasource.JobMonitorRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dts.datasource.JobMonitorRuleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IJobMonitorRule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IJobMonitorRule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute DelayRuleTime: The threshold that triggers the alert.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDelayRuleTime() {
            return software.amazon.jsii.Kernel.get(this, "attrDelayRuleTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DtsJobId: The ID of the data migration, data synchronization, or change tracking task.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsJobId() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Period: The statistical period for incremental validation tasks, in minutes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Phone: The mobile phone numbers that receive alert notifications.
         * <p>
         * Multiple mobile numbers are separated by commas (,).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPhone() {
            return software.amazon.jsii.Kernel.get(this, "attrPhone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute State: Indicates whether the monitoring rule is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrState() {
            return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Times: The number of cycles for the incremental validation task.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimes() {
            return software.amazon.jsii.Kernel.get(this, "attrTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of the monitoring rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.datasource.JobMonitorRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dts.datasource.JobMonitorRuleProps.class));
        }
    }
}
