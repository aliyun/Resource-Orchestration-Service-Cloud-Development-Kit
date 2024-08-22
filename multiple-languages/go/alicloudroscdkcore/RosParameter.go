package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/aws/constructs-go/constructs/v3"
)

// A ROS parameter.
//
// Parameters enable you to input custom values to your template each time you create or
// update a stack.
type RosParameter interface {
	RosElement
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
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
	Node() ConstructNode
	// Indicates if this parameter is configured with "NoEcho" enabled.
	NoEcho() *bool
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() Stack
	// The parameter value as a Token.
	Value() IResolvable
	// The parameter value, if it represents a string.
	ValueAsAny() interface{}
	// The parameter value, if it represents a string.
	ValueAsBoolean() interface{}
	// The parameter value, if it represents a string list.
	ValueAsList() *[]*string
	// The parameter value, if it represents a number.
	ValueAsNumber() *float64
	// The parameter value, if it represents a string.
	ValueAsString() *string
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
	Resolve(_context IResolveContext) interface{}
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session ISynthesisSession)
	// Returns a string representation of this construct.
	ToString() *string
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	Validate() *[]*string
	ValidateProperties(props *RosParameterProps)
}

// The jsii proxy struct for RosParameter
type jsiiProxy_RosParameter struct {
	jsiiProxy_RosElement
}

func (j *jsiiProxy_RosParameter) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosParameter) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosParameter) Node() ConstructNode {
	var returns ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosParameter) NoEcho() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"noEcho",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosParameter) Stack() Stack {
	var returns Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosParameter) Value() IResolvable {
	var returns IResolvable
	_jsii_.Get(
		j,
		"value",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosParameter) ValueAsAny() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"valueAsAny",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosParameter) ValueAsBoolean() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"valueAsBoolean",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosParameter) ValueAsList() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"valueAsList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosParameter) ValueAsNumber() *float64 {
	var returns *float64
	_jsii_.Get(
		j,
		"valueAsNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosParameter) ValueAsString() *string {
	var returns *string
	_jsii_.Get(
		j,
		"valueAsString",
		&returns,
	)
	return returns
}


func NewRosParameter(scope Construct, id *string, props *RosParameterProps) RosParameter {
	_init_.Initialize()

	if err := validateNewRosParameterParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosParameter{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.RosParameter",
		[]interface{}{scope, id, props},
		&j,
	)

	return &j
}

func NewRosParameter_Override(r RosParameter, scope Construct, id *string, props *RosParameterProps) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.RosParameter",
		[]interface{}{scope, id, props},
		r,
	)
}

// Return whether the given object is a Construct.
func RosParameter_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosParameter_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.RosParameter",
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
func RosParameter_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosParameter_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.RosParameter",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func RosParameter_TYPE_ALLOWED_VALUES() *[]*string {
	_init_.Initialize()
	var returns *[]*string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.RosParameter",
		"TYPE_ALLOWED_VALUES",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosParameter) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosParameter) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosParameter) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosParameter) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosParameter) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosParameter) Resolve(_context IResolveContext) interface{} {
	if err := r.validateResolveParameters(_context); err != nil {
		panic(err)
	}
	var returns interface{}

	_jsii_.Invoke(
		r,
		"resolve",
		[]interface{}{_context},
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosParameter) Synthesize(session ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosParameter) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosParameter) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosParameter) ValidateProperties(props *RosParameterProps) {
	if err := r.validateValidatePropertiesParameters(props); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{props},
	)
}

