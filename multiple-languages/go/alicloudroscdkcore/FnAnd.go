package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Returns true if all the specified conditions evaluate to true, or returns false if any one   of the conditions evaluates to false.
//
// ``Fn::And`` acts as an AND operator. The minimum number of
// conditions that you can include is 2, and the maximum is 10.
type FnAnd interface {
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

// The jsii proxy struct for FnAnd
type jsiiProxy_FnAnd struct {
	jsiiProxy_Intrinsic
	jsiiProxy_IRosConditionExpression
}

func (j *jsiiProxy_FnAnd) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}


func NewFnAnd(condition ...interface{}) FnAnd {
	_init_.Initialize()

	if err := validateNewFnAndParameters(&condition); err != nil {
		panic(err)
	}
	args := []interface{}{}
	for _, a := range condition {
		args = append(args, a)
	}

	j := jsiiProxy_FnAnd{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnAnd",
		args,
		&j,
	)

	return &j
}

func NewFnAnd_Override(f FnAnd, condition ...interface{}) {
	_init_.Initialize()

	args := []interface{}{}
	for _, a := range condition {
		args = append(args, a)
	}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnAnd",
		args,
		f,
	)
}

func (f *jsiiProxy_FnAnd) NewError(message *string) interface{} {
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

func (f *jsiiProxy_FnAnd) Resolve(_context IResolveContext) interface{} {
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

func (f *jsiiProxy_FnAnd) ToJSON() interface{} {
	var returns interface{}

	_jsii_.Invoke(
		f,
		"toJSON",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (f *jsiiProxy_FnAnd) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		f,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

