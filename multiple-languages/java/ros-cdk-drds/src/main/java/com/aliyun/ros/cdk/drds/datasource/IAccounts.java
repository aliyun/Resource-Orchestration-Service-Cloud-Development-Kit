package com.aliyun.ros.cdk.drds.datasource;

/**
 * Represents a <code>Accounts</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:04.035Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.datasource.IAccounts")
@software.amazon.jsii.Jsii.Proxy(IAccounts.Jsii$Proxy.class)
public interface IAccounts extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Accounts: Indicates the information about the instance accounts.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccounts();

    /**
     * Attribute DrdsAccountNames: Indicates the username of an instance accounts.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDrdsAccountNames();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.datasource.AccountsProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.drds.datasource.IAccounts.Jsii$Default {
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
         * Attribute Accounts: Indicates the information about the instance accounts.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccounts() {
            return software.amazon.jsii.Kernel.get(this, "attrAccounts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DrdsAccountNames: Indicates the username of an instance accounts.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDrdsAccountNames() {
            return software.amazon.jsii.Kernel.get(this, "attrDrdsAccountNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.datasource.AccountsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.drds.datasource.AccountsProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAccounts}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAccounts, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Accounts: Indicates the information about the instance accounts.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccounts() {
            return software.amazon.jsii.Kernel.get(this, "attrAccounts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DrdsAccountNames: Indicates the username of an instance accounts.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDrdsAccountNames() {
            return software.amazon.jsii.Kernel.get(this, "attrDrdsAccountNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.datasource.AccountsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.drds.datasource.AccountsProps.class));
        }
    }
}
