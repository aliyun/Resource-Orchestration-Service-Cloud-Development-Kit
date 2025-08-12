package com.aliyun.ros.cdk.ecs.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ECS::Instance</code>, which is used to query the information about an Elastic Compute Service (ECS) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:46.782Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.datasource.IInstance {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ActionOnMaintenance: The O&amp;M action attribute of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrActionOnMaintenance() {
        return software.amazon.jsii.Kernel.get(this, "attrActionOnMaintenance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AutoRebootTime: Automatic reboot time after instance configuration change.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRebootTime() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoRebootTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AutoReleaseTime: The time when to automatically release the pay-as-you-go instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoReleaseTime() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AutoRenewEnabled: Whether automatic renewal has been set.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenewEnabled() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoRenewEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClusterId: The ID of the cluster to which the instance belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Cpu: The number of vCPUs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu() {
        return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CpuOptions: Details about the CPU options.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuOptions() {
        return software.amazon.jsii.Kernel.get(this, "attrCpuOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The create time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreditSpecification: The performance mode of the burstable instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreditSpecification() {
        return software.amazon.jsii.Kernel.get(this, "attrCreditSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DedicatedHostAttribute: Details about the dedicated host.
     * <p>
     * It is an array that consists of the DedicatedHostClusterId, DedicatedHostId, and DedicatedHostName parameters.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostAttribute() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostAttribute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DedicatedInstanceAttribute: The attributes of the instance on the dedicated host.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedInstanceAttribute() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedInstanceAttribute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DeletionProtection: The release protection attribute of the instance.
     * <p>
     * This parameter indicates whether you can use the ECS console or call the DeleteInstance operation to release the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection() {
        return software.amazon.jsii.Kernel.get(this, "attrDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DeploymentSetGroupNo: The number of the deployment set group to which the instance belongs in a deployment set.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeploymentSetGroupNo() {
        return software.amazon.jsii.Kernel.get(this, "attrDeploymentSetGroupNo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DeploymentSetId: The ID of the deployment set in which the instance is deployed.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeploymentSetId() {
        return software.amazon.jsii.Kernel.get(this, "attrDeploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DeviceAvailable: Indicates whether data disks can be attached to the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeviceAvailable() {
        return software.amazon.jsii.Kernel.get(this, "attrDeviceAvailable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Duration: The duration of automatic renewal.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDuration() {
        return software.amazon.jsii.Kernel.get(this, "attrDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EcsCapacityReservationAttr: Details about the capacity reservation related to the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcsCapacityReservationAttr() {
        return software.amazon.jsii.Kernel.get(this, "attrEcsCapacityReservationAttr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EipAddress: Details about the EIP associated with the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrEipAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExpiredTime: The time when the instance expires.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
        return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GpuAmount: The number of GPUs for the instance type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGpuAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrGpuAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GpuSpec: The category of GPUs for the instance type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGpuSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrGpuSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HostName: The hostname of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName() {
        return software.amazon.jsii.Kernel.get(this, "attrHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HpcClusterId: ID of the HPC cluster to which the instance belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHpcClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrHpcClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageId: The ID of the image.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
        return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceName: The name of the instance.
     * <p>
     * Fuzzy search with the asterisk (*) wildcard characters is supported.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceNetworkType: The network type of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceType: The instance type of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceTypeFamily: The instance family of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceTypeFamily() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceTypeFamily", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InternetChargeType: The billing method for network usage.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InternetMaxBandwidthIn: The maximum inbound public bandwidth.
     * <p>
     * Unit: Mbit/s.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetMaxBandwidthIn() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InternetMaxBandwidthOut: The maximum outbound public bandwidth.
     * <p>
     * Unit: Mbit/s.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetMaxBandwidthOut() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IoOptimized: Specifies whether the instance is I/O optimized.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIoOptimized() {
        return software.amazon.jsii.Kernel.get(this, "attrIoOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute KeyPairName: The name of the SSH key pair bound to the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairName() {
        return software.amazon.jsii.Kernel.get(this, "attrKeyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LocalStorageAmount: The number of local disks attached to the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalStorageAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrLocalStorageAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LocalStorageCapacity: The capacity of local disks attached to the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalStorageCapacity() {
        return software.amazon.jsii.Kernel.get(this, "attrLocalStorageCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MaintenanceWindows: The list of operations window instances.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintenanceWindows() {
        return software.amazon.jsii.Kernel.get(this, "attrMaintenanceWindows", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Memory: The memory size of the instance.
     * <p>
     * Unit: MiB.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemory() {
        return software.amazon.jsii.Kernel.get(this, "attrMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MetadataOptions: Details about the metadata options.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetadataOptions() {
        return software.amazon.jsii.Kernel.get(this, "attrMetadataOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NetworkInterfaces: Details about the ENIs bound to the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkInterfaces() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkInterfaces", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NotifyOnMaintenance: Whether to send an event notification before the instance goes down.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotifyOnMaintenance() {
        return software.amazon.jsii.Kernel.get(this, "attrNotifyOnMaintenance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OperationLocks: The reasons why the instance was locked.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationLocks() {
        return software.amazon.jsii.Kernel.get(this, "attrOperationLocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OsName: The name of the operating system of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsName() {
        return software.amazon.jsii.Kernel.get(this, "attrOsName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OsNameEn: The English name of the operating system of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsNameEn() {
        return software.amazon.jsii.Kernel.get(this, "attrOsNameEn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OsType: The type of the operating system of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOsType() {
        return software.amazon.jsii.Kernel.get(this, "attrOsType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PaymentType: The billing method of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PeriodUnit: Renewal unit.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "attrPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrivatePoolOptionsId: Private pool ID.
     * <p>
     * When the return value is open, the private pool ID is the private pool ID assigned when the system automatically matches.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivatePoolOptionsId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivatePoolOptionsId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrivatePoolOptionsMatchCriteria: The private pool matching pattern of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivatePoolOptionsMatchCriteria() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivatePoolOptionsMatchCriteria", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicIpAddress: The public IP addresses of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RdmaIpAddress: The RDMA network IP of the HPC instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRdmaIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrRdmaIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Recyclable: Indicates whether the instance can be recycled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecyclable() {
        return software.amazon.jsii.Kernel.get(this, "attrRecyclable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RenewalStatus: The automatic renewal status of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrRenewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     * <p>
     * If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SaleCycle: Instance billing cycles.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSaleCycle() {
        return software.amazon.jsii.Kernel.get(this, "attrSaleCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityGroupIds: The IDs of the security groups to which the instance belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupIds() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SerialNumber: The serial number of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSerialNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrSerialNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SpotDuration: The protection period of the preemptible instance.
     * <p>
     * Unit: hours.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotDuration() {
        return software.amazon.jsii.Kernel.get(this, "attrSpotDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SpotPriceLimit: The maximum hourly price of the instance.
     * <p>
     * It can be accurate to three decimal places. This parameter is valid only when the SpotStrategy parameter is set to SpotWithPriceLimit.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotPriceLimit() {
        return software.amazon.jsii.Kernel.get(this, "attrSpotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SpotStrategy: The bidding policy for the pay-as-you-go instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotStrategy() {
        return software.amazon.jsii.Kernel.get(this, "attrSpotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StartTime: The time when the instance was last started.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStartTime() {
        return software.amazon.jsii.Kernel.get(this, "attrStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StoppedMode: Indicates whether the instance continues to be billed after it is stopped.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStoppedMode() {
        return software.amazon.jsii.Kernel.get(this, "attrStoppedMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The tags of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UserData: The custom data of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserData() {
        return software.amazon.jsii.Kernel.get(this, "attrUserData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcAttributes: The VPC attributes of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcAttributes() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcAttributes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneId: The zone ID of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.InstanceProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.Instance> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ecs.datasource.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.datasource.InstanceProps.Builder();
        }

        /**
         * Property instanceId: Instance ID.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Instance ID. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: Instance ID.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Instance ID. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.Instance build() {
            return new com.aliyun.ros.cdk.ecs.datasource.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
