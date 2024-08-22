package alicloudroscdkecs

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::InstanceGroup`, which is used to create a group of Elastic Compute Service (ECS) instances that have the same configurations.
type RosInstanceGroup interface {
	alicloudroscdkcore.RosResource
	Affinity() interface{}
	SetAffinity(val interface{})
	AllocatePublicIp() interface{}
	SetAllocatePublicIp(val interface{})
	AttrHostNames() alicloudroscdkcore.IResolvable
	AttrInnerIps() alicloudroscdkcore.IResolvable
	AttrInstanceIds() alicloudroscdkcore.IResolvable
	AttrIpv6Addresses() alicloudroscdkcore.IResolvable
	AttrIpv6AddressIds() alicloudroscdkcore.IResolvable
	AttrOrderId() alicloudroscdkcore.IResolvable
	AttrPrivateIps() alicloudroscdkcore.IResolvable
	AttrPublicIps() alicloudroscdkcore.IResolvable
	AttrZoneIds() alicloudroscdkcore.IResolvable
	AutoReleaseTime() interface{}
	SetAutoReleaseTime(val interface{})
	AutoRenew() interface{}
	SetAutoRenew(val interface{})
	AutoRenewPeriod() interface{}
	SetAutoRenewPeriod(val interface{})
	CpuOptions() interface{}
	SetCpuOptions(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	CreditSpecification() interface{}
	SetCreditSpecification(val interface{})
	DedicatedHostId() interface{}
	SetDedicatedHostId(val interface{})
	DeletionForce() interface{}
	SetDeletionForce(val interface{})
	DeletionProtection() interface{}
	SetDeletionProtection(val interface{})
	DeploymentSetGroupNo() interface{}
	SetDeploymentSetGroupNo(val interface{})
	DeploymentSetId() interface{}
	SetDeploymentSetId(val interface{})
	Description() interface{}
	SetDescription(val interface{})
	DiskMappings() interface{}
	SetDiskMappings(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EniMappings() interface{}
	SetEniMappings(val interface{})
	HostName() interface{}
	SetHostName(val interface{})
	HostNames() interface{}
	SetHostNames(val interface{})
	HpcClusterId() interface{}
	SetHpcClusterId(val interface{})
	HttpEndpoint() interface{}
	SetHttpEndpoint(val interface{})
	HttpTokens() interface{}
	SetHttpTokens(val interface{})
	ImageFamily() interface{}
	SetImageFamily(val interface{})
	ImageId() interface{}
	SetImageId(val interface{})
	ImageOptions() interface{}
	SetImageOptions(val interface{})
	InstanceChargeType() interface{}
	SetInstanceChargeType(val interface{})
	InstanceName() interface{}
	SetInstanceName(val interface{})
	InstanceType() interface{}
	SetInstanceType(val interface{})
	InternetChargeType() interface{}
	SetInternetChargeType(val interface{})
	InternetMaxBandwidthOut() interface{}
	SetInternetMaxBandwidthOut(val interface{})
	IoOptimized() interface{}
	SetIoOptimized(val interface{})
	Ipv6AddressCount() interface{}
	SetIpv6AddressCount(val interface{})
	Ipv6Addresses() interface{}
	SetIpv6Addresses(val interface{})
	KeyPairName() interface{}
	SetKeyPairName(val interface{})
	LaunchTemplateId() interface{}
	SetLaunchTemplateId(val interface{})
	LaunchTemplateName() interface{}
	SetLaunchTemplateName(val interface{})
	LaunchTemplateVersion() interface{}
	SetLaunchTemplateVersion(val interface{})
	// The logical ID for this stack element.
	//
	// The logical ID of the element
	// is calculated from the path of the resource node in the construct tree.
	//
	// To override this value, use `overrideLogicalId(newLogicalId)`.
	//
	// Returns: the logical ID as a stringified token. This value will only get
	// resolved during synthesis.
	LogicalId() *string
	MaxAmount() interface{}
	SetMaxAmount(val interface{})
	NetworkInterfaceQueueNumber() interface{}
	SetNetworkInterfaceQueueNumber(val interface{})
	NetworkOptions() interface{}
	SetNetworkOptions(val interface{})
	NetworkType() interface{}
	SetNetworkType(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	Password() interface{}
	SetPassword(val interface{})
	PasswordInherit() interface{}
	SetPasswordInherit(val interface{})
	Period() interface{}
	SetPeriod(val interface{})
	PeriodUnit() interface{}
	SetPeriodUnit(val interface{})
	PrivateIpAddress() interface{}
	SetPrivateIpAddress(val interface{})
	PrivatePoolOptions() interface{}
	SetPrivatePoolOptions(val interface{})
	RamRoleName() interface{}
	SetRamRoleName(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	ResourceGroupId() interface{}
	SetResourceGroupId(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	SchedulerOptions() interface{}
	SetSchedulerOptions(val interface{})
	SecurityEnhancementStrategy() interface{}
	SetSecurityEnhancementStrategy(val interface{})
	SecurityGroupId() interface{}
	SetSecurityGroupId(val interface{})
	SecurityGroupIds() interface{}
	SetSecurityGroupIds(val interface{})
	SecurityOptions() interface{}
	SetSecurityOptions(val interface{})
	SpotDuration() interface{}
	SetSpotDuration(val interface{})
	SpotInterruptionBehavior() interface{}
	SetSpotInterruptionBehavior(val interface{})
	SpotPriceLimit() interface{}
	SetSpotPriceLimit(val interface{})
	SpotStrategy() interface{}
	SetSpotStrategy(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	StorageSetId() interface{}
	SetStorageSetId(val interface{})
	StorageSetPartitionNumber() interface{}
	SetStorageSetPartitionNumber(val interface{})
	SystemDiskAutoSnapshotPolicyId() interface{}
	SetSystemDiskAutoSnapshotPolicyId(val interface{})
	SystemDiskBurstingEnabled() interface{}
	SetSystemDiskBurstingEnabled(val interface{})
	SystemDiskCategory() interface{}
	SetSystemDiskCategory(val interface{})
	SystemDiskDescription() interface{}
	SetSystemDiskDescription(val interface{})
	SystemDiskDiskName() interface{}
	SetSystemDiskDiskName(val interface{})
	SystemDiskEncryptAlgorithm() interface{}
	SetSystemDiskEncryptAlgorithm(val interface{})
	SystemDiskEncrypted() interface{}
	SetSystemDiskEncrypted(val interface{})
	SystemDiskKmsKeyId() interface{}
	SetSystemDiskKmsKeyId(val interface{})
	SystemDiskPerformanceLevel() interface{}
	SetSystemDiskPerformanceLevel(val interface{})
	SystemDiskProvisionedIops() interface{}
	SetSystemDiskProvisionedIops(val interface{})
	SystemDiskSize() interface{}
	SetSystemDiskSize(val interface{})
	SystemDiskStorageClusterId() interface{}
	SetSystemDiskStorageClusterId(val interface{})
	Tags() *[]*RosInstanceGroup_TagsProperty
	SetTags(val *[]*RosInstanceGroup_TagsProperty)
	Tenancy() interface{}
	SetTenancy(val interface{})
	UniqueSuffix() interface{}
	SetUniqueSuffix(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	UpdatePolicy() interface{}
	SetUpdatePolicy(val interface{})
	UseAdditionalService() interface{}
	SetUseAdditionalService(val interface{})
	UserData() interface{}
	SetUserData(val interface{})
	VpcId() interface{}
	SetVpcId(val interface{})
	VSwitchId() interface{}
	SetVSwitchId(val interface{})
	ZoneId() interface{}
	SetZoneId(val interface{})
	ZoneIds() interface{}
	SetZoneIds(val interface{})
	AddCondition(con alicloudroscdkcore.RosCondition)
	AddCount(count interface{})
	// Syntactic sugar for `addOverride(path, undefined)`.
	AddDeletionOverride(path *string)
	// Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.
	//
	// This can be used for resources across stacks (or nested stack) boundaries
	// and the dependency will automatically be transferred to the relevant scope.
	AddDependsOn(target alicloudroscdkcore.RosResource)
	AddDesc(desc *string)
	AddMetaData(key *string, value interface{})
	// Adds an override to the synthesized ROS resource.
	//
	// To add a
	// property override, either use `addPropertyOverride` or prefix `path` with
	// "Properties." (i.e. `Properties.TopicName`).
	//
	// If the override is nested, separate each nested level using a dot (.) in the path parameter.
	// If there is an array as part of the nesting, specify the index in the path.
	//
	// For example,
	// ```typescript
	// addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute'])
	// addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE')
	// ```
	// would add the overrides
	// ```json
	// "Properties": {
	//    "GlobalSecondaryIndexes": [
	//      {
	//        "Projection": {
	//          "NonKeyAttributes": [ "myattribute" ]
	//          ...
	//        }
	//        ...
	//      },
	//      {
	//        "ProjectionType": "INCLUDE"
	//        ...
	//      },
	//    ]
	//    ...
	// }
	// ```.
	AddOverride(path *string, value interface{})
	// Adds an override that deletes the value of a property from the resource definition.
	AddPropertyDeletionOverride(propertyPath *string)
	// Adds an override to a resource property.
	//
	// Syntactic sugar for `addOverride("Properties.<...>", value)`.
	AddPropertyOverride(propertyPath *string, value interface{})
	AddRosDependency(target *string)
	// Sets the deletion policy of the resource based on the removal policy specified.
	ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions)
	// Returns a token for an runtime attribute of this resource.
	//
	// Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
	// in case there is no generated attribute.
	GetAtt(attributeName *string) alicloudroscdkcore.Reference
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
	// Overrides the auto-generated logical ID with a specific ID.
	OverrideLogicalId(newLogicalId *string)
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	Prepare()
	RenderProperties(props *map[string]interface{}) *map[string]interface{}
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session alicloudroscdkcore.ISynthesisSession)
	// Returns a string representation of this construct.
	//
	// Returns: a string representation of this resource.
	ToString() *string
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	Validate() *[]*string
	ValidateProperties(_properties interface{})
}

