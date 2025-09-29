package com.aliyun.ros.cdk.polardbx.datasource;

/**
 * Represents a <code>Database</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:28.246Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardbx.$Module.class, fqn = "@alicloud/ros-cdk-polardbx.datasource.IDatabase")
@software.amazon.jsii.Jsii.Proxy(IDatabase.Jsii$Proxy.class)
public interface IDatabase extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Accounts: The list of accounts that can be used to access the database.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccounts();

    /**
     * Attribute CharacterSetName: The character set that is supported by the database.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCharacterSetName();

    /**
     * Attribute DatabaseDescription: The description of the database.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatabaseDescription();

    /**
     * Attribute DBInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId();

    /**
     * Attribute PolarDBXDatabaseName: The name of the PolarDB-X instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolarDbxDatabaseName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardbx.datasource.DatabaseProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.polardbx.datasource.IDatabase.Jsii$Default {
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
         * Attribute Accounts: The list of accounts that can be used to access the database.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccounts() {
            return software.amazon.jsii.Kernel.get(this, "attrAccounts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CharacterSetName: The character set that is supported by the database.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCharacterSetName() {
            return software.amazon.jsii.Kernel.get(this, "attrCharacterSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DatabaseDescription: The description of the database.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatabaseDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDatabaseDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceId: The ID of the PolarDB-X 2.0 instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolarDBXDatabaseName: The name of the PolarDB-X instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolarDbxDatabaseName() {
            return software.amazon.jsii.Kernel.get(this, "attrPolarDbxDatabaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardbx.datasource.DatabaseProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardbx.datasource.DatabaseProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDatabase}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDatabase, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Accounts: The list of accounts that can be used to access the database.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccounts() {
            return software.amazon.jsii.Kernel.get(this, "attrAccounts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CharacterSetName: The character set that is supported by the database.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCharacterSetName() {
            return software.amazon.jsii.Kernel.get(this, "attrCharacterSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DatabaseDescription: The description of the database.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatabaseDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDatabaseDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceId: The ID of the PolarDB-X 2.0 instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PolarDBXDatabaseName: The name of the PolarDB-X instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolarDbxDatabaseName() {
            return software.amazon.jsii.Kernel.get(this, "attrPolarDbxDatabaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardbx.datasource.DatabaseProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardbx.datasource.DatabaseProps.class));
        }
    }
}
