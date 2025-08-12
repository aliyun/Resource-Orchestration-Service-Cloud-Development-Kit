package com.aliyun.ros.cdk.rocketmq;

/**
 * Represents a <code>Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:50.196Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq.IInstance")
@software.amazon.jsii.Jsii.Proxy(IInstance.Jsii$Proxy.class)
public interface IInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn();

    /**
     * Attribute HttpInternalEndpoint: The internal HTTP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpInternalEndpoint();

    /**
     * Attribute HttpInternetEndpoint: The Internet HTTP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpInternetEndpoint();

    /**
     * Attribute HttpInternetSecureEndpoint: The Internet HTTPS endpoint for the Message Queue for Apache RocketMQ instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpInternetSecureEndpoint();

    /**
     * Attribute InstanceId: Instance ID created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute InstanceName: Instance name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName();

    /**
     * Attribute InstanceType: Instance Type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType();

    /**
     * Attribute TcpEndpoint: The TCP endpoint for the Message Queue for Apache RocketMQ instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTcpEndpoint();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq.InstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.rocketmq.IInstance.Jsii$Default {
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
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpInternalEndpoint: The internal HTTP endpoint for the Message Queue for Apache RocketMQ instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpInternalEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpInternalEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpInternetEndpoint: The Internet HTTP endpoint for the Message Queue for Apache RocketMQ instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpInternetEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpInternetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpInternetSecureEndpoint: The Internet HTTPS endpoint for the Message Queue for Apache RocketMQ instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpInternetSecureEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpInternetSecureEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: Instance ID created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: Instance name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: Instance Type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TcpEndpoint: The TCP endpoint for the Message Queue for Apache RocketMQ instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTcpEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrTcpEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rocketmq.InstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpInternalEndpoint: The internal HTTP endpoint for the Message Queue for Apache RocketMQ instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpInternalEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpInternalEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpInternetEndpoint: The Internet HTTP endpoint for the Message Queue for Apache RocketMQ instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpInternetEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpInternetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpInternetSecureEndpoint: The Internet HTTPS endpoint for the Message Queue for Apache RocketMQ instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpInternetSecureEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpInternetSecureEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: Instance ID created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: Instance name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: Instance Type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TcpEndpoint: The TCP endpoint for the Message Queue for Apache RocketMQ instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTcpEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrTcpEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rocketmq.InstanceProps.class));
        }
    }
}
