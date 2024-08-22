package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// The intrinsic function ``Fn::Sub`` substitutes variables in an input string with values that you specify.
//
// In your templates, you can use this function to construct commands or outputs
// that include values that aren't available until you create or update a stack.
type FnSub interface {
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

// The jsii proxy struct for FnSub
type jsiiProxy_FnSub struct {
	jsiiProxy_Intrinsic
}

func (j *jsiiProxy_FnSub) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}


// Creates an ``Fn::Sub`` function.
//
// param body A string with variables that Ros Template substitutes with their
//        associated values at runtime. Write variables as ${MyVarName}. Variables
//        can be template parameter names, resource logical IDs, resource attributes,
//        or a variable in a key-value map. If you specify only template parameter names,
//        resource logical IDs, and resource attributes, don't specify a key-value map.
// param variables The name of a variable that you included in the String parameter.
//           The value that Ros Template substitutes for the associated variable name at runtime.
func NewFnSub(value interface{}) FnSub {
	_init_.Initialize()

	if err := validateNewFnSubParameters(value); err != nil {
		panic(err)
	}
	j := jsiiProxy_FnSub{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnSub",
		[]interface{}{value},
		&j,
	)

	return &j
}

// Creates an ``Fn::Sub`` function.
//
// param body A string with variables that Ros Template substitutes with their
//        associated values at runtime. Write variables as ${MyVarName}. Variables
//        can be template parameter names, resource logical IDs, resource attributes,
//        or a variable in a key-value map. If you specify only template parameter names,
//        resource logical IDs, and resource attributes, don't specify a key-value map.
// param variables The name of a variable that you included in the String parameter.
//           The value that Ros Template substitutes for the associated variable name at runtime.
func NewFnSub_Override(f FnSub, value interface{}) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnSub",
		[]interface{}{value},
		f,
	)
}

func (f *jsiiProxy_FnSub) NewError(message *string) interface{} {
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

func (f *jsiiProxy_FnSub) Resolve(_context IResolveContext) interface{} {
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

func (f *jsiiProxy_FnSub) ToJSON() interface{} {
	var returns interface{}

	_jsii_.Invoke(
		f,
		"toJSON",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (f *jsiiProxy_FnSub) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		f,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

