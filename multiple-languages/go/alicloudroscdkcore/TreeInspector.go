package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Inspector that maintains an attribute bag.
type TreeInspector interface {
	// Represents the bag of attributes as key-value pairs.
	Attributes() *map[string]interface{}
	// Adds attribute to bag.
	//
	// Keys should be added by convention to prevent conflicts.
	AddAttribute(key *string, value interface{})
}

// The jsii proxy struct for TreeInspector
type jsiiProxy_TreeInspector struct {
	_ byte // padding
}

func (j *jsiiProxy_TreeInspector) Attributes() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"attributes",
		&returns,
	)
	return returns
}


func NewTreeInspector() TreeInspector {
	_init_.Initialize()

	j := jsiiProxy_TreeInspector{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.TreeInspector",
		nil, // no parameters
		&j,
	)

	return &j
}

func NewTreeInspector_Override(t TreeInspector) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.TreeInspector",
		nil, // no parameters
		t,
	)
}

func (t *jsiiProxy_TreeInspector) AddAttribute(key *string, value interface{}) {
	if err := t.validateAddAttributeParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		t,
		"addAttribute",
		[]interface{}{key, value},
	)
}

