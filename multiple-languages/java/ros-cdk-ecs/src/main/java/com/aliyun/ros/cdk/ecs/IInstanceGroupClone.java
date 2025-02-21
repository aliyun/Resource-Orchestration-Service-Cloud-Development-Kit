package com.aliyun.ros.cdk.ecs;

/**
 * Represents a <code>InstanceGroupClone</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:15.170Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.IInstanceGroupClone")
@software.amazon.jsii.Jsii.Proxy(IInstanceGroupClone.Jsii$Proxy.class)
public interface IInstanceGroupClone extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute HostNames: Host names of created instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostNames();

    /**
     * Attribute InnerIps: Inner IP address list of the specified instances.
     * <p>
     * Only for classical instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIps();

    /**
     * Attribute InstanceIds: The instance id list of created ecs instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIds();

    /**
     * Attribute Ipv6Addresses: IPv6 addresses list of created ecs instances.
     * <p>
     * Note: The return type is a two-tier list. If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6Addresses();

    /**
     * Attribute Ipv6AddressIds: IPv6 address IDs list of created ecs instances.
     * <p>
     * Note: The return type is a two-tier list.If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6AddressIds();

    /**
     * Attribute OrderId: The order id list of created instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId();

    /**
     * Attribute PrivateIps: Private IP address list of created ecs instances.
     * <p>
     * Only for VPC instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIps();

    /**
     * Attribute PublicIps: Public IP address list of created ecs instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIps();

    /**
     * Attribute RelatedOrderIds: The related order id list of created ecs instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRelatedOrderIds();

    /**
     * Attribute ZoneIds: Zone id of created instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneIds();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InstanceGroupCloneProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.IInstanceGroupClone.Jsii$Default {
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute HostNames: Host names of created instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostNames() {
            return software.amazon.jsii.Kernel.get(this, "attrHostNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InnerIps: Inner IP address list of the specified instances.
         * <p>
         * Only for classical instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIps() {
            return software.amazon.jsii.Kernel.get(this, "attrInnerIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceIds: The instance id list of created ecs instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv6Addresses: IPv6 addresses list of created ecs instances.
         * <p>
         * Note: The return type is a two-tier list. If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6Addresses() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv6Addresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv6AddressIds: IPv6 address IDs list of created ecs instances.
         * <p>
         * Note: The return type is a two-tier list.If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6AddressIds() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv6AddressIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrderId: The order id list of created instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateIps: Private IP address list of created ecs instances.
         * <p>
         * Only for VPC instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIps() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIps: Public IP address list of created ecs instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIps() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RelatedOrderIds: The related order id list of created ecs instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRelatedOrderIds() {
            return software.amazon.jsii.Kernel.get(this, "attrRelatedOrderIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneIds: Zone id of created instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneIds() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InstanceGroupCloneProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.InstanceGroupCloneProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IInstanceGroupClone}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IInstanceGroupClone, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute HostNames: Host names of created instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostNames() {
            return software.amazon.jsii.Kernel.get(this, "attrHostNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InnerIps: Inner IP address list of the specified instances.
         * <p>
         * Only for classical instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIps() {
            return software.amazon.jsii.Kernel.get(this, "attrInnerIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceIds: The instance id list of created ecs instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv6Addresses: IPv6 addresses list of created ecs instances.
         * <p>
         * Note: The return type is a two-tier list. If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6Addresses() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv6Addresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv6AddressIds: IPv6 address IDs list of created ecs instances.
         * <p>
         * Note: The return type is a two-tier list.If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6AddressIds() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv6AddressIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrderId: The order id list of created instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateIps: Private IP address list of created ecs instances.
         * <p>
         * Only for VPC instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIps() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIps: Public IP address list of created ecs instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIps() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RelatedOrderIds: The related order id list of created ecs instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRelatedOrderIds() {
            return software.amazon.jsii.Kernel.get(this, "attrRelatedOrderIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneIds: Zone id of created instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneIds() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InstanceGroupCloneProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.InstanceGroupCloneProps.class));
        }
    }
}
