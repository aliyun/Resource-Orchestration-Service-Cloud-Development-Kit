package com.aliyun.ros.cdk.vpc;

/**
 * Represents a <code>NatGateway</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:21.862Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.INatGateway")
@software.amazon.jsii.Jsii.Proxy(INatGateway.Jsii$Proxy.class)
public interface INatGateway extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ForwardTableId: The forward table id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrForwardTableId();

    /**
     * Attribute NatGatewayId: The Id of created NAT gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayId();

    /**
     * Attribute SNatTableId: The SNAT table id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSNatTableId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.NatGatewayProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.INatGateway.Jsii$Default {
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
         * Attribute ForwardTableId: The forward table id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrForwardTableId() {
            return software.amazon.jsii.Kernel.get(this, "attrForwardTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NatGatewayId: The Id of created NAT gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrNatGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SNatTableId: The SNAT table id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSNatTableId() {
            return software.amazon.jsii.Kernel.get(this, "attrSNatTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.NatGatewayProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.NatGatewayProps.class));
        }
    }

    /**
     * Internal default implementation for {@link INatGateway}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends INatGateway, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ForwardTableId: The forward table id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrForwardTableId() {
            return software.amazon.jsii.Kernel.get(this, "attrForwardTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NatGatewayId: The Id of created NAT gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrNatGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SNatTableId: The SNAT table id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSNatTableId() {
            return software.amazon.jsii.Kernel.get(this, "attrSNatTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.NatGatewayProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.NatGatewayProps.class));
        }
    }
}
