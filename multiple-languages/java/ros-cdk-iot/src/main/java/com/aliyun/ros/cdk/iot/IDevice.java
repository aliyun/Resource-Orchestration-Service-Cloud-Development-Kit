package com.aliyun.ros.cdk.iot;

/**
 * Represents a <code>Device</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.740Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.IDevice")
@software.amazon.jsii.Jsii.Proxy(IDevice.Jsii$Proxy.class)
public interface IDevice extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute DeviceName: Device name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeviceName();

    /**
     * Attribute DeviceSecret: Device key.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeviceSecret();

    /**
     * Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.
     * <p>
     * Description Keep, do not leak.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIotId();

    /**
     * Attribute IotInstanceId: IOT instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIotInstanceId();

    /**
     * Attribute IpAddress: IP address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress();

    /**
     * Attribute NickName: Nick name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNickName();

    /**
     * Attribute NodeType: Node type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeType();

    /**
     * Attribute ProductKey: Product key.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductKey();

    /**
     * Attribute ProductName: Product name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.DeviceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.iot.IDevice.Jsii$Default {
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
         * Attribute DeviceName: Device name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeviceName() {
            return software.amazon.jsii.Kernel.get(this, "attrDeviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeviceSecret: Device key.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeviceSecret() {
            return software.amazon.jsii.Kernel.get(this, "attrDeviceSecret", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.
         * <p>
         * Description Keep, do not leak.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIotId() {
            return software.amazon.jsii.Kernel.get(this, "attrIotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IotInstanceId: IOT instance ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIotInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrIotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpAddress: IP address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NickName: Nick name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNickName() {
            return software.amazon.jsii.Kernel.get(this, "attrNickName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NodeType: Node type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeType() {
            return software.amazon.jsii.Kernel.get(this, "attrNodeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProductKey: Product key.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductKey() {
            return software.amazon.jsii.Kernel.get(this, "attrProductKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProductName: Product name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductName() {
            return software.amazon.jsii.Kernel.get(this, "attrProductName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.DeviceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.iot.DeviceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDevice}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDevice, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute DeviceName: Device name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeviceName() {
            return software.amazon.jsii.Kernel.get(this, "attrDeviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeviceSecret: Device key.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeviceSecret() {
            return software.amazon.jsii.Kernel.get(this, "attrDeviceSecret", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.
         * <p>
         * Description Keep, do not leak.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIotId() {
            return software.amazon.jsii.Kernel.get(this, "attrIotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IotInstanceId: IOT instance ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIotInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrIotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpAddress: IP address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NickName: Nick name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNickName() {
            return software.amazon.jsii.Kernel.get(this, "attrNickName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NodeType: Node type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeType() {
            return software.amazon.jsii.Kernel.get(this, "attrNodeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProductKey: Product key.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductKey() {
            return software.amazon.jsii.Kernel.get(this, "attrProductKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProductName: Product name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductName() {
            return software.amazon.jsii.Kernel.get(this, "attrProductName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.DeviceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.iot.DeviceProps.class));
        }
    }
}
