package com.aliyun.ros.cdk.nlb.datasource;

/**
 * Represents a <code>LoadBalancer</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.877Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.datasource.ILoadBalancer")
@software.amazon.jsii.Jsii.Proxy(ILoadBalancer.Jsii$Proxy.class)
public interface ILoadBalancer extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AddressIpVersion: The protocol version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion();

    /**
     * Attribute AddressType: The IPv4 network type of the NLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressType();

    /**
     * Attribute BandwidthPackageId: The ID of the EIP bandwidth plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageId();

    /**
     * Attribute Cps: The maximum number of new connections per second supported by the NLB instance in each zone (virtual IP address).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCps();

    /**
     * Attribute CreateTime: The time when the NLB instance was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute CrossZoneEnabled: Indicates whether the NLB instance is accessible across zones.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCrossZoneEnabled();

    /**
     * Attribute DeletionProtectionConfig: The configuration of the deletion protection feature.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtectionConfig();

    /**
     * Attribute DNSName: The domain name of the NLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsName();

    /**
     * Attribute Ipv6AddressType: The IPv6 network type of the NLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6AddressType();

    /**
     * Attribute LoadBalancerBillingConfig: The billing information of the NLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerBillingConfig();

    /**
     * Attribute LoadBalancerBusinessStatus: The status of workloads on the NLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerBusinessStatus();

    /**
     * Attribute LoadBalancerId: ID of the LoadBalancer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId();

    /**
     * Attribute LoadBalancerName: The NLB instance name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerName();

    /**
     * Attribute LoadBalancerStatus: The NLB instance status.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerStatus();

    /**
     * Attribute LoadBalancerType: The type of the Server Load Balancer (SLB) instance.
     * <p>
     * Set the value to network, which specifies NLB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerType();

    /**
     * Attribute ModificationProtectionConfig: The configuration of the configuration read-only mode.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrModificationProtectionConfig();

    /**
     * Attribute OperationLocks: The information about the locked NLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationLocks();

    /**
     * Attribute RegionId: The region ID of the NLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SecurityGroupIds: The ID of the security group associated with the NLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupIds();

    /**
     * Attribute Tags: The tags of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute VpcId: The VPC ID of the NLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute ZoneMappings: The list of zones and vSwitches in the zones.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneMappings();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.datasource.LoadBalancerProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.nlb.datasource.ILoadBalancer.Jsii$Default {
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
         * Attribute AddressType: The IPv4 network type of the NLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressType() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BandwidthPackageId: The ID of the EIP bandwidth plan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageId() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cps: The maximum number of new connections per second supported by the NLB instance in each zone (virtual IP address).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCps() {
            return software.amazon.jsii.Kernel.get(this, "attrCps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the NLB instance was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CrossZoneEnabled: Indicates whether the NLB instance is accessible across zones.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCrossZoneEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrCrossZoneEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeletionProtectionConfig: The configuration of the deletion protection feature.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtectionConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrDeletionProtectionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DNSName: The domain name of the NLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsName() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv6AddressType: The IPv6 network type of the NLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6AddressType() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv6AddressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerBillingConfig: The billing information of the NLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerBillingConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerBillingConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerBusinessStatus: The status of workloads on the NLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerBusinessStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerBusinessStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerId: ID of the LoadBalancer.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerName: The NLB instance name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerName() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerStatus: The NLB instance status.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerType: The type of the Server Load Balancer (SLB) instance.
         * <p>
         * Set the value to network, which specifies NLB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerType() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModificationProtectionConfig: The configuration of the configuration read-only mode.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrModificationProtectionConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrModificationProtectionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperationLocks: The information about the locked NLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationLocks() {
            return software.amazon.jsii.Kernel.get(this, "attrOperationLocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionId: The region ID of the NLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupIds: The ID of the security group associated with the NLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupIds() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The VPC ID of the NLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneMappings: The list of zones and vSwitches in the zones.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneMappings() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.datasource.LoadBalancerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nlb.datasource.LoadBalancerProps.class));
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
         * Attribute AddressType: The IPv4 network type of the NLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressType() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BandwidthPackageId: The ID of the EIP bandwidth plan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageId() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cps: The maximum number of new connections per second supported by the NLB instance in each zone (virtual IP address).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCps() {
            return software.amazon.jsii.Kernel.get(this, "attrCps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the NLB instance was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CrossZoneEnabled: Indicates whether the NLB instance is accessible across zones.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCrossZoneEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrCrossZoneEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeletionProtectionConfig: The configuration of the deletion protection feature.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtectionConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrDeletionProtectionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DNSName: The domain name of the NLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsName() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv6AddressType: The IPv6 network type of the NLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6AddressType() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv6AddressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerBillingConfig: The billing information of the NLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerBillingConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerBillingConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerBusinessStatus: The status of workloads on the NLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerBusinessStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerBusinessStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerId: ID of the LoadBalancer.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerName: The NLB instance name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerName() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerStatus: The NLB instance status.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerType: The type of the Server Load Balancer (SLB) instance.
         * <p>
         * Set the value to network, which specifies NLB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerType() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModificationProtectionConfig: The configuration of the configuration read-only mode.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrModificationProtectionConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrModificationProtectionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperationLocks: The information about the locked NLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationLocks() {
            return software.amazon.jsii.Kernel.get(this, "attrOperationLocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionId: The region ID of the NLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupIds: The ID of the security group associated with the NLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupIds() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The VPC ID of the NLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneMappings: The list of zones and vSwitches in the zones.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneMappings() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.datasource.LoadBalancerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nlb.datasource.LoadBalancerProps.class));
        }
    }
}
