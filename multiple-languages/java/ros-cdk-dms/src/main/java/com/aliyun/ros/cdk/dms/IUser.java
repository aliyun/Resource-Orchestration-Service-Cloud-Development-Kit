package com.aliyun.ros.cdk.dms;

/**
 * Represents a <code>User</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.901Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dms.$Module.class, fqn = "@alicloud/ros-cdk-dms.IUser")
@software.amazon.jsii.Jsii.Proxy(IUser.Jsii$Proxy.class)
public interface IUser extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Mobile: UserMobile.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMobile();

    /**
     * Attribute ParentUid: ParentAliYunUid.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParentUid();

    /**
     * Attribute RoleIds: UserRoleId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleIds();

    /**
     * Attribute RoleNames: UserRole.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleNames();

    /**
     * Attribute Uid: UserAliYunUid.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUid();

    /**
     * Attribute UserId: UserId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId();

    /**
     * Attribute UserName: UserNickName.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.UserProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.dms.IUser.Jsii$Default {
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
         * Attribute Mobile: UserMobile.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMobile() {
            return software.amazon.jsii.Kernel.get(this, "attrMobile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParentUid: ParentAliYunUid.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParentUid() {
            return software.amazon.jsii.Kernel.get(this, "attrParentUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RoleIds: UserRoleId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleIds() {
            return software.amazon.jsii.Kernel.get(this, "attrRoleIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RoleNames: UserRole.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleNames() {
            return software.amazon.jsii.Kernel.get(this, "attrRoleNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Uid: UserAliYunUid.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUid() {
            return software.amazon.jsii.Kernel.get(this, "attrUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: UserId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserName: UserNickName.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserName() {
            return software.amazon.jsii.Kernel.get(this, "attrUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.UserProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dms.UserProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IUser}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IUser, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Mobile: UserMobile.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMobile() {
            return software.amazon.jsii.Kernel.get(this, "attrMobile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParentUid: ParentAliYunUid.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParentUid() {
            return software.amazon.jsii.Kernel.get(this, "attrParentUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RoleIds: UserRoleId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleIds() {
            return software.amazon.jsii.Kernel.get(this, "attrRoleIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RoleNames: UserRole.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleNames() {
            return software.amazon.jsii.Kernel.get(this, "attrRoleNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Uid: UserAliYunUid.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUid() {
            return software.amazon.jsii.Kernel.get(this, "attrUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: UserId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserName: UserNickName.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserName() {
            return software.amazon.jsii.Kernel.get(this, "attrUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.UserProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dms.UserProps.class));
        }
    }
}
