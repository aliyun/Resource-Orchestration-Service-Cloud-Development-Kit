package alicloudroscdkecs

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::AutoProvisioningGroup`, which is used to create an auto provisioning group.
type RosAutoProvisioningGroup interface {
	alicloudroscdkcore.RosResource
	AttrAutoProvisioningGroupId() alicloudroscdkcore.IResolvable
	AttrAutoProvisioningGroupName() alicloudroscdkcore.IResolvable
	AutoProvisioningGroupName() interface{}
	SetAutoProvisioningGroupName(val interface{})
	AutoProvisioningGroupType() interface{}
	SetAutoProvisioningGroupType(val interface{})
	CheckExecutionStatus() interface{}
	SetCheckExecutionStatus(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DefaultTargetCapacityType() interface{}
	SetDefaultTargetCapacityType(val interface{})
	Description() interface{}
	SetDescription(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	ExcessCapacityTerminationPolicy() interface{}
	SetExcessCapacityTerminationPolicy(val interface{})
	LaunchConfiguration() interface{}
	SetLaunchConfiguration(val interface{})
	LaunchTemplateConfig() interface{}
	SetLaunchTemplateConfig(val interface{})
	LaunchTemplateId() interface{}
	SetLaunchTemplateId(val interface{})
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
	MaxSpotPrice() interface{}
	SetMaxSpotPrice(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	PayAsYouGoAllocationStrategy() interface{}
	SetPayAsYouGoAllocationStrategy(val interface{})
	PayAsYouGoTargetCapacity() interface{}
	SetPayAsYouGoTargetCapacity(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	SpotAllocationStrategy() interface{}
	SetSpotAllocationStrategy(val interface{})
	SpotInstanceInterruptionBehavior() interface{}
	SetSpotInstanceInterruptionBehavior(val interface{})
	SpotInstancePoolsToUseCount() interface{}
	SetSpotInstancePoolsToUseCount(val interface{})
	SpotTargetCapacity() interface{}
	SetSpotTargetCapacity(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	TerminateInstances() interface{}
	SetTerminateInstances(val interface{})
	TerminateInstancesWithExpiration() interface{}
	SetTerminateInstancesWithExpiration(val interface{})
	TotalTargetCapacity() interface{}
	SetTotalTargetCapacity(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	ValidFrom() interface{}
	SetValidFrom(val interface{})
	ValidUntil() interface{}
	SetValidUntil(val interface{})
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

// The jsii proxy struct for RosAutoProvisioningGroup
type jsiiProxy_RosAutoProvisioningGroup struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosAutoProvisioningGroup) AttrAutoProvisioningGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAutoProvisioningGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) AttrAutoProvisioningGroupName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAutoProvisioningGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) AutoProvisioningGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoProvisioningGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) AutoProvisioningGroupType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoProvisioningGroupType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) CheckExecutionStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"checkExecutionStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) DefaultTargetCapacityType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"defaultTargetCapacityType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) ExcessCapacityTerminationPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"excessCapacityTerminationPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) LaunchConfiguration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"launchConfiguration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) LaunchTemplateConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"launchTemplateConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) LaunchTemplateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"launchTemplateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) LaunchTemplateVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"launchTemplateVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) MaxSpotPrice() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maxSpotPrice",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) PayAsYouGoAllocationStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"payAsYouGoAllocationStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) PayAsYouGoTargetCapacity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"payAsYouGoTargetCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) SpotAllocationStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotAllocationStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) SpotInstanceInterruptionBehavior() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotInstanceInterruptionBehavior",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) SpotInstancePoolsToUseCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotInstancePoolsToUseCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) SpotTargetCapacity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotTargetCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) TerminateInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"terminateInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) TerminateInstancesWithExpiration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"terminateInstancesWithExpiration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) TotalTargetCapacity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"totalTargetCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) ValidFrom() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"validFrom",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoProvisioningGroup) ValidUntil() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"validUntil",
		&returns,
	)
	return returns
}


func NewRosAutoProvisioningGroup(scope alicloudroscdkcore.Construct, id *string, props *RosAutoProvisioningGroupProps, enableResourcePropertyConstraint *bool) RosAutoProvisioningGroup {
	_init_.Initialize()

	if err := validateNewRosAutoProvisioningGroupParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosAutoProvisioningGroup{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosAutoProvisioningGroup_Override(r RosAutoProvisioningGroup, scope alicloudroscdkcore.Construct, id *string, props *RosAutoProvisioningGroupProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetAutoProvisioningGroupName(val interface{}) {
	if err := j.validateSetAutoProvisioningGroupNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoProvisioningGroupName",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetAutoProvisioningGroupType(val interface{}) {
	if err := j.validateSetAutoProvisioningGroupTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoProvisioningGroupType",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetCheckExecutionStatus(val interface{}) {
	if err := j.validateSetCheckExecutionStatusParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"checkExecutionStatus",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetDefaultTargetCapacityType(val interface{}) {
	if err := j.validateSetDefaultTargetCapacityTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"defaultTargetCapacityType",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetExcessCapacityTerminationPolicy(val interface{}) {
	if err := j.validateSetExcessCapacityTerminationPolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"excessCapacityTerminationPolicy",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetLaunchConfiguration(val interface{}) {
	if err := j.validateSetLaunchConfigurationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"launchConfiguration",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetLaunchTemplateConfig(val interface{}) {
	if err := j.validateSetLaunchTemplateConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"launchTemplateConfig",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetLaunchTemplateId(val interface{}) {
	if err := j.validateSetLaunchTemplateIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"launchTemplateId",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetLaunchTemplateVersion(val interface{}) {
	if err := j.validateSetLaunchTemplateVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"launchTemplateVersion",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetMaxSpotPrice(val interface{}) {
	if err := j.validateSetMaxSpotPriceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maxSpotPrice",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetPayAsYouGoAllocationStrategy(val interface{}) {
	if err := j.validateSetPayAsYouGoAllocationStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"payAsYouGoAllocationStrategy",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetPayAsYouGoTargetCapacity(val interface{}) {
	if err := j.validateSetPayAsYouGoTargetCapacityParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"payAsYouGoTargetCapacity",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetSpotAllocationStrategy(val interface{}) {
	if err := j.validateSetSpotAllocationStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotAllocationStrategy",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetSpotInstanceInterruptionBehavior(val interface{}) {
	if err := j.validateSetSpotInstanceInterruptionBehaviorParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotInstanceInterruptionBehavior",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetSpotInstancePoolsToUseCount(val interface{}) {
	if err := j.validateSetSpotInstancePoolsToUseCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotInstancePoolsToUseCount",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetSpotTargetCapacity(val interface{}) {
	if err := j.validateSetSpotTargetCapacityParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotTargetCapacity",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetTerminateInstances(val interface{}) {
	if err := j.validateSetTerminateInstancesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"terminateInstances",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetTerminateInstancesWithExpiration(val interface{}) {
	if err := j.validateSetTerminateInstancesWithExpirationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"terminateInstancesWithExpiration",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetTotalTargetCapacity(val interface{}) {
	if err := j.validateSetTotalTargetCapacityParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"totalTargetCapacity",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetValidFrom(val interface{}) {
	if err := j.validateSetValidFromParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"validFrom",
		val,
	)
}

func (j *jsiiProxy_RosAutoProvisioningGroup)SetValidUntil(val interface{}) {
	if err := j.validateSetValidUntilParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"validUntil",
		val,
	)
}

// Return whether the given object is a Construct.
func RosAutoProvisioningGroup_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosAutoProvisioningGroup_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup",
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
func RosAutoProvisioningGroup_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosAutoProvisioningGroup_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosAutoProvisioningGroup_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosAutoProvisioningGroup_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosAutoProvisioningGroup_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-ecs.RosAutoProvisioningGroup",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosAutoProvisioningGroup) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosAutoProvisioningGroup) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosAutoProvisioningGroup) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosAutoProvisioningGroup) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosAutoProvisioningGroup) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosAutoProvisioningGroup) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosAutoProvisioningGroup) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosAutoProvisioningGroup) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosAutoProvisioningGroup) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosAutoProvisioningGroup) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosAutoProvisioningGroup) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosAutoProvisioningGroup) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosAutoProvisioningGroup) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosAutoProvisioningGroup) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosAutoProvisioningGroup) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosAutoProvisioningGroup) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosAutoProvisioningGroup) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosAutoProvisioningGroup) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosAutoProvisioningGroup) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosAutoProvisioningGroup) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosAutoProvisioningGroup) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosAutoProvisioningGroup) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

