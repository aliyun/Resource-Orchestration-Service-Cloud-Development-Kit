package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Token subclass that represents values intrinsic to the target document language.
//
// This class will disappear in a future release and should not be used.
// Experimental.
type Intrinsic interface {
	IResolvable
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

// The jsii proxy struct for Intrinsic
type jsiiProxy_Intrinsic struct {
	jsiiProxy_IResolvable
}

func (j *jsiiProxy_Intrinsic) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}


// Experimental.
func NewIntrinsic(value interface{}) Intrinsic {
	_init_.Initialize()

	if err := validateNewIntrinsicParameters(value); err != nil {
		panic(err)
	}
	j := jsiiProxy_Intrinsic{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.Intrinsic",
		[]interface{}{value},
		&j,
	)

	return &j
}

// Experimental.
func NewIntrinsic_Override(i Intrinsic, value interface{}) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.Intrinsic",
		[]interface{}{value},
		i,
	)
}

func (i *jsiiProxy_Intrinsic) NewError(message *string) interface{} {
	if err := i.validateNewErrorParameters(message); err != nil {
		panic(err)
	}
	var returns interface{}

	_jsii_.Invoke(
		i,
		"newError",
		[]interface{}{message},
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Intrinsic) Resolve(_context IResolveContext) interface{} {
	if err := i.validateResolveParameters(_context); err != nil {
		panic(err)
	}
	var returns interface{}

	_jsii_.Invoke(
		i,
		"resolve",
		[]interface{}{_context},
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Intrinsic) ToJSON() interface{} {
	var returns interface{}

	_jsii_.Invoke(
		i,
		"toJSON",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Intrinsic) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		i,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

