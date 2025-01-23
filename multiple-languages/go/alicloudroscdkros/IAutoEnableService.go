package alicloudroscdkros

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/internal"
)

// Represents a `AutoEnableService`.
type IAutoEnableService interface {
	alicloudroscdkcore.IResource
	Props() *AutoEnableServiceProps
}

// The jsii proxy for IAutoEnableService
type jsiiProxy_IAutoEnableService struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAutoEnableService) Props() *AutoEnableServiceProps {
	var returns *AutoEnableServiceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

