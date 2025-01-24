package alicloudroscdkoos

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/internal"
)

// Represents a `ServiceSettings`.
type IServiceSettings interface {
	alicloudroscdkcore.IResource
	Props() *ServiceSettingsProps
}

// The jsii proxy for IServiceSettings
type jsiiProxy_IServiceSettings struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IServiceSettings) Props() *ServiceSettingsProps {
	var returns *ServiceSettingsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

