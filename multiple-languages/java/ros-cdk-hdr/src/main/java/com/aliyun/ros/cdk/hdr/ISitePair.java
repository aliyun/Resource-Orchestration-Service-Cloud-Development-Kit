package com.aliyun.ros.cdk.hdr;

/**
 * Represents a <code>SitePair</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:27.335Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hdr.$Module.class, fqn = "@alicloud/ros-cdk-hdr.ISitePair")
@software.amazon.jsii.Jsii.Proxy(ISitePair.Jsii$Proxy.class)
public interface ISitePair extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute PrimarySiteId: The ID of the primary site.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimarySiteId();

    /**
     * Attribute SecondarySiteId: The ID of the secondary site.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondarySiteId();

    /**
     * Attribute SitePairId: The ID of the site pair.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSitePairId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hdr.SitePairProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.hdr.ISitePair.Jsii$Default {
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
         * Attribute PrimarySiteId: The ID of the primary site.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimarySiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrimarySiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecondarySiteId: The ID of the secondary site.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondarySiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecondarySiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SitePairId: The ID of the site pair.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSitePairId() {
            return software.amazon.jsii.Kernel.get(this, "attrSitePairId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hdr.SitePairProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hdr.SitePairProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ISitePair}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ISitePair, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute PrimarySiteId: The ID of the primary site.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimarySiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrimarySiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecondarySiteId: The ID of the secondary site.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondarySiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecondarySiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SitePairId: The ID of the site pair.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSitePairId() {
            return software.amazon.jsii.Kernel.get(this, "attrSitePairId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hdr.SitePairProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hdr.SitePairProps.class));
        }
    }
}
