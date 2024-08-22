package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// The intrinsic function ``Fn::Select`` returns a single object from a list of objects by index.
type FnSelect interface {
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

// The jsii proxy struct for FnSelect
type jsiiProxy_FnSelect struct {
	jsiiProxy_Intrinsic
}

func (j *jsiiProxy_FnSelect) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}


// Creates an ``Fn::Select`` function.
//
// param index The index of the object to retrieve. This must be a value from zero to N-1, where N represents the number of elements in the array.
// param array The list of objects to select from. This list must not be null, nor can it have null entries.
func NewFnSelect(value interface{}) FnSelect {
	_init_.Initialize()

	if err := validateNewFnSelectParameters(value); err != nil {
		panic(err)
	}
	j := jsiiProxy_FnSelect{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnSelect",
		[]interface{}{value},
		&j,
	)

	return &j
}

// Creates an ``Fn::Select`` function.
//
// param index The index of the object to retrieve. This must be a value from zero to N-1, where N represents the number of elements in the array.
// param array The list of objects to select from. This list must not be null, nor can it have null entries.
func NewFnSelect_Override(f FnSelect, value interface{}) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnSelect",
		[]interface{}{value},
		f,
	)
}

func (f *jsiiProxy_FnSelect) NewError(message *string) interface{} {
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

func (f *jsiiProxy_FnSelect) Resolve(_context IResolveContext) interface{} {
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

func (f *jsiiProxy_FnSelect) ToJSON() interface{} {
	var returns interface{}

	_jsii_.Invoke(
		f,
		"toJSON",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (f *jsiiProxy_FnSelect) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		f,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

