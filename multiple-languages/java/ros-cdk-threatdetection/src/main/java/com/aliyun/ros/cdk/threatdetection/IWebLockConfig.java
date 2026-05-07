package com.aliyun.ros.cdk.threatdetection;

/**
 * Represents a <code>WebLockConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.661Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.IWebLockConfig")
@software.amazon.jsii.Jsii.Proxy(IWebLockConfig.Jsii$Proxy.class)
public interface IWebLockConfig extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ConfigId: The configuration ID of the protected directory.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId();

    /**
     * Attribute DefenceMode: The prevention mode.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefenceMode();

    /**
     * Attribute Dir: The directory for which you want to enable web tamper proofing.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDir();

    /**
     * Attribute ExclusiveDir: The directory for which you want to disable web tamper proofing.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExclusiveDir();

    /**
     * Attribute ExclusiveFile: The file for which you want to disable web tamper proofing.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExclusiveFile();

    /**
     * Attribute ExclusiveFileType: The type of file for which you want to disable web tamper proofing.
     * <p>
     * Separate multiple types with semicolons (;).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExclusiveFileType();

    /**
     * Attribute InclusiveFile: The file that has web tamper proofing enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInclusiveFile();

    /**
     * Attribute InclusiveFileType: The type of file for which you want to enable web tamper proofing.
     * <p>
     * Separate multiple types with semicolons (;).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInclusiveFileType();

    /**
     * Attribute LocalBackupDir: The local path to the backup files of the protected directory.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalBackupDir();

    /**
     * Attribute Mode: The protection mode of web tamper proofing.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMode();

    /**
     * Attribute Uuid: The UUID of the server for which you want to add a directory to protect.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUuid();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.WebLockConfigProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.threatdetection.IWebLockConfig.Jsii$Default {
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
         * Attribute ConfigId: The configuration ID of the protected directory.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefenceMode: The prevention mode.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefenceMode() {
            return software.amazon.jsii.Kernel.get(this, "attrDefenceMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Dir: The directory for which you want to enable web tamper proofing.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDir() {
            return software.amazon.jsii.Kernel.get(this, "attrDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExclusiveDir: The directory for which you want to disable web tamper proofing.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExclusiveDir() {
            return software.amazon.jsii.Kernel.get(this, "attrExclusiveDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExclusiveFile: The file for which you want to disable web tamper proofing.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExclusiveFile() {
            return software.amazon.jsii.Kernel.get(this, "attrExclusiveFile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExclusiveFileType: The type of file for which you want to disable web tamper proofing.
         * <p>
         * Separate multiple types with semicolons (;).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExclusiveFileType() {
            return software.amazon.jsii.Kernel.get(this, "attrExclusiveFileType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InclusiveFile: The file that has web tamper proofing enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInclusiveFile() {
            return software.amazon.jsii.Kernel.get(this, "attrInclusiveFile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InclusiveFileType: The type of file for which you want to enable web tamper proofing.
         * <p>
         * Separate multiple types with semicolons (;).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInclusiveFileType() {
            return software.amazon.jsii.Kernel.get(this, "attrInclusiveFileType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LocalBackupDir: The local path to the backup files of the protected directory.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalBackupDir() {
            return software.amazon.jsii.Kernel.get(this, "attrLocalBackupDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Mode: The protection mode of web tamper proofing.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMode() {
            return software.amazon.jsii.Kernel.get(this, "attrMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Uuid: The UUID of the server for which you want to add a directory to protect.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.WebLockConfigProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.WebLockConfigProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IWebLockConfig}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IWebLockConfig, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ConfigId: The configuration ID of the protected directory.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefenceMode: The prevention mode.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefenceMode() {
            return software.amazon.jsii.Kernel.get(this, "attrDefenceMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Dir: The directory for which you want to enable web tamper proofing.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDir() {
            return software.amazon.jsii.Kernel.get(this, "attrDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExclusiveDir: The directory for which you want to disable web tamper proofing.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExclusiveDir() {
            return software.amazon.jsii.Kernel.get(this, "attrExclusiveDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExclusiveFile: The file for which you want to disable web tamper proofing.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExclusiveFile() {
            return software.amazon.jsii.Kernel.get(this, "attrExclusiveFile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExclusiveFileType: The type of file for which you want to disable web tamper proofing.
         * <p>
         * Separate multiple types with semicolons (;).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExclusiveFileType() {
            return software.amazon.jsii.Kernel.get(this, "attrExclusiveFileType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InclusiveFile: The file that has web tamper proofing enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInclusiveFile() {
            return software.amazon.jsii.Kernel.get(this, "attrInclusiveFile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InclusiveFileType: The type of file for which you want to enable web tamper proofing.
         * <p>
         * Separate multiple types with semicolons (;).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInclusiveFileType() {
            return software.amazon.jsii.Kernel.get(this, "attrInclusiveFileType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LocalBackupDir: The local path to the backup files of the protected directory.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalBackupDir() {
            return software.amazon.jsii.Kernel.get(this, "attrLocalBackupDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Mode: The protection mode of web tamper proofing.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMode() {
            return software.amazon.jsii.Kernel.get(this, "attrMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Uuid: The UUID of the server for which you want to add a directory to protect.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.WebLockConfigProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.WebLockConfigProps.class));
        }
    }
}
