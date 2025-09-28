package com.aliyun.ros.cdk.datalakeformation;

/**
 * Represents a <code>Catalog</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:23.036Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.datalakeformation.$Module.class, fqn = "@alicloud/ros-cdk-datalakeformation.ICatalog")
@software.amazon.jsii.Jsii.Proxy(ICatalog.Jsii$Proxy.class)
public interface ICatalog extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CatalogId: Catalog ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCatalogId();

    /**
     * Attribute IsShared: Whether it is a shared data catalog.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsShared();

    /**
     * Attribute Name: Catalog name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrName();

    /**
     * Attribute Options: Configuration parameters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOptions();

    /**
     * Attribute ShareId: Share ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareId();

    /**
     * Attribute Type: Catalog type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.datalakeformation.CatalogProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.datalakeformation.ICatalog.Jsii$Default {
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
         * Attribute CatalogId: Catalog ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCatalogId() {
            return software.amazon.jsii.Kernel.get(this, "attrCatalogId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsShared: Whether it is a shared data catalog.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsShared() {
            return software.amazon.jsii.Kernel.get(this, "attrIsShared", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Name: Catalog name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Options: Configuration parameters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOptions() {
            return software.amazon.jsii.Kernel.get(this, "attrOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ShareId: Share ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareId() {
            return software.amazon.jsii.Kernel.get(this, "attrShareId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: Catalog type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.datalakeformation.CatalogProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.datalakeformation.CatalogProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ICatalog}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ICatalog, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CatalogId: Catalog ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCatalogId() {
            return software.amazon.jsii.Kernel.get(this, "attrCatalogId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsShared: Whether it is a shared data catalog.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsShared() {
            return software.amazon.jsii.Kernel.get(this, "attrIsShared", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Name: Catalog name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Options: Configuration parameters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOptions() {
            return software.amazon.jsii.Kernel.get(this, "attrOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ShareId: Share ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareId() {
            return software.amazon.jsii.Kernel.get(this, "attrShareId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: Catalog type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.datalakeformation.CatalogProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.datalakeformation.CatalogProps.class));
        }
    }
}
