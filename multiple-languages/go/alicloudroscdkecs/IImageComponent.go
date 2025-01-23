package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `ImageComponent`.
type IImageComponent interface {
	alicloudroscdkcore.IResource
	// Attribute ImageComponentId: The ID of the image component.
	AttrImageComponentId() interface{}
	Props() *ImageComponentProps
}

// The jsii proxy for IImageComponent
type jsiiProxy_IImageComponent struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IImageComponent) AttrImageComponentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageComponentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageComponent) Props() *ImageComponentProps {
	var returns *ImageComponentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

