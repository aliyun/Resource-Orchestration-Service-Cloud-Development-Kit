import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './ecs.generated';
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Instance`, which is used to query the information about an Elastic Compute Service (ECS) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instance
 */
export declare class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ActionOnMaintenance: The O&M action attribute of the instance.
     */
    readonly attrActionOnMaintenance: ros.IResolvable;
    /**
     * Attribute AutoRebootTime: Automatic reboot time after instance configuration change.
     */
    readonly attrAutoRebootTime: ros.IResolvable;
    /**
     * Attribute AutoReleaseTime: The time when to automatically release the pay-as-you-go instance.
     */
    readonly attrAutoReleaseTime: ros.IResolvable;
    /**
     * Attribute AutoRenewEnabled: Whether automatic renewal has been set.
     */
    readonly attrAutoRenewEnabled: ros.IResolvable;
    /**
     * Attribute ClusterId: The ID of the cluster to which the instance belongs.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Attribute Cpu: The number of vCPUs.
     */
    readonly attrCpu: ros.IResolvable;
    /**
     * Attribute CpuOptions: Details about the CPU options.
     */
    readonly attrCpuOptions: ros.IResolvable;
    /**
     * Attribute CreateTime: The create time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute CreditSpecification: The performance mode of the burstable instance.
     */
    readonly attrCreditSpecification: ros.IResolvable;
    /**
     * Attribute DedicatedHostAttribute: Details about the dedicated host. It is an array that consists of the DedicatedHostClusterId, DedicatedHostId, and DedicatedHostName parameters.
     */
    readonly attrDedicatedHostAttribute: ros.IResolvable;
    /**
     * Attribute DedicatedInstanceAttribute: The attributes of the instance on the dedicated host.
     */
    readonly attrDedicatedInstanceAttribute: ros.IResolvable;
    /**
     * Attribute DeletionProtection: The release protection attribute of the instance. This parameter indicates whether you can use the ECS console or call the DeleteInstance operation to release the instance.
     */
    readonly attrDeletionProtection: ros.IResolvable;
    /**
     * Attribute DeploymentSetGroupNo: The number of the deployment set group to which the instance belongs in a deployment set.
     */
    readonly attrDeploymentSetGroupNo: ros.IResolvable;
    /**
     * Attribute DeploymentSetId: The ID of the deployment set in which the instance is deployed.
     */
    readonly attrDeploymentSetId: ros.IResolvable;
    /**
     * Attribute Description: The description of the instance.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute DeviceAvailable: Indicates whether data disks can be attached to the instance.
     */
    readonly attrDeviceAvailable: ros.IResolvable;
    /**
     * Attribute Duration: The duration of automatic renewal.
     */
    readonly attrDuration: ros.IResolvable;
    /**
     * Attribute EcsCapacityReservationAttr: Details about the capacity reservation related to the instance.
     */
    readonly attrEcsCapacityReservationAttr: ros.IResolvable;
    /**
     * Attribute EipAddress: Details about the EIP associated with the instance.
     */
    readonly attrEipAddress: ros.IResolvable;
    /**
     * Attribute ExpiredTime: The time when the instance expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrExpiredTime: ros.IResolvable;
    /**
     * Attribute GpuAmount: The number of GPUs for the instance type.
     */
    readonly attrGpuAmount: ros.IResolvable;
    /**
     * Attribute GpuSpec: The category of GPUs for the instance type.
     */
    readonly attrGpuSpec: ros.IResolvable;
    /**
     * Attribute HostName: The hostname of the instance.
     */
    readonly attrHostName: ros.IResolvable;
    /**
     * Attribute HpcClusterId: ID of the HPC cluster to which the instance belongs.
     */
    readonly attrHpcClusterId: ros.IResolvable;
    /**
     * Attribute ImageId: The ID of the image.
     */
    readonly attrImageId: ros.IResolvable;
    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute InstanceName: The name of the instance. Fuzzy search with the asterisk (*) wildcard characters is supported.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * Attribute InstanceNetworkType: The network type of the instance.
     */
    readonly attrInstanceNetworkType: ros.IResolvable;
    /**
     * Attribute InstanceType: The instance type of the instance.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * Attribute InstanceTypeFamily: The instance family of the instance.
     */
    readonly attrInstanceTypeFamily: ros.IResolvable;
    /**
     * Attribute InternetChargeType: The billing method for network usage.
     */
    readonly attrInternetChargeType: ros.IResolvable;
    /**
     * Attribute InternetMaxBandwidthIn: The maximum inbound public bandwidth. Unit: Mbit/s.
     */
    readonly attrInternetMaxBandwidthIn: ros.IResolvable;
    /**
     * Attribute InternetMaxBandwidthOut: The maximum outbound public bandwidth. Unit: Mbit/s.
     */
    readonly attrInternetMaxBandwidthOut: ros.IResolvable;
    /**
     * Attribute IoOptimized: Specifies whether the instance is I/O optimized.
     */
    readonly attrIoOptimized: ros.IResolvable;
    /**
     * Attribute KeyPairName: The name of the SSH key pair bound to the instance.
     */
    readonly attrKeyPairName: ros.IResolvable;
    /**
     * Attribute LocalStorageAmount: The number of local disks attached to the instance.
     */
    readonly attrLocalStorageAmount: ros.IResolvable;
    /**
     * Attribute LocalStorageCapacity: The capacity of local disks attached to the instance.
     */
    readonly attrLocalStorageCapacity: ros.IResolvable;
    /**
     * Attribute MaintenanceWindows: The list of operations window instances.
     */
    readonly attrMaintenanceWindows: ros.IResolvable;
    /**
     * Attribute Memory: The memory size of the instance. Unit: MiB.
     */
    readonly attrMemory: ros.IResolvable;
    /**
     * Attribute MetadataOptions: Details about the metadata options.
     */
    readonly attrMetadataOptions: ros.IResolvable;
    /**
     * Attribute NetworkInterfaces: Details about the ENIs bound to the instance.
     */
    readonly attrNetworkInterfaces: ros.IResolvable;
    /**
     * Attribute NotifyOnMaintenance: Whether to send an event notification before the instance goes down.
     */
    readonly attrNotifyOnMaintenance: ros.IResolvable;
    /**
     * Attribute OperationLocks: The reasons why the instance was locked.
     */
    readonly attrOperationLocks: ros.IResolvable;
    /**
     * Attribute OsName: The name of the operating system of the instance.
     */
    readonly attrOsName: ros.IResolvable;
    /**
     * Attribute OsNameEn: The English name of the operating system of the instance.
     */
    readonly attrOsNameEn: ros.IResolvable;
    /**
     * Attribute OsType: The type of the operating system of the instance.
     */
    readonly attrOsType: ros.IResolvable;
    /**
     * Attribute PaymentType: The billing method of the instance.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute PeriodUnit: Renewal unit.
     */
    readonly attrPeriodUnit: ros.IResolvable;
    /**
     * Attribute PrivatePoolOptionsId: Private pool ID. When the return value is open, the private pool ID is the private pool ID assigned when the system automatically matches.
     */
    readonly attrPrivatePoolOptionsId: ros.IResolvable;
    /**
     * Attribute PrivatePoolOptionsMatchCriteria: The private pool matching pattern of the instance.
     */
    readonly attrPrivatePoolOptionsMatchCriteria: ros.IResolvable;
    /**
     * Attribute PublicIpAddress: The public IP addresses of the instance.
     */
    readonly attrPublicIpAddress: ros.IResolvable;
    /**
     * Attribute RdmaIpAddress: The RDMA network IP of the HPC instance.
     */
    readonly attrRdmaIpAddress: ros.IResolvable;
    /**
     * Attribute Recyclable: Indicates whether the instance can be recycled.
     */
    readonly attrRecyclable: ros.IResolvable;
    /**
     * Attribute RenewalStatus: The automatic renewal status of the instance.
     */
    readonly attrRenewalStatus: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute SaleCycle: Instance billing cycles.
     */
    readonly attrSaleCycle: ros.IResolvable;
    /**
     * Attribute SecurityGroupIds: The IDs of the security groups to which the instance belongs.
     */
    readonly attrSecurityGroupIds: ros.IResolvable;
    /**
     * Attribute SerialNumber: The serial number of the instance.
     */
    readonly attrSerialNumber: ros.IResolvable;
    /**
     * Attribute SpotDuration: The protection period of the preemptible instance. Unit: hours.
     */
    readonly attrSpotDuration: ros.IResolvable;
    /**
     * Attribute SpotPriceLimit: The maximum hourly price of the instance. It can be accurate to three decimal places. This parameter is valid only when the SpotStrategy parameter is set to SpotWithPriceLimit.
     */
    readonly attrSpotPriceLimit: ros.IResolvable;
    /**
     * Attribute SpotStrategy: The bidding policy for the pay-as-you-go instance.
     */
    readonly attrSpotStrategy: ros.IResolvable;
    /**
     * Attribute StartTime: The time when the instance was last started. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrStartTime: ros.IResolvable;
    /**
     * Attribute StoppedMode: Indicates whether the instance continues to be billed after it is stopped.
     */
    readonly attrStoppedMode: ros.IResolvable;
    /**
     * Attribute Tags: The tags of the instance.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute UserData: The custom data of the instance.
     */
    readonly attrUserData: ros.IResolvable;
    /**
     * Attribute VpcAttributes: The VPC attributes of the instance.
     */
    readonly attrVpcAttributes: ros.IResolvable;
    /**
     * Attribute ZoneId: The zone ID of the instance.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
