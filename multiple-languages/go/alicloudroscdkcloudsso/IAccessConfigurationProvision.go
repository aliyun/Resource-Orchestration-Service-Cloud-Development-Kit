package alicloudroscdkcloudsso

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudsso/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AccessConfigurationProvision`.
type IAccessConfigurationProvision interface {
	alicloudroscdkcore.IResource
	Props() *AccessConfigurationProvisionProps
}

// The jsii proxy for IAccessConfigurationProvision
type jsiiProxy_IAccessConfigurationProvision struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccessConfigurationProvision) Props() *AccessConfigurationProvisionProps {
	var returns *AccessConfigurationProvisionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

