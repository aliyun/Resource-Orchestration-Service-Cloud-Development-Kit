package com.aliyun.ros.cdk.threatdetection;

/**
 * Represents a <code>VulWhitelist</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.509Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.IVulWhitelist")
@software.amazon.jsii.Jsii.Proxy(IVulWhitelist.Jsii$Proxy.class)
public interface IVulWhitelist extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Reason: The reason why you add the vulnerability to the whitelist.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReason();

    /**
     * Attribute TargetInfo: The applicable scope of the whitelist.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetInfo();

    /**
     * Attribute VulWhitelistId: The ID of the whitelist.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVulWhitelistId();

    /**
     * Attribute Whitelist: The information about the vulnerability that you want to add to the whitelist.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelist();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.VulWhitelistProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.threatdetection.IVulWhitelist.Jsii$Default {
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
         * Attribute Reason: The reason why you add the vulnerability to the whitelist.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReason() {
            return software.amazon.jsii.Kernel.get(this, "attrReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetInfo: The applicable scope of the whitelist.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VulWhitelistId: The ID of the whitelist.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVulWhitelistId() {
            return software.amazon.jsii.Kernel.get(this, "attrVulWhitelistId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Whitelist: The information about the vulnerability that you want to add to the whitelist.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelist() {
            return software.amazon.jsii.Kernel.get(this, "attrWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.VulWhitelistProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.VulWhitelistProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IVulWhitelist}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IVulWhitelist, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Reason: The reason why you add the vulnerability to the whitelist.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReason() {
            return software.amazon.jsii.Kernel.get(this, "attrReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetInfo: The applicable scope of the whitelist.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VulWhitelistId: The ID of the whitelist.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVulWhitelistId() {
            return software.amazon.jsii.Kernel.get(this, "attrVulWhitelistId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Whitelist: The information about the vulnerability that you want to add to the whitelist.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelist() {
            return software.amazon.jsii.Kernel.get(this, "attrWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.VulWhitelistProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.VulWhitelistProps.class));
        }
    }
}
