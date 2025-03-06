package com.aliyun.ros.cdk.cloudfw;

/**
 * Represents a <code>NatFirewallControlPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:02.672Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.INatFirewallControlPolicy")
@software.amazon.jsii.Jsii.Proxy(INatFirewallControlPolicy.Jsii$Proxy.class)
public interface INatFirewallControlPolicy extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AclUuid: The unique ID of the access control policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclUuid();

    /**
     * Attribute Direction: The direction of the traffic to which the access control policy applies.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDirection();

    /**
     * Attribute NatGatewayId: The ID of the NAT gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.NatFirewallControlPolicyProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cloudfw.INatFirewallControlPolicy.Jsii$Default {
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
         * Attribute AclUuid: The unique ID of the access control policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrAclUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Direction: The direction of the traffic to which the access control policy applies.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDirection() {
            return software.amazon.jsii.Kernel.get(this, "attrDirection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NatGatewayId: The ID of the NAT gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrNatGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.NatFirewallControlPolicyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudfw.NatFirewallControlPolicyProps.class));
        }
    }

    /**
     * Internal default implementation for {@link INatFirewallControlPolicy}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends INatFirewallControlPolicy, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AclUuid: The unique ID of the access control policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrAclUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Direction: The direction of the traffic to which the access control policy applies.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDirection() {
            return software.amazon.jsii.Kernel.get(this, "attrDirection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NatGatewayId: The ID of the NAT gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrNatGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.NatFirewallControlPolicyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudfw.NatFirewallControlPolicyProps.class));
        }
    }
}
