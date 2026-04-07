package alicloudroscdkbastionhost

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkbastionhost/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ExportConfigJob`.
type IExportConfigJob interface {
	alicloudroscdkcore.IResource
	// Attribute DownloadUrl: The download url of the export config job.
	AttrDownloadUrl() interface{}
	// Attribute JobId: The ID of the export config job.
	AttrJobId() interface{}
	Props() *ExportConfigJobProps
}

// The jsii proxy for IExportConfigJob
type jsiiProxy_IExportConfigJob struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IExportConfigJob) AttrDownloadUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDownloadUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExportConfigJob) AttrJobId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrJobId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExportConfigJob) Props() *ExportConfigJobProps {
	var returns *ExportConfigJobProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

