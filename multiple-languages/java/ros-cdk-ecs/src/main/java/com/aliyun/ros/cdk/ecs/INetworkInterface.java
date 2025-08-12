package com.aliyun.ros.cdk.ecs;

/**
 * Represents a <code>NetworkInterface</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:46.201Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.INetworkInterface")
@software.amazon.jsii.Jsii.Proxy(INetworkInterface.Jsii$Proxy.class)
public interface INetworkInterface extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn();

    /**
     * Attribute MacAddress: The MAC address of your Network Interface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMacAddress();

    /**
     * Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkInterfaceId();

    /**
     * Attribute PrivateIpAddress: The primary private ip address of your Network Interface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIpAddress();

    /**
     * Attribute SecondaryPrivateIpAddresses: The secondary private IP addresses of your Network Interface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryPrivateIpAddresses();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.NetworkInterfaceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.INetworkInterface.Jsii$Default {
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
         * Attribute MacAddress: The MAC address of your Network Interface.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMacAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrMacAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkInterfaceId: ID of your Network Interface.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkInterfaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateIpAddress: The primary private ip address of your Network Interface.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecondaryPrivateIpAddresses: The secondary private IP addresses of your Network Interface.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryPrivateIpAddresses() {
            return software.amazon.jsii.Kernel.get(this, "attrSecondaryPrivateIpAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.NetworkInterfaceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.NetworkInterfaceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link INetworkInterface}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends INetworkInterface, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute MacAddress: The MAC address of your Network Interface.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMacAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrMacAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkInterfaceId: ID of your Network Interface.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkInterfaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateIpAddress: The primary private ip address of your Network Interface.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecondaryPrivateIpAddresses: The secondary private IP addresses of your Network Interface.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryPrivateIpAddresses() {
            return software.amazon.jsii.Kernel.get(this, "attrSecondaryPrivateIpAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.NetworkInterfaceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.NetworkInterfaceProps.class));
        }
    }
}
