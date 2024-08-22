package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Returns one value if the specified condition evaluates to true and another value if the specified condition evaluates to false.
type FnIf interface {
	Intrinsic
	IRosConditionExpression
	// The captured stack trace which represents the location in which this token was created.
	// Experimental.
	CreationStack() *[]*string
	// Creates a throwable Error object that contains the token creation stack trace.
	// Experimental.
	NewError(message *string) interface{}
	// Produce the Token's value at resolution time.
	// Experimental.
	Resolve(_context IResolveContext) interface{}
	// Turn this Token into JSON.
	//
	// Called automatically when JSON.stringify() is called on a Token.
	// Experimental.
	ToJSON() interface{}
	// Convert an instance of this Token to a string.
	//
	// This method will be called implicitly by language runtimes if the object
	// is embedded into a string. We treat it the same as an explicit
	// stringification.
	// Experimental.
	ToString() *string
}

// The jsii proxy struct for FnIf
type jsiiProxy_FnIf struct {
	jsiiProxy_Intrinsic
	jsiiProxy_IRosConditionExpression
}

func (j *jsiiProxy_FnIf) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}


// Creates an ``Fn::If`` condition function.
func NewFnIf(condition interface{}, valueIfTrue interface{}, valueIfFalse interface{}) FnIf {
	_init_.Initialize()

	if err := validateNewFnIfParameters(condition, valueIfTrue, valueIfFalse); err != nil {
		panic(err)
	}
	j := jsiiProxy_FnIf{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnIf",
		[]interface{}{condition, valueIfTrue, valueIfFalse},
		&j,
	)

	return &j
}

// Creates an ``Fn::If`` condition function.
func NewFnIf_Override(f FnIf, condition interface{}, valueIfTrue interface{}, valueIfFalse interface{}) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnIf",
		[]interface{}{condition, valueIfTrue, valueIfFalse},
		f,
	)
}

func (f *jsiiProxy_FnIf) NewError(message *string) interface{} {
	if err := f.validateNewErrorParameters(message); err != nil {
		panic(err)
	}
	var returns interface{}

	_jsii_.Invoke(
		f,
		"newError",
		[]interface{}{message},
		&returns,
	)

	return returns
}

func (f *jsiiProxy_FnIf) Resolve(_context IResolveContext) interface{} {
	if err := f.validateResolveParameters(_context); err != nil {
		panic(err)
	}
	var returns interface{}

	_jsii_.Invoke(
		f,
		"resolve",
		[]interface{}{_context},
		&returns,
	)

	return returns
}

func (f *jsiiProxy_FnIf) ToJSON() interface{} {
	var returns interface{}

	_jsii_.Invoke(
		f,
		"toJSON",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (f *jsiiProxy_FnIf) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		f,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

