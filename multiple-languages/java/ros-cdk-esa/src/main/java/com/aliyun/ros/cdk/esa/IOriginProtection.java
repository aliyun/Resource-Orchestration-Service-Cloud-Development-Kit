package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>OriginProtection</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.001Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IOriginProtection")
@software.amazon.jsii.Jsii.Proxy(IOriginProtection.Jsii$Proxy.class)
public interface IOriginProtection extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CurrentIpWhitelist: The IP whitelist for origin protection used by the website.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentIpWhitelist();

    /**
     * Attribute DiffIpWhitelist: The IP whitelist for origin protection that has been updated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiffIpWhitelist();

    /**
     * Attribute LatestIpWhitelist: The latest IP whitelist for origin protection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestIpWhitelist();

    /**
     * Attribute OriginConverge: The IP convergence status.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginConverge();

    /**
     * Attribute OriginProtection: Indicates whether origin protection is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginProtection();

    /**
     * Attribute SiteId: The website ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginProtectionProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IOriginProtection.Jsii$Default {
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
         * Attribute CurrentIpWhitelist: The IP whitelist for origin protection used by the website.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentIpWhitelist() {
            return software.amazon.jsii.Kernel.get(this, "attrCurrentIpWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiffIpWhitelist: The IP whitelist for origin protection that has been updated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiffIpWhitelist() {
            return software.amazon.jsii.Kernel.get(this, "attrDiffIpWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LatestIpWhitelist: The latest IP whitelist for origin protection.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestIpWhitelist() {
            return software.amazon.jsii.Kernel.get(this, "attrLatestIpWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginConverge: The IP convergence status.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginConverge() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginConverge", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginProtection: Indicates whether origin protection is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteId: The website ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginProtectionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.OriginProtectionProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IOriginProtection}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IOriginProtection, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CurrentIpWhitelist: The IP whitelist for origin protection used by the website.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentIpWhitelist() {
            return software.amazon.jsii.Kernel.get(this, "attrCurrentIpWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiffIpWhitelist: The IP whitelist for origin protection that has been updated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiffIpWhitelist() {
            return software.amazon.jsii.Kernel.get(this, "attrDiffIpWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LatestIpWhitelist: The latest IP whitelist for origin protection.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestIpWhitelist() {
            return software.amazon.jsii.Kernel.get(this, "attrLatestIpWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginConverge: The IP convergence status.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginConverge() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginConverge", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginProtection: Indicates whether origin protection is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteId: The website ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginProtectionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.OriginProtectionProps.class));
        }
    }
}
