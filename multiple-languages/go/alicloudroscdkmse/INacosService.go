package alicloudroscdkmse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmse/internal"
)

// Represents a `NacosService`.
type INacosService interface {
	alicloudroscdkcore.IResource
	Props() *NacosServiceProps
}

// The jsii proxy for INacosService
type jsiiProxy_INacosService struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INacosService) Props() *NacosServiceProps {
	var returns *NacosServiceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

