package com.aliyun.ros.cdk.dts.datasource;

/**
 * Represents a <code>MigrationJobs</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.823Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.datasource.IMigrationJobs")
@software.amazon.jsii.Jsii.Proxy(IMigrationJobs.Jsii$Proxy.class)
public interface IMigrationJobs extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsInstanceIds();

    /**
     * Attribute MigrationInstances: The list of migration instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMigrationInstances();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.datasource.MigrationJobsProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.dts.datasource.IMigrationJobs.Jsii$Default {
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
         * Attribute DtsInstanceIds: The list of dts instance IDs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsInstanceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MigrationInstances: The list of migration instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMigrationInstances() {
            return software.amazon.jsii.Kernel.get(this, "attrMigrationInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.datasource.MigrationJobsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dts.datasource.MigrationJobsProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IMigrationJobs}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IMigrationJobs, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute DtsInstanceIds: The list of dts instance IDs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsInstanceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MigrationInstances: The list of migration instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMigrationInstances() {
            return software.amazon.jsii.Kernel.get(this, "attrMigrationInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.datasource.MigrationJobsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dts.datasource.MigrationJobsProps.class));
        }
    }
}
