package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// A set of constructs to be used as a dependable.
//
// This class can be used when a set of constructs which are disjoint in the
// construct tree needs to be combined to be used as a single dependable.
// Experimental.
type ConcreteDependable interface {
	IDependable
	// Add a construct to the dependency roots.
	// Experimental.
	Add(construct IConstruct)
}

// The jsii proxy struct for ConcreteDependable
type jsiiProxy_ConcreteDependable struct {
	jsiiProxy_IDependable
}

// Experimental.
func NewConcreteDependable() ConcreteDependable {
	_init_.Initialize()

	j := jsiiProxy_ConcreteDependable{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.ConcreteDependable",
		nil, // no parameters
		&j,
	)

	return &j
}

// Experimental.
func NewConcreteDependable_Override(c ConcreteDependable) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.ConcreteDependable",
		nil, // no parameters
		c,
	)
}

func (c *jsiiProxy_ConcreteDependable) Add(construct IConstruct) {
	if err := c.validateAddParameters(construct); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"add",
		[]interface{}{construct},
	)
}

