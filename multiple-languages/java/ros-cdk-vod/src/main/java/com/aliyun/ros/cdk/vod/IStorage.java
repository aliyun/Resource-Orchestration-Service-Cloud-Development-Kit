package com.aliyun.ros.cdk.vod;

/**
 * Represents a <code>Storage</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.111Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vod.$Module.class, fqn = "@alicloud/ros-cdk-vod.IStorage")
@software.amazon.jsii.Jsii.Proxy(IStorage.Jsii$Proxy.class)
public interface IStorage extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The creation time of the storage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DefaultUpload: Whether to upload by default.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultUpload();

    /**
     * Attribute GmtModified: Modification time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModified();

    /**
     * Attribute GroupId: Group id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupId();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute StorageAcl: Storage ACL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageAcl();

    /**
     * Attribute StorageLocation: Storage address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageLocation();

    /**
     * Attribute StorageUsage: Storage usage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageUsage();

    /**
     * Attribute Type: Storage type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vod.StorageProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vod.IStorage.Jsii$Default {
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
         * Attribute CreateTime: The creation time of the storage.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultUpload: Whether to upload by default.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultUpload() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultUpload", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtModified: Modification time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModified() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtModified", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupId: Group id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageAcl: Storage ACL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageAcl() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageAcl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageLocation: Storage address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageLocation() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageUsage: Storage usage.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageUsage() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageUsage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: Storage type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vod.StorageProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vod.StorageProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IStorage}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IStorage, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The creation time of the storage.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultUpload: Whether to upload by default.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultUpload() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultUpload", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtModified: Modification time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModified() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtModified", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupId: Group id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageAcl: Storage ACL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageAcl() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageAcl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageLocation: Storage address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageLocation() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageUsage: Storage usage.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageUsage() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageUsage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: Storage type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vod.StorageProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vod.StorageProps.class));
        }
    }
}
