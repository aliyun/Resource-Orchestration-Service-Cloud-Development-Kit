package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkdts/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdts/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::DTS::JobMonitorRule`.
type JobMonitorRule interface {
	alicloudroscdkcore.Resource
	IJobMonitorRule
	// Attribute DelayRuleTime: The threshold that triggers the alert.
	AttrDelayRuleTime() interface{}
	// Attribute DtsJobId: The ID of the data migration, data synchronization, or change tracking task.
	AttrDtsJobId() interface{}
	// Attribute Period: The statistical period for incremental validation tasks, in minutes.
	AttrPeriod() interface{}
	// Attribute Phone: The mobile phone numbers that receive alert notifications.
	//
	// Multiple mobile numbers are separated by commas (,).
	AttrPhone() interface{}
	// Attribute State: Indicates whether the monitoring rule is enabled.
	AttrState() interface{}
	// Attribute Times: The number of cycles for the incremental validation task.
	AttrTimes() interface{}
	// Attribute Type: The type of the monitoring rule.
	AttrType() interface{}
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	// The environment this resource belongs to.
	//
	// For resources that are created and managed by the CDK
	// (generally, those created by creating new class instances like Role, Bucket, etc.),
	// this is always the same as the environment of the stack they belong to;
	// however, for imported resources
	// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
	// that might be different than the stack they were imported into.
	Env() alicloudroscdkcore.IResourceEnvironment
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
	Props() *JobMonitorRuleProps
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
	FetchCondition() alicloudroscdkcore.RosCondition
	FetchDependency() *[]*string
	FetchResourceDesc() *string
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

// The jsii proxy struct for JobMonitorRule
type jsiiProxy_JobMonitorRule struct {
	internal.Type__alicloudroscdkcoreResource
	jsiiProxy_IJobMonitorRule
}

func (j *jsiiProxy_JobMonitorRule) AttrDelayRuleTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDelayRuleTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_JobMonitorRule) AttrDtsJobId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDtsJobId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_JobMonitorRule) AttrPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_JobMonitorRule) AttrPhone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPhone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_JobMonitorRule) AttrState() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrState",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_JobMonitorRule) AttrTimes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTimes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_JobMonitorRule) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_JobMonitorRule) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_JobMonitorRule) Env() alicloudroscdkcore.IResourceEnvironment {
	var returns alicloudroscdkcore.IResourceEnvironment
	_jsii_.Get(
		j,
		"env",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_JobMonitorRule) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_JobMonitorRule) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_JobMonitorRule) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_JobMonitorRule) Props() *JobMonitorRuleProps {
	var returns *JobMonitorRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_JobMonitorRule) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_JobMonitorRule) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_JobMonitorRule) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_JobMonitorRule) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewJobMonitorRule(scope alicloudroscdkcore.Construct, id *string, props *JobMonitorRuleProps, enableResourcePropertyConstraint *bool) JobMonitorRule {
	_init_.Initialize()

	if err := validateNewJobMonitorRuleParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_JobMonitorRule{}

	_jsii_.Create(
		"@alicloud/ros-cdk-dts.datasource.JobMonitorRule",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewJobMonitorRule_Override(j JobMonitorRule, scope alicloudroscdkcore.Construct, id *string, props *JobMonitorRuleProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-dts.datasource.JobMonitorRule",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		j,
	)
}

func (j *jsiiProxy_JobMonitorRule)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_JobMonitorRule)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_JobMonitorRule)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_JobMonitorRule)SetScope(val alicloudroscdkcore.Construct) {
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
func JobMonitorRule_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateJobMonitorRule_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-dts.datasource.JobMonitorRule",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (j *jsiiProxy_JobMonitorRule) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := j.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		j,
		"addCondition",
		[]interface{}{condition},
	)
}

func (j *jsiiProxy_JobMonitorRule) AddCount(count interface{}) {
	if err := j.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		j,
		"addCount",
		[]interface{}{count},
	)
}

func (j *jsiiProxy_JobMonitorRule) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := j.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		j,
		"addDependency",
		[]interface{}{resource},
	)
}

func (j *jsiiProxy_JobMonitorRule) AddResourceDesc(desc *string) {
	if err := j.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		j,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (j *jsiiProxy_JobMonitorRule) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := j.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		j,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (j *jsiiProxy_JobMonitorRule) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		j,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (j *jsiiProxy_JobMonitorRule) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		j,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (j *jsiiProxy_JobMonitorRule) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		j,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (j *jsiiProxy_JobMonitorRule) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		j,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (j *jsiiProxy_JobMonitorRule) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := j.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		j,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (j *jsiiProxy_JobMonitorRule) OnPrepare() {
	_jsii_.InvokeVoid(
		j,
		"onPrepare",
		nil, // no parameters
	)
}

func (j *jsiiProxy_JobMonitorRule) OnSynthesize(session constructs.ISynthesisSession) {
	if err := j.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		j,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (j *jsiiProxy_JobMonitorRule) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		j,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (j *jsiiProxy_JobMonitorRule) Prepare() {
	_jsii_.InvokeVoid(
		j,
		"prepare",
		nil, // no parameters
	)
}

func (j *jsiiProxy_JobMonitorRule) SetMetadata(key *string, value interface{}) {
	if err := j.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		j,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (j *jsiiProxy_JobMonitorRule) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := j.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		j,
		"synthesize",
		[]interface{}{session},
	)
}

func (j *jsiiProxy_JobMonitorRule) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		j,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (j *jsiiProxy_JobMonitorRule) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		j,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

