import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instance
 */
export interface InstanceProps {

    /**
     * Property instanceId: Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;

    /**
     * Attribute ActionOnMaintenance: The O&M action attribute of the instance.
     */
    readonly attrActionOnMaintenance: ros.IResolvable | string;

    /**
     * Attribute AutoRebootTime: Automatic reboot time after instance configuration change.
     */
    readonly attrAutoRebootTime: ros.IResolvable | string;

    /**
     * Attribute AutoReleaseTime: The time when to automatically release the pay-as-you-go instance.
     */
    readonly attrAutoReleaseTime: ros.IResolvable | string;

    /**
     * Attribute AutoRenewEnabled: Whether automatic renewal has been set.
     */
    readonly attrAutoRenewEnabled: ros.IResolvable | string;

    /**
     * Attribute ClusterId: The ID of the cluster to which the instance belongs.
     */
    readonly attrClusterId: ros.IResolvable | string;

    /**
     * Attribute Cpu: The number of vCPUs.
     */
    readonly attrCpu: ros.IResolvable | string;

    /**
     * Attribute CpuOptions: Details about the CPU options.
     */
    readonly attrCpuOptions: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The create time.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CreditSpecification: The performance mode of the burstable instance.
     */
    readonly attrCreditSpecification: ros.IResolvable | string;

    /**
     * Attribute DedicatedHostAttribute: Details about the dedicated host. It is an array that consists of the DedicatedHostClusterId, DedicatedHostId, and DedicatedHostName parameters.
     */
    readonly attrDedicatedHostAttribute: ros.IResolvable | string;

    /**
     * Attribute DedicatedInstanceAttribute: The attributes of the instance on the dedicated host.
     */
    readonly attrDedicatedInstanceAttribute: ros.IResolvable | string;

    /**
     * Attribute DeletionProtection: The release protection attribute of the instance. This parameter indicates whether you can use the ECS console or call the DeleteInstance operation to release the instance.
     */
    readonly attrDeletionProtection: ros.IResolvable | string;

    /**
     * Attribute DeploymentSetGroupNo: The number of the deployment set group to which the instance belongs in a deployment set.
     */
    readonly attrDeploymentSetGroupNo: ros.IResolvable | string;

    /**
     * Attribute DeploymentSetId: The ID of the deployment set in which the instance is deployed.
     */
    readonly attrDeploymentSetId: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the instance.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute DeviceAvailable: Indicates whether data disks can be attached to the instance.
     */
    readonly attrDeviceAvailable: ros.IResolvable | string;

    /**
     * Attribute Duration: The duration of automatic renewal.
     */
    readonly attrDuration: ros.IResolvable | string;

    /**
     * Attribute EcsCapacityReservationAttr: Details about the capacity reservation related to the instance.
     */
    readonly attrEcsCapacityReservationAttr: ros.IResolvable | string;

    /**
     * Attribute EipAddress: Details about the EIP associated with the instance.
     */
    readonly attrEipAddress: ros.IResolvable | string;

    /**
     * Attribute ExpiredTime: The time when the instance expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrExpiredTime: ros.IResolvable | string;

    /**
     * Attribute GpuAmount: The number of GPUs for the instance type.
     */
    readonly attrGpuAmount: ros.IResolvable | string;

    /**
     * Attribute GpuSpec: The category of GPUs for the instance type.
     */
    readonly attrGpuSpec: ros.IResolvable | string;

    /**
     * Attribute HostName: The hostname of the instance.
     */
    readonly attrHostName: ros.IResolvable | string;

    /**
     * Attribute HpcClusterId: ID of the HPC cluster to which the instance belongs.
     */
    readonly attrHpcClusterId: ros.IResolvable | string;

    /**
     * Attribute ImageId: The ID of the image.
     */
    readonly attrImageId: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: The name of the instance. Fuzzy search with the asterisk (*) wildcard characters is supported.
     */
    readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute InstanceNetworkType: The network type of the instance.
     */
    readonly attrInstanceNetworkType: ros.IResolvable | string;

