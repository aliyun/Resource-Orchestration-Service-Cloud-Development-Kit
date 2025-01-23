package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Represents a <code>DeploymentSet</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:38.585Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.IDeploymentSet")
@software.amazon.jsii.Jsii.Proxy(IDeploymentSet.Jsii$Proxy.class)
public interface IDeploymentSet extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The time when the deployment set was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DeploymentSetId: The ID of deployment set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeploymentSetId();

    /**
     * Attribute DeploymentSetName: The name of the deployment set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeploymentSetName();

    /**
     * Attribute Granularity: The deployment granularity.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGranularity();

    /**
     * Attribute GroupCount: The number of deployment set groups in the deployment set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupCount();

    /**
     * Attribute InstanceAmount: The number of instances in the deployment set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceAmount();

    /**
     * Attribute InstanceIds: The IDs of the instances in the deployment set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIds();

    /**
     * Attribute Strategy: The deployment strategy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStrategy();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DeploymentSetProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.datasource.IDeploymentSet.Jsii$Default {
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
         * Attribute CreateTime: The time when the deployment set was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeploymentSetId: The ID of deployment set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeploymentSetId() {
            return software.amazon.jsii.Kernel.get(this, "attrDeploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeploymentSetName: The name of the deployment set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeploymentSetName() {
            return software.amazon.jsii.Kernel.get(this, "attrDeploymentSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Granularity: The deployment granularity.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGranularity() {
            return software.amazon.jsii.Kernel.get(this, "attrGranularity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupCount: The number of deployment set groups in the deployment set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupCount() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceAmount: The number of instances in the deployment set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceAmount() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceIds: The IDs of the instances in the deployment set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Strategy: The deployment strategy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStrategy() {
            return software.amazon.jsii.Kernel.get(this, "attrStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DeploymentSetProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.DeploymentSetProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDeploymentSet}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDeploymentSet, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The time when the deployment set was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeploymentSetId: The ID of deployment set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeploymentSetId() {
            return software.amazon.jsii.Kernel.get(this, "attrDeploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeploymentSetName: The name of the deployment set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeploymentSetName() {
            return software.amazon.jsii.Kernel.get(this, "attrDeploymentSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Granularity: The deployment granularity.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGranularity() {
            return software.amazon.jsii.Kernel.get(this, "attrGranularity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupCount: The number of deployment set groups in the deployment set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupCount() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceAmount: The number of instances in the deployment set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceAmount() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceIds: The IDs of the instances in the deployment set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Strategy: The deployment strategy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStrategy() {
            return software.amazon.jsii.Kernel.get(this, "attrStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DeploymentSetProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.DeploymentSetProps.class));
        }
    }
}
