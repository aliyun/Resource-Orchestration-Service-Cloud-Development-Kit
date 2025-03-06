package com.aliyun.ros.cdk.polardbx.datasource;

/**
 * Represents a <code>Account</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:09.141Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardbx.$Module.class, fqn = "@alicloud/ros-cdk-polardbx.datasource.IAccount")
@software.amazon.jsii.Jsii.Proxy(IAccount.Jsii$Proxy.class)
public interface IAccount extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AccountDescription: The description of the account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountDescription();

    /**
     * Attribute AccountType: The type of the account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountType();

    /**
     * Attribute CreateTime: The point in time when the account was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DBInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId();

    /**
     * Attribute PolarDBXAccountName: The username of the account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolarDbxAccountName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardbx.datasource.AccountProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.polardbx.datasource.IAccount.Jsii$Default {
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
         * Attribute AccountDescription: The description of the account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AccountType: The type of the account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountType() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The point in time when the account was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceId: The ID of the PolarDB-X 2.0 instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolarDBXAccountName: The username of the account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolarDbxAccountName() {
            return software.amazon.jsii.Kernel.get(this, "attrPolarDbxAccountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardbx.datasource.AccountProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardbx.datasource.AccountProps.class));
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
         * Attribute AccountDescription: The description of the account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AccountType: The type of the account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountType() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The point in time when the account was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceId: The ID of the PolarDB-X 2.0 instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolarDBXAccountName: The username of the account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolarDbxAccountName() {
            return software.amazon.jsii.Kernel.get(this, "attrPolarDbxAccountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardbx.datasource.AccountProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardbx.datasource.AccountProps.class));
        }
    }
}
