package alicloudroscdkice

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkice/internal"
)

// Represents a `InsertMediaToSearchLib`.
type IInsertMediaToSearchLib interface {
	alicloudroscdkcore.IResource
	// Attribute MediaId: The ID of the media asset.
	AttrMediaId() interface{}
	Props() *InsertMediaToSearchLibProps
}

// The jsii proxy for IInsertMediaToSearchLib
type jsiiProxy_IInsertMediaToSearchLib struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInsertMediaToSearchLib) AttrMediaId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMediaId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInsertMediaToSearchLib) Props() *InsertMediaToSearchLibProps {
	var returns *InsertMediaToSearchLibProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