    /**
     * Attribute InstanceType: The instance type of the instance.
     */
    readonly attrInstanceType: ros.IResolvable | string;

    /**
     * Attribute InstanceTypeFamily: The instance family of the instance.
     */
    readonly attrInstanceTypeFamily: ros.IResolvable | string;

    /**
     * Attribute InternetChargeType: The billing method for network usage.
     */
    readonly attrInternetChargeType: ros.IResolvable | string;

    /**
     * Attribute InternetMaxBandwidthIn: The maximum inbound public bandwidth. Unit: Mbit/s.
     */
    readonly attrInternetMaxBandwidthIn: ros.IResolvable | string;

    /**
     * Attribute InternetMaxBandwidthOut: The maximum outbound public bandwidth. Unit: Mbit/s.
     */
    readonly attrInternetMaxBandwidthOut: ros.IResolvable | string;

    /**
     * Attribute IoOptimized: Specifies whether the instance is I/O optimized.
     */
    readonly attrIoOptimized: ros.IResolvable | string;

    /**
     * Attribute KeyPairName: The name of the SSH key pair bound to the instance.
     */
    readonly attrKeyPairName: ros.IResolvable | string;

    /**
     * Attribute LocalStorageAmount: The number of local disks attached to the instance.
     */
    readonly attrLocalStorageAmount: ros.IResolvable | string;

    /**
     * Attribute LocalStorageCapacity: The capacity of local disks attached to the instance.
     */
    readonly attrLocalStorageCapacity: ros.IResolvable | string;

    /**
     * Attribute MaintenanceWindows: The list of operations window instances.
     */
    readonly attrMaintenanceWindows: ros.IResolvable | string;

    /**
     * Attribute Memory: The memory size of the instance. Unit: MiB.
     */
    readonly attrMemory: ros.IResolvable | string;

    /**
     * Attribute MetadataOptions: Details about the metadata options.
     */
    readonly attrMetadataOptions: ros.IResolvable | string;

    /**
     * Attribute NetworkInterfaces: Details about the ENIs bound to the instance.
     */
    readonly attrNetworkInterfaces: ros.IResolvable | string;

    /**
     * Attribute NotifyOnMaintenance: Whether to send an event notification before the instance goes down.
     */
    readonly attrNotifyOnMaintenance: ros.IResolvable | string;

    /**
     * Attribute OperationLocks: The reasons why the instance was locked.
     */
    readonly attrOperationLocks: ros.IResolvable | string;

    /**
     * Attribute OsName: The name of the operating system of the instance.
     */
    readonly attrOsName: ros.IResolvable | string;

    /**
     * Attribute OsNameEn: The English name of the operating system of the instance.
     */
    readonly attrOsNameEn: ros.IResolvable | string;

    /**
     * Attribute OsType: The type of the operating system of the instance.
     */
    readonly attrOsType: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The billing method of the instance.
     */
    readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute PeriodUnit: Renewal unit.
     */
    readonly attrPeriodUnit: ros.IResolvable | string;

    /**
     * Attribute PrivatePoolOptionsId: Private pool ID. When the return value is open, the private pool ID is the private pool ID assigned when the system automatically matches.
     */
    readonly attrPrivatePoolOptionsId: ros.IResolvable | string;

    /**
     * Attribute PrivatePoolOptionsMatchCriteria: The private pool matching pattern of the instance.
     */
    readonly attrPrivatePoolOptionsMatchCriteria: ros.IResolvable | string;

    /**
     * Attribute PublicIpAddress: The public IP addresses of the instance.
     */
    readonly attrPublicIpAddress: ros.IResolvable | string;

    /**
     * Attribute RdmaIpAddress: The RDMA network IP of the HPC instance.
     */
    readonly attrRdmaIpAddress: ros.IResolvable | string;

    /**
     * Attribute Recyclable: Indicates whether the instance can be recycled.
     */
    readonly attrRecyclable: ros.IResolvable | string;

    /**
     * Attribute RenewalStatus: The automatic renewal status of the instance.
     */
    readonly attrRenewalStatus: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SaleCycle: Instance billing cycles.
     */
    readonly attrSaleCycle: ros.IResolvable | string;

