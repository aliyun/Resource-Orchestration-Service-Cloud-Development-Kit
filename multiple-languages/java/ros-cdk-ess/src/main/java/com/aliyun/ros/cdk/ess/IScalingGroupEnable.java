package com.aliyun.ros.cdk.ess;

/**
 * Represents a <code>ScalingGroupEnable</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.762Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.IScalingGroupEnable")
@software.amazon.jsii.Jsii.Proxy(IScalingGroupEnable.Jsii$Proxy.class)
public interface IScalingGroupEnable extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute LifecycleState: The scaling group status.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLifecycleState();

    /**
     * Attribute ScalingGroupId: The scaling group id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupId();

    /**
     * Attribute ScalingInstanceDetails: Detail information of auto created scaling instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingInstanceDetails();

    /**
     * Attribute ScalingInstances: The auto created scaling instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingInstances();

    /**
     * Attribute ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleArisExecuteErrorInfo();

    /**
     * Attribute ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleArisExecuteResultInstancesAdded();

    /**
     * Attribute ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleArisExecuteResultInstancesRemoved();

    /**
     * Attribute ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleArisExecuteResultNumberOfAddedInstances();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingGroupEnableProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ess.IScalingGroupEnable.Jsii$Default {
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
         * Attribute LifecycleState: The scaling group status.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLifecycleState() {
            return software.amazon.jsii.Kernel.get(this, "attrLifecycleState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingGroupId: The scaling group id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingInstanceDetails: Detail information of auto created scaling instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingInstanceDetails() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingInstanceDetails", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingInstances: The auto created scaling instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingInstances() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleArisExecuteErrorInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteErrorInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleArisExecuteResultInstancesAdded() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteResultInstancesAdded", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleArisExecuteResultInstancesRemoved() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteResultInstancesRemoved", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleArisExecuteResultNumberOfAddedInstances() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteResultNumberOfAddedInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingGroupEnableProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.ScalingGroupEnableProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IScalingGroupEnable}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IScalingGroupEnable, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute LifecycleState: The scaling group status.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLifecycleState() {
            return software.amazon.jsii.Kernel.get(this, "attrLifecycleState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingGroupId: The scaling group id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingInstanceDetails: Detail information of auto created scaling instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingInstanceDetails() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingInstanceDetails", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingInstances: The auto created scaling instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingInstances() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleArisExecuteErrorInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteErrorInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleArisExecuteResultInstancesAdded() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteResultInstancesAdded", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleArisExecuteResultInstancesRemoved() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteResultInstancesRemoved", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleArisExecuteResultNumberOfAddedInstances() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteResultNumberOfAddedInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingGroupEnableProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.ScalingGroupEnableProps.class));
        }
    }
}
