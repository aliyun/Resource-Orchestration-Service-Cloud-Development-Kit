package alicloudroscdkwaf

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkwaf/internal"
)

// Represents a `WafSwitch`.
type IWafSwitch interface {
	alicloudroscdkcore.IResource
	Props() *WafSwitchProps
}

// The jsii proxy for IWafSwitch
type jsiiProxy_IWafSwitch struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWafSwitch) Props() *WafSwitchProps {
	var returns *WafSwitchProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

