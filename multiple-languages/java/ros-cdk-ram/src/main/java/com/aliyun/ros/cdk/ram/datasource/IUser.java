package com.aliyun.ros.cdk.ram.datasource;

/**
 * Represents a <code>User</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:59.388Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.datasource.IUser")
@software.amazon.jsii.Jsii.Proxy(IUser.Jsii$Proxy.class)
public interface IUser extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Comments: The comments of the RAM user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrComments();

    /**
     * Attribute DisplayName: The display name of the RAM user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName();

    /**
     * Attribute Email: The email address of the RAM user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEmail();

    /**
     * Attribute MobilePhone: The mobile phone number of the RAM user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMobilePhone();

    /**
     * Attribute UserId: The ID of the RAM user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId();

    /**
     * Attribute UserName: The name of the RAM user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.datasource.UserProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ram.datasource.IUser.Jsii$Default {
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
         * Attribute Comments: The comments of the RAM user.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrComments() {
            return software.amazon.jsii.Kernel.get(this, "attrComments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisplayName: The display name of the RAM user.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Email: The email address of the RAM user.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEmail() {
            return software.amazon.jsii.Kernel.get(this, "attrEmail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MobilePhone: The mobile phone number of the RAM user.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMobilePhone() {
            return software.amazon.jsii.Kernel.get(this, "attrMobilePhone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: The ID of the RAM user.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserName: The name of the RAM user.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserName() {
            return software.amazon.jsii.Kernel.get(this, "attrUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.datasource.UserProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.datasource.UserProps.class));
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
         * Attribute Comments: The comments of the RAM user.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrComments() {
            return software.amazon.jsii.Kernel.get(this, "attrComments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisplayName: The display name of the RAM user.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Email: The email address of the RAM user.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEmail() {
            return software.amazon.jsii.Kernel.get(this, "attrEmail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MobilePhone: The mobile phone number of the RAM user.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMobilePhone() {
            return software.amazon.jsii.Kernel.get(this, "attrMobilePhone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: The ID of the RAM user.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserName: The name of the RAM user.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserName() {
            return software.amazon.jsii.Kernel.get(this, "attrUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.datasource.UserProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.datasource.UserProps.class));
        }
    }
}
