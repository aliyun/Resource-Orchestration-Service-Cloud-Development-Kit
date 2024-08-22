package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Returns true for a condition that evaluates to false or returns false for a condition that evaluates to true.
//
// ``Fn::Not`` acts as a NOT operator.
type FnNot interface {
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

// The jsii proxy struct for FnNot
type jsiiProxy_FnNot struct {
	jsiiProxy_Intrinsic
	jsiiProxy_IRosConditionExpression
}

func (j *jsiiProxy_FnNot) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}


// Creates an ``Fn::Not`` condition function.
func NewFnNot(condition interface{}) FnNot {
	_init_.Initialize()

	if err := validateNewFnNotParameters(condition); err != nil {
		panic(err)
	}
	j := jsiiProxy_FnNot{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnNot",
		[]interface{}{condition},
		&j,
	)

	return &j
}

// Creates an ``Fn::Not`` condition function.
func NewFnNot_Override(f FnNot, condition interface{}) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnNot",
		[]interface{}{condition},
		f,
	)
}

func (f *jsiiProxy_FnNot) NewError(message *string) interface{} {
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

func (f *jsiiProxy_FnNot) Resolve(_context IResolveContext) interface{} {
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

func (f *jsiiProxy_FnNot) ToJSON() interface{} {
	var returns interface{}

	_jsii_.Invoke(
		f,
		"toJSON",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (f *jsiiProxy_FnNot) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		f,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

