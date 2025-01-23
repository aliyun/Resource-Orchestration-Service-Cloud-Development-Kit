package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `LogConfig`.
type ILogConfig interface {
	alicloudroscdkcore.IResource
	// Attribute SlsLogStore: Logstore name of SLS.
	AttrSlsLogStore() interface{}
	// Attribute SlsProject: Project name of SLS.
	AttrSlsProject() interface{}
	Props() *LogConfigProps
}

// The jsii proxy for ILogConfig
type jsiiProxy_ILogConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILogConfig) AttrSlsLogStore() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSlsLogStore",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILogConfig) AttrSlsProject() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSlsProject",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILogConfig) Props() *LogConfigProps {
	var returns *LogConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

