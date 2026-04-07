package alicloudroscdkapig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Source`.
type ISource interface {
	alicloudroscdkcore.IResource
	// Attribute SourceId: The ID of the source.
	AttrSourceId() interface{}
	Props() *SourceProps
}

// The jsii proxy for ISource
type jsiiProxy_ISource struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISource) AttrSourceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISource) Props() *SourceProps {
	var returns *SourceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

