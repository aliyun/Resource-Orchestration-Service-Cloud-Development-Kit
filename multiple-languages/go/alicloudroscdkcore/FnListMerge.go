package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Returns true if a specified string matches all values in a list.
type FnListMerge interface {
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

// The jsii proxy struct for FnListMerge
type jsiiProxy_FnListMerge struct {
	jsiiProxy_IResolvable
}

func (j *jsiiProxy_FnListMerge) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}


// Creates an ``ListMerge`` function.
func NewFnListMerge(listOfValues *[]interface{}) FnListMerge {
	_init_.Initialize()

	if err := validateNewFnListMergeParameters(listOfValues); err != nil {
		panic(err)
	}
	j := jsiiProxy_FnListMerge{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnListMerge",
		[]interface{}{listOfValues},
		&j,
	)

	return &j
}

// Creates an ``ListMerge`` function.
func NewFnListMerge_Override(f FnListMerge, listOfValues *[]interface{}) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnListMerge",
		[]interface{}{listOfValues},
		f,
	)
}

func (f *jsiiProxy_FnListMerge) Resolve(context IResolveContext) interface{} {
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

func (f *jsiiProxy_FnListMerge) ToJSON() *string {
	var returns *string

	_jsii_.Invoke(
		f,
		"toJSON",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (f *jsiiProxy_FnListMerge) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		f,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

