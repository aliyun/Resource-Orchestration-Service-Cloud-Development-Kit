package com.aliyun.ros.cdk.dts;

/**
 * Represents a <code>MigrationJob2</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.726Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.IMigrationJob2")
@software.amazon.jsii.Jsii.Proxy(IMigrationJob2.Jsii$Proxy.class)
public interface IMigrationJob2 extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute DtsInstanceId: The ID of the DTS instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsInstanceId();

    /**
     * Attribute DtsJobId: The ID of the task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsJobId();

    /**
     * Attribute DtsJobName: The name of the DTS job.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsJobName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.MigrationJob2Props getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.dts.IMigrationJob2.Jsii$Default {
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
         * Attribute DtsInstanceId: The ID of the DTS instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DtsJobId: The ID of the task.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsJobId() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DtsJobName: The name of the DTS job.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsJobName() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsJobName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.MigrationJob2Props getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dts.MigrationJob2Props.class));
        }
    }

    /**
     * Internal default implementation for {@link IMigrationJob2}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IMigrationJob2, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute DtsInstanceId: The ID of the DTS instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DtsJobId: The ID of the task.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsJobId() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DtsJobName: The name of the DTS job.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsJobName() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsJobName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.MigrationJob2Props getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dts.MigrationJob2Props.class));
        }
    }
}
