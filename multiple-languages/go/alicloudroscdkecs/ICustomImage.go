package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `CustomImage`.
type ICustomImage interface {
	alicloudroscdkcore.IResource
	// Attribute ImageId: Image ID.
	AttrImageId() interface{}
	// Attribute SourceRegionId: ID of the region to where the instance/snapshot belongs.
	AttrSourceRegionId() interface{}
	Props() *CustomImageProps
}

// The jsii proxy for ICustomImage
type jsiiProxy_ICustomImage struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICustomImage) AttrImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomImage) AttrSourceRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomImage) Props() *CustomImageProps {
	var returns *CustomImageProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

