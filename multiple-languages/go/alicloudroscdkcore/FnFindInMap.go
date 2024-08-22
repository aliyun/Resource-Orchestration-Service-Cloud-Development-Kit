package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// The intrinsic function ``Fn::FindInMap`` returns the value corresponding to keys in a two-level map that is declared in the Mappings section.
type FnFindInMap interface {
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

// The jsii proxy struct for FnFindInMap
type jsiiProxy_FnFindInMap struct {
	jsiiProxy_Intrinsic
}

func (j *jsiiProxy_FnFindInMap) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}


// Creates an ``Fn::FindInMap`` function.
//
// param mapName The logical name of a mapping declared in the Mappings section that contains the keys and values.
// param topLevelKey The top-level key name. Its value is a list of key-value pairs.
// param secondLevelKey The second-level key name, which is set to one of the keys from the list assigned to TopLevelKey.
func NewFnFindInMap(value interface{}) FnFindInMap {
	_init_.Initialize()

	if err := validateNewFnFindInMapParameters(value); err != nil {
		panic(err)
	}
	j := jsiiProxy_FnFindInMap{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnFindInMap",
		[]interface{}{value},
		&j,
	)

	return &j
}

// Creates an ``Fn::FindInMap`` function.
//
// param mapName The logical name of a mapping declared in the Mappings section that contains the keys and values.
// param topLevelKey The top-level key name. Its value is a list of key-value pairs.
// param secondLevelKey The second-level key name, which is set to one of the keys from the list assigned to TopLevelKey.
func NewFnFindInMap_Override(f FnFindInMap, value interface{}) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FnFindInMap",
		[]interface{}{value},
		f,
	)
}

func (f *jsiiProxy_FnFindInMap) NewError(message *string) interface{} {
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

func (f *jsiiProxy_FnFindInMap) Resolve(_context IResolveContext) interface{} {
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

func (f *jsiiProxy_FnFindInMap) ToJSON() interface{} {
	var returns interface{}

	_jsii_.Invoke(
		f,
		"toJSON",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (f *jsiiProxy_FnFindInMap) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		f,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

