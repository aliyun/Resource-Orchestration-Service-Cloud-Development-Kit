package alicloudroscdkfc3

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc3/internal"
)

// Represents a `ProvisionConfig`.
type IProvisionConfig interface {
	alicloudroscdkcore.IResource
	Props() *ProvisionConfigProps
}

// The jsii proxy for IProvisionConfig
type jsiiProxy_IProvisionConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IProvisionConfig) Props() *ProvisionConfigProps {
	var returns *ProvisionConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

