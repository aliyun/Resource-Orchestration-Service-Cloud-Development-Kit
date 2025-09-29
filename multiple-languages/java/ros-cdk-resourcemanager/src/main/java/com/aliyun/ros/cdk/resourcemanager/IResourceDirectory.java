package com.aliyun.ros.cdk.resourcemanager;

/**
 * Represents a <code>ResourceDirectory</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:29.002Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.IResourceDirectory")
@software.amazon.jsii.Jsii.Proxy(IResourceDirectory.Jsii$Proxy.class)
public interface IResourceDirectory extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute MasterAccountId: The ID of the master account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterAccountId();

    /**
     * Attribute MasterAccountName: The name of the master account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterAccountName();

    /**
     * Attribute ResourceDirectoryId: The ID of the resource directory.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceDirectoryId();

    /**
     * Attribute RootFolderId: The ID of the root folder.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRootFolderId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.ResourceDirectoryProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.resourcemanager.IResourceDirectory.Jsii$Default {
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
         * Attribute MasterAccountId: The ID of the master account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterAccountId() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterAccountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterAccountName: The name of the master account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterAccountName() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterAccountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceDirectoryId: The ID of the resource directory.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceDirectoryId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceDirectoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RootFolderId: The ID of the root folder.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRootFolderId() {
            return software.amazon.jsii.Kernel.get(this, "attrRootFolderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.ResourceDirectoryProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.ResourceDirectoryProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IResourceDirectory}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IResourceDirectory, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute MasterAccountId: The ID of the master account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterAccountId() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterAccountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterAccountName: The name of the master account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterAccountName() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterAccountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceDirectoryId: The ID of the resource directory.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceDirectoryId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceDirectoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RootFolderId: The ID of the root folder.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRootFolderId() {
            return software.amazon.jsii.Kernel.get(this, "attrRootFolderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.ResourceDirectoryProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.ResourceDirectoryProps.class));
        }
    }
}
