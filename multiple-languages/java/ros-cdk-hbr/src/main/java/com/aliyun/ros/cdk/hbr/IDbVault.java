package com.aliyun.ros.cdk.hbr;

/**
 * Represents a <code>DbVault</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.429Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.IDbVault")
@software.amazon.jsii.Jsii.Proxy(IDbVault.Jsii$Proxy.class)
public interface IDbVault extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Description: Description of the vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute RetentionDays: Data retention days of the vault.
     * <p>
     * Data will be deleted when it's older than this time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetentionDays();

    /**
     * Attribute VaultId: Vault ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultId();

    /**
     * Attribute VaultName: Display name of the vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultName();

    /**
     * Attribute VaultRegionId: The region ID to create the vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultRegionId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.DbVaultProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.hbr.IDbVault.Jsii$Default {
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
         * Attribute Description: Description of the vault.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RetentionDays: Data retention days of the vault.
         * <p>
         * Data will be deleted when it's older than this time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetentionDays() {
            return software.amazon.jsii.Kernel.get(this, "attrRetentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultId: Vault ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultId() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultName: Display name of the vault.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultName() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultRegionId: The region ID to create the vault.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.DbVaultProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbr.DbVaultProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDbVault}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDbVault, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Description: Description of the vault.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RetentionDays: Data retention days of the vault.
         * <p>
         * Data will be deleted when it's older than this time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetentionDays() {
            return software.amazon.jsii.Kernel.get(this, "attrRetentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultId: Vault ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultId() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultName: Display name of the vault.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultName() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultRegionId: The region ID to create the vault.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.DbVaultProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbr.DbVaultProps.class));
        }
    }
}
