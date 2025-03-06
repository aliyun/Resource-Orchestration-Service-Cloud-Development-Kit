package com.aliyun.ros.cdk.resourcemanager;

/**
 * Represents a <code>Folder</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:09.995Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.IFolder")
@software.amazon.jsii.Jsii.Proxy(IFolder.Jsii$Proxy.class)
public interface IFolder extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute FolderId: The ID of the folder.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFolderId();

    /**
     * Attribute FolderName: The name of the folder.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFolderName();

    /**
     * Attribute ParentFolderId: The ID of the parent folder.
     * <p>
     * If not set, the system default value will be used
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParentFolderId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.FolderProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.resourcemanager.IFolder.Jsii$Default {
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
         * Attribute FolderId: The ID of the folder.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFolderId() {
            return software.amazon.jsii.Kernel.get(this, "attrFolderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FolderName: The name of the folder.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFolderName() {
            return software.amazon.jsii.Kernel.get(this, "attrFolderName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParentFolderId: The ID of the parent folder.
         * <p>
         * If not set, the system default value will be used
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParentFolderId() {
            return software.amazon.jsii.Kernel.get(this, "attrParentFolderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.FolderProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.FolderProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IFolder}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IFolder, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute FolderId: The ID of the folder.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFolderId() {
            return software.amazon.jsii.Kernel.get(this, "attrFolderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FolderName: The name of the folder.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFolderName() {
            return software.amazon.jsii.Kernel.get(this, "attrFolderName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParentFolderId: The ID of the parent folder.
         * <p>
         * If not set, the system default value will be used
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParentFolderId() {
            return software.amazon.jsii.Kernel.get(this, "attrParentFolderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.FolderProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.FolderProps.class));
        }
    }
}
