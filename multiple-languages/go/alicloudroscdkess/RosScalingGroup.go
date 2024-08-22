package alicloudroscdkess

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ESS::ScalingGroup`, which is used to create a scaling group.
//
// A scaling group is a group of Elastic Compute Service (ECS) instances that are dynamically scaled based on the configured scenario. A scaling group does not immediately take effect after it is created. You must use ALIYUN::ESS::ScalingGroupEnable to enable the scaling group to trigger scaling activities and execute scaling rules.
type RosScalingGroup interface {
	alicloudroscdkcore.RosResource
	AllocationStrategy() interface{}
	SetAllocationStrategy(val interface{})
	AttrScalingGroupId() alicloudroscdkcore.IResolvable
	AttrScalingGroupName() alicloudroscdkcore.IResolvable
	AzBalance() interface{}
	SetAzBalance(val interface{})
	CompensateWithOnDemand() interface{}
	SetCompensateWithOnDemand(val interface{})
	ContainerGroupId() interface{}
	SetContainerGroupId(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	CustomPolicyArn() interface{}
	SetCustomPolicyArn(val interface{})
	DbInstanceIds() interface{}
	SetDbInstanceIds(val interface{})
	DefaultCooldown() interface{}
	SetDefaultCooldown(val interface{})
	DesiredCapacity() interface{}
	SetDesiredCapacity(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	GroupDeletionProtection() interface{}
	SetGroupDeletionProtection(val interface{})
	GroupType() interface{}
	SetGroupType(val interface{})
	HealthCheckType() interface{}
	SetHealthCheckType(val interface{})
	InstanceId() interface{}
	SetInstanceId(val interface{})
	LaunchTemplateId() interface{}
	SetLaunchTemplateId(val interface{})
	LaunchTemplateOverrides() interface{}
	SetLaunchTemplateOverrides(val interface{})
	LaunchTemplateVersion() interface{}
	SetLaunchTemplateVersion(val interface{})
	LoadBalancerIds() interface{}
	SetLoadBalancerIds(val interface{})
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
	MaxInstanceLifetime() interface{}
	SetMaxInstanceLifetime(val interface{})
	MaxSize() interface{}
	SetMaxSize(val interface{})
	MinSize() interface{}
	SetMinSize(val interface{})
	MultiAzPolicy() interface{}
	SetMultiAzPolicy(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	NotificationConfigurations() interface{}
	SetNotificationConfigurations(val interface{})
	OnDemandBaseCapacity() interface{}
	SetOnDemandBaseCapacity(val interface{})
	OnDemandPercentageAboveBaseCapacity() interface{}
	SetOnDemandPercentageAboveBaseCapacity(val interface{})
	ProtectedInstances() interface{}
	SetProtectedInstances(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	RemovalPolicys() interface{}
	SetRemovalPolicys(val interface{})
	ResourceGroupId() interface{}
	SetResourceGroupId(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	ScalingGroupName() interface{}
	SetScalingGroupName(val interface{})
	ScalingPolicy() interface{}
	SetScalingPolicy(val interface{})
	ServerGroups() interface{}
	SetServerGroups(val interface{})
	SpotAllocationStrategy() interface{}
	SetSpotAllocationStrategy(val interface{})
	SpotInstancePools() interface{}
	SetSpotInstancePools(val interface{})
	SpotInstanceRemedy() interface{}
	SetSpotInstanceRemedy(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	StandbyInstances() interface{}
	SetStandbyInstances(val interface{})
	Tags() *[]*RosScalingGroup_TagsProperty
	SetTags(val *[]*RosScalingGroup_TagsProperty)
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VSwitchId() interface{}
	SetVSwitchId(val interface{})
	VSwitchIds() interface{}
	SetVSwitchIds(val interface{})
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

// The jsii proxy struct for RosScalingGroup
type jsiiProxy_RosScalingGroup struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosScalingGroup) AllocationStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"allocationStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) AttrScalingGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScalingGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) AttrScalingGroupName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScalingGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) AzBalance() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"azBalance",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) CompensateWithOnDemand() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"compensateWithOnDemand",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) ContainerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"containerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) CustomPolicyArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"customPolicyArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) DbInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) DefaultCooldown() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"defaultCooldown",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) DesiredCapacity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"desiredCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) GroupDeletionProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"groupDeletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) GroupType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"groupType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) HealthCheckType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"healthCheckType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) InstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) LaunchTemplateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"launchTemplateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) LaunchTemplateOverrides() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"launchTemplateOverrides",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) LaunchTemplateVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"launchTemplateVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) LoadBalancerIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"loadBalancerIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) MaxInstanceLifetime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maxInstanceLifetime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) MaxSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maxSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) MinSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"minSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) MultiAzPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"multiAzPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) NotificationConfigurations() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"notificationConfigurations",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) OnDemandBaseCapacity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"onDemandBaseCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) OnDemandPercentageAboveBaseCapacity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"onDemandPercentageAboveBaseCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) ProtectedInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"protectedInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) RemovalPolicys() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"removalPolicys",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) ScalingGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"scalingGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) ScalingPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"scalingPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) ServerGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"serverGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) SpotAllocationStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotAllocationStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) SpotInstancePools() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotInstancePools",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) SpotInstanceRemedy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotInstanceRemedy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) StandbyInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"standbyInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) Tags() *[]*RosScalingGroup_TagsProperty {
	var returns *[]*RosScalingGroup_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) VSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingGroup) VSwitchIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchIds",
		&returns,
	)
	return returns
}


func NewRosScalingGroup(scope alicloudroscdkcore.Construct, id *string, props *RosScalingGroupProps, enableResourcePropertyConstraint *bool) RosScalingGroup {
	_init_.Initialize()

	if err := validateNewRosScalingGroupParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosScalingGroup{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ess.RosScalingGroup",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosScalingGroup_Override(r RosScalingGroup, scope alicloudroscdkcore.Construct, id *string, props *RosScalingGroupProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ess.RosScalingGroup",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetAllocationStrategy(val interface{}) {
	if err := j.validateSetAllocationStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"allocationStrategy",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetAzBalance(val interface{}) {
	if err := j.validateSetAzBalanceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"azBalance",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetCompensateWithOnDemand(val interface{}) {
	if err := j.validateSetCompensateWithOnDemandParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"compensateWithOnDemand",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetContainerGroupId(val interface{}) {
	if err := j.validateSetContainerGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"containerGroupId",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetCustomPolicyArn(val interface{}) {
	if err := j.validateSetCustomPolicyArnParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"customPolicyArn",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetDbInstanceIds(val interface{}) {
	if err := j.validateSetDbInstanceIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceIds",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetDefaultCooldown(val interface{}) {
	if err := j.validateSetDefaultCooldownParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"defaultCooldown",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetDesiredCapacity(val interface{}) {
	if err := j.validateSetDesiredCapacityParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"desiredCapacity",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetGroupDeletionProtection(val interface{}) {
	if err := j.validateSetGroupDeletionProtectionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"groupDeletionProtection",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetGroupType(val interface{}) {
	if err := j.validateSetGroupTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"groupType",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetHealthCheckType(val interface{}) {
	if err := j.validateSetHealthCheckTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"healthCheckType",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetInstanceId(val interface{}) {
	if err := j.validateSetInstanceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceId",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetLaunchTemplateId(val interface{}) {
	if err := j.validateSetLaunchTemplateIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"launchTemplateId",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetLaunchTemplateOverrides(val interface{}) {
	if err := j.validateSetLaunchTemplateOverridesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"launchTemplateOverrides",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetLaunchTemplateVersion(val interface{}) {
	if err := j.validateSetLaunchTemplateVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"launchTemplateVersion",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetLoadBalancerIds(val interface{}) {
	if err := j.validateSetLoadBalancerIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"loadBalancerIds",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetMaxInstanceLifetime(val interface{}) {
	if err := j.validateSetMaxInstanceLifetimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maxInstanceLifetime",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetMaxSize(val interface{}) {
	if err := j.validateSetMaxSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maxSize",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetMinSize(val interface{}) {
	if err := j.validateSetMinSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"minSize",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetMultiAzPolicy(val interface{}) {
	if err := j.validateSetMultiAzPolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"multiAzPolicy",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetNotificationConfigurations(val interface{}) {
	if err := j.validateSetNotificationConfigurationsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"notificationConfigurations",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetOnDemandBaseCapacity(val interface{}) {
	if err := j.validateSetOnDemandBaseCapacityParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"onDemandBaseCapacity",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetOnDemandPercentageAboveBaseCapacity(val interface{}) {
	if err := j.validateSetOnDemandPercentageAboveBaseCapacityParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"onDemandPercentageAboveBaseCapacity",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetProtectedInstances(val interface{}) {
	if err := j.validateSetProtectedInstancesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"protectedInstances",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetRemovalPolicys(val interface{}) {
	if err := j.validateSetRemovalPolicysParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"removalPolicys",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetScalingGroupName(val interface{}) {
	if err := j.validateSetScalingGroupNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scalingGroupName",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetScalingPolicy(val interface{}) {
	if err := j.validateSetScalingPolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scalingPolicy",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetServerGroups(val interface{}) {
	if err := j.validateSetServerGroupsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"serverGroups",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetSpotAllocationStrategy(val interface{}) {
	if err := j.validateSetSpotAllocationStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotAllocationStrategy",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetSpotInstancePools(val interface{}) {
	if err := j.validateSetSpotInstancePoolsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotInstancePools",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetSpotInstanceRemedy(val interface{}) {
	if err := j.validateSetSpotInstanceRemedyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotInstanceRemedy",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetStandbyInstances(val interface{}) {
	if err := j.validateSetStandbyInstancesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"standbyInstances",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetTags(val *[]*RosScalingGroup_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetVSwitchId(val interface{}) {
	if err := j.validateSetVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchId",
		val,
	)
}

func (j *jsiiProxy_RosScalingGroup)SetVSwitchIds(val interface{}) {
	if err := j.validateSetVSwitchIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchIds",
		val,
	)
}

// Return whether the given object is a Construct.
func RosScalingGroup_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosScalingGroup_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ess.RosScalingGroup",
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
func RosScalingGroup_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosScalingGroup_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ess.RosScalingGroup",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosScalingGroup_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosScalingGroup_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ess.RosScalingGroup",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosScalingGroup_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-ess.RosScalingGroup",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosScalingGroup) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosScalingGroup) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosScalingGroup) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosScalingGroup) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosScalingGroup) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosScalingGroup) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosScalingGroup) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosScalingGroup) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosScalingGroup) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosScalingGroup) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosScalingGroup) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosScalingGroup) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosScalingGroup) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosScalingGroup) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosScalingGroup) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosScalingGroup) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosScalingGroup) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosScalingGroup) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosScalingGroup) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosScalingGroup) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosScalingGroup) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosScalingGroup) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

