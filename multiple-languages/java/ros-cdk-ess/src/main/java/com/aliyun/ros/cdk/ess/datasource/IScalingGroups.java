package com.aliyun.ros.cdk.ess.datasource;

/**
 * Represents a <code>ScalingGroups</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:06.841Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.datasource.IScalingGroups")
@software.amazon.jsii.Jsii.Proxy(IScalingGroups.Jsii$Proxy.class)
public interface IScalingGroups extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ScalingGroupIds: The list of scaling group IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupIds();

    /**
     * Attribute ScalingGroups: The list of scaling groups.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroups();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.datasource.ScalingGroupsProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ess.datasource.IScalingGroups.Jsii$Default {
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
         * Attribute ScalingGroupIds: The list of scaling group IDs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupIds() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingGroups: The list of scaling groups.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroups() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.datasource.ScalingGroupsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.datasource.ScalingGroupsProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IScalingGroups}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IScalingGroups, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ScalingGroupIds: The list of scaling group IDs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupIds() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingGroups: The list of scaling groups.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroups() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.datasource.ScalingGroupsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.datasource.ScalingGroupsProps.class));
        }
    }
}
