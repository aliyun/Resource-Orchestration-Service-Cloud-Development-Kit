package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Represents a <code>NatIpCidrs</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.580Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.INatIpCidrs")
@software.amazon.jsii.Jsii.Proxy(INatIpCidrs.Jsii$Proxy.class)
public interface INatIpCidrs extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute NatIpCidrIds: The list of nat ip cidr IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatIpCidrIds();

    /**
     * Attribute NatIpCidrs: The list of nat ip cidrs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatIpCidrs();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.NatIpCidrsProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.datasource.INatIpCidrs.Jsii$Default {
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
         * Attribute NatIpCidrIds: The list of nat ip cidr IDs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatIpCidrIds() {
            return software.amazon.jsii.Kernel.get(this, "attrNatIpCidrIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NatIpCidrs: The list of nat ip cidrs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatIpCidrs() {
            return software.amazon.jsii.Kernel.get(this, "attrNatIpCidrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.NatIpCidrsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.NatIpCidrsProps.class));
        }
    }

    /**
     * Internal default implementation for {@link INatIpCidrs}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends INatIpCidrs, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute NatIpCidrIds: The list of nat ip cidr IDs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatIpCidrIds() {
            return software.amazon.jsii.Kernel.get(this, "attrNatIpCidrIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NatIpCidrs: The list of nat ip cidrs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatIpCidrs() {
            return software.amazon.jsii.Kernel.get(this, "attrNatIpCidrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.NatIpCidrsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.NatIpCidrsProps.class));
        }
    }
}
