package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// The intrinsic function ``Fn::GetAZs`` returns an array that lists Availability Zones for a specified region.
//
// Because customers have access to different Availability Zones, the intrinsic
// function ``Fn::GetAZs`` enables template authors to write templates that adapt to the calling
// user's access. That way you don't have to hard-code a full list of Availability Zones for a
// specified region.
type FnGetAZs interface {
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

// The jsii proxy struct for FnGetAZs
type jsiiProxy_FnGetAZs struct {
	jsiiProxy_Intrinsic
}

func (j *jsiiProxy_FnGetAZs) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}


// Creates an ``Fn::GetAZs`` function.
func NewFnGetAZs(region interface{}) FnGetAZs {
	_init_.Initialize()

	if err := validateNewFnGetAZsParameters(region); err != nil {
		panic(err)
	}
	j := jsiiProxy_FnGetAZs{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnGetAZs",
		[]interface{}{region},
		&j,
	)

	return &j
}

// Creates an ``Fn::GetAZs`` function.
func NewFnGetAZs_Override(f FnGetAZs, region interface{}) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnGetAZs",
		[]interface{}{region},
		f,
	)
}

func (f *jsiiProxy_FnGetAZs) NewError(message *string) interface{} {
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

func (f *jsiiProxy_FnGetAZs) Resolve(_context IResolveContext) interface{} {
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

func (f *jsiiProxy_FnGetAZs) ToJSON() interface{} {
	var returns interface{}

	_jsii_.Invoke(
		f,
		"toJSON",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (f *jsiiProxy_FnGetAZs) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		f,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

