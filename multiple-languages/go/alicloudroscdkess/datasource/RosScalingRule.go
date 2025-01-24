package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `DATASOURCE::ESS::ScalingRule`.
type RosScalingRule interface {
	alicloudroscdkcore.RosResource
	AttrAdjustmentType() alicloudroscdkcore.IResolvable
	AttrAdjustmentValue() alicloudroscdkcore.IResolvable
	AttrAlarms() alicloudroscdkcore.IResolvable
	AttrCooldown() alicloudroscdkcore.IResolvable
	AttrDisableScaleIn() alicloudroscdkcore.IResolvable
	AttrEstimatedInstanceWarmup() alicloudroscdkcore.IResolvable
	AttrInitialMaxSize() alicloudroscdkcore.IResolvable
	AttrMaxSize() alicloudroscdkcore.IResolvable
	AttrMetricName() alicloudroscdkcore.IResolvable
	AttrMinAdjustmentMagnitude() alicloudroscdkcore.IResolvable
	AttrMinSize() alicloudroscdkcore.IResolvable
	AttrPredictiveScalingMode() alicloudroscdkcore.IResolvable
	AttrPredictiveTaskBufferTime() alicloudroscdkcore.IResolvable
	AttrPredictiveValueBehavior() alicloudroscdkcore.IResolvable
	AttrPredictiveValueBuffer() alicloudroscdkcore.IResolvable
	AttrScaleInEvaluationCount() alicloudroscdkcore.IResolvable
	AttrScaleOutEvaluationCount() alicloudroscdkcore.IResolvable
	AttrScalingGroupId() alicloudroscdkcore.IResolvable
	AttrScalingRuleAri() alicloudroscdkcore.IResolvable
	AttrScalingRuleId() alicloudroscdkcore.IResolvable
	AttrScalingRuleName() alicloudroscdkcore.IResolvable
	AttrScalingRuleType() alicloudroscdkcore.IResolvable
	AttrStepAdjustments() alicloudroscdkcore.IResolvable
	AttrTargetValue() alicloudroscdkcore.IResolvable
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
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
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	RefreshOptions() interface{}
	SetRefreshOptions(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	ScalingRuleId() interface{}
	SetScalingRuleId(val interface{})
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
	FetchCondition() alicloudroscdkcore.RosCondition
	FetchDesc() *string
	FetchRosDependency() *[]*string
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

// The jsii proxy struct for RosScalingRule
type jsiiProxy_RosScalingRule struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosScalingRule) AttrAdjustmentType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAdjustmentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrAdjustmentValue() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAdjustmentValue",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrAlarms() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAlarms",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrCooldown() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCooldown",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrDisableScaleIn() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDisableScaleIn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrEstimatedInstanceWarmup() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEstimatedInstanceWarmup",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrInitialMaxSize() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInitialMaxSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrMaxSize() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMaxSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrMetricName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMetricName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrMinAdjustmentMagnitude() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMinAdjustmentMagnitude",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrMinSize() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMinSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrPredictiveScalingMode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPredictiveScalingMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrPredictiveTaskBufferTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPredictiveTaskBufferTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrPredictiveValueBehavior() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPredictiveValueBehavior",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrPredictiveValueBuffer() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPredictiveValueBuffer",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrScaleInEvaluationCount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScaleInEvaluationCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrScaleOutEvaluationCount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScaleOutEvaluationCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrScalingGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScalingGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrScalingRuleAri() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScalingRuleAri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrScalingRuleId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScalingRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrScalingRuleName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScalingRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrScalingRuleType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScalingRuleType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrStepAdjustments() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrStepAdjustments",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) AttrTargetValue() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTargetValue",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) RefreshOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"refreshOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) ScalingRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"scalingRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosScalingRule) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosScalingRule(scope alicloudroscdkcore.Construct, id *string, props *RosScalingRuleProps, enableResourcePropertyConstraint *bool) RosScalingRule {
	_init_.Initialize()

	if err := validateNewRosScalingRuleParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosScalingRule{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ess.datasource.RosScalingRule",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosScalingRule_Override(r RosScalingRule, scope alicloudroscdkcore.Construct, id *string, props *RosScalingRuleProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ess.datasource.RosScalingRule",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosScalingRule)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosScalingRule)SetRefreshOptions(val interface{}) {
	if err := j.validateSetRefreshOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"refreshOptions",
		val,
	)
}

func (j *jsiiProxy_RosScalingRule)SetScalingRuleId(val interface{}) {
	if err := j.validateSetScalingRuleIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scalingRuleId",
		val,
	)
}

// Return whether the given object is a Construct.
func RosScalingRule_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosScalingRule_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ess.datasource.RosScalingRule",
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
func RosScalingRule_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosScalingRule_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ess.datasource.RosScalingRule",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosScalingRule_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosScalingRule_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ess.datasource.RosScalingRule",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosScalingRule_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-ess.datasource.RosScalingRule",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosScalingRule) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosScalingRule) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosScalingRule) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosScalingRule) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosScalingRule) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosScalingRule) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosScalingRule) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosScalingRule) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosScalingRule) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosScalingRule) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosScalingRule) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosScalingRule) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosScalingRule) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosScalingRule) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosScalingRule) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosScalingRule) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosScalingRule) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosScalingRule) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosScalingRule) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosScalingRule) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosScalingRule) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosScalingRule) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosScalingRule) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosScalingRule) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosScalingRule) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

