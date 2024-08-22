package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// To split a string into a list of string values so that you can select an element from the resulting string list, use the ``Fn::Split`` intrinsic function.
//
// Specify the location of splits
// with a delimiter, such as , (a comma). After you split a string, use the ``Fn::Select`` function
// to pick a specific element.
type FnSplit interface {
	Intrinsic
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

// The jsii proxy struct for FnSplit
type jsiiProxy_FnSplit struct {
	jsiiProxy_Intrinsic
}

func (j *jsiiProxy_FnSplit) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}


// Create an ``Fn::Split`` function.
//
// param delimiter A string value that determines where the source string is divided.
// param source The string value that you want to split.
func NewFnSplit(value interface{}) FnSplit {
	_init_.Initialize()

	if err := validateNewFnSplitParameters(value); err != nil {
		panic(err)
	}
	j := jsiiProxy_FnSplit{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnSplit",
		[]interface{}{value},
		&j,
	)

	return &j
}

// Create an ``Fn::Split`` function.
//
// param delimiter A string value that determines where the source string is divided.
// param source The string value that you want to split.
func NewFnSplit_Override(f FnSplit, value interface{}) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnSplit",
		[]interface{}{value},
		f,
	)
}

func (f *jsiiProxy_FnSplit) NewError(message *string) interface{} {
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

func (f *jsiiProxy_FnSplit) Resolve(_context IResolveContext) interface{} {
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

func (f *jsiiProxy_FnSplit) ToJSON() interface{} {
	var returns interface{}

	_jsii_.Invoke(
		f,
		"toJSON",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (f *jsiiProxy_FnSplit) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		f,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

