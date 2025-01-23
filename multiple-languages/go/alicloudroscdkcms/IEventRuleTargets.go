package alicloudroscdkcms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `EventRuleTargets`.
type IEventRuleTargets interface {
	alicloudroscdkcore.IResource
	Props() *EventRuleTargetsProps
}

// The jsii proxy for IEventRuleTargets
type jsiiProxy_IEventRuleTargets struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEventRuleTargets) Props() *EventRuleTargetsProps {
	var returns *EventRuleTargetsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

