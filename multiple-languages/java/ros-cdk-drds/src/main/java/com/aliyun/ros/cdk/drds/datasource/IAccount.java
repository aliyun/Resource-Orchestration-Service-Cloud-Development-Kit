package com.aliyun.ros.cdk.drds.datasource;

/**
 * Represents a <code>Account</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:23.443Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.datasource.IAccount")
@software.amazon.jsii.Jsii.Proxy(IAccount.Jsii$Proxy.class)
public interface IAccount extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AccountType: Indicates the type of an instance account.
     * <p>
     * Valid values:
     * 0: The instance account is a privileged account.
     * 1: The instance account is a standard account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountType();

    /**
     * Attribute DbPrivileges: Indicates the information about the permissions of an account on a database.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbPrivileges();

    /**
     * Attribute Description: Account remarks.
     * <p>
     * The default value of the advanced account is <strong>Created by DRDS</strong>, and the normal account does not have any comments. Remarks can be customized in account management.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute DrdsAccountName: Indicates the username of an instance account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDrdsAccountName();

    /**
     * Attribute Host: Indicates an IP address that is allowed to access the database.
     * <p>
     * The value % indicates that each IP address is allowed to access the database.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHost();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.datasource.AccountProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.drds.datasource.IAccount.Jsii$Default {
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
         * Attribute AccountType: Indicates the type of an instance account.
         * <p>
         * Valid values:
         * 0: The instance account is a privileged account.
         * 1: The instance account is a standard account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountType() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbPrivileges: Indicates the information about the permissions of an account on a database.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbPrivileges() {
            return software.amazon.jsii.Kernel.get(this, "attrDbPrivileges", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Account remarks.
         * <p>
         * The default value of the advanced account is <strong>Created by DRDS</strong>, and the normal account does not have any comments. Remarks can be customized in account management.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DrdsAccountName: Indicates the username of an instance account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDrdsAccountName() {
            return software.amazon.jsii.Kernel.get(this, "attrDrdsAccountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Host: Indicates an IP address that is allowed to access the database.
         * <p>
         * The value % indicates that each IP address is allowed to access the database.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHost() {
            return software.amazon.jsii.Kernel.get(this, "attrHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.datasource.AccountProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.drds.datasource.AccountProps.class));
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
         * Attribute AccountType: Indicates the type of an instance account.
         * <p>
         * Valid values:
         * 0: The instance account is a privileged account.
         * 1: The instance account is a standard account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountType() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbPrivileges: Indicates the information about the permissions of an account on a database.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbPrivileges() {
            return software.amazon.jsii.Kernel.get(this, "attrDbPrivileges", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Account remarks.
         * <p>
         * The default value of the advanced account is <strong>Created by DRDS</strong>, and the normal account does not have any comments. Remarks can be customized in account management.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DrdsAccountName: Indicates the username of an instance account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDrdsAccountName() {
            return software.amazon.jsii.Kernel.get(this, "attrDrdsAccountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Host: Indicates an IP address that is allowed to access the database.
         * <p>
         * The value % indicates that each IP address is allowed to access the database.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHost() {
            return software.amazon.jsii.Kernel.get(this, "attrHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.datasource.AccountProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.drds.datasource.AccountProps.class));
        }
    }
}
