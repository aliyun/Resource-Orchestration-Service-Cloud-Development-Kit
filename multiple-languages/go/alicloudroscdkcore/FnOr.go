package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Returns true if any one of the specified conditions evaluate to true, or returns false if all of the conditions evaluates to false.
//
// ``Fn::Or`` acts as an OR operator. The minimum number
// of conditions that you can include is 2, and the maximum is 10.
type FnOr interface {
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

// The jsii proxy struct for FnOr
type jsiiProxy_FnOr struct {
	jsiiProxy_Intrinsic
	jsiiProxy_IRosConditionExpression
}

func (j *jsiiProxy_FnOr) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}


// Creates an ``Fn::Or`` condition function.
func NewFnOr(condition ...interface{}) FnOr {
	_init_.Initialize()

	if err := validateNewFnOrParameters(&condition); err != nil {
		panic(err)
	}
	args := []interface{}{}
	for _, a := range condition {
		args = append(args, a)
	}

	j := jsiiProxy_FnOr{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnOr",
		args,
		&j,
	)

	return &j
}

// Creates an ``Fn::Or`` condition function.
func NewFnOr_Override(f FnOr, condition ...interface{}) {
	_init_.Initialize()

	args := []interface{}{}
	for _, a := range condition {
		args = append(args, a)
	}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnOr",
		args,
		f,
	)
}

func (f *jsiiProxy_FnOr) NewError(message *string) interface{} {
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

func (f *jsiiProxy_FnOr) Resolve(_context IResolveContext) interface{} {
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

func (f *jsiiProxy_FnOr) ToJSON() interface{} {
	var returns interface{}

	_jsii_.Invoke(
		f,
		"toJSON",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (f *jsiiProxy_FnOr) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		f,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

