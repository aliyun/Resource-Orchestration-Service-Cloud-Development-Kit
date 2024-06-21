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
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instance
 */
export class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ActionOnMaintenance: The O&M action attribute of the instance.
     */
    public readonly attrActionOnMaintenance: ros.IResolvable;

    /**
     * Attribute AutoRebootTime: Automatic reboot time after instance configuration change.
     */
    public readonly attrAutoRebootTime: ros.IResolvable;

    /**
     * Attribute AutoReleaseTime: The time when to automatically release the pay-as-you-go instance.
     */
    public readonly attrAutoReleaseTime: ros.IResolvable;

    /**
     * Attribute AutoRenewEnabled: Whether automatic renewal has been set.
     */
    public readonly attrAutoRenewEnabled: ros.IResolvable;

    /**
     * Attribute ClusterId: The ID of the cluster to which the instance belongs.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Attribute Cpu: The number of vCPUs.
     */
    public readonly attrCpu: ros.IResolvable;

    /**
     * Attribute CpuOptions: Details about the CPU options.
     */
    public readonly attrCpuOptions: ros.IResolvable;

    /**
     * Attribute CreateTime: The create time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute CreditSpecification: The performance mode of the burstable instance.
     */
    public readonly attrCreditSpecification: ros.IResolvable;

    /**
     * Attribute DedicatedHostAttribute: Details about the dedicated host. It is an array that consists of the DedicatedHostClusterId, DedicatedHostId, and DedicatedHostName parameters.
     */
    public readonly attrDedicatedHostAttribute: ros.IResolvable;

    /**
     * Attribute DedicatedInstanceAttribute: The attributes of the instance on the dedicated host.
     */
    public readonly attrDedicatedInstanceAttribute: ros.IResolvable;

    /**
     * Attribute DeletionProtection: The release protection attribute of the instance. This parameter indicates whether you can use the ECS console or call the DeleteInstance operation to release the instance.
     */
    public readonly attrDeletionProtection: ros.IResolvable;

    /**
     * Attribute DeploymentSetGroupNo: The number of the deployment set group to which the instance belongs in a deployment set.
     */
    public readonly attrDeploymentSetGroupNo: ros.IResolvable;

    /**
     * Attribute DeploymentSetId: The ID of the deployment set in which the instance is deployed.
     */
    public readonly attrDeploymentSetId: ros.IResolvable;

    /**
     * Attribute Description: The description of the instance.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute DeviceAvailable: Indicates whether data disks can be attached to the instance.
     */
    public readonly attrDeviceAvailable: ros.IResolvable;

    /**
     * Attribute Duration: The duration of automatic renewal.
     */
    public readonly attrDuration: ros.IResolvable;

    /**
     * Attribute EcsCapacityReservationAttr: Details about the capacity reservation related to the instance.
     */
    public readonly attrEcsCapacityReservationAttr: ros.IResolvable;

    /**
     * Attribute EipAddress: Details about the EIP associated with the instance.
     */
    public readonly attrEipAddress: ros.IResolvable;

    /**
     * Attribute ExpiredTime: The time when the instance expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrExpiredTime: ros.IResolvable;

    /**
     * Attribute GpuAmount: The number of GPUs for the instance type.
     */
    public readonly attrGpuAmount: ros.IResolvable;

    /**
     * Attribute GpuSpec: The category of GPUs for the instance type.
     */
    public readonly attrGpuSpec: ros.IResolvable;

    /**
     * Attribute HostName: The hostname of the instance.
     */
    public readonly attrHostName: ros.IResolvable;

    /**
     * Attribute HpcClusterId: ID of the HPC cluster to which the instance belongs.
     */
    public readonly attrHpcClusterId: ros.IResolvable;

    /**
     * Attribute ImageId: The ID of the image.
     */
    public readonly attrImageId: ros.IResolvable;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute InstanceName: The name of the instance. Fuzzy search with the asterisk (*) wildcard characters is supported.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * Attribute InstanceNetworkType: The network type of the instance.
     */
    public readonly attrInstanceNetworkType: ros.IResolvable;

    /**
     * Attribute InstanceType: The instance type of the instance.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * Attribute InstanceTypeFamily: The instance family of the instance.
     */
    public readonly attrInstanceTypeFamily: ros.IResolvable;

    /**
     * Attribute InternetChargeType: The billing method for network usage.
     */
    public readonly attrInternetChargeType: ros.IResolvable;

    /**
     * Attribute InternetMaxBandwidthIn: The maximum inbound public bandwidth. Unit: Mbit/s.
     */
    public readonly attrInternetMaxBandwidthIn: ros.IResolvable;

    /**
     * Attribute InternetMaxBandwidthOut: The maximum outbound public bandwidth. Unit: Mbit/s.
     */
    public readonly attrInternetMaxBandwidthOut: ros.IResolvable;

    /**
     * Attribute IoOptimized: Specifies whether the instance is I/O optimized.
     */
    public readonly attrIoOptimized: ros.IResolvable;

    /**
     * Attribute KeyPairName: The name of the SSH key pair bound to the instance.
     */
    public readonly attrKeyPairName: ros.IResolvable;

    /**
     * Attribute LocalStorageAmount: The number of local disks attached to the instance.
     */
    public readonly attrLocalStorageAmount: ros.IResolvable;

    /**
     * Attribute LocalStorageCapacity: The capacity of local disks attached to the instance.
     */
    public readonly attrLocalStorageCapacity: ros.IResolvable;

    /**
     * Attribute MaintenanceWindows: The list of operations window instances.
     */
    public readonly attrMaintenanceWindows: ros.IResolvable;

    /**
     * Attribute Memory: The memory size of the instance. Unit: MiB.
     */
    public readonly attrMemory: ros.IResolvable;

    /**
     * Attribute MetadataOptions: Details about the metadata options.
     */
    public readonly attrMetadataOptions: ros.IResolvable;

    /**
     * Attribute NetworkInterfaces: Details about the ENIs bound to the instance.
     */
    public readonly attrNetworkInterfaces: ros.IResolvable;

    /**
     * Attribute NotifyOnMaintenance: Whether to send an event notification before the instance goes down.
     */
    public readonly attrNotifyOnMaintenance: ros.IResolvable;

    /**
     * Attribute OperationLocks: The reasons why the instance was locked.
     */
    public readonly attrOperationLocks: ros.IResolvable;

    /**
     * Attribute OsName: The name of the operating system of the instance.
     */
    public readonly attrOsName: ros.IResolvable;

    /**
     * Attribute OsNameEn: The English name of the operating system of the instance.
     */
    public readonly attrOsNameEn: ros.IResolvable;

    /**
     * Attribute OsType: The type of the operating system of the instance.
     */
    public readonly attrOsType: ros.IResolvable;

    /**
     * Attribute PaymentType: The billing method of the instance.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute PeriodUnit: Renewal unit.
     */
    public readonly attrPeriodUnit: ros.IResolvable;

    /**
     * Attribute PrivatePoolOptionsId: Private pool ID. When the return value is open, the private pool ID is the private pool ID assigned when the system automatically matches.
     */
    public readonly attrPrivatePoolOptionsId: ros.IResolvable;

    /**
     * Attribute PrivatePoolOptionsMatchCriteria: The private pool matching pattern of the instance.
     */
    public readonly attrPrivatePoolOptionsMatchCriteria: ros.IResolvable;

    /**
     * Attribute PublicIpAddress: The public IP addresses of the instance.
     */
    public readonly attrPublicIpAddress: ros.IResolvable;

    /**
     * Attribute RdmaIpAddress: The RDMA network IP of the HPC instance.
     */
    public readonly attrRdmaIpAddress: ros.IResolvable;

    /**
     * Attribute Recyclable: Indicates whether the instance can be recycled.
     */
    public readonly attrRecyclable: ros.IResolvable;

    /**
     * Attribute RenewalStatus: The automatic renewal status of the instance.
     */
    public readonly attrRenewalStatus: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute SaleCycle: Instance billing cycles.
     */
    public readonly attrSaleCycle: ros.IResolvable;

    /**
     * Attribute SecurityGroupIds: The IDs of the security groups to which the instance belongs.
     */
    public readonly attrSecurityGroupIds: ros.IResolvable;

    /**
     * Attribute SerialNumber: The serial number of the instance.
     */
    public readonly attrSerialNumber: ros.IResolvable;

    /**
     * Attribute SpotDuration: The protection period of the preemptible instance. Unit: hours.
     */
    public readonly attrSpotDuration: ros.IResolvable;

    /**
     * Attribute SpotPriceLimit: The maximum hourly price of the instance. It can be accurate to three decimal places. This parameter is valid only when the SpotStrategy parameter is set to SpotWithPriceLimit.
     */
    public readonly attrSpotPriceLimit: ros.IResolvable;

    /**
     * Attribute SpotStrategy: The bidding policy for the pay-as-you-go instance.
     */
    public readonly attrSpotStrategy: ros.IResolvable;

    /**
     * Attribute StartTime: The time when the instance was last started. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrStartTime: ros.IResolvable;

    /**
     * Attribute StoppedMode: Indicates whether the instance continues to be billed after it is stopped.
     */
    public readonly attrStoppedMode: ros.IResolvable;

    /**
     * Attribute Tags: The tags of the instance.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute UserData: The custom data of the instance.
     */
    public readonly attrUserData: ros.IResolvable;

    /**
     * Attribute VpcAttributes: The VPC attributes of the instance.
     */
    public readonly attrVpcAttributes: ros.IResolvable;

    /**
     * Attribute ZoneId: The zone ID of the instance.
     */
    public readonly attrZoneId: ros.IResolvable;

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
