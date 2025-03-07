package alicloudroscdkros

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `ALIYUN::ROS::WaitConditionHandle`.
type WaitConditionHandle interface {
	alicloudroscdkcore.Resource
	IWaitConditionHandle
	// Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used for signalling handle completion or failure.
	//
	// You can signal success by adding --data-binary '{"status": "SUCCESS"}' , or signal failure by adding --data-binary '{"status": "FAILURE"}'.
	AttrCurlCli() interface{}
	// Attribute Headers: HTTP POST Headers used for signalling handle completion or failure.
	AttrHeaders() interface{}
	// Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used for signalling handle completion or failure.
	//
	// As this cmdlet was introduced in PowerShell 3.0, ensure the version of PowerShell satisfies the constraint. (Show the version via $PSVersionTable.PSVersion.) You can signal success by adding -Body '{"status": "SUCCESS"}' , or signal failure by adding -Body '{"status": "FAILURE"}'
	AttrPowerShellCurlCli() interface{}
	// Attribute URL: HTTP POST URL used for signalling handle completion or failure.
	AttrUrl() interface{}
	// Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used for signalling handle completion or failure.
	//
	// As Windows does not support curl command, you need to install curl.exe and add it to PATH first. You can signal success by adding --data-binary "{\"status\": \"SUCCESS\"}" , or signal failure by adding --data-binary "{\"status\": \"FAILURE\"}"
	AttrWindowsCurlCli() interface{}
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
	Props() *WaitConditionHandleProps
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

// The jsii proxy struct for WaitConditionHandle
type jsiiProxy_WaitConditionHandle struct {
	internal.Type__alicloudroscdkcoreResource
	jsiiProxy_IWaitConditionHandle
}

func (j *jsiiProxy_WaitConditionHandle) AttrCurlCli() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCurlCli",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_WaitConditionHandle) AttrHeaders() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHeaders",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_WaitConditionHandle) AttrPowerShellCurlCli() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPowerShellCurlCli",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_WaitConditionHandle) AttrUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_WaitConditionHandle) AttrWindowsCurlCli() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWindowsCurlCli",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_WaitConditionHandle) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_WaitConditionHandle) Env() alicloudroscdkcore.IResourceEnvironment {
	var returns alicloudroscdkcore.IResourceEnvironment
	_jsii_.Get(
		j,
		"env",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_WaitConditionHandle) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_WaitConditionHandle) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_WaitConditionHandle) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_WaitConditionHandle) Props() *WaitConditionHandleProps {
	var returns *WaitConditionHandleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_WaitConditionHandle) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_WaitConditionHandle) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_WaitConditionHandle) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_WaitConditionHandle) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewWaitConditionHandle(scope alicloudroscdkcore.Construct, id *string, props *WaitConditionHandleProps, enableResourcePropertyConstraint *bool) WaitConditionHandle {
	_init_.Initialize()

	if err := validateNewWaitConditionHandleParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_WaitConditionHandle{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ros.WaitConditionHandle",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewWaitConditionHandle_Override(w WaitConditionHandle, scope alicloudroscdkcore.Construct, id *string, props *WaitConditionHandleProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ros.WaitConditionHandle",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		w,
	)
}

func (j *jsiiProxy_WaitConditionHandle)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_WaitConditionHandle)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_WaitConditionHandle)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_WaitConditionHandle)SetScope(val alicloudroscdkcore.Construct) {
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
func WaitConditionHandle_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateWaitConditionHandle_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ros.WaitConditionHandle",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (w *jsiiProxy_WaitConditionHandle) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := w.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		w,
		"addCondition",
		[]interface{}{condition},
	)
}

func (w *jsiiProxy_WaitConditionHandle) AddCount(count interface{}) {
	if err := w.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		w,
		"addCount",
		[]interface{}{count},
	)
}

func (w *jsiiProxy_WaitConditionHandle) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := w.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		w,
		"addDependency",
		[]interface{}{resource},
	)
}

func (w *jsiiProxy_WaitConditionHandle) AddResourceDesc(desc *string) {
	if err := w.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		w,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (w *jsiiProxy_WaitConditionHandle) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := w.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		w,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (w *jsiiProxy_WaitConditionHandle) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		w,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (w *jsiiProxy_WaitConditionHandle) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		w,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (w *jsiiProxy_WaitConditionHandle) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		w,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (w *jsiiProxy_WaitConditionHandle) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		w,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (w *jsiiProxy_WaitConditionHandle) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := w.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		w,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (w *jsiiProxy_WaitConditionHandle) OnPrepare() {
	_jsii_.InvokeVoid(
		w,
		"onPrepare",
		nil, // no parameters
	)
}

func (w *jsiiProxy_WaitConditionHandle) OnSynthesize(session constructs.ISynthesisSession) {
	if err := w.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		w,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (w *jsiiProxy_WaitConditionHandle) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		w,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (w *jsiiProxy_WaitConditionHandle) Prepare() {
	_jsii_.InvokeVoid(
		w,
		"prepare",
		nil, // no parameters
	)
}

func (w *jsiiProxy_WaitConditionHandle) SetMetadata(key *string, value interface{}) {
	if err := w.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		w,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (w *jsiiProxy_WaitConditionHandle) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := w.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		w,
		"synthesize",
		[]interface{}{session},
	)
}

func (w *jsiiProxy_WaitConditionHandle) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		w,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (w *jsiiProxy_WaitConditionHandle) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		w,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

