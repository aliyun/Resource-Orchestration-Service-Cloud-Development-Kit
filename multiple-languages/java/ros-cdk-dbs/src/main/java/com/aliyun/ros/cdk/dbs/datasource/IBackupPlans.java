package com.aliyun.ros.cdk.dbs.datasource;

/**
 * Represents a <code>BackupPlans</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.374Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dbs.$Module.class, fqn = "@alicloud/ros-cdk-dbs.datasource.IBackupPlans")
@software.amazon.jsii.Jsii.Proxy(IBackupPlans.Jsii$Proxy.class)
public interface IBackupPlans extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute BackupPlanIds: The list of backup plan IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlanIds();

    /**
     * Attribute BackupPlans: The list of backup plans.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlans();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.datasource.BackupPlansProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.dbs.datasource.IBackupPlans.Jsii$Default {
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
         * Attribute BackupPlanIds: The list of backup plan IDs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlanIds() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupPlanIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupPlans: The list of backup plans.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlans() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupPlans", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.datasource.BackupPlansProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dbs.datasource.BackupPlansProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IBackupPlans}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IBackupPlans, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute BackupPlanIds: The list of backup plan IDs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlanIds() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupPlanIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupPlans: The list of backup plans.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlans() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupPlans", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.datasource.BackupPlansProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dbs.datasource.BackupPlansProps.class));
        }
    }
}
