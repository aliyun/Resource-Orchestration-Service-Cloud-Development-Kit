package com.aliyun.ros.cdk.gwlb;

/**
 * Represents a <code>LoadBalancer</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.516Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gwlb.$Module.class, fqn = "@alicloud/ros-cdk-gwlb.ILoadBalancer")
@software.amazon.jsii.Jsii.Proxy(ILoadBalancer.Jsii$Proxy.class)
public interface ILoadBalancer extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AddressIpVersion: The protocol version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion();

    /**
     * Attribute BusinessStatus: The business status of Gateway Load Balancing.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus();

    /**
     * Attribute CreateTime: The resource creation time, in Greenwich Mean Time, in the format of <strong>yyyy-MM-ddTHH:mm:ssZ</strong>.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute LoadBalancerId: The ID of the Gateway Load Balancer instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId();

    /**
     * Attribute LoadBalancerName: The name of the Gateway Load Balancer instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerName();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute Tags: The list of tags.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute VpcId: The ID of the VPC which the Gateway Load Balancer instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute ZoneMappings: The List of zones and vSwitches mapped.
     * <p>
     * You must add at least one zone and a maximum of 20 zones. If the current region supports two or more zones, we recommend that you add two or more zones.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneMappings();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gwlb.LoadBalancerProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.gwlb.ILoadBalancer.Jsii$Default {
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
         * Attribute AddressIpVersion: The protocol version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BusinessStatus: The business status of Gateway Load Balancing.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrBusinessStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The resource creation time, in Greenwich Mean Time, in the format of <strong>yyyy-MM-ddTHH:mm:ssZ</strong>.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerId: The ID of the Gateway Load Balancer instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerName: The name of the Gateway Load Balancer instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerName() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The list of tags.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the VPC which the Gateway Load Balancer instance belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneMappings: The List of zones and vSwitches mapped.
         * <p>
         * You must add at least one zone and a maximum of 20 zones. If the current region supports two or more zones, we recommend that you add two or more zones.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneMappings() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gwlb.LoadBalancerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gwlb.LoadBalancerProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ILoadBalancer}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ILoadBalancer, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AddressIpVersion: The protocol version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BusinessStatus: The business status of Gateway Load Balancing.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrBusinessStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The resource creation time, in Greenwich Mean Time, in the format of <strong>yyyy-MM-ddTHH:mm:ssZ</strong>.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerId: The ID of the Gateway Load Balancer instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerName: The name of the Gateway Load Balancer instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerName() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The list of tags.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the VPC which the Gateway Load Balancer instance belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneMappings: The List of zones and vSwitches mapped.
         * <p>
         * You must add at least one zone and a maximum of 20 zones. If the current region supports two or more zones, we recommend that you add two or more zones.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneMappings() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gwlb.LoadBalancerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gwlb.LoadBalancerProps.class));
        }
    }
}
