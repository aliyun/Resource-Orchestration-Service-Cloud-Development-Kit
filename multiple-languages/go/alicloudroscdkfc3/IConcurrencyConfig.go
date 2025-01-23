package alicloudroscdkfc3

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc3/internal"
)

// Represents a `ConcurrencyConfig`.
type IConcurrencyConfig interface {
	alicloudroscdkcore.IResource
	Props() *ConcurrencyConfigProps
}

// The jsii proxy for IConcurrencyConfig
type jsiiProxy_IConcurrencyConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IConcurrencyConfig) Props() *ConcurrencyConfigProps {
	var returns *ConcurrencyConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

