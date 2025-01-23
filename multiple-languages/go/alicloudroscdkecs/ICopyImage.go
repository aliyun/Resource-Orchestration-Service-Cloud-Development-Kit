package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `CopyImage`.
type ICopyImage interface {
	alicloudroscdkcore.IResource
	// Attribute DestinationRegionId: ID of the region to where the destination custom image belongs.
	AttrDestinationRegionId() interface{}
	// Attribute ImageId: ID of the source custom image.
	AttrImageId() interface{}
	// Attribute SourceRegionId: ID of the region to where the source image belongs.
	AttrSourceRegionId() interface{}
	Props() *CopyImageProps
}

// The jsii proxy for ICopyImage
type jsiiProxy_ICopyImage struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICopyImage) AttrDestinationRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDestinationRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICopyImage) AttrImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICopyImage) AttrSourceRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICopyImage) Props() *CopyImageProps {
	var returns *CopyImageProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

