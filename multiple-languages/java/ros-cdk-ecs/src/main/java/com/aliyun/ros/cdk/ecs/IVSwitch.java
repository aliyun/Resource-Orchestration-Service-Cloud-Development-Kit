package com.aliyun.ros.cdk.ecs;

/**
 * Represents a <code>VSwitch</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:15.194Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.IVSwitch")
@software.amazon.jsii.Jsii.Proxy(IVSwitch.Jsii$Proxy.class)
public interface IVSwitch extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CidrBlock: CIDR Block of created VSwitch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCidrBlock();

    /**
     * Attribute Ipv6CidrBlock: The IPv6 network segment of the VSwitch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6CidrBlock();

    /**
     * Attribute VSwitchId: Id of created VSwitch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    /**
     * Attribute VSwitchName: The name of the VSwitch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.VSwitchProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.IVSwitch.Jsii$Default {
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
         * Attribute CidrBlock: CIDR Block of created VSwitch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCidrBlock() {
            return software.amazon.jsii.Kernel.get(this, "attrCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv6CidrBlock: The IPv6 network segment of the VSwitch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6CidrBlock() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv6CidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: Id of created VSwitch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchName: The name of the VSwitch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchName() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.VSwitchProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.VSwitchProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IVSwitch}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IVSwitch, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CidrBlock: CIDR Block of created VSwitch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCidrBlock() {
            return software.amazon.jsii.Kernel.get(this, "attrCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv6CidrBlock: The IPv6 network segment of the VSwitch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6CidrBlock() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv6CidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: Id of created VSwitch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchName: The name of the VSwitch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchName() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.VSwitchProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.VSwitchProps.class));
        }
    }
}
