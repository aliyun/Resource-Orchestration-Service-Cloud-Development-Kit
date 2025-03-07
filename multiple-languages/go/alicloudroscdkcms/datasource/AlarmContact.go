package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::CMS::AlarmContact`, which is used to query the information about an alert contact.
type AlarmContact interface {
	alicloudroscdkcore.Resource
	IAlarmContact
	// Attribute AlarmContactName: AlarmContactName.
	AttrAlarmContactName() interface{}
	// Attribute ChannelsAliIm: ChannelsAliIM.
	AttrChannelsAliIm() interface{}
	// Attribute ChannelsDingWebHook: ChannelsDingWebHook.
	AttrChannelsDingWebHook() interface{}
	// Attribute ChannelsMail: ChannelsMail.
	AttrChannelsMail() interface{}
	// Attribute ChannelsSms: ChannelsSMS.
	AttrChannelsSms() interface{}
	// Attribute ChannelsStateAliIm: ChannelsStateAliIM.
	AttrChannelsStateAliIm() interface{}
	// Attribute ChannelsStateDingWebHook: ChannelsStateDingWebHook.
	AttrChannelsStateDingWebHook() interface{}
	// Attribute ChannelsStateMail: ChannelsStateMail.
	AttrChannelsStateMail() interface{}
	// Attribute ChannelsStateSms: ChannelsStateSMS.
	AttrChannelsStateSms() interface{}
	// Attribute ContactGroups: ContactGroups.
	AttrContactGroups() interface{}
	// Attribute CreateTime: CreateTime.
	AttrCreateTime() interface{}
	// Attribute Describe: Describe.
	AttrDescribe() interface{}
	// Attribute Lang: The language type of the alarm.
	AttrLang() interface{}
	// Attribute UpdateTime: UpdateTime.
	AttrUpdateTime() interface{}
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
	Props() *AlarmContactProps
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

// The jsii proxy struct for AlarmContact
type jsiiProxy_AlarmContact struct {
	internal.Type__alicloudroscdkcoreResource
	jsiiProxy_IAlarmContact
}

func (j *jsiiProxy_AlarmContact) AttrAlarmContactName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAlarmContactName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) AttrChannelsAliIm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChannelsAliIm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) AttrChannelsDingWebHook() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChannelsDingWebHook",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) AttrChannelsMail() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChannelsMail",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) AttrChannelsSms() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChannelsSms",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) AttrChannelsStateAliIm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChannelsStateAliIm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) AttrChannelsStateDingWebHook() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChannelsStateDingWebHook",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) AttrChannelsStateMail() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChannelsStateMail",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) AttrChannelsStateSms() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChannelsStateSms",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) AttrContactGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContactGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) AttrDescribe() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescribe",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) AttrLang() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLang",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) Env() alicloudroscdkcore.IResourceEnvironment {
	var returns alicloudroscdkcore.IResourceEnvironment
	_jsii_.Get(
		j,
		"env",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) Props() *AlarmContactProps {
	var returns *AlarmContactProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AlarmContact) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewAlarmContact(scope alicloudroscdkcore.Construct, id *string, props *AlarmContactProps, enableResourcePropertyConstraint *bool) AlarmContact {
	_init_.Initialize()

	if err := validateNewAlarmContactParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_AlarmContact{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cms.datasource.AlarmContact",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewAlarmContact_Override(a AlarmContact, scope alicloudroscdkcore.Construct, id *string, props *AlarmContactProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cms.datasource.AlarmContact",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		a,
	)
}

func (j *jsiiProxy_AlarmContact)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_AlarmContact)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_AlarmContact)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_AlarmContact)SetScope(val alicloudroscdkcore.Construct) {
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
func AlarmContact_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateAlarmContact_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cms.datasource.AlarmContact",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (a *jsiiProxy_AlarmContact) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := a.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"addCondition",
		[]interface{}{condition},
	)
}

func (a *jsiiProxy_AlarmContact) AddCount(count interface{}) {
	if err := a.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"addCount",
		[]interface{}{count},
	)
}

func (a *jsiiProxy_AlarmContact) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := a.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"addDependency",
		[]interface{}{resource},
	)
}

func (a *jsiiProxy_AlarmContact) AddResourceDesc(desc *string) {
	if err := a.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (a *jsiiProxy_AlarmContact) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := a.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (a *jsiiProxy_AlarmContact) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		a,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (a *jsiiProxy_AlarmContact) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		a,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (a *jsiiProxy_AlarmContact) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		a,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (a *jsiiProxy_AlarmContact) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		a,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (a *jsiiProxy_AlarmContact) GetAtt(name *string) alicloudroscdkcore.IResolvable {
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

func (a *jsiiProxy_AlarmContact) OnPrepare() {
	_jsii_.InvokeVoid(
		a,
		"onPrepare",
		nil, // no parameters
	)
}

func (a *jsiiProxy_AlarmContact) OnSynthesize(session constructs.ISynthesisSession) {
	if err := a.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (a *jsiiProxy_AlarmContact) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		a,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (a *jsiiProxy_AlarmContact) Prepare() {
	_jsii_.InvokeVoid(
		a,
		"prepare",
		nil, // no parameters
	)
}

func (a *jsiiProxy_AlarmContact) SetMetadata(key *string, value interface{}) {
	if err := a.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (a *jsiiProxy_AlarmContact) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := a.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"synthesize",
		[]interface{}{session},
	)
}

func (a *jsiiProxy_AlarmContact) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		a,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (a *jsiiProxy_AlarmContact) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		a,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