    /**
     * Attribute SecurityGroupIds: The IDs of the security groups to which the instance belongs.
     */
    readonly attrSecurityGroupIds: ros.IResolvable | string;

    /**
     * Attribute SerialNumber: The serial number of the instance.
     */
    readonly attrSerialNumber: ros.IResolvable | string;

    /**
     * Attribute SpotDuration: The protection period of the preemptible instance. Unit: hours.
     */
    readonly attrSpotDuration: ros.IResolvable | string;

    /**
     * Attribute SpotPriceLimit: The maximum hourly price of the instance. It can be accurate to three decimal places. This parameter is valid only when the SpotStrategy parameter is set to SpotWithPriceLimit.
     */
    readonly attrSpotPriceLimit: ros.IResolvable | string;

    /**
     * Attribute SpotStrategy: The bidding policy for the pay-as-you-go instance.
     */
    readonly attrSpotStrategy: ros.IResolvable | string;

    /**
     * Attribute StartTime: The time when the instance was last started. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrStartTime: ros.IResolvable | string;

    /**
     * Attribute StoppedMode: Indicates whether the instance continues to be billed after it is stopped.
     */
    readonly attrStoppedMode: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the instance.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute UserData: The custom data of the instance.
     */
    readonly attrUserData: ros.IResolvable | string;

