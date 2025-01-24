package alicloudroscdkiot

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkiot/internal"
)

// Represents a `RuleAction`.
type IRuleAction interface {
	alicloudroscdkcore.IResource
	// Attribute ActionId: The ID of the rule action.
	AttrActionId() interface{}
	Props() *RuleActionProps
}

// The jsii proxy for IRuleAction
type jsiiProxy_IRuleAction struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRuleAction) AttrActionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrActionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRuleAction) Props() *RuleActionProps {
	var returns *RuleActionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

