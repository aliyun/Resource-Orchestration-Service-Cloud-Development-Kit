package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::SyntheticTask`.
type SyntheticTask interface {
	alicloudroscdkcore.Resource
	// Attribute AvailableAssertions: The list of assertions.
	AttrAvailableAssertions() alicloudroscdkcore.IResolvable
	// Attribute CommonSetting: The general settings.
	AttrCommonSetting() alicloudroscdkcore.IResolvable
	// Attribute CustomPeriod: The custom cycle.
	AttrCustomPeriod() alicloudroscdkcore.IResolvable
	// Attribute Frequency: The detection frequency.
	AttrFrequency() alicloudroscdkcore.IResolvable
	// Attribute MonitorCategory: The detection point type.
	//
	// 1: PC. 2: mobile device.
	AttrMonitorCategory() alicloudroscdkcore.IResolvable
	// Attribute MonitorConf: The monitoring configurations.
	AttrMonitorConf() alicloudroscdkcore.IResolvable
	// Attribute Monitors: The list of monitoring points.
	AttrMonitors() alicloudroscdkcore.IResolvable
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	// Attribute SyntheticTaskName: The name of synthetic task.
	AttrSyntheticTaskName() alicloudroscdkcore.IResolvable
	// Attribute Tags: The tags of the instance.
	AttrTags() alicloudroscdkcore.IResolvable
	// Attribute TaskId: The ID of the synthetic monitoring task.
	AttrTaskId() alicloudroscdkcore.IResolvable
	// Attribute TaskType: The type of the task.
	AttrTaskType() alicloudroscdkcore.IResolvable
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
	Props() *SyntheticTaskProps
	SetProps(val *SyntheticTaskProps)
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

// The jsii proxy struct for SyntheticTask
type jsiiProxy_SyntheticTask struct {
	internal.Type__alicloudroscdkcoreResource
}

func (j *jsiiProxy_SyntheticTask) AttrAvailableAssertions() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAvailableAssertions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) AttrCommonSetting() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCommonSetting",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) AttrCustomPeriod() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCustomPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) AttrFrequency() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFrequency",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) AttrMonitorCategory() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMonitorCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) AttrMonitorConf() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMonitorConf",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) AttrMonitors() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMonitors",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) AttrSyntheticTaskName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSyntheticTaskName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) AttrTaskId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTaskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) AttrTaskType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTaskType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) Props() *SyntheticTaskProps {
	var returns *SyntheticTaskProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_SyntheticTask) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewSyntheticTask(scope alicloudroscdkcore.Construct, id *string, props *SyntheticTaskProps, enableResourcePropertyConstraint *bool) SyntheticTask {
	_init_.Initialize()

	if err := validateNewSyntheticTaskParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_SyntheticTask{}

	_jsii_.Create(
		"@alicloud/ros-cdk-arms.datasource.SyntheticTask",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewSyntheticTask_Override(s SyntheticTask, scope alicloudroscdkcore.Construct, id *string, props *SyntheticTaskProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-arms.datasource.SyntheticTask",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		s,
	)
}

func (j *jsiiProxy_SyntheticTask)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_SyntheticTask)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_SyntheticTask)SetProps(val *SyntheticTaskProps) {
	if err := j.validateSetPropsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"props",
		val,
	)
}

func (j *jsiiProxy_SyntheticTask)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_SyntheticTask)SetScope(val alicloudroscdkcore.Construct) {
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
func SyntheticTask_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateSyntheticTask_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-arms.datasource.SyntheticTask",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_SyntheticTask) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := s.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		s,
		"addCondition",
		[]interface{}{condition},
	)
}

func (s *jsiiProxy_SyntheticTask) AddCount(count interface{}) {
	if err := s.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		s,
		"addCount",
		[]interface{}{count},
	)
}

func (s *jsiiProxy_SyntheticTask) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := s.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		s,
		"addDependency",
		[]interface{}{resource},
	)
}

func (s *jsiiProxy_SyntheticTask) AddResourceDesc(desc *string) {
	if err := s.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		s,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (s *jsiiProxy_SyntheticTask) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := s.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		s,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (s *jsiiProxy_SyntheticTask) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		s,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (s *jsiiProxy_SyntheticTask) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := s.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		s,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_SyntheticTask) OnPrepare() {
	_jsii_.InvokeVoid(
		s,
		"onPrepare",
		nil, // no parameters
	)
}

func (s *jsiiProxy_SyntheticTask) OnSynthesize(session constructs.ISynthesisSession) {
	if err := s.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		s,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (s *jsiiProxy_SyntheticTask) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		s,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (s *jsiiProxy_SyntheticTask) Prepare() {
	_jsii_.InvokeVoid(
		s,
		"prepare",
		nil, // no parameters
	)
}

func (s *jsiiProxy_SyntheticTask) SetMetadata(key *string, value interface{}) {
	if err := s.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		s,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (s *jsiiProxy_SyntheticTask) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := s.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		s,
		"synthesize",
		[]interface{}{session},
	)
}

func (s *jsiiProxy_SyntheticTask) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		s,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (s *jsiiProxy_SyntheticTask) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		s,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

