package alicloudroscdkdbs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdbs/internal"
)

// Represents a `Download`.
type IDownload interface {
	alicloudroscdkcore.IResource
	// Attribute BakSetId: The ID of the backup set.
	AttrBakSetId() interface{}
	// Attribute DownloadAddressInfo: The download address information.
	AttrDownloadAddressInfo() interface{}
	// Attribute InstanceName: The ID of the instance.
	AttrInstanceName() interface{}
	// Attribute TaskId: The ID of the download task.
	AttrTaskId() interface{}
	Props() *DownloadProps
}

// The jsii proxy for IDownload
type jsiiProxy_IDownload struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDownload) AttrBakSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBakSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDownload) AttrDownloadAddressInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDownloadAddressInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDownload) AttrInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDownload) AttrTaskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTaskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDownload) Props() *DownloadProps {
	var returns *DownloadProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

