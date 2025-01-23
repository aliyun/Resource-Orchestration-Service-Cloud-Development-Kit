package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `ApplyConfigToMachineGroup`.
type IApplyConfigToMachineGroup interface {
	alicloudroscdkcore.IResource
	Props() *ApplyConfigToMachineGroupProps
}

// The jsii proxy for IApplyConfigToMachineGroup
type jsiiProxy_IApplyConfigToMachineGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApplyConfigToMachineGroup) Props() *ApplyConfigToMachineGroupProps {
	var returns *ApplyConfigToMachineGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

