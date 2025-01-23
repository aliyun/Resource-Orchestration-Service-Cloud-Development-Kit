package alicloudroscdkeventbridge

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkeventbridge/internal"
)

// Represents a `Rule`.
type IRule interface {
	alicloudroscdkcore.IResource
	// Attribute EventBusName: The name of the event bus.
	AttrEventBusName() interface{}
	// Attribute RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule.
	//
	// The ARN is used for authorization.
	AttrRuleArn() interface{}
	// Attribute RuleName: The name of the event rule.
	AttrRuleName() interface{}
	Props() *RuleProps
}

// The jsii proxy for IRule
type jsiiProxy_IRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRule) AttrEventBusName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEventBusName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrRuleArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
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