// The jsii proxy struct for RosInstanceGroup
type jsiiProxy_RosInstanceGroup struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosInstanceGroup) Affinity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"affinity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) AllocatePublicIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"allocatePublicIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) AttrHostNames() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHostNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) AttrInnerIps() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInnerIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) AttrInstanceIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) AttrIpv6Addresses() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIpv6Addresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) AttrIpv6AddressIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIpv6AddressIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) AttrOrderId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) AttrPrivateIps() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrivateIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) AttrPublicIps() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) AttrZoneIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrZoneIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) AutoReleaseTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoReleaseTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) AutoRenew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) AutoRenewPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenewPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) CpuOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cpuOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) CreditSpecification() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"creditSpecification",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) DedicatedHostId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dedicatedHostId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) DeletionForce() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deletionForce",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) DeletionProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) DeploymentSetGroupNo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deploymentSetGroupNo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) DeploymentSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deploymentSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) DiskMappings() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"diskMappings",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) EniMappings() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"eniMappings",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) HostName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hostName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) HostNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hostNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) HpcClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hpcClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) HttpEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"httpEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) HttpTokens() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"httpTokens",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) ImageFamily() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageFamily",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) ImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) ImageOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) InstanceChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) InstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) InstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) InternetChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"internetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) InternetMaxBandwidthOut() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"internetMaxBandwidthOut",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) IoOptimized() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ioOptimized",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) Ipv6AddressCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ipv6AddressCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) Ipv6Addresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ipv6Addresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) KeyPairName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"keyPairName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) LaunchTemplateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"launchTemplateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) LaunchTemplateName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"launchTemplateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) LaunchTemplateVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"launchTemplateVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) MaxAmount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maxAmount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) NetworkInterfaceQueueNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"networkInterfaceQueueNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) NetworkOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"networkOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) NetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"networkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) Password() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"password",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) PasswordInherit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"passwordInherit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) PeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"periodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) PrivateIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"privateIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) PrivatePoolOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"privatePoolOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) RamRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ramRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SchedulerOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"schedulerOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SecurityEnhancementStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityEnhancementStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SecurityGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SecurityOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SpotDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SpotInterruptionBehavior() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotInterruptionBehavior",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SpotPriceLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotPriceLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SpotStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) StorageSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"storageSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) StorageSetPartitionNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"storageSetPartitionNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SystemDiskAutoSnapshotPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskAutoSnapshotPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SystemDiskBurstingEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskBurstingEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SystemDiskCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SystemDiskDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SystemDiskDiskName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskDiskName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SystemDiskEncryptAlgorithm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskEncryptAlgorithm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SystemDiskEncrypted() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskEncrypted",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SystemDiskKmsKeyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskKmsKeyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SystemDiskPerformanceLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskPerformanceLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SystemDiskProvisionedIops() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskProvisionedIops",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SystemDiskSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) SystemDiskStorageClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskStorageClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) Tags() *[]*RosInstanceGroup_TagsProperty {
	var returns *[]*RosInstanceGroup_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) Tenancy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"tenancy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) UniqueSuffix() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"uniqueSuffix",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) UpdatePolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"updatePolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) UseAdditionalService() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"useAdditionalService",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) UserData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"userData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) VSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) ZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroup) ZoneIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneIds",
		&returns,
	)
	return returns
}


