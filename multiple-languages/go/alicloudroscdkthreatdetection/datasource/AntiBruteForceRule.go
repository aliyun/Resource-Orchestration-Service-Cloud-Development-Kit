package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::ThreatDetection::AntiBruteForceRule`.
type AntiBruteForceRule interface {
	alicloudroscdkcore.Resource
	// Attribute AntiBruteForceRuleId: The ID of the defense rule.
	AttrAntiBruteForceRuleId() alicloudroscdkcore.IResolvable
	// Attribute AntiBruteForceRuleName: The name of the defense rule.
	AttrAntiBruteForceRuleName() alicloudroscdkcore.IResolvable
	// Attribute DefaultRule: Indicates whether the defense rule is the default rule.
	AttrDefaultRule() alicloudroscdkcore.IResolvable
	// Attribute FailCount: The threshold of logon failures that is specified in the defense rule.
	AttrFailCount() alicloudroscdkcore.IResolvable
	// Attribute ForbiddenTime: The period of time during which logons from an account are not allowed.
	//
	// Unit: minutes.
	AttrForbiddenTime() alicloudroscdkcore.IResolvable
	// Attribute Span: The period of time during which logon failures from an account are measured.
	//
	// Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP address of attackers cannot be used to log on to the server in the specified period of time.
	AttrSpan() alicloudroscdkcore.IResolvable
	// Attribute UuidList: An array consisting of the UUIDs of servers to which the defense rule is applied.
	AttrUuidList() alicloudroscdkcore.IResolvable
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
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
	Props() *AntiBruteForceRuleProps
	SetProps(val *AntiBruteForceRuleProps)
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

// The jsii proxy struct for AntiBruteForceRule
type jsiiProxy_AntiBruteForceRule struct {
	internal.Type__alicloudroscdkcoreResource
}

func (j *jsiiProxy_AntiBruteForceRule) AttrAntiBruteForceRuleId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAntiBruteForceRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AntiBruteForceRule) AttrAntiBruteForceRuleName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAntiBruteForceRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AntiBruteForceRule) AttrDefaultRule() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDefaultRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AntiBruteForceRule) AttrFailCount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFailCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AntiBruteForceRule) AttrForbiddenTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrForbiddenTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AntiBruteForceRule) AttrSpan() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSpan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AntiBruteForceRule) AttrUuidList() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrUuidList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AntiBruteForceRule) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AntiBruteForceRule) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AntiBruteForceRule) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AntiBruteForceRule) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AntiBruteForceRule) Props() *AntiBruteForceRuleProps {
	var returns *AntiBruteForceRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AntiBruteForceRule) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AntiBruteForceRule) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AntiBruteForceRule) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AntiBruteForceRule) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewAntiBruteForceRule(scope alicloudroscdkcore.Construct, id *string, props *AntiBruteForceRuleProps, enableResourcePropertyConstraint *bool) AntiBruteForceRule {
	_init_.Initialize()

	if err := validateNewAntiBruteForceRuleParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_AntiBruteForceRule{}

	_jsii_.Create(
		"@alicloud/ros-cdk-threatdetection.datasource.AntiBruteForceRule",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewAntiBruteForceRule_Override(a AntiBruteForceRule, scope alicloudroscdkcore.Construct, id *string, props *AntiBruteForceRuleProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-threatdetection.datasource.AntiBruteForceRule",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		a,
	)
}

func (j *jsiiProxy_AntiBruteForceRule)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_AntiBruteForceRule)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_AntiBruteForceRule)SetProps(val *AntiBruteForceRuleProps) {
	if err := j.validateSetPropsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"props",
		val,
	)
}

func (j *jsiiProxy_AntiBruteForceRule)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_AntiBruteForceRule)SetScope(val alicloudroscdkcore.Construct) {
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
func AntiBruteForceRule_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateAntiBruteForceRule_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-threatdetection.datasource.AntiBruteForceRule",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (a *jsiiProxy_AntiBruteForceRule) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := a.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"addCondition",
		[]interface{}{condition},
	)
}

func (a *jsiiProxy_AntiBruteForceRule) AddCount(count interface{}) {
	if err := a.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"addCount",
		[]interface{}{count},
	)
}

func (a *jsiiProxy_AntiBruteForceRule) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := a.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"addDependency",
		[]interface{}{resource},
	)
}

func (a *jsiiProxy_AntiBruteForceRule) AddResourceDesc(desc *string) {
	if err := a.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (a *jsiiProxy_AntiBruteForceRule) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := a.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (a *jsiiProxy_AntiBruteForceRule) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		a,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (a *jsiiProxy_AntiBruteForceRule) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := a.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		a,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (a *jsiiProxy_AntiBruteForceRule) OnPrepare() {
	_jsii_.InvokeVoid(
		a,
		"onPrepare",
		nil, // no parameters
	)
}

func (a *jsiiProxy_AntiBruteForceRule) OnSynthesize(session constructs.ISynthesisSession) {
	if err := a.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (a *jsiiProxy_AntiBruteForceRule) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		a,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (a *jsiiProxy_AntiBruteForceRule) Prepare() {
	_jsii_.InvokeVoid(
		a,
		"prepare",
		nil, // no parameters
	)
}

func (a *jsiiProxy_AntiBruteForceRule) SetMetadata(key *string, value interface{}) {
	if err := a.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (a *jsiiProxy_AntiBruteForceRule) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := a.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"synthesize",
		[]interface{}{session},
	)
}

func (a *jsiiProxy_AntiBruteForceRule) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		a,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (a *jsiiProxy_AntiBruteForceRule) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		a,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}
