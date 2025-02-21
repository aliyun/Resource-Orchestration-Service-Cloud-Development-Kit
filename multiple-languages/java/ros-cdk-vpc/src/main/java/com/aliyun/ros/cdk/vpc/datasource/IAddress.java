package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Represents a <code>Address</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:22.283Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.IAddress")
@software.amazon.jsii.Jsii.Proxy(IAddress.Jsii$Proxy.class)
public interface IAddress extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AddressName: The name of the EIP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressName();

    /**
     * Attribute AllocationId: The ID of the EIP instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllocationId();

    /**
     * Attribute Bandwidth: The peak bandwidth of the EIP.
     * <p>
     * Unit: Mbps.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth();

    /**
     * Attribute BandwidthPackageBandwidth: The bandwidth value of the Internet shared bandwidth added to the EIP.
     * <p>
     * The unit is Mbps.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageBandwidth();

    /**
     * Attribute BandwidthPackageId: The ID of the added shared bandwidth.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageId();

    /**
     * Attribute BandwidthPackageType: The type of bandwidth.
     * <p>
     * Only <strong>CommonBandwidthPackage</strong> (shared bandwidth) is supported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageType();

    /**
     * Attribute BusinessStatus: The business status of the EIP instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus();

    /**
     * Attribute CreateTime: The time when the EIP was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DeletionProtection: Whether the delete protection function is turned on.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection();

    /**
     * Attribute Description: The description of the EIP instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute EipBandwidth: AN EIP is added to an Internet shared bandwidth before or exit purchase an Internet shared bandwidth instance after the bandwidth Mbps Set for the bandwidth.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipBandwidth();

    /**
     * Attribute ExpiredTime: Expiration time, format' YYYY-MM-DDThh:mm:ssZ '.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime();

    /**
     * Attribute HasReservationData: Whether there is renewal data.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHasReservationData();

    /**
     * Attribute HdMonitorStatus: Whether the second-level monitoring is enabled for the EIP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHdMonitorStatus();

    /**
     * Attribute InstanceId: The ID of the current bound instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute InstanceRegionId: The region ID of the currently bound resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceRegionId();

    /**
     * Attribute InstanceType: The type of the current bound instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType();

    /**
     * Attribute IpAddress: The IP address of the EIP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress();

    /**
     * Attribute Isp: Service providers.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsp();

    /**
     * Attribute Netmode: Network type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetmode();

    /**
     * Attribute OperationLocks: Lock details.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationLocks();

    /**
     * Attribute PaymentType: The billing method of the EIP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute PublicIpAddressPoolId: The ID of the IP address pool to which the EIP belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddressPoolId();

    /**
     * Attribute ReservationActiveTime: The effective time of the renewal fee, in the format of 'YYYY-MM-DDThh:mm:ssZ'.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationActiveTime();

    /**
     * Attribute ReservationBandwidth: Renewal bandwidth, in Mbps.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationBandwidth();

    /**
     * Attribute ReservationInternetChargeType: Renewal Payment type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationInternetChargeType();

    /**
     * Attribute ReservationOrderType: Renewal order type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationOrderType();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SecondLimited: Whether a secondary speed limit is configured.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondLimited();

    /**
     * Attribute SecurityProtectionTypes: Security protection level.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityProtectionTypes();

    /**
     * Attribute SegmentInstanceId: The ID of the consecutive EIPs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSegmentInstanceId();

    /**
     * Attribute ServiceManaged: Indicates the resource created for the service account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceManaged();

    /**
     * Attribute Tags: The tag of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.AddressProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.datasource.IAddress.Jsii$Default {
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
         * Attribute AddressName: The name of the EIP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressName() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AllocationId: The ID of the EIP instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllocationId() {
            return software.amazon.jsii.Kernel.get(this, "attrAllocationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bandwidth: The peak bandwidth of the EIP.
         * <p>
         * Unit: Mbps.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BandwidthPackageBandwidth: The bandwidth value of the Internet shared bandwidth added to the EIP.
         * <p>
         * The unit is Mbps.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthPackageBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BandwidthPackageId: The ID of the added shared bandwidth.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageId() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BandwidthPackageType: The type of bandwidth.
         * <p>
         * Only <strong>CommonBandwidthPackage</strong> (shared bandwidth) is supported.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageType() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthPackageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BusinessStatus: The business status of the EIP instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrBusinessStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the EIP was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeletionProtection: Whether the delete protection function is turned on.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the EIP instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EipBandwidth: AN EIP is added to an Internet shared bandwidth before or exit purchase an Internet shared bandwidth instance after the bandwidth Mbps Set for the bandwidth.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrEipBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: Expiration time, format' YYYY-MM-DDThh:mm:ssZ '.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HasReservationData: Whether there is renewal data.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHasReservationData() {
            return software.amazon.jsii.Kernel.get(this, "attrHasReservationData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HdMonitorStatus: Whether the second-level monitoring is enabled for the EIP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHdMonitorStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrHdMonitorStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the current bound instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceRegionId: The region ID of the currently bound resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: The type of the current bound instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpAddress: The IP address of the EIP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Isp: Service providers.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsp() {
            return software.amazon.jsii.Kernel.get(this, "attrIsp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Netmode: Network type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetmode() {
            return software.amazon.jsii.Kernel.get(this, "attrNetmode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperationLocks: Lock details.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationLocks() {
            return software.amazon.jsii.Kernel.get(this, "attrOperationLocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The billing method of the EIP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIpAddressPoolId: The ID of the IP address pool to which the EIP belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddressPoolId() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddressPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReservationActiveTime: The effective time of the renewal fee, in the format of 'YYYY-MM-DDThh:mm:ssZ'.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationActiveTime() {
            return software.amazon.jsii.Kernel.get(this, "attrReservationActiveTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReservationBandwidth: Renewal bandwidth, in Mbps.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrReservationBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReservationInternetChargeType: Renewal Payment type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrReservationInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReservationOrderType: Renewal order type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationOrderType() {
            return software.amazon.jsii.Kernel.get(this, "attrReservationOrderType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecondLimited: Whether a secondary speed limit is configured.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondLimited() {
            return software.amazon.jsii.Kernel.get(this, "attrSecondLimited", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityProtectionTypes: Security protection level.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityProtectionTypes() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityProtectionTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SegmentInstanceId: The ID of the consecutive EIPs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSegmentInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrSegmentInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceManaged: Indicates the resource created for the service account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceManaged() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceManaged", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.AddressProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.AddressProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAddress}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAddress, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AddressName: The name of the EIP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressName() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AllocationId: The ID of the EIP instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllocationId() {
            return software.amazon.jsii.Kernel.get(this, "attrAllocationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bandwidth: The peak bandwidth of the EIP.
         * <p>
         * Unit: Mbps.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BandwidthPackageBandwidth: The bandwidth value of the Internet shared bandwidth added to the EIP.
         * <p>
         * The unit is Mbps.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthPackageBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BandwidthPackageId: The ID of the added shared bandwidth.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageId() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BandwidthPackageType: The type of bandwidth.
         * <p>
         * Only <strong>CommonBandwidthPackage</strong> (shared bandwidth) is supported.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPackageType() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthPackageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BusinessStatus: The business status of the EIP instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrBusinessStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the EIP was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeletionProtection: Whether the delete protection function is turned on.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the EIP instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EipBandwidth: AN EIP is added to an Internet shared bandwidth before or exit purchase an Internet shared bandwidth instance after the bandwidth Mbps Set for the bandwidth.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrEipBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: Expiration time, format' YYYY-MM-DDThh:mm:ssZ '.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HasReservationData: Whether there is renewal data.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHasReservationData() {
            return software.amazon.jsii.Kernel.get(this, "attrHasReservationData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HdMonitorStatus: Whether the second-level monitoring is enabled for the EIP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHdMonitorStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrHdMonitorStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the current bound instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceRegionId: The region ID of the currently bound resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: The type of the current bound instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpAddress: The IP address of the EIP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Isp: Service providers.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsp() {
            return software.amazon.jsii.Kernel.get(this, "attrIsp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Netmode: Network type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetmode() {
            return software.amazon.jsii.Kernel.get(this, "attrNetmode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperationLocks: Lock details.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationLocks() {
            return software.amazon.jsii.Kernel.get(this, "attrOperationLocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The billing method of the EIP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIpAddressPoolId: The ID of the IP address pool to which the EIP belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddressPoolId() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddressPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReservationActiveTime: The effective time of the renewal fee, in the format of 'YYYY-MM-DDThh:mm:ssZ'.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationActiveTime() {
            return software.amazon.jsii.Kernel.get(this, "attrReservationActiveTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReservationBandwidth: Renewal bandwidth, in Mbps.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrReservationBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReservationInternetChargeType: Renewal Payment type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrReservationInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReservationOrderType: Renewal order type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationOrderType() {
            return software.amazon.jsii.Kernel.get(this, "attrReservationOrderType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecondLimited: Whether a secondary speed limit is configured.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondLimited() {
            return software.amazon.jsii.Kernel.get(this, "attrSecondLimited", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityProtectionTypes: Security protection level.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityProtectionTypes() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityProtectionTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SegmentInstanceId: The ID of the consecutive EIPs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSegmentInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrSegmentInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceManaged: Indicates the resource created for the service account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceManaged() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceManaged", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.AddressProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.AddressProps.class));
        }
    }
}
