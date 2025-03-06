package com.aliyun.ros.cdk.ga;

/**
 * Represents a <code>IpSets</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.135Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.IIpSets")
@software.amazon.jsii.Jsii.Proxy(IIpSets.Jsii$Proxy.class)
public interface IIpSets extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AccelerateRegionIds: The ID list of the accelerate region.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccelerateRegionIds();

    /**
     * Attribute IpSetIds: The ID list of the ip set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpSetIds();

    /**
     * Attribute IpVersions: The IP version list of the accelerate region.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpVersions();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.IpSetsProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ga.IIpSets.Jsii$Default {
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
         * Attribute AccelerateRegionIds: The ID list of the accelerate region.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccelerateRegionIds() {
            return software.amazon.jsii.Kernel.get(this, "attrAccelerateRegionIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpSetIds: The ID list of the ip set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpSetIds() {
            return software.amazon.jsii.Kernel.get(this, "attrIpSetIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpVersions: The IP version list of the accelerate region.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpVersions() {
            return software.amazon.jsii.Kernel.get(this, "attrIpVersions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.IpSetsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.IpSetsProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IIpSets}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IIpSets, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AccelerateRegionIds: The ID list of the accelerate region.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccelerateRegionIds() {
            return software.amazon.jsii.Kernel.get(this, "attrAccelerateRegionIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpSetIds: The ID list of the ip set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpSetIds() {
            return software.amazon.jsii.Kernel.get(this, "attrIpSetIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpVersions: The IP version list of the accelerate region.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpVersions() {
            return software.amazon.jsii.Kernel.get(this, "attrIpVersions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.IpSetsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.IpSetsProps.class));
        }
    }
}
