package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// The intrinsic function ``Ref`` returns the value of the specified parameter or resource.
//
// When you specify a parameter's logical name, it returns the value of the parameter.
// When you specify a resource's logical name, it returns a value that you can typically use to refer to that resource, such as a physical ID.
type FnRef interface {
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

// The jsii proxy struct for FnRef
type jsiiProxy_FnRef struct {
	jsiiProxy_Intrinsic
}

func (j *jsiiProxy_FnRef) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}


// Creates an ``Ref`` function.
func NewFnRef(logicalName *string) FnRef {
	_init_.Initialize()

	if err := validateNewFnRefParameters(logicalName); err != nil {
		panic(err)
	}
	j := jsiiProxy_FnRef{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnRef",
		[]interface{}{logicalName},
		&j,
	)

	return &j
}

// Creates an ``Ref`` function.
func NewFnRef_Override(f FnRef, logicalName *string) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnRef",
		[]interface{}{logicalName},
		f,
	)
}

func (f *jsiiProxy_FnRef) NewError(message *string) interface{} {
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

func (f *jsiiProxy_FnRef) Resolve(_context IResolveContext) interface{} {
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

func (f *jsiiProxy_FnRef) ToJSON() interface{} {
	var returns interface{}

	_jsii_.Invoke(
		f,
		"toJSON",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (f *jsiiProxy_FnRef) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		f,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

