package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute ActionOnMaintenance: The O&M action attribute of the instance.
	AttrActionOnMaintenance() interface{}
	// Attribute AutoRebootTime: Automatic reboot time after instance configuration change.
	AttrAutoRebootTime() interface{}
	// Attribute AutoReleaseTime: The time when to automatically release the pay-as-you-go instance.
	AttrAutoReleaseTime() interface{}
	// Attribute AutoRenewEnabled: Whether automatic renewal has been set.
	AttrAutoRenewEnabled() interface{}
	// Attribute ClusterId: The ID of the cluster to which the instance belongs.
	AttrClusterId() interface{}
	// Attribute Cpu: The number of vCPUs.
	AttrCpu() interface{}
	// Attribute CpuOptions: Details about the CPU options.
	AttrCpuOptions() interface{}
	// Attribute CreateTime: The create time.
	AttrCreateTime() interface{}
	// Attribute CreditSpecification: The performance mode of the burstable instance.
	AttrCreditSpecification() interface{}
	// Attribute DedicatedHostAttribute: Details about the dedicated host.
	//
	// It is an array that consists of the DedicatedHostClusterId, DedicatedHostId, and DedicatedHostName parameters.
	AttrDedicatedHostAttribute() interface{}
	// Attribute DedicatedInstanceAttribute: The attributes of the instance on the dedicated host.
	AttrDedicatedInstanceAttribute() interface{}
	// Attribute DeletionProtection: The release protection attribute of the instance.
	//
	// This parameter indicates whether you can use the ECS console or call the DeleteInstance operation to release the instance.
	AttrDeletionProtection() interface{}
	// Attribute DeploymentSetGroupNo: The number of the deployment set group to which the instance belongs in a deployment set.
	AttrDeploymentSetGroupNo() interface{}
	// Attribute DeploymentSetId: The ID of the deployment set in which the instance is deployed.
	AttrDeploymentSetId() interface{}
	// Attribute Description: The description of the instance.
	AttrDescription() interface{}
	// Attribute DeviceAvailable: Indicates whether data disks can be attached to the instance.
	AttrDeviceAvailable() interface{}
	// Attribute Duration: The duration of automatic renewal.
	AttrDuration() interface{}
	// Attribute EcsCapacityReservationAttr: Details about the capacity reservation related to the instance.
	AttrEcsCapacityReservationAttr() interface{}
	// Attribute EipAddress: Details about the EIP associated with the instance.
	AttrEipAddress() interface{}
	// Attribute ExpiredTime: The time when the instance expires.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
	AttrExpiredTime() interface{}
	// Attribute GpuAmount: The number of GPUs for the instance type.
	AttrGpuAmount() interface{}
	// Attribute GpuSpec: The category of GPUs for the instance type.
	AttrGpuSpec() interface{}
	// Attribute HostName: The hostname of the instance.
	AttrHostName() interface{}
	// Attribute HpcClusterId: ID of the HPC cluster to which the instance belongs.
	AttrHpcClusterId() interface{}
	// Attribute ImageId: The ID of the image.
	AttrImageId() interface{}
	// Attribute InstanceId: The ID of the instance.
	AttrInstanceId() interface{}
	// Attribute InstanceName: The name of the instance.
	//
	// Fuzzy search with the asterisk (*) wildcard characters is supported.
	AttrInstanceName() interface{}
	// Attribute InstanceNetworkType: The network type of the instance.
	AttrInstanceNetworkType() interface{}
	// Attribute InstanceType: The instance type of the instance.
	AttrInstanceType() interface{}
	// Attribute InstanceTypeFamily: The instance family of the instance.
	AttrInstanceTypeFamily() interface{}
	// Attribute InternetChargeType: The billing method for network usage.
	AttrInternetChargeType() interface{}
	// Attribute InternetMaxBandwidthIn: The maximum inbound public bandwidth.
	//
	// Unit: Mbit/s.
	AttrInternetMaxBandwidthIn() interface{}
	// Attribute InternetMaxBandwidthOut: The maximum outbound public bandwidth.
	//
	// Unit: Mbit/s.
	AttrInternetMaxBandwidthOut() interface{}
	// Attribute IoOptimized: Specifies whether the instance is I/O optimized.
	AttrIoOptimized() interface{}
	// Attribute KeyPairName: The name of the SSH key pair bound to the instance.
	AttrKeyPairName() interface{}
	// Attribute LocalStorageAmount: The number of local disks attached to the instance.
	AttrLocalStorageAmount() interface{}
	// Attribute LocalStorageCapacity: The capacity of local disks attached to the instance.
	AttrLocalStorageCapacity() interface{}
	// Attribute MaintenanceWindows: The list of operations window instances.
	AttrMaintenanceWindows() interface{}
	// Attribute Memory: The memory size of the instance.
	//
	// Unit: MiB.
	AttrMemory() interface{}
	// Attribute MetadataOptions: Details about the metadata options.
	AttrMetadataOptions() interface{}
	// Attribute NetworkInterfaces: Details about the ENIs bound to the instance.
	AttrNetworkInterfaces() interface{}
	// Attribute NotifyOnMaintenance: Whether to send an event notification before the instance goes down.
	AttrNotifyOnMaintenance() interface{}
	// Attribute OperationLocks: The reasons why the instance was locked.
	AttrOperationLocks() interface{}
	// Attribute OsName: The name of the operating system of the instance.
	AttrOsName() interface{}
	// Attribute OsNameEn: The English name of the operating system of the instance.
	AttrOsNameEn() interface{}
	// Attribute OsType: The type of the operating system of the instance.
	AttrOsType() interface{}
	// Attribute PaymentType: The billing method of the instance.
	AttrPaymentType() interface{}
	// Attribute PeriodUnit: Renewal unit.
	AttrPeriodUnit() interface{}
	// Attribute PrivatePoolOptionsId: Private pool ID.
	//
	// When the return value is open, the private pool ID is the private pool ID assigned when the system automatically matches.
	AttrPrivatePoolOptionsId() interface{}
	// Attribute PrivatePoolOptionsMatchCriteria: The private pool matching pattern of the instance.
	AttrPrivatePoolOptionsMatchCriteria() interface{}
	// Attribute PublicIpAddress: The public IP addresses of the instance.
	AttrPublicIpAddress() interface{}
	// Attribute RdmaIpAddress: The RDMA network IP of the HPC instance.
	AttrRdmaIpAddress() interface{}
	// Attribute Recyclable: Indicates whether the instance can be recycled.
	AttrRecyclable() interface{}
	// Attribute RenewalStatus: The automatic renewal status of the instance.
	AttrRenewalStatus() interface{}
	// Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
	//
	// If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
	AttrResourceGroupId() interface{}
	// Attribute SaleCycle: Instance billing cycles.
	AttrSaleCycle() interface{}
	// Attribute SecurityGroupIds: The IDs of the security groups to which the instance belongs.
	AttrSecurityGroupIds() interface{}
	// Attribute SerialNumber: The serial number of the instance.
	AttrSerialNumber() interface{}
	// Attribute SpotDuration: The protection period of the preemptible instance.
	//
	// Unit: hours.
	AttrSpotDuration() interface{}
	// Attribute SpotPriceLimit: The maximum hourly price of the instance.
	//
	// It can be accurate to three decimal places. This parameter is valid only when the SpotStrategy parameter is set to SpotWithPriceLimit.
	AttrSpotPriceLimit() interface{}
	// Attribute SpotStrategy: The bidding policy for the pay-as-you-go instance.
	AttrSpotStrategy() interface{}
	// Attribute StartTime: The time when the instance was last started.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
	AttrStartTime() interface{}
	// Attribute StoppedMode: Indicates whether the instance continues to be billed after it is stopped.
	AttrStoppedMode() interface{}
	// Attribute Tags: The tags of the instance.
	AttrTags() interface{}
	// Attribute UserData: The custom data of the instance.
	AttrUserData() interface{}
	// Attribute VpcAttributes: The VPC attributes of the instance.
	AttrVpcAttributes() interface{}
	// Attribute ZoneId: The zone ID of the instance.
	AttrZoneId() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrActionOnMaintenance() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrActionOnMaintenance",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrAutoRebootTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoRebootTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrAutoReleaseTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoReleaseTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrAutoRenewEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoRenewEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrCpu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrCpuOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCpuOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrCreditSpecification() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreditSpecification",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDedicatedHostAttribute() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedicatedHostAttribute",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDedicatedInstanceAttribute() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedicatedInstanceAttribute",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDeletionProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDeploymentSetGroupNo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeploymentSetGroupNo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDeploymentSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeploymentSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDeviceAvailable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeviceAvailable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrEcsCapacityReservationAttr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEcsCapacityReservationAttr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrEipAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEipAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrExpiredTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpiredTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrGpuAmount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGpuAmount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrGpuSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGpuSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrHostName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHostName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrHpcClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHpcClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceTypeFamily() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceTypeFamily",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInternetChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInternetMaxBandwidthIn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetMaxBandwidthIn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInternetMaxBandwidthOut() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetMaxBandwidthOut",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrIoOptimized() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIoOptimized",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrKeyPairName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKeyPairName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrLocalStorageAmount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLocalStorageAmount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrLocalStorageCapacity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLocalStorageCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrMaintenanceWindows() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaintenanceWindows",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrMemory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMemory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrMetadataOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMetadataOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrNetworkInterfaces() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkInterfaces",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrNotifyOnMaintenance() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNotifyOnMaintenance",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrOperationLocks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOperationLocks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrOsName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOsName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrOsNameEn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOsNameEn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrOsType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOsType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPeriodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPrivatePoolOptionsId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivatePoolOptionsId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPrivatePoolOptionsMatchCriteria() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivatePoolOptionsMatchCriteria",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPublicIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrRdmaIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRdmaIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrRecyclable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRecyclable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrRenewalStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRenewalStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSaleCycle() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSaleCycle",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSecurityGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSerialNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSerialNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSpotDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpotDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSpotPriceLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpotPriceLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSpotStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpotStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrStartTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStartTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrStoppedMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStoppedMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrUserData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVpcAttributes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcAttributes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

