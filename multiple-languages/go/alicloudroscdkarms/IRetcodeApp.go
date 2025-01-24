package alicloudroscdkarms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `RetcodeApp`.
type IRetcodeApp interface {
	alicloudroscdkcore.IResource
	// Attribute AppId: The ID of the application for which you created the browser monitoring job.
	AttrAppId() interface{}
	// Attribute Pid: The PID.
	AttrPid() interface{}
	Props() *RetcodeAppProps
}

// The jsii proxy for IRetcodeApp
type jsiiProxy_IRetcodeApp struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRetcodeApp) AttrAppId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRetcodeApp) AttrPid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRetcodeApp) Props() *RetcodeAppProps {
	var returns *RetcodeAppProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

