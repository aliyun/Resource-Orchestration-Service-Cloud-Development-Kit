package alicloudroscdkecs

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::InstanceGroupClone`, which is used to create clones of an Elastic Compute Service (ECS) instance.
type RosInstanceGroupClone interface {
	alicloudroscdkcore.RosResource
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
	BackendServerWeight() interface{}
	SetBackendServerWeight(val interface{})
	CpuOptions() interface{}
	SetCpuOptions(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DeletionProtection() interface{}
	SetDeletionProtection(val interface{})
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
	HostNames() interface{}
	SetHostNames(val interface{})
	HpcClusterId() interface{}
	SetHpcClusterId(val interface{})
	ImageId() interface{}
	SetImageId(val interface{})
	ImageOptions() interface{}
	SetImageOptions(val interface{})
	InstanceName() interface{}
	SetInstanceName(val interface{})
	InternetMaxBandwidthIn() interface{}
	SetInternetMaxBandwidthIn(val interface{})
	InternetMaxBandwidthOut() interface{}
	SetInternetMaxBandwidthOut(val interface{})
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
	LoadBalancerIdToAttach() interface{}
	SetLoadBalancerIdToAttach(val interface{})
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
	SecurityGroupId() interface{}
	SetSecurityGroupId(val interface{})
	SecurityGroupIds() interface{}
	SetSecurityGroupIds(val interface{})
	SecurityOptions() interface{}
	SetSecurityOptions(val interface{})
	SourceInstanceId() interface{}
	SetSourceInstanceId(val interface{})
	SpotPriceLimit() interface{}
	SetSpotPriceLimit(val interface{})
	SpotStrategy() interface{}
	SetSpotStrategy(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
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
	SystemDiskProvisionedIops() interface{}
	SetSystemDiskProvisionedIops(val interface{})
	SystemDiskStorageClusterId() interface{}
	SetSystemDiskStorageClusterId(val interface{})
	Tags() *[]*RosInstanceGroupClone_TagsProperty
	SetTags(val *[]*RosInstanceGroupClone_TagsProperty)
	UniqueSuffix() interface{}
	SetUniqueSuffix(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	UpdatePolicy() interface{}
	SetUpdatePolicy(val interface{})
	ZoneId() interface{}
	SetZoneId(val interface{})
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

// The jsii proxy struct for RosInstanceGroupClone
type jsiiProxy_RosInstanceGroupClone struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosInstanceGroupClone) AttrHostNames() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHostNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) AttrInnerIps() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInnerIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) AttrInstanceIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) AttrIpv6Addresses() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIpv6Addresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) AttrIpv6AddressIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIpv6AddressIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) AttrOrderId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) AttrPrivateIps() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrivateIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) AttrPublicIps() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) AttrZoneIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrZoneIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) AutoReleaseTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoReleaseTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) AutoRenew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) AutoRenewPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenewPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) BackendServerWeight() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"backendServerWeight",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) CpuOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cpuOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) DeletionProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) DeploymentSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deploymentSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) DiskMappings() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"diskMappings",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) EniMappings() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"eniMappings",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) HostNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hostNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) HpcClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hpcClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) ImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) ImageOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) InstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) InternetMaxBandwidthIn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"internetMaxBandwidthIn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) InternetMaxBandwidthOut() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"internetMaxBandwidthOut",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) Ipv6AddressCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ipv6AddressCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) Ipv6Addresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ipv6Addresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) KeyPairName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"keyPairName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) LaunchTemplateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"launchTemplateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) LaunchTemplateName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"launchTemplateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) LaunchTemplateVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"launchTemplateVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) LoadBalancerIdToAttach() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"loadBalancerIdToAttach",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) MaxAmount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maxAmount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) NetworkInterfaceQueueNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"networkInterfaceQueueNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) NetworkOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"networkOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) Password() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"password",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) PasswordInherit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"passwordInherit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) PeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"periodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) RamRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ramRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) SecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) SecurityGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) SecurityOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) SourceInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sourceInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) SpotPriceLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotPriceLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) SpotStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) SystemDiskAutoSnapshotPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskAutoSnapshotPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) SystemDiskBurstingEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskBurstingEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) SystemDiskCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) SystemDiskDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) SystemDiskDiskName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskDiskName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) SystemDiskEncryptAlgorithm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskEncryptAlgorithm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) SystemDiskEncrypted() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskEncrypted",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) SystemDiskKmsKeyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskKmsKeyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) SystemDiskProvisionedIops() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskProvisionedIops",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) SystemDiskStorageClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskStorageClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) Tags() *[]*RosInstanceGroupClone_TagsProperty {
	var returns *[]*RosInstanceGroupClone_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) UniqueSuffix() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"uniqueSuffix",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) UpdatePolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"updatePolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstanceGroupClone) ZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneId",
		&returns,
	)
	return returns
}


func NewRosInstanceGroupClone(scope alicloudroscdkcore.Construct, id *string, props *RosInstanceGroupCloneProps, enableResourcePropertyConstraint *bool) RosInstanceGroupClone {
	_init_.Initialize()

	if err := validateNewRosInstanceGroupCloneParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosInstanceGroupClone{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.RosInstanceGroupClone",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosInstanceGroupClone_Override(r RosInstanceGroupClone, scope alicloudroscdkcore.Construct, id *string, props *RosInstanceGroupCloneProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.RosInstanceGroupClone",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetAutoReleaseTime(val interface{}) {
	if err := j.validateSetAutoReleaseTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoReleaseTime",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetAutoRenew(val interface{}) {
	if err := j.validateSetAutoRenewParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenew",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetAutoRenewPeriod(val interface{}) {
	if err := j.validateSetAutoRenewPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenewPeriod",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetBackendServerWeight(val interface{}) {
	if err := j.validateSetBackendServerWeightParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"backendServerWeight",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetCpuOptions(val interface{}) {
	if err := j.validateSetCpuOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cpuOptions",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetDeletionProtection(val interface{}) {
	if err := j.validateSetDeletionProtectionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deletionProtection",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetDeploymentSetId(val interface{}) {
	if err := j.validateSetDeploymentSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deploymentSetId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetDiskMappings(val interface{}) {
	if err := j.validateSetDiskMappingsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"diskMappings",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetEniMappings(val interface{}) {
	if err := j.validateSetEniMappingsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"eniMappings",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetHostNames(val interface{}) {
	if err := j.validateSetHostNamesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hostNames",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetHpcClusterId(val interface{}) {
	if err := j.validateSetHpcClusterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hpcClusterId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetImageId(val interface{}) {
	if err := j.validateSetImageIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetImageOptions(val interface{}) {
	if err := j.validateSetImageOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageOptions",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetInstanceName(val interface{}) {
	if err := j.validateSetInstanceNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceName",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetInternetMaxBandwidthIn(val interface{}) {
	if err := j.validateSetInternetMaxBandwidthInParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"internetMaxBandwidthIn",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetInternetMaxBandwidthOut(val interface{}) {
	if err := j.validateSetInternetMaxBandwidthOutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"internetMaxBandwidthOut",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetIpv6AddressCount(val interface{}) {
	if err := j.validateSetIpv6AddressCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ipv6AddressCount",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetIpv6Addresses(val interface{}) {
	if err := j.validateSetIpv6AddressesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ipv6Addresses",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetKeyPairName(val interface{}) {
	if err := j.validateSetKeyPairNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"keyPairName",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetLaunchTemplateId(val interface{}) {
	if err := j.validateSetLaunchTemplateIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"launchTemplateId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetLaunchTemplateName(val interface{}) {
	if err := j.validateSetLaunchTemplateNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"launchTemplateName",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetLaunchTemplateVersion(val interface{}) {
	if err := j.validateSetLaunchTemplateVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"launchTemplateVersion",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetLoadBalancerIdToAttach(val interface{}) {
	if err := j.validateSetLoadBalancerIdToAttachParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"loadBalancerIdToAttach",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetMaxAmount(val interface{}) {
	if err := j.validateSetMaxAmountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maxAmount",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetNetworkInterfaceQueueNumber(val interface{}) {
	if err := j.validateSetNetworkInterfaceQueueNumberParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"networkInterfaceQueueNumber",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetNetworkOptions(val interface{}) {
	if err := j.validateSetNetworkOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"networkOptions",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetPassword(val interface{}) {
	if err := j.validateSetPasswordParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"password",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetPasswordInherit(val interface{}) {
	if err := j.validateSetPasswordInheritParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"passwordInherit",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetPeriodUnit(val interface{}) {
	if err := j.validateSetPeriodUnitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"periodUnit",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetRamRoleName(val interface{}) {
	if err := j.validateSetRamRoleNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ramRoleName",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetSecurityGroupId(val interface{}) {
	if err := j.validateSetSecurityGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetSecurityGroupIds(val interface{}) {
	if err := j.validateSetSecurityGroupIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupIds",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetSecurityOptions(val interface{}) {
	if err := j.validateSetSecurityOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityOptions",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetSourceInstanceId(val interface{}) {
	if err := j.validateSetSourceInstanceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sourceInstanceId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetSpotPriceLimit(val interface{}) {
	if err := j.validateSetSpotPriceLimitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotPriceLimit",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetSpotStrategy(val interface{}) {
	if err := j.validateSetSpotStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotStrategy",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetSystemDiskAutoSnapshotPolicyId(val interface{}) {
	if err := j.validateSetSystemDiskAutoSnapshotPolicyIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskAutoSnapshotPolicyId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetSystemDiskBurstingEnabled(val interface{}) {
	if err := j.validateSetSystemDiskBurstingEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskBurstingEnabled",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetSystemDiskCategory(val interface{}) {
	if err := j.validateSetSystemDiskCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskCategory",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetSystemDiskDescription(val interface{}) {
	if err := j.validateSetSystemDiskDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskDescription",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetSystemDiskDiskName(val interface{}) {
	if err := j.validateSetSystemDiskDiskNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskDiskName",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetSystemDiskEncryptAlgorithm(val interface{}) {
	if err := j.validateSetSystemDiskEncryptAlgorithmParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskEncryptAlgorithm",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetSystemDiskEncrypted(val interface{}) {
	if err := j.validateSetSystemDiskEncryptedParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskEncrypted",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetSystemDiskKmsKeyId(val interface{}) {
	if err := j.validateSetSystemDiskKmsKeyIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskKmsKeyId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetSystemDiskProvisionedIops(val interface{}) {
	if err := j.validateSetSystemDiskProvisionedIopsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskProvisionedIops",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetSystemDiskStorageClusterId(val interface{}) {
	if err := j.validateSetSystemDiskStorageClusterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskStorageClusterId",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetTags(val *[]*RosInstanceGroupClone_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetUniqueSuffix(val interface{}) {
	if err := j.validateSetUniqueSuffixParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"uniqueSuffix",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetUpdatePolicy(val interface{}) {
	if err := j.validateSetUpdatePolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"updatePolicy",
		val,
	)
}

func (j *jsiiProxy_RosInstanceGroupClone)SetZoneId(val interface{}) {
	if err := j.validateSetZoneIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"zoneId",
		val,
	)
}

// Return whether the given object is a Construct.
func RosInstanceGroupClone_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInstanceGroupClone_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosInstanceGroupClone",
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
func RosInstanceGroupClone_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInstanceGroupClone_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosInstanceGroupClone",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosInstanceGroupClone_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosInstanceGroupClone_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosInstanceGroupClone",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosInstanceGroupClone_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-ecs.RosInstanceGroupClone",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosInstanceGroupClone) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosInstanceGroupClone) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosInstanceGroupClone) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosInstanceGroupClone) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosInstanceGroupClone) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosInstanceGroupClone) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosInstanceGroupClone) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosInstanceGroupClone) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosInstanceGroupClone) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosInstanceGroupClone) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosInstanceGroupClone) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosInstanceGroupClone) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosInstanceGroupClone) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInstanceGroupClone) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInstanceGroupClone) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstanceGroupClone) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosInstanceGroupClone) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInstanceGroupClone) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosInstanceGroupClone) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInstanceGroupClone) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstanceGroupClone) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstanceGroupClone) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

