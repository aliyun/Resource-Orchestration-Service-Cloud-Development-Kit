package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// The intrinsic function ``Fn::Join`` appends a set of values into a single value, separated by the specified delimiter.
//
// If a delimiter is the empty string, the set of values are concatenated
// with no delimiter.
type FnJoin interface {
	IResolvable
	// The creation stack of this resolvable which will be appended to errors thrown during resolution.
	//
	// If this returns an empty array the stack will not be attached.
	CreationStack() *[]*string
	// Produce the Token's value at resolution time.
	Resolve(context IResolveContext) interface{}
	ToJSON() *string
	// Return a string representation of this resolvable object.
	//
	// Returns a reversible string representation.
	ToString() *string
}

// The jsii proxy struct for FnJoin
type jsiiProxy_FnJoin struct {
	jsiiProxy_IResolvable
}

func (j *jsiiProxy_FnJoin) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}


// Creates an ``Fn::Join`` function.
func NewFnJoin(delimiter *string, listOfValues *[]interface{}) FnJoin {
	_init_.Initialize()

	if err := validateNewFnJoinParameters(delimiter, listOfValues); err != nil {
		panic(err)
	}
	j := jsiiProxy_FnJoin{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnJoin",
		[]interface{}{delimiter, listOfValues},
		&j,
	)

	return &j
}

// Creates an ``Fn::Join`` function.
func NewFnJoin_Override(f FnJoin, delimiter *string, listOfValues *[]interface{}) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnJoin",
		[]interface{}{delimiter, listOfValues},
		f,
	)
}

func (f *jsiiProxy_FnJoin) Resolve(context IResolveContext) interface{} {
	if err := f.validateResolveParameters(context); err != nil {
		panic(err)
	}
	var returns interface{}

	_jsii_.Invoke(
		f,
		"resolve",
		[]interface{}{context},
		&returns,
	)

	return returns
}

func (f *jsiiProxy_FnJoin) ToJSON() *string {
	var returns *string

	_jsii_.Invoke(
		f,
		"toJSON",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (f *jsiiProxy_FnJoin) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		f,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

