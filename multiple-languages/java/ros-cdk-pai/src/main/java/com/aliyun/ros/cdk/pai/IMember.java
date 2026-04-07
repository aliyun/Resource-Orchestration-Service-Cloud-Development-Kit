package com.aliyun.ros.cdk.pai;

/**
 * Represents a <code>Member</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:28.373Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.IMember")
@software.amazon.jsii.Jsii.Proxy(IMember.Jsii$Proxy.class)
public interface IMember extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: Create UTC time in ISO8601 format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DisplayName: Member display name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName();

    /**
     * Attribute MemberId: The member ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemberId();

    /**
     * Attribute MemberName: The name of user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemberName();

    /**
     * Attribute Roles: The list of roles.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoles();

    /**
     * Attribute UserId: The first ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.MemberProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.pai.IMember.Jsii$Default {
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
         * Attribute CreateTime: Create UTC time in ISO8601 format.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisplayName: Member display name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemberId: The member ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemberId() {
            return software.amazon.jsii.Kernel.get(this, "attrMemberId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemberName: The name of user.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemberName() {
            return software.amazon.jsii.Kernel.get(this, "attrMemberName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Roles: The list of roles.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoles() {
            return software.amazon.jsii.Kernel.get(this, "attrRoles", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: The first ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.MemberProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.MemberProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IMember}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IMember, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: Create UTC time in ISO8601 format.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisplayName: Member display name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemberId: The member ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemberId() {
            return software.amazon.jsii.Kernel.get(this, "attrMemberId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemberName: The name of user.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemberName() {
            return software.amazon.jsii.Kernel.get(this, "attrMemberName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Roles: The list of roles.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoles() {
            return software.amazon.jsii.Kernel.get(this, "attrRoles", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: The first ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.MemberProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.MemberProps.class));
        }
    }
}
