package alicloudroscdkehpc

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkehpc/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkehpc/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::EHPC::AutoScaleConfig`, which is used to configure the auto scaling settings of a cluster.
type RosAutoScaleConfig interface {
	alicloudroscdkcore.RosResource
	AttrClusterId() alicloudroscdkcore.IResolvable
	ClusterId() interface{}
	SetClusterId(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	EnableAutoGrow() interface{}
	SetEnableAutoGrow(val interface{})
	EnableAutoShrink() interface{}
	SetEnableAutoShrink(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	ExcludeNodes() interface{}
	SetExcludeNodes(val interface{})
	ExtraNodesGrowRatio() interface{}
	SetExtraNodesGrowRatio(val interface{})
	GrowIntervalInMinutes() interface{}
	SetGrowIntervalInMinutes(val interface{})
	GrowRatio() interface{}
	SetGrowRatio(val interface{})
	GrowTimeoutInMinutes() interface{}
	SetGrowTimeoutInMinutes(val interface{})
	ImageId() interface{}
	SetImageId(val interface{})
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
	MaxNodesInCluster() interface{}
	SetMaxNodesInCluster(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	Queues() interface{}
	SetQueues(val interface{})
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
	ShrinkIdleTimes() interface{}
	SetShrinkIdleTimes(val interface{})
	ShrinkIntervalInMinutes() interface{}
	SetShrinkIntervalInMinutes(val interface{})
	SpotPriceLimit() interface{}
	SetSpotPriceLimit(val interface{})
	SpotStrategy() interface{}
	SetSpotStrategy(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
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

// The jsii proxy struct for RosAutoScaleConfig
type jsiiProxy_RosAutoScaleConfig struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosAutoScaleConfig) AttrClusterId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) ClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"clusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) EnableAutoGrow() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableAutoGrow",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) EnableAutoShrink() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableAutoShrink",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) ExcludeNodes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"excludeNodes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) ExtraNodesGrowRatio() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"extraNodesGrowRatio",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) GrowIntervalInMinutes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"growIntervalInMinutes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) GrowRatio() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"growRatio",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) GrowTimeoutInMinutes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"growTimeoutInMinutes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) ImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) MaxNodesInCluster() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maxNodesInCluster",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) Queues() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"queues",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) ShrinkIdleTimes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"shrinkIdleTimes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) ShrinkIntervalInMinutes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"shrinkIntervalInMinutes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) SpotPriceLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotPriceLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) SpotStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAutoScaleConfig) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosAutoScaleConfig(scope alicloudroscdkcore.Construct, id *string, props *RosAutoScaleConfigProps, enableResourcePropertyConstraint *bool) RosAutoScaleConfig {
	_init_.Initialize()

	if err := validateNewRosAutoScaleConfigParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosAutoScaleConfig{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ehpc.RosAutoScaleConfig",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosAutoScaleConfig_Override(r RosAutoScaleConfig, scope alicloudroscdkcore.Construct, id *string, props *RosAutoScaleConfigProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ehpc.RosAutoScaleConfig",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosAutoScaleConfig)SetClusterId(val interface{}) {
	if err := j.validateSetClusterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"clusterId",
		val,
	)
}

func (j *jsiiProxy_RosAutoScaleConfig)SetEnableAutoGrow(val interface{}) {
	if err := j.validateSetEnableAutoGrowParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableAutoGrow",
		val,
	)
}

func (j *jsiiProxy_RosAutoScaleConfig)SetEnableAutoShrink(val interface{}) {
	if err := j.validateSetEnableAutoShrinkParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableAutoShrink",
		val,
	)
}

func (j *jsiiProxy_RosAutoScaleConfig)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosAutoScaleConfig)SetExcludeNodes(val interface{}) {
	if err := j.validateSetExcludeNodesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"excludeNodes",
		val,
	)
}

func (j *jsiiProxy_RosAutoScaleConfig)SetExtraNodesGrowRatio(val interface{}) {
	if err := j.validateSetExtraNodesGrowRatioParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"extraNodesGrowRatio",
		val,
	)
}

func (j *jsiiProxy_RosAutoScaleConfig)SetGrowIntervalInMinutes(val interface{}) {
	if err := j.validateSetGrowIntervalInMinutesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"growIntervalInMinutes",
		val,
	)
}

func (j *jsiiProxy_RosAutoScaleConfig)SetGrowRatio(val interface{}) {
	if err := j.validateSetGrowRatioParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"growRatio",
		val,
	)
}

func (j *jsiiProxy_RosAutoScaleConfig)SetGrowTimeoutInMinutes(val interface{}) {
	if err := j.validateSetGrowTimeoutInMinutesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"growTimeoutInMinutes",
		val,
	)
}

func (j *jsiiProxy_RosAutoScaleConfig)SetImageId(val interface{}) {
	if err := j.validateSetImageIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageId",
		val,
	)
}

func (j *jsiiProxy_RosAutoScaleConfig)SetMaxNodesInCluster(val interface{}) {
	if err := j.validateSetMaxNodesInClusterParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maxNodesInCluster",
		val,
	)
}

func (j *jsiiProxy_RosAutoScaleConfig)SetQueues(val interface{}) {
	if err := j.validateSetQueuesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"queues",
		val,
	)
}

func (j *jsiiProxy_RosAutoScaleConfig)SetShrinkIdleTimes(val interface{}) {
	if err := j.validateSetShrinkIdleTimesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"shrinkIdleTimes",
		val,
	)
}

func (j *jsiiProxy_RosAutoScaleConfig)SetShrinkIntervalInMinutes(val interface{}) {
	if err := j.validateSetShrinkIntervalInMinutesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"shrinkIntervalInMinutes",
		val,
	)
}

func (j *jsiiProxy_RosAutoScaleConfig)SetSpotPriceLimit(val interface{}) {
	if err := j.validateSetSpotPriceLimitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotPriceLimit",
		val,
	)
}

func (j *jsiiProxy_RosAutoScaleConfig)SetSpotStrategy(val interface{}) {
	if err := j.validateSetSpotStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotStrategy",
		val,
	)
}

// Return whether the given object is a Construct.
func RosAutoScaleConfig_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosAutoScaleConfig_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ehpc.RosAutoScaleConfig",
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
func RosAutoScaleConfig_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosAutoScaleConfig_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ehpc.RosAutoScaleConfig",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosAutoScaleConfig_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosAutoScaleConfig_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ehpc.RosAutoScaleConfig",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosAutoScaleConfig_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-ehpc.RosAutoScaleConfig",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosAutoScaleConfig) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosAutoScaleConfig) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosAutoScaleConfig) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosAutoScaleConfig) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosAutoScaleConfig) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosAutoScaleConfig) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosAutoScaleConfig) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosAutoScaleConfig) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosAutoScaleConfig) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosAutoScaleConfig) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosAutoScaleConfig) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosAutoScaleConfig) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosAutoScaleConfig) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosAutoScaleConfig) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosAutoScaleConfig) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosAutoScaleConfig) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosAutoScaleConfig) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosAutoScaleConfig) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosAutoScaleConfig) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosAutoScaleConfig) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosAutoScaleConfig) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosAutoScaleConfig) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

