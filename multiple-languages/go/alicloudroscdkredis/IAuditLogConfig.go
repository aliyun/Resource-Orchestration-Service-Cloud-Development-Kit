package alicloudroscdkredis

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkredis/internal"
)

// Represents a `AuditLogConfig`.
type IAuditLogConfig interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceId: IP address whitelist to be modified.
	AttrInstanceId() interface{}
	Props() *AuditLogConfigProps
}

// The jsii proxy for IAuditLogConfig
type jsiiProxy_IAuditLogConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAuditLogConfig) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAuditLogConfig) Props() *AuditLogConfigProps {
	var returns *AuditLogConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

