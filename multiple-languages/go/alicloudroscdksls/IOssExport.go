package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `OssExport`.
type IOssExport interface {
	alicloudroscdkcore.IResource
	// Attribute ExportName: The name of the export job.
	AttrExportName() interface{}
	// Attribute ProjectName: The project name of SLS.
	AttrProjectName() interface{}
	Props() *OssExportProps
}

// The jsii proxy for IOssExport
type jsiiProxy_IOssExport struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IOssExport) AttrExportName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExportName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssExport) AttrProjectName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProjectName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssExport) Props() *OssExportProps {
	var returns *OssExportProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

