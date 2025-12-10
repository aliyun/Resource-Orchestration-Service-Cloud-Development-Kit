package com.aliyun.ros.cdk.nlb;

/**
 * Represents a <code>LoadBalancer</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.400Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.ILoadBalancer")
@software.amazon.jsii.Jsii.Proxy(ILoadBalancer.Jsii$Proxy.class)
public interface ILoadBalancer extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AddressIpVersion: The version of IP address that the NLB instance uses to provide services.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion();

    /**
     * Attribute AddressType: The type of IP address that the NLB instance uses to provide services.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressType();

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn();

    /**
     * Attribute DNSName: The domain name of the NLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsName();

    /**
     * Attribute LoadBalancerId: The ID of the NLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId();

    /**
     * Attribute LoadBalancerType: The type of the NLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerType();

    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneMappings();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.LoadBalancerProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.nlb.ILoadBalancer.Jsii$Default {
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
         * Attribute AddressIpVersion: The version of IP address that the NLB instance uses to provide services.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AddressType: The type of IP address that the NLB instance uses to provide services.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressType() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DNSName: The domain name of the NLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsName() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerId: The ID of the NLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerType: The type of the NLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerType() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneMappings() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.LoadBalancerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nlb.LoadBalancerProps.class));
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
         * Attribute AddressIpVersion: The version of IP address that the NLB instance uses to provide services.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AddressType: The type of IP address that the NLB instance uses to provide services.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressType() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DNSName: The domain name of the NLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsName() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerId: The ID of the NLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerType: The type of the NLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerType() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneMappings() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.LoadBalancerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nlb.LoadBalancerProps.class));
        }
    }
}
