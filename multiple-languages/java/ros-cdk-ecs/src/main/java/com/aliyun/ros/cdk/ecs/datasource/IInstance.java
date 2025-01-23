package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Represents a <code>Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:38.603Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.IInstance")
@software.amazon.jsii.Jsii.Proxy(IInstance.Jsii$Proxy.class)
public interface IInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ActionOnMaintenance: The O&amp;M action attribute of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrActionOnMaintenance();

    /**
     * Attribute AutoRebootTime: Automatic reboot time after instance configuration change.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRebootTime();

    /**
     * Attribute AutoReleaseTime: The time when to automatically release the pay-as-you-go instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoReleaseTime();

    /**
     * Attribute AutoRenewEnabled: Whether automatic renewal has been set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenewEnabled();

    /**
     * Attribute ClusterId: The ID of the cluster to which the instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId();

    /**
     * Attribute Cpu: The number of vCPUs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu();

    /**
     * Attribute CpuOptions: Details about the CPU options.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuOptions();

    /**
     * Attribute CreateTime: The create time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute CreditSpecification: The performance mode of the burstable instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreditSpecification();

    /**
     * Attribute DedicatedHostAttribute: Details about the dedicated host.
     * <p>
     * It is an array that consists of the DedicatedHostClusterId, DedicatedHostId, and DedicatedHostName parameters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostAttribute();

    /**
     * Attribute DedicatedInstanceAttribute: The attributes of the instance on the dedicated host.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedInstanceAttribute();

    /**
     * Attribute DeletionProtection: The release protection attribute of the instance.
     * <p>
     * This parameter indicates whether you can use the ECS console or call the DeleteInstance operation to release the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection();

    /**
     * Attribute DeploymentSetGroupNo: The number of the deployment set group to which the instance belongs in a deployment set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeploymentSetGroupNo();

    /**
     * Attribute DeploymentSetId: The ID of the deployment set in which the instance is deployed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeploymentSetId();

    /**
     * Attribute Description: The description of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute DeviceAvailable: Indicates whether data disks can be attached to the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeviceAvailable();

    /**
     * Attribute Duration: The duration of automatic renewal.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDuration();

    /**
     * Attribute EcsCapacityReservationAttr: Details about the capacity reservation related to the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcsCapacityReservationAttr();

    /**
     * Attribute EipAddress: Details about the EIP associated with the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipAddress();

    /**
     * Attribute ExpiredTime: The time when the instance expires.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime();

    /**
     * Attribute GpuAmount: The number of GPUs for the instance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGpuAmount();

    /**
     * Attribute GpuSpec: The category of GPUs for the instance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGpuSpec();

    /**
     * Attribute HostName: The hostname of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName();

    /**
     * Attribute HpcClusterId: ID of the HPC cluster to which the instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHpcClusterId();

    /**
     * Attribute ImageId: The ID of the image.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId();

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute InstanceName: The name of the instance.
     * <p>
     * Fuzzy search with the asterisk (*) wildcard characters is supported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName();

    /**
     * Attribute InstanceNetworkType: The network type of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceNetworkType();

    /**
     * Attribute InstanceType: The instance type of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType();

    /**
     * Attribute InstanceTypeFamily: The instance family of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceTypeFamily();

    /**
     * Attribute InternetChargeType: The billing method for network usage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType();

    /**
     * Attribute InternetMaxBandwidthIn: The maximum inbound public bandwidth.
     * <p>
     * Unit: Mbit/s.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetMaxBandwidthIn();

    /**
     * Attribute InternetMaxBandwidthOut: The maximum outbound public bandwidth.
     * <p>
     * Unit: Mbit/s.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetMaxBandwidthOut();

    /**
     * Attribute IoOptimized: Specifies whether the instance is I/O optimized.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIoOptimized();

    /**
     * Attribute KeyPairName: The name of the SSH key pair bound to the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairName();

    /**
     * Attribute LocalStorageAmount: The number of local disks attached to the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalStorageAmount();

    /**
     * Attribute LocalStorageCapacity: The capacity of local disks attached to the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalStorageCapacity();

    /**
     * Attribute MaintenanceWindows: The list of operations window instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintenanceWindows();

    /**
     * Attribute Memory: The memory size of the instance.
     * <p>
     * Unit: MiB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemory();

    /**
     * Attribute MetadataOptions: Details about the metadata options.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetadataOptions();

    /**
     * Attribute NetworkInterfaces: Details about the ENIs bound to the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkInterfaces();

    /**
     * Attribute NotifyOnMaintenance: Whether to send an event notification before the instance goes down.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotifyOnMaintenance();

    /**
     * Attribute OperationLocks: The reasons why the instance was locked.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationLocks();

    /**
     * Attribute OsName: The name of the operating system of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsName();

    /**
     * Attribute OsNameEn: The English name of the operating system of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsNameEn();

    /**
     * Attribute OsType: The type of the operating system of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsType();

    /**
     * Attribute PaymentType: The billing method of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute PeriodUnit: Renewal unit.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriodUnit();

    /**
     * Attribute PrivatePoolOptionsId: Private pool ID.
     * <p>
     * When the return value is open, the private pool ID is the private pool ID assigned when the system automatically matches.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivatePoolOptionsId();

    /**
     * Attribute PrivatePoolOptionsMatchCriteria: The private pool matching pattern of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivatePoolOptionsMatchCriteria();

    /**
     * Attribute PublicIpAddress: The public IP addresses of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddress();

    /**
     * Attribute RdmaIpAddress: The RDMA network IP of the HPC instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRdmaIpAddress();

    /**
     * Attribute Recyclable: Indicates whether the instance can be recycled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecyclable();

    /**
     * Attribute RenewalStatus: The automatic renewal status of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalStatus();

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     * <p>
     * If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SaleCycle: Instance billing cycles.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSaleCycle();

    /**
     * Attribute SecurityGroupIds: The IDs of the security groups to which the instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupIds();

    /**
     * Attribute SerialNumber: The serial number of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSerialNumber();

    /**
     * Attribute SpotDuration: The protection period of the preemptible instance.
     * <p>
     * Unit: hours.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotDuration();

    /**
     * Attribute SpotPriceLimit: The maximum hourly price of the instance.
     * <p>
     * It can be accurate to three decimal places. This parameter is valid only when the SpotStrategy parameter is set to SpotWithPriceLimit.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotPriceLimit();

    /**
     * Attribute SpotStrategy: The bidding policy for the pay-as-you-go instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotStrategy();

    /**
     * Attribute StartTime: The time when the instance was last started.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime();

    /**
     * Attribute StoppedMode: Indicates whether the instance continues to be billed after it is stopped.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStoppedMode();

    /**
     * Attribute Tags: The tags of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute UserData: The custom data of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserData();

    /**
     * Attribute VpcAttributes: The VPC attributes of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcAttributes();

    /**
     * Attribute ZoneId: The zone ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.InstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.datasource.IInstance.Jsii$Default {
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
         * Attribute ActionOnMaintenance: The O&amp;M action attribute of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrActionOnMaintenance() {
            return software.amazon.jsii.Kernel.get(this, "attrActionOnMaintenance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoRebootTime: Automatic reboot time after instance configuration change.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRebootTime() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoRebootTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoReleaseTime: The time when to automatically release the pay-as-you-go instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoReleaseTime() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoRenewEnabled: Whether automatic renewal has been set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenewEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoRenewEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterId: The ID of the cluster to which the instance belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cpu: The number of vCPUs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CpuOptions: Details about the CPU options.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuOptions() {
            return software.amazon.jsii.Kernel.get(this, "attrCpuOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The create time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreditSpecification: The performance mode of the burstable instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreditSpecification() {
            return software.amazon.jsii.Kernel.get(this, "attrCreditSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostAttribute: Details about the dedicated host.
         * <p>
         * It is an array that consists of the DedicatedHostClusterId, DedicatedHostId, and DedicatedHostName parameters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostAttribute() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostAttribute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedInstanceAttribute: The attributes of the instance on the dedicated host.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedInstanceAttribute() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedInstanceAttribute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeletionProtection: The release protection attribute of the instance.
         * <p>
         * This parameter indicates whether you can use the ECS console or call the DeleteInstance operation to release the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeploymentSetGroupNo: The number of the deployment set group to which the instance belongs in a deployment set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeploymentSetGroupNo() {
            return software.amazon.jsii.Kernel.get(this, "attrDeploymentSetGroupNo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeploymentSetId: The ID of the deployment set in which the instance is deployed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeploymentSetId() {
            return software.amazon.jsii.Kernel.get(this, "attrDeploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeviceAvailable: Indicates whether data disks can be attached to the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeviceAvailable() {
            return software.amazon.jsii.Kernel.get(this, "attrDeviceAvailable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Duration: The duration of automatic renewal.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDuration() {
            return software.amazon.jsii.Kernel.get(this, "attrDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EcsCapacityReservationAttr: Details about the capacity reservation related to the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcsCapacityReservationAttr() {
            return software.amazon.jsii.Kernel.get(this, "attrEcsCapacityReservationAttr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EipAddress: Details about the EIP associated with the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrEipAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: The time when the instance expires.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GpuAmount: The number of GPUs for the instance type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGpuAmount() {
            return software.amazon.jsii.Kernel.get(this, "attrGpuAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GpuSpec: The category of GPUs for the instance type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGpuSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrGpuSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostName: The hostname of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName() {
            return software.amazon.jsii.Kernel.get(this, "attrHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HpcClusterId: ID of the HPC cluster to which the instance belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHpcClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrHpcClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageId: The ID of the image.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The name of the instance.
         * <p>
         * Fuzzy search with the asterisk (*) wildcard characters is supported.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceNetworkType: The network type of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: The instance type of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceTypeFamily: The instance family of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceTypeFamily() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceTypeFamily", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetChargeType: The billing method for network usage.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetMaxBandwidthIn: The maximum inbound public bandwidth.
         * <p>
         * Unit: Mbit/s.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetMaxBandwidthIn() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetMaxBandwidthOut: The maximum outbound public bandwidth.
         * <p>
         * Unit: Mbit/s.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetMaxBandwidthOut() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IoOptimized: Specifies whether the instance is I/O optimized.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIoOptimized() {
            return software.amazon.jsii.Kernel.get(this, "attrIoOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyPairName: The name of the SSH key pair bound to the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairName() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LocalStorageAmount: The number of local disks attached to the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalStorageAmount() {
            return software.amazon.jsii.Kernel.get(this, "attrLocalStorageAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LocalStorageCapacity: The capacity of local disks attached to the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalStorageCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrLocalStorageCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintenanceWindows: The list of operations window instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintenanceWindows() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintenanceWindows", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Memory: The memory size of the instance.
         * <p>
         * Unit: MiB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemory() {
            return software.amazon.jsii.Kernel.get(this, "attrMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MetadataOptions: Details about the metadata options.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetadataOptions() {
            return software.amazon.jsii.Kernel.get(this, "attrMetadataOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkInterfaces: Details about the ENIs bound to the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkInterfaces() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkInterfaces", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotifyOnMaintenance: Whether to send an event notification before the instance goes down.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotifyOnMaintenance() {
            return software.amazon.jsii.Kernel.get(this, "attrNotifyOnMaintenance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperationLocks: The reasons why the instance was locked.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationLocks() {
            return software.amazon.jsii.Kernel.get(this, "attrOperationLocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OsName: The name of the operating system of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsName() {
            return software.amazon.jsii.Kernel.get(this, "attrOsName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OsNameEn: The English name of the operating system of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsNameEn() {
            return software.amazon.jsii.Kernel.get(this, "attrOsNameEn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OsType: The type of the operating system of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsType() {
            return software.amazon.jsii.Kernel.get(this, "attrOsType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The billing method of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PeriodUnit: Renewal unit.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriodUnit() {
            return software.amazon.jsii.Kernel.get(this, "attrPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivatePoolOptionsId: Private pool ID.
         * <p>
         * When the return value is open, the private pool ID is the private pool ID assigned when the system automatically matches.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivatePoolOptionsId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivatePoolOptionsId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivatePoolOptionsMatchCriteria: The private pool matching pattern of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivatePoolOptionsMatchCriteria() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivatePoolOptionsMatchCriteria", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIpAddress: The public IP addresses of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RdmaIpAddress: The RDMA network IP of the HPC instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRdmaIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrRdmaIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Recyclable: Indicates whether the instance can be recycled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecyclable() {
            return software.amazon.jsii.Kernel.get(this, "attrRecyclable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RenewalStatus: The automatic renewal status of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrRenewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
         * <p>
         * If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SaleCycle: Instance billing cycles.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSaleCycle() {
            return software.amazon.jsii.Kernel.get(this, "attrSaleCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupIds: The IDs of the security groups to which the instance belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupIds() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SerialNumber: The serial number of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSerialNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrSerialNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpotDuration: The protection period of the preemptible instance.
         * <p>
         * Unit: hours.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotDuration() {
            return software.amazon.jsii.Kernel.get(this, "attrSpotDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpotPriceLimit: The maximum hourly price of the instance.
         * <p>
         * It can be accurate to three decimal places. This parameter is valid only when the SpotStrategy parameter is set to SpotWithPriceLimit.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotPriceLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrSpotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpotStrategy: The bidding policy for the pay-as-you-go instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotStrategy() {
            return software.amazon.jsii.Kernel.get(this, "attrSpotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StartTime: The time when the instance was last started.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StoppedMode: Indicates whether the instance continues to be billed after it is stopped.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStoppedMode() {
            return software.amazon.jsii.Kernel.get(this, "attrStoppedMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserData: The custom data of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserData() {
            return software.amazon.jsii.Kernel.get(this, "attrUserData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcAttributes: The VPC attributes of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcAttributes() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcAttributes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The zone ID of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.InstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ActionOnMaintenance: The O&amp;M action attribute of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrActionOnMaintenance() {
            return software.amazon.jsii.Kernel.get(this, "attrActionOnMaintenance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoRebootTime: Automatic reboot time after instance configuration change.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRebootTime() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoRebootTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoReleaseTime: The time when to automatically release the pay-as-you-go instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoReleaseTime() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoRenewEnabled: Whether automatic renewal has been set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenewEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoRenewEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterId: The ID of the cluster to which the instance belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cpu: The number of vCPUs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CpuOptions: Details about the CPU options.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuOptions() {
            return software.amazon.jsii.Kernel.get(this, "attrCpuOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The create time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreditSpecification: The performance mode of the burstable instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreditSpecification() {
            return software.amazon.jsii.Kernel.get(this, "attrCreditSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostAttribute: Details about the dedicated host.
         * <p>
         * It is an array that consists of the DedicatedHostClusterId, DedicatedHostId, and DedicatedHostName parameters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostAttribute() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostAttribute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedInstanceAttribute: The attributes of the instance on the dedicated host.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedInstanceAttribute() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedInstanceAttribute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeletionProtection: The release protection attribute of the instance.
         * <p>
         * This parameter indicates whether you can use the ECS console or call the DeleteInstance operation to release the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeploymentSetGroupNo: The number of the deployment set group to which the instance belongs in a deployment set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeploymentSetGroupNo() {
            return software.amazon.jsii.Kernel.get(this, "attrDeploymentSetGroupNo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeploymentSetId: The ID of the deployment set in which the instance is deployed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeploymentSetId() {
            return software.amazon.jsii.Kernel.get(this, "attrDeploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeviceAvailable: Indicates whether data disks can be attached to the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeviceAvailable() {
            return software.amazon.jsii.Kernel.get(this, "attrDeviceAvailable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Duration: The duration of automatic renewal.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDuration() {
            return software.amazon.jsii.Kernel.get(this, "attrDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EcsCapacityReservationAttr: Details about the capacity reservation related to the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcsCapacityReservationAttr() {
            return software.amazon.jsii.Kernel.get(this, "attrEcsCapacityReservationAttr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EipAddress: Details about the EIP associated with the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrEipAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: The time when the instance expires.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GpuAmount: The number of GPUs for the instance type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGpuAmount() {
            return software.amazon.jsii.Kernel.get(this, "attrGpuAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GpuSpec: The category of GPUs for the instance type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGpuSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrGpuSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostName: The hostname of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName() {
            return software.amazon.jsii.Kernel.get(this, "attrHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HpcClusterId: ID of the HPC cluster to which the instance belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHpcClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrHpcClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageId: The ID of the image.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The name of the instance.
         * <p>
         * Fuzzy search with the asterisk (*) wildcard characters is supported.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceNetworkType: The network type of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: The instance type of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceTypeFamily: The instance family of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceTypeFamily() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceTypeFamily", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetChargeType: The billing method for network usage.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetMaxBandwidthIn: The maximum inbound public bandwidth.
         * <p>
         * Unit: Mbit/s.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetMaxBandwidthIn() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetMaxBandwidthOut: The maximum outbound public bandwidth.
         * <p>
         * Unit: Mbit/s.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetMaxBandwidthOut() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IoOptimized: Specifies whether the instance is I/O optimized.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIoOptimized() {
            return software.amazon.jsii.Kernel.get(this, "attrIoOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyPairName: The name of the SSH key pair bound to the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairName() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LocalStorageAmount: The number of local disks attached to the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalStorageAmount() {
            return software.amazon.jsii.Kernel.get(this, "attrLocalStorageAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LocalStorageCapacity: The capacity of local disks attached to the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalStorageCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrLocalStorageCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintenanceWindows: The list of operations window instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintenanceWindows() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintenanceWindows", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Memory: The memory size of the instance.
         * <p>
         * Unit: MiB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemory() {
            return software.amazon.jsii.Kernel.get(this, "attrMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MetadataOptions: Details about the metadata options.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetadataOptions() {
            return software.amazon.jsii.Kernel.get(this, "attrMetadataOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkInterfaces: Details about the ENIs bound to the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkInterfaces() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkInterfaces", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotifyOnMaintenance: Whether to send an event notification before the instance goes down.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotifyOnMaintenance() {
            return software.amazon.jsii.Kernel.get(this, "attrNotifyOnMaintenance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperationLocks: The reasons why the instance was locked.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationLocks() {
            return software.amazon.jsii.Kernel.get(this, "attrOperationLocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OsName: The name of the operating system of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsName() {
            return software.amazon.jsii.Kernel.get(this, "attrOsName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OsNameEn: The English name of the operating system of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsNameEn() {
            return software.amazon.jsii.Kernel.get(this, "attrOsNameEn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OsType: The type of the operating system of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsType() {
            return software.amazon.jsii.Kernel.get(this, "attrOsType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The billing method of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PeriodUnit: Renewal unit.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriodUnit() {
            return software.amazon.jsii.Kernel.get(this, "attrPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivatePoolOptionsId: Private pool ID.
         * <p>
         * When the return value is open, the private pool ID is the private pool ID assigned when the system automatically matches.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivatePoolOptionsId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivatePoolOptionsId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivatePoolOptionsMatchCriteria: The private pool matching pattern of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivatePoolOptionsMatchCriteria() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivatePoolOptionsMatchCriteria", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIpAddress: The public IP addresses of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RdmaIpAddress: The RDMA network IP of the HPC instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRdmaIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrRdmaIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Recyclable: Indicates whether the instance can be recycled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecyclable() {
            return software.amazon.jsii.Kernel.get(this, "attrRecyclable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RenewalStatus: The automatic renewal status of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrRenewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
         * <p>
         * If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SaleCycle: Instance billing cycles.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSaleCycle() {
            return software.amazon.jsii.Kernel.get(this, "attrSaleCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupIds: The IDs of the security groups to which the instance belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupIds() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SerialNumber: The serial number of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSerialNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrSerialNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpotDuration: The protection period of the preemptible instance.
         * <p>
         * Unit: hours.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotDuration() {
            return software.amazon.jsii.Kernel.get(this, "attrSpotDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpotPriceLimit: The maximum hourly price of the instance.
         * <p>
         * It can be accurate to three decimal places. This parameter is valid only when the SpotStrategy parameter is set to SpotWithPriceLimit.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotPriceLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrSpotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpotStrategy: The bidding policy for the pay-as-you-go instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotStrategy() {
            return software.amazon.jsii.Kernel.get(this, "attrSpotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StartTime: The time when the instance was last started.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StoppedMode: Indicates whether the instance continues to be billed after it is stopped.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStoppedMode() {
            return software.amazon.jsii.Kernel.get(this, "attrStoppedMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserData: The custom data of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserData() {
            return software.amazon.jsii.Kernel.get(this, "attrUserData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcAttributes: The VPC attributes of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcAttributes() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcAttributes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The zone ID of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.InstanceProps.class));
        }
    }
}
