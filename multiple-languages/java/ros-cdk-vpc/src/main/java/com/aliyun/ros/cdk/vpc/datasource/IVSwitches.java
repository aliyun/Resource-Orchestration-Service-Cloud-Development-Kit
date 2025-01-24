package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Represents a <code>VSwitches</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:45.430Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.IVSwitches")
@software.amazon.jsii.Jsii.Proxy(IVSwitches.Jsii$Proxy.class)
public interface IVSwitches extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute VSwitches: The detailed information about the vSwitches.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitches();

    /**
     * Attribute VSwitchIds: The list of The vSwitch Ids.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchIds();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.VSwitchesProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.datasource.IVSwitches.Jsii$Default {
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
         * Attribute VSwitches: The detailed information about the vSwitches.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitches() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchIds: The list of The vSwitch Ids.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchIds() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.VSwitchesProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.VSwitchesProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IVSwitches}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IVSwitches, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute VSwitches: The detailed information about the vSwitches.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitches() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchIds: The list of The vSwitch Ids.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchIds() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.VSwitchesProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.VSwitchesProps.class));
        }
    }
}
