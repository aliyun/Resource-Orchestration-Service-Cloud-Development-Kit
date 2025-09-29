package com.aliyun.ros.cdk.ecd;

/**
 * Represents a <code>UserDesktopGroupAddition</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:23.807Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.IUserDesktopGroupAddition")
@software.amazon.jsii.Jsii.Proxy(IUserDesktopGroupAddition.Jsii$Proxy.class)
public interface IUserDesktopGroupAddition extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute DesktopGroupId: The ID of the desktop group that you want to assign to more regular users.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDesktopGroupId();

    /**
     * Attribute EndUserIds: The regular users to whom you want to assign the desktop group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndUserIds();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.UserDesktopGroupAdditionProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecd.IUserDesktopGroupAddition.Jsii$Default {
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
         * Attribute DesktopGroupId: The ID of the desktop group that you want to assign to more regular users.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDesktopGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrDesktopGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndUserIds: The regular users to whom you want to assign the desktop group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndUserIds() {
            return software.amazon.jsii.Kernel.get(this, "attrEndUserIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.UserDesktopGroupAdditionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecd.UserDesktopGroupAdditionProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IUserDesktopGroupAddition}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IUserDesktopGroupAddition, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute DesktopGroupId: The ID of the desktop group that you want to assign to more regular users.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDesktopGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrDesktopGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndUserIds: The regular users to whom you want to assign the desktop group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndUserIds() {
            return software.amazon.jsii.Kernel.get(this, "attrEndUserIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.UserDesktopGroupAdditionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecd.UserDesktopGroupAdditionProps.class));
        }
    }
}
