package alicloudroscdkecs

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::Instance`, which is used to create an Elastic Compute Service (ECS) instance.
type RosInstance interface {
	alicloudroscdkcore.RosResource
	Affinity() interface{}
	SetAffinity(val interface{})
	AllocatePublicIp() interface{}
	SetAllocatePublicIp(val interface{})
	AttrHostName() alicloudroscdkcore.IResolvable
	AttrInnerIp() alicloudroscdkcore.IResolvable
	AttrInstanceId() alicloudroscdkcore.IResolvable
	AttrPrimaryNetworkInterfaceId() alicloudroscdkcore.IResolvable
	AttrPrivateIp() alicloudroscdkcore.IResolvable
	AttrPublicIp() alicloudroscdkcore.IResolvable
	AttrSecurityGroupIds() alicloudroscdkcore.IResolvable
	AttrZoneId() alicloudroscdkcore.IResolvable
	AutoRenew() interface{}
	SetAutoRenew(val interface{})
	AutoRenewPeriod() interface{}
	SetAutoRenewPeriod(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	CreditSpecification() interface{}
	SetCreditSpecification(val interface{})
	DedicatedHostId() interface{}
	SetDedicatedHostId(val interface{})
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
	HostName() interface{}
	SetHostName(val interface{})
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
	KeyPairName() interface{}
	SetKeyPairName(val interface{})
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
	SecurityEnhancementStrategy() interface{}
	SetSecurityEnhancementStrategy(val interface{})
	SecurityGroupId() interface{}
	SetSecurityGroupId(val interface{})
	SecurityGroupIds() interface{}
	SetSecurityGroupIds(val interface{})
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
	SystemDiskCategory() interface{}
	SetSystemDiskCategory(val interface{})
	SystemDiskDescription() interface{}
	SetSystemDiskDescription(val interface{})
	SystemDiskDiskName() interface{}
	SetSystemDiskDiskName(val interface{})
	SystemDiskPerformanceLevel() interface{}
	SetSystemDiskPerformanceLevel(val interface{})
	SystemDiskSize() interface{}
	SetSystemDiskSize(val interface{})
	Tags() *[]*RosInstance_TagsProperty
	SetTags(val *[]*RosInstance_TagsProperty)
	Tenancy() interface{}
	SetTenancy(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
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

// The jsii proxy struct for RosInstance
type jsiiProxy_RosInstance struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosInstance) Affinity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"affinity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AllocatePublicIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"allocatePublicIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrHostName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHostName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrInnerIp() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInnerIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrPrimaryNetworkInterfaceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrimaryNetworkInterfaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrPrivateIp() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrivateIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrPublicIp() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrSecurityGroupIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AutoRenew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AutoRenewPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenewPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) CreditSpecification() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"creditSpecification",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) DedicatedHostId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dedicatedHostId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) DeletionProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) DeploymentSetGroupNo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deploymentSetGroupNo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) DeploymentSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deploymentSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) DiskMappings() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"diskMappings",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) HostName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hostName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) HpcClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hpcClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) HttpEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"httpEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) HttpTokens() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"httpTokens",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ImageFamily() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageFamily",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) InstanceChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) InstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) InstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) InternetChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"internetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) InternetMaxBandwidthOut() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"internetMaxBandwidthOut",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) IoOptimized() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ioOptimized",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) KeyPairName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"keyPairName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Password() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"password",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) PasswordInherit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"passwordInherit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) PeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"periodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) PrivateIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"privateIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) PrivatePoolOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"privatePoolOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RamRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ramRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SecurityEnhancementStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityEnhancementStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SecurityGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SpotDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SpotInterruptionBehavior() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotInterruptionBehavior",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SpotPriceLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotPriceLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SpotStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) StorageSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"storageSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) StorageSetPartitionNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"storageSetPartitionNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SystemDiskCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SystemDiskDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SystemDiskDiskName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskDiskName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SystemDiskPerformanceLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskPerformanceLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SystemDiskSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Tags() *[]*RosInstance_TagsProperty {
	var returns *[]*RosInstance_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Tenancy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"tenancy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) UseAdditionalService() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"useAdditionalService",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) UserData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"userData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) VSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ZoneIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneIds",
		&returns,
	)
	return returns
}


func NewRosInstance(scope alicloudroscdkcore.Construct, id *string, props *RosInstanceProps, enableResourcePropertyConstraint *bool) RosInstance {
	_init_.Initialize()

	if err := validateNewRosInstanceParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosInstance{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.RosInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosInstance_Override(r RosInstance, scope alicloudroscdkcore.Construct, id *string, props *RosInstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.RosInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosInstance)SetAffinity(val interface{}) {
	if err := j.validateSetAffinityParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"affinity",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetAllocatePublicIp(val interface{}) {
	if err := j.validateSetAllocatePublicIpParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"allocatePublicIp",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetAutoRenew(val interface{}) {
	if err := j.validateSetAutoRenewParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenew",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetAutoRenewPeriod(val interface{}) {
	if err := j.validateSetAutoRenewPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenewPeriod",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetCreditSpecification(val interface{}) {
	if err := j.validateSetCreditSpecificationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"creditSpecification",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetDedicatedHostId(val interface{}) {
	if err := j.validateSetDedicatedHostIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dedicatedHostId",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetDeletionProtection(val interface{}) {
	if err := j.validateSetDeletionProtectionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deletionProtection",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetDeploymentSetGroupNo(val interface{}) {
	if err := j.validateSetDeploymentSetGroupNoParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deploymentSetGroupNo",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetDeploymentSetId(val interface{}) {
	if err := j.validateSetDeploymentSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deploymentSetId",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetDiskMappings(val interface{}) {
	if err := j.validateSetDiskMappingsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"diskMappings",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetHostName(val interface{}) {
	if err := j.validateSetHostNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hostName",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetHpcClusterId(val interface{}) {
	if err := j.validateSetHpcClusterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hpcClusterId",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetHttpEndpoint(val interface{}) {
	if err := j.validateSetHttpEndpointParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"httpEndpoint",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetHttpTokens(val interface{}) {
	if err := j.validateSetHttpTokensParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"httpTokens",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetImageFamily(val interface{}) {
	if err := j.validateSetImageFamilyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageFamily",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetImageId(val interface{}) {
	if err := j.validateSetImageIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageId",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetInstanceChargeType(val interface{}) {
	if err := j.validateSetInstanceChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceChargeType",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetInstanceName(val interface{}) {
	if err := j.validateSetInstanceNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceName",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetInstanceType(val interface{}) {
	if err := j.validateSetInstanceTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceType",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetInternetChargeType(val interface{}) {
	if err := j.validateSetInternetChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"internetChargeType",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetInternetMaxBandwidthOut(val interface{}) {
	if err := j.validateSetInternetMaxBandwidthOutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"internetMaxBandwidthOut",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetIoOptimized(val interface{}) {
	if err := j.validateSetIoOptimizedParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ioOptimized",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetKeyPairName(val interface{}) {
	if err := j.validateSetKeyPairNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"keyPairName",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetPassword(val interface{}) {
	if err := j.validateSetPasswordParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"password",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetPasswordInherit(val interface{}) {
	if err := j.validateSetPasswordInheritParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"passwordInherit",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetPeriodUnit(val interface{}) {
	if err := j.validateSetPeriodUnitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"periodUnit",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetPrivateIpAddress(val interface{}) {
	if err := j.validateSetPrivateIpAddressParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"privateIpAddress",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetPrivatePoolOptions(val interface{}) {
	if err := j.validateSetPrivatePoolOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"privatePoolOptions",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetRamRoleName(val interface{}) {
	if err := j.validateSetRamRoleNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ramRoleName",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSecurityEnhancementStrategy(val interface{}) {
	if err := j.validateSetSecurityEnhancementStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityEnhancementStrategy",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSecurityGroupId(val interface{}) {
	if err := j.validateSetSecurityGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupId",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSecurityGroupIds(val interface{}) {
	if err := j.validateSetSecurityGroupIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupIds",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSpotDuration(val interface{}) {
	if err := j.validateSetSpotDurationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotDuration",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSpotInterruptionBehavior(val interface{}) {
	if err := j.validateSetSpotInterruptionBehaviorParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotInterruptionBehavior",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSpotPriceLimit(val interface{}) {
	if err := j.validateSetSpotPriceLimitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotPriceLimit",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSpotStrategy(val interface{}) {
	if err := j.validateSetSpotStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotStrategy",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetStorageSetId(val interface{}) {
	if err := j.validateSetStorageSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"storageSetId",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetStorageSetPartitionNumber(val interface{}) {
	if err := j.validateSetStorageSetPartitionNumberParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"storageSetPartitionNumber",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSystemDiskCategory(val interface{}) {
	if err := j.validateSetSystemDiskCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskCategory",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSystemDiskDescription(val interface{}) {
	if err := j.validateSetSystemDiskDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskDescription",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSystemDiskDiskName(val interface{}) {
	if err := j.validateSetSystemDiskDiskNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskDiskName",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSystemDiskPerformanceLevel(val interface{}) {
	if err := j.validateSetSystemDiskPerformanceLevelParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskPerformanceLevel",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSystemDiskSize(val interface{}) {
	if err := j.validateSetSystemDiskSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskSize",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetTags(val *[]*RosInstance_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetTenancy(val interface{}) {
	if err := j.validateSetTenancyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tenancy",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetUseAdditionalService(val interface{}) {
	if err := j.validateSetUseAdditionalServiceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"useAdditionalService",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetUserData(val interface{}) {
	if err := j.validateSetUserDataParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"userData",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetVSwitchId(val interface{}) {
	if err := j.validateSetVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchId",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetZoneId(val interface{}) {
	if err := j.validateSetZoneIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"zoneId",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetZoneIds(val interface{}) {
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
func RosInstance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosInstance",
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
func RosInstance_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInstance_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosInstance",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosInstance_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosInstance_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosInstance",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosInstance_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-ecs.RosInstance",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosInstance) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosInstance) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosInstance) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosInstance) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosInstance) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosInstance) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosInstance) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosInstance) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosInstance) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosInstance) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosInstance) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosInstance) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosInstance) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInstance) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInstance) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosInstance) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInstance) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosInstance) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInstance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

