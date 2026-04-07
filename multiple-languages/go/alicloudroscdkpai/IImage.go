package alicloudroscdkpai

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/internal"
)

// Represents a `Image`.
type IImage interface {
	alicloudroscdkcore.IResource
	// Attribute Accessibility: Visibility of the mirror.
	AttrAccessibility() interface{}
	// Attribute ImageName: The image name.
	AttrImageName() interface{}
	// Attribute ImageUri: The Image address, which contains the version number.
	AttrImageUri() interface{}
	// Attribute Labels: Labels.
	AttrLabels() interface{}
	// Attribute WorkspaceId: The ID of the workspace to which the image belongs.
	AttrWorkspaceId() interface{}
	Props() *ImageProps
}

// The jsii proxy for IImage
type jsiiProxy_IImage struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IImage) AttrAccessibility() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessibility",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrImageName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrImageUri() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageUri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrLabels() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLabels",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrWorkspaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) Props() *ImageProps {
	var returns *ImageProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

