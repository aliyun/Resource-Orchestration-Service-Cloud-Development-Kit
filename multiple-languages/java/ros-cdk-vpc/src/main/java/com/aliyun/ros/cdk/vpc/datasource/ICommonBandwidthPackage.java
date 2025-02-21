package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Represents a <code>CommonBandwidthPackage</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:22.307Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.ICommonBandwidthPackage")
@software.amazon.jsii.Jsii.Proxy(ICommonBandwidthPackage.Jsii$Proxy.class)
public interface ICommonBandwidthPackage extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance.
     * <p>
     * Unit: Mbit/s.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth();

    /**
     * Attribute BusinessStatus: The service status of the Internet Shared Bandwidth instance.
     * <p>
     * Valid values:
     * Normal: The Internet Shared Bandwidth instance runs as expected.
     * FinancialLocked: An overdue payment occurs in the Internet Shared Bandwidth instance
     * Unactivated: The Internet Shared Bandwidth instance is not activated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus();

    /**
     * Attribute CommonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonBandwidthPackageId();

    /**
     * Attribute CommonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonBandwidthPackageName();

    /**
     * Attribute CreationTime: The time when the Internet Shared Bandwidth instance was created.
     * <p>
     * The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreationTime();

    /**
     * Attribute DeletionProtection: Indicates whether deletion protection is enabled.
     * <p>
     * Valid values:
     * false
     * true
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection();

    /**
     * Attribute Description: The description of the Internet Shared Bandwidth instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute ExpiredTime: The time when the Internet Shared Bandwidth instance expired.
     * <p>
     * The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime();

    /**
     * Attribute HasReservationData: Indicates whether the information about pending orders is returned.
     * <p>
     * Valid values:
     * false
     * true
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHasReservationData();

    /**
     * Attribute InstanceChargeType: The billing method of the Internet Shared Bandwidth instance.
     * <p>
     * Valid value:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceChargeType();

    /**
     * Attribute InternetChargeType: The metering method of the Internet Shared Bandwidth instance.
     * <p>
     * Valid value:
     * PayBy95: Charged by Enhanced 95th Percentile.
     * PayByBandwidth: Charged by Bandwidth.
     * PayByDominantTraffic: Charged by Dominant Traffic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType();

    /**
     * Attribute Isp: The line type.
     * <p>
     * Valid values:
     * BGP (default): BGP (Multi-ISP) lines.
     * BGP_PRO: BGP (Multi-ISP) Pro lines.
     * Valid values if you are allowed to use single-ISP bandwidth:
     * ChinaTelecom
     * ChinaUnicom
     * ChinaMobile
     * ChinaTelecom_L2
     * ChinaUnicom_L2
     * ChinaMobile_L2
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsp();

    /**
     * Attribute PublicIpAddresses: The elastic IP addresses (EIPs) that are associated with the Internet Shared Bandwidth instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddresses();

    /**
     * Attribute Ratio: The percentage of the minimum bandwidth commitment.
     * <p>
     * Only 20 is returned.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRatio();

    /**
     * Attribute ReservationActiveTime: The time when the renewal took effect.
     * <p>
     * The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationActiveTime();

    /**
     * Attribute ReservationBandwidth: The new maximum bandwidth after the configurations are changed.
     * <p>
     * Unit: Mbit/s.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationBandwidth();

    /**
     * Attribute ReservationInternetChargeType: The metering method after the configurations are changed.
     * <p>
     * Valid value:
     * PayBy95: Charged by Enhanced 95th Percentile.
     * PayByBandwidth: Charged by Bandwidth.
     * PayByDominantTraffic: Charged by Dominant Traffic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationInternetChargeType();

    /**
     * Attribute ReservationOrderType: The renewal method.
     * <p>
     * Valid values:
     * RENEWCHANGE: renewal with a specification change
     * TEMP_UPGRADE: renewal with a temporary upgrade
     * UPGRADE: renewal with an upgrade
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationOrderType();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute ServiceManaged: Indicates whether the resource is created by the service account.
     * <p>
     * Valid values:
     * 0: The resource is not created by the service account.
     * 1: The resource is created by the service account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceManaged();

    /**
     * Attribute Status: The status of the Internet Shared Bandwidth instance.
     * <p>
     * Valid values:
     * Available: The Internet Shared Bandwidth instance is available.
     * Modifying: The Internet Shared Bandwidth instance is being modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackageProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.datasource.ICommonBandwidthPackage.Jsii$Default {
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
         * Attribute Bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance.
         * <p>
         * Unit: Mbit/s.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BusinessStatus: The service status of the Internet Shared Bandwidth instance.
         * <p>
         * Valid values:
         * Normal: The Internet Shared Bandwidth instance runs as expected.
         * FinancialLocked: An overdue payment occurs in the Internet Shared Bandwidth instance
         * Unactivated: The Internet Shared Bandwidth instance is not activated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrBusinessStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonBandwidthPackageId: The ID of the Internet shared bandwidth.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonBandwidthPackageId() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonBandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonBandwidthPackageName() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonBandwidthPackageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreationTime: The time when the Internet Shared Bandwidth instance was created.
         * <p>
         * The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreationTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreationTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeletionProtection: Indicates whether deletion protection is enabled.
         * <p>
         * Valid values:
         * false
         * true
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the Internet Shared Bandwidth instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: The time when the Internet Shared Bandwidth instance expired.
         * <p>
         * The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HasReservationData: Indicates whether the information about pending orders is returned.
         * <p>
         * Valid values:
         * false
         * true
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHasReservationData() {
            return software.amazon.jsii.Kernel.get(this, "attrHasReservationData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceChargeType: The billing method of the Internet Shared Bandwidth instance.
         * <p>
         * Valid value:
         * PostPaid: pay-as-you-go
         * PrePaid: subscription
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetChargeType: The metering method of the Internet Shared Bandwidth instance.
         * <p>
         * Valid value:
         * PayBy95: Charged by Enhanced 95th Percentile.
         * PayByBandwidth: Charged by Bandwidth.
         * PayByDominantTraffic: Charged by Dominant Traffic.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Isp: The line type.
         * <p>
         * Valid values:
         * BGP (default): BGP (Multi-ISP) lines.
         * BGP_PRO: BGP (Multi-ISP) Pro lines.
         * Valid values if you are allowed to use single-ISP bandwidth:
         * ChinaTelecom
         * ChinaUnicom
         * ChinaMobile
         * ChinaTelecom_L2
         * ChinaUnicom_L2
         * ChinaMobile_L2
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsp() {
            return software.amazon.jsii.Kernel.get(this, "attrIsp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIpAddresses: The elastic IP addresses (EIPs) that are associated with the Internet Shared Bandwidth instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddresses() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ratio: The percentage of the minimum bandwidth commitment.
         * <p>
         * Only 20 is returned.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRatio() {
            return software.amazon.jsii.Kernel.get(this, "attrRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReservationActiveTime: The time when the renewal took effect.
         * <p>
         * The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationActiveTime() {
            return software.amazon.jsii.Kernel.get(this, "attrReservationActiveTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReservationBandwidth: The new maximum bandwidth after the configurations are changed.
         * <p>
         * Unit: Mbit/s.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrReservationBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReservationInternetChargeType: The metering method after the configurations are changed.
         * <p>
         * Valid value:
         * PayBy95: Charged by Enhanced 95th Percentile.
         * PayByBandwidth: Charged by Bandwidth.
         * PayByDominantTraffic: Charged by Dominant Traffic.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrReservationInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReservationOrderType: The renewal method.
         * <p>
         * Valid values:
         * RENEWCHANGE: renewal with a specification change
         * TEMP_UPGRADE: renewal with a temporary upgrade
         * UPGRADE: renewal with an upgrade
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
         * Attribute ServiceManaged: Indicates whether the resource is created by the service account.
         * <p>
         * Valid values:
         * 0: The resource is not created by the service account.
         * 1: The resource is created by the service account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceManaged() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceManaged", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: The status of the Internet Shared Bandwidth instance.
         * <p>
         * Valid values:
         * Available: The Internet Shared Bandwidth instance is available.
         * Modifying: The Internet Shared Bandwidth instance is being modified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackageProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackageProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ICommonBandwidthPackage}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ICommonBandwidthPackage, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance.
         * <p>
         * Unit: Mbit/s.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BusinessStatus: The service status of the Internet Shared Bandwidth instance.
         * <p>
         * Valid values:
         * Normal: The Internet Shared Bandwidth instance runs as expected.
         * FinancialLocked: An overdue payment occurs in the Internet Shared Bandwidth instance
         * Unactivated: The Internet Shared Bandwidth instance is not activated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrBusinessStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonBandwidthPackageId: The ID of the Internet shared bandwidth.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonBandwidthPackageId() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonBandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonBandwidthPackageName() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonBandwidthPackageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreationTime: The time when the Internet Shared Bandwidth instance was created.
         * <p>
         * The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreationTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreationTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeletionProtection: Indicates whether deletion protection is enabled.
         * <p>
         * Valid values:
         * false
         * true
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the Internet Shared Bandwidth instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: The time when the Internet Shared Bandwidth instance expired.
         * <p>
         * The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HasReservationData: Indicates whether the information about pending orders is returned.
         * <p>
         * Valid values:
         * false
         * true
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHasReservationData() {
            return software.amazon.jsii.Kernel.get(this, "attrHasReservationData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceChargeType: The billing method of the Internet Shared Bandwidth instance.
         * <p>
         * Valid value:
         * PostPaid: pay-as-you-go
         * PrePaid: subscription
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetChargeType: The metering method of the Internet Shared Bandwidth instance.
         * <p>
         * Valid value:
         * PayBy95: Charged by Enhanced 95th Percentile.
         * PayByBandwidth: Charged by Bandwidth.
         * PayByDominantTraffic: Charged by Dominant Traffic.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Isp: The line type.
         * <p>
         * Valid values:
         * BGP (default): BGP (Multi-ISP) lines.
         * BGP_PRO: BGP (Multi-ISP) Pro lines.
         * Valid values if you are allowed to use single-ISP bandwidth:
         * ChinaTelecom
         * ChinaUnicom
         * ChinaMobile
         * ChinaTelecom_L2
         * ChinaUnicom_L2
         * ChinaMobile_L2
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsp() {
            return software.amazon.jsii.Kernel.get(this, "attrIsp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIpAddresses: The elastic IP addresses (EIPs) that are associated with the Internet Shared Bandwidth instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddresses() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ratio: The percentage of the minimum bandwidth commitment.
         * <p>
         * Only 20 is returned.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRatio() {
            return software.amazon.jsii.Kernel.get(this, "attrRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReservationActiveTime: The time when the renewal took effect.
         * <p>
         * The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationActiveTime() {
            return software.amazon.jsii.Kernel.get(this, "attrReservationActiveTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReservationBandwidth: The new maximum bandwidth after the configurations are changed.
         * <p>
         * Unit: Mbit/s.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrReservationBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReservationInternetChargeType: The metering method after the configurations are changed.
         * <p>
         * Valid value:
         * PayBy95: Charged by Enhanced 95th Percentile.
         * PayByBandwidth: Charged by Bandwidth.
         * PayByDominantTraffic: Charged by Dominant Traffic.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReservationInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrReservationInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReservationOrderType: The renewal method.
         * <p>
         * Valid values:
         * RENEWCHANGE: renewal with a specification change
         * TEMP_UPGRADE: renewal with a temporary upgrade
         * UPGRADE: renewal with an upgrade
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
         * Attribute ServiceManaged: Indicates whether the resource is created by the service account.
         * <p>
         * Valid values:
         * 0: The resource is not created by the service account.
         * 1: The resource is created by the service account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceManaged() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceManaged", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: The status of the Internet Shared Bandwidth instance.
         * <p>
         * Valid values:
         * Available: The Internet Shared Bandwidth instance is available.
         * Modifying: The Internet Shared Bandwidth instance is being modified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackageProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackageProps.class));
        }
    }
}
