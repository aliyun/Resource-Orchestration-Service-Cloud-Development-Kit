package alicloudroscdkess

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ESS::ScalingConfiguration`, which is used to create a scaling configuration for a scaling group.
type RosScalingConfiguration interface {
	alicloudroscdkcore.RosResource
	Affinity() interface{}
	SetAffinity(val interface{})
	AttrScalingConfigurationId() alicloudroscdkcore.IResolvable
	AttrScalingGroupId() alicloudroscdkcore.IResolvable
	Cpu() interface{}
	SetCpu(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	CreditSpecification() interface{}
	SetCreditSpecification(val interface{})
	DedicatedHostId() interface{}
	SetDedicatedHostId(val interface{})
	DeploymentSetId() interface{}
	SetDeploymentSetId(val interface{})
	DiskMappings() interface{}
	SetDiskMappings(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	HostName() interface{}
	SetHostName(val interface{})
	HpcClusterId() interface{}
	SetHpcClusterId(val interface{})
	ImageFamily() interface{}
	SetImageFamily(val interface{})
	ImageId() interface{}
	SetImageId(val interface{})
	ImageName() interface{}
	SetImageName(val interface{})
	ImageOptionsLoginAsNonRoot() interface{}
	SetImageOptionsLoginAsNonRoot(val interface{})
	InstanceDescription() interface{}
	SetInstanceDescription(val interface{})
	InstanceId() interface{}
	SetInstanceId(val interface{})
	InstanceName() interface{}
	SetInstanceName(val interface{})
	InstancePatternInfos() interface{}
	SetInstancePatternInfos(val interface{})
	InstanceType() interface{}
	SetInstanceType(val interface{})
	InstanceTypeOverrides() interface{}
	SetInstanceTypeOverrides(val interface{})
	InstanceTypes() interface{}
	SetInstanceTypes(val interface{})
	InternetChargeType() interface{}
	SetInternetChargeType(val interface{})
	InternetMaxBandwidthIn() interface{}
	SetInternetMaxBandwidthIn(val interface{})
	InternetMaxBandwidthOut() interface{}
	SetInternetMaxBandwidthOut(val interface{})
	IoOptimized() interface{}
	SetIoOptimized(val interface{})
	Ipv6AddressCount() interface{}
	SetIpv6AddressCount(val interface{})
	KeyPairName() interface{}
	SetKeyPairName(val interface{})
	LoadBalancerWeight() interface{}
	SetLoadBalancerWeight(val interface{})
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
	Memory() interface{}
	SetMemory(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	Password() interface{}
	SetPassword(val interface{})
	PasswordInherit() interface{}
	SetPasswordInherit(val interface{})
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
	ScalingConfigurationName() interface{}
	SetScalingConfigurationName(val interface{})
	ScalingGroupId() interface{}
	SetScalingGroupId(val interface{})
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
	SpotPriceLimitForInstanceType() interface{}
	SetSpotPriceLimitForInstanceType(val interface{})
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
	SystemDiskCategories() interface{}
	SetSystemDiskCategories(val interface{})
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
	TagList() interface{}
	SetTagList(val interface{})
	Tenancy() interface{}
	SetTenancy(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	UserData() interface{}
	SetUserData(val interface{})
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

// The jsii proxy struct for RosScalingConfiguration
type jsiiProxy_RosScalingConfiguration struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosScalingConfiguration) Affinity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"affinity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) AttrScalingConfigurationId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScalingConfigurationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) AttrScalingGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScalingGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) Cpu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) CreditSpecification() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"creditSpecification",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) DedicatedHostId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dedicatedHostId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) DeploymentSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deploymentSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) DiskMappings() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"diskMappings",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) HostName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hostName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) HpcClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hpcClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) ImageFamily() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageFamily",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) ImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) ImageName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) ImageOptionsLoginAsNonRoot() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageOptionsLoginAsNonRoot",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) InstanceDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) InstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) InstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) InstancePatternInfos() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instancePatternInfos",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) InstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) InstanceTypeOverrides() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceTypeOverrides",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) InstanceTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) InternetChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"internetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) InternetMaxBandwidthIn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"internetMaxBandwidthIn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) InternetMaxBandwidthOut() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"internetMaxBandwidthOut",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) IoOptimized() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ioOptimized",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) Ipv6AddressCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ipv6AddressCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) KeyPairName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"keyPairName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) LoadBalancerWeight() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"loadBalancerWeight",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) Memory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"memory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) Password() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"password",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) PasswordInherit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"passwordInherit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) PrivatePoolOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"privatePoolOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) RamRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ramRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) ScalingConfigurationName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"scalingConfigurationName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) ScalingGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"scalingGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SecurityEnhancementStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityEnhancementStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SecurityGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SpotDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SpotInterruptionBehavior() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotInterruptionBehavior",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SpotPriceLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotPriceLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SpotPriceLimitForInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotPriceLimitForInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SpotStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SystemDiskAutoSnapshotPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskAutoSnapshotPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SystemDiskBurstingEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskBurstingEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SystemDiskCategories() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskCategories",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SystemDiskCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SystemDiskDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SystemDiskDiskName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskDiskName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SystemDiskEncryptAlgorithm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskEncryptAlgorithm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SystemDiskEncrypted() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskEncrypted",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SystemDiskKmsKeyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskKmsKeyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SystemDiskPerformanceLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskPerformanceLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SystemDiskProvisionedIops() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskProvisionedIops",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) SystemDiskSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) TagList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"tagList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) Tenancy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"tenancy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) UserData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"userData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingConfiguration) ZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneId",
		&returns,
	)
	return returns
}


func NewRosScalingConfiguration(scope alicloudroscdkcore.Construct, id *string, props *RosScalingConfigurationProps, enableResourcePropertyConstraint *bool) RosScalingConfiguration {
	_init_.Initialize()

	if err := validateNewRosScalingConfigurationParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosScalingConfiguration{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ess.RosScalingConfiguration",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosScalingConfiguration_Override(r RosScalingConfiguration, scope alicloudroscdkcore.Construct, id *string, props *RosScalingConfigurationProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ess.RosScalingConfiguration",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetAffinity(val interface{}) {
	if err := j.validateSetAffinityParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"affinity",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetCpu(val interface{}) {
	if err := j.validateSetCpuParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cpu",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetCreditSpecification(val interface{}) {
	if err := j.validateSetCreditSpecificationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"creditSpecification",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetDedicatedHostId(val interface{}) {
	if err := j.validateSetDedicatedHostIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dedicatedHostId",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetDeploymentSetId(val interface{}) {
	if err := j.validateSetDeploymentSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deploymentSetId",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetDiskMappings(val interface{}) {
	if err := j.validateSetDiskMappingsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"diskMappings",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetHostName(val interface{}) {
	if err := j.validateSetHostNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hostName",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetHpcClusterId(val interface{}) {
	if err := j.validateSetHpcClusterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hpcClusterId",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetImageFamily(val interface{}) {
	if err := j.validateSetImageFamilyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageFamily",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetImageId(val interface{}) {
	if err := j.validateSetImageIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageId",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetImageName(val interface{}) {
	if err := j.validateSetImageNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageName",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetImageOptionsLoginAsNonRoot(val interface{}) {
	if err := j.validateSetImageOptionsLoginAsNonRootParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageOptionsLoginAsNonRoot",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetInstanceDescription(val interface{}) {
	if err := j.validateSetInstanceDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceDescription",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetInstanceId(val interface{}) {
	if err := j.validateSetInstanceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceId",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetInstanceName(val interface{}) {
	if err := j.validateSetInstanceNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceName",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetInstancePatternInfos(val interface{}) {
	if err := j.validateSetInstancePatternInfosParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instancePatternInfos",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetInstanceType(val interface{}) {
	if err := j.validateSetInstanceTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceType",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetInstanceTypeOverrides(val interface{}) {
	if err := j.validateSetInstanceTypeOverridesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceTypeOverrides",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetInstanceTypes(val interface{}) {
	if err := j.validateSetInstanceTypesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceTypes",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetInternetChargeType(val interface{}) {
	if err := j.validateSetInternetChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"internetChargeType",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetInternetMaxBandwidthIn(val interface{}) {
	if err := j.validateSetInternetMaxBandwidthInParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"internetMaxBandwidthIn",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetInternetMaxBandwidthOut(val interface{}) {
	if err := j.validateSetInternetMaxBandwidthOutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"internetMaxBandwidthOut",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetIoOptimized(val interface{}) {
	if err := j.validateSetIoOptimizedParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ioOptimized",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetIpv6AddressCount(val interface{}) {
	if err := j.validateSetIpv6AddressCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ipv6AddressCount",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetKeyPairName(val interface{}) {
	if err := j.validateSetKeyPairNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"keyPairName",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetLoadBalancerWeight(val interface{}) {
	if err := j.validateSetLoadBalancerWeightParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"loadBalancerWeight",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetMemory(val interface{}) {
	if err := j.validateSetMemoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"memory",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetPassword(val interface{}) {
	if err := j.validateSetPasswordParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"password",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetPasswordInherit(val interface{}) {
	if err := j.validateSetPasswordInheritParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"passwordInherit",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetPrivatePoolOptions(val interface{}) {
	if err := j.validateSetPrivatePoolOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"privatePoolOptions",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetRamRoleName(val interface{}) {
	if err := j.validateSetRamRoleNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ramRoleName",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetScalingConfigurationName(val interface{}) {
	if err := j.validateSetScalingConfigurationNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scalingConfigurationName",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetScalingGroupId(val interface{}) {
	if err := j.validateSetScalingGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scalingGroupId",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSecurityEnhancementStrategy(val interface{}) {
	if err := j.validateSetSecurityEnhancementStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityEnhancementStrategy",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSecurityGroupId(val interface{}) {
	if err := j.validateSetSecurityGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupId",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSecurityGroupIds(val interface{}) {
	if err := j.validateSetSecurityGroupIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupIds",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSpotDuration(val interface{}) {
	if err := j.validateSetSpotDurationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotDuration",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSpotInterruptionBehavior(val interface{}) {
	if err := j.validateSetSpotInterruptionBehaviorParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotInterruptionBehavior",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSpotPriceLimit(val interface{}) {
	if err := j.validateSetSpotPriceLimitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotPriceLimit",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSpotPriceLimitForInstanceType(val interface{}) {
	if err := j.validateSetSpotPriceLimitForInstanceTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotPriceLimitForInstanceType",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSpotStrategy(val interface{}) {
	if err := j.validateSetSpotStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotStrategy",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSystemDiskAutoSnapshotPolicyId(val interface{}) {
	if err := j.validateSetSystemDiskAutoSnapshotPolicyIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskAutoSnapshotPolicyId",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSystemDiskBurstingEnabled(val interface{}) {
	if err := j.validateSetSystemDiskBurstingEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskBurstingEnabled",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSystemDiskCategories(val interface{}) {
	if err := j.validateSetSystemDiskCategoriesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskCategories",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSystemDiskCategory(val interface{}) {
	if err := j.validateSetSystemDiskCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskCategory",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSystemDiskDescription(val interface{}) {
	if err := j.validateSetSystemDiskDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskDescription",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSystemDiskDiskName(val interface{}) {
	if err := j.validateSetSystemDiskDiskNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskDiskName",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSystemDiskEncryptAlgorithm(val interface{}) {
	if err := j.validateSetSystemDiskEncryptAlgorithmParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskEncryptAlgorithm",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSystemDiskEncrypted(val interface{}) {
	if err := j.validateSetSystemDiskEncryptedParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskEncrypted",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSystemDiskKmsKeyId(val interface{}) {
	if err := j.validateSetSystemDiskKmsKeyIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskKmsKeyId",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSystemDiskPerformanceLevel(val interface{}) {
	if err := j.validateSetSystemDiskPerformanceLevelParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskPerformanceLevel",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSystemDiskProvisionedIops(val interface{}) {
	if err := j.validateSetSystemDiskProvisionedIopsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskProvisionedIops",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetSystemDiskSize(val interface{}) {
	if err := j.validateSetSystemDiskSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskSize",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetTagList(val interface{}) {
	if err := j.validateSetTagListParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tagList",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetTenancy(val interface{}) {
	if err := j.validateSetTenancyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tenancy",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetUserData(val interface{}) {
	if err := j.validateSetUserDataParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"userData",
		val,
	)
}

func (j *jsiiProxy_RosScalingConfiguration)SetZoneId(val interface{}) {
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
func RosScalingConfiguration_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosScalingConfiguration_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ess.RosScalingConfiguration",
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
func RosScalingConfiguration_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosScalingConfiguration_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ess.RosScalingConfiguration",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosScalingConfiguration_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosScalingConfiguration_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ess.RosScalingConfiguration",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosScalingConfiguration_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-ess.RosScalingConfiguration",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosScalingConfiguration) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosScalingConfiguration) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosScalingConfiguration) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosScalingConfiguration) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosScalingConfiguration) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosScalingConfiguration) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosScalingConfiguration) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosScalingConfiguration) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosScalingConfiguration) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosScalingConfiguration) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosScalingConfiguration) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosScalingConfiguration) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosScalingConfiguration) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosScalingConfiguration) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosScalingConfiguration) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosScalingConfiguration) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosScalingConfiguration) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosScalingConfiguration) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosScalingConfiguration) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosScalingConfiguration) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosScalingConfiguration) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosScalingConfiguration) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

