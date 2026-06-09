package com.aliyun.ros.cdk.dts;

/**
 * Represents a <code>JobMonitorRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:29:50.749Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.IJobMonitorRule")
@software.amazon.jsii.Jsii.Proxy(IJobMonitorRule.Jsii$Proxy.class)
public interface IJobMonitorRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute DelayRuleTime: Trigger delay alarm threshold, which is measured in seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDelayRuleTime();

    /**
     * Attribute DtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsJobId();

    /**
     * Attribute Period: The statistical period of the incremental verification task.
     * <p>
     * Unit: minutes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriod();

    /**
     * Attribute Phones: The alarm is triggered after notification of the contact phone number, A plurality of phone numbers between them with a comma (,) to separate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPhones();

    /**
     * Attribute State: Whether to enable monitoring rules, return value:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrState();

    /**
     * Attribute Times: The number of cycles of the incremental verification task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimes();

    /**
     * Attribute Type: Monitoring rules of type, the return value:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.JobMonitorRuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.dts.IJobMonitorRule.Jsii$Default {
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
         * Attribute DelayRuleTime: Trigger delay alarm threshold, which is measured in seconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDelayRuleTime() {
            return software.amazon.jsii.Kernel.get(this, "attrDelayRuleTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsJobId() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Period: The statistical period of the incremental verification task.
         * <p>
         * Unit: minutes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Phones: The alarm is triggered after notification of the contact phone number, A plurality of phone numbers between them with a comma (,) to separate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPhones() {
            return software.amazon.jsii.Kernel.get(this, "attrPhones", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute State: Whether to enable monitoring rules, return value:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrState() {
            return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Times: The number of cycles of the incremental verification task.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimes() {
            return software.amazon.jsii.Kernel.get(this, "attrTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: Monitoring rules of type, the return value:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.JobMonitorRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dts.JobMonitorRuleProps.class));
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
         * Attribute DelayRuleTime: Trigger delay alarm threshold, which is measured in seconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDelayRuleTime() {
            return software.amazon.jsii.Kernel.get(this, "attrDelayRuleTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsJobId() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Period: The statistical period of the incremental verification task.
         * <p>
         * Unit: minutes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Phones: The alarm is triggered after notification of the contact phone number, A plurality of phone numbers between them with a comma (,) to separate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPhones() {
            return software.amazon.jsii.Kernel.get(this, "attrPhones", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute State: Whether to enable monitoring rules, return value:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrState() {
            return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Times: The number of cycles of the incremental verification task.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimes() {
            return software.amazon.jsii.Kernel.get(this, "attrTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: Monitoring rules of type, the return value:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.JobMonitorRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dts.JobMonitorRuleProps.class));
        }
    }
}
