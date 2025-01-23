package alicloudroscdkice

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkice/internal"
)

// Represents a `MediaInfo`.
type IMediaInfo interface {
	alicloudroscdkcore.IResource
	// Attribute MediaId: The ID of the media asset in IMS.
	AttrMediaId() interface{}
	Props() *MediaInfoProps
}

// The jsii proxy for IMediaInfo
type jsiiProxy_IMediaInfo struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMediaInfo) AttrMediaId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMediaId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMediaInfo) Props() *MediaInfoProps {
	var returns *MediaInfoProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

