package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/datasource/internal"
)

// Represents a `Logstores`.
type ILogstores interface {
	alicloudroscdkcore.IResource
	// Attribute Logstores: The list of logstores.
	AttrLogstores() interface{}
	Props() *LogstoresProps
}

// The jsii proxy for ILogstores
type jsiiProxy_ILogstores struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILogstores) AttrLogstores() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLogstores",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILogstores) Props() *LogstoresProps {
	var returns *LogstoresProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

