package alicloudroscdkcdn

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcdn/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `DomainConfig`.
type IDomainConfig interface {
	alicloudroscdkcore.IResource
	Props() *DomainConfigProps
}

// The jsii proxy for IDomainConfig
type jsiiProxy_IDomainConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDomainConfig) Props() *DomainConfigProps {
	var returns *DomainConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

