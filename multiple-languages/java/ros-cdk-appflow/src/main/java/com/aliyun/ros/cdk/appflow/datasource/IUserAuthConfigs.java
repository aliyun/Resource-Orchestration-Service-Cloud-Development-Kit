package com.aliyun.ros.cdk.appflow.datasource;

/**
 * Represents a <code>UserAuthConfigs</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.911Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.appflow.$Module.class, fqn = "@alicloud/ros-cdk-appflow.datasource.IUserAuthConfigs")
@software.amazon.jsii.Jsii.Proxy(IUserAuthConfigs.Jsii$Proxy.class)
public interface IUserAuthConfigs extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AuthConfigIds: The list of auth config ids.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthConfigIds();

    /**
     * Attribute AuthConfigs: The list of auth configs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthConfigs();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.datasource.UserAuthConfigsProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.appflow.datasource.IUserAuthConfigs.Jsii$Default {
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
         * Attribute AuthConfigIds: The list of auth config ids.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthConfigIds() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthConfigIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AuthConfigs: The list of auth configs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthConfigs() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.datasource.UserAuthConfigsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.appflow.datasource.UserAuthConfigsProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IUserAuthConfigs}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IUserAuthConfigs, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AuthConfigIds: The list of auth config ids.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthConfigIds() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthConfigIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AuthConfigs: The list of auth configs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthConfigs() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.datasource.UserAuthConfigsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.appflow.datasource.UserAuthConfigsProps.class));
        }
    }
}
