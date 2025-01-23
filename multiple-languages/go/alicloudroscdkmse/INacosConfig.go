package alicloudroscdkmse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmse/internal"
)

// Represents a `NacosConfig`.
type INacosConfig interface {
	alicloudroscdkcore.IResource
	Props() *NacosConfigProps
}

// The jsii proxy for INacosConfig
type jsiiProxy_INacosConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INacosConfig) Props() *NacosConfigProps {
	var returns *NacosConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

