package alicloudroscdkcms

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::ResourceMetricRule`, which is used to create an alert rule for a metric of a resource.
type RosResourceMetricRule interface {
	alicloudroscdkcore.RosResource
	AttrRuleId() alicloudroscdkcore.IResolvable
	AttrRuleName() alicloudroscdkcore.IResolvable
	CompositeExpression() interface{}
	SetCompositeExpression(val interface{})
	ContactGroups() interface{}
	SetContactGroups(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DeletionForce() interface{}
	SetDeletionForce(val interface{})
	EffectiveInterval() interface{}
	SetEffectiveInterval(val interface{})
	EmailSubject() interface{}
	SetEmailSubject(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Escalations() interface{}
	SetEscalations(val interface{})
	Interval() interface{}
	SetInterval(val interface{})
	Labels() interface{}
	SetLabels(val interface{})
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
	MetricName() interface{}
	SetMetricName(val interface{})
	Namespace() interface{}
	SetNamespace(val interface{})
	NoDataPolicy() interface{}
	SetNoDataPolicy(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	NoEffectiveInterval() interface{}
	SetNoEffectiveInterval(val interface{})
	Period() interface{}
	SetPeriod(val interface{})
	Prometheus() interface{}
	SetPrometheus(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	Resources() interface{}
	SetResources(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	RuleId() interface{}
	SetRuleId(val interface{})
	RuleName() interface{}
	SetRuleName(val interface{})
	SilenceTime() interface{}
	SetSilenceTime(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	Webhook() interface{}
	SetWebhook(val interface{})
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

// The jsii proxy struct for RosResourceMetricRule
type jsiiProxy_RosResourceMetricRule struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosResourceMetricRule) AttrRuleId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) AttrRuleName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) CompositeExpression() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"compositeExpression",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) ContactGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"contactGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) DeletionForce() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deletionForce",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) EffectiveInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"effectiveInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) EmailSubject() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"emailSubject",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) Escalations() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"escalations",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) Interval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"interval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) Labels() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"labels",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) MetricName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"metricName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) Namespace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"namespace",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) NoDataPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"noDataPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) NoEffectiveInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"noEffectiveInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) Prometheus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"prometheus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) Resources() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resources",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) RuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ruleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) RuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ruleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) SilenceTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"silenceTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceMetricRule) Webhook() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"webhook",
		&returns,
	)
	return returns
}


func NewRosResourceMetricRule(scope alicloudroscdkcore.Construct, id *string, props *RosResourceMetricRuleProps, enableResourcePropertyConstraint *bool) RosResourceMetricRule {
	_init_.Initialize()

	if err := validateNewRosResourceMetricRuleParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosResourceMetricRule{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cms.RosResourceMetricRule",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosResourceMetricRule_Override(r RosResourceMetricRule, scope alicloudroscdkcore.Construct, id *string, props *RosResourceMetricRuleProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cms.RosResourceMetricRule",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetCompositeExpression(val interface{}) {
	if err := j.validateSetCompositeExpressionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"compositeExpression",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetContactGroups(val interface{}) {
	if err := j.validateSetContactGroupsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"contactGroups",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetDeletionForce(val interface{}) {
	if err := j.validateSetDeletionForceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deletionForce",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetEffectiveInterval(val interface{}) {
	if err := j.validateSetEffectiveIntervalParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"effectiveInterval",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetEmailSubject(val interface{}) {
	if err := j.validateSetEmailSubjectParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"emailSubject",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetEscalations(val interface{}) {
	if err := j.validateSetEscalationsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"escalations",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetInterval(val interface{}) {
	if err := j.validateSetIntervalParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"interval",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetLabels(val interface{}) {
	if err := j.validateSetLabelsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"labels",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetMetricName(val interface{}) {
	if err := j.validateSetMetricNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"metricName",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetNamespace(val interface{}) {
	if err := j.validateSetNamespaceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"namespace",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetNoDataPolicy(val interface{}) {
	if err := j.validateSetNoDataPolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"noDataPolicy",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetNoEffectiveInterval(val interface{}) {
	if err := j.validateSetNoEffectiveIntervalParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"noEffectiveInterval",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetPrometheus(val interface{}) {
	if err := j.validateSetPrometheusParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"prometheus",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetResources(val interface{}) {
	if err := j.validateSetResourcesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resources",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetRuleId(val interface{}) {
	if err := j.validateSetRuleIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ruleId",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetRuleName(val interface{}) {
	if err := j.validateSetRuleNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ruleName",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetSilenceTime(val interface{}) {
	if err := j.validateSetSilenceTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"silenceTime",
		val,
	)
}

func (j *jsiiProxy_RosResourceMetricRule)SetWebhook(val interface{}) {
	if err := j.validateSetWebhookParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"webhook",
		val,
	)
}

// Return whether the given object is a Construct.
func RosResourceMetricRule_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosResourceMetricRule_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cms.RosResourceMetricRule",
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
func RosResourceMetricRule_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosResourceMetricRule_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cms.RosResourceMetricRule",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosResourceMetricRule_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosResourceMetricRule_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cms.RosResourceMetricRule",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosResourceMetricRule_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-cms.RosResourceMetricRule",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosResourceMetricRule) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosResourceMetricRule) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosResourceMetricRule) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosResourceMetricRule) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosResourceMetricRule) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosResourceMetricRule) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosResourceMetricRule) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosResourceMetricRule) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosResourceMetricRule) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosResourceMetricRule) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosResourceMetricRule) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosResourceMetricRule) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosResourceMetricRule) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosResourceMetricRule) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosResourceMetricRule) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosResourceMetricRule) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosResourceMetricRule) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosResourceMetricRule) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosResourceMetricRule) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosResourceMetricRule) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosResourceMetricRule) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosResourceMetricRule) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