    /**
     * Attribute VpcAttributes: The VPC attributes of the instance.
     */
    readonly attrVpcAttributes: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The zone ID of the instance.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Instance`, which is used to query the information about an Elastic Compute Service (ECS) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instance
 */
export class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ActionOnMaintenance: The O&M action attribute of the instance.
     */
    public readonly attrActionOnMaintenance: ros.IResolvable | string;

    /**
     * Attribute AutoRebootTime: Automatic reboot time after instance configuration change.
     */
    public readonly attrAutoRebootTime: ros.IResolvable | string;

    /**
     * Attribute AutoReleaseTime: The time when to automatically release the pay-as-you-go instance.
     */
    public readonly attrAutoReleaseTime: ros.IResolvable | string;

    /**
     * Attribute AutoRenewEnabled: Whether automatic renewal has been set.
     */
    public readonly attrAutoRenewEnabled: ros.IResolvable | string;

    /**
     * Attribute ClusterId: The ID of the cluster to which the instance belongs.
     */
    public readonly attrClusterId: ros.IResolvable | string;

    /**
     * Attribute Cpu: The number of vCPUs.
     */
    public readonly attrCpu: ros.IResolvable | string;

    /**
     * Attribute CpuOptions: Details about the CPU options.
     */
    public readonly attrCpuOptions: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The create time.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CreditSpecification: The performance mode of the burstable instance.
     */
    public readonly attrCreditSpecification: ros.IResolvable | string;

    /**
     * Attribute DedicatedHostAttribute: Details about the dedicated host. It is an array that consists of the DedicatedHostClusterId, DedicatedHostId, and DedicatedHostName parameters.
     */
    public readonly attrDedicatedHostAttribute: ros.IResolvable | string;

    /**
     * Attribute DedicatedInstanceAttribute: The attributes of the instance on the dedicated host.
     */
    public readonly attrDedicatedInstanceAttribute: ros.IResolvable | string;

    /**
     * Attribute DeletionProtection: The release protection attribute of the instance. This parameter indicates whether you can use the ECS console or call the DeleteInstance operation to release the instance.
     */
    public readonly attrDeletionProtection: ros.IResolvable | string;

    /**
     * Attribute DeploymentSetGroupNo: The number of the deployment set group to which the instance belongs in a deployment set.
     */
    public readonly attrDeploymentSetGroupNo: ros.IResolvable | string;

    /**
     * Attribute DeploymentSetId: The ID of the deployment set in which the instance is deployed.
     */
    public readonly attrDeploymentSetId: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the instance.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute DeviceAvailable: Indicates whether data disks can be attached to the instance.
     */
    public readonly attrDeviceAvailable: ros.IResolvable | string;

    /**
     * Attribute Duration: The duration of automatic renewal.
     */
    public readonly attrDuration: ros.IResolvable | string;

    /**
     * Attribute EcsCapacityReservationAttr: Details about the capacity reservation related to the instance.
     */
    public readonly attrEcsCapacityReservationAttr: ros.IResolvable | string;

    /**
     * Attribute EipAddress: Details about the EIP associated with the instance.
     */
    public readonly attrEipAddress: ros.IResolvable | string;

    /**
     * Attribute ExpiredTime: The time when the instance expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrExpiredTime: ros.IResolvable | string;

    /**
     * Attribute GpuAmount: The number of GPUs for the instance type.
     */
    public readonly attrGpuAmount: ros.IResolvable | string;

    /**
     * Attribute GpuSpec: The category of GPUs for the instance type.
     */
    public readonly attrGpuSpec: ros.IResolvable | string;

    /**
     * Attribute HostName: The hostname of the instance.
     */
    public readonly attrHostName: ros.IResolvable | string;

    /**
     * Attribute HpcClusterId: ID of the HPC cluster to which the instance belongs.
     */
    public readonly attrHpcClusterId: ros.IResolvable | string;

    /**
     * Attribute ImageId: The ID of the image.
     */
    public readonly attrImageId: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: The name of the instance. Fuzzy search with the asterisk (*) wildcard characters is supported.
     */
    public readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute InstanceNetworkType: The network type of the instance.
     */
    public readonly attrInstanceNetworkType: ros.IResolvable | string;

    /**
     * Attribute InstanceType: The instance type of the instance.
     */
    public readonly attrInstanceType: ros.IResolvable | string;

    /**
     * Attribute InstanceTypeFamily: The instance family of the instance.
     */
    public readonly attrInstanceTypeFamily: ros.IResolvable | string;

    /**
     * Attribute InternetChargeType: The billing method for network usage.
     */
    public readonly attrInternetChargeType: ros.IResolvable | string;

    /**
     * Attribute InternetMaxBandwidthIn: The maximum inbound public bandwidth. Unit: Mbit/s.
     */
    public readonly attrInternetMaxBandwidthIn: ros.IResolvable | string;

    /**
     * Attribute InternetMaxBandwidthOut: The maximum outbound public bandwidth. Unit: Mbit/s.
     */
    public readonly attrInternetMaxBandwidthOut: ros.IResolvable | string;

    /**
     * Attribute IoOptimized: Specifies whether the instance is I/O optimized.
     */
    public readonly attrIoOptimized: ros.IResolvable | string;

    /**
     * Attribute KeyPairName: The name of the SSH key pair bound to the instance.
     */
    public readonly attrKeyPairName: ros.IResolvable | string;

    /**
     * Attribute LocalStorageAmount: The number of local disks attached to the instance.
     */
    public readonly attrLocalStorageAmount: ros.IResolvable | string;

    /**
     * Attribute LocalStorageCapacity: The capacity of local disks attached to the instance.
     */
    public readonly attrLocalStorageCapacity: ros.IResolvable | string;

    /**
     * Attribute MaintenanceWindows: The list of operations window instances.
     */
    public readonly attrMaintenanceWindows: ros.IResolvable | string;

    /**
     * Attribute Memory: The memory size of the instance. Unit: MiB.
     */
    public readonly attrMemory: ros.IResolvable | string;

    /**
     * Attribute MetadataOptions: Details about the metadata options.
     */
    public readonly attrMetadataOptions: ros.IResolvable | string;

    /**
     * Attribute NetworkInterfaces: Details about the ENIs bound to the instance.
     */
    public readonly attrNetworkInterfaces: ros.IResolvable | string;

    /**
     * Attribute NotifyOnMaintenance: Whether to send an event notification before the instance goes down.
     */
    public readonly attrNotifyOnMaintenance: ros.IResolvable | string;

    /**
     * Attribute OperationLocks: The reasons why the instance was locked.
     */
    public readonly attrOperationLocks: ros.IResolvable | string;

    /**
     * Attribute OsName: The name of the operating system of the instance.
     */
    public readonly attrOsName: ros.IResolvable | string;

    /**
     * Attribute OsNameEn: The English name of the operating system of the instance.
     */
    public readonly attrOsNameEn: ros.IResolvable | string;

    /**
     * Attribute OsType: The type of the operating system of the instance.
     */
    public readonly attrOsType: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The billing method of the instance.
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute PeriodUnit: Renewal unit.
     */
    public readonly attrPeriodUnit: ros.IResolvable | string;

    /**
     * Attribute PrivatePoolOptionsId: Private pool ID. When the return value is open, the private pool ID is the private pool ID assigned when the system automatically matches.
     */
    public readonly attrPrivatePoolOptionsId: ros.IResolvable | string;

    /**
     * Attribute PrivatePoolOptionsMatchCriteria: The private pool matching pattern of the instance.
     */
    public readonly attrPrivatePoolOptionsMatchCriteria: ros.IResolvable | string;

    /**
     * Attribute PublicIpAddress: The public IP addresses of the instance.
     */
    public readonly attrPublicIpAddress: ros.IResolvable | string;

    /**
     * Attribute RdmaIpAddress: The RDMA network IP of the HPC instance.
     */
    public readonly attrRdmaIpAddress: ros.IResolvable | string;

    /**
     * Attribute Recyclable: Indicates whether the instance can be recycled.
     */
    public readonly attrRecyclable: ros.IResolvable | string;

    /**
     * Attribute RenewalStatus: The automatic renewal status of the instance.
     */
    public readonly attrRenewalStatus: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SaleCycle: Instance billing cycles.
     */
    public readonly attrSaleCycle: ros.IResolvable | string;

    /**
     * Attribute SecurityGroupIds: The IDs of the security groups to which the instance belongs.
     */
    public readonly attrSecurityGroupIds: ros.IResolvable | string;

    /**
     * Attribute SerialNumber: The serial number of the instance.
     */
    public readonly attrSerialNumber: ros.IResolvable | string;

    /**
     * Attribute SpotDuration: The protection period of the preemptible instance. Unit: hours.
     */
    public readonly attrSpotDuration: ros.IResolvable | string;

    /**
     * Attribute SpotPriceLimit: The maximum hourly price of the instance. It can be accurate to three decimal places. This parameter is valid only when the SpotStrategy parameter is set to SpotWithPriceLimit.
     */
    public readonly attrSpotPriceLimit: ros.IResolvable | string;

    /**
     * Attribute SpotStrategy: The bidding policy for the pay-as-you-go instance.
     */
    public readonly attrSpotStrategy: ros.IResolvable | string;

    /**
     * Attribute StartTime: The time when the instance was last started. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrStartTime: ros.IResolvable | string;

    /**
     * Attribute StoppedMode: Indicates whether the instance continues to be billed after it is stopped.
     */
    public readonly attrStoppedMode: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the instance.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute UserData: The custom data of the instance.
     */
    public readonly attrUserData: ros.IResolvable | string;

    /**
     * Attribute VpcAttributes: The VPC attributes of the instance.
     */
    public readonly attrVpcAttributes: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The zone ID of the instance.
     */
    public readonly attrZoneId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance = new RosInstance(this, id,  {
            instanceId: props.instanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrActionOnMaintenance = rosInstance.attrActionOnMaintenance;
        this.attrAutoRebootTime = rosInstance.attrAutoRebootTime;
        this.attrAutoReleaseTime = rosInstance.attrAutoReleaseTime;
        this.attrAutoRenewEnabled = rosInstance.attrAutoRenewEnabled;
        this.attrClusterId = rosInstance.attrClusterId;
        this.attrCpu = rosInstance.attrCpu;
        this.attrCpuOptions = rosInstance.attrCpuOptions;
        this.attrCreateTime = rosInstance.attrCreateTime;
        this.attrCreditSpecification = rosInstance.attrCreditSpecification;
        this.attrDedicatedHostAttribute = rosInstance.attrDedicatedHostAttribute;
        this.attrDedicatedInstanceAttribute = rosInstance.attrDedicatedInstanceAttribute;
        this.attrDeletionProtection = rosInstance.attrDeletionProtection;
        this.attrDeploymentSetGroupNo = rosInstance.attrDeploymentSetGroupNo;
        this.attrDeploymentSetId = rosInstance.attrDeploymentSetId;
        this.attrDescription = rosInstance.attrDescription;
        this.attrDeviceAvailable = rosInstance.attrDeviceAvailable;
        this.attrDuration = rosInstance.attrDuration;
        this.attrEcsCapacityReservationAttr = rosInstance.attrEcsCapacityReservationAttr;
        this.attrEipAddress = rosInstance.attrEipAddress;
        this.attrExpiredTime = rosInstance.attrExpiredTime;
        this.attrGpuAmount = rosInstance.attrGpuAmount;
        this.attrGpuSpec = rosInstance.attrGpuSpec;
        this.attrHostName = rosInstance.attrHostName;
        this.attrHpcClusterId = rosInstance.attrHpcClusterId;
        this.attrImageId = rosInstance.attrImageId;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrInstanceNetworkType = rosInstance.attrInstanceNetworkType;
        this.attrInstanceType = rosInstance.attrInstanceType;
        this.attrInstanceTypeFamily = rosInstance.attrInstanceTypeFamily;
        this.attrInternetChargeType = rosInstance.attrInternetChargeType;
        this.attrInternetMaxBandwidthIn = rosInstance.attrInternetMaxBandwidthIn;
        this.attrInternetMaxBandwidthOut = rosInstance.attrInternetMaxBandwidthOut;
        this.attrIoOptimized = rosInstance.attrIoOptimized;
        this.attrKeyPairName = rosInstance.attrKeyPairName;
        this.attrLocalStorageAmount = rosInstance.attrLocalStorageAmount;
        this.attrLocalStorageCapacity = rosInstance.attrLocalStorageCapacity;
        this.attrMaintenanceWindows = rosInstance.attrMaintenanceWindows;
        this.attrMemory = rosInstance.attrMemory;
        this.attrMetadataOptions = rosInstance.attrMetadataOptions;
        this.attrNetworkInterfaces = rosInstance.attrNetworkInterfaces;
        this.attrNotifyOnMaintenance = rosInstance.attrNotifyOnMaintenance;
        this.attrOperationLocks = rosInstance.attrOperationLocks;
        this.attrOsName = rosInstance.attrOsName;
        this.attrOsNameEn = rosInstance.attrOsNameEn;
        this.attrOsType = rosInstance.attrOsType;
        this.attrPaymentType = rosInstance.attrPaymentType;
        this.attrPeriodUnit = rosInstance.attrPeriodUnit;
        this.attrPrivatePoolOptionsId = rosInstance.attrPrivatePoolOptionsId;
        this.attrPrivatePoolOptionsMatchCriteria = rosInstance.attrPrivatePoolOptionsMatchCriteria;
        this.attrPublicIpAddress = rosInstance.attrPublicIpAddress;
        this.attrRdmaIpAddress = rosInstance.attrRdmaIpAddress;
        this.attrRecyclable = rosInstance.attrRecyclable;
        this.attrRenewalStatus = rosInstance.attrRenewalStatus;
        this.attrResourceGroupId = rosInstance.attrResourceGroupId;
        this.attrSaleCycle = rosInstance.attrSaleCycle;
        this.attrSecurityGroupIds = rosInstance.attrSecurityGroupIds;
        this.attrSerialNumber = rosInstance.attrSerialNumber;
        this.attrSpotDuration = rosInstance.attrSpotDuration;
        this.attrSpotPriceLimit = rosInstance.attrSpotPriceLimit;
        this.attrSpotStrategy = rosInstance.attrSpotStrategy;
        this.attrStartTime = rosInstance.attrStartTime;
        this.attrStoppedMode = rosInstance.attrStoppedMode;
        this.attrTags = rosInstance.attrTags;
        this.attrUserData = rosInstance.attrUserData;
        this.attrVpcAttributes = rosInstance.attrVpcAttributes;
        this.attrZoneId = rosInstance.attrZoneId;
    }
}
