package com.aliyun.ros.cdk.resourcemanager;

/**
 * Represents a <code>DeliveryChannel</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:29.466Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.IDeliveryChannel")
@software.amazon.jsii.Jsii.Proxy(IDeliveryChannel.Jsii$Proxy.class)
public interface IDeliveryChannel extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute DeliveryChannelDescription: The description of the delivery channel.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryChannelDescription();

    /**
     * Attribute DeliveryChannelFilter: The effective scope of the delivery channel.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryChannelFilter();

    /**
     * Attribute DeliveryChannelId: The ID of the delivery channel.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryChannelId();

    /**
     * Attribute DeliveryChannelName: The name of the delivery channel.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryChannelName();

    /**
     * Attribute ResourceChangeDelivery: The delivery of resource configuration changes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceChangeDelivery();

    /**
     * Attribute ResourceSnapshotDelivery: The scheduled delivery of resource snapshots.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceSnapshotDelivery();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.DeliveryChannelProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.resourcemanager.IDeliveryChannel.Jsii$Default {
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
         * Attribute DeliveryChannelDescription: The description of the delivery channel.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryChannelDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDeliveryChannelDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeliveryChannelFilter: The effective scope of the delivery channel.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryChannelFilter() {
            return software.amazon.jsii.Kernel.get(this, "attrDeliveryChannelFilter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeliveryChannelId: The ID of the delivery channel.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryChannelId() {
            return software.amazon.jsii.Kernel.get(this, "attrDeliveryChannelId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeliveryChannelName: The name of the delivery channel.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryChannelName() {
            return software.amazon.jsii.Kernel.get(this, "attrDeliveryChannelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceChangeDelivery: The delivery of resource configuration changes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceChangeDelivery() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceChangeDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceSnapshotDelivery: The scheduled delivery of resource snapshots.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceSnapshotDelivery() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceSnapshotDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.DeliveryChannelProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.DeliveryChannelProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDeliveryChannel}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDeliveryChannel, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute DeliveryChannelDescription: The description of the delivery channel.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryChannelDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDeliveryChannelDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeliveryChannelFilter: The effective scope of the delivery channel.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryChannelFilter() {
            return software.amazon.jsii.Kernel.get(this, "attrDeliveryChannelFilter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeliveryChannelId: The ID of the delivery channel.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryChannelId() {
            return software.amazon.jsii.Kernel.get(this, "attrDeliveryChannelId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeliveryChannelName: The name of the delivery channel.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryChannelName() {
            return software.amazon.jsii.Kernel.get(this, "attrDeliveryChannelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceChangeDelivery: The delivery of resource configuration changes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceChangeDelivery() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceChangeDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceSnapshotDelivery: The scheduled delivery of resource snapshots.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceSnapshotDelivery() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceSnapshotDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.DeliveryChannelProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.DeliveryChannelProps.class));
        }
    }
}
