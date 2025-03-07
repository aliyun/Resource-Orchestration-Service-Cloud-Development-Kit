package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkvod/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvod/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::VOD::MessageCallbacks`.
type MessageCallbacks interface {
	alicloudroscdkcore.Resource
	IMessageCallbacks
	// Attribute AppIds: The list of app IDs.
	AttrAppIds() interface{}
	// Attribute MessageCallbacks: The list of message callbacks.
	AttrMessageCallbacks() interface{}
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
	Props() *MessageCallbacksProps
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

// The jsii proxy struct for MessageCallbacks
type jsiiProxy_MessageCallbacks struct {
	internal.Type__alicloudroscdkcoreResource
	jsiiProxy_IMessageCallbacks
}

func (j *jsiiProxy_MessageCallbacks) AttrAppIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_MessageCallbacks) AttrMessageCallbacks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMessageCallbacks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_MessageCallbacks) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_MessageCallbacks) Env() alicloudroscdkcore.IResourceEnvironment {
	var returns alicloudroscdkcore.IResourceEnvironment
	_jsii_.Get(
		j,
		"env",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_MessageCallbacks) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_MessageCallbacks) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_MessageCallbacks) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_MessageCallbacks) Props() *MessageCallbacksProps {
	var returns *MessageCallbacksProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_MessageCallbacks) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_MessageCallbacks) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_MessageCallbacks) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_MessageCallbacks) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewMessageCallbacks(scope alicloudroscdkcore.Construct, id *string, props *MessageCallbacksProps, enableResourcePropertyConstraint *bool) MessageCallbacks {
	_init_.Initialize()

	if err := validateNewMessageCallbacksParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_MessageCallbacks{}

	_jsii_.Create(
		"@alicloud/ros-cdk-vod.datasource.MessageCallbacks",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewMessageCallbacks_Override(m MessageCallbacks, scope alicloudroscdkcore.Construct, id *string, props *MessageCallbacksProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-vod.datasource.MessageCallbacks",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		m,
	)
}

func (j *jsiiProxy_MessageCallbacks)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_MessageCallbacks)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_MessageCallbacks)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_MessageCallbacks)SetScope(val alicloudroscdkcore.Construct) {
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
func MessageCallbacks_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateMessageCallbacks_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-vod.datasource.MessageCallbacks",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (m *jsiiProxy_MessageCallbacks) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := m.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		m,
		"addCondition",
		[]interface{}{condition},
	)
}

func (m *jsiiProxy_MessageCallbacks) AddCount(count interface{}) {
	if err := m.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		m,
		"addCount",
		[]interface{}{count},
	)
}

func (m *jsiiProxy_MessageCallbacks) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := m.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		m,
		"addDependency",
		[]interface{}{resource},
	)
}

func (m *jsiiProxy_MessageCallbacks) AddResourceDesc(desc *string) {
	if err := m.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		m,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (m *jsiiProxy_MessageCallbacks) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := m.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		m,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (m *jsiiProxy_MessageCallbacks) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		m,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (m *jsiiProxy_MessageCallbacks) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		m,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (m *jsiiProxy_MessageCallbacks) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		m,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (m *jsiiProxy_MessageCallbacks) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		m,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (m *jsiiProxy_MessageCallbacks) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := m.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		m,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (m *jsiiProxy_MessageCallbacks) OnPrepare() {
	_jsii_.InvokeVoid(
		m,
		"onPrepare",
		nil, // no parameters
	)
}

func (m *jsiiProxy_MessageCallbacks) OnSynthesize(session constructs.ISynthesisSession) {
	if err := m.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		m,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (m *jsiiProxy_MessageCallbacks) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		m,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (m *jsiiProxy_MessageCallbacks) Prepare() {
	_jsii_.InvokeVoid(
		m,
		"prepare",
		nil, // no parameters
	)
}

func (m *jsiiProxy_MessageCallbacks) SetMetadata(key *string, value interface{}) {
	if err := m.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		m,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (m *jsiiProxy_MessageCallbacks) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := m.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		m,
		"synthesize",
		[]interface{}{session},
	)
}

func (m *jsiiProxy_MessageCallbacks) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		m,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (m *jsiiProxy_MessageCallbacks) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		m,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

