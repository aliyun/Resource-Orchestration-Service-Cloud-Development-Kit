package com.aliyun.ros.cdk.slb.datasource;

/**
 * Represents a <code>LoadBalancer</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:10.688Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.datasource.ILoadBalancer")
@software.amazon.jsii.Jsii.Proxy(ILoadBalancer.Jsii$Proxy.class)
public interface ILoadBalancer extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Address: The service IP address of the CLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddress();

    /**
     * Attribute AddressIpVersion: The version of the IP address.
     * <p>
     * Valid values: ipv4 and ipv6.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion();

    /**
     * Attribute AddressType: The address type of the CLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressType();

    /**
     * Attribute AutoReleaseTime: The timestamp generated when the CLB instance is released.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoReleaseTime();

    /**
     * Attribute BackendServers: The backend servers of the CLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackendServers();

    /**
     * Attribute Bandwidth: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth();

    /**
     * Attribute CreateTime: The time when the CLB instance was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute CreateTimeStamp: The timestamp generated when the CA certificate is uploaded.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTimeStamp();

    /**
     * Attribute DeleteProtection: Indicates whether deletion protection is enabled for the CLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeleteProtection();

    /**
     * Attribute EndTime: The time when the CLB instance expires.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime();

    /**
     * Attribute EndTimeStamp: The timestamp that indicates the expiration time of the CLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTimeStamp();

    /**
     * Attribute InstanceChargeType: Instance billing method.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceChargeType();

    /**
     * Attribute InternetChargeType: The metering method of the Internet-facing CLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType();

    /**
     * Attribute ListenerPortsAndProtocal: The ports or protocols of the listeners.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerPortsAndProtocal();

    /**
     * Attribute ListenerPortsAndProtocol: The ports or protocols of the listeners.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerPortsAndProtocol();

    /**
     * Attribute LoadBalancerId: The CLB instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId();

    /**
     * Attribute LoadBalancerName: The name of the CLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerName();

    /**
     * Attribute LoadBalancerSpec: The specification of the CLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerSpec();

    /**
     * Attribute MasterZoneId: The ID of the primary zone to which the CLB instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterZoneId();

    /**
     * Attribute ModificationProtectionReason: The reason why the configuration read-only mode is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrModificationProtectionReason();

    /**
     * Attribute ModificationProtectionStatus: Load balancing modifies the protection state.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrModificationProtectionStatus();

    /**
     * Attribute NetworkType: The network type of the CLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType();

    /**
     * Attribute PaymentType: Load balancing instance payment type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute RegionIdAlias: The alias of the region to which the CLB instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionIdAlias();

    /**
     * Attribute RenewalCycUnit: The auto-renewal cycle.
     * <p>
     * Valid values: Year and Month. Default value: Month.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalCycUnit();

    /**
     * Attribute RenewalDuration: The auto-renewal duration.
     * <p>
     * This parameter is valid only if RenewalStatus is set to AutoRenewal.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalDuration();

    /**
     * Attribute RenewalStatus: Indicates whether auto-renewal is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalStatus();

    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SlaveZoneId: The ID of the secondary zone to which the CLB instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlaveZoneId();

    /**
     * Attribute Tags: The tags of the CLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VSwitchId: The ID of the vSwitch to which the internal-facing CLB instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.LoadBalancerProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.slb.datasource.ILoadBalancer.Jsii$Default {
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
         * Attribute Address: The service IP address of the CLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AddressIpVersion: The version of the IP address.
         * <p>
         * Valid values: ipv4 and ipv6.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AddressType: The address type of the CLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressType() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoReleaseTime: The timestamp generated when the CLB instance is released.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoReleaseTime() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackendServers: The backend servers of the CLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackendServers() {
            return software.amazon.jsii.Kernel.get(this, "attrBackendServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bandwidth: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the CLB instance was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTimeStamp: The timestamp generated when the CA certificate is uploaded.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTimeStamp() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTimeStamp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeleteProtection: Indicates whether deletion protection is enabled for the CLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeleteProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDeleteProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndTime: The time when the CLB instance expires.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndTimeStamp: The timestamp that indicates the expiration time of the CLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTimeStamp() {
            return software.amazon.jsii.Kernel.get(this, "attrEndTimeStamp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceChargeType: Instance billing method.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetChargeType: The metering method of the Internet-facing CLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ListenerPortsAndProtocal: The ports or protocols of the listeners.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerPortsAndProtocal() {
            return software.amazon.jsii.Kernel.get(this, "attrListenerPortsAndProtocal", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ListenerPortsAndProtocol: The ports or protocols of the listeners.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerPortsAndProtocol() {
            return software.amazon.jsii.Kernel.get(this, "attrListenerPortsAndProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerId: The CLB instance ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerName: The name of the CLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerName() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerSpec: The specification of the CLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterZoneId: The ID of the primary zone to which the CLB instance belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModificationProtectionReason: The reason why the configuration read-only mode is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrModificationProtectionReason() {
            return software.amazon.jsii.Kernel.get(this, "attrModificationProtectionReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModificationProtectionStatus: Load balancing modifies the protection state.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrModificationProtectionStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrModificationProtectionStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkType: The network type of the CLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: Load balancing instance payment type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionIdAlias: The alias of the region to which the CLB instance belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionIdAlias() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionIdAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RenewalCycUnit: The auto-renewal cycle.
         * <p>
         * Valid values: Year and Month. Default value: Month.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalCycUnit() {
            return software.amazon.jsii.Kernel.get(this, "attrRenewalCycUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RenewalDuration: The auto-renewal duration.
         * <p>
         * This parameter is valid only if RenewalStatus is set to AutoRenewal.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalDuration() {
            return software.amazon.jsii.Kernel.get(this, "attrRenewalDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RenewalStatus: Indicates whether auto-renewal is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrRenewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The resource group ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SlaveZoneId: The ID of the secondary zone to which the CLB instance belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlaveZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrSlaveZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the CLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The ID of the vSwitch to which the internal-facing CLB instance belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.LoadBalancerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.datasource.LoadBalancerProps.class));
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
         * Attribute Address: The service IP address of the CLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AddressIpVersion: The version of the IP address.
         * <p>
         * Valid values: ipv4 and ipv6.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AddressType: The address type of the CLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressType() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoReleaseTime: The timestamp generated when the CLB instance is released.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoReleaseTime() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackendServers: The backend servers of the CLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackendServers() {
            return software.amazon.jsii.Kernel.get(this, "attrBackendServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bandwidth: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the CLB instance was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTimeStamp: The timestamp generated when the CA certificate is uploaded.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTimeStamp() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTimeStamp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeleteProtection: Indicates whether deletion protection is enabled for the CLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeleteProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDeleteProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndTime: The time when the CLB instance expires.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndTimeStamp: The timestamp that indicates the expiration time of the CLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTimeStamp() {
            return software.amazon.jsii.Kernel.get(this, "attrEndTimeStamp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceChargeType: Instance billing method.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetChargeType: The metering method of the Internet-facing CLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ListenerPortsAndProtocal: The ports or protocols of the listeners.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerPortsAndProtocal() {
            return software.amazon.jsii.Kernel.get(this, "attrListenerPortsAndProtocal", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ListenerPortsAndProtocol: The ports or protocols of the listeners.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerPortsAndProtocol() {
            return software.amazon.jsii.Kernel.get(this, "attrListenerPortsAndProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerId: The CLB instance ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerName: The name of the CLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerName() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerSpec: The specification of the CLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterZoneId: The ID of the primary zone to which the CLB instance belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModificationProtectionReason: The reason why the configuration read-only mode is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrModificationProtectionReason() {
            return software.amazon.jsii.Kernel.get(this, "attrModificationProtectionReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModificationProtectionStatus: Load balancing modifies the protection state.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrModificationProtectionStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrModificationProtectionStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkType: The network type of the CLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: Load balancing instance payment type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionIdAlias: The alias of the region to which the CLB instance belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionIdAlias() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionIdAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RenewalCycUnit: The auto-renewal cycle.
         * <p>
         * Valid values: Year and Month. Default value: Month.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalCycUnit() {
            return software.amazon.jsii.Kernel.get(this, "attrRenewalCycUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RenewalDuration: The auto-renewal duration.
         * <p>
         * This parameter is valid only if RenewalStatus is set to AutoRenewal.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalDuration() {
            return software.amazon.jsii.Kernel.get(this, "attrRenewalDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RenewalStatus: Indicates whether auto-renewal is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrRenewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The resource group ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SlaveZoneId: The ID of the secondary zone to which the CLB instance belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlaveZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrSlaveZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the CLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The ID of the vSwitch to which the internal-facing CLB instance belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.LoadBalancerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.datasource.LoadBalancerProps.class));
        }
    }
}
