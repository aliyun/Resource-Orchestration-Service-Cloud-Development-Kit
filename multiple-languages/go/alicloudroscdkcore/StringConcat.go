package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Converts all fragments to strings and concats those.
//
// Drops 'undefined's.
type StringConcat interface {
	IFragmentConcatenator
	// Join the fragment on the left and on the right.
	Join(left interface{}, right interface{}) interface{}
}

// The jsii proxy struct for StringConcat
type jsiiProxy_StringConcat struct {
	jsiiProxy_IFragmentConcatenator
}

func NewStringConcat() StringConcat {
	_init_.Initialize()

	j := jsiiProxy_StringConcat{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.StringConcat",
		nil, // no parameters
		&j,
	)

	return &j
}

func NewStringConcat_Override(s StringConcat) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.StringConcat",
		nil, // no parameters
		s,
	)
}

func (s *jsiiProxy_StringConcat) Join(left interface{}, right interface{}) interface{} {
	if err := s.validateJoinParameters(left, right); err != nil {
		panic(err)
	}
	var returns interface{}

	_jsii_.Invoke(
		s,
		"join",
		[]interface{}{left, right},
		&returns,
	)

	return returns
}

