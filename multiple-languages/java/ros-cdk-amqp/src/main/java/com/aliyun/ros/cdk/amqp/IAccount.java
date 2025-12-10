package com.aliyun.ros.cdk.amqp;

/**
 * Represents a <code>Account</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.255Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.IAccount")
@software.amazon.jsii.Jsii.Proxy(IAccount.Jsii$Proxy.class)
public interface IAccount extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AccountAccessKey: The AccessKey ID used to create the username and password.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountAccessKey();

    /**
     * Attribute CreateTimestamp: The timestamp when the account was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTimestamp();

    /**
     * Attribute Password: The created static user password.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPassword();

    /**
     * Attribute UserName: The created account user name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.AccountProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.amqp.IAccount.Jsii$Default {
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
         * Attribute AccountAccessKey: The AccessKey ID used to create the username and password.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountAccessKey() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountAccessKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTimestamp: The timestamp when the account was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTimestamp() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTimestamp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Password: The created static user password.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPassword() {
            return software.amazon.jsii.Kernel.get(this, "attrPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserName: The created account user name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserName() {
            return software.amazon.jsii.Kernel.get(this, "attrUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.AccountProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.amqp.AccountProps.class));
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
         * Attribute AccountAccessKey: The AccessKey ID used to create the username and password.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountAccessKey() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountAccessKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTimestamp: The timestamp when the account was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTimestamp() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTimestamp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Password: The created static user password.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPassword() {
            return software.amazon.jsii.Kernel.get(this, "attrPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserName: The created account user name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserName() {
            return software.amazon.jsii.Kernel.get(this, "attrUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.AccountProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.amqp.AccountProps.class));
        }
    }
}
