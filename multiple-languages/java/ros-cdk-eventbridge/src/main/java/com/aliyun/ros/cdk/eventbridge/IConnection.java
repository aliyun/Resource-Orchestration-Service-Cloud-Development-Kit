package com.aliyun.ros.cdk.eventbridge;

/**
 * Represents a <code>Connection</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:01:25.396Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.IConnection")
@software.amazon.jsii.Jsii.Proxy(IConnection.Jsii$Proxy.class)
public interface IConnection extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AuthParameters: Authentication Data Structure.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthParameters();

    /**
     * Attribute ConnectionName: The connection configuration name.
     * <p>
     * The maximum length is 127 characters. Minimum length 2 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionName();

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: The connection configuration description.
     * <p>
     * The maximum length is 255 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute NetworkParameters: Network Configuration Data Structure.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkParameters();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eventbridge.ConnectionProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.eventbridge.IConnection.Jsii$Default {
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
         * Attribute AuthParameters: Authentication Data Structure.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionName: The connection configuration name.
         * <p>
         * The maximum length is 127 characters. Minimum length 2 characters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionName() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The connection configuration description.
         * <p>
         * The maximum length is 255 characters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkParameters: Network Configuration Data Structure.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eventbridge.ConnectionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.eventbridge.ConnectionProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IConnection}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IConnection, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AuthParameters: Authentication Data Structure.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionName: The connection configuration name.
         * <p>
         * The maximum length is 127 characters. Minimum length 2 characters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionName() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The connection configuration description.
         * <p>
         * The maximum length is 255 characters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkParameters: Network Configuration Data Structure.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eventbridge.ConnectionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.eventbridge.ConnectionProps.class));
        }
    }
}
