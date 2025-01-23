package alicloudroscdkcloudfw

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudfw/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `FwSwitch`.
type IFwSwitch interface {
	alicloudroscdkcore.IResource
	Props() *FwSwitchProps
}

// The jsii proxy for IFwSwitch
type jsiiProxy_IFwSwitch struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFwSwitch) Props() *FwSwitchProps {
	var returns *FwSwitchProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

