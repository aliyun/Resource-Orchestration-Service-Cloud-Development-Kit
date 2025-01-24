package alicloudroscdkiot

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkiot/internal"
)

// Represents a `Rule`.
type IRule interface {
	alicloudroscdkcore.IResource
	// Attribute ActionId: The ID of the rule action.
	AttrActionId() interface{}
	// Attribute RuleId: The ID of the rule.
	AttrRuleId() interface{}
	Props() *RuleProps
}

// The jsii proxy for IRule
type jsiiProxy_IRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRule) AttrActionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrActionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) Props() *RuleProps {
	var returns *RuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

