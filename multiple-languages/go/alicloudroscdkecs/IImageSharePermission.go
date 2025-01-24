package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `ImageSharePermission`.
type IImageSharePermission interface {
	alicloudroscdkcore.IResource
	// Attribute ImageId: The shared custom image ID.
	AttrImageId() interface{}
	Props() *ImageSharePermissionProps
}

// The jsii proxy for IImageSharePermission
type jsiiProxy_IImageSharePermission struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IImageSharePermission) AttrImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageSharePermission) Props() *ImageSharePermissionProps {
	var returns *ImageSharePermissionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

