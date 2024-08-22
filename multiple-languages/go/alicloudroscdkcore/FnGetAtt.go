package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// The ``Fn::GetAtt`` intrinsic function returns the value of an attribute from a resource in the template.
type FnGetAtt interface {
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

// The jsii proxy struct for FnGetAtt
type jsiiProxy_FnGetAtt struct {
	jsiiProxy_Intrinsic
}

func (j *jsiiProxy_FnGetAtt) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}


// Creates a ``Fn::GetAtt`` function.
func NewFnGetAtt(logicalNameOfResource *string, attributeName *string) FnGetAtt {
	_init_.Initialize()

	if err := validateNewFnGetAttParameters(logicalNameOfResource, attributeName); err != nil {
		panic(err)
	}
	j := jsiiProxy_FnGetAtt{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnGetAtt",
		[]interface{}{logicalNameOfResource, attributeName},
		&j,
	)

	return &j
}

// Creates a ``Fn::GetAtt`` function.
func NewFnGetAtt_Override(f FnGetAtt, logicalNameOfResource *string, attributeName *string) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnGetAtt",
		[]interface{}{logicalNameOfResource, attributeName},
		f,
	)
}

func (f *jsiiProxy_FnGetAtt) NewError(message *string) interface{} {
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

func (f *jsiiProxy_FnGetAtt) Resolve(_context IResolveContext) interface{} {
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

func (f *jsiiProxy_FnGetAtt) ToJSON() interface{} {
	var returns interface{}

	_jsii_.Invoke(
		f,
		"toJSON",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (f *jsiiProxy_FnGetAtt) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		f,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

