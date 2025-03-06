package com.aliyun.ros.cdk.resourcemanager;

/**
 * Represents a <code>Account</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:09.973Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.IAccount")
@software.amazon.jsii.Jsii.Proxy(IAccount.Jsii$Proxy.class)
public interface IAccount extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AccountId: This ID of Resource Manager Account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountId();

    /**
     * Attribute DisplayName: Member name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName();

    /**
     * Attribute FolderId: The ID of the parent folder.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFolderId();

    /**
     * Attribute JoinMethod: Ways for members to join the resource directory.
     * <p>
     * Valid values: invited, created
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrJoinMethod();

    /**
     * Attribute ResourceDirectoryId: Resource directory ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceDirectoryId();

    /**
     * Attribute Type: Member type.
     * <p>
     * The value of ResourceAccount indicates the resource account
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.AccountProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.resourcemanager.IAccount.Jsii$Default {
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
         * Attribute AccountId: This ID of Resource Manager Account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountId() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisplayName: Member name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FolderId: The ID of the parent folder.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFolderId() {
            return software.amazon.jsii.Kernel.get(this, "attrFolderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JoinMethod: Ways for members to join the resource directory.
         * <p>
         * Valid values: invited, created
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrJoinMethod() {
            return software.amazon.jsii.Kernel.get(this, "attrJoinMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceDirectoryId: Resource directory ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceDirectoryId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceDirectoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: Member type.
         * <p>
         * The value of ResourceAccount indicates the resource account
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.AccountProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.AccountProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAccount}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAccount, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AccountId: This ID of Resource Manager Account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountId() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisplayName: Member name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FolderId: The ID of the parent folder.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFolderId() {
            return software.amazon.jsii.Kernel.get(this, "attrFolderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JoinMethod: Ways for members to join the resource directory.
         * <p>
         * Valid values: invited, created
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrJoinMethod() {
            return software.amazon.jsii.Kernel.get(this, "attrJoinMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceDirectoryId: Resource directory ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceDirectoryId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceDirectoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: Member type.
         * <p>
         * The value of ResourceAccount indicates the resource account
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.AccountProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.AccountProps.class));
        }
    }
}
