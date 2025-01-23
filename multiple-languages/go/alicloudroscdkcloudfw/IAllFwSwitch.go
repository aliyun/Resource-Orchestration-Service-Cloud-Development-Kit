package alicloudroscdkcloudfw

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudfw/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AllFwSwitch`.
type IAllFwSwitch interface {
	alicloudroscdkcore.IResource
	Props() *AllFwSwitchProps
}

// The jsii proxy for IAllFwSwitch
type jsiiProxy_IAllFwSwitch struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAllFwSwitch) Props() *AllFwSwitchProps {
	var returns *AllFwSwitchProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