func NewRosInstanceGroup(scope alicloudroscdkcore.Construct, id *string, props *RosInstanceGroupProps, enableResourcePropertyConstraint *bool) RosInstanceGroup {
	_init_.Initialize()

	if err := validateNewRosInstanceGroupParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosInstanceGroup{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.RosInstanceGroup",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosInstanceGroup_Override(r RosInstanceGroup, scope alicloudroscdkcore.Construct, id *string, props *RosInstanceGroupProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.RosInstanceGroup",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetAffinity(val interface{}) {
	if err := j.validateSetAffinityParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"affinity",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetAllocatePublicIp(val interface{}) {
	if err := j.validateSetAllocatePublicIpParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"allocatePublicIp",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetAutoReleaseTime(val interface{}) {
	if err := j.validateSetAutoReleaseTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoReleaseTime",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetAutoRenew(val interface{}) {
	if err := j.validateSetAutoRenewParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenew",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetAutoRenewPeriod(val interface{}) {
	if err := j.validateSetAutoRenewPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenewPeriod",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetCpuOptions(val interface{}) {
	if err := j.validateSetCpuOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cpuOptions",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetCreditSpecification(val interface{}) {
	if err := j.validateSetCreditSpecificationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"creditSpecification",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetDedicatedHostId(val interface{}) {
	if err := j.validateSetDedicatedHostIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dedicatedHostId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetDeletionForce(val interface{}) {
	if err := j.validateSetDeletionForceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deletionForce",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetDeletionProtection(val interface{}) {
	if err := j.validateSetDeletionProtectionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deletionProtection",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetDeploymentSetGroupNo(val interface{}) {
	if err := j.validateSetDeploymentSetGroupNoParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deploymentSetGroupNo",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetDeploymentSetId(val interface{}) {
	if err := j.validateSetDeploymentSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deploymentSetId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetDiskMappings(val interface{}) {
	if err := j.validateSetDiskMappingsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"diskMappings",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetEniMappings(val interface{}) {
	if err := j.validateSetEniMappingsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"eniMappings",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetHostName(val interface{}) {
	if err := j.validateSetHostNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hostName",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetHostNames(val interface{}) {
	if err := j.validateSetHostNamesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hostNames",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetHpcClusterId(val interface{}) {
	if err := j.validateSetHpcClusterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hpcClusterId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetHttpEndpoint(val interface{}) {
	if err := j.validateSetHttpEndpointParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"httpEndpoint",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetHttpTokens(val interface{}) {
	if err := j.validateSetHttpTokensParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"httpTokens",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetImageFamily(val interface{}) {
	if err := j.validateSetImageFamilyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageFamily",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetImageId(val interface{}) {
	if err := j.validateSetImageIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetImageOptions(val interface{}) {
	if err := j.validateSetImageOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageOptions",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetInstanceChargeType(val interface{}) {
	if err := j.validateSetInstanceChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceChargeType",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetInstanceName(val interface{}) {
	if err := j.validateSetInstanceNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceName",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetInstanceType(val interface{}) {
	if err := j.validateSetInstanceTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceType",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetInternetChargeType(val interface{}) {
	if err := j.validateSetInternetChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"internetChargeType",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetInternetMaxBandwidthOut(val interface{}) {
	if err := j.validateSetInternetMaxBandwidthOutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"internetMaxBandwidthOut",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetIoOptimized(val interface{}) {
	if err := j.validateSetIoOptimizedParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ioOptimized",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetIpv6AddressCount(val interface{}) {
	if err := j.validateSetIpv6AddressCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ipv6AddressCount",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetIpv6Addresses(val interface{}) {
	if err := j.validateSetIpv6AddressesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ipv6Addresses",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetKeyPairName(val interface{}) {
	if err := j.validateSetKeyPairNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"keyPairName",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetLaunchTemplateId(val interface{}) {
	if err := j.validateSetLaunchTemplateIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"launchTemplateId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetLaunchTemplateName(val interface{}) {
	if err := j.validateSetLaunchTemplateNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"launchTemplateName",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetLaunchTemplateVersion(val interface{}) {
	if err := j.validateSetLaunchTemplateVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"launchTemplateVersion",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetMaxAmount(val interface{}) {
	if err := j.validateSetMaxAmountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maxAmount",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetNetworkInterfaceQueueNumber(val interface{}) {
	if err := j.validateSetNetworkInterfaceQueueNumberParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"networkInterfaceQueueNumber",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetNetworkOptions(val interface{}) {
	if err := j.validateSetNetworkOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"networkOptions",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetNetworkType(val interface{}) {
	if err := j.validateSetNetworkTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"networkType",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetPassword(val interface{}) {
	if err := j.validateSetPasswordParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"password",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetPasswordInherit(val interface{}) {
	if err := j.validateSetPasswordInheritParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"passwordInherit",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetPeriodUnit(val interface{}) {
	if err := j.validateSetPeriodUnitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"periodUnit",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetPrivateIpAddress(val interface{}) {
	if err := j.validateSetPrivateIpAddressParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"privateIpAddress",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetPrivatePoolOptions(val interface{}) {
	if err := j.validateSetPrivatePoolOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"privatePoolOptions",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetRamRoleName(val interface{}) {
	if err := j.validateSetRamRoleNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ramRoleName",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSchedulerOptions(val interface{}) {
	if err := j.validateSetSchedulerOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"schedulerOptions",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSecurityEnhancementStrategy(val interface{}) {
	if err := j.validateSetSecurityEnhancementStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityEnhancementStrategy",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSecurityGroupId(val interface{}) {
	if err := j.validateSetSecurityGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSecurityGroupIds(val interface{}) {
	if err := j.validateSetSecurityGroupIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupIds",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSecurityOptions(val interface{}) {
	if err := j.validateSetSecurityOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityOptions",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSpotDuration(val interface{}) {
	if err := j.validateSetSpotDurationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotDuration",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSpotInterruptionBehavior(val interface{}) {
	if err := j.validateSetSpotInterruptionBehaviorParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotInterruptionBehavior",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSpotPriceLimit(val interface{}) {
	if err := j.validateSetSpotPriceLimitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotPriceLimit",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSpotStrategy(val interface{}) {
	if err := j.validateSetSpotStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotStrategy",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetStorageSetId(val interface{}) {
	if err := j.validateSetStorageSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"storageSetId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetStorageSetPartitionNumber(val interface{}) {
	if err := j.validateSetStorageSetPartitionNumberParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"storageSetPartitionNumber",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSystemDiskAutoSnapshotPolicyId(val interface{}) {
	if err := j.validateSetSystemDiskAutoSnapshotPolicyIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskAutoSnapshotPolicyId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSystemDiskBurstingEnabled(val interface{}) {
	if err := j.validateSetSystemDiskBurstingEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskBurstingEnabled",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSystemDiskCategory(val interface{}) {
	if err := j.validateSetSystemDiskCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskCategory",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSystemDiskDescription(val interface{}) {
	if err := j.validateSetSystemDiskDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskDescription",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSystemDiskDiskName(val interface{}) {
	if err := j.validateSetSystemDiskDiskNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskDiskName",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSystemDiskEncryptAlgorithm(val interface{}) {
	if err := j.validateSetSystemDiskEncryptAlgorithmParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskEncryptAlgorithm",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSystemDiskEncrypted(val interface{}) {
	if err := j.validateSetSystemDiskEncryptedParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskEncrypted",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSystemDiskKmsKeyId(val interface{}) {
	if err := j.validateSetSystemDiskKmsKeyIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskKmsKeyId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSystemDiskPerformanceLevel(val interface{}) {
	if err := j.validateSetSystemDiskPerformanceLevelParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskPerformanceLevel",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSystemDiskProvisionedIops(val interface{}) {
	if err := j.validateSetSystemDiskProvisionedIopsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskProvisionedIops",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSystemDiskSize(val interface{}) {
	if err := j.validateSetSystemDiskSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskSize",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetSystemDiskStorageClusterId(val interface{}) {
	if err := j.validateSetSystemDiskStorageClusterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskStorageClusterId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetTags(val *[]*RosInstanceGroup_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetTenancy(val interface{}) {
	if err := j.validateSetTenancyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tenancy",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetUniqueSuffix(val interface{}) {
	if err := j.validateSetUniqueSuffixParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"uniqueSuffix",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetUpdatePolicy(val interface{}) {
	if err := j.validateSetUpdatePolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"updatePolicy",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetUseAdditionalService(val interface{}) {
	if err := j.validateSetUseAdditionalServiceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"useAdditionalService",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetUserData(val interface{}) {
	if err := j.validateSetUserDataParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"userData",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetVSwitchId(val interface{}) {
	if err := j.validateSetVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetZoneId(val interface{}) {
	if err := j.validateSetZoneIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"zoneId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroup)SetZoneIds(val interface{}) {
	if err := j.validateSetZoneIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"zoneIds",
		val,
	)
}

// Return whether the given object is a Construct.
func RosInstanceGroup_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInstanceGroup_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosInstanceGroup",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Returns `true` if a construct is a stack element (i.e. part of the synthesized template).
//
// Uses duck-typing instead of `instanceof` to allow stack elements from different
// versions of this library to be included in the same stack.
//
// Returns: The construct as a stack element or undefined if it is not a stack element.
func RosInstanceGroup_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInstanceGroup_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosInstanceGroup",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosInstanceGroup_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosInstanceGroup_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosInstanceGroup",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosInstanceGroup_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-ecs.RosInstanceGroup",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosInstanceGroup) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosInstanceGroup) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosInstanceGroup) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosInstanceGroup) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosInstanceGroup) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosInstanceGroup) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosInstanceGroup) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosInstanceGroup) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosInstanceGroup) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosInstanceGroup) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosInstanceGroup) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosInstanceGroup) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
	if err := r.validateGetAttParameters(attributeName); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.Reference

	_jsii_.Invoke(
		r,
		"getAtt",
		[]interface{}{attributeName},
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstanceGroup) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInstanceGroup) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInstanceGroup) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstanceGroup) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosInstanceGroup) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInstanceGroup) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
	if err := r.validateRenderPropertiesParameters(props); err != nil {
		panic(err)
	}
	var returns *map[string]interface{}

	_jsii_.Invoke(
		r,
		"renderProperties",
		[]interface{}{props},
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstanceGroup) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInstanceGroup) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstanceGroup) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstanceGroup) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

