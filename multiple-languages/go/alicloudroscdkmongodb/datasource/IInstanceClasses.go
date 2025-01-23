package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmongodb/datasource/internal"
)

// Represents a `InstanceClasses`.
type IInstanceClasses interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceClasses: The list of The instance classes.
	AttrInstanceClasses() interface{}
	// Attribute InstanceClassIds: The list of The instance class Ids.
	AttrInstanceClassIds() interface{}
	Props() *InstanceClassesProps
}

// The jsii proxy for IInstanceClasses
type jsiiProxy_IInstanceClasses struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstanceClasses) AttrInstanceClasses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceClasses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceClasses) AttrInstanceClassIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceClassIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceClasses) Props() *InstanceClassesProps {
	var returns *InstanceClassesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

