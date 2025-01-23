package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `StageConfig`.
type IStageConfig interface {
	alicloudroscdkcore.IResource
	Props() *StageConfigProps
}

// The jsii proxy for IStageConfig
type jsiiProxy_IStageConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IStageConfig) Props() *StageConfigProps {
	var returns *StageConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

