package com.aliyun.ros.cdk.pvtz;

/**
 * Represents a <code>UserVpcAuthorization</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:59.216Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.IUserVpcAuthorization")
@software.amazon.jsii.Jsii.Proxy(IUserVpcAuthorization.Jsii$Proxy.class)
public interface IUserVpcAuthorization extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AuthorizedUserId: The account ID of the user who authorizes the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthorizedUserId();

    /**
     * Attribute AuthType: Authorization type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.UserVpcAuthorizationProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.pvtz.IUserVpcAuthorization.Jsii$Default {
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
         * Attribute AuthorizedUserId: The account ID of the user who authorizes the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthorizedUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthorizedUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AuthType: Authorization type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthType() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.UserVpcAuthorizationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pvtz.UserVpcAuthorizationProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IUserVpcAuthorization}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IUserVpcAuthorization, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AuthorizedUserId: The account ID of the user who authorizes the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthorizedUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthorizedUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AuthType: Authorization type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthType() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.UserVpcAuthorizationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pvtz.UserVpcAuthorizationProps.class));
        }
    }
}
