package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Instance`.
type Instance interface {
	alicloudroscdkcore.Resource
	// Attribute ActionOnMaintenance: The O&M action attribute of the instance.
	AttrActionOnMaintenance() alicloudroscdkcore.IResolvable
	// Attribute AutoRebootTime: Automatic reboot time after instance configuration change.
	AttrAutoRebootTime() alicloudroscdkcore.IResolvable
	// Attribute AutoReleaseTime: The time when to automatically release the pay-as-you-go instance.
	AttrAutoReleaseTime() alicloudroscdkcore.IResolvable
	// Attribute AutoRenewEnabled: Whether automatic renewal has been set.
	AttrAutoRenewEnabled() alicloudroscdkcore.IResolvable
	// Attribute ClusterId: The ID of the cluster to which the instance belongs.
	AttrClusterId() alicloudroscdkcore.IResolvable
	// Attribute Cpu: The number of vCPUs.
	AttrCpu() alicloudroscdkcore.IResolvable
	// Attribute CpuOptions: Details about the CPU options.
	AttrCpuOptions() alicloudroscdkcore.IResolvable
	// Attribute CreateTime: The create time.
	AttrCreateTime() alicloudroscdkcore.IResolvable
	// Attribute CreditSpecification: The performance mode of the burstable instance.
	AttrCreditSpecification() alicloudroscdkcore.IResolvable
	// Attribute DedicatedHostAttribute: Details about the dedicated host.
	//
	// It is an array that consists of the DedicatedHostClusterId, DedicatedHostId, and DedicatedHostName parameters.
	AttrDedicatedHostAttribute() alicloudroscdkcore.IResolvable
	// Attribute DedicatedInstanceAttribute: The attributes of the instance on the dedicated host.
	AttrDedicatedInstanceAttribute() alicloudroscdkcore.IResolvable
	// Attribute DeletionProtection: The release protection attribute of the instance.
	//
	// This parameter indicates whether you can use the ECS console or call the DeleteInstance operation to release the instance.
	AttrDeletionProtection() alicloudroscdkcore.IResolvable
	// Attribute DeploymentSetGroupNo: The number of the deployment set group to which the instance belongs in a deployment set.
	AttrDeploymentSetGroupNo() alicloudroscdkcore.IResolvable
	// Attribute DeploymentSetId: The ID of the deployment set in which the instance is deployed.
	AttrDeploymentSetId() alicloudroscdkcore.IResolvable
	// Attribute Description: The description of the instance.
	AttrDescription() alicloudroscdkcore.IResolvable
	// Attribute DeviceAvailable: Indicates whether data disks can be attached to the instance.
	AttrDeviceAvailable() alicloudroscdkcore.IResolvable
	// Attribute Duration: The duration of automatic renewal.
	AttrDuration() alicloudroscdkcore.IResolvable
	// Attribute EcsCapacityReservationAttr: Details about the capacity reservation related to the instance.
	AttrEcsCapacityReservationAttr() alicloudroscdkcore.IResolvable
	// Attribute EipAddress: Details about the EIP associated with the instance.
	AttrEipAddress() alicloudroscdkcore.IResolvable
	// Attribute ExpiredTime: The time when the instance expires.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
	AttrExpiredTime() alicloudroscdkcore.IResolvable
	// Attribute GpuAmount: The number of GPUs for the instance type.
	AttrGpuAmount() alicloudroscdkcore.IResolvable
	// Attribute GpuSpec: The category of GPUs for the instance type.
	AttrGpuSpec() alicloudroscdkcore.IResolvable
	// Attribute HostName: The hostname of the instance.
	AttrHostName() alicloudroscdkcore.IResolvable
	// Attribute HpcClusterId: ID of the HPC cluster to which the instance belongs.
	AttrHpcClusterId() alicloudroscdkcore.IResolvable
	// Attribute ImageId: The ID of the image.
	AttrImageId() alicloudroscdkcore.IResolvable
	// Attribute InstanceId: The ID of the instance.
	AttrInstanceId() alicloudroscdkcore.IResolvable
	// Attribute InstanceName: The name of the instance.
	//
	// Fuzzy search with the asterisk (*) wildcard characters is supported.
	AttrInstanceName() alicloudroscdkcore.IResolvable
	// Attribute InstanceNetworkType: The network type of the instance.
	AttrInstanceNetworkType() alicloudroscdkcore.IResolvable
	// Attribute InstanceType: The instance type of the instance.
	AttrInstanceType() alicloudroscdkcore.IResolvable
	// Attribute InstanceTypeFamily: The instance family of the instance.
	AttrInstanceTypeFamily() alicloudroscdkcore.IResolvable
	// Attribute InternetChargeType: The billing method for network usage.
	AttrInternetChargeType() alicloudroscdkcore.IResolvable
	// Attribute InternetMaxBandwidthIn: The maximum inbound public bandwidth.
	//
	// Unit: Mbit/s.
	AttrInternetMaxBandwidthIn() alicloudroscdkcore.IResolvable
	// Attribute InternetMaxBandwidthOut: The maximum outbound public bandwidth.
	//
	// Unit: Mbit/s.
	AttrInternetMaxBandwidthOut() alicloudroscdkcore.IResolvable
	// Attribute IoOptimized: Specifies whether the instance is I/O optimized.
	AttrIoOptimized() alicloudroscdkcore.IResolvable
	// Attribute KeyPairName: The name of the SSH key pair bound to the instance.
	AttrKeyPairName() alicloudroscdkcore.IResolvable
	// Attribute LocalStorageAmount: The number of local disks attached to the instance.
	AttrLocalStorageAmount() alicloudroscdkcore.IResolvable
	// Attribute LocalStorageCapacity: The capacity of local disks attached to the instance.
	AttrLocalStorageCapacity() alicloudroscdkcore.IResolvable
	// Attribute MaintenanceWindows: The list of operations window instances.
	AttrMaintenanceWindows() alicloudroscdkcore.IResolvable
	// Attribute Memory: The memory size of the instance.
	//
	// Unit: MiB.
	AttrMemory() alicloudroscdkcore.IResolvable
	// Attribute MetadataOptions: Details about the metadata options.
	AttrMetadataOptions() alicloudroscdkcore.IResolvable
	// Attribute NetworkInterfaces: Details about the ENIs bound to the instance.
	AttrNetworkInterfaces() alicloudroscdkcore.IResolvable
	// Attribute NotifyOnMaintenance: Whether to send an event notification before the instance goes down.
	AttrNotifyOnMaintenance() alicloudroscdkcore.IResolvable
	// Attribute OperationLocks: The reasons why the instance was locked.
	AttrOperationLocks() alicloudroscdkcore.IResolvable
	// Attribute OsName: The name of the operating system of the instance.
	AttrOsName() alicloudroscdkcore.IResolvable
	// Attribute OsNameEn: The English name of the operating system of the instance.
	AttrOsNameEn() alicloudroscdkcore.IResolvable
	// Attribute OsType: The type of the operating system of the instance.
	AttrOsType() alicloudroscdkcore.IResolvable
	// Attribute PaymentType: The billing method of the instance.
	AttrPaymentType() alicloudroscdkcore.IResolvable
	// Attribute PeriodUnit: Renewal unit.
	AttrPeriodUnit() alicloudroscdkcore.IResolvable
	// Attribute PrivatePoolOptionsId: Private pool ID.
	//
	// When the return value is open, the private pool ID is the private pool ID assigned when the system automatically matches.
	AttrPrivatePoolOptionsId() alicloudroscdkcore.IResolvable
	// Attribute PrivatePoolOptionsMatchCriteria: The private pool matching pattern of the instance.
	AttrPrivatePoolOptionsMatchCriteria() alicloudroscdkcore.IResolvable
	// Attribute PublicIpAddress: The public IP addresses of the instance.
	AttrPublicIpAddress() alicloudroscdkcore.IResolvable
	// Attribute RdmaIpAddress: The RDMA network IP of the HPC instance.
	AttrRdmaIpAddress() alicloudroscdkcore.IResolvable
	// Attribute Recyclable: Indicates whether the instance can be recycled.
	AttrRecyclable() alicloudroscdkcore.IResolvable
	// Attribute RenewalStatus: The automatic renewal status of the instance.
	AttrRenewalStatus() alicloudroscdkcore.IResolvable
	// Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
	//
	// If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	// Attribute SaleCycle: Instance billing cycles.
	AttrSaleCycle() alicloudroscdkcore.IResolvable
	// Attribute SecurityGroupIds: The IDs of the security groups to which the instance belongs.
	AttrSecurityGroupIds() alicloudroscdkcore.IResolvable
	// Attribute SerialNumber: The serial number of the instance.
	AttrSerialNumber() alicloudroscdkcore.IResolvable
	// Attribute SpotDuration: The protection period of the preemptible instance.
	//
	// Unit: hours.
	AttrSpotDuration() alicloudroscdkcore.IResolvable
	// Attribute SpotPriceLimit: The maximum hourly price of the instance.
	//
	// It can be accurate to three decimal places. This parameter is valid only when the SpotStrategy parameter is set to SpotWithPriceLimit.
	AttrSpotPriceLimit() alicloudroscdkcore.IResolvable
	// Attribute SpotStrategy: The bidding policy for the pay-as-you-go instance.
	AttrSpotStrategy() alicloudroscdkcore.IResolvable
	// Attribute StartTime: The time when the instance was last started.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
	AttrStartTime() alicloudroscdkcore.IResolvable
	// Attribute StoppedMode: Indicates whether the instance continues to be billed after it is stopped.
	AttrStoppedMode() alicloudroscdkcore.IResolvable
	// Attribute Tags: The tags of the instance.
	AttrTags() alicloudroscdkcore.IResolvable
	// Attribute UserData: The custom data of the instance.
	AttrUserData() alicloudroscdkcore.IResolvable
	// Attribute VpcAttributes: The VPC attributes of the instance.
	AttrVpcAttributes() alicloudroscdkcore.IResolvable
	// Attribute ZoneId: The zone ID of the instance.
	AttrZoneId() alicloudroscdkcore.IResolvable
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Id() *string
	SetId(val *string)
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	// Returns a string-encoded token that resolves to the physical name that should be passed to the ROS resource.
	//
	// This value will resolve to one of the following:
	// - a concrete value (e.g. `"my-awesome-bucket"`)
	// - `undefined`, when a name should be generated by ROS
	// - a concrete name generated automatically during synthesis, in
	//    cross-environment scenarios.
	// Experimental.
	PhysicalName() *string
	Props() *InstanceProps
	SetProps(val *InstanceProps)
	Ref() *string
	Resource() alicloudroscdkcore.RosResource
	SetResource(val alicloudroscdkcore.RosResource)
	Scope() alicloudroscdkcore.Construct
	SetScope(val alicloudroscdkcore.Construct)
	// The stack in which this resource is defined.
	Stack() alicloudroscdkcore.Stack
	AddCondition(condition alicloudroscdkcore.RosCondition)
	AddCount(count interface{})
	AddDependency(resource alicloudroscdkcore.Resource)
	AddResourceDesc(desc *string)
	ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy)
	GeneratePhysicalName() *string
	GetAtt(name *string) alicloudroscdkcore.IResolvable
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	OnPrepare()
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	OnSynthesize(session constructs.ISynthesisSession)
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	OnValidate() *[]*string
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	Prepare()
	SetMetadata(key *string, value interface{})
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session alicloudroscdkcore.ISynthesisSession)
	// Returns a string representation of this construct.
	ToString() *string
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	Validate() *[]*string
}

// The jsii proxy struct for Instance
type jsiiProxy_Instance struct {
	internal.Type__alicloudroscdkcoreResource
}

func (j *jsiiProxy_Instance) AttrActionOnMaintenance() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrActionOnMaintenance",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrAutoRebootTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAutoRebootTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrAutoReleaseTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAutoReleaseTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrAutoRenewEnabled() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAutoRenewEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrClusterId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrCpu() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrCpuOptions() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCpuOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrCreditSpecification() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreditSpecification",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDedicatedHostAttribute() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDedicatedHostAttribute",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDedicatedInstanceAttribute() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDedicatedInstanceAttribute",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDeletionProtection() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDeletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDeploymentSetGroupNo() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDeploymentSetGroupNo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDeploymentSetId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDeploymentSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDeviceAvailable() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDeviceAvailable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDuration() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrEcsCapacityReservationAttr() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEcsCapacityReservationAttr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrEipAddress() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEipAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrExpiredTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrExpiredTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrGpuAmount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrGpuAmount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrGpuSpec() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrGpuSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrHostName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHostName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrHpcClusterId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHpcClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrImageId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrImageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrInstanceName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrInstanceNetworkType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrInstanceType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrInstanceTypeFamily() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceTypeFamily",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrInternetChargeType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInternetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrInternetMaxBandwidthIn() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInternetMaxBandwidthIn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrInternetMaxBandwidthOut() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInternetMaxBandwidthOut",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrIoOptimized() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIoOptimized",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrKeyPairName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrKeyPairName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrLocalStorageAmount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLocalStorageAmount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrLocalStorageCapacity() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLocalStorageCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrMaintenanceWindows() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMaintenanceWindows",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrMemory() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMemory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrMetadataOptions() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMetadataOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrNetworkInterfaces() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNetworkInterfaces",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrNotifyOnMaintenance() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNotifyOnMaintenance",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrOperationLocks() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOperationLocks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrOsName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOsName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrOsNameEn() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOsNameEn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrOsType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOsType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrPaymentType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrPeriodUnit() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPeriodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrPrivatePoolOptionsId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrivatePoolOptionsId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrPrivatePoolOptionsMatchCriteria() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrivatePoolOptionsMatchCriteria",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrPublicIpAddress() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrRdmaIpAddress() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRdmaIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrRecyclable() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRecyclable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrRenewalStatus() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRenewalStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSaleCycle() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSaleCycle",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSecurityGroupIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSerialNumber() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSerialNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSpotDuration() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSpotDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSpotPriceLimit() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSpotPriceLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSpotStrategy() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSpotStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrStartTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrStartTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrStoppedMode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrStoppedMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrUserData() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrUserData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrVpcAttributes() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcAttributes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewInstance(scope alicloudroscdkcore.Construct, id *string, props *InstanceProps, enableResourcePropertyConstraint *bool) Instance {
	_init_.Initialize()

	if err := validateNewInstanceParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_Instance{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.datasource.Instance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewInstance_Override(i Instance, scope alicloudroscdkcore.Construct, id *string, props *InstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.datasource.Instance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		i,
	)
}

func (j *jsiiProxy_Instance)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_Instance)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_Instance)SetProps(val *InstanceProps) {
	if err := j.validateSetPropsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"props",
		val,
	)
}

func (j *jsiiProxy_Instance)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_Instance)SetScope(val alicloudroscdkcore.Construct) {
	if err := j.validateSetScopeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scope",
		val,
	)
}

// Return whether the given object is a Construct.
func Instance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.datasource.Instance",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Instance) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := i.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addCondition",
		[]interface{}{condition},
	)
}

func (i *jsiiProxy_Instance) AddCount(count interface{}) {
	if err := i.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addCount",
		[]interface{}{count},
	)
}

func (i *jsiiProxy_Instance) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := i.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addDependency",
		[]interface{}{resource},
	)
}

func (i *jsiiProxy_Instance) AddResourceDesc(desc *string) {
	if err := i.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (i *jsiiProxy_Instance) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := i.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (i *jsiiProxy_Instance) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		i,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Instance) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := i.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		i,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Instance) OnPrepare() {
	_jsii_.InvokeVoid(
		i,
		"onPrepare",
		nil, // no parameters
	)
}

func (i *jsiiProxy_Instance) OnSynthesize(session constructs.ISynthesisSession) {
	if err := i.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (i *jsiiProxy_Instance) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		i,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Instance) Prepare() {
	_jsii_.InvokeVoid(
		i,
		"prepare",
		nil, // no parameters
	)
}

func (i *jsiiProxy_Instance) SetMetadata(key *string, value interface{}) {
	if err := i.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (i *jsiiProxy_Instance) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := i.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"synthesize",
		[]interface{}{session},
	)
}

func (i *jsiiProxy_Instance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		i,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Instance) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		i,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

