package com.aliyun.ros.cdk.oss;

/**
 * Represents a <code>BucketLogging</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:55.858Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.IBucketLogging")
@software.amazon.jsii.Jsii.Proxy(IBucketLogging.Jsii$Proxy.class)
public interface IBucketLogging extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute LoggingRole: Authorization role used for bucket logging.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoggingRole();

    /**
     * Attribute TargetBucket: The bucket that stores access logs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetBucket();

    /**
     * Attribute TargetPrefix: The prefix of the saved log objects.
     * <p>
     * This element can be left empty.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetPrefix();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.BucketLoggingProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.oss.IBucketLogging.Jsii$Default {
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
         * Attribute LoggingRole: Authorization role used for bucket logging.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoggingRole() {
            return software.amazon.jsii.Kernel.get(this, "attrLoggingRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetBucket: The bucket that stores access logs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetBucket() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetBucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetPrefix: The prefix of the saved log objects.
         * <p>
         * This element can be left empty.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetPrefix() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.BucketLoggingProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oss.BucketLoggingProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IBucketLogging}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IBucketLogging, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute LoggingRole: Authorization role used for bucket logging.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoggingRole() {
            return software.amazon.jsii.Kernel.get(this, "attrLoggingRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetBucket: The bucket that stores access logs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetBucket() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetBucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetPrefix: The prefix of the saved log objects.
         * <p>
         * This element can be left empty.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetPrefix() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.BucketLoggingProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oss.BucketLoggingProps.class));
        }
    }
}
