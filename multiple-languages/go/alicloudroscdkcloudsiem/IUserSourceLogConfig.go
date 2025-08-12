package alicloudroscdkcloudsiem

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudsiem/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `UserSourceLogConfig`.
type IUserSourceLogConfig interface {
	alicloudroscdkcore.IResource
	Props() *UserSourceLogConfigProps
}

// The jsii proxy for IUserSourceLogConfig
type jsiiProxy_IUserSourceLogConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUserSourceLogConfig) Props() *UserSourceLogConfigProps {
	var returns *UserSourceLogConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

