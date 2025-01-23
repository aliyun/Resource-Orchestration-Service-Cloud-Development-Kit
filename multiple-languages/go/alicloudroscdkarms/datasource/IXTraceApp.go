package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `XTraceApp`.
type IXTraceApp interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The timestamp generated when the task was created.
	AttrCreateTime() interface{}
	// Attribute Pid: The process identifier (PID) of the application.
	AttrPid() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute Tags: The tags of the application.
	AttrTags() interface{}
	// Attribute XTraceAppName: The name of the application.
	AttrXTraceAppName() interface{}
	Props() *XTraceAppProps
}

// The jsii proxy for IXTraceApp
type jsiiProxy_IXTraceApp struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IXTraceApp) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IXTraceApp) AttrPid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IXTraceApp) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IXTraceApp) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IXTraceApp) AttrXTraceAppName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrXTraceAppName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IXTraceApp) Props() *XTraceAppProps {
	var returns *XTraceAppProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

